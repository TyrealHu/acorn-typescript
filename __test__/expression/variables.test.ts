import { equalNode, generateSource, parseSource } from '../utils'
import VariablesTypeSnapshot from '../__snapshot__/expression/variables'

describe('variables declaration', () => {
  it('number', () => {
    const node = parseSource(generateSource([
      `const test: number = 123`
    ]))

    equalNode(node, VariablesTypeSnapshot.Number)
  })

  it('string', () => {
    const node = parseSource(generateSource([
      `const test: string = '12355'`
    ]))

    equalNode(node, VariablesTypeSnapshot.String)
  })

  it('undefined', () => {
    const node = parseSource(generateSource([
      `const test: undefined = undefined`
    ]))

    equalNode(node, VariablesTypeSnapshot.Undefined)
  })

  it('boolean', () => {
    const node = parseSource(generateSource([
      `const test: boolean = false`
    ]))

    equalNode(node, VariablesTypeSnapshot.Boolean)
  })

  it('bigint', () => {
    const node = parseSource(generateSource([
      `const test: bigint = BigInt('123123')`
    ]))

    equalNode(node, VariablesTypeSnapshot.BigInt)
  })

  it('object', () => {
    const node = parseSource(generateSource([
      `const test: object = {`,
      '  a: 1,',
      '  b: 2',
      '}'
    ]))

    equalNode(node, VariablesTypeSnapshot.Object)
  })

  it('symbol', () => {
    const node = parseSource(generateSource([
      `const test: symbol = Symbol('123')`,
    ]))

    equalNode(node, VariablesTypeSnapshot.Symbol)
  })

  it('unknown', () => {
    const node = parseSource(generateSource([
      `const test: unknown = 123`,
    ]))

    equalNode(node, VariablesTypeSnapshot.Unknown)
  })

  it('any', () => {
    const node = parseSource(generateSource([
      `const test: any = 123`,
    ]))

    equalNode(node, VariablesTypeSnapshot.Any)
  })

  it('type', () => {
    const node = parseSource(generateSource([
      `type TestType = string | number | object`,
      `const test: TestType = 123`,
    ]))

    equalNode(node, VariablesTypeSnapshot.Type)
  })

  it('interface', () => {
    const node = parseSource(generateSource([
      `interface Student {`,
      ` name: string`,
      ` age: number`,
      ` school: string`,
      `}`,
      `const test: Student = {`,
      `  name: 'tyreal',`,
      `  age: 22,`,
      `  school: 'gdut',`,
      `}`
    ]))

    equalNode(node, VariablesTypeSnapshot.Interface)
  })

  it('union', () => {
    const node = parseSource(generateSource([
      `const test: string | number = 123`,
    ]))

    equalNode(node, VariablesTypeSnapshot.Union)
  })

  it('let union', () => {
    const node = parseSource(generateSource([
      `let test: string | number = 123`,
    ]))

    equalNode(node, VariablesTypeSnapshot.LetUnion)
  })
})
