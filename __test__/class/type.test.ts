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

    expect(node).toEqual(ClassTypeSnapshot.NormalProperty);
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

    console.log(JSON.stringify(node, null, 2))
    expect(node).toEqual(ClassTypeSnapshot.PrivateProperty);
  })
})
