import * as acorn from 'acorn'
import tsPlugin from './src/index'

/*
*
* */
const node = acorn.Parser.extend(tsPlugin()).parse(`
const a = 1
type A = number
export {
  a,
  type A as B
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})
// @ts-ignore
console.log(JSON.stringify(node, null, 2))
