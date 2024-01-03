const SatisfiesSnapshot = {
  Normal: {
    'type': 'Program',
    'start': 0,
    'end': 25,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 25,
        'index': 25
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 25,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 25,
            'index': 25
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 25,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 25,
                'index': 25
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 7,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 7,
                  'index': 7
                }
              },
              'name': 'a'
            },
            'init': {
              'type': 'TSSatisfiesExpression',
              'start': 10,
              'end': 25,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 10,
                  'index': 10
                },
                'end': {
                  'line': 1,
                  'column': 25,
                  'index': 25
                }
              },
              'expression': {
                'type': 'Literal',
                'start': 10,
                'end': 11,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 11,
                    'index': 11
                  }
                },
                'value': 1,
                'raw': '1'
              },
              'typeAnnotation': {
                'type': 'TSAnyKeyword',
                'start': 22,
                'end': 25,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 22,
                    'index': 22
                  },
                  'end': {
                    'line': 1,
                    'column': 25,
                    'index': 25
                  }
                }
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

export default SatisfiesSnapshot
