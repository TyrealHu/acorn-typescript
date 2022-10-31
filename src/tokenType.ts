import { TokenType } from 'acorn'

const startsExpr = true

// Succinct definitions of keyword token types
function kw(name, options: any = {}) {
  options.keyword = name
  return new TokenType(name, options)
}

export const tsTokenType = {
  as: kw('name', { startsExpr }),
  type: kw('name', { startsExpr }),
  from: kw('name', { startsExpr }),
  require: kw('name', { startsExpr })
}

export const tsKeywordsRegExp = new RegExp('^(?:as|type|from|require)$')
