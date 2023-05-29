import * as path from "path";
// @ts-ignore - no types
import * as run from "test262-parser-runner";
import * as acorn from "acorn";
import { tsPlugin } from "../src";

const parser = acorn.Parser.extend(tsPlugin());
const UNSUPPORTED_FEATURES: string[] = [
  "regexp-v-flag",
  "regexp-duplicate-named-groups",
  "import-assertions",
  "decorators",
];

const SKIP_FILES: string[] = [
  // `1 < 2 > 3;` cannot be parsed well.
  // This is because `< 2 >` is judged as TypeArguments.
  // See https://github.com/TyrealHu/acorn-typescript/issues/21
  "test/language/punctuators/S7.7_A1.js",
];


// Some keywords still don't throw an error.
// See https://github.com/TyrealHu/acorn-typescript/issues/23
const WHITELIST: string[] = [
  // `this` variable name. e.g. `var this = 42`
  "language/identifiers/val-this.js",
  "language/identifiers/val-this-via-escape-hex.js",
  "language/identifiers/val-this-via-escape-hex4.js",
].flatMap((s) => [s + " (default)", s + " (strict mode)"]);

run(
  (content, { sourceType }) => {
    return parser.parse(content, {
      sourceType,
      ecmaVersion: "latest",
      locations: true,
    });
  },
  {
    testsDirectory: path.dirname(require.resolve("../package.json")),
    skip: (test) => {
      return (
        (test.attrs.features &&
          UNSUPPORTED_FEATURES.some((f) => test.attrs.features.includes(f))) ||
        SKIP_FILES.includes(test.file)
      );
    },
    whitelist: WHITELIST.map((filename) =>
      path.sep === "/" ? filename : filename.split("/").join(path.sep)
    ),
  }
);
