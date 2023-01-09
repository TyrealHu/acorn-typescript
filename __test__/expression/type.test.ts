import { generateSource, parseSource } from '../utils'
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

    expect(node).toEqual(ExpressionTypeSnapshot.NormalInterface)
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

    expect(node).toEqual(ExpressionTypeSnapshot.NestedInterface)
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

    expect(node).toEqual(ExpressionTypeSnapshot.ExtendsInterface)
  })

  it('normal type', () => {
    const node = parseSource(generateSource([
      `type School = 'Tsinghua' | 'Peking' | 'GDUT'`
    ]))

    expect(node).toEqual(ExpressionTypeSnapshot.NormalType)
  })

  it('enum', () => {
    const node = parseSource(generateSource([
      `enum Test {`,
      `  Start = 'start',`,
      `  End = 'end'`,
      `}`
    ]))

    expect(node).toEqual(ExpressionTypeSnapshot.Enum)
  })

  it('declare', () => {
    const node = parseSource(generateSource([
      `declare module '*.png' {`,
      `  const value: string;`,
      `  export default value;`,
      `}`
    ]))

    expect(node).toEqual(ExpressionTypeSnapshot.Declare)
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
