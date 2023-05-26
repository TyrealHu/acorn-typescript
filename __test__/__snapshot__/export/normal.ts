const NormalExportSnapshot = {
  ExportDefaultObject: {
    'type': 'Program',
    'start': 0,
    'end': 31,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 31
      }
    },
    'body': [
      {
        'type': 'ExportDefaultDeclaration',
        'start': 0,
        'end': 31,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 31
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'ObjectExpression',
          'start': 15,
          'end': 31,
          'loc': {
            'start': {
              'line': 1,
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 31
            }
          },
          'properties': [
            {
              'type': 'Property',
              'start': 19,
              'end': 29,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 19
                },
                'end': {
                  'line': 2,
                  'column': 12,
                  'index': 29
                }
              },
              'method': false,
              'shorthand': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 19,
                'end': 20,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 19
                  },
                  'end': {
                    'line': 2,
                    'column': 3,
                    'index': 20
                  }
                },
                'name': 'a'
              },
              'value': {
                'type': 'Literal',
                'start': 22,
                'end': 29,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 5,
                    'index': 22
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 29
                  }
                },
                'value': '12345',
                'raw': '\'12345\''
              },
              'kind': 'init'
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  ExportDefaultFunction: {
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
        'line': 3,
        'column': 1,
        'index': 52
      }
    },
    'body': [
      {
        'type': 'ExportDefaultDeclaration',
        'start': 0,
        'end': 52,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 52
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'FunctionDeclaration',
          'start': 15,
          'end': 52,
          'loc': {
            'start': {
              'line': 1,
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 52
            }
          },
          'id': null,
          'expression': false,
          'generator': false,
          'async': false,
          'params': [],
          'body': {
            'type': 'BlockStatement',
            'start': 26,
            'end': 52,
            'loc': {
              'start': {
                'line': 1,
                'column': 26,
                'index': 26
              },
              'end': {
                'line': 3,
                'column': 1,
                'index': 52
              }
            },
            'body': [
              {
                'type': 'ExpressionStatement',
                'start': 30,
                'end': 50,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 30
                  },
                  'end': {
                    'line': 2,
                    'column': 22,
                    'index': 50
                  }
                },
                'expression': {
                  'type': 'CallExpression',
                  'start': 30,
                  'end': 50,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 30
                    },
                    'end': {
                      'line': 2,
                      'column': 22,
                      'index': 50
                    }
                  },
                  'callee': {
                    'type': 'MemberExpression',
                    'start': 30,
                    'end': 41,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 30
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 41
                      }
                    },
                    'object': {
                      'type': 'Identifier',
                      'start': 30,
                      'end': 37,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 2,
                          'index': 30
                        },
                        'end': {
                          'line': 2,
                          'column': 9,
                          'index': 37
                        }
                      },
                      'name': 'console'
                    },
                    'property': {
                      'type': 'Identifier',
                      'start': 38,
                      'end': 41,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 10,
                          'index': 38
                        },
                        'end': {
                          'line': 2,
                          'column': 13,
                          'index': 41
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
                      'start': 42,
                      'end': 49,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 14,
                          'index': 42
                        },
                        'end': {
                          'line': 2,
                          'column': 21,
                          'index': 49
                        }
                      },
                      'value': '12345',
                      'raw': '\'12345\''
                    }
                  ],
                  'optional': false
                }
              }
            ]
          }
        }
      }
    ],
    'sourceType': 'module'
  },
  ExportDefaultFunctionWithName: {
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
        'line': 3,
        'column': 1,
        'index': 57
      }
    },
    'body': [
      {
        'type': 'ExportDefaultDeclaration',
        'start': 0,
        'end': 57,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 57
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'FunctionDeclaration',
          'start': 15,
          'end': 57,
          'loc': {
            'start': {
              'line': 1,
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 57
            }
          },
          'id': {
            'type': 'Identifier',
            'start': 24,
            'end': 28,
            'loc': {
              'start': {
                'line': 1,
                'column': 24,
                'index': 24
              },
              'end': {
                'line': 1,
                'column': 28,
                'index': 28
              }
            },
            'name': 'Test'
          },
          'expression': false,
          'generator': false,
          'async': false,
          'params': [],
          'body': {
            'type': 'BlockStatement',
            'start': 31,
            'end': 57,
            'loc': {
              'start': {
                'line': 1,
                'column': 31,
                'index': 31
              },
              'end': {
                'line': 3,
                'column': 1,
                'index': 57
              }
            },
            'body': [
              {
                'type': 'ExpressionStatement',
                'start': 35,
                'end': 55,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 35
                  },
                  'end': {
                    'line': 2,
                    'column': 22,
                    'index': 55
                  }
                },
                'expression': {
                  'type': 'CallExpression',
                  'start': 35,
                  'end': 55,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 35
                    },
                    'end': {
                      'line': 2,
                      'column': 22,
                      'index': 55
                    }
                  },
                  'callee': {
                    'type': 'MemberExpression',
                    'start': 35,
                    'end': 46,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 35
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 46
                      }
                    },
                    'object': {
                      'type': 'Identifier',
                      'start': 35,
                      'end': 42,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 2,
                          'index': 35
                        },
                        'end': {
                          'line': 2,
                          'column': 9,
                          'index': 42
                        }
                      },
                      'name': 'console'
                    },
                    'property': {
                      'type': 'Identifier',
                      'start': 43,
                      'end': 46,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 10,
                          'index': 43
                        },
                        'end': {
                          'line': 2,
                          'column': 13,
                          'index': 46
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
                      'start': 47,
                      'end': 54,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 14,
                          'index': 47
                        },
                        'end': {
                          'line': 2,
                          'column': 21,
                          'index': 54
                        }
                      },
                      'value': '12345',
                      'raw': '\'12345\''
                    }
                  ],
                  'optional': false
                }
              }
            ]
          }
        }
      }
    ],
    'sourceType': 'module'
  },
  ExportDefaultArrowFunction: {
    'type': 'Program',
    'start': 0,
    'end': 47,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 47
      }
    },
    'body': [
      {
        'type': 'ExportDefaultDeclaration',
        'start': 0,
        'end': 47,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 47
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'ArrowFunctionExpression',
          'start': 15,
          'end': 47,
          'loc': {
            'start': {
              'line': 1,
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 47
            }
          },
          'id': null,
          'expression': false,
          'generator': false,
          'async': false,
          'params': [],
          'body': {
            'type': 'BlockStatement',
            'start': 21,
            'end': 47,
            'loc': {
              'start': {
                'line': 1,
                'column': 21,
                'index': 21
              },
              'end': {
                'line': 3,
                'column': 1,
                'index': 47
              }
            },
            'body': [
              {
                'type': 'ExpressionStatement',
                'start': 25,
                'end': 45,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 25
                  },
                  'end': {
                    'line': 2,
                    'column': 22,
                    'index': 45
                  }
                },
                'expression': {
                  'type': 'CallExpression',
                  'start': 25,
                  'end': 45,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 25
                    },
                    'end': {
                      'line': 2,
                      'column': 22,
                      'index': 45
                    }
                  },
                  'callee': {
                    'type': 'MemberExpression',
                    'start': 25,
                    'end': 36,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 25
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 36
                      }
                    },
                    'object': {
                      'type': 'Identifier',
                      'start': 25,
                      'end': 32,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 2,
                          'index': 25
                        },
                        'end': {
                          'line': 2,
                          'column': 9,
                          'index': 32
                        }
                      },
                      'name': 'console'
                    },
                    'property': {
                      'type': 'Identifier',
                      'start': 33,
                      'end': 36,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 10,
                          'index': 33
                        },
                        'end': {
                          'line': 2,
                          'column': 13,
                          'index': 36
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
                      'start': 37,
                      'end': 44,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 14,
                          'index': 37
                        },
                        'end': {
                          'line': 2,
                          'column': 21,
                          'index': 44
                        }
                      },
                      'value': '12345',
                      'raw': '\'12345\''
                    }
                  ],
                  'optional': false
                }
              }
            ]
          }
        }
      }
    ],
    'sourceType': 'module'
  },
  ExportDefaultAnonymousClass: {
    type: "Program",
    start: 0,
    end: 23,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 1, column: 23, index: 23 },
    },
    body: [
      {
        type: "ExportDefaultDeclaration",
        start: 0,
        end: 23,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 1, column: 23, index: 23 },
        },
        exportKind: "value",
        declaration: {
          type: "ClassDeclaration",
          start: 15,
          end: 23,
          loc: {
            start: { line: 1, column: 15, index: 15 },
            end: { line: 1, column: 23, index: 23 },
          },
          id: null,
          superClass: null,
          body: {
            type: "ClassBody",
            start: 21,
            end: 23,
            loc: {
              start: { line: 1, column: 21, index: 21 },
              end: { line: 1, column: 23, index: 23 },
            },
            body: [],
          },
        },
      },
    ],
    sourceType: "module",
  },
  ExportConst: {
    'type': 'Program',
    'start': 0,
    'end': 27,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 27,
        'index': 27
      }
    },
    'body': [
      {
        'type': 'ExportNamedDeclaration',
        'start': 0,
        'end': 27,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 27,
            'index': 27
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'VariableDeclaration',
          'start': 7,
          'end': 27,
          'loc': {
            'start': {
              'line': 1,
              'column': 7,
              'index': 7
            },
            'end': {
              'line': 1,
              'column': 27,
              'index': 27
            }
          },
          'declarations': [
            {
              'type': 'VariableDeclarator',
              'start': 13,
              'end': 27,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                },
                'end': {
                  'line': 1,
                  'column': 27,
                  'index': 27
                }
              },
              'id': {
                'type': 'Identifier',
                'start': 13,
                'end': 17,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 13,
                    'index': 13
                  },
                  'end': {
                    'line': 1,
                    'column': 17,
                    'index': 17
                  }
                },
                'name': 'test'
              },
              'init': {
                'type': 'Literal',
                'start': 20,
                'end': 27,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 20,
                    'index': 20
                  },
                  'end': {
                    'line': 1,
                    'column': 27,
                    'index': 27
                  }
                },
                'value': '12345',
                'raw': '\'12345\''
              }
            }
          ],
          'kind': 'const'
        },
        'specifiers': [],
        'source': null
      }
    ],
    'sourceType': 'module'
  },
  Export: {
    'type': 'Program',
    'start': 0,
    'end': 59,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 59
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 21,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 21,
            'index': 21
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 21,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 21,
                'index': 21
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 10,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 10,
                  'index': 10
                }
              },
              'name': 'Name'
            },
            'init': {
              'type': 'Literal',
              'start': 13,
              'end': 21,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                },
                'end': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                }
              },
              'value': 'tyreal',
              'raw': '\'tyreal\''
            }
          }
        ],
        'kind': 'const'
      },
      {
        'type': 'VariableDeclaration',
        'start': 22,
        'end': 34,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 22
          },
          'end': {
            'line': 2,
            'column': 12,
            'index': 34
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 26,
            'end': 34,
            'loc': {
              'start': {
                'line': 2,
                'column': 4,
                'index': 26
              },
              'end': {
                'line': 2,
                'column': 12,
                'index': 34
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 26,
              'end': 29,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 4,
                  'index': 26
                },
                'end': {
                  'line': 2,
                  'column': 7,
                  'index': 29
                }
              },
              'name': 'Age'
            },
            'init': {
              'type': 'Literal',
              'start': 32,
              'end': 34,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 10,
                  'index': 32
                },
                'end': {
                  'line': 2,
                  'column': 12,
                  'index': 34
                }
              },
              'value': 22,
              'raw': '22'
            }
          }
        ],
        'kind': 'let'
      },
      {
        'type': 'ExportNamedDeclaration',
        'start': 35,
        'end': 59,
        'loc': {
          'start': {
            'line': 3,
            'column': 0,
            'index': 35
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 59
          }
        },
        'exportKind': 'value',
        'declaration': null,
        'specifiers': [
          {
            'type': 'ExportSpecifier',
            'start': 46,
            'end': 50,
            'loc': {
              'start': {
                'line': 4,
                'column': 2,
                'index': 46
              },
              'end': {
                'line': 4,
                'column': 6,
                'index': 50
              }
            },
            'local': {
              'type': 'Identifier',
              'start': 46,
              'end': 50,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 46
                },
                'end': {
                  'line': 4,
                  'column': 6,
                  'index': 50
                }
              },
              'name': 'Name'
            },
            'exportKind': 'value',
            'exported': {
              'type': 'Identifier',
              'start': 46,
              'end': 50,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 46
                },
                'end': {
                  'line': 4,
                  'column': 6,
                  'index': 50
                }
              },
              'name': 'Name'
            }
          },
          {
            'type': 'ExportSpecifier',
            'start': 54,
            'end': 57,
            'loc': {
              'start': {
                'line': 5,
                'column': 2,
                'index': 54
              },
              'end': {
                'line': 5,
                'column': 5,
                'index': 57
              }
            },
            'local': {
              'type': 'Identifier',
              'start': 54,
              'end': 57,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 2,
                  'index': 54
                },
                'end': {
                  'line': 5,
                  'column': 5,
                  'index': 57
                }
              },
              'name': 'Age'
            },
            'exportKind': 'value',
            'exported': {
              'type': 'Identifier',
              'start': 54,
              'end': 57,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 2,
                  'index': 54
                },
                'end': {
                  'line': 5,
                  'column': 5,
                  'index': 57
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
  }
}

export default NormalExportSnapshot
