export const ImportWithoutSpecifiers = {
  'type': 'Program',
  'start': 0,
  'end': 19,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 19
    }
  },
  'body': [
    {
      'type': 'ImportDeclaration',
      'start': 0,
      'end': 19,
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 19
        }
      },
      'importKind': 'value',
      'specifiers': [],
      'source': {
        'type': 'Literal',
        'start': 7,
        'end': 19,
        'loc': {
          'start': {
            'line': 1,
            'column': 7
          },
          'end': {
            'line': 1,
            'column': 19
          }
        },
        'value': './index.js',
        'raw': '\'./index.js\''
      }
    }
  ],
  'sourceType': 'module'
}

export const ImportDefaultSpecifier = {
  'type': 'Program',
  'start': 0,
  'end': 29,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 29
    }
  },
  'body': [
    {
      'type': 'ImportDeclaration',
      'start': 0,
      'end': 29,
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 29
        }
      },
      'importKind': 'value',
      'specifiers': [
        {
          'type': 'ImportDefaultSpecifier',
          'start': 7,
          'end': 11,
          'loc': {
            'start': {
              'line': 1,
              'column': 7
            },
            'end': {
              'line': 1,
              'column': 16
            }
          },
          'local': {
            'type': 'Identifier',
            'start': 7,
            'end': 11,
            'loc': {
              'start': {
                'line': 1,
                'column': 7
              },
              'end': {
                'line': 1,
                'column': 16
              }
            },
            'name': 'test'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 17,
        'end': 29,
        'loc': {
          'start': {
            'line': 1,
            'column': 17
          },
          'end': {
            'line': 1,
            'column': 29
          }
        },
        'value': './index.js',
        'raw': '\'./index.js\''
      }
    }
  ],
  'sourceType': 'module'
}

export const ImportNameSpecifiers = {
  'type': 'Program',
  'start': 0,
  'end': 39,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 39
    }
  },
  'body': [
    {
      'type': 'ImportDeclaration',
      'start': 0,
      'end': 39,
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 39
        }
      },
      'importKind': 'value',
      'specifiers': [
        {
          'type': 'ImportSpecifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9
            },
            'end': {
              'line': 1,
              'column': 13
            }
          },
          'imported': {
            'type': 'Identifier',
            'start': 9,
            'end': 13,
            'loc': {
              'start': {
                'line': 1,
                'column': 9
              },
              'end': {
                'line': 1,
                'column': 13
              }
            },
            'name': 'test'
          },
          'importKind': 'value',
          'local': {
            'type': 'Identifier',
            'start': 9,
            'end': 13,
            'loc': {
              'start': {
                'line': 1,
                'column': 9
              },
              'end': {
                'line': 1,
                'column': 13
              }
            },
            'name': 'test'
          }
        },
        {
          'type': 'ImportSpecifier',
          'start': 15,
          'end': 19,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 19
            }
          },
          'imported': {
            'type': 'Identifier',
            'start': 15,
            'end': 19,
            'loc': {
              'start': {
                'line': 1,
                'column': 15
              },
              'end': {
                'line': 1,
                'column': 19
              }
            },
            'name': 'name'
          },
          'importKind': 'value',
          'local': {
            'type': 'Identifier',
            'start': 15,
            'end': 19,
            'loc': {
              'start': {
                'line': 1,
                'column': 15
              },
              'end': {
                'line': 1,
                'column': 19
              }
            },
            'name': 'name'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 27,
        'end': 39,
        'loc': {
          'start': {
            'line': 1,
            'column': 27
          },
          'end': {
            'line': 1,
            'column': 39
          }
        },
        'value': './index.js',
        'raw': '\'./index.js\''
      }
    }
  ],
  'sourceType': 'module'
}

export const ImportNamespaceSpecifier = {
  'type': 'Program',
  'start': 0,
  'end': 34,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 34
    }
  },
  'body': [
    {
      'type': 'ImportDeclaration',
      'start': 0,
      'end': 34,
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 34
        }
      },
      'importKind': 'value',
      'specifiers': [
        {
          'type': 'ImportNamespaceSpecifier',
          'start': 7,
          'end': 16,
          'loc': {
            'start': {
              'line': 1,
              'column': 7
            },
            'end': {
              'line': 1,
              'column': 16
            }
          },
          'local': {
            'type': 'Identifier',
            'start': 12,
            'end': 16,
            'loc': {
              'start': {
                'line': 1,
                'column': 12
              },
              'end': {
                'line': 1,
                'column': 16
              }
            },
            'name': 'test'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 22,
        'end': 34,
        'loc': {
          'start': {
            'line': 1,
            'column': 22
          },
          'end': {
            'line': 1,
            'column': 34
          }
        },
        'value': './index.js',
        'raw': '\'./index.js\''
      }
    }
  ],
  'sourceType': 'module'
}
