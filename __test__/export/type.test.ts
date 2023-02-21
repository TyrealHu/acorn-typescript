import { equalNode, generateSource, parseSource } from '../utils'
import ExportTypeSnapshot from '../__snapshot__/export/type'

describe('export type', () => {
  it('export type', () => {
    const node = parseSource(generateSource([
      `export type Test = string | number`
    ]))

    equalNode(node, ExportTypeSnapshot.Type)
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

    equalNode(node, ExportTypeSnapshot.SeriousType)
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

    equalNode(node, ExportTypeSnapshot.ExportTypeAndConst)
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

    equalNode(node, ExportTypeSnapshot.ExportTypeWithAsAndConst)
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

    equalNode(node, ExportTypeSnapshot.ExportTypeTypeWithAs)
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

    equalNode(node, ExportTypeSnapshot.ExportTypeTypeWithAsAs)
  })

  it('export type as as with name', () => {
    const node = parseSource(generateSource([
      `const as = 'test'`,
      `export {`,
      `  type as as someName`,
      `}`
    ]))

    equalNode(node, ExportTypeSnapshot.ExportTypeAsAsWithName)
  })
})
