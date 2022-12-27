import * as acorn from 'acorn'
import tsPlugin from './src/index'

const node = acorn.Parser.extend(tsPlugin()).parse(`
function test(): void {
  console.log(123)
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

// @ts-ignore
console.log(JSON.stringify(node, null, 2))
