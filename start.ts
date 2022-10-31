import * as acorn from 'acorn'
import tsPlugin from './src'

acorn.Parser.extend(tsPlugin()).parse(`
import type Test = require('./a.js')
`, {
  sourceType: 'module',
  ecmaVersion: 'latest'
})
