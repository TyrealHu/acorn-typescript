import { parseSource } from '../utils'

describe('normal syntax', () => {
  it('import without specifiers', () => {
    const node = parseSource(`import './index.js'`)
    console.log(node)
    debugger
  })
})
