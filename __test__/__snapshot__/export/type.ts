const ExportTypeSnapshot = {
  Type: {
    'type': 'Program',
    'start': 0,
    'end': 34,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 34,
        'index': 34
      }
    },
    'body': [
      {
        'type': 'ExportNamedDeclaration',
        'start': 0,
        'end': 34,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 34,
            'index': 34
          }
        },
        'exportKind': 'type',
        'declaration': {
          'type': 'TSTypeAliasDeclaration',
          'start': 7,
          'end': 34,
          'loc': {
            'start': {
              'line': 1,
              'column': 7,
              'index': 7
            },
            'end': {
              'line': 1,
              'column': 34,
              'index': 34
            }
          },
          'id': {
            'type': 'Identifier',
            'start': 12,
            'end': 16,
            'loc': {
              'start': {
                'line': 1,
                'column': 12,
                'index': 12
              },
              'end': {
                'line': 1,
                'column': 16,
                'index': 16
              }
            },
            'name': 'Test'
          },
          'typeAnnotation': {
            'type': 'TSUnionType',
            'start': 19,
            'end': 34,
            'loc': {
              'start': {
                'line': 1,
                'column': 19,
                'index': 19
              },
              'end': {
                'line': 1,
                'column': 34,
                'index': 34
              }
            },
            'types': [
              {
                'type': 'TSStringKeyword',
                'start': 19,
                'end': 25,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 19,
                    'index': 19
                  },
                  'end': {
                    'line': 1,
                    'column': 25,
                    'index': 25
                  }
                }
              },
              {
                'type': 'TSNumberKeyword',
                'start': 28,
                'end': 34,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 28,
                    'index': 28
                  },
                  'end': {
                    'line': 1,
                    'column': 34,
                    'index': 34
                  }
                }
              }
            ]
          }
        },
        'specifiers': [],
        'source': null
      }
    ],
    'sourceType': 'module'
  },
  SeriousType: {
    'type': 'Program',
    'start': 0,
    'end': 61,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 61
      }
    },
    'body': [
      {
        'type': 'TSTypeAliasDeclaration',
        'start': 0,
        'end': 18,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 18,
            'index': 18
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 5,
          'end': 9,
          'loc': {
            'start': {
              'line': 1,
              'column': 5,
              'index': 5
            },
            'end': {
              'line': 1,
              'column': 9,
              'index': 9
            }
          },
          'name': 'Name'
        },
        'typeAnnotation': {
          'type': 'TSStringKeyword',
          'start': 12,
          'end': 18,
          'loc': {
            'start': {
              'line': 1,
              'column': 12,
              'index': 12
            },
            'end': {
              'line': 1,
              'column': 18,
              'index': 18
            }
          }
        }
      },
      {
        'type': 'TSTypeAliasDeclaration',
        'start': 19,
        'end': 36,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 19
          },
          'end': {
            'line': 2,
            'column': 17,
            'index': 36
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 24,
          'end': 27,
          'loc': {
            'start': {
              'line': 2,
              'column': 5,
              'index': 24
            },
            'end': {
              'line': 2,
              'column': 8,
              'index': 27
            }
          },
          'name': 'Age'
        },
        'typeAnnotation': {
          'type': 'TSNumberKeyword',
          'start': 30,
          'end': 36,
          'loc': {
            'start': {
              'line': 2,
              'column': 11,
              'index': 30
            },
            'end': {
              'line': 2,
              'column': 17,
              'index': 36
            }
          }
        }
      },
      {
        'type': 'ExportNamedDeclaration',
        'start': 37,
        'end': 61,
        'loc': {
          'start': {
            'line': 3,
            'column': 0,
            'index': 37
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 61
          }
        },
        'exportKind': 'value',
        'declaration': null,
        'specifiers': [
          {
            'type': 'ExportSpecifier',
            'start': 48,
            'end': 52,
            'loc': {
              'start': {
                'line': 4,
                'column': 2,
                'index': 48
              },
              'end': {
                'line': 4,
                'column': 6,
                'index': 52
              }
            },
            'local': {
              'type': 'Identifier',
              'start': 48,
              'end': 52,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 48
                },
                'end': {
                  'line': 4,
                  'column': 6,
                  'index': 52
                }
              },
              'name': 'Name'
            },
            'exportKind': 'value',
            'exported': {
              'type': 'Identifier',
              'start': 48,
              'end': 52,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 48
                },
                'end': {
                  'line': 4,
                  'column': 6,
                  'index': 52
                }
              },
              'name': 'Name'
            }
          },
          {
            'type': 'ExportSpecifier',
            'start': 56,
            'end': 59,
            'loc': {
              'start': {
                'line': 5,
                'column': 2,
                'index': 56
              },
              'end': {
                'line': 5,
                'column': 5,
                'index': 59
              }
            },
            'local': {
              'type': 'Identifier',
              'start': 56,
              'end': 59,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 2,
                  'index': 56
                },
                'end': {
                  'line': 5,
                  'column': 5,
                  'index': 59
                }
              },
              'name': 'Age'
            },
            'exportKind': 'value',
            'exported': {
              'type': 'Identifier',
              'start': 56,
              'end': 59,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 2,
                  'index': 56
                },
                'end': {
                  'line': 5,
                  'column': 5,
                  'index': 59
                }
              },
              'name': 'Age'
            }
          }
        ],
        'source': null
      }
    ],
    'sourceType': 'module'
  },
  ExportTypeAndConst: {
    'type': 'Program',
    'start': 0,
    'end': 52,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 52
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 11,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 11,
            'index': 11
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
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
            }
          }
        ],
        'kind': 'const'
      },
      {
        'type': 'TSTypeAliasDeclaration',
        'start': 12,
        'end': 27,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 12
          },
          'end': {
            'line': 2,
            'column': 15,
            'index': 27
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 17,
          'end': 18,
          'loc': {
            'start': {
              'line': 2,
              'column': 5,
              'index': 17
            },
            'end': {
              'line': 2,
              'column': 6,
              'index': 18
            }
          },
          'name': 'A'
        },
        'typeAnnotation': {
          'type': 'TSNumberKeyword',
          'start': 21,
          'end': 27,
          'loc': {
            'start': {
              'line': 2,
              'column': 9,
              'index': 21
            },
            'end': {
              'line': 2,
              'column': 15,
              'index': 27
            }
          }
        }
      },
      {
        'type': 'ExportNamedDeclaration',
        'start': 28,
        'end': 52,
        'loc': {
          'start': {
            'line': 3,
            'column': 0,
            'index': 28
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 52
          }
        },
        'exportKind': 'value',
        'declaration': null,
        'specifiers': [
          {
            'type': 'ExportSpecifier',
            'start': 39,
            'end': 40,
            'loc': {
              'start': {
                'line': 4,
                'column': 2,
                'index': 39
              },
              'end': {
                'line': 4,
                'column': 3,
                'index': 40
              }
            },
            'local': {
              'type': 'Identifier',
              'start': 39,
              'end': 40,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 39
                },
                'end': {
                  'line': 4,
                  'column': 3,
                  'index': 40
                }
              },
              'name': 'a'
            },
            'exportKind': 'value',
            'exported': {
              'type': 'Identifier',
              'start': 39,
              'end': 40,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 39
                },
                'end': {
                  'line': 4,
                  'column': 3,
                  'index': 40
                }
              },
              'name': 'a'
            }
          },
          {
            'type': 'ExportSpecifier',
            'start': 44,
            'end': 50,
            'loc': {
              'start': {
                'line': 5,
                'column': 2,
                'index': 44
              },
              'end': {
                'line': 5,
                'column': 8,
                'index': 50
              }
            },
            'local': {
              'type': 'Identifier',
              'start': 49,
              'end': 50,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 7,
                  'index': 49
                },
                'end': {
                  'line': 5,
                  'column': 8,
                  'index': 50
                }
              },
              'name': 'A'
            },
            'exported': {
              'type': 'Identifier',
              'start': 49,
              'end': 50,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 7,
                  'index': 49
                },
                'end': {
                  'line': 5,
                  'column': 8,
                  'index': 50
                }
              },
              'name': 'A'
            },
            'exportKind': 'type'
          }
        ],
        'source': null
      }
    ],
    'sourceType': 'module'
  }
}

export default ExportTypeSnapshot
