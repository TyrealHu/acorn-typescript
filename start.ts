import * as acorn from 'acorn'
import tsPlugin from './src/index'

const node = acorn.Parser.extend(tsPlugin()).parse(`
const Name = 'tyreal'
let Age = 22
export {
  Name,
  Age
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

console.log(node)
