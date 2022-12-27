import { generateSource, parseSource } from '../utils'
import VariablesTypeSnapshot from '../__snapshot__/expression/variables'

describe('variables declaration', () => {
  it('number', () => {
    const node = parseSource(generateSource([
      `const test: number = 123`
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Number)
  })

  it('string', () => {
    const node = parseSource(generateSource([
      `const test: string = '12355'`
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.String)
  })

  it('undefined', () => {
    const node = parseSource(generateSource([
      `const test: undefined = undefined`
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Undefined)
  })

  it('boolean', () => {
    const node = parseSource(generateSource([
      `const test: boolean = false`
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Boolean)
  })

  it('bigint', () => {
    const node = parseSource(generateSource([
      `const test: bigint = BigInt('123123')`
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.BigInt)
  })

  it('object', () => {
    const node = parseSource(generateSource([
      `const test: object = {`,
      '  a: 1,',
      '  b: 2',
      '}'
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Object)
  })

  it('symbol', () => {
    const node = parseSource(generateSource([
      `const test: symbol = Symbol('123')`,
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Symbol)
  })

  it('unknown', () => {
    const node = parseSource(generateSource([
      `const test: unknown = 123`,
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Unknown)
  })

  it('any', () => {
    const node = parseSource(generateSource([
      `const test: any = 123`,
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Any)
  })

  it('type', () => {
    const node = parseSource(generateSource([
      `type TestType = string | number | object`,
      `const test: TestType = 123`,
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Type)
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

    expect(node).toEqual(VariablesTypeSnapshot.Interface)
  })

  it('union', () => {
    const node = parseSource(generateSource([
      `const test: string | number = 123`,
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.Union)
  })

  it('let union', () => {
    const node = parseSource(generateSource([
      `let test: string | number = 123`,
    ]))

    expect(node).toEqual(VariablesTypeSnapshot.LetUnion)
  })
})
