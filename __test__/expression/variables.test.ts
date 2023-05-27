import { equalNode, generateSource, parseSource } from '../utils'
import VariablesTypeSnapshot from '../__snapshot__/expression/variables'

describe('variables declaration', () => {
  it('number', () => {
    const node = parseSource(generateSource([
      `const test: number = 123`
    ]))

    equalNode(node, VariablesTypeSnapshot.Number)
  })

  it('number with definite', () => {
    const node = parseSource(generateSource([
      `let test!: number`
    ]))

    equalNode(node, VariablesTypeSnapshot.NumberWithDefinite)
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

  it('expression list arrow function and var', () => {
    const node = parseSource(generateSource([
      `let test1 = 2,`,
      `  test = (name: string, age: number): void => {`,
      `    console.log(name, age)`,
      `  }`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionListArrowFunctionAndVar)
  })

  it('expression list arrow function and param is function', () => {
    const node = parseSource(generateSource([
      `let test = (name: string, speak: (() => void)): void => {`,
      `  console.log(name, age)`,
      `}`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionListArrowFunctionAndParamIsFunction)
  })

  it('expression with paren', () => {
    const node = parseSource(generateSource([
      `let test = (1 === 2)`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionWithParen)
  })

  it('expression equal function', () => {
    const node = parseSource(generateSource([
      `let test = function(): void {}`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionEqualFunction)
  })

  it('expression equal arrow function', () => {
    const node = parseSource(generateSource([
      `let test = (): void => {}`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionEqualArrowFunction)
  })

  it('expression equal async function', () => {
    const node = parseSource(generateSource([
      `let test = async function(): Promise<void> {}`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionEqualAsyncFunction)
  })

  it('expression equal async arrow function', () => {
    const node = parseSource(generateSource([
      `let test = async (): Promise<void> => {}`
    ]))

    equalNode(node, VariablesTypeSnapshot.ExpressionEqualAsyncArrowFunction)
  })

  it('1 as  number', () => {
    const node = parseSource(generateSource([
      `let test = 1 as number`
    ]))

    equalNode(node, VariablesTypeSnapshot.OneAsNumber)
  })
})
