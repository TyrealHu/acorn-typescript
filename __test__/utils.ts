import * as acorn from 'acorn'
import tsPlugin from '../lib/index'

const Parser = acorn.Parser.extend(tsPlugin())

export function parseSource(input: string) {
  return Parser.parse(input, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: true
  })
}
