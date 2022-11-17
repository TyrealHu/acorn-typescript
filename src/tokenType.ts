// @ts-ignore
import { TokenType, keywordTypes } from 'acorn'

const startsExpr = true

// Succinct definitions of keyword token types
// @ts-ignore
function kw(name, options: any = {}) {
  options.keyword = name
  return new TokenType(name, options)
}

function kwLike(_name, options: any = {}) {
  return new TokenType('name', options)
}

export const tsTokenType = {
  as: kwLike('name', { startsExpr }),
  assert: kwLike('assert', { startsExpr }),
  async: kwLike('async', { startsExpr }),
  await: kwLike('await', { startsExpr }),
  from: kwLike('from', { startsExpr }),
  get: kwLike('get', { startsExpr }),
  let: kwLike('let', { startsExpr }),
  meta: kwLike('meta', { startsExpr }),
  of: kwLike('of', { startsExpr }),
  sent: kwLike('sent', { startsExpr }),
  set: kwLike('set', { startsExpr }),
  static: kwLike('static', { startsExpr }),
  yield: kwLike('yield', { startsExpr }),

  // Flow and TypeScript Keywordlike
  asserts: kwLike('asserts', { startsExpr }),
  checks: kwLike('checks', { startsExpr }),
  exports: kwLike('exports', { startsExpr }),
  global: kwLike('global', { startsExpr }),
  implements: kwLike('implements', { startsExpr }),
  intrinsic: kwLike('intrinsic', { startsExpr }),
  infer: kwLike('infer', { startsExpr }),
  is: kwLike('is', { startsExpr }),
  mixins: kwLike('mixins', { startsExpr }),
  proto: kwLike('proto', { startsExpr }),
  require: kwLike('require', { startsExpr }),
  // start: isTSTypeOperator
  keyof: kwLike('keyof', { startsExpr }),
  readonly: kwLike('readonly', { startsExpr }),
  unique: kwLike('unique', { startsExpr }),
  // end: isTSTypeOperator
  // start: isTSDeclarationStart
  abstract: kwLike('abstract', { startsExpr }),
  declare: kwLike('declare', { startsExpr }),
  enum: kwLike('enum', { startsExpr }),
  module: kwLike('module', { startsExpr }),
  namespace: kwLike('namespace', { startsExpr }),
  // start: isFlowInterfaceOrTypeOrOpaque
  interface: kwLike('interface', { startsExpr }),
  type: kwLike('type', { startsExpr }),
  // end: isTSDeclarationStart
  opaque: kwLike('opaque', { startsExpr }),
  // end: isFlowInterfaceOrTypeOrOpaque
}

export const jsxTokenType = {
  // jsx
  jsxTagStart: new TokenType('jsxTagStart', { startsExpr })
}

export const tsKeywordsRegExp = new RegExp(
  `^(?:${Object.keys(tsTokenType).join('|')})$`
)
