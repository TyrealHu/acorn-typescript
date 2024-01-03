import * as acorn from 'acorn'
import tsPlugin from '../src'

export const Parser = acorn.Parser.extend(tsPlugin())

export const DtsParser = acorn.Parser.extend(tsPlugin({
  dts: true
}))

export const AllowSatisfiesParser = acorn.Parser.extend(tsPlugin({
  allowSatisfies: true
}))

export function equalNode(node, snapshot) {
  expect(node).toEqual(snapshot)
}

export function parseDtsSource(input: string) {
  return DtsParser.parse(input, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: true
  })
}

export function parseSource(input: string) {
  return Parser.parse(input, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: true
  })
}

export function parseSourceAllowSatisfies(input: string) {
  return AllowSatisfiesParser.parse(input, {
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
    // console.log(e.message)
    // console.log(`${message} ${loc}`)
    return e.message === `${message} ${loc}`
  }
}

export function generateSource(input: string[]): string {
  return input.join('\n')
}
