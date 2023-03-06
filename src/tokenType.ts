// @ts-ignore
import { TokenType, keywordTypes, tokTypes } from 'acorn'
import { AcornTypeScript } from './types'

const startsExpr = true

// Succinct definitions of keyword token types

function kwLike(_name, options: any = {}) {
  return new TokenType('name', options)
}

const acornTypeScriptMap = new WeakMap();

export function generateAcornTypeScript(_acorn: any): AcornTypeScript {
  const acorn = _acorn.Parser.acorn || _acorn;
  let acornTypeScript = acornTypeScriptMap.get(acorn)
  if (!acornTypeScript) {
    const tsTokenType = generateTsTokenType()
    const tsKeywordsRegExp = new RegExp(
      `^(?:${Object.keys(tsTokenType).join('|')})$`
    )

    function tokenIsLiteralPropertyName(token: TokenType): boolean {
      return [
        ...[tokTypes.name, tokTypes.string, tokTypes.num],
        ...Object.values(keywordTypes),
        ...Object.values(tsTokenType)
      ].includes(token)
    }

    function tokenIsKeywordOrIdentifier(token: TokenType): boolean {
      return [
        ...[tokTypes.name],
        ...Object.values(keywordTypes),
        ...Object.values(tsTokenType)
      ].includes(token)
    }

    function tokenIsIdentifier(token: TokenType): boolean {
      return [...Object.values(tsTokenType), tokTypes.name].includes(token)
    }

    function tokenIsTSDeclarationStart(token: TokenType): boolean {
      return [
        tsTokenType.abstract,
        tsTokenType.declare,
        tsTokenType.enum,
        tsTokenType.module,
        tsTokenType.namespace,
        tsTokenType.interface,
        tsTokenType.type
      ].includes(token)
    }

    function tokenIsTSTypeOperator(token: TokenType): boolean {
      return [
        tsTokenType.keyof,
        tsTokenType.readonly,
        tsTokenType.unique
      ].includes(token)
    }

    function tokenIsTemplate(token: TokenType): boolean {
      return token === tokTypes.invalidTemplate
    }

    acornTypeScript = {
      tokTypes: tsTokenType,
      keywordsRegExp: tsKeywordsRegExp,
      tokenIsLiteralPropertyName,
      tokenIsKeywordOrIdentifier,
      tokenIsIdentifier,
      tokenIsTSDeclarationStart,
      tokenIsTSTypeOperator,
      tokenIsTemplate
    }
  }

  return acornTypeScript
}

export function generateTsTokenType() {
  return {
    as: kwLike('name', { startsExpr }),
    assert: kwLike('assert', { startsExpr }),
    async: kwLike('async', { startsExpr }),
    await: kwLike('await', { startsExpr }),
    from: kwLike('from', { startsExpr }),
    get: kwLike('get', { startsExpr }),
    let: kwLike('let', { startsExpr }),
    meta: kwLike('meta', { startsExpr }),
    of: kwLike('of', { startsExpr }),
    sent: kwLike('sent', { startsExpr }),
    set: kwLike('set', { startsExpr }),
    static: kwLike('static', { startsExpr }),
    yield: kwLike('yield', { startsExpr }),

    // Flow and TypeScript Keywordlike
    asserts: kwLike('asserts', { startsExpr }),
    checks: kwLike('checks', { startsExpr }),
    exports: kwLike('exports', { startsExpr }),
    global: kwLike('global', { startsExpr }),
    implements: kwLike('implements', { startsExpr }),
    intrinsic: kwLike('intrinsic', { startsExpr }),
    infer: kwLike('infer', { startsExpr }),
    is: kwLike('is', { startsExpr }),
    mixins: kwLike('mixins', { startsExpr }),
    proto: kwLike('proto', { startsExpr }),
    require: kwLike('require', { startsExpr }),
    // start: isTSTypeOperator
    keyof: kwLike('keyof', { startsExpr }),
    readonly: kwLike('readonly', { startsExpr }),
    unique: kwLike('unique', { startsExpr }),
    // end: isTSTypeOperator
    // start: isTSDeclarationStart
    abstract: kwLike('abstract', { startsExpr }),
    declare: kwLike('declare', { startsExpr }),
    enum: kwLike('enum', { startsExpr }),
    module: kwLike('module', { startsExpr }),
    namespace: kwLike('namespace', { startsExpr }),
    // start: isFlowInterfaceOrTypeOrOpaque
    interface: kwLike('interface', { startsExpr }),
    type: kwLike('type', { startsExpr }),
    // end: isTSDeclarationStart
    opaque: kwLike('opaque', { startsExpr })
    // end: isFlowInterfaceOrTypeOrOpaque
  }
}

export const jsxTokenType = {
  // jsx
  jsxTagStart: new TokenType('jsxTagStart', { startsExpr })
}

