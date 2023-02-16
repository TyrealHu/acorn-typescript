import { equalNode, generateSource, parseSource } from '../utils'
import ExpressionTypeSnapshot from '../__snapshot__/expression/type'

describe('expression type test', () => {
  it('normal interface', () => {
    const node = parseSource(generateSource([
      `interface Student {`,
      ` name: string`,
      ` age: number`,
      ` school: string`,
      `}`
    ]))

    equalNode(node, ExpressionTypeSnapshot.NormalInterface)
  })

  it('nested interface', () => {
    const node = parseSource(generateSource([
      `interface Student {`,
      ` name: string`,
      ` age: number`,
      ` family: string[]`,
      ` interest: {`,
      `  artificialIntelligence: string`,
      `  study: string`,
      ` }`,
      `}`
    ]))

    equalNode(node, ExpressionTypeSnapshot.NestedInterface)
  })

  it('extend interface', () => {
    const node = parseSource(generateSource([
      `interface Person {`,
      ` name: string`,
      ` age: number`,
      `}`,
      ``,
      `interface Student extends Person {`,
      ` family: string[]`,
      ` interest: {`,
      `  artificialIntelligence: string`,
      `  study: string`,
      ` }`,
      `}`
    ]))

    equalNode(node, ExpressionTypeSnapshot.ExtendsInterface)
  })

  it('normal type', () => {
    const node = parseSource(generateSource([
      `type School = 'Tsinghua' | 'Peking' | 'GDUT'`
    ]))

    equalNode(node, ExpressionTypeSnapshot.NormalType)
  })

  it('enum', () => {
    const node = parseSource(generateSource([
      `enum Test {`,
      `  Start = 'start',`,
      `  End = 'end'`,
      `}`
    ]))

    equalNode(node, ExpressionTypeSnapshot.Enum)
  })

  it('declare', () => {
    const node = parseSource(generateSource([
      `declare module '*.png' {`,
      `  const value: string;`,
      `  export default value;`,
      `}`
    ]))

    equalNode(node, ExpressionTypeSnapshot.Declare)
  })

  it('declare namespace', () => {
    const node = parseSource(generateSource([
      `declare namespace myLib {`,
      `  let timeout: number;`,
      `  const version: string;`,
      `  class Cat {`,
      `    constructor(n: number);`,
      `    readonly age: number;`,
      `    purr(): void;`,
      `  }`,
      `  interface CatSettings {`,
      `    weight: number;`,
      `    name: string;`,
      `    tailLength?: number;`,
      `  }`,
      `  type VetID = string | number;`,
      `  function checkCat(c: Cat, s?: VetID);`,
      `}`
    ]))

    console.log(JSON.stringify(node, null, 2))
  })
})
