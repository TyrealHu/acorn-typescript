import { equalNode, generateSource, parseSource } from '../utils'
import DecoratorsSnapshot from '../__snapshot__/decorators'

describe('decorators', () => {
  it('class method', () => {
    const node = parseSource(generateSource([
      `function first() {`,
      `  console.log("first(): factory evaluated");`,
      `  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {`,
      `    console.log("first(): called");`,
      `  };`,
      `}`,
      `class ExampleClass {`,
      `  @first()`,
      `  method() {}`,
      `}`
    ]))

    equalNode(node, DecoratorsSnapshot.ClassMethod)
  })

  it('class', () => {
    const node = parseSource(generateSource([
      `function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {`,
      `  return class extends constructor {`,
      `    reportingURL = "http://www...";`,
      `  };`,
      `}`,
      `@reportableClassDecorator`,
      `class ExampleClass {`,
      `  title: string`,
      `  constructor(t: string) {`,
      `    this.title = t;`,
      `  }`,
      `}`
    ]))

    equalNode(node, DecoratorsSnapshot.Class)
  })

  it('class accessor', () => {
    const node = parseSource(generateSource([
      `function configurable(value: Boolean) {`,
      `  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {`,
      `    descriptor.configurable = value;`,
      `  };`,
      `}`,
      `class ExampleClass {`,
      `  title: string`,
      `  constructor(t: string) {`,
      `    this.title = t;`,
      `  }`,
      `  @configurable(false)`,
      `  get x() {`,
      `    return this.title;`,
      `  }`,
      `}`
    ]))

    equalNode(node, DecoratorsSnapshot.ClassAccessor)
  })

  it('class property', () => {
    const node = parseSource(generateSource([
      `function format(target: string) {`,
      `  return target`,
      `}`,
      `class ExampleClass {`,
      `  @format('Hello, %s')`,
      `  title: string`,
      `  constructor(t: string) {`,
      `    this.title = t;`,
      `  }`,
      `}`
    ]))

    equalNode(node, DecoratorsSnapshot.ClassProperty)
  })

  it('class params', () => {
    const node = parseSource(generateSource([
      `class MyClass {`,
      `  myMethod(@logParam myParameter: string) {}`,
      `}`,
      `function logParam(target: any, methodKey: string, parameterIndex: number) {`,
      `  target.test = methodKey;`,
      `}`
    ]))

    equalNode(node, DecoratorsSnapshot.ClassParams)
  })
})

