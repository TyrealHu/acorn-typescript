import { generateSource, parseSource } from '../utils'
import ClassTypeSnapshot from '../__snapshot__/class/type'

describe('class', () => {
  it('normal property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` name: string`,
      ` age: number`,
      ` school: string`,
      ` constructor(name: string, age: number, school: string) {`,
      `   this.name = name`,
      `   this.age = age`,
      `   this.school = school`,
      ` }`,
      ` study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    expect(node).toEqual(ClassTypeSnapshot.NormalProperty)
  })

  it('private property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` private name: string`,
      ` private age: number`,
      ` private school: string`,
      ` constructor(name: string, age: number, school: string) {`,
      `   this.name = name`,
      `   this.age = age`,
      `   this.school = school`,
      ` }`,
      ` study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    expect(node).toEqual(ClassTypeSnapshot.PrivateProperty)
  })

  it('protected property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` protected name: string`,
      ` protected age: number`,
      ` protected school: string`,
      ` constructor(name: string, age: number, school: string) {`,
      `   this.name = name`,
      `   this.age = age`,
      `   this.school = school`,
      ` }`,
      ` study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    expect(node).toEqual(ClassTypeSnapshot.ProtectedProperty)
  })

  it('readonly property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` readonly name: string`,
      ` readonly age: number`,
      ` readonly school: string`,
      ` constructor(name: string, age: number, school: string) {`,
      `   this.name = name`,
      `   this.age = age`,
      `   this.school = school`,
      ` }`,
      ` study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    expect(node).toEqual(ClassTypeSnapshot.ReadonlyProperty)
  })

  it('static property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` static school: string = 'gdut'`,
      ` static study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    console.log(JSON.stringify(node, null, 2))
    expect(node).toEqual(ClassTypeSnapshot.StaticFunction)
  })
})

// class A {
//   static school: string = 'gdut'
//   static study() {}
// }
