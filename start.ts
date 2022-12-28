import * as acorn from 'acorn'
import tsPlugin from './src/index'

const node = acorn.Parser.extend(tsPlugin()).parse(`
function test(name?: string, age: number): void {
  console.log(name)
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

// @ts-ignore
console.log(JSON.stringify(node, null, 2))
