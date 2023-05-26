const ArrowFunctionTypeSnapshot = {
  AssignmentPattern: {
    type: "Program",
    start: 0,
    end: 20,
    loc: {
      start: {
        line: 1,
        column: 0,
        index: 0,
      },
      end: {
        line: 1,
        column: 20,
        index: 20,
      },
    },
    body: [
      {
        type: "ExpressionStatement",
        start: 0,
        end: 20,
        loc: {
          start: {
            line: 1,
            column: 0,
            index: 0,
          },
          end: {
            line: 1,
            column: 20,
            index: 20,
          },
        },
        expression: {
          type: "ArrowFunctionExpression",
          start: 0,
          end: 20,
          loc: {
            start: {
              line: 1,
              column: 0,
              index: 0,
            },
            end: {
              line: 1,
              column: 20,
              index: 20,
            },
          },
          returnType: {
            type: "TSTypeAnnotation",
            start: 8,
            end: 14,
            loc: {
              start: {
                line: 1,
                column: 8,
                index: 8,
              },
              end: {
                line: 1,
                column: 14,
                index: 14,
              },
            },
            typeAnnotation: {
              type: "TSVoidKeyword",
              start: 10,
              end: 14,
              loc: {
                start: {
                  line: 1,
                  column: 10,
                  index: 10,
                },
                end: {
                  line: 1,
                  column: 14,
                  index: 14,
                },
              },
            },
          },
          id: null,
          expression: false,
          generator: false,
          async: false,
          params: [
            {
              type: "AssignmentPattern",
              start: 1,
              end: 7,
              loc: {
                start: {
                  line: 1,
                  column: 1,
                  index: 1,
                },
                end: {
                  line: 1,
                  column: 7,
                  index: 7,
                },
              },
              left: {
                type: "Identifier",
                start: 1,
                end: 2,
                loc: {
                  start: {
                    line: 1,
                    column: 1,
                    index: 1,
                  },
                  end: {
                    line: 1,
                    column: 2,
                    index: 2,
                  },
                },
                name: "x",
              },
              right: {
                type: "Literal",
                start: 5,
                end: 7,
                loc: {
                  start: {
                    line: 1,
                    column: 5,
                    index: 5,
                  },
                  end: {
                    line: 1,
                    column: 7,
                    index: 7,
                  },
                },
                value: 42,
                raw: "42",
              },
            },
          ],
          body: {
            type: "BlockStatement",
            start: 18,
            end: 20,
            loc: {
              start: {
                line: 1,
                column: 18,
                index: 18,
              },
              end: {
                line: 1,
                column: 20,
                index: 20,
              },
            },
            body: [],
          },
        },
      },
    ],
    sourceType: "module",
  },
};

export default ArrowFunctionTypeSnapshot;
