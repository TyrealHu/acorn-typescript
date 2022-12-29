import * as acorn from 'acorn'
import tsPlugin from './src/index'

const node = acorn.Parser.extend(tsPlugin()).parse(`
class Student {
   private name: string
   private age: number
   private school: string
   
   constructor(name: string, age: number, school: string) {
     this.name = name
     this.age = age
     this.school = school
   }
   
   study() {
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
