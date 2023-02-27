const TryTypeSnapshot = {
  Normal: {
    'type': 'Program',
    'start': 0,
    'end': 38,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 13,
        'index': 38
      }
    },
    'body': [
      {
        'type': 'TryStatement',
        'start': 0,
        'end': 38,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 13,
            'index': 38
          }
        },
        'block': {
          'type': 'BlockStatement',
          'start': 4,
          'end': 26,
          'loc': {
            'start': {
              'line': 1,
              'column': 4,
              'index': 4
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 26
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 8,
              'end': 24,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 8
                },
                'end': {
                  'line': 2,
                  'column': 18,
                  'index': 24
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 8,
                'end': 24,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 8
                  },
                  'end': {
                    'line': 2,
                    'column': 18,
                    'index': 24
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 8,
                  'end': 19,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 8
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 19
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 8,
                    'end': 15,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 8
                      },
                      'end': {
                        'line': 2,
                        'column': 9,
                        'index': 15
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 16,
                    'end': 19,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 10,
                        'index': 16
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 19
                      }
                    },
                    'name': 'log'
                  },
                  'computed': false,
                  'optional': false
                },
                'arguments': [
                  {
                    'type': 'Literal',
                    'start': 20,
                    'end': 23,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14,
                        'index': 20
                      },
                      'end': {
                        'line': 2,
                        'column': 17,
                        'index': 23
                      }
                    },
                    'value': 123,
                    'raw': '123'
                  }
                ],
                'optional': false
              }
            }
          ]
        },
        'handler': {
          'type': 'CatchClause',
          'start': 27,
          'end': 38,
          'loc': {
            'start': {
              'line': 3,
              'column': 2,
              'index': 27
            },
            'end': {
              'line': 3,
              'column': 13,
              'index': 38
            }
          },
          'param': {
            'type': 'Identifier',
            'start': 33,
            'end': 34,
            'loc': {
              'start': {
                'line': 3,
                'column': 8,
                'index': 33
              },
              'end': {
                'line': 3,
                'column': 9,
                'index': 34
              }
            },
            'name': 'e'
          },
          'body': {
            'type': 'BlockStatement',
            'start': 36,
            'end': 38,
            'loc': {
              'start': {
                'line': 3,
                'column': 11,
                'index': 36
              },
              'end': {
                'line': 3,
                'column': 13,
                'index': 38
              }
            },
            'body': []
          }
        },
        'finalizer': null
      }
    ],
    'sourceType': 'module'
  },
  WithType: {
    'type': 'Program',
    'start': 0,
    'end': 43,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 18,
        'index': 43
      }
    },
    'body': [
      {
        'type': 'TryStatement',
        'start': 0,
        'end': 43,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 18,
            'index': 43
          }
        },
        'block': {
          'type': 'BlockStatement',
          'start': 4,
          'end': 26,
          'loc': {
            'start': {
              'line': 1,
              'column': 4,
              'index': 4
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 26
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 8,
              'end': 24,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 8
                },
                'end': {
                  'line': 2,
                  'column': 18,
                  'index': 24
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 8,
                'end': 24,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 8
                  },
                  'end': {
                    'line': 2,
                    'column': 18,
                    'index': 24
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 8,
                  'end': 19,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 8
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 19
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 8,
                    'end': 15,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 8
                      },
                      'end': {
                        'line': 2,
                        'column': 9,
                        'index': 15
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 16,
                    'end': 19,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 10,
                        'index': 16
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 19
                      }
                    },
                    'name': 'log'
                  },
                  'computed': false,
                  'optional': false
                },
                'arguments': [
                  {
                    'type': 'Literal',
                    'start': 20,
                    'end': 23,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14,
                        'index': 20
                      },
                      'end': {
                        'line': 2,
                        'column': 17,
                        'index': 23
                      }
                    },
                    'value': 123,
                    'raw': '123'
                  }
                ],
                'optional': false
              }
            }
          ]
        },
        'handler': {
          'type': 'CatchClause',
          'start': 27,
          'end': 43,
          'loc': {
            'start': {
              'line': 3,
              'column': 2,
              'index': 27
            },
            'end': {
              'line': 3,
              'column': 18,
              'index': 43
            }
          },
          'param': {
            'type': 'Identifier',
            'start': 33,
            'end': 14,
            'loc': {
              'start': {
                'line': 3,
                'column': 8,
                'index': 33
              },
              'end': {
                'line': 3,
                'column': 14,
                'index': 39
              }
            },
            'name': 'e',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 34,
              'end': 39,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 9,
                  'index': 34
                },
                'end': {
                  'line': 3,
                  'column': 14,
                  'index': 39
                }
              },
              'typeAnnotation': {
                'type': 'TSAnyKeyword',
                'start': 36,
                'end': 39,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 11,
                    'index': 36
                  },
                  'end': {
                    'line': 3,
                    'column': 14,
                    'index': 39
                  }
                }
              }
            }
          },
          'body': {
            'type': 'BlockStatement',
            'start': 41,
            'end': 43,
            'loc': {
              'start': {
                'line': 3,
                'column': 16,
                'index': 41
              },
              'end': {
                'line': 3,
                'column': 18,
                'index': 43
              }
            },
            'body': []
          }
        },
        'finalizer': null
      }
    ],
    'sourceType': 'module'
  }
}

export default TryTypeSnapshot
