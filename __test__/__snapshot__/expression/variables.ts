const VariablesTypeSnapshot = {
  Number: {
    'type': 'Program',
    'start': 0,
    'end': 24,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 24,
        'index': 24
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 24,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 24,
            'index': 24
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 24,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 24,
                'index': 24
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 18,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 18,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 18,
                    'index': 18
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
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
              }
            },
            'init': {
              'type': 'Literal',
              'start': 21,
              'end': 24,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                },
                'end': {
                  'line': 1,
                  'column': 24,
                  'index': 24
                }
              },
              'value': 123,
              'raw': '123'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  NumberWithDefinite: {
    'type': 'Program',
    'start': 0,
    'end': 17,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 17,
        'index': 17
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 17,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 17,
            'index': 17
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 17,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 17,
                'index': 17
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 17,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 17,
                  'index': 17
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 9,
                'end': 17,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 9,
                    'index': 9
                  },
                  'end': {
                    'line': 1,
                    'column': 17,
                    'index': 17
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 11,
                  'end': 17,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 11,
                      'index': 11
                    },
                    'end': {
                      'line': 1,
                      'column': 17,
                      'index': 17
                    }
                  }
                }
              }
            },
            'definite': true,
            'init': null
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  String: {
    'type': 'Program',
    'start': 0,
    'end': 28,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 28,
        'index': 28
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 28,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 28,
            'index': 28
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 28,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 28,
                'index': 28
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 18,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 18,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 18,
                    'index': 18
                  }
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
              }
            },
            'init': {
              'type': 'Literal',
              'start': 21,
              'end': 28,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                },
                'end': {
                  'line': 1,
                  'column': 28,
                  'index': 28
                }
              },
              'value': '12355',
              'raw': '\'12355\''
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Undefined: {
    'type': 'Program',
    'start': 0,
    'end': 33,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 33,
        'index': 33
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 33,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 33,
            'index': 33
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 33,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 33,
                'index': 33
              }
            },
            'id': {
              'type': 'Identifier',
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
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 21,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 21,
                    'index': 21
                  }
                },
                'typeAnnotation': {
                  'type': 'TSUndefinedKeyword',
                  'start': 12,
                  'end': 21,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 12,
                      'index': 12
                    },
                    'end': {
                      'line': 1,
                      'column': 21,
                      'index': 21
                    }
                  }
                }
              }
            },
            'init': {
              'type': 'Identifier',
              'start': 24,
              'end': 33,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 24,
                  'index': 24
                },
                'end': {
                  'line': 1,
                  'column': 33,
                  'index': 33
                }
              },
              'name': 'undefined'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Boolean: {
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
        'type': 'VariableDeclaration',
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
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 27,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 27,
                'index': 27
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 19,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 19,
                  'index': 19
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 19,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 19,
                    'index': 19
                  }
                },
                'typeAnnotation': {
                  'type': 'TSBooleanKeyword',
                  'start': 12,
                  'end': 19,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 12,
                      'index': 12
                    },
                    'end': {
                      'line': 1,
                      'column': 19,
                      'index': 19
                    }
                  }
                }
              }
            },
            'init': {
              'type': 'Literal',
              'start': 22,
              'end': 27,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 22,
                  'index': 22
                },
                'end': {
                  'line': 1,
                  'column': 27,
                  'index': 27
                }
              },
              'value': false,
              'raw': 'false'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  BigInt: {
    'type': 'Program',
    'start': 0,
    'end': 37,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 37,
        'index': 37
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 37,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 37,
            'index': 37
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 37,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 37,
                'index': 37
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 18,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 18,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 18,
                    'index': 18
                  }
                },
                'typeAnnotation': {
                  'type': 'TSBigIntKeyword',
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
              }
            },
            'init': {
              'type': 'CallExpression',
              'start': 21,
              'end': 37,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                },
                'end': {
                  'line': 1,
                  'column': 37,
                  'index': 37
                }
              },
              'callee': {
                'type': 'Identifier',
                'start': 21,
                'end': 27,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 21,
                    'index': 21
                  },
                  'end': {
                    'line': 1,
                    'column': 27,
                    'index': 27
                  }
                },
                'name': 'BigInt'
              },
              'arguments': [
                {
                  'type': 'Literal',
                  'start': 28,
                  'end': 36,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 28,
                      'index': 28
                    },
                    'end': {
                      'line': 1,
                      'column': 36,
                      'index': 36
                    }
                  },
                  'value': '123123',
                  'raw': '\'123123\''
                }
              ],
              'optional': false
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Object: {
    'type': 'Program',
    'start': 0,
    'end': 39,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 4,
        'column': 1,
        'index': 39
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 39,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 4,
            'column': 1,
            'index': 39
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 39,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 4,
                'column': 1,
                'index': 39
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 18,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 18,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 18,
                    'index': 18
                  }
                },
                'typeAnnotation': {
                  'type': 'TSObjectKeyword',
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
              }
            },
            'init': {
              'type': 'ObjectExpression',
              'start': 21,
              'end': 39,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                },
                'end': {
                  'line': 4,
                  'column': 1,
                  'index': 39
                }
              },
              'properties': [
                {
                  'type': 'Property',
                  'start': 25,
                  'end': 29,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 25
                    },
                    'end': {
                      'line': 2,
                      'column': 6,
                      'index': 29
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 25,
                    'end': 26,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 25
                      },
                      'end': {
                        'line': 2,
                        'column': 3,
                        'index': 26
                      }
                    },
                    'name': 'a'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 28,
                    'end': 29,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 5,
                        'index': 28
                      },
                      'end': {
                        'line': 2,
                        'column': 6,
                        'index': 29
                      }
                    },
                    'value': 1,
                    'raw': '1'
                  },
                  'kind': 'init'
                },
                {
                  'type': 'Property',
                  'start': 33,
                  'end': 37,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 2,
                      'index': 33
                    },
                    'end': {
                      'line': 3,
                      'column': 6,
                      'index': 37
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 33,
                    'end': 34,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 2,
                        'index': 33
                      },
                      'end': {
                        'line': 3,
                        'column': 3,
                        'index': 34
                      }
                    },
                    'name': 'b'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 36,
                    'end': 37,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 5,
                        'index': 36
                      },
                      'end': {
                        'line': 3,
                        'column': 6,
                        'index': 37
                      }
                    },
                    'value': 2,
                    'raw': '2'
                  },
                  'kind': 'init'
                }
              ]
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Symbol: {
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
        'type': 'VariableDeclaration',
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
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 34,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 34,
                'index': 34
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 18,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 18,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 18,
                    'index': 18
                  }
                },
                'typeAnnotation': {
                  'type': 'TSSymbolKeyword',
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
              }
            },
            'init': {
              'type': 'CallExpression',
              'start': 21,
              'end': 34,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                },
                'end': {
                  'line': 1,
                  'column': 34,
                  'index': 34
                }
              },
              'callee': {
                'type': 'Identifier',
                'start': 21,
                'end': 27,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 21,
                    'index': 21
                  },
                  'end': {
                    'line': 1,
                    'column': 27,
                    'index': 27
                  }
                },
                'name': 'Symbol'
              },
              'arguments': [
                {
                  'type': 'Literal',
                  'start': 28,
                  'end': 33,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 28,
                      'index': 28
                    },
                    'end': {
                      'line': 1,
                      'column': 33,
                      'index': 33
                    }
                  },
                  'value': '123',
                  'raw': '\'123\''
                }
              ],
              'optional': false
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Unknown: {
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
              'end': 19,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 19,
                  'index': 19
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 19,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 19,
                    'index': 19
                  }
                },
                'typeAnnotation': {
                  'type': 'TSUnknownKeyword',
                  'start': 12,
                  'end': 19,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 12,
                      'index': 12
                    },
                    'end': {
                      'line': 1,
                      'column': 19,
                      'index': 19
                    }
                  }
                }
              }
            },
            'init': {
              'type': 'Literal',
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
              },
              'value': 123,
              'raw': '123'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Any: {
    'type': 'Program',
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
              'end': 15,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 15,
                  'index': 15
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 15,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 15,
                    'index': 15
                  }
                },
                'typeAnnotation': {
                  'type': 'TSAnyKeyword',
                  'start': 12,
                  'end': 15,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 12,
                      'index': 12
                    },
                    'end': {
                      'line': 1,
                      'column': 15,
                      'index': 15
                    }
                  }
                }
              }
            },
            'init': {
              'type': 'Literal',
              'start': 18,
              'end': 21,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                },
                'end': {
                  'line': 1,
                  'column': 21,
                  'index': 21
                }
              },
              'value': 123,
              'raw': '123'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Type: {
    'type': 'Program',
    'start': 0,
    'end': 67,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 2,
        'column': 26,
        'index': 67
      }
    },
    'body': [
      {
        'type': 'TSTypeAliasDeclaration',
        'start': 0,
        'end': 40,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 40,
            'index': 40
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 5,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 5,
              'index': 5
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
            }
          },
          'name': 'TestType'
        },
        'typeAnnotation': {
          'type': 'TSUnionType',
          'start': 16,
          'end': 40,
          'loc': {
            'start': {
              'line': 1,
              'column': 16,
              'index': 16
            },
            'end': {
              'line': 1,
              'column': 40,
              'index': 40
            }
          },
          'types': [
            {
              'type': 'TSStringKeyword',
              'start': 16,
              'end': 22,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 16,
                  'index': 16
                },
                'end': {
                  'line': 1,
                  'column': 22,
                  'index': 22
                }
              }
            },
            {
              'type': 'TSNumberKeyword',
              'start': 25,
              'end': 31,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 25,
                  'index': 25
                },
                'end': {
                  'line': 1,
                  'column': 31,
                  'index': 31
                }
              }
            },
            {
              'type': 'TSObjectKeyword',
              'start': 34,
              'end': 40,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 34,
                  'index': 34
                },
                'end': {
                  'line': 1,
                  'column': 40,
                  'index': 40
                }
              }
            }
          ]
        }
      },
      {
        'type': 'VariableDeclaration',
        'start': 41,
        'end': 67,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 41
          },
          'end': {
            'line': 2,
            'column': 26,
            'index': 67
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 47,
            'end': 67,
            'loc': {
              'start': {
                'line': 2,
                'column': 6,
                'index': 47
              },
              'end': {
                'line': 2,
                'column': 26,
                'index': 67
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 47,
              'end': 20,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 6,
                  'index': 47
                },
                'end': {
                  'line': 2,
                  'column': 20,
                  'index': 61
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 51,
                'end': 61,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 10,
                    'index': 51
                  },
                  'end': {
                    'line': 2,
                    'column': 20,
                    'index': 61
                  }
                },
                'typeAnnotation': {
                  'type': 'TSTypeReference',
                  'start': 53,
                  'end': 61,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 12,
                      'index': 53
                    },
                    'end': {
                      'line': 2,
                      'column': 20,
                      'index': 61
                    }
                  },
                  'typeName': {
                    'type': 'Identifier',
                    'start': 53,
                    'end': 61,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 12,
                        'index': 53
                      },
                      'end': {
                        'line': 2,
                        'column': 20,
                        'index': 61
                      }
                    },
                    'name': 'TestType'
                  }
                }
              }
            },
            'init': {
              'type': 'Literal',
              'start': 64,
              'end': 67,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 23,
                  'index': 64
                },
                'end': {
                  'line': 2,
                  'column': 26,
                  'index': 67
                }
              },
              'value': 123,
              'raw': '123'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Interface: {
    'type': 'Program',
    'start': 0,
    'end': 137,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 10,
        'column': 1,
        'index': 137
      }
    },
    'body': [
      {
        'type': 'TSInterfaceDeclaration',
        'start': 0,
        'end': 64,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 5,
            'column': 1,
            'index': 64
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 10,
          'end': 17,
          'loc': {
            'start': {
              'line': 1,
              'column': 10,
              'index': 10
            },
            'end': {
              'line': 1,
              'column': 17,
              'index': 17
            }
          },
          'name': 'Student'
        },
        'body': {
          'type': 'TSInterfaceBody',
          'start': 18,
          'end': 64,
          'loc': {
            'start': {
              'line': 1,
              'column': 18,
              'index': 18
            },
            'end': {
              'line': 5,
              'column': 1,
              'index': 64
            }
          },
          'body': [
            {
              'type': 'TSPropertySignature',
              'start': 21,
              'end': 33,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 21
                },
                'end': {
                  'line': 2,
                  'column': 13,
                  'index': 33
                }
              },
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 21,
                'end': 25,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 1,
                    'index': 21
                  },
                  'end': {
                    'line': 2,
                    'column': 5,
                    'index': 25
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 25,
                'end': 33,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 5,
                    'index': 25
                  },
                  'end': {
                    'line': 2,
                    'column': 13,
                    'index': 33
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 27,
                  'end': 33,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 7,
                      'index': 27
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 33
                    }
                  }
                }
              }
            },
            {
              'type': 'TSPropertySignature',
              'start': 35,
              'end': 46,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 35
                },
                'end': {
                  'line': 3,
                  'column': 12,
                  'index': 46
                }
              },
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 35,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 1,
                    'index': 35
                  },
                  'end': {
                    'line': 3,
                    'column': 4,
                    'index': 38
                  }
                },
                'name': 'age'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 38,
                'end': 46,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 4,
                    'index': 38
                  },
                  'end': {
                    'line': 3,
                    'column': 12,
                    'index': 46
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 40,
                  'end': 46,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 6,
                      'index': 40
                    },
                    'end': {
                      'line': 3,
                      'column': 12,
                      'index': 46
                    }
                  }
                }
              }
            },
            {
              'type': 'TSPropertySignature',
              'start': 48,
              'end': 62,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 48
                },
                'end': {
                  'line': 4,
                  'column': 15,
                  'index': 62
                }
              },
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 48,
                'end': 54,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 1,
                    'index': 48
                  },
                  'end': {
                    'line': 4,
                    'column': 7,
                    'index': 54
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 54,
                'end': 62,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 7,
                    'index': 54
                  },
                  'end': {
                    'line': 4,
                    'column': 15,
                    'index': 62
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 56,
                  'end': 62,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 9,
                      'index': 56
                    },
                    'end': {
                      'line': 4,
                      'column': 15,
                      'index': 62
                    }
                  }
                }
              }
            }
          ]
        }
      },
      {
        'type': 'VariableDeclaration',
        'start': 65,
        'end': 137,
        'loc': {
          'start': {
            'line': 6,
            'column': 0,
            'index': 65
          },
          'end': {
            'line': 10,
            'column': 1,
            'index': 137
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 71,
            'end': 137,
            'loc': {
              'start': {
                'line': 6,
                'column': 6,
                'index': 71
              },
              'end': {
                'line': 10,
                'column': 1,
                'index': 137
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 71,
              'end': 19,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 6,
                  'index': 71
                },
                'end': {
                  'line': 6,
                  'column': 19,
                  'index': 84
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 75,
                'end': 84,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 10,
                    'index': 75
                  },
                  'end': {
                    'line': 6,
                    'column': 19,
                    'index': 84
                  }
                },
                'typeAnnotation': {
                  'type': 'TSTypeReference',
                  'start': 77,
                  'end': 84,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 12,
                      'index': 77
                    },
                    'end': {
                      'line': 6,
                      'column': 19,
                      'index': 84
                    }
                  },
                  'typeName': {
                    'type': 'Identifier',
                    'start': 77,
                    'end': 84,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 12,
                        'index': 77
                      },
                      'end': {
                        'line': 6,
                        'column': 19,
                        'index': 84
                      }
                    },
                    'name': 'Student'
                  }
                }
              }
            },
            'init': {
              'type': 'ObjectExpression',
              'start': 87,
              'end': 137,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 22,
                  'index': 87
                },
                'end': {
                  'line': 10,
                  'column': 1,
                  'index': 137
                }
              },
              'properties': [
                {
                  'type': 'Property',
                  'start': 91,
                  'end': 105,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 2,
                      'index': 91
                    },
                    'end': {
                      'line': 7,
                      'column': 16,
                      'index': 105
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 91,
                    'end': 95,
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 2,
                        'index': 91
                      },
                      'end': {
                        'line': 7,
                        'column': 6,
                        'index': 95
                      }
                    },
                    'name': 'name'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 97,
                    'end': 105,
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 8,
                        'index': 97
                      },
                      'end': {
                        'line': 7,
                        'column': 16,
                        'index': 105
                      }
                    },
                    'value': 'tyreal',
                    'raw': '\'tyreal\''
                  },
                  'kind': 'init'
                },
                {
                  'type': 'Property',
                  'start': 109,
                  'end': 116,
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 2,
                      'index': 109
                    },
                    'end': {
                      'line': 8,
                      'column': 9,
                      'index': 116
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 109,
                    'end': 112,
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 2,
                        'index': 109
                      },
                      'end': {
                        'line': 8,
                        'column': 5,
                        'index': 112
                      }
                    },
                    'name': 'age'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 114,
                    'end': 116,
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 7,
                        'index': 114
                      },
                      'end': {
                        'line': 8,
                        'column': 9,
                        'index': 116
                      }
                    },
                    'value': 22,
                    'raw': '22'
                  },
                  'kind': 'init'
                },
                {
                  'type': 'Property',
                  'start': 120,
                  'end': 134,
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 2,
                      'index': 120
                    },
                    'end': {
                      'line': 9,
                      'column': 16,
                      'index': 134
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 120,
                    'end': 126,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 2,
                        'index': 120
                      },
                      'end': {
                        'line': 9,
                        'column': 8,
                        'index': 126
                      }
                    },
                    'name': 'school'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 128,
                    'end': 134,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 10,
                        'index': 128
                      },
                      'end': {
                        'line': 9,
                        'column': 16,
                        'index': 134
                      }
                    },
                    'value': 'gdut',
                    'raw': '\'gdut\''
                  },
                  'kind': 'init'
                }
              ]
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Union: {
    'type': 'Program',
    'start': 0,
    'end': 33,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 33,
        'index': 33
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 33,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 33,
            'index': 33
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 33,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 1,
                'column': 33,
                'index': 33
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 6,
              'end': 27,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 6,
                  'index': 6
                },
                'end': {
                  'line': 1,
                  'column': 27,
                  'index': 27
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 10,
                'end': 27,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 10,
                    'index': 10
                  },
                  'end': {
                    'line': 1,
                    'column': 27,
                    'index': 27
                  }
                },
                'typeAnnotation': {
                  'type': 'TSUnionType',
                  'start': 12,
                  'end': 27,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 12,
                      'index': 12
                    },
                    'end': {
                      'line': 1,
                      'column': 27,
                      'index': 27
                    }
                  },
                  'types': [
                    {
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
                    },
                    {
                      'type': 'TSNumberKeyword',
                      'start': 21,
                      'end': 27,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 21,
                          'index': 21
                        },
                        'end': {
                          'line': 1,
                          'column': 27,
                          'index': 27
                        }
                      }
                    }
                  ]
                }
              }
            },
            'init': {
              'type': 'Literal',
              'start': 30,
              'end': 33,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 30,
                  'index': 30
                },
                'end': {
                  'line': 1,
                  'column': 33,
                  'index': 33
                }
              },
              'value': 123,
              'raw': '123'
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  LetUnion: {
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
        'line': 1,
        'column': 31,
        'index': 31
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 31,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 31,
            'index': 31
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 31,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 31,
                'index': 31
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 25,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 25,
                  'index': 25
                }
              },
              'name': 'test',
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 8,
                'end': 25,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 8,
                    'index': 8
                  },
                  'end': {
                    'line': 1,
                    'column': 25,
                    'index': 25
                  }
                },
                'typeAnnotation': {
                  'type': 'TSUnionType',
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
                  'types': [
                    {
                      'type': 'TSStringKeyword',
                      'start': 10,
                      'end': 16,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 10,
                          'index': 10
                        },
                        'end': {
                          'line': 1,
                          'column': 16,
                          'index': 16
                        }
                      }
                    },
                    {
                      'type': 'TSNumberKeyword',
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
                    }
                  ]
                }
              }
            },
            'init': {
              'type': 'Literal',
              'start': 28,
              'end': 31,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 28,
                  'index': 28
                },
                'end': {
                  'line': 1,
                  'column': 31,
                  'index': 31
                }
              },
              'value': 123,
              'raw': '123'
            }
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionListArrowFunctionAndVar: {
    'type': 'Program',
    'start': 0,
    'end': 93,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 4,
        'column': 3,
        'index': 93
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 93,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 4,
            'column': 3,
            'index': 93
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 13,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 13,
                'index': 13
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 9,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 9,
                  'index': 9
                }
              },
              'name': 'test1'
            },
            'init': {
              'type': 'Literal',
              'start': 12,
              'end': 13,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 12,
                  'index': 12
                },
                'end': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                }
              },
              'value': 2,
              'raw': '2'
            }
          },
          {
            'type': 'VariableDeclarator',
            'start': 17,
            'end': 93,
            'loc': {
              'start': {
                'line': 2,
                'column': 2,
                'index': 17
              },
              'end': {
                'line': 4,
                'column': 3,
                'index': 93
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 17,
              'end': 21,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 6,
                  'index': 21
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 24,
              'end': 93,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 9,
                  'index': 24
                },
                'end': {
                  'line': 4,
                  'column': 3,
                  'index': 93
                }
              },
              'returnType': {
                'type': 'TSTypeAnnotation',
                'start': 51,
                'end': 57,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 36,
                    'index': 51
                  },
                  'end': {
                    'line': 2,
                    'column': 42,
                    'index': 57
                  }
                },
                'typeAnnotation': {
                  'type': 'TSVoidKeyword',
                  'start': 53,
                  'end': 57,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 38,
                      'index': 53
                    },
                    'end': {
                      'line': 2,
                      'column': 42,
                      'index': 57
                    }
                  }
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': false,
              'params': [
                {
                  'type': 'Identifier',
                  'start': 25,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 10,
                      'index': 25
                    },
                    'end': 37
                  },
                  'name': 'name',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 29,
                    'end': 37,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14,
                        'index': 29
                      },
                      'end': {
                        'line': 2,
                        'column': 22,
                        'index': 37
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSStringKeyword',
                      'start': 31,
                      'end': 37,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 16,
                          'index': 31
                        },
                        'end': {
                          'line': 2,
                          'column': 22,
                          'index': 37
                        }
                      }
                    }
                  }
                },
                {
                  'type': 'Identifier',
                  'start': 39,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 24,
                      'index': 39
                    },
                    'end': 50
                  },
                  'name': 'age',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 42,
                    'end': 50,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 27,
                        'index': 42
                      },
                      'end': {
                        'line': 2,
                        'column': 35,
                        'index': 50
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSNumberKeyword',
                      'start': 44,
                      'end': 50,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 29,
                          'index': 44
                        },
                        'end': {
                          'line': 2,
                          'column': 35,
                          'index': 50
                        }
                      }
                    }
                  }
                }
              ],
              'body': {
                'type': 'BlockStatement',
                'start': 61,
                'end': 93,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 46,
                    'index': 61
                  },
                  'end': {
                    'line': 4,
                    'column': 3,
                    'index': 93
                  }
                },
                'body': [
                  {
                    'type': 'ExpressionStatement',
                    'start': 67,
                    'end': 89,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 4,
                        'index': 67
                      },
                      'end': {
                        'line': 3,
                        'column': 26,
                        'index': 89
                      }
                    },
                    'expression': {
                      'type': 'CallExpression',
                      'start': 67,
                      'end': 89,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 4,
                          'index': 67
                        },
                        'end': {
                          'line': 3,
                          'column': 26,
                          'index': 89
                        }
                      },
                      'callee': {
                        'type': 'MemberExpression',
                        'start': 67,
                        'end': 78,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 4,
                            'index': 67
                          },
                          'end': {
                            'line': 3,
                            'column': 15,
                            'index': 78
                          }
                        },
                        'object': {
                          'type': 'Identifier',
                          'start': 67,
                          'end': 74,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 4,
                              'index': 67
                            },
                            'end': {
                              'line': 3,
                              'column': 11,
                              'index': 74
                            }
                          },
                          'name': 'console'
                        },
                        'property': {
                          'type': 'Identifier',
                          'start': 75,
                          'end': 78,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 12,
                              'index': 75
                            },
                            'end': {
                              'line': 3,
                              'column': 15,
                              'index': 78
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
                          'start': 79,
                          'end': 83,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 16,
                              'index': 79
                            },
                            'end': {
                              'line': 3,
                              'column': 20,
                              'index': 83
                            }
                          },
                          'name': 'name'
                        },
                        {
                          'type': 'Identifier',
                          'start': 85,
                          'end': 88,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 22,
                              'index': 85
                            },
                            'end': {
                              'line': 3,
                              'column': 25,
                              'index': 88
                            }
                          },
                          'name': 'age'
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
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionListArrowFunctionAndParamIsFunction: {
    'type': 'Program',
    'start': 0,
    'end': 84,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 84
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 84,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 84
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 84,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 3,
                'column': 1,
                'index': 84
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 8,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 8,
                  'index': 8
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 11,
              'end': 84,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 11,
                  'index': 11
                },
                'end': {
                  'line': 3,
                  'column': 1,
                  'index': 84
                }
              },
              'returnType': {
                'type': 'TSTypeAnnotation',
                'start': 46,
                'end': 52,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 46,
                    'index': 46
                  },
                  'end': {
                    'line': 1,
                    'column': 52,
                    'index': 52
                  }
                },
                'typeAnnotation': {
                  'type': 'TSVoidKeyword',
                  'start': 48,
                  'end': 52,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 48,
                      'index': 48
                    },
                    'end': {
                      'line': 1,
                      'column': 52,
                      'index': 52
                    }
                  }
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': false,
              'params': [
                {
                  'type': 'Identifier',
                  'start': 12,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 12,
                      'index': 12
                    },
                    'end': 24
                  },
                  'name': 'name',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 16,
                    'end': 24,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 16,
                        'index': 16
                      },
                      'end': {
                        'line': 1,
                        'column': 24,
                        'index': 24
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSStringKeyword',
                      'start': 18,
                      'end': 24,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 18,
                          'index': 18
                        },
                        'end': {
                          'line': 1,
                          'column': 24,
                          'index': 24
                        }
                      }
                    }
                  }
                },
                {
                  'type': 'Identifier',
                  'start': 26,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 26,
                      'index': 26
                    },
                    'end': 45
                  },
                  'name': 'speak',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 31,
                    'end': 45,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 31,
                        'index': 31
                      },
                      'end': {
                        'line': 1,
                        'column': 45,
                        'index': 45
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSParenthesizedType',
                      'start': 33,
                      'end': 45,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 33,
                          'index': 33
                        },
                        'end': {
                          'line': 1,
                          'column': 45,
                          'index': 45
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSFunctionType',
                        'start': 34,
                        'end': 44,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 34,
                            'index': 34
                          },
                          'end': {
                            'line': 1,
                            'column': 44,
                            'index': 44
                          }
                        },
                        'parameters': [],
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 37,
                          'end': 44,
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 37,
                              'index': 37
                            },
                            'end': {
                              'line': 1,
                              'column': 44,
                              'index': 44
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSVoidKeyword',
                            'start': 40,
                            'end': 44,
                            'loc': {
                              'start': {
                                'line': 1,
                                'column': 40,
                                'index': 40
                              },
                              'end': {
                                'line': 1,
                                'column': 44,
                                'index': 44
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ],
              'body': {
                'type': 'BlockStatement',
                'start': 56,
                'end': 84,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 56,
                    'index': 56
                  },
                  'end': {
                    'line': 3,
                    'column': 1,
                    'index': 84
                  }
                },
                'body': [
                  {
                    'type': 'ExpressionStatement',
                    'start': 60,
                    'end': 82,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 60
                      },
                      'end': {
                        'line': 2,
                        'column': 24,
                        'index': 82
                      }
                    },
                    'expression': {
                      'type': 'CallExpression',
                      'start': 60,
                      'end': 82,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 2,
                          'index': 60
                        },
                        'end': {
                          'line': 2,
                          'column': 24,
                          'index': 82
                        }
                      },
                      'callee': {
                        'type': 'MemberExpression',
                        'start': 60,
                        'end': 71,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 2,
                            'index': 60
                          },
                          'end': {
                            'line': 2,
                            'column': 13,
                            'index': 71
                          }
                        },
                        'object': {
                          'type': 'Identifier',
                          'start': 60,
                          'end': 67,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 2,
                              'index': 60
                            },
                            'end': {
                              'line': 2,
                              'column': 9,
                              'index': 67
                            }
                          },
                          'name': 'console'
                        },
                        'property': {
                          'type': 'Identifier',
                          'start': 68,
                          'end': 71,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 10,
                              'index': 68
                            },
                            'end': {
                              'line': 2,
                              'column': 13,
                              'index': 71
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
                          'start': 72,
                          'end': 76,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 14,
                              'index': 72
                            },
                            'end': {
                              'line': 2,
                              'column': 18,
                              'index': 76
                            }
                          },
                          'name': 'name'
                        },
                        {
                          'type': 'Identifier',
                          'start': 78,
                          'end': 81,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 20,
                              'index': 78
                            },
                            'end': {
                              'line': 2,
                              'column': 23,
                              'index': 81
                            }
                          },
                          'name': 'age'
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
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionWithParen: {
    'type': 'Program',
    'start': 0,
    'end': 20,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 20,
        'index': 20
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 20,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 20,
            'index': 20
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 20,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 20,
                'index': 20
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 8,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 8,
                  'index': 8
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'BinaryExpression',
              'start': 12,
              'end': 19,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 12,
                  'index': 12
                },
                'end': {
                  'line': 1,
                  'column': 19,
                  'index': 19
                }
              },
              'left': {
                'type': 'Literal',
                'start': 12,
                'end': 13,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 12,
                    'index': 12
                  },
                  'end': {
                    'line': 1,
                    'column': 13,
                    'index': 13
                  }
                },
                'value': 1,
                'raw': '1'
              },
              'operator': '===',
              'right': {
                'type': 'Literal',
                'start': 18,
                'end': 19,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 18,
                    'index': 18
                  },
                  'end': {
                    'line': 1,
                    'column': 19,
                    'index': 19
                  }
                },
                'value': 2,
                'raw': '2'
              }
            }
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionEqualFunction: {
    'type': 'Program',
    'start': 0,
    'end': 30,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 30,
        'index': 30
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 30,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 30,
            'index': 30
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 30,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 30,
                'index': 30
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 8,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 8,
                  'index': 8
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'FunctionExpression',
              'start': 11,
              'end': 30,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 11,
                  'index': 11
                },
                'end': {
                  'line': 1,
                  'column': 30,
                  'index': 30
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': false,
              'params': [],
              'returnType': {
                'type': 'TSTypeAnnotation',
                'start': 21,
                'end': 27,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 21,
                    'index': 21
                  },
                  'end': {
                    'line': 1,
                    'column': 27,
                    'index': 27
                  }
                },
                'typeAnnotation': {
                  'type': 'TSVoidKeyword',
                  'start': 23,
                  'end': 27,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 23,
                      'index': 23
                    },
                    'end': {
                      'line': 1,
                      'column': 27,
                      'index': 27
                    }
                  }
                }
              },
              'body': {
                'type': 'BlockStatement',
                'start': 28,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 28,
                    'index': 28
                  },
                  'end': {
                    'line': 1,
                    'column': 30,
                    'index': 30
                  }
                },
                'body': []
              }
            }
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionEqualArrowFunction: {
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
            'start': 4,
            'end': 25,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 25,
                'index': 25
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 8,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 8,
                  'index': 8
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 11,
              'end': 25,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 11,
                  'index': 11
                },
                'end': {
                  'line': 1,
                  'column': 25,
                  'index': 25
                }
              },
              'returnType': {
                'type': 'TSTypeAnnotation',
                'start': 13,
                'end': 19,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 13,
                    'index': 13
                  },
                  'end': {
                    'line': 1,
                    'column': 19,
                    'index': 19
                  }
                },
                'typeAnnotation': {
                  'type': 'TSVoidKeyword',
                  'start': 15,
                  'end': 19,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 15,
                      'index': 15
                    },
                    'end': {
                      'line': 1,
                      'column': 19,
                      'index': 19
                    }
                  }
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': false,
              'params': [],
              'body': {
                'type': 'BlockStatement',
                'start': 23,
                'end': 25,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 23,
                    'index': 23
                  },
                  'end': {
                    'line': 1,
                    'column': 25,
                    'index': 25
                  }
                },
                'body': []
              }
            }
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionEqualAsyncFunction: {
    'type': 'Program',
    'start': 0,
    'end': 45,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 45,
        'index': 45
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 45,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 45,
            'index': 45
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 45,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 45,
                'index': 45
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 8,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 8,
                  'index': 8
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'FunctionExpression',
              'start': 11,
              'end': 45,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 11,
                  'index': 11
                },
                'end': {
                  'line': 1,
                  'column': 45,
                  'index': 45
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': true,
              'params': [],
              'returnType': {
                'type': 'TSTypeAnnotation',
                'start': 27,
                'end': 42,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 27,
                    'index': 27
                  },
                  'end': {
                    'line': 1,
                    'column': 42,
                    'index': 42
                  }
                },
                'typeAnnotation': {
                  'type': 'TSTypeReference',
                  'start': 29,
                  'end': 42,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 29,
                      'index': 29
                    },
                    'end': {
                      'line': 1,
                      'column': 42,
                      'index': 42
                    }
                  },
                  'typeName': {
                    'type': 'Identifier',
                    'start': 29,
                    'end': 36,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 29,
                        'index': 29
                      },
                      'end': {
                        'line': 1,
                        'column': 36,
                        'index': 36
                      }
                    },
                    'name': 'Promise'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 36,
                    'end': 42,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 36,
                        'index': 36
                      },
                      'end': {
                        'line': 1,
                        'column': 42,
                        'index': 42
                      }
                    },
                    'params': [
                      {
                        'type': 'TSVoidKeyword',
                        'start': 37,
                        'end': 41,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 37,
                            'index': 37
                          },
                          'end': {
                            'line': 1,
                            'column': 41,
                            'index': 41
                          }
                        }
                      }
                    ]
                  }
                }
              },
              'body': {
                'type': 'BlockStatement',
                'start': 43,
                'end': 45,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 43,
                    'index': 43
                  },
                  'end': {
                    'line': 1,
                    'column': 45,
                    'index': 45
                  }
                },
                'body': []
              }
            }
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  ExpressionEqualAsyncArrowFunction: {
    'type': 'Program',
    'start': 0,
    'end': 40,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 40,
        'index': 40
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 40,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 40,
            'index': 40
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 4,
            'end': 40,
            'loc': {
              'start': {
                'line': 1,
                'column': 4,
                'index': 4
              },
              'end': {
                'line': 1,
                'column': 40,
                'index': 40
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 4,
              'end': 8,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 4,
                  'index': 4
                },
                'end': {
                  'line': 1,
                  'column': 8,
                  'index': 8
                }
              },
              'name': 'test'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 11,
              'end': 40,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 11,
                  'index': 11
                },
                'end': {
                  'line': 1,
                  'column': 40,
                  'index': 40
                }
              },
              'returnType': {
                'type': 'TSTypeAnnotation',
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
                'typeAnnotation': {
                  'type': 'TSTypeReference',
                  'start': 21,
                  'end': 34,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 21,
                      'index': 21
                    },
                    'end': {
                      'line': 1,
                      'column': 34,
                      'index': 34
                    }
                  },
                  'typeName': {
                    'type': 'Identifier',
                    'start': 21,
                    'end': 28,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 21,
                        'index': 21
                      },
                      'end': {
                        'line': 1,
                        'column': 28,
                        'index': 28
                      }
                    },
                    'name': 'Promise'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
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
                    },
                    'params': [
                      {
                        'type': 'TSVoidKeyword',
                        'start': 29,
                        'end': 33,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 29,
                            'index': 29
                          },
                          'end': {
                            'line': 1,
                            'column': 33,
                            'index': 33
                          }
                        }
                      }
                    ]
                  }
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': true,
              'params': [],
              'body': {
                'type': 'BlockStatement',
                'start': 38,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 38,
                    'index': 38
                  },
                  'end': {
                    'line': 1,
                    'column': 40,
                    'index': 40
                  }
                },
                'body': []
              }
            }
          }
        ],
        'kind': 'let'
      }
    ],
    'sourceType': 'module'
  },
  OneAsNumber: {
    type: "Program",
    start: 0,
    end: 22,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 1, column: 22, index: 22 },
    },
    body: [
      {
        type: "VariableDeclaration",
        start: 0,
        end: 22,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 1, column: 22, index: 22 },
        },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 4,
            end: 22,
            loc: {
              start: { line: 1, column: 4, index: 4 },
              end: { line: 1, column: 22, index: 22 },
            },
            id: {
              type: "Identifier",
              start: 4,
              end: 8,
              loc: {
                start: { line: 1, column: 4, index: 4 },
                end: { line: 1, column: 8, index: 8 },
              },
              name: "test",
            },
            init: {
              type: "TSAsExpression",
              start: 11,
              end: 22,
              loc: {
                start: { line: 1, column: 11, index: 11 },
                end: { line: 1, column: 22, index: 22 },
              },
              expression: {
                type: "Literal",
                start: 11,
                end: 12,
                loc: {
                  start: { line: 1, column: 11, index: 11 },
                  end: { line: 1, column: 12, index: 12 },
                },
                value: 1,
                raw: "1",
              },
              typeAnnotation: {
                type: "TSNumberKeyword",
                start: 16,
                end: 22,
                loc: {
                  start: { line: 1, column: 16, index: 16 },
                  end: { line: 1, column: 22, index: 22 },
                },
              },
            },
          },
        ],
        kind: "let",
      },
    ],
    sourceType: "module",
  }  
}

export default VariablesTypeSnapshot
