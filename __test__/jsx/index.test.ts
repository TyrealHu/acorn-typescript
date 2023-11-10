import { equalNode, generateSource, parseSource } from '../utils'
import JSXSnapshot from '../__snapshot__/jsx'

const issue46File = `
import * as React from 'react'
import { Link as RRLink } from 'react-router-dom';

const Link = (props: React.ComponentProps<typeof RRLink>) => null
`;

const issue48File = `
import styled from 'styled-components';

type ExtendedProps = {
    $anyprop: string;
};

const StyledDiv = styled.div<ExtendedProps>\`
    color: red;
\`;
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
    const node = parseSource(generateSource([
      'import * as React from "react";',
      'import UserInterface from \'../UserInterface\'',
      'export default class UserComponent extends React.Component<UserInterface, {}> {',
      'constructor (props: UserInterface){',
      '  super(props);',
      '}',
      'render() {',
      '  return (  ',
      '    <div>',
      '      <H1<string>>User Component</H1>',
      '        Hello, <b>{this.props.name}</b>',
      '        <br/>',
      '        You are <b>{this.props.age} years old</b>',
      '        <br/>',
      '        You live at: <b>{this.props.address}</b>',
      '        <br/>',
      '        You were born: <b>{this.props.dob.toDateString()}</b>',
      '    </div>',
      '    );',
      '  }',
      '}',
      ''
    ]))

    console.log(JSON.stringify(node, null, 2))
    equalNode(node, JSXSnapshot.Tsx)
  })

  it('issue 29 jsx', () => {
    const node = parseSource(generateSource(['import React, { forwardRef } from "react";',
      'import PropTypes from "prop-types";',
      'const CustomButton = forwardRef(',
      '  (',
      '    {',
      '      iconStart,',
      '      iconEnd,',
      '      text',
      '    },',
      '    ref',
      '  ) => {',
      '    return (',
      '      <Button ref={ref}>',
      '        {iconStart}',
      '        {text}',
      '        {iconEnd}',
      '      </Button>',
      '    );',
      '  }',
      ');',
      'CustomButton.displayName = "CustomButton";',
      'CustomButton.propTypes = {',
      '  text: PropTypes.string,',
      '  iconStart: PropTypes.element,',
      '  iconEnd: PropTypes.element,', '};',
      'export default CustomButton;'
      ]))

    equalNode(node, JSXSnapshot.Issue29Jsx)
  })

  it('issue 46', () => {
    const node = parseSource(issue46File)

    equalNode(node, JSXSnapshot.Issue46)
  })

  it('issue 48', () => {
    const node = parseSource(issue48File)

    equalNode(node, JSXSnapshot.Issue48)
  })
})
