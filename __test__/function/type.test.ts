import { equalNode, generateSource, parseSource } from '../utils'
import FunctionTypeSnapshot from '../__snapshot__/function/type'

describe('function type test', () => {
  it('no parameter with void', () => {
    const node = parseSource(generateSource([
      `function test(): void {`,
      `  console.log(123)`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithVoid)
  })

  it('no parameter with never', () => {
    const node = parseSource(generateSource([
      `function test(): never {`,
      `  throw new Error('123')`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithNever)
  })

  it('no parameter with string', () => {
    const node = parseSource(generateSource([
      `function test(): string {`,
      `  return '123'`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithString)
  })

  it('no parameter with number', () => {
    const node = parseSource(generateSource([
      `function test(): number {`,
      `  return 123`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithNumber)
  })

  it('no parameter with undefined', () => {
    const node = parseSource(generateSource([
      `function test(): undefined {`,
      `  return undefined`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithUndefined)
  })

  it('no parameter with boolean', () => {
    const node = parseSource(generateSource([
      `function test(): boolean {`,
      `  return true`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithBoolean)
  })

  it('no parameter with bigint', () => {
    const node = parseSource(generateSource([
      `function test(): bigint {`,
      `  return BigInt('123123')`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithBigInt)
  })

  it('no parameter with object', () => {
    const node = parseSource(generateSource([
      `function test(): object {`,
      `  return { a: 1 }`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithObject)
  })

  it('no parameter with symbol', () => {
    const node = parseSource(generateSource([
      `function test(): symbol {`,
      `  return Symbol('123')`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithSymbol)
  })

  it('no parameter with unknown', () => {
    const node = parseSource(generateSource([
      `function test(): unknown {`,
      `  return 123`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithUnknown)
  })

  it('no parameter with any', () => {
    const node = parseSource(generateSource([
      `function test(): any {`,
      `  return 123`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithAny)
  })

  it('no parameter with type', () => {
    const node = parseSource(generateSource([
      `type TestType = string | number | object`,
      `function test(): TestType {`,
      `  return 123`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithType)
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

    equalNode(node, FunctionTypeSnapshot.NoParameterWithInterface)
  })

  it('no parameter with union', () => {
    const node = parseSource(generateSource([
      `function test(): string | number {`,
      `  return 123`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.NoParameterWithUnion)
  })

  it('one parameter with void', () => {
    const node = parseSource(generateSource([
      `function test(name: string): void {`,
      `  console.log(name)`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.OneParameterWithVoid)
  })

  it('one optional parameter with void', () => {
    const node = parseSource(generateSource([
      `function test(name?: string): void {`,
      `  console.log(name)`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.OneOptionalParameterWithVoid)
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

    equalNode(node, FunctionTypeSnapshot.ComplexFunction)
  })

  it('async generator function', () => {
    const node = parseSource(generateSource([
      `async function * test(p: Promise<string[]>): void {`,
      `  yield * await p`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.AsyncGeneratorFunction)
  })

  it('declare function types', () => {
    const node = parseSource(generateSource([
      `function test(a: string): string`,
      `function test(a: number): number`,
      `function test(a: number | string): number | string {`,
      `  return a`,
      `}`
    ]))

    equalNode(node, FunctionTypeSnapshot.DeclareFunctionTypes)
  })

  it('declare function comma after rest element', () => {
    const node = parseSource(generateSource([
      `declare function test(a: number | string, ...b,): number | string;`,
    ]))

    equalNode(node, FunctionTypeSnapshot.DeclareFunctionCommaAfterRestElement)
  })
})
