const FunctionTypeSnapshot = {
  NoParameterWithVoid: {
    'type': 'Program',
    'start': 0,
    'end': 44,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 44,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 21,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 21
            }
          },
          'typeAnnotation': {
            'type': 'TSVoidKeyword',
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
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 22,
          'end': 44,
          'loc': {
            'start': {
              'line': 1,
              'column': 22
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 26,
              'end': 42,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 18
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 26,
                'end': 42,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2
                  },
                  'end': {
                    'line': 2,
                    'column': 18
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 26,
                  'end': 37,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2
                    },
                    'end': {
                      'line': 2,
                      'column': 13
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 26,
                    'end': 33,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2
                      },
                      'end': {
                        'line': 2,
                        'column': 9
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 34,
                    'end': 37,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 10
                      },
                      'end': {
                        'line': 2,
                        'column': 13
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
                    'start': 38,
                    'end': 41,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14
                      },
                      'end': {
                        'line': 2,
                        'column': 17
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
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithNever: {
    'type': 'Program',
    'start': 0,
    'end': 51,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 51,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 22,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 24
            }
          },
          'typeAnnotation': {
            'type': 'TSNeverKeyword',
            'start': 17,
            'end': 22,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 24
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 23,
          'end': 51,
          'loc': {
            'start': {
              'line': 1,
              'column': 23
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ThrowStatement',
              'start': 27,
              'end': 49,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 24
                }
              },
              'argument': {
                'type': 'NewExpression',
                'start': 33,
                'end': 49,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 8
                  },
                  'end': {
                    'line': 2,
                    'column': 24
                  }
                },
                'callee': {
                  'type': 'Identifier',
                  'start': 37,
                  'end': 42,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 12
                    },
                    'end': {
                      'line': 2,
                      'column': 17
                    }
                  },
                  'name': 'Error'
                },
                'arguments': [
                  {
                    'type': 'Literal',
                    'start': 43,
                    'end': 48,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 18
                      },
                      'end': {
                        'line': 2,
                        'column': 23
                      }
                    },
                    'value': '123',
                    'raw': '\'123\''
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithString: {
    'type': 'Program',
    'start': 0,
    'end': 42,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 42,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 23,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 25
            }
          },
          'typeAnnotation': {
            'type': 'TSStringKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 25
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 24,
          'end': 42,
          'loc': {
            'start': {
              'line': 1,
              'column': 24
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 28,
              'end': 40,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 14
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 35,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 14
                  }
                },
                'value': '123',
                'raw': '\'123\''
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithNumber: {
    'type': 'Program',
    'start': 0,
    'end': 40,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 40,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 23,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 25
            }
          },
          'typeAnnotation': {
            'type': 'TSNumberKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 25
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 24,
          'end': 40,
          'loc': {
            'start': {
              'line': 1,
              'column': 24
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 28,
              'end': 38,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 12
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 35,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 12
                  }
                },
                'value': 123,
                'raw': '123'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithUndefined: {
    'type': 'Program',
    'start': 0,
    'end': 49,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 49,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 26,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 28
            }
          },
          'typeAnnotation': {
            'type': 'TSUndefinedKeyword',
            'start': 17,
            'end': 26,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 28
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 27,
          'end': 49,
          'loc': {
            'start': {
              'line': 1,
              'column': 27
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 31,
              'end': 47,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 18
                }
              },
              'argument': {
                'type': 'Identifier',
                'start': 38,
                'end': 47,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 18
                  }
                },
                'name': 'undefined'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithBoolean: {
    'type': 'Program',
    'start': 0,
    'end': 42,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 42,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 24,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 26
            }
          },
          'typeAnnotation': {
            'type': 'TSBooleanKeyword',
            'start': 17,
            'end': 24,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 26
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 25,
          'end': 42,
          'loc': {
            'start': {
              'line': 1,
              'column': 25
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 29,
              'end': 40,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 13
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 36,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 13
                  }
                },
                'value': true,
                'raw': 'true'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithBigInt: {
    'type': 'Program',
    'start': 0,
    'end': 53,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 53,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 23,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 25
            }
          },
          'typeAnnotation': {
            'type': 'TSBigIntKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 25
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 24,
          'end': 53,
          'loc': {
            'start': {
              'line': 1,
              'column': 24
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 28,
              'end': 51,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 25
                }
              },
              'argument': {
                'type': 'CallExpression',
                'start': 35,
                'end': 51,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 25
                  }
                },
                'callee': {
                  'type': 'Identifier',
                  'start': 35,
                  'end': 41,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 9
                    },
                    'end': {
                      'line': 2,
                      'column': 15
                    }
                  },
                  'name': 'BigInt'
                },
                'arguments': [
                  {
                    'type': 'Literal',
                    'start': 42,
                    'end': 50,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 16
                      },
                      'end': {
                        'line': 2,
                        'column': 24
                      }
                    },
                    'value': '123123',
                    'raw': '\'123123\''
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
  },
  NoParameterWithObject: {
    'type': 'Program',
    'start': 0,
    'end': 45,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 45,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 23,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 25
            }
          },
          'typeAnnotation': {
            'type': 'TSObjectKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 25
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 24,
          'end': 45,
          'loc': {
            'start': {
              'line': 1,
              'column': 24
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 28,
              'end': 43,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 17
                }
              },
              'argument': {
                'type': 'ObjectExpression',
                'start': 35,
                'end': 43,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 17
                  }
                },
                'properties': [
                  {
                    'type': 'Property',
                    'start': 37,
                    'end': 41,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 11
                      },
                      'end': {
                        'line': 2,
                        'column': 15
                      }
                    },
                    'method': false,
                    'shorthand': false,
                    'computed': false,
                    'key': {
                      'type': 'Identifier',
                      'start': 37,
                      'end': 38,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 11
                        },
                        'end': {
                          'line': 2,
                          'column': 12
                        }
                      },
                      'name': 'a'
                    },
                    'value': {
                      'type': 'Literal',
                      'start': 40,
                      'end': 41,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 14
                        },
                        'end': {
                          'line': 2,
                          'column': 15
                        }
                      },
                      'value': 1,
                      'raw': '1'
                    },
                    'kind': 'init'
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithSymbol: {
    'type': 'Program',
    'start': 0,
    'end': 50,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 50,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 23,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 25
            }
          },
          'typeAnnotation': {
            'type': 'TSSymbolKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 25
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 24,
          'end': 50,
          'loc': {
            'start': {
              'line': 1,
              'column': 24
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 28,
              'end': 48,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 22
                }
              },
              'argument': {
                'type': 'CallExpression',
                'start': 35,
                'end': 48,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 22
                  }
                },
                'callee': {
                  'type': 'Identifier',
                  'start': 35,
                  'end': 41,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 9
                    },
                    'end': {
                      'line': 2,
                      'column': 15
                    }
                  },
                  'name': 'Symbol'
                },
                'arguments': [
                  {
                    'type': 'Literal',
                    'start': 42,
                    'end': 47,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 16
                      },
                      'end': {
                        'line': 2,
                        'column': 21
                      }
                    },
                    'value': '123',
                    'raw': '\'123\''
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
  },
  NoParameterWithUnknown: {
    'type': 'Program',
    'start': 0,
    'end': 41,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 41,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 24,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 26
            }
          },
          'typeAnnotation': {
            'type': 'TSUnknownKeyword',
            'start': 17,
            'end': 24,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 26
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 25,
          'end': 41,
          'loc': {
            'start': {
              'line': 1,
              'column': 25
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 29,
              'end': 39,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 12
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 36,
                'end': 39,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 12
                  }
                },
                'value': 123,
                'raw': '123'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithAny: {
    'type': 'Program',
    'start': 0,
    'end': 37,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 37,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 20,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 22
            }
          },
          'typeAnnotation': {
            'type': 'TSAnyKeyword',
            'start': 17,
            'end': 20,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 22
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 21,
          'end': 37,
          'loc': {
            'start': {
              'line': 1,
              'column': 21
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 25,
              'end': 35,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 12
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 32,
                'end': 35,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 12
                  }
                },
                'value': 123,
                'raw': '123'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithType: {
    'type': 'Program',
    'start': 0,
    'end': 83,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 4,
        'column': 1
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
            'column': 0
          },
          'end': {
            'line': 1,
            'column': 40
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 5,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 5
            },
            'end': {
              'line': 1,
              'column': 13
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
              'column': 16
            },
            'end': {
              'line': 1,
              'column': 40
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
                  'column': 16
                },
                'end': {
                  'line': 1,
                  'column': 22
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
                  'column': 25
                },
                'end': {
                  'line': 1,
                  'column': 31
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
                  'column': 34
                },
                'end': {
                  'line': 1,
                  'column': 40
                }
              }
            }
          ]
        }
      },
      {
        'type': 'FunctionDeclaration',
        'start': 41,
        'end': 83,
        'loc': {
          'start': {
            'line': 2,
            'column': 0
          },
          'end': {
            'line': 4,
            'column': 1
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 50,
          'end': 54,
          'loc': {
            'start': {
              'line': 2,
              'column': 9
            },
            'end': {
              'line': 2,
              'column': 13
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 56,
          'end': 66,
          'loc': {
            'start': {
              'line': 2,
              'column': 15
            },
            'end': {
              'line': 2,
              'column': 27
            }
          },
          'typeAnnotation': {
            'type': 'TSTypeReference',
            'start': 58,
            'end': 66,
            'loc': {
              'start': {
                'line': 2,
                'column': 17
              },
              'end': {
                'line': 2,
                'column': 27
              }
            },
            'typeName': {
              'type': 'Identifier',
              'start': 58,
              'end': 66,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 17
                },
                'end': {
                  'line': 2,
                  'column': 27
                }
              },
              'name': 'TestType'
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 67,
          'end': 83,
          'loc': {
            'start': {
              'line': 2,
              'column': 26
            },
            'end': {
              'line': 4,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 71,
              'end': 81,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 2
                },
                'end': {
                  'line': 3,
                  'column': 12
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 78,
                'end': 81,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 9
                  },
                  'end': {
                    'line': 3,
                    'column': 12
                  }
                },
                'value': 123,
                'raw': '123'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithInterface: {
    'type': 'Program',
    'start': 0,
    'end': 161,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 12,
        'column': 1
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
            'column': 0
          },
          'end': {
            'line': 5,
            'column': 1
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 10,
          'end': 17,
          'loc': {
            'start': {
              'line': 1,
              'column': 10
            },
            'end': {
              'line': 1,
              'column': 17
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
              'column': 18
            },
            'end': {
              'line': 5,
              'column': 1
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
                  'column': 1
                },
                'end': {
                  'line': 2,
                  'column': 13
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
                    'column': 1
                  },
                  'end': {
                    'line': 2,
                    'column': 5
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
                    'column': 5
                  },
                  'end': {
                    'line': 2,
                    'column': 13
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 27,
                  'end': 33,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 7
                    },
                    'end': {
                      'line': 2,
                      'column': 13
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
                  'column': 1
                },
                'end': {
                  'line': 3,
                  'column': 12
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
                    'column': 1
                  },
                  'end': {
                    'line': 3,
                    'column': 4
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
                    'column': 4
                  },
                  'end': {
                    'line': 3,
                    'column': 12
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 40,
                  'end': 46,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 6
                    },
                    'end': {
                      'line': 3,
                      'column': 12
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
                  'column': 1
                },
                'end': {
                  'line': 4,
                  'column': 15
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
                    'column': 1
                  },
                  'end': {
                    'line': 4,
                    'column': 7
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
                    'column': 7
                  },
                  'end': {
                    'line': 4,
                    'column': 15
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 56,
                  'end': 62,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 9
                    },
                    'end': {
                      'line': 4,
                      'column': 15
                    }
                  }
                }
              }
            }
          ]
        }
      },
      {
        'type': 'FunctionDeclaration',
        'start': 65,
        'end': 161,
        'loc': {
          'start': {
            'line': 6,
            'column': 0
          },
          'end': {
            'line': 12,
            'column': 1
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 74,
          'end': 78,
          'loc': {
            'start': {
              'line': 6,
              'column': 9
            },
            'end': {
              'line': 6,
              'column': 13
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 80,
          'end': 89,
          'loc': {
            'start': {
              'line': 6,
              'column': 15
            },
            'end': {
              'line': 6,
              'column': 26
            }
          },
          'typeAnnotation': {
            'type': 'TSTypeReference',
            'start': 82,
            'end': 89,
            'loc': {
              'start': {
                'line': 6,
                'column': 17
              },
              'end': {
                'line': 6,
                'column': 26
              }
            },
            'typeName': {
              'type': 'Identifier',
              'start': 82,
              'end': 89,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 17
                },
                'end': {
                  'line': 6,
                  'column': 26
                }
              },
              'name': 'Student'
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 90,
          'end': 161,
          'loc': {
            'start': {
              'line': 6,
              'column': 25
            },
            'end': {
              'line': 12,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 94,
              'end': 159,
              'loc': {
                'start': {
                  'line': 7,
                  'column': 2
                },
                'end': {
                  'line': 11,
                  'column': 3
                }
              },
              'argument': {
                'type': 'ObjectExpression',
                'start': 101,
                'end': 159,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 9
                  },
                  'end': {
                    'line': 11,
                    'column': 3
                  }
                },
                'properties': [
                  {
                    'type': 'Property',
                    'start': 107,
                    'end': 121,
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 4
                      },
                      'end': {
                        'line': 8,
                        'column': 18
                      }
                    },
                    'method': false,
                    'shorthand': false,
                    'computed': false,
                    'key': {
                      'type': 'Identifier',
                      'start': 107,
                      'end': 111,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 4
                        },
                        'end': {
                          'line': 8,
                          'column': 8
                        }
                      },
                      'name': 'name'
                    },
                    'value': {
                      'type': 'Literal',
                      'start': 113,
                      'end': 121,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 10
                        },
                        'end': {
                          'line': 8,
                          'column': 18
                        }
                      },
                      'value': 'tyreal',
                      'raw': '\'tyreal\''
                    },
                    'kind': 'init'
                  },
                  {
                    'type': 'Property',
                    'start': 127,
                    'end': 134,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 4
                      },
                      'end': {
                        'line': 9,
                        'column': 11
                      }
                    },
                    'method': false,
                    'shorthand': false,
                    'computed': false,
                    'key': {
                      'type': 'Identifier',
                      'start': 127,
                      'end': 130,
                      'loc': {
                        'start': {
                          'line': 9,
                          'column': 4
                        },
                        'end': {
                          'line': 9,
                          'column': 7
                        }
                      },
                      'name': 'age'
                    },
                    'value': {
                      'type': 'Literal',
                      'start': 132,
                      'end': 134,
                      'loc': {
                        'start': {
                          'line': 9,
                          'column': 9
                        },
                        'end': {
                          'line': 9,
                          'column': 11
                        }
                      },
                      'value': 22,
                      'raw': '22'
                    },
                    'kind': 'init'
                  },
                  {
                    'type': 'Property',
                    'start': 140,
                    'end': 154,
                    'loc': {
                      'start': {
                        'line': 10,
                        'column': 4
                      },
                      'end': {
                        'line': 10,
                        'column': 18
                      }
                    },
                    'method': false,
                    'shorthand': false,
                    'computed': false,
                    'key': {
                      'type': 'Identifier',
                      'start': 140,
                      'end': 146,
                      'loc': {
                        'start': {
                          'line': 10,
                          'column': 4
                        },
                        'end': {
                          'line': 10,
                          'column': 10
                        }
                      },
                      'name': 'school'
                    },
                    'value': {
                      'type': 'Literal',
                      'start': 148,
                      'end': 154,
                      'loc': {
                        'start': {
                          'line': 10,
                          'column': 12
                        },
                        'end': {
                          'line': 10,
                          'column': 18
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
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  NoParameterWithUnion: {
    'type': 'Program',
    'start': 0,
    'end': 49,
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 3,
        'column': 1
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 49,
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 3,
            'column': 1
          }
        },
        'id': {
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
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 15,
          'end': 32,
          'loc': {
            'start': {
              'line': 1,
              'column': 15
            },
            'end': {
              'line': 1,
              'column': 32
            }
          },
          'typeAnnotation': {
            'type': 'TSUnionType',
            'start': 17,
            'end': 32,
            'loc': {
              'start': {
                'line': 1,
                'column': 17
              },
              'end': {
                'line': 1,
                'column': 32
              }
            },
            'types': [
              {
                'type': 'TSStringKeyword',
                'start': 17,
                'end': 23,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 17
                  },
                  'end': {
                    'line': 1,
                    'column': 25
                  }
                }
              },
              {
                'type': 'TSNumberKeyword',
                'start': 26,
                'end': 32,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 26
                  },
                  'end': {
                    'line': 1,
                    'column': 32
                  }
                }
              }
            ]
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 33,
          'end': 49,
          'loc': {
            'start': {
              'line': 1,
              'column': 33
            },
            'end': {
              'line': 3,
              'column': 1
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 37,
              'end': 47,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2
                },
                'end': {
                  'line': 2,
                  'column': 12
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 44,
                'end': 47,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9
                  },
                  'end': {
                    'line': 2,
                    'column': 12
                  }
                },
                'value': 123,
                'raw': '123'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  }
}

export default FunctionTypeSnapshot
