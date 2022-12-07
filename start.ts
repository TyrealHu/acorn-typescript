import * as acorn from 'acorn'
import tsPlugin from './src'

const node = acorn.Parser.extend(tsPlugin()).parse(`
const message: number = 1
export type Test = '111111'
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

console.log(node)
debugger
