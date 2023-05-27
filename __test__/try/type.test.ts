import { equalNode, generateSource, parseSource } from '../utils'
import TryTypeSnapshot from '../__snapshot__/try'

describe('try statement', function() {
  it('normal', function() {
    const node = parseSource(generateSource([
      `try {`,
      `  console.log(123)`,
      `} catch(e) {}`
    ]))

    equalNode(node, TryTypeSnapshot.Normal)
  })

  it('with type', function() {
    const node = parseSource(generateSource([
      `try {`,
      `  console.log(123)`,
      `} catch(e: any) {}`
    ]))

    // console.log(JSON.stringify(node, null, 2))
    equalNode(node, TryTypeSnapshot.WithType)
  })

  it('catch redeclared var statement captured', function() {
    const node = parseSource(generateSource([
      `try {`,
      `  throw new Error();`,
      `} catch (foo) {`,
      `  var foo = "initializer in catch";`,
      `}`
    ]))

    equalNode(node, TryTypeSnapshot.CatchRedeclaredVarStatementCaptured)
  })
})
