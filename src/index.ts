// @ts-nocheck
import {
  tokTypes,
  keywordTypes,
  isNewLine
} from 'acorn'
import type { TokenType, Parser as AcornParser } from 'acorn'
import { TypeScriptError } from './error'
import { tsKeywordsRegExp, tsTokenType } from './tokenType'
import { LookaheadState } from './types'

function tokenIsIdentifier(token: any) {
  return token >= tsTokenType.as && token <= tokTypes.name
}

export default function tsPlugin() {
  return function(Parser: typeof AcornParser) {
    return class TypeScriptParser extends Parser {
      isLookahead: boolean = false

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
            this.next();
            return true;
          }
          return false;
        } else {
          super.eatContextual(name)
        }
      }

      /**
       * @param {Node} node this may be ImportDeclaration |
       * TsImportEqualsDeclaration
       * @returns AnyImport
       * */
      parseImport(
        node: any
      ) {
        node.importKind = 'value'
        if (
          tokenIsIdentifier(this.type) ||
          this.match(tokTypes.star) ||
          this.match(tokTypes.braceL)
        ) {
          let ahead = this.lookahead()
          if (
            this.ts_type_isContextual(ahead.type, tsTokenType.type) &&
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


        const importNode = super.parseImport(node)

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
