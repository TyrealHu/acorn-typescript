import * as acorn from 'acorn'
import tsPlugin from './src/index'

const node = acorn.Parser.extend(tsPlugin()).parse(`
class Student {
   static name: string = '123'
   
   static study() {
     console.log('Im studying')
   }
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})

// @ts-ignore
console.log(JSON.stringify(node, null, 2))
