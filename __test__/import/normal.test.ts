import { generateSource, parseSource } from '../utils'
import {
  ImportWithoutSpecifiers,
  ImportDefaultSpecifier,
  ImportNameSpecifiers,
  ImportNamespaceSpecifier,
  ImportNameAsSpecifiers,
  ImportComplexSpecifiers
} from '../__snapshot__/import/normal'

describe('normal syntax', () => {
  it('import without specifiers', () => {
    const node = parseSource(generateSource([
      `import './index.js'`
    ]))
    expect(node).toEqual(ImportWithoutSpecifiers)
  })

  it('import default specifiers', () => {
    const node = parseSource(generateSource([
      `import test from './index.js'`
    ]))
    expect(node).toEqual(ImportDefaultSpecifier)
  })

  it('import name specifiers', function() {
    const node = parseSource(generateSource([
      `import { test, name } from './index.js'`
    ]))
    expect(node).toEqual(ImportNameSpecifiers)
  })

  it('import namespace specifiers', function() {
    const node = parseSource(generateSource([
      `import * as test from './index.js'`
    ]))
    expect(node).toEqual(ImportNamespaceSpecifier)
  })

  it('import name as specifiers', function() {
    const node = parseSource(generateSource([
      `import { test as test1 } from './index.js'`
    ]))

    expect(node).toEqual(ImportNameAsSpecifiers)
  })

  it('import complex specifiers', function() {
    const node = parseSource(generateSource([
      `import './index3.js'`,
      `import test, { name, age, school as school1 } from './index.js'`,
      `import * as test1 from './index1.js'`
    ]))
    expect(node).toEqual(ImportComplexSpecifiers)
  })
})
