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
  }
}

export default ForSnapshot
