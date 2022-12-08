import * as acorn from 'acorn'
import tsPlugin from './src'

const node = acorn.Parser.extend(tsPlugin()).parse(`import './index.js'`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

console.log(node)
debugger
