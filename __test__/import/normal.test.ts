import { equalNode, generateSource, parseSource } from '../utils'
import NormalImportSnapshot  from '../__snapshot__/import/normal'

describe('normal syntax', () => {
  it('import without specifiers', () => {
    const node = parseSource(generateSource([
      `import './index.js'`
    ]))

    equalNode(node, NormalImportSnapshot.ImportWithoutSpecifiers)
  })

  it('import default specifiers', () => {
    const node = parseSource(generateSource([
      `import test from './index.js'`
    ]))

    equalNode(node, NormalImportSnapshot.ImportDefaultSpecifier)
  })

  it('import name specifiers', function() {
    const node = parseSource(generateSource([
      `import { test, name } from './index.js'`
    ]))

    equalNode(node, NormalImportSnapshot.ImportNameSpecifiers)
  })

  it('import namespace specifiers', function() {
    const node = parseSource(generateSource([
      `import * as test from './index.js'`
    ]))

    equalNode(node, NormalImportSnapshot.ImportNamespaceSpecifier)
  })

  it('import name as specifiers', function() {
    const node = parseSource(generateSource([
      `import { test as test1 } from './index.js'`
    ]))

    equalNode(node, NormalImportSnapshot.ImportNameAsSpecifiers)
  })

  it('import complex specifiers', function() {
    const node = parseSource(generateSource([
      `import './index3.js'`,
      `import test, { name, age, school as school1 } from './index.js'`,
      `import * as test1 from './index1.js'`
    ]))

    equalNode(node, NormalImportSnapshot.ImportComplexSpecifiers)
  })

  it('import namespace type specifiers', function() {
    const node = parseSource(generateSource([
      `import test, { name, type age, school as school1 } from './index.js'`,
    ]))

    equalNode(node, NormalImportSnapshot.ImportNamespaceType)
  })

  it('import namespace type specifiers with as', function() {
    const node = parseSource(generateSource([
      `import test, { name, type age as age1, school as school1 } from './index.js'`,
    ]))

    equalNode(node, NormalImportSnapshot.ImportNamespaceTypeWithAs)
  })

  it('import type specifier with as', function() {
    const node = parseSource(generateSource([
      `import test, { type as age } from './index.js'`,
    ]))

    equalNode(node, NormalImportSnapshot.ImportTypeSpecifierWithAs)
  })

  it('import type specifier with as as', function() {
    const node = parseSource(generateSource([
      `import test, { type as as } from './index.js'`,
    ]))

    equalNode(node, NormalImportSnapshot.ImportTypeSpecifierWithAsAs)
  })

  it('import type specifier with as as', function() {
    const node = parseSource(generateSource([
      `import { type as as somethings } from './index.js'`,
    ]))

    equalNode(node, NormalImportSnapshot.ImportTypeSpecifierWithAsAsSomethings)
  })
})
