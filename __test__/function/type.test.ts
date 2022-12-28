import { generateSource, parseSource } from '../utils'
import FunctionTypeSnapshot from '../__snapshot__/function/type'

describe('function type test', () => {
  it('no parameter with void', () => {
    const node = parseSource(generateSource([
      `function test(): void {`,
      `  console.log(123)`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithVoid)
  })

  it('no parameter with never', () => {
    const node = parseSource(generateSource([
      `function test(): never {`,
      `  throw new Error('123')`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithNever)
  })

  it('no parameter with string', () => {
    const node = parseSource(generateSource([
      `function test(): string {`,
      `  return '123'`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithString)
  })

  it('no parameter with number', () => {
    const node = parseSource(generateSource([
      `function test(): number {`,
      `  return 123`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithNumber)
  })

  it('no parameter with undefined', () => {
    const node = parseSource(generateSource([
      `function test(): undefined {`,
      `  return undefined`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithUndefined)
  })

  it('no parameter with boolean', () => {
    const node = parseSource(generateSource([
      `function test(): boolean {`,
      `  return true`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithBoolean)
  })

  it('no parameter with bigint', () => {
    const node = parseSource(generateSource([
      `function test(): bigint {`,
      `  return BigInt('123123')`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithBigInt)
  })

  it('no parameter with object', () => {
    const node = parseSource(generateSource([
      `function test(): object {`,
      `  return { a: 1 }`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithObject)
  })

  it('no parameter with symbol', () => {
    const node = parseSource(generateSource([
      `function test(): symbol {`,
      `  return Symbol('123')`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithSymbol)
  })

  it('no parameter with unknown', () => {
    const node = parseSource(generateSource([
      `function test(): unknown {`,
      `  return 123`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithUnknown)
  })

  it('no parameter with any', () => {
    const node = parseSource(generateSource([
      `function test(): any {`,
      `  return 123`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithAny)
  })

  it('no parameter with type', () => {
    const node = parseSource(generateSource([
      `type TestType = string | number | object`,
      `function test(): TestType {`,
      `  return 123`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithType)
  })

  it('no parameter with interface', () => {
    const node = parseSource(generateSource([
      `interface Student {`,
      ` name: string`,
      ` age: number`,
      ` school: string`,
      `}`,
      `function test(): Student {`,
      `  return {`,
      `    name: 'tyreal',`,
      `    age: 22,`,
      `    school: 'gdut',`,
      `  }`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithInterface)
  })

  it('no parameter with union', () => {
    const node = parseSource(generateSource([
      `function test(): string | number {`,
      `  return 123`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.NoParameterWithUnion)
  })

  it('one parameter with void', () => {
    const node = parseSource(generateSource([
      `function test(name: string): void {`,
      `  console.log(name)`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.OneParameterWithVoid)
  })

  it('one optional parameter with void', () => {
    const node = parseSource(generateSource([
      `function test(name?: string): void {`,
      `  console.log(name)`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.OneOptionalParameterWithVoid)
  })

  it('complex function', () => {
    const node = parseSource(generateSource([
      `interface Family {`,
      `  father: string`,
      `  mother: string`,
      `}`,
      `function test(name: string, family: Family, age?: number): Family {`,
      `  console.log(name, age)`,
      `  return family`,
      `}`
    ]))

    expect(node).toEqual(FunctionTypeSnapshot.ComplexFunction)
  })
})
