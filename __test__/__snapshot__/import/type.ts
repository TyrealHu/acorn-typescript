export const ImportDefaultType = {
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
      'importKind': 'type',
      'specifiers': [
        {
          'type': 'ImportDefaultSpecifier',
          'start': 12,
          'end': 16,
          'loc': {
            'start': {
              'line': 1,
              'column': 12
            },
            'end': {
              'line': 1,
              'column': 21
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
                'column': 21
              }
            },
            'name': 'Test'
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
        'value': './index.ts',
        'raw': '\'./index.ts\''
      }
    }
  ],
  'sourceType': 'module'
}

export const ImportNameAsType = {
  'type': 'Program',
  'start': 0,
  'end': 47,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 47
    }
  },
  'body': [
    {
      'type': 'ImportDeclaration',
      'start': 0,
      'end': 47,
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 47
        }
      },
      'importKind': 'type',
      'specifiers': [
        {
          'type': 'ImportSpecifier',
          'start': 14,
          'end': 27,
          'loc': {
            'start': {
              'line': 1,
              'column': 14
            },
            'end': {
              'line': 1,
              'column': 27
            }
          },
          'imported': {
            'type': 'Identifier',
            'start': 14,
            'end': 18,
            'loc': {
              'start': {
                'line': 1,
                'column': 14
              },
              'end': {
                'line': 1,
                'column': 18
              }
            },
            'name': 'Test'
          },
          'importKind': 'value',
          'local': {
            'type': 'Identifier',
            'start': 22,
            'end': 27,
            'loc': {
              'start': {
                'line': 1,
                'column': 22
              },
              'end': {
                'line': 1,
                'column': 27
              }
            },
            'name': 'Test1'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 35,
        'end': 47,
        'loc': {
          'start': {
            'line': 1,
            'column': 35
          },
          'end': {
            'line': 1,
            'column': 47
          }
        },
        'value': './index.ts',
        'raw': '\'./index.ts\''
      }
    }
  ],
  'sourceType': 'module'
}

export const ImportNamespaceType = {
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
      'importKind': 'type',
      'specifiers': [
        {
          'type': 'ImportNamespaceSpecifier',
          'start': 12,
          'end': 21,
          'loc': {
            'start': {
              'line': 1,
              'column': 12
            },
            'end': {
              'line': 1,
              'column': 21
            }
          },
          'local': {
            'type': 'Identifier',
            'start': 17,
            'end': 21,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 21
              }
            },
            'name': 'Test'
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
        'value': './index.ts',
        'raw': '\'./index.ts\''
      }
    }
  ],
  'sourceType': 'module'
}

export const ImportComplexType = {
  'type': 'Program',
  'start': 0,
  'end': 147,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 4,
      'column': 41
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
        'value': './index.ts',
        'raw': '\'./index.ts\''
      }
    },
    {
      'type': 'ImportDeclaration',
      'start': 20,
      'end': 56,
      'loc': {
        'start': {
          'line': 2,
          'column': 0
        },
        'end': {
          'line': 2,
          'column': 36
        }
      },
      'importKind': 'type',
      'specifiers': [
        {
          'type': 'ImportDefaultSpecifier',
          'start': 32,
          'end': 37,
          'loc': {
            'start': {
              'line': 2,
              'column': 12
            },
            'end': {
              'line': 2,
              'column': 22
            }
          },
          'local': {
            'type': 'Identifier',
            'start': 32,
            'end': 37,
            'loc': {
              'start': {
                'line': 2,
                'column': 12
              },
              'end': {
                'line': 2,
                'column': 22
              }
            },
            'name': 'Test1'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 43,
        'end': 56,
        'loc': {
          'start': {
            'line': 2,
            'column': 23
          },
          'end': {
            'line': 2,
            'column': 36
          }
        },
        'value': './index1.ts',
        'raw': '\'./index1.ts\''
      }
    },
    {
      'type': 'ImportDeclaration',
      'start': 57,
      'end': 105,
      'loc': {
        'start': {
          'line': 3,
          'column': 0
        },
        'end': {
          'line': 3,
          'column': 48
        }
      },
      'importKind': 'type',
      'specifiers': [
        {
          'type': 'ImportSpecifier',
          'start': 71,
          'end': 84,
          'loc': {
            'start': {
              'line': 3,
              'column': 14
            },
            'end': {
              'line': 3,
              'column': 27
            }
          },
          'imported': {
            'type': 'Identifier',
            'start': 71,
            'end': 75,
            'loc': {
              'start': {
                'line': 3,
                'column': 14
              },
              'end': {
                'line': 3,
                'column': 18
              }
            },
            'name': 'Test'
          },
          'importKind': 'value',
          'local': {
            'type': 'Identifier',
            'start': 79,
            'end': 84,
            'loc': {
              'start': {
                'line': 3,
                'column': 22
              },
              'end': {
                'line': 3,
                'column': 27
              }
            },
            'name': 'Test2'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 92,
        'end': 105,
        'loc': {
          'start': {
            'line': 3,
            'column': 35
          },
          'end': {
            'line': 3,
            'column': 48
          }
        },
        'value': './index2.ts',
        'raw': '\'./index2.ts\''
      }
    },
    {
      'type': 'ImportDeclaration',
      'start': 106,
      'end': 147,
      'loc': {
        'start': {
          'line': 4,
          'column': 0
        },
        'end': {
          'line': 4,
          'column': 41
        }
      },
      'importKind': 'type',
      'specifiers': [
        {
          'type': 'ImportNamespaceSpecifier',
          'start': 118,
          'end': 128,
          'loc': {
            'start': {
              'line': 4,
              'column': 12
            },
            'end': {
              'line': 4,
              'column': 22
            }
          },
          'local': {
            'type': 'Identifier',
            'start': 123,
            'end': 128,
            'loc': {
              'start': {
                'line': 4,
                'column': 17
              },
              'end': {
                'line': 4,
                'column': 22
              }
            },
            'name': 'Test3'
          }
        }
      ],
      'source': {
        'type': 'Literal',
        'start': 134,
        'end': 147,
        'loc': {
          'start': {
            'line': 4,
            'column': 28
          },
          'end': {
            'line': 4,
            'column': 41
          }
        },
        'value': './index3.ts',
        'raw': '\'./index3.ts\''
      }
    }
  ],
  'sourceType': 'module'
}
