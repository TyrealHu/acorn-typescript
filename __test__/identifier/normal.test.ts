import { equalNode, generateSource, parseSource } from "../utils";
import NormalIdentifierSnapshot from "../__snapshot__/identifier/normal";

describe("normal identifier test", () => {
  it("export identifier `as`", () => {
    const node = parseSource(
      generateSource([`var foo = 8;`, `export { foo as as };`])
    );

    equalNode(node, NormalIdentifierSnapshot.ExportIdentifierAs);
  });

  it("import identifier `as`", () => {
    const node = parseSource(
      generateSource([`import { as as as } from './foo.js';`])
    );

    equalNode(node, NormalIdentifierSnapshot.ImportIdentifierAs);
  });

  it('issue 50', () => {
    const node = parseSource(
      generateSource([`type abc = 1234;`, `var abc;`])
    );

    equalNode(node, NormalIdentifierSnapshot.Issue50);
  })
});
