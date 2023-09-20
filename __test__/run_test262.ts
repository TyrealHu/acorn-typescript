import * as path from 'path'
// @ts-ignore - no types
import * as run from 'test262-parser-runner'
import * as acorn from 'acorn'
import { tsPlugin } from '../src'

const parser = acorn.Parser.extend(tsPlugin())
const UNSUPPORTED_FEATURES: string[] = [
  'regexp-v-flag',
  'regexp-duplicate-named-groups',
  'import-assertions',
  'decorators',
  'json-modules',
  'import-attributes'
]

const SKIP_FILES: string[] = [
  // `1 < 2 > 3;` cannot be parsed well.
  // This is because `< 2 >` is judged as TypeArguments.
  // See https://github.com/TyrealHu/acorn-typescript/issues/21
  'test/language/punctuators/S7.7_A1.js'
]


// Some keywords still don't throw an error.
// See https://github.com/TyrealHu/acorn-typescript/issues/23
const WHITELIST: string[] = [
  // `this` variable name. e.g. `var this = 42`
  'language/identifiers/val-this.js',
  'language/identifiers/val-this-via-escape-hex.js',
  'language/identifiers/val-this-via-escape-hex4.js',
  'language/module-code/early-dup-export-as-star-as.js',
  'language/module-code/early-dup-export-dflt-id.js',
  'language/module-code/early-dup-export-id-as.js',
  'language/module-code/early-dup-export-id.js',
  'language/module-code/early-dup-export-star-as-dflt.js',
  // import assert
  'language/expressions/dynamic-import/syntax/invalid/nested-arrow-assignment-expression-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-arrow-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-await-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-async-arrow-function-return-await-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-async-function-await-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-async-function-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-async-function-return-await-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-async-gen-await-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-block-labeled-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-block-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-do-while-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-else-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-else-braceless-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-function-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-function-return-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-if-braceless-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-if-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/nested-while-not-extensible-args.js',
  'language/expressions/dynamic-import/syntax/invalid/top-level-not-extensible-args.js',
].flatMap((s) => [s + ' (default)', s + ' (strict mode)'])

WHITELIST.push('language/expressions/dynamic-import/syntax/invalid/nested-with-expression-not-extensible-args.js (default)')
WHITELIST.push('language/expressions/dynamic-import/syntax/invalid/nested-with-not-extensible-args.js (default)')

run(
  (content, { sourceType }) => {
    return parser.parse(content, {
      sourceType,
      ecmaVersion: 'latest',
      locations: true
    })
  },
  {
    testsDirectory: path.dirname(require.resolve('test262/package.json')),
    skip: (test) => {
      return (
        (test.attrs.features &&
          UNSUPPORTED_FEATURES.some((f) => test.attrs.features.includes(f))) ||
        SKIP_FILES.includes(test.file)
      )
    },
    whitelist: WHITELIST.map((filename) =>
      path.sep === '/' ? filename : filename.split('/').join(path.sep)
    )
  }
)
