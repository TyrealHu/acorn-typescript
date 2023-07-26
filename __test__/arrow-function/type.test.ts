import { equalNode, generateSource, parseSource } from '../utils'
import ArrowFunctionTypeSnapshot from '../__snapshot__/arrow-function/type'

describe('arrow-function type test', () => {
  it('assignment pattern', () => {
    const node = parseSource(generateSource([
      `(x = 42): void => {}`
    ]))

    equalNode(node, ArrowFunctionTypeSnapshot.AssignmentPattern)
  })

  it('issue 32', () => {
    const node = parseSource(generateSource([
      `const testApp = async(app: string, index: number) => {`,
      `};`
    ]))

    equalNode(node, ArrowFunctionTypeSnapshot.Issue32)
  })
})
