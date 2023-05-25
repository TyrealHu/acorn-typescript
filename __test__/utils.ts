import * as acorn from 'acorn'
import tsPlugin from '../src'

export const Parser = acorn.Parser.extend(tsPlugin({
  jsx: {
    allowNamespacedObjects: true,
    allowNamespaces: true
  }
}))

export function equalNode(node, snapshot) {
  expect(node).toEqual(snapshot)
}

export function parseSource(input: string) {
  return Parser.parse(input, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: true
  })
}

export function parseSourceShouldThrowError(input: string, message: string, loc: string): boolean {
  try {
    Parser.parse(input, {
      sourceType: 'module',
      ecmaVersion: 'latest',
      locations: true
    })

    return false
  } catch (e) {
    // console.log(e)
    return e.message === `${message} ${loc}`
  }
}

export function generateSource(input: string[]): string {
  return input.join('\n')
}
