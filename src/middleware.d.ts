import { Parser, Node, TokenType, Position } from 'acorn'
import type { Options } from 'acorn'

export class AcornParseClass extends Parser {
  options: Options & {
    onComment: any
  }
  pos: number
  potentialArrowAt: number
  yieldPos: number
  value: any
  containsEsc: boolean
  awaitPos: number
  keywords: any
  awaitIdentPos: number
  strict: boolean
  lastTokStart: number
  lastTokEnd: number
  inGenerator: any
  exprAllowed: boolean
  labels: any[]
  scopeStack: any[]
  undefinedExports: any
  lastTokEndLoc: any
  lastTokStartLoc: any
  context: any[]
  endLoc: any
  startLoc: any
  potentialArrowInForAwait: boolean

  constructor(options: Options, input: string, startPos?: number);

  parseImport(node: Node): any;

  parseImportSpecifier(): any

  parseExport(node: Node, exports: any): any

  parseExportDeclaration(node: Node): any

  parseExportSpecifiers(exports: any): any[]

  parseModuleExportName(): any

  expectContextual(name: string)

  semicolon()

  eat(type: TokenType): boolean

  checkExport(exports: any, name: any, pos: number)

  unexpected(pos?: number)

  startNode(): any

  startNodeAt(pos: number, loc: any): any

  isAsyncFunction(): boolean

  checkVariableExport(exports: any, decls: any)

  checkUnreserved(options: {
    start: number,
    end: number,
    name: string
  })

  checkLocalExport(id: any): any

  parseMaybeDefault(startPos: number, startLoc: any, left: any): any

  finishOp(type: TokenType, size: number)

  getTokenFromCode(code: number): TokenType

  readToken_lt_gt(code: number): TokenType

  fullCharCodeAtPos(): number

  canInsertSemicolon(): boolean

  parseFunctionParams(node: any): void

  expect(type: TokenType): void

  readWord1(): string

  parseArrowExpression(node: any, param: any, isAsync?: boolean, forInit?: boolean)

  curContext(): any[]

  updateContext(prevType: TokenType)

  isContextual(name: string): boolean

  eatContextual(name): boolean

  parseLiteral(value: string): any

  checkLValSimple(expr: any, bindingType?: number, checkClashes?: any)

  enterScope(flags: any): void

  exitScope(): void

  parseFunctionStatement(node: any, isAsync?: boolean, declarationPosition?: any)

  parseObj(isPattern?: boolean, refDestructuringErrors?: any)

  parseBindingList(close: TokenType, allowEmpty?: boolean, allowTrailingComma?: boolean, allowModifiers?: boolean)

  parsePropertyName(prop: any): any

  isLet(context?: any): boolean

  parseTemplateElement({ isTagged }: { isTagged: boolean }): any

  parseExpression(forInit?: boolean, refDestructuringErrors?: any): any

  initFunction(node: any): void

  parseFunctionBody(node: any, isArrowFunction?: boolean, isMethod?: boolean, forInit?: boolean)

  parseSubscripts(base: any, startPos: number, startLoc: Position, noCalls?: any, forInit?: any)

  parseExprList(close: TokenType, allowTrailingComma?: any, allowEmpty?: any, refDestructuringErrors?: any)

  parseExprOp(left: any, leftStartPos: number, leftStartLoc: Position, minPrec?: any, forInit?: any)

  toAssignableList(exprList: any[], isBinding?: boolean)

  parseMaybeUnary(refExpressionErrors?: any, sawUnary?: boolean, incDec?: boolean, forInit?: boolean): any

  readRegexp(): any

  overrideContext(ctx: any)

  isSimpleAssignTarget(expr: any): boolean

  parseExprImport(forNew?: boolean): any

  next(ignoreEscapeSequenceInKeyword?: boolean): any

  parseStatement(context: any, topLevel?: boolean, exports?: any): any

  parseExpressionStatement(node: any, expre: any)

  shouldParseExportStatement(): boolean

  parseExprOps(forInit?: boolean, refDestructuringErrors?: any): any

  checkExpressionErrors(refDestructuringErrors: any, andThrow?: boolean)

  parseParenItem(item: any): any

  parseClassId(node: any, isStatement?: boolean)

  parseClassField(field: any): any

  parseClassStaticBlock(node: any): any

  isClassElementNameStart(): boolean

  parseClassElementName(element: any)

  parseClassSuper(node: any)

  parseVarId(decl: any, kind: 'var' | 'let' | 'const')

  parseMaybeAssign(forInit?: boolean, refDestructuringErrors?: any, afterLeftParse?: any)

  toAssignable(node: any, isBinding?: boolean, refDestructuringErrors?: any)

  curPosition(): Position

  checkPatternErrors(refDestructuringErrors?: any, isAssign?: boolean)

  parseExprSubscripts(refDestructuringErrors?: any, forInit?: boolean): any

  checkYieldAwaitInDefaultParams()

  parseParenExpression(): any

  parseBindingAtom(): any

  afterTrailingComma(tokType: TokenType, notNext?: boolean)

  parsePrivateIdent(): any

  parseRestBinding: any

  parseBlock(createNewLexicalScope?: boolean, node?: any, exitStrict?: boolean): any

  enterClassBody(): any

  exitClassBody()

  parseIdent(liberal?: boolean): any

  copyNode(node: any): any

  checkLValPattern(expr: any, bindingType?: number, checkClashes?: any)

  isAsyncProp(prop: any): boolean

  shouldParseArrow(): boolean

  parseYield(forInit?: any): any

  parseProperty(isPattern?: boolean, refDestructuringErrors?: any): any
}
