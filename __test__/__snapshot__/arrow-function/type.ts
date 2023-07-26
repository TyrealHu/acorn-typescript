const ArrowFunctionTypeSnapshot = {
  AssignmentPattern: {
    type: 'Program',
    start: 0,
    end: 20,
    loc: {
      start: {
        line: 1,
        column: 0,
        index: 0
      },
      end: {
        line: 1,
        column: 20,
        index: 20
      }
    },
    body: [
      {
        type: 'ExpressionStatement',
        start: 0,
        end: 20,
        loc: {
          start: {
            line: 1,
            column: 0,
            index: 0
          },
          end: {
            line: 1,
            column: 20,
            index: 20
          }
        },
        expression: {
          type: 'ArrowFunctionExpression',
          start: 0,
          end: 20,
          loc: {
            start: {
              line: 1,
              column: 0,
              index: 0
            },
            end: {
              line: 1,
              column: 20,
              index: 20
            }
          },
          returnType: {
            type: 'TSTypeAnnotation',
            start: 8,
            end: 14,
            loc: {
              start: {
                line: 1,
                column: 8,
                index: 8
              },
              end: {
                line: 1,
                column: 14,
                index: 14
              }
            },
            typeAnnotation: {
              type: 'TSVoidKeyword',
              start: 10,
              end: 14,
              loc: {
                start: {
                  line: 1,
                  column: 10,
                  index: 10
                },
                end: {
                  line: 1,
                  column: 14,
                  index: 14
                }
              }
            }
          },
          id: null,
          expression: false,
          generator: false,
          async: false,
          params: [
            {
              type: 'AssignmentPattern',
              start: 1,
              end: 7,
              loc: {
                start: {
                  line: 1,
                  column: 1,
                  index: 1
                },
                end: {
                  line: 1,
                  column: 7,
                  index: 7
                }
              },
              left: {
                type: 'Identifier',
                start: 1,
                end: 2,
                loc: {
                  start: {
                    line: 1,
                    column: 1,
                    index: 1
                  },
                  end: {
                    line: 1,
                    column: 2,
                    index: 2
                  }
                },
                name: 'x'
              },
              right: {
                type: 'Literal',
                start: 5,
                end: 7,
                loc: {
                  start: {
                    line: 1,
                    column: 5,
                    index: 5
                  },
                  end: {
                    line: 1,
                    column: 7,
                    index: 7
                  }
                },
                value: 42,
                raw: '42'
              }
            }
          ],
          body: {
            type: 'BlockStatement',
            start: 18,
            end: 20,
            loc: {
              start: {
                line: 1,
                column: 18,
                index: 18
              },
              end: {
                line: 1,
                column: 20,
                index: 20
              }
            },
            body: []
          }
        }
      }
    ],
    sourceType: 'module'
  },
  Issue32: {
    'type': 'Program',
    'start': 0,
    'end': 57,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 2,
        'column': 2,
        'index': 57
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 57,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 2,
            'column': 2,
            'index': 57
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 56,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 2,
                'column': 1,
                'index': 56
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 13,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                }
              },
              'name': 'testApp'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 16,
              'end': 56,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 16,
                  'index': 16
                },
                'end': {
                  'line': 2,
                  'column': 1,
                  'index': 56
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': true,
              'params': [
                {
                  'type': 'Identifier',
                  'start': 22,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 22,
                      'index': 22
                    },
                    'end': 33
                  },
                  'name': 'app',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 25,
                    'end': 33,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 25,
                        'index': 25
                      },
                      'end': {
                        'line': 1,
                        'column': 33,
                        'index': 33
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSStringKeyword',
                      'start': 27,
                      'end': 33,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 27,
                          'index': 27
                        },
                        'end': {
                          'line': 1,
                          'column': 33,
                          'index': 33
                        }
                      }
                    }
                  }
                },
                {
                  'type': 'Identifier',
                  'start': 35,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 35,
                      'index': 35
                    },
                    'end': 48
                  },
                  'name': 'index',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 40,
                    'end': 48,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 40,
                        'index': 40
                      },
                      'end': {
                        'line': 1,
                        'column': 48,
                        'index': 48
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSNumberKeyword',
                      'start': 42,
                      'end': 48,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 42,
                          'index': 42
                        },
                        'end': {
                          'line': 1,
                          'column': 48,
                          'index': 48
                        }
                      }
                    }
                  }
                }
              ],
              'body': {
                'type': 'BlockStatement',
                'start': 53,
                'end': 56,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 53,
                    'index': 53
                  },
                  'end': {
                    'line': 2,
                    'column': 1,
                    'index': 56
                  }
                },
                'body': []
              }
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  }
}

export default ArrowFunctionTypeSnapshot
