import {
  equalNode,
  generateSource,
  parseSource,
  parseSourceShouldThrowError
} from '../utils'
import ClassTypeSnapshot from '../__snapshot__/class/type'
import { TypeScriptError } from '../../src/error'

const issue33File = `
export default class Bundle {
    private readonly facadeChunkByModule = new Map<Module, Chunk>();
    private readonly includedNamespaces = new Set<Module>();

    constructor(
        private readonly outputOptions: NormalizedOutputOptions,
        private readonly unsetOptions: ReadonlySet<string>,
        private readonly inputOptions: NormalizedInputOptions,
        private readonly pluginDriver: PluginDriver,
        private readonly graph: Graph
    ) {}
 }
`

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

    equalNode(node, ClassTypeSnapshot.NormalProperty)
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

    equalNode(node, ClassTypeSnapshot.PrivateProperty)
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


    equalNode(node, ClassTypeSnapshot.ProtectedProperty)
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

    equalNode(node, ClassTypeSnapshot.ReadonlyProperty)
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

    equalNode(node, ClassTypeSnapshot.PublicProperty)
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

    equalNode(node, ClassTypeSnapshot.StaticFunction)
  })

  it('static async methods', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` static async study(): Promise<void> {`,
      `   console.log('Im studying')`,
      ` }`,
      ` static async * students(): AsyncIterable<string> {`,
      `   yield 'John Smith'`,
      ` }`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.StaticAsyncMethods)
  })

  it('static getter/setter', () => {
    const node = parseSource(generateSource([
      `class C {`,
      `  static get foo(): number {}`,
      `  static set foo(value: number) {}`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.StaticGetterSetter)
  })

  it('escaped static method ', () => {
    // See: https://github.com/tc39/test262/blob/main/test/language/statements/class/syntax/escaped-static.js
    expect(() => {
      parseSource(generateSource([
        `class C {`,
        ` st\\u0061tic m() {}`,
        `}`
      ]))
    }).toThrowError()
  })

  it('private class method', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` private study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.PrivateClassMethod)
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

    equalNode(node, ClassTypeSnapshot.ComputedProperty)
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

    equalNode(node, ClassTypeSnapshot.AbstractClass)
  })

  it('private id class method', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` #study() {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.PrivateIdClassMethod)
  })

  it('class duplicate method', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` study(book: 'math'): void`,
      ` study(book: 'english'): void`,
      ` study(book: 'math' | 'english'): void {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.ClassDuplicateMethod)
  })

  it('class duplicate constructor', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` constructor(book: 'math'): void`,
      ` constructor(book: 'english'): void`,
      ` constructor(book: 'math' | 'english'): void {`,
      `   console.log('Im studying')`,
      ` }`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.ClassDuplicateConstructor)
  })

  it('class abstract method with body', function() {
    const res = parseSourceShouldThrowError(generateSource([
      `abstract class Person {`,
      `  abstract find(string): Person {}`,
      `}`
    ]), TypeScriptError.AbstractMethodHasImplementation({
      methodName: 'find'
    }), '(2:2)')

    expect(res).toBe(true)
  })

  it('definite property', () => {
    const node = parseSource(generateSource([
      `class Student {`,
      ` name!: string`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.DefiniteProperty)
  })

  it('accessor', () => {
    const node = parseSource(generateSource([
      `class Person {`,
      `  accessor name: string;`,
      `  constructor(name: string) {`,
      `    this.name = name;`,
      `  }`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.Accessor)
  })

  it('escaped keyword property ', () => {
    const node = parseSource(generateSource([
      `class C {`,
      ` \\u0069n: string`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.EscapedKeywordProperty)
  })

  it('duplicate constructor', () => {
    expect(() => {
      parseSource(generateSource([
        `class C {`,
        ` constructor(){}`,
        ` constructor(){}`,
        `}`
      ]))
    }).toThrowError()
  })

  it('constructor signature', () => {
    const node = parseSource(generateSource([
      `class C {`,
      ` constructor()`,
      ` constructor(){}`,
      `}`
    ]))

    equalNode(node, ClassTypeSnapshot.ConstructorSignature)
  })

  it('issue 33', () => {
    const node = parseSource(issue33File)

    equalNode(node, ClassTypeSnapshot.Issue33)
  })
})

