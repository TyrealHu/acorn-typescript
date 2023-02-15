import {
  tokTypes,
  // @ts-ignore
  keywordTypes,
  isNewLine,
  tokContexts,
  isIdentifierChar,
  Position,
  lineBreak,
  Options,
  Parser as AcornParser
} from 'acorn'
import * as charCodes from 'charcodes'
import type { Node, TokenType } from 'acorn'
import { tsKeywordsRegExp, tsTokenType, jsxTokenType } from './tokenType'
import {
  Accessibility,
  LookaheadState,
  ModifierBase, ParsingContext,
  TryParse,
  TsModifier
} from './types'
import {
  BIND_LEXICAL,
  BIND_TS_INTERFACE,
  BIND_TS_NAMESPACE,
  BIND_TS_TYPE,
  SCOPE_OTHER, SCOPE_SIMPLE_CATCH,
  SCOPE_TS_MODULE
} from './scopeflags'
import {
  ArrayExpression,
  ArrayPattern,
  ArrowFunctionExpression, BaseNode,
  Class,
  Declaration,
  Expression, FunctionDeclaration,
  Identifier,
  ObjectExpression,
  ObjectPattern,
  Pattern,
  RestElement,
  VariableDeclarator
} from 'estree'
import { skipWhiteSpaceToLineBreak } from './whitespace'
import {
  checkKeyName,
  DestructuringErrors,
  isPrivateNameConflicted
} from './parseutil'
import { TypeScriptError } from './error'

export const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g

function assert(x: boolean): void {
  if (!x) {
    throw new Error('Assert fail')
  }
}

function nextLineBreak(code, from, end = code.length) {
  for (let i = from; i < end; i++) {
    let next = code.charCodeAt(i)
    if (isNewLine(next))
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1
  }
  return -1
}

function tsIsVarianceAnnotations(
  modifier: string
): any {
  return modifier === 'in' || modifier === 'out'
}

// @ts-ignore
const FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4

const acornScope = {
  SCOPE_TOP: 1,
  SCOPE_FUNCTION: 2,
  SCOPE_ASYNC: 4,
  SCOPE_GENERATOR: 8,
  SCOPE_ARROW: 16,
  SCOPE_SIMPLE_CATCH: 32,
  SCOPE_SUPER: 64,
  SCOPE_DIRECT_SUPER: 128,
  SCOPE_CLASS_STATIC_BLOCK: 256,
  SCOPE_VAR: 256,
  BIND_NONE: 0, // Not a binding
  BIND_VAR: 1, // Var-style binding
  BIND_LEXICAL: 2, // Let- or const-style binding
  BIND_FUNCTION: 3, // Function declaration
  BIND_SIMPLE_CATCH: 4, // Simple (identifier pattern) catch binding
  BIND_OUTSIDE: 5 // Special case for function names as bound inside the
  // function
}

function functionFlags(async, generator) {
  return acornScope.SCOPE_FUNCTION | (async ? acornScope.SCOPE_ASYNC : 0) | (generator ? acornScope.SCOPE_GENERATOR : 0)
}

function isPossiblyLiteralEnum(expression: Expression): boolean {
  if (expression.type !== 'MemberExpression') return false

  const { computed, property } = expression

  if (
    computed &&
    // property.type !== 'StringLiteral' &&
    (property.type !== 'TemplateLiteral' || property.expressions.length > 0)
  ) {
    return false
  }

  // @ts-ignore
  return isUncomputedMemberExpressionChain(expression.object)
}

function isUncomputedMemberExpressionChain(expression: Expression): boolean {
  if (expression.type === 'Identifier') return true
  if (expression.type !== 'MemberExpression') return false
  if (expression.computed) return false

  // @ts-ignore
  return isUncomputedMemberExpressionChain(expression.object)
}

function tsIsAccessModifier(modifier: string): modifier is Accessibility {
  return (
    modifier === 'private' || modifier === 'public' || modifier === 'protected'
  )
}

export function tokenCanStartExpression(token: TokenType): boolean {
  return Boolean(token.startsExpr)
}

function nonNull<T>(x?: T | null): T {
  if (x == null) {
    throw new Error(`Unexpected ${x} value.`)
  }
  return x
}

// Doesn't handle "void" or "null" because those are keywords, not identifiers.
// It also doesn't handle "intrinsic", since usually it's not a keyword.
function keywordTypeFromName(
  value: string
): Node | typeof undefined {
  switch (value) {
    case 'any':
      return 'TSAnyKeyword'
    case 'boolean':
      return 'TSBooleanKeyword'
    case 'bigint':
      return 'TSBigIntKeyword'
    case 'never':
      return 'TSNeverKeyword'
    case 'number':
      return 'TSNumberKeyword'
    case 'object':
      return 'TSObjectKeyword'
    case 'string':
      return 'TSStringKeyword'
    case 'symbol':
      return 'TSSymbolKeyword'
    case 'undefined':
      return 'TSUndefinedKeyword'
    case 'unknown':
      return 'TSUnknownKeyword'
    default:
      return undefined
  }
}

function tokenIsLiteralPropertyName(token: TokenType): boolean {
  return [
    ...[tokTypes.name, tokTypes.string, tokTypes.num],
    ...Object.values(keywordTypes),
    ...Object.values(tsTokenType)
  ].includes(token)
}

function tokenIsKeywordOrIdentifier(token: TokenType): boolean {
  return [
    ...[tokTypes.name],
    ...Object.values(keywordTypes),
    ...Object.values(tsTokenType)
  ].includes(token)
}

function tokenIsIdentifier(token: TokenType): boolean {
  return [...Object.values(tsTokenType), tokTypes.name].includes(token)
}

function tokenIsTSDeclarationStart(token: TokenType): boolean {
  return [
    tsTokenType.abstract,
    tsTokenType.declare,
    tsTokenType.enum,
    tsTokenType.module,
    tsTokenType.namespace,
    tsTokenType.interface,
    tsTokenType.type
  ].includes(token)
}

export function tokenIsTSTypeOperator(token: TokenType): boolean {
  return [
    tsTokenType.keyof,
    tsTokenType.readonly,
    tsTokenType.unique
  ].includes(token)
}

export function tokenIsTemplate(token: TokenType): boolean {
  return token === tokTypes.invalidTemplate
}

export default function tsPlugin(options?: {
  // default false
  dts?: boolean
  // default false
  // todo arrow in the next version
  // disallowAmbiguousJSXLike?: boolean
}) {
  const { dts = false } = options || {}
  const disallowAmbiguousJSXLike = false
  return function(Parser: typeof AcornParser) {
    return class TypeScriptParser extends Parser {
      preValue: any = null
      preToken: any = null
      isLookahead: boolean = false
      isAmbientContext: boolean = false
      inAbstractClass: boolean = false
      inType: boolean = false
      inDisallowConditionalTypesContext: boolean = false
      maybeInArrowParameters: boolean = false
      canStartJSXElement: boolean = false

      constructor(options: Options, input: string, startPos?: number) {
        super(options, input, startPos)
      }

      getTokenFromCode(code: number): void {
        if (this.inType) {
          if (code === charCodes.greaterThan) {
            // @ts-ignore
            return this.finishOp(tokTypes.relational, 1)
          }
          if (code === charCodes.lessThan) {
            // @ts-ignore
            return this.finishOp(tokTypes.relational, 1)
          }
        }
        // @ts-ignore
        return super.getTokenFromCode(code)
      }

      isAbstractClass(): boolean {
        return (
          this.ts_isContextual(tsTokenType.abstract) && this.lookahead().type === tokTypes._class
        )
      }

      finishNode(node, type: string) {
        if (node.type !== '' && node.end !== 0) {
          return node
        }

        return super.finishNode(node, type)
      }

      // tryParse will clone parser state.
      // It is expensive and should be used with cautions
      tryParse<T extends Node | ReadonlyArray<Node>>(
        fn: (abort: (node?: T) => never) => T,
        oldState: LookaheadState = this.cloneCurLookaheadState()
      ):
        | TryParse<T, null, false, false, null>
        | TryParse<T | null, SyntaxError, boolean, false, LookaheadState>
        | TryParse<T | null, null, false, true, LookaheadState> {
        const abortSignal: {
          node: T | null;
        } = { node: null }
        try {
          const node = fn((node = null) => {
            abortSignal.node = node
            throw abortSignal
          })

          // todo we will throw error and exit the process
          // if (this.state.errors.length > oldState.errors.length) {
          //   const failState = this.state;
          //   this.state = oldState;
          //   // tokensLength should be preserved during error recovery mode
          //   // since the parser does not halt and will instead parse the
          //   // remaining tokens
          //   this.state.tokensLength = failState.tokensLength;
          //   return {
          //     node,
          //     error: failState.errors[oldState.errors.length] as ParseError<any>,
          //     thrown: false,
          //     aborted: false,
          //     failState,
          //   };
          // }

          return {
            node,
            error: null,
            thrown: false,
            aborted: false,
            failState: null
          }
        } catch (error) {
          const failState = this.getCurLookaheadState()
          this.setLookaheadState(oldState)
          if (error instanceof SyntaxError) {
            return {
              node: null,
              error,
              thrown: true,
              aborted: false,
              failState
            }
          }
          if (error === abortSignal) {
            return {
              node: abortSignal.node,
              error: null,
              thrown: false,
              aborted: true,
              failState
            }
          }

          throw error
        }
      }

      setOptionalParametersError(
        refExpressionErrors: any,
        resultError?: any
      ) {
        refExpressionErrors.optionalParametersLoc =

          resultError?.loc ?? this['startLoc']
      }

      // used after we have finished parsing types
      reScan_lt_gt() {
        const { type } = this
        if (type === tokTypes.relational) {
          this['pos'] -= 1
          // @ts-ignore
          this.readToken_lt_gt(this.fullCharCodeAtPos())
        }
      }

      reScan_lt() {
        const { type } = this
        if (type === tokTypes.bitShift) {
          this['pos'] -= 2
          // @ts-ignore
          this.finishOp(tokTypes.relational, 1)
          return tokTypes.relational
        }
        return type
      }

      resetEndLocation(
        node: any,
        endLoc: Position = this['lastTokEndLoc']
      ): void {
        node.end = endLoc.column
        node.loc.end = endLoc
        if (this.options.ranges) node.range[1] = endLoc.column
      }

      startNodeAtNode(type: Node): Node {
        // @ts-ignore
        return super.startNodeAt(type.start, type.loc.start)
      }

      nextTokenStart(): number {
        return this.nextTokenStartSince(this['pos'])
      }

      tsHasSomeModifiers(member: any, modifiers: readonly TsModifier[]): boolean {
        return modifiers.some(modifier => {
          if (tsIsAccessModifier(modifier)) {
            return member.accessibility === modifier
          }
          return !!member[modifier]
        })
      }

      tsIsStartOfStaticBlocks() {
        return (
          this.ts_isContextual(tsTokenType.static) &&
          this.lookaheadCharCode() === charCodes.leftCurlyBrace
        )
      }

      tsCheckForInvalidTypeCasts(items: Array<Expression | undefined | null | any>) {
        items.forEach(node => {
          if (node?.type === 'TSTypeCastExpression') {
            this.raise(node.typeAnnotation.start, TypeScriptError.UnexpectedTypeAnnotation)
          }
        })
      }

      atPossibleAsyncArrow(base: Expression): boolean {
        return (
          base.type === 'Identifier' &&
          base.name === 'async' &&
          // @ts-ignore
          this['lastTokEndLoc'].column === base.end &&
          // @ts-ignore
          !this.canInsertSemicolon() &&
          // check there are no escape sequences, such as \u{61}sync
          // @ts-ignore
          base.end - base.start === 5 &&
          // @ts-ignore
          base.start === this['potentialArrowAt']
        )
      }

      tsIsIdentifier(): boolean {
        // TODO: actually a bit more complex in TypeScript, but shouldn't matter.
        // See https://github.com/Microsoft/TypeScript/issues/15008
        return tokenIsIdentifier(this.type)
      }

      tsTryParseTypeOrTypePredicateAnnotation() {
        return this.match(tokTypes.colon)
          ? this.tsParseTypeOrTypePredicateAnnotation(tokTypes.colon)
          : undefined
      }

      tsTryParseGenericAsyncArrowFunction(
        startPos: number,
        startLoc: Position,
        forInit: boolean
      ): ArrowFunctionExpression | undefined | null {
        if (!this.match(tokTypes.relational)) {
          return undefined
        }

        const oldMaybeInArrowParameters = this.maybeInArrowParameters
        this.maybeInArrowParameters = true

        const res = this.tsTryParseAndCatch(() => {
          // @ts-ignore
          const node = this.startNodeAt(
            startPos,
            startLoc
          )
          node.typeParameters = this.tsParseTypeParameters()
          // Don't use overloaded parseFunctionParams which would look for "<" again.
          // @ts-ignore
          super.parseFunctionParams(node)
          node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation()
          // @ts-ignore
          this.expect(tokTypes.arrow)
          return node
        })

        this.maybeInArrowParameters = oldMaybeInArrowParameters

        if (!res) {
          return undefined
        }

        // @ts-ignore
        return super.parseArrowExpression(
          res,
          /* params are already set */ null,
          /* async */ true,
          /* forInit */forInit
        )
      }

      // Used when parsing type arguments from ES productions, where the first token
      // has been created without state.inType. Thus we need to rescan the lt token.
      tsParseTypeArgumentsInExpression(): Node | void {
        if (this.reScan_lt() !== tokTypes.relational) {
          return undefined
        }
        return this.tsParseTypeArguments()
      }

      tsInNoContext<T>(cb: () => T): T {
        const oldContext = this['context']
        this['context'] = [oldContext[0]]
        try {
          return cb()
        } finally {
          this['context'] = oldContext
        }
      }

      tsTryParseTypeAnnotation(): Node | undefined | null {
        return this.match(tokTypes.colon) ? this.tsParseTypeAnnotation() : undefined
      }

      isUnparsedContextual(nameStart: number, name: string): boolean {
        const nameEnd = nameStart + name.length
        if (this.input.slice(nameStart, nameEnd) === name) {
          const nextCh = this.input.charCodeAt(nameEnd)
          return !(
            isIdentifierChar(nextCh) ||
            // check if `nextCh is between 0xd800 - 0xdbff,
            // if `nextCh` is NaN, `NaN & 0xfc00` is 0, the function
            // returns true
            (nextCh & 0xfc00) === 0xd800
          )
        }
        return false
      }

      isAbstractConstructorSignature(): boolean {
        return (
          this.ts_isContextual(tsTokenType.abstract) && this.lookahead().type === tokTypes._new
        )
      }

      nextTokenStartSince(pos: number): number {
        skipWhiteSpace.lastIndex = pos
        return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos
      }

      lookaheadCharCode(): number {
        return this.input.charCodeAt(this.nextTokenStart())
      }

      compareLookaheadState(state: LookaheadState, state2: LookaheadState): boolean {
        for (const key of Object.keys(state)) {
          if (state[key] !== state2[key]) return false
        }

        return true
      }

      createLookaheadState() {
        this['value'] = null
        // @ts-ignore
        this['context'] = [this.curContext()]
      }

      getCurLookaheadState(): LookaheadState {
        return {
          pos: this['pos'],
          value: this['value'],
          type: this.type,
          start: this.start,
          end: this.end,
          context: this['context'],
          startLoc: this['startLoc'],
          lastTokEndLoc: this['lastTokEndLoc'],
          curLine: this.curLine,
          lineStart: this.lineStart,
          // @ts-ignore
          curPosition: this.curPosition
        }
      }

      cloneCurLookaheadState(): LookaheadState {
        return {
          // number
          pos: this['pos'],
          // str
          value: this['value'],
          // type
          type: this.type,
          // number
          start: this.start,
          // number
          end: this.end,
          // array
          context: this['context'] && this['context'].slice(),
          // Position
          startLoc: this['startLoc'],
          // Position
          lastTokEndLoc: this['lastTokEndLoc'],
          // number
          curLine: this.curLine,
          // number
          lineStart: this.lineStart,
          // Position
          // @ts-ignore
          curPosition: this.curPosition
        }
      }

      setLookaheadState(state: LookaheadState) {
        this['pos'] = state.pos
        this['value'] = state.value
        this.type = state.type
        this.start = state.start
        this.end = state.end
        this['context'] = state.context
        this['startLoc'] = state.startLoc
        this['lastTokEndLoc'] = state.lastTokEndLoc
        this.curLine = state.curLine
        this.lineStart = state.lineStart
        // @ts-ignore
        this.curPosition = state.curPosition
      }

      // Utilities

      tsLookAhead<T>(f: () => T): T {
        const state = this.getCurLookaheadState()
        const res = f()
        this.setLookaheadState(state)
        return res
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
        // @ts-ignore
        let word = this.readWord1()
        let type = tokTypes.name

        if (this['keywords'].test(word)) {
          type = keywordTypes[word]
        } else if (new RegExp(tsKeywordsRegExp).test(word)) {
          type = tsTokenType[word]
        }

        return this.finishToken(type, word)
      }

      skipBlockComment() {
        let startLoc
        // @ts-ignore
        if (!this.isLookahead) startLoc = this.options.onComment && this.curPosition()
        let start = this['pos'],
          end = this.input.indexOf('*/', this['pos'] += 2)
        if (end === -1) this.raise(this['pos'] - 2, 'Unterminated comment')
        this['pos'] = end + 2
        if (this.options.locations) {
          for (let nextBreak, pos = start; (nextBreak = nextLineBreak(this.input, pos, this['pos'])) > -1;) {
            ++this.curLine
            pos = this.lineStart = nextBreak
          }
        }

        if (this.isLookahead) return

        if (this.options.onComment)
          // @ts-ignore
          this.options.onComment(true, this.input.slice(start + 2, end), start, this['pos'],
            // @ts-ignore
            startLoc, this.curPosition())
      }

      skipLineComment(startSkip) {
        let start = this['pos']
        let startLoc
        // @ts-ignore
        if (!this.isLookahead) startLoc = this.options.onComment && this.curPosition()
        let ch = this.input.charCodeAt(this['pos'] += startSkip)
        while (this['pos'] < this.input.length && !isNewLine(ch)) {
          ch = this.input.charCodeAt(++this['pos'])
        }

        if (this.isLookahead) return

        if (this.options.onComment)
          // @ts-ignore
          this.options.onComment(false, this.input.slice(start + startSkip, this['pos']), start, this['pos'],
            // @ts-ignore
            startLoc, this.curPosition())
      }

      finishToken(type: TokenType, val?: string) {
        this.preValue = this['value']
        this.preToken = this.type

        this.end = this['pos']
        // @ts-ignore
        if (this.options.locations) this.endLoc = this.curPosition()
        let prevType = this.type
        this.type = type
        this['value'] = val

        if (!this.isLookahead) {
          // @ts-ignore
          this.updateContext(prevType)
        }
      }

      resetStartLocation(node: Node, start: number, startLoc: Position): void {
        node.start = start
        node.loc.start = startLoc
        if (this.options.ranges) node.range[0] = start
      }

      isLineTerminator(): boolean {
        // @ts-ignore
        return this.eat(tokTypes.semi) || super.canInsertSemicolon()
      }

      hasFollowingLineBreak(): boolean {
        skipWhiteSpaceToLineBreak.lastIndex = this.end
        return skipWhiteSpaceToLineBreak.test(this.input)
      }

      addExtra(
        node: Partial<Node>,
        key: string,
        value: any,
        enumerable: boolean = true
      ): void {
        if (!node) return
        // @ts-ignore
        const extra = (node.extra = node.extra || {})
        if (enumerable) {
          extra[key] = value
        } else {
          Object.defineProperty(extra, key, { enumerable, value })
        }
      }

      /**
       * Test if current token is a literal property name
       * https://tc39.es/ecma262/#prod-LiteralPropertyName
       * LiteralPropertyName:
       *   IdentifierName
       *   StringLiteral
       *   NumericLiteral
       *   BigIntLiteral
       */
      isLiteralPropertyName(): boolean {
        return tokenIsLiteralPropertyName(this.type)
      }

      hasPrecedingLineBreak(): boolean {
        return lineBreak.test(
          this.input.slice(this['lastTokEndLoc']['index'], this.start)
        )
      }

      createIdentifier(
        node: Omit<Identifier, 'type'>,
        name: string
      ): Identifier {
        node.name = name
        // @ts-ignore
        return this.finishNode(node, 'Identifier')
      }

      /**
       * Reset the start location of node to the start location of locationNode
       */
      resetStartLocationFromNode(node: Node, locationNode: Node): void {
        this.resetStartLocation(node, locationNode.start, locationNode.loc.start)
      }

      // This is used in flow and typescript plugin
      // Determine whether a parameter is a this param
      isThisParam(
        param: Pattern | Identifier
      ): boolean {
        return param.type === 'Identifier' && param.name === 'this'
      }

      isLookaheadContextual(name: string): boolean {
        const next = this.nextTokenStart()
        return this.isUnparsedContextual(next, name)
      }

      /**
       * ts isContextual
       * @param {TokenType} token
       * @returns {boolean}
       * */
      ts_isContextual(token: TokenType): boolean {
        return this.type === token && !this['containsEsc']
      }

      isContextual(keyword: string): boolean {
        switch (keyword) {
          case 'let': {
            return this.ts_isContextual(tsTokenType.let)
          }
          default: {
            // @ts-ignore
            return super.isContextual(keyword)
          }
        }
      }

      tsIsStartOfMappedType(): boolean {
        this.next()
        // @ts-ignore
        if (this.eat(tokTypes.plusMin)) {
          return this.ts_isContextual(tsTokenType.readonly)
        }
        if (this.ts_isContextual(tsTokenType.readonly)) {
          this.next()
        }
        if (!this.match(tokTypes.bracketL)) {
          return false
        }
        this.next()
        if (!this.tsIsIdentifier()) {
          return false
        }
        this.next()
        return this.match(tokTypes._in)
      }

      tsInDisallowConditionalTypesContext<T>(cb: () => T): T {
        const oldInDisallowConditionalTypesContext =
          this.inDisallowConditionalTypesContext
        this.inDisallowConditionalTypesContext = true
        try {
          return cb()
        } finally {
          this.inDisallowConditionalTypesContext =
            oldInDisallowConditionalTypesContext
        }
      }

      /**
       * ts type isContextual
       * @param {TokenType} type
       * @param {TokenType} token
       * @returns {boolean}
       * */
      ts_type_isContextual(type: TokenType, token: TokenType): boolean {
        return type === token && !this['containsEsc']
      }

      tsTryParseType(): Node | undefined | null {
        return this.tsEatThenParseType(tokTypes.colon)
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
          // @ts-ignore
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
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        this.expectContextual('require')
        // @ts-ignore
        this.expect(tokTypes.parenL)
        if (!this.match(tokTypes.string)) {
          // @ts-ignore
          this.unexpected()
        }
        // For compatibility to estree we cannot call parseLiteral directly here
        node.expression = this.parseExprAtom()
        // @ts-ignore
        this.expect(tokTypes.parenR)
        return this.finishNode(node, 'TSExternalModuleReference')
      }

      tsParseEntityName(allowReservedWords: boolean = true): Node {
        // @ts-ignore
        let entity = this.parseIdent(allowReservedWords)
        // @ts-ignore
        while (this.eat(tokTypes.dot)) {
          const node = this.startNodeAtNode(entity)
          // @ts-ignore
          node.left = entity
          // @ts-ignore
          node.right = this.parseIdent(allowReservedWords)
          entity = this.finishNode(node, 'TSQualifiedName')
        }
        return entity
      }

      tsParseEnumMember(): Node {
        // @ts-ignore
        const node = this.startNode()
        // Computed property names are grammar errors in an enum, so accept just string literal or identifier.
        node.id = this.match(tokTypes.string)
          // @ts-ignore
          ? this.parseLiteral(this['value'])
          // @ts-ignore
          : this.parseIdent(/* liberal */ true)
        // @ts-ignore
        if (this.eat(tokTypes.eq)) {
          node.initializer = this.parseMaybeAssign()
        }
        return this.finishNode(node, 'TSEnumMember')
      }

      tsParseEnumDeclaration(
        node: Node,
        properties: {
          const?: true;
          declare?: true;
        } = {}
      ): Node {
        // @ts-ignore
        if (properties.const) node.const = true
        // @ts-ignore
        if (properties.declare) node.declare = true
        // @ts-ignore
        this.expectContextual('enum')
        // @ts-ignore
        node.id = this.parseIdent()
        // @ts-ignore
        this.checkLValSimple(node.id)

        // @ts-ignore
        this.expect(tokTypes.braceL)
        // @ts-ignore
        node.members = this.tsParseDelimitedList(
          'EnumMembers',
          this.tsParseEnumMember.bind(this)
        )
        // @ts-ignore
        this.expect(tokTypes.braceR)
        return this.finishNode(node, 'TSEnumDeclaration')
      }

      tsParseModuleBlock(): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        super.enterScope(SCOPE_OTHER)
        // @ts-ignore
        this.expect(tokTypes.braceL)
        // Inside of a module block is considered "top-level", meaning it can have imports and exports.
        node.body = []
        while (this.type !== tokTypes.braceR) {
          let stmt = this.parseStatement(null, true)
          node.body.push(stmt)
        }
        this.next()
        // @ts-ignore
        super.exitScope()
        return this.finishNode(node, 'TSModuleBlock')
      }

      tsParseAmbientExternalModuleDeclaration(
        node: Node
      ): any {
        if (this.ts_isContextual(tsTokenType.global)) {
          // @ts-ignore
          node.global = true
          // @ts-ignore
          node.id = this.parseIdent()
        } else if (this.match(tokTypes.string)) {
          // @ts-ignore
          node.id = this.parseLiteral(this['value'])
        } else {
          // @ts-ignore
          this.unexpected()
        }
        if (this.match(tokTypes.braceL)) {
          // @ts-ignore
          super.enterScope(SCOPE_TS_MODULE)
          // @ts-ignore
          node.body = this.tsParseModuleBlock()
          // @ts-ignore
          super.exitScope()
        } else {
          // @ts-ignore
          super.semicolon()
        }

        return this.finishNode(node, 'TSModuleDeclaration')
      }

      tsTryParseDeclare(nany: any): Declaration | undefined | null {
        if (this.isLineTerminator()) {
          return
        }
        let starttype = this.type
        let kind: 'let' | null

        if (this.ts_isContextual(tsTokenType.let)) {
          starttype = tokTypes._var
          kind = 'let' as const
        }

        return this.tsInAmbientContext(() => {
          if (starttype === tokTypes._function) {
            nany.declare = true
            // @ts-ignore
            return this.parseFunctionStatement(
              nany,
              /* async */ false,
              /* declarationPosition */ true
            )
          }

          if (starttype === tokTypes._class) {
            // While this is also set by tsParseExpressionStatement, we need to set it
            // before parsing the class declaration to know how to register it in the scope.
            nany.declare = true
            return this.parseClass(nany, true)
          }

          if (starttype === tsTokenType.enum) {
            return this.tsParseEnumDeclaration(nany, { declare: true })
          }

          if (starttype === tsTokenType.global) {
            return this.tsParseAmbientExternalModuleDeclaration(nany)
          }

          if (starttype === tokTypes._const || starttype === tokTypes._var) {
            if (!this.match(tokTypes._const) || !this.isLookaheadContextual('enum')) {
              nany.declare = true
              return this.parseVarStatement(nany, kind || this['value'], true)
            }

            // `const enum = 0;` not allowed because "enum" is a strict mode reserved word.
            // @ts-ignore
            this.expect(tokTypes._const)
            return this.tsParseEnumDeclaration(nany, {
              const: true,
              declare: true
            })
          }

          if (starttype === tsTokenType.interface) {
            const result = this.tsParseInterfaceDeclaration(nany, {
              declare: true
            })
            if (result) return result
          }

          if (tokenIsIdentifier(starttype)) {
            return this.tsParseDeclaration(
              nany,
              this['value'],
              /* next */ true
            )
          }
        })
      }

      tsIsListTerminator(kind: any): boolean {
        switch (kind) {
          case 'EnumMembers':
          case 'TypeMembers':
            return this.match(tokTypes.braceR)
          case 'HeritageClauseElement':
            return this.match(tokTypes.braceL)
          case 'TupleElementTypes':
            return this.match(tokTypes.bracketR)
          case 'TypeParametersOrArguments':
            return this.match(tokTypes.relational)
        }

        throw new Error('Unreachable')
      }

      /**
       * If !expectSuccess, returns undefined instead of failing to parse.
       * If expectSuccess, parseElement should always return a defined value.
       */
      tsParseDelimitedListWorker<T extends Node>(
        kind: any,
        parseElement: () => T | undefined | null,
        expectSuccess: boolean,
        refTrailingCommaPos?: {
          value: number;
        }
      ): T[] | undefined | null {
        const result = []
        let trailingCommaPos = -1

        for (; ;) {
          if (this.tsIsListTerminator(kind)) {
            break
          }
          trailingCommaPos = -1

          const element = parseElement()
          if (element == null) {
            return undefined
          }
          result.push(element)
          // @ts-ignore
          if (this.eat(tokTypes.comma)) {
            trailingCommaPos = this['lastTokStart']
            continue
          }

          if (this.tsIsListTerminator(kind)) {
            break
          }

          if (expectSuccess) {
            // This will fail with an error about a missing comma
            // @ts-ignore
            this.expect(tokTypes.comma)
          }
          return undefined
        }

        if (refTrailingCommaPos) {
          refTrailingCommaPos.value = trailingCommaPos
        }

        return result
      }

      tsParseDelimitedList<T extends Node>(
        kind: any,
        parseElement: () => T,
        refTrailingCommaPos?: {
          value: number;
        }
      ): T[] {
        return nonNull(
          this.tsParseDelimitedListWorker(
            kind,
            parseElement,
            /* expectSuccess */ true,
            refTrailingCommaPos
          )
        )
      }

      tsParseBracketedList<T extends Node>(
        kind: any,
        parseElement: () => T,
        bracket: boolean,
        skipFirstToken: boolean,
        refTrailingCommaPos?: {
          value: number;
        }
      ): T[] {
        if (!skipFirstToken) {
          if (bracket) {
            // @ts-ignore
            this.expect(tokTypes.bracketL)
          } else {
            // @ts-ignore
            this.expect(tokTypes.relational)
          }
        }

        const result = this.tsParseDelimitedList(
          kind,
          parseElement,
          refTrailingCommaPos
        )

        if (bracket) {
          // @ts-ignore
          this.expect(tokTypes.bracketR)
        } else {
          // @ts-ignore
          this.expect(tokTypes.relational)
        }

        return result
      }

      tsParseTypeParameterName(): Identifier | string {
        // @ts-ignore
        const typeName = this.parseIdent()
        return typeName.name
      }

      tsEatThenParseType(token: TokenType): Node | typeof undefined {
        return !this.match(token) ? undefined : this.tsNextThenParseType()
      }

      tsExpectThenParseType(token: TokenType): Node {
        // @ts-ignore
        return this.tsDoThenParseType(() => this.expect(token))
      }

      tsNextThenParseType(): Node {
        return this.tsDoThenParseType(() => this.next())
      }

      tsDoThenParseType(cb: () => void): Node {
        return this.tsInType(() => {
          cb()
          return this.tsParseType()
        })
      }

      tsSkipParameterStart(): boolean {
        if (tokenIsIdentifier(this.type) || this.match(tokTypes._this)) {
          this.next()
          return true
        }

        if (this.match(tokTypes.braceL)) {
          // Return true if we can parse an object pattern without errors
          try {
            // @ts-ignore
            this.parseObj(true)
            return true
          } catch {
            return false
          }
        }

        if (this.match(tokTypes.bracketL)) {
          this.next()
          try {
            // @ts-ignore
            this.parseBindingList(
              tokTypes.bracketR,
              true,
              true
            )
            return true
          } catch {
            return false
          }
        }

        return false
      }

      tsIsUnambiguouslyStartOfFunctionType(): boolean {
        this.next()
        if (this.match(tokTypes.parenR) || this.match(tokTypes.ellipsis)) {
          // ( )
          // ( ...
          return true
        }
        if (this.tsSkipParameterStart()) {
          if (
            this.match(tokTypes.colon) ||
            this.match(tokTypes.comma) ||
            this.match(tokTypes.question) ||
            this.match(tokTypes.eq)
          ) {
            // ( xxx :
            // ( xxx ,
            // ( xxx ?
            // ( xxx =
            return true
          }
          if (this.match(tokTypes.parenR)) {
            this.next()
            if (this.match(tokTypes.arrow)) {
              // ( xxx ) =>
              return true
            }
          }
        }
        return false
      }

      tsIsStartOfFunctionType() {
        if (this.match(tokTypes.relational)) {
          return true
        }
        return (
          this.match(tokTypes.parenL) &&
          this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))
        )
      }

      tsInAllowConditionalTypesContext<T>(cb: () => T): T {
        const oldInDisallowConditionalTypesContext =
          this.inDisallowConditionalTypesContext
        this.inDisallowConditionalTypesContext = false
        try {
          return cb()
        } finally {
          this.inDisallowConditionalTypesContext =
            oldInDisallowConditionalTypesContext
        }
      }

      tsParseBindingListForSignature(): Array<Identifier | RestElement | ObjectPattern | ArrayPattern> {
        // @ts-ignore
        return super.parseBindingList(tokTypes.parenR, true, true)
          .map(pattern => {
            if (
              pattern.type !== 'Identifier' &&
              pattern.type !== 'RestElement' &&
              pattern.type !== 'ObjectPattern' &&
              pattern.type !== 'ArrayPattern'
            ) {
              this.raise(pattern.loc.start, TypeScriptError.UnsupportedSignatureParameterKind(pattern.type))
            }
            return pattern as any
          })
      }

      tsParseTypePredicateAsserts(): boolean {
        if (this.type !== tsTokenType.asserts) {
          return false
        }
        const containsEsc = this['containsEsc']
        this.next()
        if (!tokenIsIdentifier(this.type) && !this.match(tokTypes._this)) {
          return false
        }

        if (containsEsc) {
          this.raise(this['lastTokStart'], 'Escape sequence in keyword'
            + ' asserts')
        }

        return true
      }

      tsParseThisTypeNode() {
        // @ts-ignore
        const node = this.startNode()
        this.next()
        return this.finishNode(node, 'TSThisType')
      }

      tsParseTypeAnnotation(
        eatColon = true,
        // @ts-ignore
        t: Node = this.startNode()
      ): Node {
        this.tsInType(() => {
          // @ts-ignore
          if (eatColon) this.expect(tokTypes.colon)
          // @ts-ignore
          t.typeAnnotation = this.tsParseType()
        })
        return this.finishNode(t, 'TSTypeAnnotation')
      }

      tsParseThisTypePredicate(lhs: any) {
        this.next()
        const node = this.startNodeAtNode(lhs)
        // @ts-ignore
        node.parameterName = lhs
        // @ts-ignore
        node.typeAnnotation = this.tsParseTypeAnnotation(/* eatColon */ false)
        // @ts-ignore
        node.asserts = false
        return this.finishNode(node, 'TSTypePredicate')
      }

      tsParseThisTypeOrThisTypePredicate(): Node {
        const thisKeyword = this.tsParseThisTypeNode()
        if (this.ts_isContextual(tsTokenType.is) && !this.hasPrecedingLineBreak()) {
          return this.tsParseThisTypePredicate(thisKeyword)
        } else {
          return thisKeyword
        }
      }

      tsParseTypePredicatePrefix(): Identifier | undefined | null {
        // @ts-ignore
        const id = this.parseIdent()
        if (this.ts_isContextual(tsTokenType.is) && !this.hasPrecedingLineBreak()) {
          this.next()
          return id
        }
      }

      tsParseTypeOrTypePredicateAnnotation(
        returnToken: TokenType
      ): Node {
        return this.tsInType(() => {
          // @ts-ignore
          const t = this.startNode()
          // @ts-ignore
          this.expect(returnToken)
          // @ts-ignore
          const node = this.startNode()

          const asserts = !!this.tsTryParse(
            this.tsParseTypePredicateAsserts.bind(this)
          )

          if (asserts && this.match(tokTypes._this)) {
            // When asserts is false, thisKeyword is handled by tsParseNonArrayType
            // : asserts this is type
            let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate()
            // if it turns out to be a `TSThisType`, wrap it with `TSTypePredicate`
            // : asserts this
            if (thisTypePredicate.type === 'TSThisType') {
              node.parameterName = thisTypePredicate
              node.asserts = true
              node.typeAnnotation = null
              thisTypePredicate = this.finishNode(node, 'TSTypePredicate')
            } else {
              this.resetStartLocationFromNode(thisTypePredicate, node)
              // @ts-ignore
              thisTypePredicate.asserts = true
            }
            t.typeAnnotation = thisTypePredicate
            return this.finishNode(t, 'TSTypeAnnotation')
          }

          const typePredicateVariable =
            this.tsIsIdentifier() &&
            this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this))

          if (!typePredicateVariable) {
            if (!asserts) {
              // : type
              return this.tsParseTypeAnnotation(/* eatColon */ false, t)
            }

            // : asserts foo
            // @ts-ignore
            node.parameterName = this.parseIdent()
            node.asserts = asserts
            node.typeAnnotation = null
            t.typeAnnotation = this.finishNode(node, 'TSTypePredicate')
            return this.finishNode(t, 'TSTypeAnnotation')
          }

          // : asserts foo is type
          const type = this.tsParseTypeAnnotation(/* eatColon */ false)
          node.parameterName = typePredicateVariable
          node.typeAnnotation = type
          node.asserts = asserts
          t.typeAnnotation = this.finishNode(node, 'TSTypePredicate')
          return this.finishNode(t, 'TSTypeAnnotation')
        })
      }

      // Note: In TypeScript implementation we must provide `yieldContext` and `awaitContext`,
      // but here it's always false, because this is only used for types.
      tsFillSignature(
        returnToken: TokenType,
        signature: Node
      ): void {
        // Arrow fns *must* have return token (`=>`). Normal functions can omit it.
        const returnTokenRequired = returnToken === tokTypes.arrow

        // https://github.com/babel/babel/issues/9231
        const paramsKey = 'parameters'
        const returnTypeKey = 'typeAnnotation'
        // @ts-ignore
        signature.typeParameters = this.tsTryParseTypeParameters()
        // @ts-ignore
        this.expect(tokTypes.parenL)
        signature[paramsKey] = this.tsParseBindingListForSignature()
        if (returnTokenRequired) {
          signature[returnTypeKey] =
            this.tsParseTypeOrTypePredicateAnnotation(returnToken)
        } else if (this.match(returnToken)) {
          signature[returnTypeKey] =
            this.tsParseTypeOrTypePredicateAnnotation(returnToken)
        }
      }

      tsTryNextParseConstantContext(): Node | undefined | null {
        if (this.lookahead().type !== tokTypes._const) return null

        this.next()
        const typeReference = this.tsParseTypeReference()

        // If the type reference has type parameters, then you are using it as a
        // type and not as a const signifier. We'll *never* be able to find this
        // name, since const isn't allowed as a type name. So in this instance we
        // get to pretend we're the type checker.
        // @ts-ignore
        if (typeReference.typeParameters) {
          // @ts-ignore
          this.raise(typeReference.typeName.start, TypeScriptError.CannotFindName({
            name: 'const'
          }))
        }

        return typeReference
      }

      tsParseFunctionOrConstructorType(
        type: 'TSFunctionType' | 'TSConstructorType',
        abstract?: boolean
      ) {
        // @ts-ignore
        const node = this.startNode()
        if (type === 'TSConstructorType') {
          node.abstract = !!abstract
          if (abstract) this.next()
          this.next() // eat `new`
        }
        this.tsInAllowConditionalTypesContext(() =>
          this.tsFillSignature(tokTypes.arrow, node)
        )
        return this.finishNode(node, type)
      }

      tsParseUnionOrIntersectionType(
        kind: 'TSUnionType' | 'TSIntersectionType',
        parseConstituentType: () => Node,
        operator: TokenType
      ): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        const hasLeadingOperator = this.eat(operator)
        const types = []
        do {
          types.push(parseConstituentType())
          // @ts-ignore
        } while (this.eat(operator))
        if (types.length === 1 && !hasLeadingOperator) {
          return types[0]
        }
        node.types = types
        return this.finishNode(node, kind)
      }

      tsCheckTypeAnnotationForReadOnly(node: Node) {
        // @ts-ignore
        switch (node.typeAnnotation.type) {
          case 'TSTupleType':
          case 'TSArrayType':
            return
          default:
            this.raise(node.start, TypeScriptError.UnexpectedReadonly)
        }
      }

      tsParseTypeOperator(): Node {
        // @ts-ignore
        const node = this.startNode()
        const operator = this['value']
        this.next() // eat operator
        node.operator = operator
        node.typeAnnotation = this.tsParseTypeOperatorOrHigher()

        if (operator === 'readonly') {
          this.tsCheckTypeAnnotationForReadOnly(
            node
          )
        }

        return this.finishNode(node, 'TSTypeOperator')
      }

      tsParseConstraintForInferType() {
        // @ts-ignore
        if (this.eat(tokTypes._extends)) {
          const constraint = this.tsInDisallowConditionalTypesContext(() =>
            this.tsParseType()
          )
          if (
            this.inDisallowConditionalTypesContext ||
            !this.match(tokTypes.question)
          ) {
            return constraint
          }
        }
      }

      tsParseInferType(): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        this.expectContextual('infer')
        // @ts-ignore
        const typeParameter = this.startNode()
        typeParameter.name = this.tsParseTypeParameterName()
        typeParameter.constraint = this.tsTryParse(() =>
          this.tsParseConstraintForInferType()
        )
        node.typeParameter = this.finishNode(typeParameter, 'TSTypeParameter')
        return this.finishNode(node, 'TSInferType')
      }

      tsParseLiteralTypeNode(): Node {
        // @ts-ignore
        const node = this.startNode()

        node.literal = (() => {
          switch (this.type) {
            case tokTypes.num:
            // we don't need bigint type here
            // case tokTypes.bigint:
            case tokTypes.string:
            case tokTypes._true:
            case tokTypes._false:
              // For compatibility to estree we cannot call parseLiteral directly here
              return this.parseExprAtom()
            default:
              // @ts-ignore
              this.unexpected()
          }
        })()
        return this.finishNode(node, 'TSLiteralType')
      }

      tsParseImportType(): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        this.expect(tokTypes._import)
        // @ts-ignore
        this.expect(tokTypes.parenL)
        if (!this.match(tokTypes.string)) {
          this.raise(this.start, TypeScriptError.UnsupportedImportTypeArgument)
        }

        // For compatibility to estree we cannot call parseLiteral directly here
        node.argument = this.parseExprAtom()
        // @ts-ignore
        this.expect(tokTypes.parenR)
        // @ts-ignore
        if (this.eat(tokTypes.dot)) {
          // In this instance, the entity name will actually itself be a
          // qualifier, so allow it to be a reserved word as well.
          node.qualifier = this.tsParseEntityName()
        }
        if (this.match(tokTypes.relational)) {
          node.typeParameters = this.tsParseTypeArguments()
        }
        return this.finishNode(node, 'TSImportType')
      }

      tsParseTypeQuery(): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        this.expect(tokTypes._typeof)
        if (this.match(tokTypes._import)) {
          node.exprName = this.tsParseImportType()
        } else {
          node.exprName = this.tsParseEntityName()
        }
        if (!this.hasPrecedingLineBreak() && this.match(tokTypes.relational)) {
          node.typeParameters = this.tsParseTypeArguments()
        }
        return this.finishNode(node, 'TSTypeQuery')
      }

      tsParseMappedTypeParameter(): Node {
        // @ts-ignore
        const node = this.startNode()
        node.name = this.tsParseTypeParameterName()
        node.constraint = this.tsExpectThenParseType(tokTypes._in)
        return this.finishNode(node, 'TSTypeParameter')
      }

      tsParseMappedType(): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        this.expect(tokTypes.braceL)

        if (this.match(tokTypes.plusMin)) {
          node.readonly = this['value']
          this.next()
          // @ts-ignore
          this.expectContextual('readonly')
        } else if (this.eatContextual('readonly')) {
          node.readonly = true
        }
        // @ts-ignore
        this.expect(tokTypes.bracketL)
        node.typeParameter = this.tsParseMappedTypeParameter()
        node.nameType = this.eatContextual('as') ? this.tsParseType() : null
        // @ts-ignore
        this.expect(tokTypes.bracketR)

        if (this.match(tokTypes.plusMin)) {
          node.optional = this['value']
          this.next()
          // @ts-ignore
          this.expect(tokTypes.question)
          // @ts-ignore
        } else if (this.eat(tokTypes.question)) {
          node.optional = true
        }

        node.typeAnnotation = this.tsTryParseType()
        // @ts-ignore
        this.semicolon()
        // @ts-ignore
        this.expect(tokTypes.braceR)

        return this.finishNode(node, 'TSMappedType')
      }

      tsParseTypeLiteral(): Node {
        // @ts-ignore
        const node = this.startNode()
        node.members = this.tsParseObjectTypeMembers()
        return this.finishNode(node, 'TSTypeLiteral')
      }

      tsParseTupleElementType(): Node {
        // parses `...TsType[]`

        const startLoc = this['startLoc']
        const startPos = this['start']
        // @ts-ignore
        const rest = this.eat(tokTypes.ellipsis)
        let type: any = this.tsParseType()
        // @ts-ignore
        const optional = this.eat(tokTypes.question)
        // @ts-ignore
        const labeled = this.eat(tokTypes.colon)

        if (labeled) {
          const labeledNode = this.startNodeAtNode(type)
          // @ts-ignore
          labeledNode.optional = optional

          if (
            type.type === 'TSTypeReference' &&
            !type.typeParameters &&
            type.typeName.type === 'Identifier'
          ) {
            // @ts-ignore
            labeledNode.label = type.typeName as Identifier
          } else {
            this.raise(type.start, TypeScriptError.InvalidTupleMemberLabel)
            // @ts-expect-error This produces an invalid AST, but at least we don't drop
            // nodes representing the invalid source.
            labeledNode.label = type
          }
          // @ts-ignore
          labeledNode.elementType = this.tsParseType()
          type = this.finishNode(labeledNode, 'TSNamedTupleMember')
        } else if (optional) {
          // @ts-ignore
          const optionalTypeNode = this.startNodeAtNode<N.TsOptionalType>(type)
          // @ts-ignore
          optionalTypeNode.typeAnnotation = type
          type = this.finishNode(optionalTypeNode, 'TSOptionalType')
        }

        if (rest) {
          // @ts-ignore
          const restNode = this.startNodeAt(startPos, startLoc)
          restNode.typeAnnotation = type
          type = this.finishNode(restNode, 'TSRestType')
        }

        return type
      }

      tsParseTupleType(): Node {
        // @ts-ignore
        const node = this.startNode()
        node.elementTypes = this.tsParseBracketedList(
          'TupleElementTypes',
          this.tsParseTupleElementType.bind(this),
          /* bracket */ true,
          /* skipFirstToken */ false
        )

        // Validate the elementTypes to ensure that no mandatory elements
        // follow optional elements
        let seenOptionalElement = false
        let labeledElements: boolean | null = null
        node.elementTypes.forEach(elementNode => {
          const { type } = elementNode

          if (
            seenOptionalElement &&
            type !== 'TSRestType' &&
            type !== 'TSOptionalType' &&
            !(type === 'TSNamedTupleMember' && elementNode.optional)
          ) {
            this.raise(elementNode.start, TypeScriptError.OptionalTypeBeforeRequired)
          }

          seenOptionalElement ||=
            (type === 'TSNamedTupleMember' && elementNode.optional) ||
            type === 'TSOptionalType'

          // When checking labels, check the argument of the spread operator
          let checkType = type
          if (type === 'TSRestType') {
            elementNode = elementNode.typeAnnotation
            checkType = elementNode.type
          }

          const isLabeled = checkType === 'TSNamedTupleMember'
          labeledElements ??= isLabeled
          if (labeledElements !== isLabeled) {
            this.raise(elementNode.start, TypeScriptError.MixedLabeledAndUnlabeledElements)
          }
        })

        return this.finishNode(node, 'TSTupleType')
      }

      tsParseTemplateLiteralType(): Node {
        // @ts-ignore
        const node = this.startNode()
        node.literal = this.parseTemplate({ isTagged: false })
        return this.finishNode(node, 'TSLiteralType')
      }

      tsParseTypeReference(): Node {
        // @ts-ignore
        const node = this.startNode()
        node.typeName = this.tsParseEntityName()
        if (!this.hasPrecedingLineBreak() && this.match(tokTypes.relational)) {
          node.typeParameters = this.tsParseTypeArguments()
        }
        return this.finishNode(node, 'TSTypeReference')
      }

      tsParseParenthesizedType(): Node {
        // @ts-ignore
        const node = this.startNode()
        // @ts-ignore
        this.expect(tokTypes.parenL)
        node.typeAnnotation = this.tsParseType()
        // @ts-ignore
        this.expect(tokTypes.parenR)
        return this.finishNode(node, 'TSParenthesizedType')
      }

      tsParseNonArrayType(): Node {
        switch (this.type) {
          case tokTypes.string:
          case tokTypes.num:
          // we don't need bigint type here
          // case tokTypes.bigint:
          case tokTypes._true:
          case tokTypes._false:
            return this.tsParseLiteralTypeNode()
          case tokTypes.plusMin:
            if (this['value'] === '-') {
              // @ts-ignore
              const node = this.startNode()
              const nextToken = this.lookahead()
              if (
                nextToken.type !== tokTypes.num
                // && nextToken.type !== tsTokenType.bigint
              ) {
                // @ts-ignore
                this.unexpected()
              }
              node.literal = this.parseMaybeUnary()
              return this.finishNode(node, 'TSLiteralType')
            }
            break
          case tokTypes._this:
            return this.tsParseThisTypeOrThisTypePredicate()
          case tokTypes._typeof:
            return this.tsParseTypeQuery()
          case tokTypes._import:
            return this.tsParseImportType()
          case tokTypes.braceL:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))
              ? this.tsParseMappedType()
              : this.tsParseTypeLiteral()
          case tokTypes.bracketL:
            return this.tsParseTupleType()
          case tokTypes.parenL:
            // the following line will always be false
            // if (!this.options.createParenthesizedExpressions) {
            // const startPos = this.start
            // this.next()
            // const type = this.tsParseType()
            // this.expect(tokTypes.parenR)
            // this.addExtra(type, 'parenthesized', true)
            // this.addExtra(type, 'parenStart', startPos)
            // return type
            // }

            return this.tsParseParenthesizedType()
          // parse template string here
          case tokTypes.backQuote:
          case tokTypes.dollarBraceL:
            return this.tsParseTemplateLiteralType()
          default: {
            const { type } = this
            if (
              tokenIsIdentifier(type) ||
              type === tokTypes._void ||
              type === tokTypes._null
            ) {
              const nodeType =
                type === tokTypes._void
                  ? 'TSVoidKeyword'
                  : type === tokTypes._null
                    ? 'TSNullKeyword'
                    : keywordTypeFromName(this['value'])
              if (
                nodeType !== undefined &&
                this.lookaheadCharCode() !== charCodes.dot
              ) {
                // @ts-ignore
                const node = this.startNode()
                this.next()
                return this.finishNode(node, nodeType)
              }
              return this.tsParseTypeReference()
            }
          }
        }
        // @ts-ignore
        this.unexpected()
      }

      tsParseArrayTypeOrHigher(): Node {
        let type = this.tsParseNonArrayType()
        // @ts-ignore
        while (!this.hasPrecedingLineBreak() && this.eat(tokTypes.bracketL)) {
          if (this.match(tokTypes.bracketR)) {
            const node = this.startNodeAtNode(type)
            // @ts-ignore
            node.elementType = type
            // @ts-ignore
            this.expect(tokTypes.bracketR)
            type = this.finishNode(node, 'TSArrayType')
          } else {
            const node = this.startNodeAtNode(type)
            // @ts-ignore
            node.objectType = type
            // @ts-ignore
            node.indexType = this.tsParseType()
            // @ts-ignore
            this.expect(tokTypes.bracketR)
            type = this.finishNode(node, 'TSIndexedAccessType')
          }
        }
        return type
      }

      tsParseTypeOperatorOrHigher(): Node {
        const isTypeOperator =
          tokenIsTSTypeOperator(this.type) && !this['containsEsc']
        return isTypeOperator
          ? this.tsParseTypeOperator()
          : this.ts_isContextual(tsTokenType.infer)
            ? this.tsParseInferType()
            : this.tsInAllowConditionalTypesContext(() =>
              this.tsParseArrayTypeOrHigher()
            )
      }

      tsParseIntersectionTypeOrHigher(): Node {
        return this.tsParseUnionOrIntersectionType(
          'TSIntersectionType',
          this.tsParseTypeOperatorOrHigher.bind(this),
          tokTypes.bitwiseAND
        )
      }

      tsParseUnionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType(
          'TSUnionType',
          this.tsParseIntersectionTypeOrHigher.bind(this),
          tokTypes.bitwiseOR
        )
      }

      tsParseNonConditionalType(): Node {
        if (this.tsIsStartOfFunctionType()) {
          return this.tsParseFunctionOrConstructorType('TSFunctionType')
        }
        if (this.match(tokTypes._new)) {
          // As in `new () => Date`
          return this.tsParseFunctionOrConstructorType('TSConstructorType')
        } else if (this.isAbstractConstructorSignature()) {
          // As in `abstract new () => Date`
          return this.tsParseFunctionOrConstructorType(
            'TSConstructorType',
            /* abstract */ true
          )
        }
        return this.tsParseUnionTypeOrHigher()
      }

      /** Be sure to be in a type context before calling this, using `tsInType`. */
      tsParseType(): Node {
        // Need to set `state.inType` so that we don't parse JSX in a type context.
        assert(this.inType)
        const type = this.tsParseNonConditionalType()

        if (
          this.inDisallowConditionalTypesContext ||
          this.hasPrecedingLineBreak() ||
          // @ts-ignore
          !this.eat(tokTypes._extends)
        ) {
          return type
        }
        const node = this.startNodeAtNode(type)
        // @ts-ignore
        node.checkType = type
        // @ts-ignore
        node.extendsType = this.tsInDisallowConditionalTypesContext(() =>
          this.tsParseNonConditionalType()
        )
        // @ts-ignore
        this.expect(tokTypes.question)
        // @ts-ignore
        node.trueType = this.tsInAllowConditionalTypesContext(() =>
          this.tsParseType()
        )
        // @ts-ignore
        this.expect(tokTypes.colon)
        // @ts-ignore
        node.falseType = this.tsInAllowConditionalTypesContext(() =>
          this.tsParseType()
        )

        return this.finishNode(node, 'TSConditionalType')
      }

      tsIsUnambiguouslyIndexSignature() {
        this.next() // Skip '{'
        if (tokenIsIdentifier(this.type)) {
          this.next()
          return this.match(tokTypes.colon)
        }
        return false
      }

      /**
       * Runs `cb` in a type context.
       * This should be called one token *before* the first type token,
       * so that the call to `next()` is run in type context.
       */
      tsInType<T>(cb: () => T): T {
        const oldInType = this.inType
        this.inType = true
        try {
          return cb()
        } finally {
          this.inType = oldInType
        }
      }

      tsTryParseIndexSignature(
        node: Node
      ): Node | undefined | null {
        if (
          !(
            this.match(tokTypes.bracketL) &&
            this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))
          )
        ) {
          return undefined
        }
        // @ts-ignore
        this.expect(tokTypes.bracketL)
        // @ts-ignore
        const id = this.parseIdent()
        id.typeAnnotation = this.tsParseTypeAnnotation()
        this.resetEndLocation(id) // set end position to end of type
        // @ts-ignore
        this.expect(tokTypes.bracketR)
        // @ts-ignore
        node.parameters = [id]

        const type = this.tsTryParseTypeAnnotation()
        // @ts-ignore
        if (type) node.typeAnnotation = type
        this.tsParseTypeMemberSemicolon()
        return this.finishNode(node, 'TSIndexSignature')
      }

      // for better error recover
      tsParseNoneModifiers(node: any) {
        this.tsParseModifiers({
          modified: node,
          allowedModifiers: [],
          disallowedModifiers: ['in', 'out'],
          errorTemplate: TypeScriptError.InvalidModifierOnTypeParameterPositions
        })
      }

      tsParseTypeParameter(
        parseModifiers: (
          node: Node
        ) => void = this.tsParseNoneModifiers.bind(this)
      ): Node {
        // @ts-ignore
        const node = this.startNode()

        parseModifiers(node)

        node.name = this.tsParseTypeParameterName()
        node.constraint = this.tsEatThenParseType(tokTypes._extends)
        node.default = this.tsEatThenParseType(tokTypes.eq)
        return this.finishNode(node, 'TSTypeParameter')
      }

      tsParseTypeParameters(
        parseModifiers?: ((node) => void) | null
      ) {
        // @ts-ignore
        const node = this.startNode()

        // todo support jsx
        if (this.match(tokTypes.relational) || this.match(jsxTokenType.jsxTagStart)) {
          this.next()
        } else {
          // @ts-ignore
          this.unexpected()
        }

        const refTrailingCommaPos = { value: -1 }

        node.params = this.tsParseBracketedList(
          'TypeParametersOrArguments',
          this.tsParseTypeParameter.bind(this, parseModifiers),
          /* bracket */ false,
          /* skipFirstToken */ true,
          refTrailingCommaPos
        )
        if (node.params.length === 0) {
          this.raise(this.start, TypeScriptError.EmptyTypeParameters)
        }
        if (refTrailingCommaPos.value !== -1) {
          this.addExtra(node, 'trailingComma', refTrailingCommaPos.value)
        }
        return this.finishNode(node, 'TSTypeParameterDeclaration')
      }

      tsTryParseTypeParameters(
        parseModifiers?: ((node) => void) | null
      ) {
        if (this.match(tokTypes.relational)) {
          return this.tsParseTypeParameters(parseModifiers)
        }
      }

      tsTryParse<T>(f: () => T | undefined | false): T | undefined {
        const state = this.getCurLookaheadState()
        const result = f()
        if (result !== undefined && result !== false) {
          return result
        } else {
          this.setLookaheadState(state)
          return undefined
        }
      }

      tsTokenCanFollowModifier() {
        return (
          (this.match(tokTypes.bracketL) ||
            this.match(tokTypes.braceL) ||
            this.match(tokTypes.star) ||
            this.match(tokTypes.ellipsis) ||
            this.match(tokTypes.privateId) ||
            this.isLiteralPropertyName()) &&
          !this.hasPrecedingLineBreak()
        )
      }

      tsNextTokenCanFollowModifier() {
        // Note: TypeScript's implementation is much more complicated because
        // more things are considered modifiers there.
        // This implementation only handles modifiers not handled by @babel/parser itself. And "static".
        // TODO: Would be nice to avoid lookahead. Want a hasLineBreakUpNext() method...
        this.next()
        return this.tsTokenCanFollowModifier()
      }

      /** Parses a modifier matching one the given modifier names. */
      tsParseModifier<T extends TsModifier>(
        allowedModifiers: T[],
        stopOnStartOfClassStaticBlock?: boolean
      ): T | undefined | null {
        if (!tokenIsIdentifier(this.type) && this.type !== tokTypes._in) {
          return undefined
        }

        const modifier = this['value']
        // @ts-ignore
        if (allowedModifiers.indexOf(modifier) !== -1) {
          if (stopOnStartOfClassStaticBlock && this.tsIsStartOfStaticBlocks()) {
            return undefined
          }
          if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
            // @ts-ignore
            return modifier
          }
        }
        return undefined
      }

      tsParseModifiersByMap({
        modified,
        map
      }: {
        modified: ModifierBase,
        map: Record<string, any>
      }) {
        for (const key of Object.keys(map)) {
          modified[key] = map[key]
        }
      }

      /** Parses a list of modifiers, in any order.
       *  If you need a specific order, you must call this function multiple times:
       *    this.tsParseModifiers({ modified: node, allowedModifiers: ['public'] });
       *    this.tsParseModifiers({ modified: node, allowedModifiers: ["abstract", "readonly"] });
       */
      tsParseModifiers({
        modified,
        allowedModifiers,
        disallowedModifiers,
        stopOnStartOfClassStaticBlock,
        errorTemplate = TypeScriptError.InvalidModifierOnTypeMember
      }: {
        modified: ModifierBase;
        allowedModifiers: readonly TsModifier[];
        disallowedModifiers?: TsModifier[];
        stopOnStartOfClassStaticBlock?: boolean;
        // FIXME: make sure errorTemplate can receive `modifier`
        errorTemplate?: any;
      }): Record<string, any> {
        const modifiedMap: Record<string, any> = {}
        const enforceOrder = (
          loc: Position,
          modifier: TsModifier,
          before: TsModifier,
          after: TsModifier
        ) => {
          if (modifier === before && modified[after]) {
            this.raise(loc.column, TypeScriptError.InvalidModifiersOrder({ orderedModifiers: [before, after] }))
          }
        }
        const incompatible = (
          loc: Position,
          modifier: TsModifier,
          mod1: TsModifier,
          mod2: TsModifier
        ) => {
          if (
            (modified[mod1] && modifier === mod2) ||
            (modified[mod2] && modifier === mod1)
          ) {
            this.raise(loc.column, TypeScriptError.IncompatibleModifiers({ modifiers: [mod1, mod2] }))
          }
        }

        for (; ;) {
          const startLoc = this['startLoc']
          const modifier: TsModifier | undefined | null = this.tsParseModifier(
            allowedModifiers.concat(disallowedModifiers ?? []),
            stopOnStartOfClassStaticBlock
          )

          if (!modifier) break

          if (tsIsAccessModifier(modifier)) {
            if (modified.accessibility) {
              this.raise(this.start, TypeScriptError.DuplicateAccessibilityModifier())
            } else {
              enforceOrder(startLoc, modifier, modifier, 'override')
              enforceOrder(startLoc, modifier, modifier, 'static')
              enforceOrder(startLoc, modifier, modifier, 'readonly')

              modifiedMap.accessibility = modifier
              modified['accessibility'] = modifier
            }
          } else if (tsIsVarianceAnnotations(modifier)) {
            if (modified[modifier]) {
              this.raise(this.start, TypeScriptError.DuplicateModifier({ modifier }))
            }
            modifiedMap[modifier] = modifier
            modified[modifier] = true

            enforceOrder(startLoc, modifier, 'in', 'out')
          } else {
            if (Object.hasOwnProperty.call(modified, modifier)) {
              this.raise(this.start, TypeScriptError.DuplicateModifier({ modifier }))
            } else {
              enforceOrder(startLoc, modifier, 'static', 'readonly')
              enforceOrder(startLoc, modifier, 'static', 'override')
              enforceOrder(startLoc, modifier, 'override', 'readonly')
              enforceOrder(startLoc, modifier, 'abstract', 'override')

              incompatible(startLoc, modifier, 'declare', 'override')
              incompatible(startLoc, modifier, 'static', 'abstract')
            }
            modifiedMap[modifier] = modifier
            modified[modifier] = true
          }

          if (disallowedModifiers?.includes(modifier)) {
            this.raise(this.start, errorTemplate)
          }
        }

        return modifiedMap
      }

      tsParseInOutModifiers(node: any) {
        this.tsParseModifiers({
          modified: node,
          allowedModifiers: ['in', 'out'],
          disallowedModifiers: [
            'public',
            'private',
            'protected',
            'readonly',
            'declare',
            'abstract',
            'override'
          ],
          errorTemplate: TypeScriptError.InvalidModifierOnTypeParameter
        })
      }

      tsParseTypeArguments(): Node {
        // @ts-ignore
        const node = this.startNode()
        node.params = this.tsInType(() =>
          // Temporarily remove a JSX parsing context, which makes us scan different tokens.
          this.tsInNoContext(() => {
            // @ts-ignore
            this.expect(tokTypes.relational)
            return this.tsParseDelimitedList(
              'TypeParametersOrArguments',
              this.tsParseType.bind(this)
            )
          })
        )
        if (node.params.length === 0) {
          this.raise(this.start, TypeScriptError.EmptyTypeArguments)
        }// @ts-ignore
        this.expect(tokTypes.relational)
        return this.finishNode(node, 'TSTypeParameterInstantiation')
      }

      tsParseHeritageClause(
        token: 'extends' | 'implements'
      ): Array<Node> {
        const originalStart = this.start

        const delimitedList = this.tsParseDelimitedList(
          'HeritageClauseElement',
          () => {
            // @ts-ignore
            const node = this.startNode()
            node.expression = this.tsParseEntityName()
            if (this.match(tokTypes.relational)) {
              node.typeParameters = this.tsParseTypeArguments()
            }

            return this.finishNode(node, 'TSExpressionWithTypeArguments')
          }
        )

        if (!delimitedList.length) {
          this.raise(originalStart, TypeScriptError.EmptyHeritageClauseType({ token }))
        }

        return delimitedList
      }

      tsParseTypeMemberSemicolon(): void {
        // @ts-ignore
        if (!this.eat(tokTypes.comma) && !this.isLineTerminator()) {
          // @ts-ignore
          this.expect(tokTypes.semi)
        }
      }

      tsTryParseAndCatch<T extends BaseNode | undefined | null>(
        f: () => T
      ): T | undefined | null {
        const result = this.tryParse(
          abort =>
            // @ts-expect-error todo(flow->ts)
            f() || abort()
        )

        if (result.aborted || !result.node) return undefined
        if (result.error) this.setLookaheadState(result.failState)
        // @ts-expect-error refine typings
        return result.node
      }

      tsParseSignatureMember(
        kind: 'TSCallSignatureDeclaration' | 'TSConstructSignatureDeclaration',
        node: Node
      ): Node {
        this.tsFillSignature(tokTypes.colon, node)
        this.tsParseTypeMemberSemicolon()
        return this.finishNode(node, kind)
      }

      tsParsePropertyOrMethodSignature(
        node: Node,
        readonly: boolean
      ): Node {
        // @ts-ignore
        if (this.eat(tokTypes.question)) node.optional = true
        const nodeAny: any = node

        if (this.match(tokTypes.parenL) || this.match(tokTypes.relational)) {
          if (readonly) {
            this.raise(node.start, TypeScriptError.ReadonlyForMethodSignature)
          }
          const method = nodeAny
          if (method.kind && this.match(tokTypes.relational)) {
            this.raise(this.start, TypeScriptError.AccesorCannotHaveTypeParameters)
          }
          this.tsFillSignature(tokTypes.colon, method)
          this.tsParseTypeMemberSemicolon()
          const paramsKey = 'parameters'
          const returnTypeKey = 'typeAnnotation'
          if (method.kind === 'get') {
            if (method[paramsKey].length > 0) {
              this.raise(this.start, 'A \'get\' accesor must not have any formal parameters.')
              if (this.isThisParam(method[paramsKey][0])) {
                this.raise(this.start, TypeScriptError.AccesorCannotDeclareThisParameter)
              }
            }
          } else if (method.kind === 'set') {
            if (method[paramsKey].length !== 1) {
              this.raise(this.start, 'A \'get\' accesor must'
                + ' not have any formal parameters.')
            } else {
              const firstParameter = method[paramsKey][0]
              if (this.isThisParam(firstParameter)) {
                this.raise(this.start, TypeScriptError.AccesorCannotDeclareThisParameter)
              }
              if (
                firstParameter.type === 'Identifier' &&
                firstParameter.optional
              ) {
                this.raise(this.start, TypeScriptError.SetAccesorCannotHaveOptionalParameter)
              }
              if (firstParameter.type === 'RestElement') {
                this.raise(this.start, TypeScriptError.SetAccesorCannotHaveRestParameter)
              }
            }
            if (method[returnTypeKey]) {
              this.raise(method[returnTypeKey].start, TypeScriptError.SetAccesorCannotHaveReturnType)
            }
          } else {
            method.kind = 'method'
          }
          return this.finishNode(method, 'TSMethodSignature')
        } else {
          const property = nodeAny
          if (readonly) property.readonly = true
          const type = this.tsTryParseTypeAnnotation()
          if (type) property.typeAnnotation = type
          this.tsParseTypeMemberSemicolon()
          return this.finishNode(property, 'TSPropertySignature')
        }
      }

      tsParseTypeMember(): Node {
        // @ts-ignore
        const node: any = this.startNode()

        if (this.match(tokTypes.parenL) || this.match(tokTypes.relational)) {
          return this.tsParseSignatureMember('TSCallSignatureDeclaration', node)
        }

        if (this.match(tokTypes._new)) {
          // @ts-ignore
          const id = this.startNode<Identifier>()
          this.next()
          if (this.match(tokTypes.parenL) || this.match(tokTypes.relational)) {
            return this.tsParseSignatureMember(
              'TSConstructSignatureDeclaration',
              node
            )
          } else {
            node.key = this.createIdentifier(id, 'new')
            return this.tsParsePropertyOrMethodSignature(node, false)
          }
        }

        this.tsParseModifiers({
          modified: node,
          allowedModifiers: ['readonly'],
          disallowedModifiers: [
            'declare',
            'abstract',
            'private',
            'protected',
            'public',
            'static',
            'override'
          ]
        })

        const idx = this.tsTryParseIndexSignature(node)
        if (idx) {
          return idx
        }
        // @ts-ignore
        this.parsePropertyName(node)
        if (
          !node.computed &&
          node.key.type === 'Identifier' &&
          (node.key.name === 'get' || node.key.name === 'set') &&
          this.tsTokenCanFollowModifier()
        ) {
          node.kind = node.key.name
          // @ts-ignore
          this.parsePropertyName(node)
        }
        return this.tsParsePropertyOrMethodSignature(node, !!node.readonly)
      }

      tsParseList<T extends Node>(
        kind: ParsingContext,
        parseElement: () => T
      ): T[] {
        const result: T[] = []
        while (!this.tsIsListTerminator(kind)) {
          // Skipping "parseListElement" from the TS source since that's just for error handling.
          result.push(parseElement())
        }
        return result
      }

      tsParseObjectTypeMembers(): Array<Node> {
        // @ts-ignore
        this.expect(tokTypes.braceL)
        const members = this.tsParseList(
          'TypeMembers',
          this.tsParseTypeMember.bind(this)
        )
        // @ts-ignore
        this.expect(tokTypes.braceR)
        return members
      }

      tsParseInterfaceDeclaration(
        node: Node,
        properties: {
          declare?: true;
        } = {}
      ): any | undefined | null {
        if (this.hasFollowingLineBreak()) return null
        // @ts-ignore
        this.expectContextual('interface')
        // @ts-ignore
        if (properties.declare) node.declare = true
        if (tokenIsIdentifier(this.type)) {
          // @ts-ignore
          node.id = this.parseIdent()
          // @ts-ignore
          this.checkLValSimple(node.id, BIND_TS_INTERFACE)
        } else {
          // @ts-ignore
          node.id = null
          this.raise(this.start, TypeScriptError.MissingInterfaceName)
        }
        // @ts-ignore
        node.typeParameters = this.tsTryParseTypeParameters(
          this.tsParseInOutModifiers.bind(this)
        )
        // @ts-ignore
        if (this.eat(tokTypes._extends)) {
          // @ts-ignore
          node.extends = this.tsParseHeritageClause('extends')
        }
        // @ts-ignore
        const body = this.startNode()
        body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this))
        // @ts-ignore
        node.body = this.finishNode(body, 'TSInterfaceBody')
        return this.finishNode(node, 'TSInterfaceDeclaration')
      }

      tsParseAbstractDeclaration(
        node: any
      ): any | undefined | null {
        if (this.match(tokTypes._class)) {
          node.abstract = true
          return this.parseClass(node, true)
        } else if (this.ts_isContextual(tsTokenType.interface)) {
          // for invalid abstract interface

          // To avoid
          //   abstract interface
          //   Foo {}
          if (!this.hasFollowingLineBreak()) {
            node.abstract = true
            return this.tsParseInterfaceDeclaration(
              node
            )
          }
        } else {
          // @ts-ignore
          this.unexpected(null, tokTypes._class)
        }
      }

      tsIsDeclarationStart(): boolean {
        return tokenIsTSDeclarationStart(this.type)
      }

      tsParseExpressionStatement(
        node,
        expr
      ) {
        switch (expr.name) {
          case 'declare': {
            const declaration = this.tsTryParseDeclare(node)
            if (declaration) {
              // @ts-ignore
              declaration.declare = true
              return declaration
            }
            break
          }
          case 'global':
            // `global { }` (with no `declare`) may appear inside an ambient module declaration.
            // Would like to use tsParseAmbientExternalModuleDeclaration here, but already ran past "global".
            if (this.match(tokTypes.braceL)) {
              // @ts-ignore
              super.enterScope(SCOPE_TS_MODULE)
              const mod = node
              mod.global = true
              mod.id = expr
              mod.body = this.tsParseModuleBlock()
              // @ts-ignore
              super.exitScope()
              return this.finishNode(mod, 'TSModuleDeclaration')
            }
            break

          default:
            return this.tsParseDeclaration(node, expr.name, /* next */ false)
        }
      }

      tsParseModuleReference(): any {
        return this.tsIsExternalModuleReference()
          ? this.tsParseExternalModuleReference()
          : this.tsParseEntityName(/* allowReservedWords */ false)
      }

      tsIsExportDefaultSpecifier(): boolean {
        const { type } = this
        // @ts-ignore
        const isAsync = this.isAsyncFunction()
        // @ts-ignore
        const isLet = this.isLet()
        if (tokenIsIdentifier(type)) {
          if ((isAsync && !this['containsEsc']) || isLet) {
            return false
          }
          if (
            (type === tsTokenType.type || type === tsTokenType.interface) &&
            !this['containsEsc']
          ) {
            const { type: nextType } = this.lookahead()
            // If we see any variable name other than `from` after `type` keyword,
            // we consider it as flow/typescript type exports
            // note that this approach may fail on some pedantic cases
            // export type from = number
            if (
              (tokenIsIdentifier(nextType) && nextType !== tsTokenType.from) ||
              nextType === tokTypes.braceL
            ) {
              return false
            }
          }
        } else if (!this.match(tokTypes._default)) {
          return false
        }

        const next = this.nextTokenStart()
        const hasFrom = this.isUnparsedContextual(next, 'from')
        if (
          this.input.charCodeAt(next) === charCodes.comma ||
          (tokenIsIdentifier(this.type) && hasFrom)
        ) {
          return true
        }
        // lookahead again when `export default from` is seen
        if (this.match(tokTypes._default) && hasFrom) {
          const nextAfterFrom = this.input.charCodeAt(
            this.nextTokenStartSince(next + 4)
          )
          return (
            nextAfterFrom === charCodes.quotationMark ||
            nextAfterFrom === charCodes.apostrophe
          )
        }
        return false
      }

      tsInAmbientContext<T>(cb: () => T): T {
        const oldIsAmbientContext = this.isAmbientContext
        this.isAmbientContext = true
        try {
          return cb()
        } finally {
          this.isAmbientContext = oldIsAmbientContext
        }
      }

      tsCheckLineTerminator(next: boolean) {
        if (next) {
          if (this.hasFollowingLineBreak()) return false
          this.next()
          return true
        }
        return !this.isLineTerminator()
      }

      tsParseModuleOrNamespaceDeclaration(
        node: Node,
        nested: boolean = false
      ): any {
        // @ts-ignore
        node.id = this.parseIdent()

        if (!nested) {
          // @ts-ignore
          this.checkLValSimple(node.id, BIND_TS_NAMESPACE)
        }
        // @ts-ignore
        if (this.eat(tokTypes.dot)) {
          // @ts-ignore
          const inner = this.startNode()
          this.tsParseModuleOrNamespaceDeclaration(inner, true)
          // @ts-expect-error Fixme: refine typings
          node.body = inner
        } else {
          // @ts-ignore
          super.enterScope(SCOPE_TS_MODULE)
          // @ts-ignore
          node.body = this.tsParseModuleBlock()
          // @ts-ignore
          super.exitScope()
        }
        return this.finishNode(node, 'TSModuleDeclaration')
      }

      tsParseTypeAliasDeclaration(
        node: Node
      ): any {
        // @ts-ignore
        node.id = this.parseIdent()
        // @ts-ignore
        this.checkLValSimple(node.id, BIND_TS_TYPE)
        // @ts-ignore
        node.typeAnnotation = this.tsInType(() => {
          // @ts-ignore
          node.typeParameters = this.tsTryParseTypeParameters(
            this.tsParseInOutModifiers.bind(this)
          )
          // @ts-ignore
          this.expect(tokTypes.eq)

          if (
            this.ts_isContextual(tsTokenType.interface) &&
            this.lookahead().type !== tokTypes.dot
          ) {
            // @ts-ignore
            const node = this.startNode()
            this.next()
            return this.finishNode(node, 'TSIntrinsicKeyword')
          }

          return this.tsParseType()
        })
        // @ts-ignore
        this.semicolon()
        return this.finishNode(node, 'TSTypeAliasDeclaration')
      }

      // Common to tsTryParseDeclare, tsTryParseExportDeclaration, and tsParseExpressionStatement.
      tsParseDeclaration(
        node: any,
        value: string,
        next: boolean
      ): Declaration | undefined | null {
        // no declaration apart from enum can be followed by a line break.
        switch (value) {
          case 'abstract':
            if (
              this.tsCheckLineTerminator(next) &&
              (this.match(tokTypes._class) || tokenIsIdentifier(this.type))
            ) {
              return this.tsParseAbstractDeclaration(node)
            }
            break

          case 'module':
            if (this.tsCheckLineTerminator(next)) {
              if (this.match(tokTypes.string)) {
                return this.tsParseAmbientExternalModuleDeclaration(node)
              } else if (tokenIsIdentifier(this.type)) {
                return this.tsParseModuleOrNamespaceDeclaration(node)
              }
            }
            break

          case 'namespace':
            if (
              this.tsCheckLineTerminator(next) &&
              tokenIsIdentifier(this.type)
            ) {
              return this.tsParseModuleOrNamespaceDeclaration(node)
            }
            break

          case 'type':
            if (
              this.tsCheckLineTerminator(next) &&
              tokenIsIdentifier(this.type)
            ) {
              return this.tsParseTypeAliasDeclaration(node)
            }
            break
        }
      }

      // Note: this won't b·e called unless the keyword is allowed in
      // `shouldParseExportDeclaration`.
      tsTryParseExportDeclaration(): Declaration | undefined | null {
        return this.tsParseDeclaration(
          // @ts-ignore
          this.startNode(),
          this['value'],
          /* next */ true
        )
      }

      tsParseImportEqualsDeclaration(
        node,
        isExport?: boolean
      ): Node {
        node.isExport = isExport || false
        // @ts-ignore
        node.id = this.parseIdent()
        // @ts-ignore
        this.checkLValSimple(node.id, BIND_LEXICAL)
        // @ts-ignore
        super.expect(tokTypes.eq)
        const moduleReference = this.tsParseModuleReference()
        if (
          node.importKind === 'type' &&
          moduleReference.type !== 'TSExternalModuleReference'
        ) {
          this.raise(moduleReference.start, TypeScriptError.ImportAliasHasImportType)
        }
        node.moduleReference = moduleReference
        // @ts-ignore
        super.semicolon()
        return this.finishNode(node, 'TSImportEqualsDeclaration')
      }

      // todo overwritten in parseNew
      // parseNewCallee(node: N.NewExpression): void {
      //   super.parseNewCallee(node);
      //
      //   const { callee } = node;
      //   if (
      //     callee.type === "TSInstantiationExpression" &&
      //     !callee.extra?.parenthesized
      //   ) {
      //     node.typeParameters = callee.typeParameters;
      //     node.callee = callee.expression;
      //   }
      // }

      // todo we don't support export default from now
      isExportDefaultSpecifier(): boolean {
        if (this.tsIsDeclarationStart()) return false

        const { type } = this
        if (tokenIsIdentifier(type)) {
          if ((type === tsTokenType.async && !this['containsEsc']) || type === tsTokenType.let) {
            return false
          }
          if (
            (type === tsTokenType.type || type === tsTokenType.interface) &&
            !this['containsEsc']
          ) {
            const { type: nextType } = this.lookahead()
            // If we see any variable name other than `from` after `type` keyword,
            // we consider it as flow/typescript type exports
            // note that this approach may fail on some pedantic cases
            // export type from = number
            if (
              (tokenIsIdentifier(nextType) && nextType !== tsTokenType.from) ||
              nextType === tokTypes.braceL
            ) {
              return false
            }
          }
        } else if (!this.match(tokTypes._default)) {
          return false
        }

        const next = this.nextTokenStart()
        const hasFrom = this.isUnparsedContextual(next, 'from')
        if (
          this.input.charCodeAt(next) === charCodes.comma ||
          (tokenIsIdentifier(this.type) && hasFrom)
        ) {
          return true
        }
        // lookahead again when `export default from` is seen
        if (this.match(tokTypes._default) && hasFrom) {
          const nextAfterFrom = this.input.charCodeAt(
            this.nextTokenStartSince(next + 4)
          )
          return (
            nextAfterFrom === charCodes.quotationMark ||
            nextAfterFrom === charCodes.apostrophe
          )
        }
        return false
      }

      parseTemplate({ isTagged = false } = {}) {
        // @ts-ignore
        let node = this.startNode()
        this.next()
        node.expressions = []
        // @ts-ignore
        let curElt = this.parseTemplateElement({ isTagged })
        node.quasis = [curElt]
        while (!curElt.tail) {
          if (this.type === tokTypes.eof) this.raise(this['pos'], 'Unterminated template literal')
          // @ts-ignore
          this.expect(tokTypes.dollarBraceL)
          // NOTE: extend parseTemplateSubstitution
          // @ts-ignore
          node.expressions.push(this.inType ? this.tsParseType() : this.parseExpression())
          // @ts-ignore
          this.expect(tokTypes.braceR)
          // @ts-ignore
          node.quasis.push(curElt = this.parseTemplateElement({ isTagged }))
        }
        this.next()
        return this.finishNode(node, 'TemplateLiteral')
      }

      parseFunction(
        node: any,
        statement?: any,
        // @ts-ignore
        allowExpressionBody?: boolean,
        isAsync?: boolean,
        // @ts-ignore
        forInit?: boolean
      ) {
        // @ts-ignore
        this.initFunction(node)
        if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
          if (this.type === tokTypes.star && (statement && FUNC_HANGING_STATEMENT))
            // @ts-ignore
            this.unexpected()
          // @ts-ignore
          node.generator = this.eat(tokTypes.star)
        }
        if (this.options.ecmaVersion >= 8)
          node.async = !!isAsync

        if (statement && FUNC_STATEMENT) {
          node.id = (statement && FUNC_NULLABLE_ID) && this.type !== tokTypes.name ? null : this.parseIdent()
          if (node.id && !(statement && FUNC_HANGING_STATEMENT))
            // If it is a regular function declaration in sloppy mode, then it is
            // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
            // mode depends on properties of the current scope (see
            // treatFunctionsAsVar).
            // @ts-ignore
            this.checkLValSimple(
              node.id,
              (this['strict'] || node.generator || node.async) ?
                this['treatFunctionsAsVar'] ?
                  acornScope.BIND_VAR : acornScope.BIND_LEXICAL : acornScope.BIND_FUNCTION
            )
        }

        let oldYieldPos = this['yieldPos'], oldAwaitPos = this['awaitPos'],
          oldAwaitIdentPos = this['awaitIdentPos']
        this['yieldPos'] = 0
        this['awaitPos'] = 0
        this['awaitIdentPos'] = 0
        // @ts-ignore
        this.enterScope(functionFlags(node.async, node.generator))

        if (!(statement && FUNC_STATEMENT))
          node.id = this.type === tokTypes.name ? this.parseIdent() : null

        this.parseFunctionParams(node)
        const isDeclaration: boolean = (statement & FUNC_STATEMENT) as any
        this.parseFunctionBody(
          node,
          allowExpressionBody,
          false,
          forInit,
          {
            isFunctionDeclaration: isDeclaration
          }
        )

        this['yieldPos'] = oldYieldPos
        this['awaitPos'] = oldAwaitPos
        this['awaitIdentPos'] = oldAwaitIdentPos
        return this.finishNode(node, isDeclaration ? 'FunctionDeclaration' : 'FunctionExpression')
      }

      parseFunctionBody(
        node: Node,
        isArrowFunction: boolean = false,
        isMethod: boolean = false,
        forInit: boolean = false,
        tsConfig?: {
          isFunctionDeclaration?: boolean
          isClassMethod?: boolean
        }
      ) {
        if (this.match(tokTypes.colon)) {
          // @ts-ignore
          node.returnType = this.tsParseTypeOrTypePredicateAnnotation(tokTypes.colon)
        }

        const bodilessType =
          tsConfig?.isFunctionDeclaration
            ? 'TSDeclareFunction'
            : tsConfig?.isClassMethod
              ? 'TSDeclareMethod'
              : undefined
        debugger
        if (bodilessType && !this.match(tokTypes.braceL) && this.isLineTerminator()) {
          return this.finishNode(node, bodilessType)
        }
        if (bodilessType === 'TSDeclareFunction' && this.isAmbientContext) {
          this.raise(node.start, TypeScriptError.DeclareFunctionHasImplementation)
          // @ts-ignore
          if ((node as FunctionDeclaration).declare) {
            // @ts-ignore
            super.parseFunctionBody(node, isArrowFunction, isMethod, false)
            return this.finishNode(node, bodilessType)
          }
        }
        // @ts-ignore
        super.parseFunctionBody(node, isArrowFunction, isMethod, forInit)
        return node
      }

      parseNew() {
        if (this['containsEsc']) this.raiseRecoverable(this.start, 'Escape sequence in keyword new')
        // @ts-ignore
        let node = this.startNode()
        // @ts-ignore
        let meta = this.parseIdent(true)
        // @ts-ignore
        if (this.options.ecmaVersion >= 6 && this.eat(tokTypes.dot)) {
          node.meta = meta
          let containsEsc = this['containsEsc']
          // @ts-ignore
          node.property = this.parseIdent(true)
          if (node.property.name !== 'target')
            this.raiseRecoverable(node.property.start, 'The only valid meta property for new is \'new.target\'')
          if (containsEsc)
            this.raiseRecoverable(node.start, '\'new.target\' must not contain escaped characters')
          if (!this['allowNewDotTarget'])
            this.raiseRecoverable(node.start, '\'new.target\' can only be used in functions and class static block')
          return this.finishNode(node, 'MetaProperty')
        }
        let startPos = this.start, startLoc = this['startLoc'],
          isImport = this.type === tokTypes._import
        // @ts-ignore
        node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true, false)
        if (isImport && node.callee.type === 'ImportExpression') {
          this.raise(startPos, 'Cannot use new with import()')
        }
        // ---start parseNewCallee extension
        const { callee } = node
        if (
          callee.type === 'TSInstantiationExpression' &&
          !callee.extra?.parenthesized
        ) {
          node.typeParameters = callee.typeParameters
          node.callee = callee.expression
        }
        // ---end
        // @ts-ignore
        if (this.eat(tokTypes.parenL)) node.arguments = this.parseExprList(tokTypes.parenR, this.options.ecmaVersion >= 8, false)
        else node.arguments = []
        return this.finishNode(node, 'NewExpression')
      }

      parseExprOp(
        left: Expression,
        leftStartPos: number,
        leftStartLoc: Position,
        minPrec: number,
        forInit: boolean
      ): Expression {
        if (
          tokTypes._in.binop > minPrec &&
          !this.hasPrecedingLineBreak() &&
          this.ts_isContextual(tsTokenType.as)
        ) {
          // @ts-ignore
          const node = this.startNodeAt(
            leftStartPos,
            leftStartLoc
          )
          node.expression = left
          const _const = this.tsTryNextParseConstantContext()
          if (_const) {
            node.typeAnnotation = _const
          } else {
            node.typeAnnotation = this.tsNextThenParseType()
          }
          this.finishNode(node, 'TSAsExpression')
          // rescan `<`, `>` because they were scanned when this.state.inType was true
          this.reScan_lt_gt()
          return this.parseExprOp(
            node,
            leftStartPos,
            leftStartLoc,
            minPrec,
            forInit
          )
        }
        // @ts-ignore
        return super.parseExprOp(left, leftStartPos, leftStartLoc, minPrec)
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

        // ---start origin parseImport
        if (this.type === tokTypes.string) {
          node.specifiers = []
          node.source = this.parseExprAtom()
        } else {
          node.specifiers = this.parseImportSpecifiers()
          // @ts-ignore
          this.expectContextual('from')
          // @ts-ignore
          node.source = this.type === tokTypes.string ? this.parseExprAtom() : this.unexpected()
        }
        // @ts-ignore
        super.semicolon()
        const importNode = this.finishNode(node, 'ImportDeclaration')
        // ---end

        /*:: invariant(importNode.type !== "TSImportEqualsDeclaration") */

        // `import type` can only be used on imports with named imports or with a
        // default import - but not both
        if (
          // @ts-ignore
          importNode.importKind === 'type' &&
          // @ts-ignore
          importNode.specifiers.length > 1 &&
          // @ts-ignore
          importNode.specifiers[0].type === 'ImportDefaultSpecifier'
        ) {
          this.raise(importNode.start, TypeScriptError.TypeImportCannotSpecifyDefaultAndNamed)
        }

        return importNode
      }

      parseExport(node: Node, exports: any): any {
        this.next()
        if (this.match(tokTypes._import)) {
          this.next() // eat `tokTypes._import`
          if (
            this.ts_isContextual(tsTokenType.type) &&
            this.lookaheadCharCode() !== charCodes.equalsTo
          ) {
            // @ts-ignore
            node.importKind = 'type'
            this.next() // eat "type"
          } else {
            // @ts-ignore
            node.importKind = 'value'
          }
          return this.tsParseImportEqualsDeclaration(
            node,
            /* isExport */ true
          )
          // @ts-ignore
        } else if (this.eat(tokTypes.eq)) {
          // `export = x;`
          const assign = node
          // @ts-ignore
          assign.expression = this.parseExpression()
          // @ts-ignore
          this.semicolon()
          return this.finishNode(assign, 'TSExportAssignment')
        } else if (this.eatContextual('as')) {
          // `export as namespace A;`
          const decl = node
          // See `parseNamespaceExportDeclaration` in TypeScript's own parser
          // @ts-ignore
          this.expectContextual(tsTokenType.namespace)
          // @ts-ignore
          decl.id = this.parseIdent()
          // @ts-ignore
          this.semicolon()
          return this.finishNode(decl, 'TSNamespaceExportDeclaration')
        } else {
          if (
            this.ts_isContextual(tsTokenType.type) &&
            this.lookahead().type === tokTypes.braceL
          ) {
            this.next()
            // @ts-ignore
            node.exportKind = 'type'
          } else {
            // @ts-ignore
            node.exportKind = 'value'
          }

          // ---start origin parseExport
          // export * from '...'
          // @ts-ignore
          if (this.eat(tokTypes.star)) {
            if (this.options.ecmaVersion >= 11) {
              if (this.eatContextual('as')) {
                // @ts-ignore
                node.exported = this.parseModuleExportName()
                // @ts-ignore
                this.checkExport(exports, node.exported, this['lastTokStart'])
              } else {
                // @ts-ignore
                node.exported = null
              }
            }
            // @ts-ignore
            this.expectContextual('from')
            // @ts-ignore
            if (this.type !== tokTypes.string) this.unexpected()
            // @ts-ignore
            node.source = this.parseExprAtom()
            // @ts-ignore
            this.semicolon()
            return this.finishNode(node, 'ExportAllDeclaration')
          }
          // @ts-ignore
          if (this.eat(tokTypes._default)) { // export default ...
            // ---start ts extension
            if (this.isAbstractClass()) {
              // @ts-ignore
              const cls = this.startNode()
              this.next() // Skip "abstract"
              cls.abstract = true
              return this.parseClass(cls, true)
            }

            // export default interface allowed in:
            // https://github.com/Microsoft/TypeScript/pull/16040
            if (this.match(tsTokenType.interface)) {
              // @ts-ignore
              const result = this.tsParseInterfaceDeclaration(this.startNode())
              if (result) return result
            }
            // ---end
            // @ts-ignore
            this.checkExport(exports, 'default', this['lastTokStart'])
            let isAsync
            // @ts-ignore
            if (this.type === tokTypes._function || (isAsync = this.isAsyncFunction())) {
              // @ts-ignore
              let fNode = this.startNode()
              this.next()
              if (isAsync) this.next()
              // @ts-ignore
              node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync)
            } else if (this.type === tokTypes._class) {
              // @ts-ignore
              let cNode = this.startNode()
              // @ts-ignore
              node.declaration = this.parseClass(cNode, 'nullableID')
            } else {
              // @ts-ignore
              node.declaration = this.parseMaybeAssign()
              // @ts-ignore
              this.semicolon()
            }
            return this.finishNode(node, 'ExportDefaultDeclaration')
          }
          // export var|const|let|function|class ...
          if (this.shouldParseExportStatement()) {
            // @ts-ignore
            node.declaration = this.parseExportDeclaration(node)
            // @ts-ignore
            if (node.declaration.type === 'VariableDeclaration')
              // @ts-ignore
              this.checkVariableExport(exports, node.declaration.declarations)
            else
              // @ts-ignore
              this.checkExport(exports, node.declaration.id, node.declaration.id.start)
            // @ts-ignore
            node.specifiers = []
            // @ts-ignore
            node.source = null
          } else { // export { x, y as z } [from '...']
            // @ts-ignore
            node.declaration = null
            // @ts-ignore
            const isTypeExport = node.exportKind === 'type'
            // @ts-ignore
            node.specifiers = this.parseExportSpecifiers(exports, isTypeExport)
            if (this.eatContextual('from')) {
              // @ts-ignore
              if (this.type !== tokTypes.string) this.unexpected()
              // @ts-ignore
              node.source = this.parseExprAtom()
            } else {
              // @ts-ignore
              for (let spec of node.specifiers) {
                // check for keywords used as local names
                // @ts-ignore
                this.checkUnreserved(spec.local)
                // check if export is defined
                // @ts-ignore
                this.checkLocalExport(spec.local)

                if (spec.local.type === 'Literal') {
                  this.raise(spec.local.start, 'A string literal cannot be used as an exported binding without `from`.')
                }
              }
              // @ts-ignore
              node.source = null
            }
            // @ts-ignore
            this.semicolon()
          }
          return this.finishNode(node, 'ExportNamedDeclaration')
          // ---end
        }
      }

      // todo we don't need these functions, we have to rewrite the
      //  parseClassElement function in acorn
      // === === === === === === === === === === === === === === === ===
      // Note: All below methods are duplicates of something in flow.js.
      // Not sure what the best way to combine these is.
      // === === === === === === === === === === === === === === === ===

      // isClassMethod(): boolean {
      //   return this.match(tt.lt) || super.isClassMethod();
      // }
      //
      // isClassProperty(): boolean {
      //   return (
      //     this.match(tt.bang) || this.match(tt.colon) || super.isClassProperty()
      //   );
      // }

      parseMaybeDefault(
        startPos?: number | null,
        startLoc?: Position | null,
        left?: Pattern | null
      ): Pattern {
        // @ts-ignore
        const node = super.parseMaybeDefault(startPos, startLoc, left)

        if (
          node.type === 'AssignmentPattern' &&
          node.typeAnnotation &&
          node.right.start < node.typeAnnotation.start
        ) {
          this.raise(node.typeAnnotation.loc.start, TypeScriptError.TypeAnnotationAfterAssign)
        }

        return node
      }

      typeCastToParameter(node: Node): Node {
        // @ts-ignore
        node.expression.typeAnnotation = node.typeAnnotation
        // @ts-ignore
        this.resetEndLocation(node.expression, node.typeAnnotation.end)
        // @ts-ignore
        return node.expression
      }

      toAssignableList(
        exprList: Expression[],
        isBinding: boolean
      ): void {
        for (let i = 0; i < exprList.length; i++) {
          const expr = exprList[i]
          // @ts-ignore
          if (expr?.type === 'TSTypeCastExpression') {
            // @ts-ignore
            exprList[i] = this.typeCastToParameter(expr)
          }
        }
        // @ts-ignore
        return super.toAssignableList(exprList, isBinding)
      }

      reportReservedArrowTypeParam(node: any) {
        if (
          node.params.length === 1 &&
          !node.extra?.trailingComma &&
          disallowAmbiguousJSXLike
        ) {
          this.raise(node.start, TypeScriptError.ReservedArrowTypeParam)
        }
      }

      // Handle type assertions
      parseMaybeUnary(
        refExpressionErrors?: any,
        sawUnary?: boolean
      ): Expression {
        // todo support jsx
        // if (!this.hasPlugin("jsx") && this.match(tt.lt)) {
        //   return this.tsParseTypeAssertion();
        // } else {
        // }
        // @ts-ignore
        return super.parseMaybeUnary(refExpressionErrors, sawUnary)
      }

      parseExprAtom(refDestructuringErrors?: DestructuringErrors, forInit?: boolean) {
        // If a division operator appears in an expression position, the
        // tokenizer got confused, and we force it to read a regexp instead.
        // @ts-ignore
        if (this.type === tokTypes.slash) this.readRegexp()

        let node, canBeArrow = this['potentialArrowAt'] === this.start
        switch (this.type) {
          case tokTypes._super:
            if (!this['allowSuper'])
              this.raise(this.start, '\'super\' keyword outside a method')
            // @ts-ignore
            node = this.startNode()
            this.next()
            if (this.type === tokTypes.parenL && !this['allowDirectSuper'])
              this.raise(node.start, 'super() call outside constructor of a subclass')
            // The `super` keyword can appear at below:
            // SuperProperty:
            //     super [ Expression ]
            //     super . IdentifierName
            // SuperCall:
            //     super ( Arguments )
            if (this.type !== tokTypes.dot && this.type !== tokTypes.bracketL && this.type !== tokTypes.parenL)
              // @ts-ignore
              this.unexpected()
            return this.finishNode(node, 'Super')

          case tokTypes._this:
            // @ts-ignore
            node = this.startNode()
            this.next()
            return this.finishNode(node, 'ThisExpression')

          case tokTypes.name:
            let startPos = this.start, startLoc = this['startLoc'],
              containsEsc = this['containsEsc']
            // @ts-ignore
            let id = this.parseIdent(false)
            // @ts-ignore
            if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === 'async' && !this.canInsertSemicolon() && this.eat(tokTypes._function)) {
              // @ts-ignore
              this.overrideContext(tokContexts.f_expr)
              // @ts-ignore
              return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit)
            }
            // @ts-ignore
            if (canBeArrow && !this.canInsertSemicolon()) {
              // @ts-ignore
              if (this.eat(tokTypes.arrow))
                // @ts-ignore
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit)
              if (this.options.ecmaVersion >= 8 && id.name === 'async' && this.type === tokTypes.name && !containsEsc &&
                // @ts-ignore
                (!this.potentialArrowInForAwait || this['value'] !== 'of' || this['containsEsc'])) {
                // @ts-ignore
                id = this.parseIdent(false)
                // @ts-ignore
                if (this.canInsertSemicolon() || !this.eat(tokTypes.arrow))
                  // @ts-ignore
                  this.unexpected()
                // @ts-ignore
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit)
              }
            }
            return id

          case tokTypes.regexp:
            let value = this['value']
            // @ts-ignore
            node = this.parseLiteral(value.value)
            // @ts-ignore
            node.regex = { pattern: value.pattern, flags: value.flags }
            return node

          case tokTypes.num:
          case tokTypes.string:
            // @ts-ignore
            return this.parseLiteral(this['value'])

          case tokTypes._null:
          case tokTypes._true:
          case tokTypes._false:
            // @ts-ignore
            node = this.startNode()
            node.value = this.type === tokTypes._null ? null : this.type === tokTypes._true
            node.raw = this.type.keyword
            this.next()
            return this.finishNode(node, 'Literal')

          case tokTypes.parenL:
            let start = this.start,
              expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit)
            if (refDestructuringErrors) {
              // @ts-ignore
              if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
                refDestructuringErrors.parenthesizedAssign = start
              if (refDestructuringErrors.parenthesizedBind < 0)
                refDestructuringErrors.parenthesizedBind = start
            }
            return expr

          case tokTypes.bracketL:
            // @ts-ignore
            node = this.startNode()
            this.next()
            // @ts-ignore
            node.elements = this.parseExprList(tokTypes.bracketR, true, true, refDestructuringErrors)
            // NODE check array like here
            this.tsCheckForInvalidTypeCasts(node.elements)
            return this.finishNode(node, 'ArrayExpression')

          case tokTypes.braceL:
            // @ts-ignore
            this.overrideContext(tokContexts.b_expr)
            // @ts-ignore
            return this.parseObj(false, refDestructuringErrors)

          case tokTypes._function:
            // @ts-ignore
            node = this.startNode()
            this.next()
            // @ts-ignore
            return this.parseFunction(node, 0)

          case tokTypes._class:
            // @ts-ignore
            return this.parseClass(this.startNode(), false)

          case tokTypes._new:
            return this.parseNew()

          case tokTypes.backQuote:
            return this.parseTemplate()

          case tokTypes._import:
            if (this.options.ecmaVersion >= 11) {
              // @ts-ignore
              return this.parseExprImport()
            } else {
              // @ts-ignore
              return this.unexpected()
            }

          default:
            if (tokenIsIdentifier(this.type)) {
              // if (
              //   this.ts_isContextual(tsTokenType.module) &&
              //   this.lookaheadCharCode() === charCodes.leftCurlyBrace &&
              //   !this.hasFollowingLineBreak()
              // ) {
              //   return this.parseModuleExpression();
              // }
              const canBeArrow = this['potentialArrowAt'] === this.start
              const containsEsc = this['containsEsc']
              // @ts-ignore
              const id = this.parseIdent()

              if (
                !containsEsc &&
                id.name === 'async' &&
                // @ts-ignore
                !this.canInsertSemicolon()
              ) {
                const { type } = this
                if (type === tokTypes._function) {
                  this.next()
                  // @ts-ignore
                  return this.parseFunction(
                    this.startNodeAtNode(id),
                    undefined,
                    true,
                    true,
                    forInit
                  )
                } else if (tokenIsIdentifier(type)) {
                  // If the next token begins with "=", commit to parsing an async
                  // arrow function. (Peeking ahead for "=" lets us avoid a more
                  // expensive full-token lookahead on this common path.)
                  if (this.lookaheadCharCode() === charCodes.equalsTo) {
                    // although `id` is not used in async arrow unary function,
                    // we don't need to reset `async`'s trailing comments because
                    // it will be attached to the upcoming async arrow binding identifier
                    // @ts-ignore
                    if (this.canInsertSemicolon() || !this.eat(tt.arrow))
                      // @ts-ignore
                      this.unexpected()

                    return this.parseArrowExpression(
                      this.startNodeAtNode(id),
                      [id], true, forInit
                    )
                  } else {
                    // Otherwise, treat "async" as an identifier and let calling code
                    // deal with the current tt.name token.
                    return id
                  }
                }
                // todo supprt parse do
                // else if (type === tokTypes._do) {
                //   this.resetPreviousNodeTrailingComments(id);
                //   return this.parseDo(this.startNodeAtNode(id), true);
                // }
              }

              if (
                canBeArrow &&
                this.match(tokTypes.arrow) &&
                // @ts-ignore
                !this.canInsertSemicolon()
              ) {
                this.next()
                return this.parseArrowExpression(
                  this.startNodeAtNode(id),
                  [id],
                  false,
                  forInit
                )
              }

              return id
            } else {
              // @ts-ignore
              this.unexpected()
            }
        }
      }

      // @ts-ignore
      parseIdent(liberal?: boolean, isBinding?: boolean) {
        // @ts-ignore
        var node = this.startNode()
        if (this.type === tokTypes.name) {
          node.name = this['value']
        } else if (tokenIsKeywordOrIdentifier(this.type)) {
          node.name = this['value']
        } else if (this.type.keyword) {
          node.name = this.type.keyword

          // To fix https://github.com/acornjs/acorn/issues/575
          // `class` and `function` keywords push new context into this.context.
          // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
          // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
          if ((node.name === 'class' || node.name === 'function') &&
            (this['lastTokEnd'] !== this['lastTokStart'] + 1 || this.input.charCodeAt(this['lastTokStart']) !== 46)) {
            this['context'].pop()
          }
        } else {
          // @ts-ignore
          this.unexpected()
        }
        // @ts-ignore
        this.next(!!liberal)
        this.finishNode(node, 'Identifier')
        if (!liberal) {
          // @ts-ignore
          this.checkUnreserved(node)
          if (node.name === 'await' && !this['awaitIdentPos']) {
            this['awaitIdentPos'] = node.start
          }
        }
        return node
      };

      parseVar(node, isFor, kind, allowMissingInitializer: boolean = false) {
        node.declarations = []
        node.kind = kind
        for (; ;) {
          // @ts-ignore
          let decl = this.startNode()
          this.parseVarId(decl, kind)
          // @ts-ignore
          if (this.eat(tokTypes.eq)) {
            decl.init = this.parseMaybeAssign(isFor)
            // @ts-ignore
          } else if (!allowMissingInitializer && kind === 'const' && !(this.type === tokTypes._in || (this.options.ecmaVersion >= 6 && this.isContextual('of')))) {
            // @ts-ignore
            this.unexpected()
            // @ts-ignore
          } else if (!allowMissingInitializer && decl.id.type !== 'Identifier' && !(isFor && (this.type === tokTypes._in || this.isContextual('of')))) {
            this.raise(this['lastTokEnd'], 'Complex binding patterns require an initialization value')
          } else {
            decl.init = null
          }
          node.declarations.push(this.finishNode(decl, 'VariableDeclarator'))
          // @ts-ignore
          if (!this.eat(tokTypes.comma)) break
        }
        return node
      }

      parseVarStatement(node, kind, allowMissingInitializer: boolean = false) {
        const { isAmbientContext } = this

        // ---start origin parseVarStatement
        this.next()
        this.parseVar(node, false, kind, allowMissingInitializer || isAmbientContext)
        // @ts-ignore
        this.semicolon()
        const declaration = this.finishNode(node, 'VariableDeclaration')
        // ---end

        if (!isAmbientContext) return declaration
        // @ts-ignore
        for (const { id, init } of declaration.declarations) {
          // Empty initializer is the easy case that we want.
          if (!init) continue

          // var and let aren't ever allowed initializers.
          //
          // If a const declaration has no type annotation and is initiailized to
          // a string literal, numeric literal, or enum reference, then it is
          // allowed. In an ideal world, we'd check whether init was *actually* an
          // enum reference, but we allow anything that "could be" a literal enum
          // in `isPossiblyLiteralEnum` since we don't have all the information
          // that the typescript compiler has.
          if (kind !== 'const' || !!id.typeAnnotation) {
            this.raise(init.start, TypeScriptError.InitializerNotAllowedInAmbientContext)
          } else if (
            init.type !== 'StringLiteral' &&
            init.type !== 'BooleanLiteral' &&
            init.type !== 'NumericLiteral' &&
            init.type !== 'BigIntLiteral' &&
            (init.type !== 'TemplateLiteral' || init.expressions.length > 0) &&
            !isPossiblyLiteralEnum(init)
          ) {
            this.raise(
              init.start,
              TypeScriptError.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference
            )
          }
        }

        return declaration
      }

      parseStatement(context: any, topLevel?: any, exports?: any) {
        if (this.match(tokTypes._const) && this.isLookaheadContextual('enum')) {
          // @ts-ignore
          const node = this.startNode()
          // @ts-ignore
          this.expect(tokTypes._const) // eat 'const'
          return this.tsParseEnumDeclaration(node, { const: true })
        }

        if (this.ts_isContextual(tsTokenType.enum)) {
          return this.tsParseEnumDeclaration(
            // @ts-ignore
            this.startNode()
          )
        }

        if (this.ts_isContextual(tsTokenType.interface)) {
          // @ts-ignore
          const result = this.tsParseInterfaceDeclaration(this.startNode())
          if (result) return result
        }
        // @ts-ignore
        return super.parseStatement(context, topLevel, exports)
      }

      // NOTE: unused function
      parseAccessModifier(): Accessibility | undefined | null {
        return this.tsParseModifier(['public', 'protected', 'private'])
      }

      parsePostMemberNameModifiers(
        methodOrProp: Node
      ): void {
        // @ts-ignore
        const optional = this.eat(tokTypes.question)
        // @ts-ignore
        if (optional) methodOrProp.optional = true

        if ((methodOrProp as any).readonly && this.match(tokTypes.parenL)) {
          this.raise(methodOrProp.start, TypeScriptError.ClassMethodHasReadonly)
        }

        if ((methodOrProp as any).declare && this.match(tokTypes.parenL)) {
          this.raise(methodOrProp.start, TypeScriptError.ClassMethodHasDeclare)
        }
      }

      // Note: The reason we do this in `parseExpressionStatement` and not `parseStatement`
      // is that e.g. `type()` is valid JS, so we must try parsing that first.
      // If it's really a type, we will parse `type` as the statement, and can correct it here
      // by parsing the rest.
      parseExpressionStatement(
        node,
        expr
      ) {
        const decl =
          expr.type === 'Identifier'
            ? this.tsParseExpressionStatement(node, expr)
            : undefined
        // @ts-ignore
        return decl || super.parseExpressionStatement(node, expr)
      }

      // todo this is shouldParseExportDeclaration
      shouldParseExportStatement(): boolean {
        if (this.tsIsDeclarationStart()) return true
        // @ts-ignore
        return super.shouldParseExportStatement()
      }

      parseConditional(
        expr: Expression,
        startPos: number,
        startLoc: Position,
        forInit?: boolean,
        // @ts-ignore
        refDestructuringErrors?: any): any {
        // @ts-ignore
        if (this.eat(tokTypes.question)) {
          // @ts-ignore
          let node = this.startNodeAt(startPos, startLoc)
          node.test = expr
          node.consequent = this.parseMaybeAssign()
          // @ts-ignore
          this.expect(tokTypes.colon)
          node.alternate = this.parseMaybeAssign(forInit)
          return this.finishNode(node, 'ConditionalExpression')
        }
        return expr
      }

      parseMaybeConditional(forInit, refDestructuringErrors) {
        let startPos = this.start, startLoc = this['startLoc']
        // @ts-ignore
        let expr = this.parseExprOps(forInit, refDestructuringErrors)
        // @ts-ignore
        if (this.checkExpressionErrors(refDestructuringErrors)) return expr
        // todo parseConditional ts support
        if (!this.maybeInArrowParameters || !this.match(tokTypes.question)) {
          return this.parseConditional(
            expr,
            startPos,
            startLoc,
            forInit,
            refDestructuringErrors
          )
        }

        const result = this.tryParse(() =>
          this.parseConditional(expr, startPos, startLoc, forInit, refDestructuringErrors)
        )

        if (!result.node) {
          if (result.error) {
            /*:: invariant(refExpressionErrors != null) */
            this.setOptionalParametersError(refDestructuringErrors, result.error)
          }

          return expr
        }
        if (result.error) this.setLookaheadState(result.failState)
        return result.node
      }

      parseParenItem(node: Expression) {
        const startPos = this.start
        const startLoc = this['startLoc']
        // @ts-ignore
        node = super.parseParenItem(node)
        // @ts-ignore
        if (this.eat(tokTypes.question)) {
          // @ts-ignore
          node.optional = true
          // Include questionmark in location of node
          // Don't use this.finishNode() as otherwise we might process comments twice and
          // include already consumed parens
          this.resetEndLocation(node)
        }

        if (this.match(tokTypes.colon)) {
          // @ts-ignore
          const typeCastNode = this.startNodeAt(
            startPos,
            startLoc
          )
          typeCastNode.expression = node
          typeCastNode.typeAnnotation = this.tsParseTypeAnnotation()

          return this.finishNode(typeCastNode, 'TSTypeCastExpression')
        }

        return node
      }

      parseExportDeclaration(
        node: any
      ): any | undefined | null {
        if (!this.isAmbientContext && this.ts_isContextual(tsTokenType.declare)) {
          return this.tsInAmbientContext(() => this.parseExportDeclaration(node))
        }

        // Store original location/position
        const startPos = this.start
        const startLoc = this['startLoc']

        const isDeclare = this.eatContextual('declare')

        if (
          isDeclare &&
          (this.ts_isContextual(tsTokenType.declare) || !this.shouldParseExportStatement())
        ) {
          this.raise(this.start, TypeScriptError.ExpectedAmbientAfterExportDeclare)
        }

        const isIdentifier = tokenIsIdentifier(this.type)
        const declaration =
          (isIdentifier && this.tsTryParseExportDeclaration()) ||
          this.parseStatement(null)

        if (!declaration) return null

        if (
          declaration.type === 'TSInterfaceDeclaration' ||
          declaration.type === 'TSTypeAliasDeclaration' ||
          isDeclare
        ) {
          node.exportKind = 'type'
        }

        if (isDeclare) {
          // Reset location to include `declare` in range
          this.resetStartLocation(declaration, startPos, startLoc)

          declaration.declare = true
        }

        return declaration
      }

      parseClassId(
        node: Class,
        isStatement: boolean
      ): void {
        if ((!isStatement) && this.ts_isContextual(tsTokenType.implements)) {
          return
        }
        // @ts-ignore
        super.parseClassId(
          node,
          isStatement
        )
        const typeParameters = this.tsTryParseTypeParameters(
          this.tsParseInOutModifiers.bind(this)
        )
        // @ts-ignore
        if (typeParameters) node.typeParameters = typeParameters
      }

      parseClassPropertyAnnotation(
        node: Node
      ): void {
        // @ts-ignore
        if (!node.optional && (this.eat(tokTypes.prefix) && this['value'] === '!')) node.definite = true

        const type = this.tsTryParseTypeAnnotation()
        // @ts-ignore
        if (type) node.typeAnnotation = type
      }

      parseClassField(field) {
        const isPrivate: boolean = field.key.type === 'PrivateIdentifier'
        if (isPrivate) {
          if (field.abstract) {
            this.raise(field.start, TypeScriptError.PrivateElementHasAbstract)
          }

          if (field.accessibility) {
            this.raise(field.start, TypeScriptError.PrivateElementHasAccessibility({
              modifier: field.accessibility
            }))
          }

          this.parseClassPropertyAnnotation(field)
        } else {
          this.parseClassPropertyAnnotation(field)

          if (
            this.isAmbientContext &&
            !(field.readonly && !field.typeAnnotation) &&
            this.match(tokTypes.eq)
          ) {
            this.raise(this['startLoc'], TypeScriptError.DeclareClassFieldHasInitializer)
          }
          if (field.abstract && this.match(tokTypes.eq)) {
            const { key } = field
            this.raise(this['startLoc'], TypeScriptError.AbstractPropertyHasInitializer({
              propertyName:
                key.type === 'Identifier' && !field.computed
                  ? key.name
                  : `[${this.input.slice(key.start, key.end)}]`
            }))
          }
        }
        // @ts-ignore
        return super.parseClassField(field)
      }

      parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper) {
        const isConstructor = method.kind === 'constructor'
        const isPrivate: boolean = method.key.type === 'PrivateIdentifier'

        const typeParameters = this.tsTryParseTypeParameters()
        // start typescript parse class method
        if (isPrivate) {
          if (typeParameters) method.typeParameters = typeParameters

          if (method.accessibility) {
            this.raise(method.start, TypeScriptError.PrivateMethodsHasAccessibility({
              modifier: method.accessibility
            }))
          }

        } else {
          if (typeParameters && isConstructor) {
            this.raise(typeParameters.start, TypeScriptError.ConstructorHasTypeParameters)
          }
        }

        const { declare = false, kind } = method

        if (declare && (kind === 'get' || kind === 'set')) {
          this.raise(method.start, TypeScriptError.DeclareAccessor({ kind }))
        }
        if (typeParameters) method.typeParameters = typeParameters
        // end
        // @ts-ignore

        // Check key and flags
        const key = method.key
        if (method.kind === 'constructor') {
          if (isGenerator) this.raise(key.start, 'Constructor can\'t be a generator')
          if (isAsync) this.raise(key.start, 'Constructor can\'t be an async method')
        } else if (method.static && checkKeyName(method, 'prototype')) {
          this.raise(key.start, 'Classes may not have a static property named prototype')
        }

        // Parse value
        const value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper, true)

        // Check value
        if (method.kind === 'get' && value['params'].length !== 0)
          this.raiseRecoverable(value.start, 'getter should have no params')
        if (method.kind === 'set' && value['params'].length !== 1)
          this.raiseRecoverable(value.start, 'setter should have exactly one param')
        if (method.kind === 'set' && value['params'][0].type === 'RestElement')
          this.raiseRecoverable(value['params'][0].start, 'Setter cannot use rest params')

        return this.finishNode(method, 'MethodDefinition')
      }

      parseClassElement(constructorAllowsSuper) {
        // @ts-ignore
        if (this.eat(tokTypes.semi)) return null

        const ecmaVersion = this.options.ecmaVersion
        // @ts-ignore
        let node = this.startNode()
        let keyName = ''
        let isGenerator = false
        let isAsync = false
        let kind = 'method'
        let isStatic = false
        // todo parseClassMember
        // --- start parseClassMember extension
        const modifiers = [
          'declare',
          'private',
          'public',
          'protected',
          'override',
          'abstract',
          'readonly',
          'static'
        ] as const
        const modifierMap = this.tsParseModifiers({
          modified: node,
          allowedModifiers: modifiers,
          disallowedModifiers: ['in', 'out'],
          stopOnStartOfClassStaticBlock: true,
          errorTemplate: TypeScriptError.InvalidModifierOnTypeParameterPositions
        })
        isStatic = Boolean(modifierMap.static)
        const callParseClassMemberWithIsStatic = () => {
          if (this.tsIsStartOfStaticBlocks()) {
            this.next() // eat "static"
            this.next() // eat "{"
            if (this.tsHasSomeModifiers(node, modifiers)) {
              this.raise(this.start, TypeScriptError.StaticBlockCannotHaveModifier)
            }

            if (ecmaVersion >= 13) {
              // @ts-ignore
              super.parseClassStaticBlock(
                node
              )
              return node
            }
          } else {
            // todo parseClassMemberWithIsStatic
            // --- start ts extension
            const idx = this.tsTryParseIndexSignature(node)
            if (idx) {
              if ((node as any).abstract) {
                this.raise(node.start, TypeScriptError.IndexSignatureHasAbstract)
              }
              if ((node as any).accessibility) {
                this.raise(node.start, TypeScriptError.IndexSignatureHasAccessibility({
                  modifier: (node as any).accessibility
                }))
              }
              if ((node as any).declare) {
                this.raise(node.start, TypeScriptError.IndexSignatureHasDeclare)
              }
              if ((node as any).override) {
                this.raise(node.start, TypeScriptError.IndexSignatureHasOverride)
              }

              return idx
            }

            if (!this.inAbstractClass && (node as any).abstract) {
              this.raise(node.start, TypeScriptError.NonAbstractClassHasAbstractMethod)
            }

            if ((node as any).override) {
              if (constructorAllowsSuper) {
                this.raise(node.start, TypeScriptError.OverrideNotInSubClass)
              }
            }
            // --- start

            node.static = isStatic
            if (isStatic) {
              // @ts-ignore
              if (!(this.isClassElementNameStart() || this.type === tokTypes.star)) {
                keyName = 'static'
              }
            }
            if (!keyName && ecmaVersion >= 8 && this.eatContextual('async')) {
              // @ts-ignore
              if ((this.isClassElementNameStart() || this.type === tokTypes.star) && !this.canInsertSemicolon()) {
                isAsync = true
              } else {
                keyName = 'async'
              }
            }
            // @ts-ignore
            if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(tokTypes.star)) {
              isGenerator = true
            }
            if (!keyName && !isAsync && !isGenerator) {
              const lastValue = this['value']
              if (this.eatContextual('get') || this.eatContextual('set')) {
                // @ts-ignore
                if (this.isClassElementNameStart()) {
                  kind = lastValue
                } else {
                  keyName = lastValue
                }
              }
            }

            // Parse element name
            if (keyName) {
              // 'async', 'get', 'set', or 'static' were not a keyword contextually.
              // The last token is any of those. Make it the element name.
              node.computed = false
              // @ts-ignore
              node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc)
              node.key.name = keyName
              this.finishNode(node.key, 'Identifier')
            } else {
              // @ts-ignore
              this.parseClassElementName(node)
            }

            // Parse element value
            if (ecmaVersion < 13 || this.type === tokTypes.parenL || kind !== 'method' || isGenerator || isAsync) {
              const isConstructor = !node.static && checkKeyName(node, 'constructor')
              const allowsDirectSuper = isConstructor && constructorAllowsSuper
              // Couldn't move this check into the 'parseClassMethod' method for backward compatibility.
              if (isConstructor && kind !== 'method') this.raise(node.key.start, 'Constructor can\'t have get/set modifier')
              node.kind = isConstructor ? 'constructor' : kind
              this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper)
            } else {
              this.parseClassField(node)
            }

            return node
          }
        }
        if (node.declare) {
          this.tsInAmbientContext(callParseClassMemberWithIsStatic)
        } else {
          callParseClassMemberWithIsStatic()
        }
        // --- end
        return node
      }

      parseClassSuper(node: Class): void {
        // @ts-ignore
        super.parseClassSuper(node)
        // handle `extends f<<T>
        if (node.superClass && (this.match(tokTypes.relational) || this.match(tokTypes.bitShift))) {
          // @ts-expect-error refine typings
          node.superTypeParameters = this.tsParseTypeArgumentsInExpression()
        }
        if (this.eatContextual('implements')) {
          // @ts-ignore
          node.implements = this.tsParseHeritageClause('implements')
        }
      }

      parseFunctionParams(node: Function): void {
        const typeParameters = this.tsTryParseTypeParameters()
        // @ts-ignore
        if (typeParameters) node.typeParameters = typeParameters
        // @ts-ignore
        super.parseFunctionParams(node)
      }

      // `let x: number;`
      parseVarId(
        decl: VariableDeclarator,
        kind: 'var' | 'let' | 'const'
      ): void {
        // @ts-ignore
        super.parseVarId(decl, kind)

        if (
          decl.id.type === 'Identifier' &&
          !this.hasPrecedingLineBreak() &&
          // todo bang : type === prefix && value === '!'
          // @ts-ignore
          (this.eat(tokTypes.prefix) && this['value'] === '!')
        ) {
          // @ts-ignore
          decl.definite = true
        }

        const type = this.tsTryParseTypeAnnotation()
        if (type) {
          // @ts-ignore
          decl.id.typeAnnotation = type
          this.resetEndLocation(decl.id) // set end position to end of type
        }
      }

      // parse the return type of an async arrow function - let foo = (async (): number => {});
      parseArrowExpression(
        node: Node,
        params: Node[],
        isAsync: boolean,
        forInit: boolean
      ): ArrowFunctionExpression {
        if (this.match(tokTypes.colon)) {
          // @ts-ignore
          node.returnType = this.tsParseTypeAnnotation()
        }
        // @ts-ignore
        return super.parseArrowExpression(
          node,
          params,
          isAsync,
          forInit
        )
      }

      parseMaybeAssign(
        forInit?: boolean,
        refExpressionErrors?: any | null,
        afterLeftParse?: Function
      ): Expression {
        // Note: When the JSX plugin is on, type assertions (`<T> x`) aren't valid syntax.

        let state: LookaheadState | undefined | null
        let jsx
        let typeCast

        if (
          // todo we don't support jsx now
          // this.hasPlugin("jsx") &&
          false &&
          // @ts-ignore
          (this.match(tsTokenType.jsxTagStart) || this.match(tokTypes.relational))
        ) {
          // Prefer to parse JSX if possible. But may be an arrow fn.
          state = this.cloneCurLookaheadState()

          jsx = this.tryParse(
            // @ts-ignore
            () => super.parseMaybeAssign(forInit, refExpressionErrors, afterLeftParse),
            state
          )

          /*:: invariant(!jsx.aborted) */
          /*:: invariant(jsx.node != null) */
          if (!jsx.error) return jsx.node

          // Remove `tc.j_expr` or `tc.j_oTag` from context added
          // by parsing `jsxTagStart` to stop the JSX plugin from
          // messing with the tokens
          const context = this['context']
          // @ts-ignore
          const currentContext = context[context.length - 1]

          // todo delete the follow lines
          // if (currentContext === tc.j_oTag || currentContext === tc.j_expr) {
          //   context.pop()
          // }
        }

        if (!jsx?.error && !this.match(tokTypes.relational)) {
          // @ts-ignore
          return super.parseMaybeAssign(forInit, refExpressionErrors, afterLeftParse)
        }

        // Either way, we're looking at a '<': tt.jsxTagStart or relational.

        // If the state was cloned in the JSX parsing branch above but there
        // have been any error in the tryParse call, this.state is set to state
        // so we still need to clone it.
        if (!state || this.compareLookaheadState(state, this.getCurLookaheadState())) {
          state = this.cloneCurLookaheadState()
        }

        let typeParameters: Node | undefined | null
        const arrow = this.tryParse(abort => {
          // This is similar to TypeScript's `tryParseParenthesizedArrowFunctionExpression`.
          typeParameters = this.tsParseTypeParameters()
          // @ts-ignore
          const expr = super.parseMaybeAssign(
            forInit,
            refExpressionErrors,
            afterLeftParse
          )

          if (
            expr.type !== 'ArrowFunctionExpression' ||
            expr.extra?.parenthesized
          ) {
            abort()
          }

          // Correct TypeScript code should have at least 1 type parameter, but don't crash on bad code.
          // @ts-ignore
          if (typeParameters?.params.length !== 0) {
            this.resetStartLocationFromNode(expr, typeParameters)
          }
          expr.typeParameters = typeParameters

          // todo we don't support BABEL_8_BREAKING
          // if (process.env.BABEL_8_BREAKING) {
          //   if (
          //     this.hasPlugin('jsx') &&
          //     expr.typeParameters.params.length === 1 &&
          //     !expr.typeParameters.extra?.trailingComma
          //   ) {
          //     // report error if single type parameter used without trailing comma.
          //     const parameter = expr.typeParameters.params[0]
          //     if (!parameter.constraint) {
          //       // A single type parameter must either have constraints
          //       // or a trailing comma, otherwise it's ambiguous with JSX.
          //       this.raise(TypeScriptError.SingleTypeParameterWithoutTrailingComma, {
          //         at: createPositionWithColumnOffset(parameter.loc.end, 1),
          //         typeParameterName: parameter.name.name
          //       })
          //     }
          //   }
          // }

          return expr
        }, state)

        /*:: invariant(arrow.node != null) */
        if (!arrow.error && !arrow.aborted) {
          // This error is reported outside of the this.tryParse call so that
          // in case of <T>(x) => 2, we don't consider <T>(x) as a type assertion
          // because of this error.
          if (typeParameters) this.reportReservedArrowTypeParam(typeParameters)
          // @ts-expect-error refine typings
          return arrow.node
        }

        if (!jsx) {
          // Try parsing a type cast instead of an arrow function.
          // This will never happen outside of JSX.
          // (Because in JSX the '<' should be a jsxTagStart and not a relational.

          // this will always be true
          // assert(!this.hasPlugin('jsx'))
          assert(true)

          // This will start with a type assertion (via parseMaybeUnary).
          // But don't directly call `this.tsParseTypeAssertion` because we want to handle any binary after it.
          typeCast = this.tryParse(
            // @ts-ignore
            () => super.parseMaybeAssign(forInit, refExpressionErrors, afterLeftParse),
            state
          )
          /*:: invariant(!typeCast.aborted) */
          /*:: invariant(typeCast.node != null) */
          if (!typeCast.error) return typeCast.node
        }

        if (jsx?.node) {
          /*:: invariant(jsx.failState) */
          this.setLookaheadState(jsx.failState)
          return jsx.node
        }

        if (arrow.node) {
          /*:: invariant(arrow.failState) */
          this.setLookaheadState(arrow.failState)
          if (typeParameters) this.reportReservedArrowTypeParam(typeParameters)
          // @ts-expect-error refine typings
          return arrow.node
        }

        if (typeCast?.node) {
          /*:: invariant(typeCast.failState) */
          this.setLookaheadState(typeCast.failState)
          return typeCast.node
        }

        if (jsx?.thrown) throw jsx.error
        if (arrow.thrown) throw arrow.error
        if (typeCast?.thrown) throw typeCast.error

        throw jsx?.error || arrow.error || typeCast?.error
      }

      parseArrow(
        node: ArrowFunctionExpression
      ): ArrowFunctionExpression | undefined | null {
        if (this.match(tokTypes.colon)) {
          // This is different from how the TS parser does it.
          // TS uses lookahead. The Babel Parser parses it as a parenthesized expression and converts.

          const result = this.tryParse(abort => {
            const returnType = this.tsParseTypeOrTypePredicateAnnotation(
              tokTypes.colon
            )
            // @ts-ignore
            if (this.canInsertSemicolon() || !this.match(tokTypes.arrow)) abort()
            return returnType
          })

          if (result.aborted) return

          if (!result.thrown) {
            if (result.error) this.setLookaheadState(result.failState)
            // @ts-expect-error refine typings
            node.returnType = result.node
          }
        }
        // @ts-ignore
        if (this.eat(tokTypes.arrow)) {
          return node
        }
      }

      parseAssignableListItem(
        allowModifiers: boolean | undefined | null
      ) {
        // Store original location/position to include modifiers in range
        const startPos = this.start
        const startLoc = this['startLoc']

        let accessibility: any
        let readonly = false
        let override = false
        if (allowModifiers !== undefined) {
          const modified: ModifierBase = {}
          this.tsParseModifiers({
            modified,
            allowedModifiers: [
              'public',
              'private',
              'protected',
              'override',
              'readonly'
            ]
          })
          accessibility = modified.accessibility
          override = modified.override
          readonly = modified.readonly
          if (
            allowModifiers === false &&
            (accessibility || readonly || override)
          ) {
            this.raise(startLoc.start, TypeScriptError.UnexpectedParameterModifier)
          }
        }

        const left = this.parseMaybeDefault(startPos, startLoc)
        this.parseBindingListItem(left)
        // @ts-ignore
        const elt = this.parseMaybeDefault(left['start'], left['loc'], left)
        if (accessibility || readonly || override) {
          // @ts-ignore
          const pp = this.startNodeAt(startPos, startLoc)
          if (accessibility) pp.accessibility = accessibility
          if (readonly) pp.readonly = readonly
          if (override) pp.override = override
          if (elt.type !== 'Identifier' && elt.type !== 'AssignmentPattern') {
            this.raise(pp.start, TypeScriptError.UnsupportedParameterPropertyKind)
          }
          pp.parameter = elt as any
          return this.finishNode(pp, 'TSParameterProperty')
        }

        return elt
      }

      // Allow type annotations inside of a parameter list.
      parseBindingListItem(param: Pattern) {
        // @ts-ignore
        if (this.eat(tokTypes.question)) {
          if (
            param.type !== 'Identifier' &&
            !this.isAmbientContext &&
            !this.inType
          ) {
            // @ts-ignore
            this.raise(param.start, TypeScriptError.PatternIsOptional)
          }
          // @ts-ignore
          (param as any as Identifier).optional = true
        }
        const type = this.tsTryParseTypeAnnotation()
        // @ts-ignore
        if (type) param.typeAnnotation = type
        this.resetEndLocation(param)

        return param
      }

      isAssignable(node: any, isBinding?: boolean): boolean {
        switch (node.type) {
          case 'TSTypeCastExpression':
            // @ts-ignore
            return this.isAssignable(node.expression, isBinding)
          case 'TSParameterProperty':
            return true
          case 'Identifier':
          case 'ObjectPattern':
          case 'ArrayPattern':
          case 'AssignmentPattern':
          case 'RestElement':
            return true

          case 'ObjectExpression': {
            // @ts-ignore
            const last = node.properties.length - 1
            // @ts-ignore
            return (node.properties as ObjectExpression['properties']).every(
              (prop, i) => {
                return (
                  // @ts-ignore
                  prop.type !== 'ObjectMethod' &&
                  (i === last || prop.type !== 'SpreadElement') &&
                  this.isAssignable(prop)
                )
              }
            )
          }

          case 'ObjectProperty':
            return this.isAssignable(node.value)

          case 'SpreadElement':
            return this.isAssignable(node.argument)

          case 'ArrayExpression':
            return (node as ArrayExpression).elements.every(
              element => element === null || this.isAssignable(element)
            )

          case 'AssignmentExpression':
            return node.operator === '='

          case 'ParenthesizedExpression':
            return this.isAssignable(node.expression)

          case 'MemberExpression':
          case 'OptionalMemberExpression':
            return !isBinding

          default:
            return false
        }
      }

      toAssignable(
        node: Node,
        isBinding: boolean = false,
        refDestructuringErrors = new DestructuringErrors()
      ): any {
        switch (node.type) {
          case 'ParenthesizedExpression':
            return this.toAssignableParenthesizedExpression(node, isBinding, refDestructuringErrors)
          case 'TSAsExpression':
          case 'TSNonNullExpression':
          case 'TSTypeAssertion':
            if (isBinding) {
              // todo do nothing here
              // this.expressionScope.recordArrowParemeterBindingError(
              //   TypeScriptError.UnexpectedTypeCastInParameter,
              //   { at: node }
              // )
            } else {
              this.raise(node.start, TypeScriptError.UnexpectedTypeCastInParameter)
            }
            // @ts-ignore
            return this.toAssignable(node.expression, isBinding, refDestructuringErrors)
          case 'AssignmentExpression':
            // @ts-ignore
            if (!isBinding && node.left.type === 'TSTypeCastExpression') {
              // @ts-ignore
              node.left = this.typeCastToParameter(node.left)
            }
            return node
          /* fall through */
          default:
            // @ts-ignore
            return super.toAssignable(node, isBinding, refDestructuringErrors)
        }
      }

      toAssignableParenthesizedExpression(
        node: Node,
        isBinding: boolean,
        refDestructuringErrors: DestructuringErrors
      ): void {
        // @ts-ignore
        switch (node.expression.type) {
          case 'TSAsExpression':
          case 'TSNonNullExpression':
          case 'TSTypeAssertion':
          case 'ParenthesizedExpression':
            // @ts-ignore
            return this.toAssignable(node.expression, isBinding, refDestructuringErrors)
          default:
            // @ts-ignore
            return super.toAssignable(node, isBinding, refDestructuringErrors)
        }
      }

      curPosition() {
        if (this.options.locations) {
          // @ts-ignore
          const position = super.curPosition()
          Object.defineProperty(position, 'offset', {
            get() {
              return function(n: number) {
                // @ts-ignore
                const np = new AcornParser.acorn.Position(this.line, this.column + n)
                np['index'] = this['index'] + n
                return np
              }
            }
          })
          position['index'] = this['pos']
          return position
        }
      }

      // todo we don't need to check checkToRestConversion
      // checkToRestConversion(node: Node, allowPattern: boolean): void {
      //   switch (node.type) {
      //     case 'TSAsExpression':
      //     case 'TSTypeAssertion':
      //     case 'TSNonNullExpression':
      //       this.checkToRestConversion(node.expression, false)
      //       break
      //     default:
      //       super.checkToRestConversion(node, allowPattern)
      //   }
      // }

      // todo we don't need this function here
      // isValidLVal(
      //   type:
      //     | "TSTypeCastExpression"
      //     | "TSParameterProperty"
      //     | "TSNonNullExpression"
      //     | "TSAsExpression"
      //     | "TSTypeAssertion",
      //   isUnparenthesizedInAssign: boolean,
      //   binding: BindingTypes,
      // ) {
      //   return (
      //     getOwn(
      //       {
      //         // Allow "typecasts" to appear on the left of assignment expressions,
      //         // because it may be in an arrow function.
      //         // e.g. `const f = (foo: number = 0) => foo;`
      //         TSTypeCastExpression: true,
      //         TSParameterProperty: "parameter",
      //         TSNonNullExpression: "expression",
      //         TSAsExpression: (binding !== BIND_NONE ||
      //           !isUnparenthesizedInAssign) && ["expression", true],
      //         TSTypeAssertion: (binding !== BIND_NONE ||
      //           !isUnparenthesizedInAssign) && ["expression", true],
      //       },
      //       type,
      //     ) || super.isValidLVal(type, isUnparenthesizedInAssign, binding)
      //   );
      // }

      parseBindingAtom(): Pattern {
        switch (this.type) {
          case tokTypes._this:
            // "this" may be the name of a parameter, so allow it.
            // @ts-ignore
            return this.parseIdent(/* liberal */ true)
          default:
            // @ts-ignore
            return super.parseBindingAtom()
        }
      }

      // todo we don't need checkCommaAfterRest and shouldParseArrow, achieve this feature in
      //  parseParenAndDistinguishExpression
      // shouldParseArrow(params: Array<N.Node>) {
      //   if (this.match(tt.colon)) {
      //     return params.every(expr => this.isAssignable(expr, true));
      //   }
      //   return super.shouldParseArrow(params);
      // }

      // checkCommaAfterRest(
      //   close: typeof charCodes[keyof typeof charCodes],
      // ): boolean {
      //   if (
      //     this.state.isAmbientContext &&
      //     this.match(tt.comma) &&
      //     this.lookaheadCharCode() === close
      //   ) {
      //     this.next();
      //     return false;
      //   } else {
      //     return super.checkCommaAfterRest(close);
      //   }
      // }

      // todo we don't support Decorator as this version
      // parseMaybeDecoratorArguments(expr: N.Expression): N.Expression {
      //   // handles `@f<<T>`
      //   if (this.match(tt.lt) || this.match(tt.bitShiftL)) {
      //     const typeArguments = this.tsParseTypeArgumentsInExpression();
      //
      //     if (this.match(tt.parenL)) {
      //       const call = super.parseMaybeDecoratorArguments(expr);
      //       call.typeParameters = typeArguments;
      //       return call;
      //     }
      //
      //     this.unexpected(null, tt.parenL);
      //   }
      //
      //   return super.parseMaybeDecoratorArguments(expr);
      // }

      parseParenAndDistinguishExpression(canBeArrow, forInit) {
        let startPos = this.start, startLoc = this['startLoc'], val,
          allowTrailingComma = this.options.ecmaVersion >= 8
        if (this.options.ecmaVersion >= 6) {
          this.next()

          let innerStartPos = this.start, innerStartLoc = this['startLoc']
          let exprList = [], first = true, lastIsComma = false
          let refDestructuringErrors = new DestructuringErrors,
            // @ts-ignore
            oldYieldPos = this['yieldPos'], oldAwaitPos = this['awaitPos'],
            spreadStart
          // @ts-ignore
          this['yieldPos'] = 0
          // @ts-ignore
          this['awaitPos'] = 0
          // Do not save awaitIdentPos to allow checking awaits nested in parameters
          while (this.type !== tokTypes.parenR) {
            // @ts-ignore
            first ? first = false : this.expect(tokTypes.comma)
            // @ts-ignore
            if (allowTrailingComma && this.afterTrailingComma(tokTypes.parenR, true)) {
              lastIsComma = true
              break
            } else if (this.type === tokTypes.ellipsis) {
              spreadStart = this.start
              // @ts-ignore
              exprList.push(this.parseParenItem(this.parseRestBinding()))

              // todo checkCommaAfterRest
              const checkCommaAfterRest = (() => {
                if (
                  this.isAmbientContext &&
                  this.match(tokTypes.comma) &&
                  this.lookaheadCharCode() === charCodes.rightParenthesis
                ) {
                  this.next()
                  return false
                } else {
                  return this.match(tokTypes.comma)
                }
              })()
              if (checkCommaAfterRest) {
                this.raise(this.start, 'Comma is not permitted after the rest element')
              }
              break
            } else {
              exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem))
            }
          }
          let innerEndPos = this['lastTokEnd'],
            innerEndLoc = this['lastTokEndLoc']
          // @ts-ignore
          this.expect(tokTypes.parenR)

          // todo typescript shouldParseArrow parseArrow
          const shouldParseArrow = ((): boolean => {
            if (this.match(tokTypes.colon)) {
              return exprList.every(expr => this.isAssignable(expr, true))
            }
            // @ts-ignore
            return !this.canInsertSemicolon()
          })()

          // @ts-ignore
          let arrowNode = this.startNodeAt(
            startPos,
            startLoc
          )
          if (
            canBeArrow &&
            shouldParseArrow &&
            (arrowNode = this.parseArrow(arrowNode))
          ) {
            // @ts-ignore
            this.checkPatternErrors(refDestructuringErrors, false)
            // @ts-ignore
            this.checkYieldAwaitInDefaultParams()
            // @ts-ignore
            this['yieldPos'] = oldYieldPos
            // @ts-ignore
            this['awaitPos'] = oldAwaitPos
            return this.parseArrowExpression(arrowNode, exprList, false, forInit)
          }

          if (!exprList.length || lastIsComma) this.unexpected(this['lastTokStart'])
          if (spreadStart) this.unexpected(spreadStart)
          // @ts-ignore
          this.checkExpressionErrors(refDestructuringErrors, true)
          // @ts-ignore
          this['yieldPos'] = oldYieldPos || this['yieldPos']
          // @ts-ignore
          this['awaitPos'] = oldAwaitPos || this['awaitPos']

          if (exprList.length > 1) {
            // @ts-ignore
            val = this.startNodeAt(innerStartPos, innerStartLoc)
            val.expressions = exprList
            this.finishNodeAt(val, 'SequenceExpression', innerEndPos, innerEndLoc)
          } else {
            val = exprList[0]
          }
        } else {
          // @ts-ignore
          val = this.parseParenExpression()
        }

        if (this.options.preserveParens) {
          // @ts-ignore
          let par = this.startNodeAt(startPos, startLoc)
          par.expression = val
          return this.finishNode(par, 'ParenthesizedExpression')
        } else {
          return val
        }
      }

      // todo we don't need this function, achieve this feature in
      //  parseSubscript
      // shouldParseAsyncArrow(): boolean {
      //   return this.match(tt.colon) || super.shouldParseAsyncArrow()
      // }

      parseTaggedTemplateExpression(
        base: Expression,
        startPos: number,
        startLoc: Position,
        optionalChainMember: boolean
      ): any {
        // @ts-ignore
        const node = this.startNodeAt(
          startPos,
          startLoc
        )
        node.tag = base
        // @ts-ignore
        node.quasi = this.parseTemplate(true)
        if (optionalChainMember) {
          // @ts-ignore
          this.raise(startLoc.start, 'Tagged Template Literals are not allowed'
            + ' in'
            + ' optionalChain.')
        }
        return this.finishNode(node, 'TaggedTemplateExpression')
      }

      parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
        let _optionalChained = optionalChained
        // --- start extend parseSubscript
        if (
          !this.hasPrecedingLineBreak() &&
          // NODE: replace bang
          this.match(tokTypes.prefix) &&
          this['value'] === '!'
        ) {
          // When ! is consumed as a postfix operator (non-null assertion),
          // disallow JSX tag forming after. e.g. When parsing `p! < n.p!`
          // `<n.p` can not be a start of JSX tag
          this.canStartJSXElement = false
          this.next()
          // @ts-ignore
          const nonNullExpression = this.startNodeAt(
            startPos,
            startLoc
          )
          nonNullExpression.expression = base
          base = this.finishNode(nonNullExpression, 'TSNonNullExpression')
          return base
        }

        let isOptionalCall = false
        if (
          this.match(tokTypes.questionDot) &&
          this.lookaheadCharCode() === charCodes.lessThan
        ) {
          if (noCalls) {
            // NODE: we don't need to change state's stop to false.
            // state.stop = true
            return base
          }
          base.optional = true
          _optionalChained = isOptionalCall = true
          this.next()
        }

        // handles 'f<<T>'
        if (this.match(tokTypes.relational) || this.match(tokTypes.bitShift)) {
          let missingParenErrorLoc
          // tsTryParseAndCatch is expensive, so avoid if not necessary.
          // There are number of things we are going to "maybe" parse, like type arguments on
          // tagged template expressions. If any of them fail, walk it back and continue.
          const result = this.tsTryParseAndCatch(() => {
            if (!noCalls && this.atPossibleAsyncArrow(base)) {
              // Almost certainly this is a generic async function `async <T>() => ...
              // But it might be a call with a type argument `async<T>();`
              const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(
                startPos,
                startLoc,
                forInit
              )
              if (asyncArrowFn) {
                base = asyncArrowFn
                return base
              }
            }

            const typeArguments = this.tsParseTypeArgumentsInExpression()
            if (!typeArguments) return base

            if (isOptionalCall && !this.match(tokTypes.parenL)) {
              // @ts-ignore
              missingParenErrorLoc = this.curPosition()
              return base
            }

            if (tokenIsTemplate(this.type)) {
              const result = this.parseTaggedTemplateExpression(
                base,
                startPos,
                startLoc,
                _optionalChained
              )
              result.typeParameters = typeArguments
              base = result
              return base
            }
            // @ts-ignore
            if (!noCalls && this.eat(tokTypes.parenL)) {
              let refDestructuringErrors = new DestructuringErrors
              // @ts-ignore
              const node = this.startNodeAt(startPos, startLoc)
              node.callee = base
              // possibleAsync always false here, because we would have handled it above.
              // @ts-expect-error (won't be any undefined arguments)
              node.arguments = this.parseExprList(
                tokTypes.parenR,
                this.options.ecmaVersion >= 8,
                false,
                refDestructuringErrors
              )

              // Handles invalid case: `f<T>(a:b)`
              this.tsCheckForInvalidTypeCasts(node.arguments)

              node.typeParameters = typeArguments
              if (_optionalChained) {
                node.optional = isOptionalCall
              }
              // @ts-ignore
              this.checkExpressionErrors(refDestructuringErrors, true)
              base = this.finishNode(node, 'CallExpression')
              return base
            }

            const tokenType = this.type
            if (
              // a<b>>c is not (a<b>)>c, but a<(b>>c)
              tokenType === tokTypes.relational ||
              // a<b>>>c is not (a<b>)>>c, but a<(b>>>c)
              tokenType === tokTypes.bitShift ||
              // a<b>c is (a<b)>c
              (tokenType !== tokTypes.parenL &&
                tokenCanStartExpression(tokenType) &&
                !this.hasPrecedingLineBreak())
            ) {
              // Bail out.
              return base
            }
            // @ts-ignore
            const node = this.startNodeAt(
              startPos,
              startLoc
            )
            node.expression = base
            node.typeParameters = typeArguments
            base = this.finishNode(node, 'TSInstantiationExpression')
            return base
          })

          if (missingParenErrorLoc) {
            this.unexpected(missingParenErrorLoc)
          }

          if (result) {
            if (
              result.type === 'TSInstantiationExpression' &&
              (this.match(tokTypes.dot) ||
                (this.match(tokTypes.questionDot) &&
                  this.lookaheadCharCode() !== charCodes.leftParenthesis))
            ) {
              this.raise(
                this['startLoc'].start,
                TypeScriptError.InvalidPropertyAccessAfterInstantiationExpression
              )
            }
            base = result
            return base
          }
        }
        // --- end
        let optionalSupported = this.options.ecmaVersion >= 11
        // @ts-ignore
        let optional = optionalSupported && this.eat(tokTypes.questionDot)
        if (noCalls && optional) this.raise(this['lastTokStart'], 'Optional chaining cannot appear in the callee of new expressions')
        // @ts-ignore
        let computed = this.eat(tokTypes.bracketL)
        // @ts-ignore
        if (computed || (optional && this.type !== tokTypes.parenL && this.type !== tokTypes.backQuote) || this.eat(tokTypes.dot)) {
          // @ts-ignore
          let node = this.startNodeAt(startPos, startLoc)
          node.object = base
          if (computed) {
            // @ts-ignore
            node.property = this.parseExpression()
            // @ts-ignore
            this.expect(tokTypes.bracketR)
          } else if (this.type === tokTypes.privateId && base.type !== 'Super') {
            // @ts-ignore
            node.property = this.parsePrivateIdent()
          } else {
            // @ts-ignore
            node.property = this.parseIdent(this.options.allowReserved !== 'never')
          }
          node.computed = !!computed
          if (optionalSupported) {
            node.optional = optional
          }
          base = this.finishNode(node, 'MemberExpression')
          // @ts-ignore
        } else if (!noCalls && this.eat(tokTypes.parenL)) {
          let refDestructuringErrors = new DestructuringErrors,
            // @ts-ignore
            oldYieldPos = this['yieldPos'], oldAwaitPos = this['awaitPos'],
            // @ts-ignore
            oldAwaitIdentPos = this['awaitIdentPos']
          // @ts-ignore
          this['yieldPos'] = 0
          // @ts-ignore
          this['awaitPos'] = 0
          // @ts-ignore
          this['awaitIdentPos'] = 0
          // @ts-ignore
          let exprList = this.parseExprList(tokTypes.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors)

          // todo typescript shouldParseAsyncArrow
          const shouldParseAsyncArrow = ((): boolean => {
            return this.match(tokTypes.colon) || (// @ts-ignore
              !this.canInsertSemicolon() && this.eat(tokTypes.arrow)
            )
          })()
          if (
            maybeAsyncArrow && !optional && shouldParseAsyncArrow
          ) {
            // @ts-ignore
            this.checkPatternErrors(refDestructuringErrors, false)
            // @ts-ignore
            this.checkYieldAwaitInDefaultParams()
            // @ts-ignore
            if (this['awaitIdentPos'] > 0)
              // @ts-ignore
              this.raise(this['awaitIdentPos'], 'Cannot use \'await\' as identifier inside an async function')
            // @ts-ignore
            this['yieldPos'] = oldYieldPos
            // @ts-ignore
            this['awaitPos'] = oldAwaitPos
            // @ts-ignore
            this['awaitIdentPos'] = oldAwaitIdentPos
            // @ts-ignore
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit)
          }
          // @ts-ignore
          this.checkExpressionErrors(refDestructuringErrors, true)
          // @ts-ignore
          this['yieldPos'] = oldYieldPos || this['yieldPos']
          // @ts-ignore
          this['awaitPos'] = oldAwaitPos || this['awaitPos']
          // @ts-ignore
          this['awaitIdentPos'] = oldAwaitIdentPos || this['awaitIdentPos']
          // @ts-ignore
          let node = this.startNodeAt(startPos, startLoc)
          node.callee = base
          node.arguments = exprList
          if (optionalSupported) {
            node.optional = optional
          }
          base = this.finishNode(node, 'CallExpression')
        } else if (this.type === tokTypes.backQuote) {
          // NOTE: change to _optionalChained
          if (optional || _optionalChained) {
            this.raise(this.start, 'Optional chaining cannot appear in the tag of tagged template expressions')
          }
          // @ts-ignore
          let node = this.startNodeAt(startPos, startLoc)
          node.tag = base
          node.quasi = this.parseTemplate({ isTagged: true })
          base = this.finishNode(node, 'TaggedTemplateExpression')
        }
        return base
      }

      // todo we don't need this function. achieve this feature in
      //  parsePropertyValue
      // canHaveLeadingDecorator() {
      //   // Avoid unnecessary lookahead in checking for abstract class unless needed!
      //   return super.canHaveLeadingDecorator() || this.isAbstractClass()
      // }

      parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
        // todo parseObjPropValue
        const typeParameters = this.tsTryParseTypeParameters()
        if (typeParameters) prop.typeParameters = typeParameters

        if ((isGenerator || isAsync) && this.type === tokTypes.colon)
          // @ts-ignore
          this.unexpected()
        // @ts-ignore
        if (this.eat(tokTypes.colon)) {
          prop.value = isPattern ? this.parseMaybeDefault(this.start, this['startLoc']) : this.parseMaybeAssign(false, refDestructuringErrors)
          prop.kind = 'init'
        } else if (this.options.ecmaVersion >= 6 && this.type === tokTypes.parenL) {
          // @ts-ignore
          if (isPattern) this.unexpected()
          prop.kind = 'init'
          prop.method = true
          prop.value = this.parseMethod(isGenerator, isAsync)
        } else if (!isPattern && !containsEsc &&
          this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === 'Identifier' &&
          (prop.key.name === 'get' || prop.key.name === 'set') &&
          (this.type !== tokTypes.comma && this.type !== tokTypes.braceR && this.type !== tokTypes.eq)) {
          // @ts-ignore
          if (isGenerator || isAsync) this.unexpected()
          prop.kind = prop.key.name
          // @ts-ignore
          this.parsePropertyName(prop)
          prop.value = this.parseMethod(false)

          // here is getGetterSetterExpectedParamCount
          let paramCount = prop.kind === 'get' ? 0 : 1
          const firstParam = prop.value.params[0]
          const hasContextParam = firstParam && this.isThisParam(firstParam)
          paramCount = hasContextParam ? paramCount + 1 : paramCount
          // end

          if (prop.value.params.length !== paramCount) {
            let start = prop.value.start
            if (prop.kind === 'get')
              this.raiseRecoverable(start, 'getter should have no params')
            else
              this.raiseRecoverable(start, 'setter should have exactly one param')
          } else {
            if (prop.kind === 'set' && prop.value.params[0].type === 'RestElement')
              this.raiseRecoverable(prop.value.params[0].start, 'Setter cannot use rest params')
          }
        } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === 'Identifier') {
          // @ts-ignore
          if (isGenerator || isAsync) this.unexpected()
          // @ts-ignore
          this.checkUnreserved(prop.key)
          if (prop.key.name === 'await' && !this['awaitIdentPos'])
            this['awaitIdentPos'] = startPos
          prop.kind = 'init'
          if (isPattern) {
            // @ts-ignore
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key))
          } else if (this.type === tokTypes.eq && refDestructuringErrors) {
            if (refDestructuringErrors.shorthandAssign < 0)
              refDestructuringErrors.shorthandAssign = this.start
            // @ts-ignore
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key))
          } else {
            // @ts-ignore
            prop.value = this.copyNode(prop.key)
          }
          prop.shorthand = true
          // @ts-ignore
        } else this.unexpected()
      }

      parseTryStatement(node) {
        this.next()
        // @ts-ignore
        node.block = this.parseBlock()
        node.handler = null
        if (this.type === tokTypes._catch) {
          // @ts-ignore
          let clause = this.startNode()
          this.next()
          // @ts-ignore
          if (this.eat(tokTypes.parenL)) {
            const param = this.parseBindingAtom()
            let simple = param.type === 'Identifier'
            // @ts-ignore
            this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0)
            // @ts-ignore
            this.checkLValPattern(param, simple ? acornScope.BIND_SIMPLE_CATCH : acornScope.BIND_LEXICAL)

            // start add ts support
            const type = this.tsTryParseTypeAnnotation()
            if (type) {
              // @ts-ignore
              param.typeAnnotation = type
              this.resetEndLocation(param)
            }
            // end

            clause.param = param
            // @ts-ignore
            this.expect(tokTypes.parenR)
          } else {
            // @ts-ignore
            if (this.options.ecmaVersion < 10) this.unexpected()
            clause.param = null
            // @ts-ignore
            this.enterScope(0)
          }
          // @ts-ignore
          clause.body = this.parseBlock(false)
          // @ts-ignore
          this.exitScope()
          node.handler = this.finishNode(clause, 'CatchClause')
        }
        // @ts-ignore
        node.finalizer = this.eat(tokTypes._finally) ? this.parseBlock() : null
        if (!node.handler && !node.finalizer)
          this.raise(node.start, 'Missing catch or finally clause')
        return this.finishNode(node, 'TryStatement')
      }

      parseClass(
        node: any,
        isStatement: boolean
      ): any {
        const oldInAbstractClass = this.inAbstractClass
        this.inAbstractClass = !!(node as any).abstract
        try {
          this.next()

          // ---start origin parseClass
          // ecma-262 14.6 Class Definitions
          // A class definition is always strict mode code.
          const oldStrict = this['strict']
          this['strict'] = true

          this.parseClassId(node, isStatement)
          this.parseClassSuper(node)
          // @ts-ignore
          const privateNameMap = this.enterClassBody()
          // @ts-ignore
          const classBody = this.startNode()
          let hadConstructor = false
          classBody.body = []
          // @ts-ignore
          this.expect(tokTypes.braceL)
          while (this.type !== tokTypes.braceR) {
            const element = this.parseClassElement(node.superClass !== null)
            if (element) {
              classBody.body.push(element)
              if (element.type === 'MethodDefinition' && element.kind === 'constructor') {
                if (hadConstructor) this.raise(element.start, 'Duplicate constructor in the same class')
                // todo typescript support duplicate constructor
                // hadConstructor = true
              } else if (element.key && element.key.type === 'PrivateIdentifier' && isPrivateNameConflicted(privateNameMap, element)) {
                this.raiseRecoverable(element.key.start, `Identifier '#${element.key.name}' has already been declared`)
              }
            }
          }
          this['strict'] = oldStrict
          this.next()
          // @ts-ignore
          node.body = this.finishNode(classBody, 'ClassBody')
          // @ts-ignore
          this.exitClassBody()
          return this.finishNode(node, isStatement ? 'ClassDeclaration' : 'ClassExpression')
          // ---end
        } finally {
          this.inAbstractClass = oldInAbstractClass
        }
      }

      parseBindingList(close, allowEmpty, allowTrailingComma) {
        let elts = [], first = true
        // @ts-ignore
        while (!this.eat(close)) {
          if (first) first = false
          // @ts-ignore
          else this.expect(tokTypes.comma)
          if (allowEmpty && this.match(tokTypes.comma)) {
            elts.push(null)
            // @ts-ignore
          } else if (allowTrailingComma && this.afterTrailingComma(close)) {
            break
          } else if (this.match(tokTypes.ellipsis)) {
            // @ts-ignore
            let rest = this.parseRestBinding()
            this.parseBindingListItem(rest)
            elts.push(rest)
            if (this.type === tokTypes.comma) this.raise(this.start, 'Comma is not permitted after the rest element')
            // @ts-ignore
            this.expect(close)
            break
          } else {
            elts.push(this.parseAssignableListItem(false))
          }
        }
        return elts
      }

      parseMethod(
        isGenerator: boolean,
        isAsync?: boolean,
        allowDirectSuper?: boolean,
        inClassScope?: boolean
      ) {
        // @ts-ignore
        let node = this.startNode(), oldYieldPos = this['yieldPos'],
          oldAwaitPos = this['awaitPos'],
          oldAwaitIdentPos = this['awaitIdentPos']
        // @ts-ignore
        this.initFunction(node)
        if (this.options.ecmaVersion >= 6)
          node.generator = isGenerator
        if (this.options.ecmaVersion >= 8)
          node.async = !!isAsync

        this['yieldPos'] = 0
        this['awaitPos'] = 0
        this['awaitIdentPos'] = 0
        // @ts-ignore
        this.enterScope(
          functionFlags(isAsync, node.generator) |
          acornScope.SCOPE_SUPER |
          (allowDirectSuper ? acornScope.SCOPE_DIRECT_SUPER : 0)
        )
        // @ts-ignore
        this.expect(tokTypes.parenL)
        // @ts-ignore
        node.params = this.parseBindingList(tokTypes.parenR, false, this.options.ecmaVersion >= 8)
        // @ts-ignore
        this.checkYieldAwaitInDefaultParams()
        this.parseFunctionBody(node, false, true, false, {
          isClassMethod: inClassScope
        })
        this['yieldPos'] = oldYieldPos
        this['awaitPos'] = oldAwaitPos
        this['awaitIdentPos'] = oldAwaitIdentPos

        if (node.abstract) {
          const hasBody = !!node.body
          if (hasBody) {
            // @ts-ignore
            const { key } = method
            this.raise(node.start,
              TypeScriptError.AbstractMethodHasImplementation(
                key.type === 'Identifier' && !node.computed
                  ? key.name
                  : `[${this.input.slice(key.start, key.end)}]`
              )
            )
          }
        }
        return this.finishNode(node, 'FunctionExpression')
      }

      static parse(input: string, options: Options) {
        const parser = new this(options, input)
        if (dts) {
          parser.isAmbientContext = true
        }
        return parser.parse()
      }

      static parseExpressionAt(input: string, pos: number, options: Options) {
        const parser = new this(options, input, pos)
        if (dts) {
          parser.isAmbientContext = true
        }
        parser.nextToken()
        // @ts-ignore
        return parser.parseExpressionAt()
      }

      parseImportSpecifiers() {
        let nodes = [], first = true
        if (this.type === tokTypes.name) {
          // import defaultObj, { x, y as z } from '...'
          // @ts-ignore
          let node = this.startNode()
          // @ts-ignore
          node.local = this.parseIdent()
          // @ts-ignore
          this.checkLValSimple(node.local, acornScope.BIND_LEXICAL)
          nodes.push(this.finishNode(node, 'ImportDefaultSpecifier'))
          // @ts-ignore
          if (!super.eat(tokTypes.comma)) return nodes
        }
        if (this.type === tokTypes.star) {
          // @ts-ignore
          let node = this.startNode()
          this.next()
          // @ts-ignore
          this.expectContextual('as')
          // @ts-ignore
          node.local = this.parseIdent()
          // @ts-ignore
          this.checkLValSimple(node.local, acornScope.BIND_LEXICAL)
          nodes.push(this.finishNode(node, 'ImportNamespaceSpecifier'))
          return nodes
        }
        // @ts-ignore
        super.expect(tokTypes.braceL)
        // @ts-ignore
        while (!this.eat(tokTypes.braceR)) {
          if (!first) {
            // @ts-ignore
            this.expect(tokTypes.comma)
            // @ts-ignore
            if (this.afterTrailingComma(tokTypes.braceR)) {
              break
            }
          } else {
            first = false
          }
          // @ts-ignore
          let node = this.startNode()
          const isMaybeTypeOnly = this.ts_isContextual(tsTokenType.type)
          // @ts-ignore
          node.imported = this.parseModuleExportName()
          if (isMaybeTypeOnly) {
            this.parseTypeOnlyImportExportSpecifier(
              node,
              /* isImport */ true,
              node.importKind === 'type'
            )

            nodes.push(this.finishNode(node, 'ImportSpecifier'))
          } else {
            node.importKind = 'value'
            if (this.eatContextual('as')) {
              // @ts-ignore
              node.local = super.parseIdent()
            } else {
              // @ts-ignore
              this.checkUnreserved(node.imported)
              node.local = node.imported
            }
            // @ts-ignore
            this.checkLValSimple(node.local, acornScope.BIND_LEXICAL)
            nodes.push(this.finishNode(node, 'ImportSpecifier'))
          }
        }
        return nodes
      }

      parseExportSpecifiers(exports, isInTypeExport = false) {
        let nodes = [], first = true
        // export { x, y as z } [from '...']
        // @ts-ignore
        this.expect(tokTypes.braceL)
        // @ts-ignore
        while (!this.eat(tokTypes.braceR)) {
          if (!first) {
            // @ts-ignore
            this.expect(tokTypes.comma)
            // @ts-ignore
            if (this.afterTrailingComma(tokTypes.braceR)) break
          } else {
            first = false
          }

          const isMaybeTypeOnly = this.ts_isContextual(tsTokenType.type)
          const isString = this.match(tokTypes.string)
          // todo support exportDefaultFrom
          // const isDefaultSpecifier = this.isExportDefaultSpecifier()
          // @ts-ignore
          let node = this.startNode()
          // @ts-ignore
          node.local = this.parseModuleExportName()
          if (!isString && isMaybeTypeOnly) {
            this.parseTypeOnlyImportExportSpecifier(
              node,
              /* isImport */ false,
              isInTypeExport
            )
            this.finishNode(node, 'ExportSpecifier')
          } else {
            node.exportKind = 'value'
            // @ts-ignore
            if (this.eatContextual('as')) {
              // @ts-ignore
              node.exported = this.parseModuleExportName()
            } else {
              // @ts-ignore
              node.exported = this.copyNode(node.local)
            }
            this.finishNode(node, 'ExportSpecifier')
          }
          // @ts-ignore
          this.checkExport(
            exports,
            node.exported,
            node.exported.start
          )

          nodes.push(node)
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
          // @ts-ignore
          const firstAs = this.parseIdent()
          // @ts-ignore
          if (this.isContextual(tsTokenType.as)) {
            // { type as as ...? }
            // @ts-ignore
            const secondAs = this.parseIdent()
            if (tokenIsKeywordOrIdentifier(this.type)) {
              // { type as as something }
              hasTypeSpecifier = true
              leftOfAs = firstAs
              rightOfAs = isImport
                // @ts-ignore
                ? this.parseIdent()
                // @ts-ignore
                : this.parseModuleExportName()
              canParseAsKeyword = false
            } else {
              // { type as as }
              rightOfAs = secondAs
              canParseAsKeyword = false
            }
          } else if (tokenIsKeywordOrIdentifier(this.type)) {
            // { type as something }
            canParseAsKeyword = false
            rightOfAs = isImport
              // @ts-ignore
              ? this.parseIdent()
              // @ts-ignore
              : this.parseModuleExportName()
          } else {
            // { type as }
            hasTypeSpecifier = true
            leftOfAs = firstAs
          }
        } else if (tokenIsKeywordOrIdentifier(this.type)) {
          // { type something ...? }
          hasTypeSpecifier = true
          if (isImport) {
            // @ts-ignore
            leftOfAs = super.parseIdent(true)
            if (!this.ts_isContextual(tsTokenType.as)) {
              // @ts-ignore
              this.checkUnreserved(leftOfAs)
            }
          } else {
            // @ts-ignore
            leftOfAs = this.parseModuleExportName()
          }
        }
        if (hasTypeSpecifier && isInTypeOnlyImportExport) {
          this.raise(
            loc,
            isImport
              ? TypeScriptError.TypeModifierIsUsedInTypeImports
              : TypeScriptError.TypeModifierIsUsedInTypeExports
          )
        }

        node[leftOfAsKey] = leftOfAs
        node[rightOfAsKey] = rightOfAs

        const kindKey = isImport ? 'importKind' : 'exportKind'
        node[kindKey] = hasTypeSpecifier ? 'type' : 'value'
        // @ts-ignore
        if (canParseAsKeyword && this.eatContextual('as')) {
          node[rightOfAsKey] = isImport
            // @ts-ignore
            ? this.parseIdent()
            // @ts-ignore
            : this.parseModuleExportName()
        }
        if (!node[rightOfAsKey]) {
          // @ts-ignore
          node[rightOfAsKey] = this.copyNode(node[leftOfAsKey])
        }
        if (isImport) {
          // @ts-ignore
          this.checkLValSimple(node[rightOfAsKey], BIND_LEXICAL)
        }
      }

      raiseRecoverable(pos: number, message: string) {
        switch (message) {
          case 'Duplicate constructor in the same class':
            return
          default: {
            return super.raiseRecoverable(pos, message)
          }
        }
      }

    } as typeof AcornParser
  }
}
