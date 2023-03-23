import { equalNode, generateSource, parseSource } from '../utils'
import ForSnapshot from '../__snapshot__/for'

describe('for', () => {
  it('of', () => {
    const node = parseSource(generateSource([
      `const words = []`,
      `for (const word of words) {`,
      ` console.log(word)`,
      `}`
    ]))

    equalNode(node, ForSnapshot.of)
  })
})

