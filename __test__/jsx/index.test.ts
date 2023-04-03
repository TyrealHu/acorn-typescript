import { equalNode, generateSource, parseSource } from '../utils'
import JSXSnapshot from '../__snapshot__/jsx'

const tsx = `import * as React from "react";
import UserInterface from '../UserInterface'
export default class UserComponent extends React.Component<UserInterface, {}> {
constructor (props: UserInterface){
  super(props);
}
render() {
  return (  
    <div>
      <H1<string>>User Component</H1>
        Hello, <b>{this.props.name}</b>
        <br/>
        You are <b>{this.props.age} years old</b>
        <br/>
        You live at: <b>{this.props.address}</b>
        <br/>
        You were born: <b>{this.props.dob.toDateString()}</b>
    </div>
    );
  }
}
`

describe('jsx', function() {
  it('simple', () => {
    const node = parseSource(generateSource([
      `<div />`
    ]))

    equalNode(node, JSXSnapshot.Simple)
  })

  it('value with colon', () => {
    const node = parseSource(generateSource([
      `<a n:foo="bar"> {value} <b><c /></b></a>`
    ]))

    equalNode(node, JSXSnapshot.ValueWithColon)
  })

  it('props with expr', () => {
    const node = parseSource(generateSource([
      `<a b={" "} c=" " d="&amp;" e="&ampr;" />`
    ]))

    equalNode(node, JSXSnapshot.PropsWithExpr)
  })

  it('jsx with type generics', () => {
    const node = parseSource(generateSource([
      `<Select<string> />`
    ]))

    equalNode(node, JSXSnapshot.JsxWithTypeGenerics)
  })

  it('tsx', () => {
    const node = parseSource(tsx)

    equalNode(node, JSXSnapshot.Tsx)
  })
})
