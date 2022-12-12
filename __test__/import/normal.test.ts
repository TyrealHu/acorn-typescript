import { parseSource } from '../utils'
import {
  ImportWithoutSpecifiers,
  ImportDefaultSpecifier,
  ImportNameSpecifiers,
  ImportNamespaceSpecifier
} from '../__snapshot__/import/normal'

describe('normal syntax', () => {
  it('import without specifiers', () => {
    const node = parseSource(`import './index.js'`)
    expect(node).toEqual(ImportWithoutSpecifiers)
  })

  it('import default specifiers', () => {
    const node = parseSource(`import test from './index.js'`)
    expect(node).toEqual(ImportDefaultSpecifier)
  })

  it('import name specifiers', function() {
    const node = parseSource(`import { test, name } from './index.js'`)
    expect(node).toEqual(ImportNameSpecifiers)
  })

  it('import namespace specifiers', function() {
    const node = parseSource(`import * as test from './index.js'`)
    expect(node).toEqual(ImportNamespaceSpecifier)
  })
})
