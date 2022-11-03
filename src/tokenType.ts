import { TokenType } from 'acorn'

const startsExpr = true

// Succinct definitions of keyword token types
function kw(name, options: any = {}) {
  options.keyword = name
  return new TokenType(name, options)
}

export const tsTokenType = {
  as: kw('name', { startsExpr }),
  from: kw('name', { startsExpr }),
  require: kw('name', { startsExpr }),
  abstract: kw('name', { startsExpr }),
  declare: kw('name', { startsExpr }),
  namespace: kw('name', { startsExpr }),
  interface: kw('name', { startsExpr }),
  type: kw('name', { startsExpr }),
  asserts: kw('name', { startsExpr }),
  is: kw("name", { startsExpr }),
  let: kw("name", { startsExpr }),
  enum: kw("name", { startsExpr }),
  global: kw("name", { startsExpr }),

  // jsx
  jsxTagStart: new TokenType('jsxTagStart', { startsExpr })
}

export const tsKeywordsRegExp = new RegExp(
  '^(?:global|enum|let|is|asserts|declare|abstract|as|type|from|require|namespace|interface)$'
)
