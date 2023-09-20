import { equalNode, parseSource, parseSourceShouldThrowError } from '../utils'
import AssertionSnapshot from '../__snapshot__/assert'

describe('assert', () => {
  it('import assert', () => {
    const node = parseSource(`import json from './foo.json' assert { type: 'json' };`)

    equalNode(node, AssertionSnapshot.ImportAssert)
  })

  it('import with', () => {
    const node = parseSource(`import json from './foo.json' with { type: 'json' };`)

    equalNode(node, AssertionSnapshot.ImportWith)
  })

  it('import with duplicate', () => {
    const res = parseSourceShouldThrowError(
      `import json from './foo.json' with { type: 'json', type: 'json' };`,
      'Duplicated key in attributes',
      '(1:63)'
    )

    expect(res).toBe(true)
  })

  it('dynamic import assert', () => {
    const node = parseSource(`import("./foo.json", { with: { type: "json" } });`)

    equalNode(node, AssertionSnapshot.DynamicImportAssert)
  })

  it('export all as assert', () => {
    const node = parseSource(`export * as name from "./foo.json" with { type: "json" };`)

    equalNode(node, AssertionSnapshot.ExportAllAsAssert)
  })
})
