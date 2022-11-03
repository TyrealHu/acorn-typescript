import * as acorn from 'acorn'
import tsPlugin from './src'

acorn.Parser.extend(tsPlugin()).parse(`
export type Test = '111111'
`, {
  sourceType: 'module',
  ecmaVersion: 'latest'
})
