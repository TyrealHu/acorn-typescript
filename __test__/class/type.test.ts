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

  it('public property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` public name: string`,
      ` public age: number`,
      ` public school: string`,
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

    expect(node).toEqual(ClassTypeSnapshot.PublicProperty)
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

    expect(node).toEqual(ClassTypeSnapshot.StaticFunction)
  })

  it('computed property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` private _school: string`,
      ` get school() {`,
      `   return this._school`,
      ` }`,
      ` set school(value: string) {`,
      `   this._school = value`,
      ` }`,
      `}`
    ]))

    expect(node).toEqual(ClassTypeSnapshot.ComputedProperty)
  })

  it('abstract class', () => {
    const node = parseSource(generateSource([
      `abstract class Person {`,
      `  name: string;`,
      `  constructor(name: string) {`,
      `    this.name = name;`,
      `  }`,
      `  display(): void{`,
      `    console.log(this.name);`,
      `  }`,
      `  abstract find(string): Person;`,
      `}`,
      `class Employee extends Person {`,
      `  empCode: number;`,
      `  constructor(name: string, code: number) {`,
      `    super(name);`,
      `    this.empCode = code;`,
      `  }`,
      `  find(name:string): Person {`,
      `    return new Employee(name, 1);`,
      `  }`,
      `}`
    ]))

    expect(node).toEqual(ClassTypeSnapshot.AbstractClass)
  })
})

