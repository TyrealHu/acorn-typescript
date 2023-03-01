import { equalNode, generateSource, parseSource } from '../utils'
import ObjectSnapshot from '../__snapshot__/object'

describe('object', function() {
  it('get and set with this', function() {
    const node = parseSource(generateSource([
      'const test = {',
      '    privateName: \'tyreal\',',
      '    get name(this) {',
      '        return this.privateName',
      '    },',
      '    set name(this, _name) {',
      '        this.privateName = _name',
      '    }',
      '}'
    ]))

    equalNode(node, ObjectSnapshot.GetAndSetWithThis)
  })

  it('get and set without this', function() {
    const node = parseSource(generateSource([
      'const test = {',
      '    privateName: \'tyreal\',',
      '    get name() {',
      '        return this.privateName',
      '    },',
      '    set name(_name: string) {',
      '        this.privateName = _name',
      '    }',
      '}'
    ]))

    equalNode(node, ObjectSnapshot.GetAndSetWithoutThis)
  })

  it('normal object', function() {
    const node = parseSource(generateSource([
      'const test = {',
      '    privateName: \'tyreal\',',
      '    speak() {',
      '        console.log(123)',
      '    },',
      '}'
    ]))

    equalNode(node, ObjectSnapshot.NormalObject)
  })


  it('async arrow function in subscript', () => {
    const node = parseSource(generateSource([
      'async () => {',
      '  console.log(123)',
      '}'
    ]))

    equalNode(node, ObjectSnapshot.AsyncArrowFunctionInSubscript)
  })
})
