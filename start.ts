import * as acorn from 'acorn'
import tsPlugin from './src'

acorn.Parser.extend(tsPlugin()).parse(`
import type a from './a.js'
`, {
  sourceType: 'module',
  ecmaVersion: 'latest'
})
