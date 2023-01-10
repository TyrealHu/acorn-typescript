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

    expect(node).toEqual(ExportTypeSnapshot.ExportTypeAndConst)
  })

  it('export type with as and const', () => {
    const node = parseSource(generateSource([
      `const a = 1`,
      `type A = number`,
      `export {`,
      `  a,`,
      `  type A as B`,
      `}`
    ]))

    expect(node).toEqual(ExportTypeSnapshot.ExportTypeWithAsAndConst)
  })

  it('export type type with as', () => {
    const node = parseSource(generateSource([
      `const a = 1`,
      `type type = number`,
      `export {`,
      `  a,`,
      `  type type as A`,
      `}`
    ]))
    console.log(JSON.stringify(node, null, 2))

    expect(node).toEqual(ExportTypeSnapshot.ExportTypeTypeWithAs)
  })

  it('export type type with as as', () => {
    const node = parseSource(generateSource([
      `const a = 1`,
      `type type = number`,
      `export {`,
      `  a,`,
      `  type type as as`,
      `}`
    ]))

    expect(node).toEqual(ExportTypeSnapshot.ExportTypeTypeWithAsAs)
  })
})
