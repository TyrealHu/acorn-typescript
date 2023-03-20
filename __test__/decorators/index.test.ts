import { generateSource, parseSource } from '../utils'

describe('enum', () => {
  it('normal', () => {
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

    console.log(JSON.stringify(node, null, 2))
    // equalNode(node, EnumTypeSnapshot.Normal)
  })
})

