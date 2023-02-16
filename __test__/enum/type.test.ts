import { equalNode, generateSource, parseSource } from '../utils'
import EnumTypeSnapshot from '../__snapshot__/enum/type'

describe('enum', () => {
  it('normal', () => {
    const node = parseSource(generateSource([
      `enum Student {`,
      ` name = 'tyreal',`,
      ` age = 22,`,
      ` school = 'string'`,
      `}`
    ]))

    equalNode(node, EnumTypeSnapshot.Normal)
  })
})

