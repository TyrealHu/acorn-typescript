// @ts-nocheck
import {
  tokTypes,
  keywordTypes,
  isNewLine
} from 'acorn'
import * as charCodes from 'charcodes'
import type { Node, TokenType, Parser as AcornParser } from 'acorn'
import { TypeScriptError } from './error'
import { tsKeywordsRegExp, tsTokenType } from './tokenType'
import { LookaheadState } from './types'
import { BIND_LEXICAL } from './scopeflags'

export const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g

function tokenIsIdentifier(token: TokenType) {
  return token >= tsTokenType.as && token <= tokTypes.name
}

export default function tsPlugin() {
  return function(Parser: typeof AcornParser) {
    return class TypeScriptParser extends Parser {
      isLookahead: boolean = false

      startNodeAtNode(type: Node): Node {
        return super.startNodeAt(type.start, type.loc.start)
      }

      nextTokenStart(): number {
        return this.nextTokenStartSince(this.pos)
      }

      nextTokenStartSince(pos: number): number {
        skipWhiteSpace.lastIndex = pos
        return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos
      }

      lookaheadCharCode(): number {
        return this.input.charCodeAt(this.nextTokenStart())
      }

      /**
       * ts isContextual
       * @param {TokenType} token
       * @returns {boolean}
       * */
      ts_isContextual(token: TokenType): boolean {
        return this.type === token && !this.containsEsc
      }

      /**
       * ts type isContextual
       * @param {TokenType} type
       * @param {TokenType} token
       * @returns {boolean}
       * */
      ts_type_isContextual(type: TokenType, token: TokenType): boolean {
        return type === token && !this.containsEsc
      }

      /**
       * Whether current token matches given type
       *
       * @param {TokenType} type
       * @returns {boolean}
       * @memberof Tokenizer
       */
      match(type: TokenType): boolean {
        return this.type === type
      }

      eatContextual(name: string) {
        if (tsKeywordsRegExp.test(name)) {
          if (this.ts_isContextual(tsTokenType[name])) {
            this.next()
            return true
          }
          return false
        } else {
          super.eatContextual(name)
        }
      }

      tsIsExternalModuleReference(): boolean {
        return (
          this.ts_isContextual(tsTokenType.require) &&
          this.lookaheadCharCode() === charCodes.leftParenthesis
        )
      }

      tsParseExternalModuleReference() {
        const node = this.startNode()
        super.expectContextual('require')
        super.expect(tokTypes.parenL)
        if (!this.match(tokTypes.string)) {
          this.unexpected()
        }
        // For compatibility to estree we cannot call parseLiteral directly here
        node.expression = super.parseExprAtom()
        this.expect(tokTypes.parenR)
        return this.finishNode(node, 'TSExternalModuleReference')
      }

      tsParseEntityName(allowReservedWords: boolean = true): Node {
        let entity = this.parseIdent(allowReservedWords)
        while ( this.eat(tokTypes.dot) ) {
          const node = this.startNodeAtNode(entity)
          node.left = entity
          node.right = this.parseIdent(allowReservedWords)
          entity = this.finishNode(node, 'TSQualifiedName')
        }
        return entity
      }

      tsParseModuleReference(): N.TsModuleReference {
        return this.tsIsExternalModuleReference()
          ? this.tsParseExternalModuleReference()
          : this.tsParseEntityName(/* allowReservedWords */ false)
      }

      tsParseImportEqualsDeclaration(
        node: Undone<N.TsImportEqualsDeclaration>,
        isExport?: boolean
      ): Node {
        node.isExport = isExport || false
        node.id = super.parseIdent()
        super.checkLValSimple(node.id, BIND_LEXICAL)
        super.expect(tokTypes.eq)
        const moduleReference = this.tsParseModuleReference()
        if (
          node.importKind === 'type' &&
          moduleReference.type !== 'TSExternalModuleReference'
        ) {
          this.raise(TypeScriptError.ImportAliasHasImportType, {
            at: moduleReference
          })
        }
        node.moduleReference = moduleReference
        super.semicolon()
        return this.finishNode(node, 'TSImportEqualsDeclaration')
      }

      parseImportSpecifiers() {
        let nodes = [], first = true
        if (this.type === tokTypes.name) {
          // import defaultObj, { x, y as z } from '...'
          let node = super.startNode()
          node.local = super.parseIdent()
          super.checkLValSimple(node.local, BIND_LEXICAL)
          nodes.push(this.finishNode(node, 'ImportDefaultSpecifier'))
          if (!super.eat(tokTypes.comma)) return nodes
        }
        if (this.type === tokTypes.star) {
          let node = super.startNode()
          this.next()
          super.expectContextual('as')
          node.local = super.parseIdent()
          super.checkLValSimple(node.local, BIND_LEXICAL)
          nodes.push(this.finishNode(node, 'ImportNamespaceSpecifier'))
          return nodes
        }
        super.expect(tokTypes.braceL)
        while ( !super.eat(tokTypes.braceR) ) {
          if (!first) {
            super.expect(tokTypes.comma)
            if (super.afterTrailingComma(tokTypes.braceR)) {
              break
            }
          } else {
            first = false
          }

          let node = super.startNode()
          const isMaybeTypeOnly = this.ts_isContextual(tsTokenType.type)
          node.imported = super.parseModuleExportName()
          if (isMaybeTypeOnly) {
            this.parseTypeOnlyImportExportSpecifier(
              node,
              /* isImport */ true,
              node.importKind === 'type'
            )

            nodes.push(this.finishNode(node, 'ImportSpecifier'))
          } else {
            node.importKind = 'value'
            if (super.eatContextual('as')) {
              node.local = this.parseIdent()
            } else {
              super.checkUnreserved(node.imported)
              node.local = node.imported
            }
            super.checkLValSimple(node.local, BIND_LEXICAL)
            nodes.push(this.finishNode(node, 'ImportSpecifier'))
          }
        }
        return nodes
      }

      parseTypeOnlyImportExportSpecifier(
        node: any,
        isImport: boolean,
        isInTypeOnlyImportExport: boolean
      ): void {
        const leftOfAsKey = isImport ? 'imported' : 'local'
        const rightOfAsKey = isImport ? 'local' : 'exported'

        let leftOfAs = node[leftOfAsKey]
        let rightOfAs

        let hasTypeSpecifier = false
        let canParseAsKeyword = true

        const loc = leftOfAs.loc.start

        if (this.ts_isContextual(tsTokenType.as)) {
          // { type as ...? }
          const firstAs = super.parseIdent()
          if (this.isContextual(tsTokenType.as)) {
            // { type as as ...? }
            const secondAs = super.parseIdent()
            if (tokenIsKeywordOrIdentifier(this.state.type)) {
              // { type as as something }
              hasTypeSpecifier = true
              leftOfAs = firstAs
              rightOfAs = isImport
                ? this.parseIdentifier()
                : this.parseModuleExportName()
              canParseAsKeyword = false
            } else {
              // { type as as }
              rightOfAs = secondAs
              canParseAsKeyword = false
            }
          } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
            // { type as something }
            canParseAsKeyword = false
            rightOfAs = isImport
              ? this.parseIdentifier()
              : this.parseModuleExportName()
          } else {
            // { type as }
            hasTypeSpecifier = true
            leftOfAs = firstAs
          }
        } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
          // { type something ...? }
          hasTypeSpecifier = true
          if (isImport) {
            leftOfAs = this.parseIdent(true)
            if (!this.ts_isContextual(tsTokenType.as)) {
              this.checkReservedWord(
                leftOfAs.name,
                leftOfAs.loc.start,
                true,
                true
              )
            }
          } else {
            leftOfAs = this.parseModuleExportName()
          }
        }
        if (hasTypeSpecifier && isInTypeOnlyImportExport) {
          this.raise(
            isImport
              ? TSErrors.TypeModifierIsUsedInTypeImports
              : TSErrors.TypeModifierIsUsedInTypeExports,
            { at: loc }
          )
        }

        node[leftOfAsKey] = leftOfAs
        node[rightOfAsKey] = rightOfAs

        const kindKey = isImport ? 'importKind' : 'exportKind'
        node[kindKey] = hasTypeSpecifier ? 'type' : 'value'

        if (canParseAsKeyword && this.eatContextual(tsTokenType.as)) {
          node[rightOfAsKey] = isImport
            ? this.parseIdent()
            : this.parseModuleExportName()
        }
        if (!node[rightOfAsKey]) {
          node[rightOfAsKey] = cloneIdentifier(node[leftOfAsKey])
        }
        if (isImport) {
          this.checkIdentifier(node[rightOfAsKey], BIND_LEXICAL)
        }
      }

      originParseImport(node: Node) {
        if (this.type === tokTypes.string) {
          node.specifiers = empty
          node.source = this.parseExprAtom()
        } else {
          node.specifiers = this.parseImportSpecifiers()
          super.expectContextual('from')
          node.source = this.type === tokTypes.string ? super.parseExprAtom() : this.unexpected()
        }
        super.semicolon()
        return super.finishNode(node, 'ImportDeclaration')
      }

      /**
       * @param {Node} node this may be ImportDeclaration |
       * TsImportEqualsDeclaration
       * @returns AnyImport
       * */
      parseImport(
        node: any
      ) {
        this.next()
        node.importKind = 'value'
        if (
          tokenIsIdentifier(this.type) ||
          this.match(tokTypes.star) ||
          this.match(tokTypes.braceL)
        ) {
          let ahead = this.lookahead()
          if (
            this.ts_type_isContextual(this.type, tsTokenType.type) &&
            // import type, { a } from "b";
            ahead.type !== tokTypes.comma &&
            // import type from "a";
            ahead.type !== tsTokenType.from &&
            // import type = require("a");
            ahead.type !== tokTypes.eq
          ) {
            node.importKind = 'type'
            this.next()
            ahead = this.lookahead()
          }

          if (tokenIsIdentifier(this.type) && ahead.type === tokTypes.eq) {
            return this.tsParseImportEqualsDeclaration(node)
          }
        }


        const importNode = this.originParseImport(node)

        /*:: invariant(importNode.type !== "TSImportEqualsDeclaration") */

        // `import type` can only be used on imports with named imports or with a
        // default import - but not both
        if (
          importNode.importKind === 'type' &&
          importNode.specifiers.length > 1 &&
          importNode.specifiers[0].type === 'ImportDefaultSpecifier'
        ) {
          this.raise(importNode.start, TypeScriptError.TypeImportCannotSpecifyDefaultAndNamed)
        }

        return importNode
      }

      createLookaheadState() {
        this.value = null
        this.context = [this.curContext()]
      }

      getCurLookaheadState(): LookaheadState {
        return {
          pos: this.pos,
          value: this.value,
          type: this.type,
          start: this.start,
          end: this.end,
          context: this.context,
          startLoc: this.startLoc,
          lastTokEndLoc: this.lastTokEndLoc,
          curLine: this.curLine,
          lineStart: this.lineStart,
          curPosition: this.curPosition
        }
      }

      setLookaheadState(state: LookaheadState) {
        this.pos = state.pos
        this.value = state.value
        this.type = state.type
        this.start = state.start
        this.end = state.end
        this.context = state.context
        this.startLoc = state.startLoc
        this.lastTokEndLoc = state.lastTokEndLoc
        this.curLine = state.curLine
        this.lineStart = state.lineStart
        this.curPosition = state.curPosition
      }

      lookahead(): LookaheadState {
        const oldState = this.getCurLookaheadState()

        this.createLookaheadState()
        this.isLookahead = true

        this.nextToken()

        this.isLookahead = false

        const curState = this.getCurLookaheadState()
        this.setLookaheadState(oldState)
        return curState
      }

      readWord() {
        let word = this.readWord1()
        let type = tokTypes.name

        if (this.keywords.test(word)) {
          type = keywordTypes[word]
        } else if (new RegExp(tsKeywordsRegExp).test(word)) {
          type = tsTokenType[word]
        }

        return this.finishToken(type, word)
      }

      skipBlockComment() {
        let startLoc
        if (!this.isLookahead) startLoc = this.options.onComment && this.curPosition()
        let start = this.pos, end = this.input.indexOf('*/', this.pos += 2)
        if (end === -1) this.raise(this.pos - 2, 'Unterminated comment')
        this.pos = end + 2
        if (this.options.locations) {
          for (let nextBreak, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;) {
            ++this.curLine
            pos = this.lineStart = nextBreak
          }
        }

        if (this.isLookahead) return

        if (this.options.onComment)
          this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
            startLoc, this.curPosition())
      }

      skipLineComment(startSkip) {
        let start = this.pos
        let startLoc
        if (!this.isLookahead) startLoc = this.options.onComment && this.curPosition()
        let ch = this.input.charCodeAt(this.pos += startSkip)
        while ( this.pos < this.input.length && !isNewLine(ch) ) {
          ch = this.input.charCodeAt(++this.pos)
        }

        if (this.isLookahead) return

        if (this.options.onComment)
          this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
            startLoc, this.curPosition())
      }

      finishToken(type, val) {
        this.end = this.pos
        if (this.options.locations) this.endLoc = this.curPosition()
        let prevType = this.type
        this.type = type
        this.value = val

        if (!this.isLookahead) {
          this.updateContext(prevType)
        }
      }

      nextToken() {
        let curContext = this.curContext()
        if (!curContext || !curContext.preserveSpace) this.skipSpace()

        this.start = this.pos
        if (this.options.locations && !this.isLookahead) {
          this.startLoc = this.curPosition()
        }
        if (this.pos >= this.input.length) {
          return this.finishToken(tokTypes.eof)
        }

        if (curContext.override) {
          return curContext.override(this)
        } else {
          this.readToken(this.fullCharCodeAtPos())
        }
      }
    } as typeof AcornParser
  }
}
