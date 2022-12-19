import { generateSource, parseSource } from '../utils'
import ExportTypeSnapshot from '../__snapshot__/export/type'

describe('export type', () => {
  it('export type', () => {
    const node = parseSource(generateSource([
      `export type Test = string | number`
    ]))

    console.log(JSON.stringify(node, null, 2))
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
})
