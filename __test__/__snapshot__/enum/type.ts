const EnumTypeSnapshot = {
  Normal: {
    'type': 'Program',
    'start': 0,
    'end': 64,
    'loc': {
      'start': { 'line': 1, 'column': 0, 'index': 0 },
      'end': { 'line': 5, 'column': 1, 'index': 64 }
    },
    'body': [{
      'type': 'TSEnumDeclaration',
      'start': 0,
      'end': 64,
      'loc': {
        'start': { 'line': 1, 'column': 0, 'index': 0 },
        'end': { 'line': 5, 'column': 1, 'index': 64 }
      },
      'id': {
        'type': 'Identifier',
        'start': 5,
        'end': 12,
        'loc': {
          'start': { 'line': 1, 'column': 5, 'index': 5 },
          'end': { 'line': 1, 'column': 12, 'index': 12 }
        },
        'name': 'Student'
      },
      'members': [{
        'type': 'TSEnumMember',
        'start': 16,
        'end': 31,
        'loc': {
          'start': { 'line': 2, 'column': 1, 'index': 16 },
          'end': { 'line': 2, 'column': 16, 'index': 31 }
        },
        'id': {
          'type': 'Identifier',
          'start': 16,
          'end': 20,
          'loc': {
            'start': { 'line': 2, 'column': 1, 'index': 16 },
            'end': { 'line': 2, 'column': 5, 'index': 20 }
          },
          'name': 'name'
        },
        'initializer': {
          'type': 'Literal',
          'start': 23,
          'end': 31,
          'loc': {
            'start': { 'line': 2, 'column': 8, 'index': 23 },
            'end': { 'line': 2, 'column': 16, 'index': 31 }
          },
          'value': 'tyreal',
          'raw': '\'tyreal\''
        }
      }, {
        'type': 'TSEnumMember',
        'start': 34,
        'end': 42,
        'loc': {
          'start': { 'line': 3, 'column': 1, 'index': 34 },
          'end': { 'line': 3, 'column': 9, 'index': 42 }
        },
        'id': {
          'type': 'Identifier',
          'start': 34,
          'end': 37,
          'loc': {
            'start': { 'line': 3, 'column': 1, 'index': 34 },
            'end': { 'line': 3, 'column': 4, 'index': 37 }
          },
          'name': 'age'
        },
        'initializer': {
          'type': 'Literal',
          'start': 40,
          'end': 42,
          'loc': {
            'start': { 'line': 3, 'column': 7, 'index': 40 },
            'end': { 'line': 3, 'column': 9, 'index': 42 }
          },
          'value': 22,
          'raw': '22'
        }
      }, {
        'type': 'TSEnumMember',
        'start': 45,
        'end': 62,
        'loc': {
          'start': { 'line': 4, 'column': 1, 'index': 45 },
          'end': { 'line': 4, 'column': 18, 'index': 62 }
        },
        'id': {
          'type': 'Identifier',
          'start': 45,
          'end': 51,
          'loc': {
            'start': { 'line': 4, 'column': 1, 'index': 45 },
            'end': { 'line': 4, 'column': 7, 'index': 51 }
          },
          'name': 'school'
        },
        'initializer': {
          'type': 'Literal',
          'start': 54,
          'end': 62,
          'loc': {
            'start': { 'line': 4, 'column': 10, 'index': 54 },
            'end': { 'line': 4, 'column': 18, 'index': 62 }
          },
          'value': 'string',
          'raw': '\'string\''
        }
      }]
    }],
    'sourceType': 'module'
  }
}

export default EnumTypeSnapshot
