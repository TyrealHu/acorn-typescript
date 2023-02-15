import * as acorn from 'acorn'
import tsPlugin from '../src'

const Parser = acorn.Parser.extend(tsPlugin())

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

export function generateSource(input: string[]): string {
  return input.join('\n')
}
