import { generateSource, parseSource } from '../utils'
import NormalExportSnapshot from '../__snapshot__/export/normal'

describe('normal export', () => {
  it('export default object', () => {
    const node = parseSource(generateSource([
      `export default {`,
      `  a: '12345'`,
      '}'
    ]))

    expect(node).toEqual(NormalExportSnapshot.ExportDefaultObject)
  })

  it('export default function', () => {
    const node = parseSource(generateSource([
      `export default function() {`,
      `  console.log('12345')`,
      '}'
    ]))

    expect(node).toEqual(NormalExportSnapshot.ExportDefaultFunction)
  })

  it('export default function with name', () => {
    const node = parseSource(generateSource([
      `export default function Test() {`,
      `  console.log('12345')`,
      '}'
    ]))

    expect(node).toEqual(NormalExportSnapshot.ExportDefaultFunctionWithName)
  })

  it('export default arrow function', () => {
    const node = parseSource(generateSource([
      `export default () => {`,
      `  console.log('12345')`,
      '}'
    ]))

    expect(node).toEqual(NormalExportSnapshot.ExportDefaultArrowFunction)
  })

  it('export const', () => {
    const node = parseSource(generateSource([
      `export const test = '12345'`
    ]))

    expect(node).toEqual(NormalExportSnapshot.ExportConst)
  })

  it('export', () => {
    const node = parseSource(generateSource([
      `const Name = 'tyreal'`,
      `let Age = 22`,
      `export {`,
      `  Name,`,
      `  Age`,
      `}`
    ]))

    expect(node).toEqual(NormalExportSnapshot.Export)
  })
})
