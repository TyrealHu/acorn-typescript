import { generateSource, Parser } from '../utils'

function parseExpressionAt(input: string, pos: number) {
  return Parser.parseExpressionAt(input, pos, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: true
  })
}

describe('parseExpressionAt API', function() {
  it('normal', function() {
    const node = parseExpressionAt(generateSource([
      `<tag prop={`,
      `  (): void => {}`,
      `} />`
    ]), 14)

    expect(node.type).toEqual('ArrowFunctionExpression')
  })
})

