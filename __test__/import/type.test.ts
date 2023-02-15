import { equalNode, generateSource, parseSource } from '../utils'
import ImportTypeSnapshot from '../__snapshot__/import/type'

describe('type syntax', () => {
  it('import default specifiers with type token', () => {
    const node = parseSource(generateSource([
      `import type Test from './index.ts'`
    ]))

    equalNode(node, ImportTypeSnapshot.ImportDefaultType)
  })

  it('import name as specifiers with type token', function() {
    const node = parseSource(generateSource([
      `import type { Test as Test1 } from './index.ts'`
    ]))

    equalNode(node, ImportTypeSnapshot.ImportNameAsType)
  })

  it('import namespace specifiers with type token', function() {
    const node = parseSource(generateSource([
      `import type * as Test from './index.ts'`
    ]))

    equalNode(node, ImportTypeSnapshot.ImportNamespaceType)
  })

  it('import complex type', function() {
    const node = parseSource(generateSource([
      `import './index.ts'`,
      `import type Test1 from './index1.ts'`,
      `import type { Test as Test2 } from './index2.ts'`,
      `import type * as Test3 from './index3.ts'`
    ]))

    equalNode(node, ImportTypeSnapshot.ImportComplexType)
  })
})
