import { parseSource } from '../utils'
import { ImportWithoutSpecifiers } from '../__snapshot__/import/normal'

describe('normal syntax', () => {
  it('import without specifiers', () => {
    const node = parseSource(`import './index.js'`)
    // console.log(JSON.stringify(node, null, 2))
    expect(node).toEqual(ImportWithoutSpecifiers)
  })
})
