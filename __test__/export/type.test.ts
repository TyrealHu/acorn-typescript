import { generateSource, parseSource } from '../utils'
import ExportTypeSnapshot from '../__snapshot__/export/type'

describe('export type', () => {
  it('export type', () => {
    const node = parseSource(generateSource([
      `export type Test = string | number`
    ]))

    expect(node).toEqual(ExportTypeSnapshot.Type)
  })

  it('export serious type', () => {
    const node = parseSource(generateSource([
      `type Name = string`,
      `type Age = number`,
      `export {`,
      `  Name,`,
      `  Age`,
      `}`
    ]))

    expect(node).toEqual(ExportTypeSnapshot.SeriousType)
  })

  it('export type and const', () => {
    const node = parseSource(generateSource([
      `const a = 1`,
      `type A = number`,
      `export {`,
      `  a,`,
      `  type A`,
      `}`
    ]))

    console.log(JSON.stringify(node, null, 2))
    // expect(node).toEqual(ExportTypeSnapshot.SeriousType)
  })
})
