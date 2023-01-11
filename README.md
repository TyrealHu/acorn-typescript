# acorn-typescript

---

This is plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It was created as an experimental alternative, faster [TypeScript](https://www.typescriptlang.org/) parser. It will help you to parse
typescript script into typeScript AST.

## Usage

Requiring this module provides you with an Acorn plugin that you can use like this:

```typescript
import * as acorn from 'acorn'
import tsPlugin from 'acorn-typescript'

/*
*
* */
const node = acorn.Parser.extend(tsPlugin()).parse(`
const a = 1
type A = number
export {
  a,
  type A as B
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})
```

If you want to enable parsing within a TypeScript ambient context, where certain syntax have different rules (like .d.ts files and inside [declare module blocks](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)).
```typescript
import * as acorn from 'acorn'
import tsPlugin from 'acorn-typescript'

/*
*
* */
const node = acorn.Parser.extend(tsPlugin({ dts: true })).parse(`
const a = 1
type A = number
export {
  a,
  type A as B
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})
```

## RoadMap

- Support to parse JSX & TSX in the future.
- Support to parse TypeScript [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

## License
[MIT](https://couto.mit-license.org/)
