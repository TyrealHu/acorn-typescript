import * as path from "path";
// @ts-ignore - no types
import * as run from "test262-parser-runner";
import * as acorn from "../node_modules/acorn";
import { tsPlugin } from "../src";

const parser = acorn.Parser.extend(tsPlugin());
const UNSUPPORTED_FEATURES: string[] = [
  "regexp-v-flag",
  "regexp-duplicate-named-groups",
  "import-assertions",
];

const WHITELIST: string[] = [];

run(
  (content, { sourceType }) => {
    return parser.parse(content, {
      sourceType,
      ecmaVersion: "latest",
      locations: true,
    });
  },
  {
    testsDirectory: path.dirname(require.resolve("test262/package.json")),
    skip: (test) => {
      return (
        test.attrs.features &&
        UNSUPPORTED_FEATURES.some((f) => test.attrs.features.includes(f))
      );
    },
    whitelist: WHITELIST.map((filename) =>
      path.sep === "/" ? filename : filename.split("/").join(path.sep)
    ),
  }
);
