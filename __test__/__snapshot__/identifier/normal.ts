const NormalIdentifierSnapshot = {
  ExportIdentifierAs: {
    type: "Program",
    start: 0,
    end: 34,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 2, column: 21, index: 34 },
    },
    body: [
      {
        type: "VariableDeclaration",
        start: 0,
        end: 12,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 1, column: 12, index: 12 },
        },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 4,
            end: 11,
            loc: {
              start: { line: 1, column: 4, index: 4 },
              end: { line: 1, column: 11, index: 11 },
            },
            id: {
              type: "Identifier",
              start: 4,
              end: 7,
              loc: {
                start: { line: 1, column: 4, index: 4 },
                end: { line: 1, column: 7, index: 7 },
              },
              name: "foo",
            },
            init: {
              type: "Literal",
              start: 10,
              end: 11,
              loc: {
                start: { line: 1, column: 10, index: 10 },
                end: { line: 1, column: 11, index: 11 },
              },
              value: 8,
              raw: "8",
            },
          },
        ],
        kind: "var",
      },
      {
        type: "ExportNamedDeclaration",
        start: 13,
        end: 34,
        loc: {
          start: { line: 2, column: 0, index: 13 },
          end: { line: 2, column: 21, index: 34 },
        },
        exportKind: "value",
        declaration: null,
        specifiers: [
          {
            type: "ExportSpecifier",
            start: 22,
            end: 31,
            loc: {
              start: { line: 2, column: 9, index: 22 },
              end: { line: 2, column: 18, index: 31 },
            },
            local: {
              type: "Identifier",
              start: 22,
              end: 25,
              loc: {
                start: { line: 2, column: 9, index: 22 },
                end: { line: 2, column: 12, index: 25 },
              },
              name: "foo",
            },
            exportKind: "value",
            exported: {
              type: "Identifier",
              start: 29,
              end: 31,
              loc: {
                start: { line: 2, column: 16, index: 29 },
                end: { line: 2, column: 18, index: 31 },
              },
              name: "as",
            },
          },
        ],
        source: null,
      },
    ],
    sourceType: "module",
  },
  ImportIdentifierAs: {
    type: "Program",
    start: 0,
    end: 36,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 1, column: 36, index: 36 },
    },
    body: [
      {
        type: "ImportDeclaration",
        start: 0,
        end: 36,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 1, column: 36, index: 36 },
        },
        importKind: "value",
        specifiers: [
          {
            type: "ImportSpecifier",
            start: 9,
            end: 17,
            loc: {
              start: { line: 1, column: 9, index: 9 },
              end: { line: 1, column: 17, index: 17 },
            },
            imported: {
              type: "Identifier",
              start: 9,
              end: 11,
              loc: {
                start: { line: 1, column: 9, index: 9 },
                end: { line: 1, column: 11, index: 11 },
              },
              name: "as",
            },
            importKind: "value",
            local: {
              type: "Identifier",
              start: 15,
              end: 17,
              loc: {
                start: { line: 1, column: 15, index: 15 },
                end: { line: 1, column: 17, index: 17 },
              },
              name: "as",
            },
          },
        ],
        source: {
          type: "Literal",
          start: 25,
          end: 35,
          loc: {
            start: { line: 1, column: 25, index: 25 },
            end: { line: 1, column: 35, index: 35 },
          },
          value: "./foo.js",
          raw: "'./foo.js'",
        },
      },
    ],
    sourceType: "module",
  },
};

export default NormalIdentifierSnapshot;
