const ForSnapshot = {
  of: {
    'type': 'Program',
    'start': 0,
    'end': 65,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 4,
        'column': 1,
        'index': 65
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 16,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 16,
            'index': 16
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 16,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 16,
                'index': 16
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 11,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 11,
                  'index': 11
                }
              },
              'name': 'words'
            },
            'init': {
              'type': 'ArrayExpression',
              'start': 14,
              'end': 16,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 14,
                  'index': 14
                },
                'end': {
                  'line': 1,
                  'column': 16,
                  'index': 16
                }
              },
              'elements': []
            }
          }
        ],
        'kind': 'const'
      },
      {
        'type': 'ForOfStatement',
        'start': 17,
        'end': 65,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 17
          },
          'end': {
            'line': 4,
            'column': 1,
            'index': 65
          }
        },
        'await': false,
        'left': {
          'type': 'VariableDeclaration',
          'start': 22,
          'end': 32,
          'loc': {
            'start': {
              'line': 2,
              'column': 5,
              'index': 22
            },
            'end': {
              'line': 2,
              'column': 15,
              'index': 32
            }
          },
          'declarations': [
            {
              'type': 'VariableDeclarator',
              'start': 28,
              'end': 32,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 11,
                  'index': 28
                },
                'end': {
                  'line': 2,
                  'column': 15,
                  'index': 32
                }
              },
              'id': {
                'type': 'Identifier',
                'start': 28,
                'end': 32,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 11,
                    'index': 28
                  },
                  'end': {
                    'line': 2,
                    'column': 15,
                    'index': 32
                  }
                },
                'name': 'word'
              },
              'init': null
            }
          ],
          'kind': 'const'
        },
        'right': {
          'type': 'Identifier',
          'start': 36,
          'end': 41,
          'loc': {
            'start': {
              'line': 2,
              'column': 19,
              'index': 36
            },
            'end': {
              'line': 2,
              'column': 24,
              'index': 41
            }
          },
          'name': 'words'
        },
        'body': {
          'type': 'BlockStatement',
          'start': 43,
          'end': 65,
          'loc': {
            'start': {
              'line': 2,
              'column': 26,
              'index': 43
            },
            'end': {
              'line': 4,
              'column': 1,
              'index': 65
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 46,
              'end': 63,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 46
                },
                'end': {
                  'line': 3,
                  'column': 18,
                  'index': 63
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 46,
                'end': 63,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 1,
                    'index': 46
                  },
                  'end': {
                    'line': 3,
                    'column': 18,
                    'index': 63
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 46,
                  'end': 57,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 1,
                      'index': 46
                    },
                    'end': {
                      'line': 3,
                      'column': 12,
                      'index': 57
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 46,
                    'end': 53,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 1,
                        'index': 46
                      },
                      'end': {
                        'line': 3,
                        'column': 8,
                        'index': 53
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 54,
                    'end': 57,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 9,
                        'index': 54
                      },
                      'end': {
                        'line': 3,
                        'column': 12,
                        'index': 57
                      }
                    },
                    'name': 'log'
                  },
                  'computed': false,
                  'optional': false
                },
                'arguments': [
                  {
                    'type': 'Identifier',
                    'start': 58,
                    'end': 62,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 13,
                        'index': 58
                      },
                      'end': {
                        'line': 3,
                        'column': 17,
                        'index': 62
                      }
                    },
                    'name': 'word'
                  }
                ],
                'optional': false
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  inWithoutDecl: {
    type: "Program",
    start: 0,
    end: 42,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 3, column: 1, index: 42 },
    },
    body: [
      {
        type: "ForInStatement",
        start: 0,
        end: 42,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 3, column: 1, index: 42 },
        },
        left: {
          type: "Identifier",
          start: 5,
          end: 9,
          loc: {
            start: { line: 1, column: 5, index: 5 },
            end: { line: 1, column: 9, index: 9 },
          },
          name: "word",
        },
        right: {
          type: "Identifier",
          start: 13,
          end: 18,
          loc: {
            start: { line: 1, column: 13, index: 13 },
            end: { line: 1, column: 18, index: 18 },
          },
          name: "words",
        },
        body: {
          type: "BlockStatement",
          start: 20,
          end: 42,
          loc: {
            start: { line: 1, column: 20, index: 20 },
            end: { line: 3, column: 1, index: 42 },
          },
          body: [
            {
              type: "ExpressionStatement",
              start: 23,
              end: 40,
              loc: {
                start: { line: 2, column: 1, index: 23 },
                end: { line: 2, column: 18, index: 40 },
              },
              expression: {
                type: "CallExpression",
                start: 23,
                end: 40,
                loc: {
                  start: { line: 2, column: 1, index: 23 },
                  end: { line: 2, column: 18, index: 40 },
                },
                callee: {
                  type: "MemberExpression",
                  start: 23,
                  end: 34,
                  loc: {
                    start: { line: 2, column: 1, index: 23 },
                    end: { line: 2, column: 12, index: 34 },
                  },
                  object: {
                    type: "Identifier",
                    start: 23,
                    end: 30,
                    loc: {
                      start: { line: 2, column: 1, index: 23 },
                      end: { line: 2, column: 8, index: 30 },
                    },
                    name: "console",
                  },
                  property: {
                    type: "Identifier",
                    start: 31,
                    end: 34,
                    loc: {
                      start: { line: 2, column: 9, index: 31 },
                      end: { line: 2, column: 12, index: 34 },
                    },
                    name: "log",
                  },
                  computed: false,
                  optional: false,
                },
                arguments: [
                  {
                    type: "Identifier",
                    start: 35,
                    end: 39,
                    loc: {
                      start: { line: 2, column: 13, index: 35 },
                      end: { line: 2, column: 17, index: 39 },
                    },
                    name: "word",
                  },
                ],
                optional: false,
              },
            },
          ],
        },
      },
    ],
    sourceType: "module",
  },
};

export default ForSnapshot;
