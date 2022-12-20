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
      `type School = 'Tsinghua' | 'Peking' | 'GDUT'`,
    ]))

    expect(node).toEqual(ExpressionTypeSnapshot.NormalType)
  })
})
