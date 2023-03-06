import * as acorn from 'acorn'
import tsPlugin from '../../src'
import type { AcornTypeScript } from '../../src/types'

function checkAcornTypeScriptUndefined(acornTypeScript?: AcornTypeScript): boolean {
  if (!acornTypeScript) return false

  return Boolean(acornTypeScript.tokTypes)
    && Boolean(acornTypeScript.keywordsRegExp)
    && Boolean(acornTypeScript.tokenIsLiteralPropertyName)
    && Boolean(acornTypeScript.tokenIsKeywordOrIdentifier)
    && Boolean(acornTypeScript.tokenIsIdentifier)
    && Boolean(acornTypeScript.tokenIsTSDeclarationStart)
    && Boolean(acornTypeScript.tokenIsTSTypeOperator)
    && Boolean(acornTypeScript.tokenIsTemplate)
}

function checkAcornTypeScriptEqual(
  acornTypeScriptOne?: AcornTypeScript,
  acornTypeScriptTwo?: AcornTypeScript
): boolean {
  if (!acornTypeScriptTwo || !acornTypeScriptOne) return false
  if (
    !checkAcornTypeScriptUndefined(acornTypeScriptOne) ||
    !checkAcornTypeScriptUndefined(acornTypeScriptTwo)
  ) return false

  return (acornTypeScriptOne.tokTypes === acornTypeScriptTwo.tokTypes) &&
    (acornTypeScriptOne.keywordsRegExp === acornTypeScriptTwo.keywordsRegExp) &&
    (acornTypeScriptOne.tokenIsLiteralPropertyName === acornTypeScriptTwo.tokenIsLiteralPropertyName) &&
    (acornTypeScriptOne.tokenIsKeywordOrIdentifier === acornTypeScriptTwo.tokenIsKeywordOrIdentifier) &&
    (acornTypeScriptOne.tokenIsIdentifier === acornTypeScriptTwo.tokenIsIdentifier) &&
    (acornTypeScriptOne.tokenIsTSDeclarationStart === acornTypeScriptTwo.tokenIsTSDeclarationStart) &&
    (acornTypeScriptOne.tokenIsTSTypeOperator === acornTypeScriptTwo.tokenIsTSTypeOperator) &&
    (acornTypeScriptOne.tokenIsTemplate === acornTypeScriptTwo.tokenIsTemplate)
}

describe('static plugin', function() {
  it('acornTypeScript', function() {
    let acornTypeScript: any
    acorn.Parser.extend(tsPlugin(), function(BaseParser) {
      acornTypeScript = (BaseParser as any).acornTypeScript
      return BaseParser
    })

    expect(checkAcornTypeScriptUndefined(acornTypeScript)).toBe(true)
  })

  it('acornTypeScript in two plugins', function() {
    let acornTypeScriptOne: any
    let acornTypeScriptTwo: any
    acorn.Parser.extend(tsPlugin(), function(BaseParser) {
      acornTypeScriptOne = (BaseParser as any).acornTypeScript
      return BaseParser
    }, function(BaseParser) {
      acornTypeScriptTwo = (BaseParser as any).acornTypeScript
      return BaseParser
    })

    expect(
      checkAcornTypeScriptEqual(acornTypeScriptOne, acornTypeScriptTwo)
    ).toBe(true)
  })
})
