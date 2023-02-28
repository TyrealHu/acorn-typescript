const FunctionTypeSnapshot = {
  NoParameterWithVoid: {
    'type': 'Program',
    'start': 0,
    'end': 44,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 44
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 44
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 21,
              'index': 21
            }
          },
          'typeAnnotation': {
            'type': 'TSVoidKeyword',
            'start': 17,
            'end': 21,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 21,
                'index': 21
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
              'column': 22,
              'index': 22
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 44
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
                  'column': 2,
                  'index': 26
                },
                'end': {
                  'line': 2,
                  'column': 18,
                  'index': 42
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 26,
                'end': 42,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 26
                  },
                  'end': {
                    'line': 2,
                    'column': 18,
                    'index': 42
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 26,
                  'end': 37,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 26
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 37
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 26,
                    'end': 33,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 26
                      },
                      'end': {
                        'line': 2,
                        'column': 9,
                        'index': 33
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
                        'column': 10,
                        'index': 34
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 37
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
                        'column': 14,
                        'index': 38
                      },
                      'end': {
                        'line': 2,
                        'column': 17,
                        'index': 41
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 51
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 51
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 22,
              'index': 22
            }
          },
          'typeAnnotation': {
            'type': 'TSNeverKeyword',
            'start': 17,
            'end': 22,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 22,
                'index': 22
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
              'column': 23,
              'index': 23
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 51
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
                  'column': 2,
                  'index': 27
                },
                'end': {
                  'line': 2,
                  'column': 24,
                  'index': 49
                }
              },
              'argument': {
                'type': 'NewExpression',
                'start': 33,
                'end': 49,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 8,
                    'index': 33
                  },
                  'end': {
                    'line': 2,
                    'column': 24,
                    'index': 49
                  }
                },
                'callee': {
                  'type': 'Identifier',
                  'start': 37,
                  'end': 42,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 12,
                      'index': 37
                    },
                    'end': {
                      'line': 2,
                      'column': 17,
                      'index': 42
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
                        'column': 18,
                        'index': 43
                      },
                      'end': {
                        'line': 2,
                        'column': 23,
                        'index': 48
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 42
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 42
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 23,
              'index': 23
            }
          },
          'typeAnnotation': {
            'type': 'TSStringKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 23,
                'index': 23
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
              'column': 24,
              'index': 24
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 42
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
                  'column': 2,
                  'index': 28
                },
                'end': {
                  'line': 2,
                  'column': 14,
                  'index': 40
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 35,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 35
                  },
                  'end': {
                    'line': 2,
                    'column': 14,
                    'index': 40
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 40
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 40
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 23,
              'index': 23
            }
          },
          'typeAnnotation': {
            'type': 'TSNumberKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 23,
                'index': 23
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
              'column': 24,
              'index': 24
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 40
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
                  'column': 2,
                  'index': 28
                },
                'end': {
                  'line': 2,
                  'column': 12,
                  'index': 38
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 35,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 35
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 38
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 49
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 49
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 26,
              'index': 26
            }
          },
          'typeAnnotation': {
            'type': 'TSUndefinedKeyword',
            'start': 17,
            'end': 26,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 26,
                'index': 26
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
              'column': 27,
              'index': 27
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 49
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
                  'column': 2,
                  'index': 31
                },
                'end': {
                  'line': 2,
                  'column': 18,
                  'index': 47
                }
              },
              'argument': {
                'type': 'Identifier',
                'start': 38,
                'end': 47,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 38
                  },
                  'end': {
                    'line': 2,
                    'column': 18,
                    'index': 47
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 42
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 42
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 24,
              'index': 24
            }
          },
          'typeAnnotation': {
            'type': 'TSBooleanKeyword',
            'start': 17,
            'end': 24,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 24,
                'index': 24
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
              'column': 25,
              'index': 25
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 42
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
                  'column': 2,
                  'index': 29
                },
                'end': {
                  'line': 2,
                  'column': 13,
                  'index': 40
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 36,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 36
                  },
                  'end': {
                    'line': 2,
                    'column': 13,
                    'index': 40
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 53
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 53
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 23,
              'index': 23
            }
          },
          'typeAnnotation': {
            'type': 'TSBigIntKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 23,
                'index': 23
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
              'column': 24,
              'index': 24
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 53
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
                  'column': 2,
                  'index': 28
                },
                'end': {
                  'line': 2,
                  'column': 25,
                  'index': 51
                }
              },
              'argument': {
                'type': 'CallExpression',
                'start': 35,
                'end': 51,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 35
                  },
                  'end': {
                    'line': 2,
                    'column': 25,
                    'index': 51
                  }
                },
                'callee': {
                  'type': 'Identifier',
                  'start': 35,
                  'end': 41,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 9,
                      'index': 35
                    },
                    'end': {
                      'line': 2,
                      'column': 15,
                      'index': 41
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
                        'column': 16,
                        'index': 42
                      },
                      'end': {
                        'line': 2,
                        'column': 24,
                        'index': 50
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 45
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 45
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 23,
              'index': 23
            }
          },
          'typeAnnotation': {
            'type': 'TSObjectKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 23,
                'index': 23
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
              'column': 24,
              'index': 24
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 45
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
                  'column': 2,
                  'index': 28
                },
                'end': {
                  'line': 2,
                  'column': 17,
                  'index': 43
                }
              },
              'argument': {
                'type': 'ObjectExpression',
                'start': 35,
                'end': 43,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 35
                  },
                  'end': {
                    'line': 2,
                    'column': 17,
                    'index': 43
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
                        'column': 11,
                        'index': 37
                      },
                      'end': {
                        'line': 2,
                        'column': 15,
                        'index': 41
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
                          'column': 11,
                          'index': 37
                        },
                        'end': {
                          'line': 2,
                          'column': 12,
                          'index': 38
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
                          'column': 14,
                          'index': 40
                        },
                        'end': {
                          'line': 2,
                          'column': 15,
                          'index': 41
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 50
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 50
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 23,
              'index': 23
            }
          },
          'typeAnnotation': {
            'type': 'TSSymbolKeyword',
            'start': 17,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 23,
                'index': 23
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
              'column': 24,
              'index': 24
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 50
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
                  'column': 2,
                  'index': 28
                },
                'end': {
                  'line': 2,
                  'column': 22,
                  'index': 48
                }
              },
              'argument': {
                'type': 'CallExpression',
                'start': 35,
                'end': 48,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 35
                  },
                  'end': {
                    'line': 2,
                    'column': 22,
                    'index': 48
                  }
                },
                'callee': {
                  'type': 'Identifier',
                  'start': 35,
                  'end': 41,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 9,
                      'index': 35
                    },
                    'end': {
                      'line': 2,
                      'column': 15,
                      'index': 41
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
                        'column': 16,
                        'index': 42
                      },
                      'end': {
                        'line': 2,
                        'column': 21,
                        'index': 47
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 41
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 41
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 24,
              'index': 24
            }
          },
          'typeAnnotation': {
            'type': 'TSUnknownKeyword',
            'start': 17,
            'end': 24,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 24,
                'index': 24
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
              'column': 25,
              'index': 25
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 41
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
                  'column': 2,
                  'index': 29
                },
                'end': {
                  'line': 2,
                  'column': 12,
                  'index': 39
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 36,
                'end': 39,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 36
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 39
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 37
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 37
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 20,
              'index': 20
            }
          },
          'typeAnnotation': {
            'type': 'TSAnyKeyword',
            'start': 17,
            'end': 20,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 20,
                'index': 20
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
              'column': 21,
              'index': 21
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 37
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
                  'column': 2,
                  'index': 25
                },
                'end': {
                  'line': 2,
                  'column': 12,
                  'index': 35
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 32,
                'end': 35,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 32
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 35
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 4,
        'column': 1,
        'index': 83
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
        'type': 'FunctionDeclaration',
        'start': 41,
        'end': 83,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 41
          },
          'end': {
            'line': 4,
            'column': 1,
            'index': 83
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 50,
          'end': 54,
          'loc': {
            'start': {
              'line': 2,
              'column': 9,
              'index': 50
            },
            'end': {
              'line': 2,
              'column': 13,
              'index': 54
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
              'column': 15,
              'index': 56
            },
            'end': {
              'line': 2,
              'column': 25,
              'index': 66
            }
          },
          'typeAnnotation': {
            'type': 'TSTypeReference',
            'start': 58,
            'end': 66,
            'loc': {
              'start': {
                'line': 2,
                'column': 17,
                'index': 58
              },
              'end': {
                'line': 2,
                'column': 25,
                'index': 66
              }
            },
            'typeName': {
              'type': 'Identifier',
              'start': 58,
              'end': 66,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 17,
                  'index': 58
                },
                'end': {
                  'line': 2,
                  'column': 25,
                  'index': 66
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
              'column': 26,
              'index': 67
            },
            'end': {
              'line': 4,
              'column': 1,
              'index': 83
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
                  'column': 2,
                  'index': 71
                },
                'end': {
                  'line': 3,
                  'column': 12,
                  'index': 81
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 78,
                'end': 81,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 9,
                    'index': 78
                  },
                  'end': {
                    'line': 3,
                    'column': 12,
                    'index': 81
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 12,
        'column': 1,
        'index': 161
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
        'type': 'FunctionDeclaration',
        'start': 65,
        'end': 161,
        'loc': {
          'start': {
            'line': 6,
            'column': 0,
            'index': 65
          },
          'end': {
            'line': 12,
            'column': 1,
            'index': 161
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 74,
          'end': 78,
          'loc': {
            'start': {
              'line': 6,
              'column': 9,
              'index': 74
            },
            'end': {
              'line': 6,
              'column': 13,
              'index': 78
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
              'column': 15,
              'index': 80
            },
            'end': {
              'line': 6,
              'column': 24,
              'index': 89
            }
          },
          'typeAnnotation': {
            'type': 'TSTypeReference',
            'start': 82,
            'end': 89,
            'loc': {
              'start': {
                'line': 6,
                'column': 17,
                'index': 82
              },
              'end': {
                'line': 6,
                'column': 24,
                'index': 89
              }
            },
            'typeName': {
              'type': 'Identifier',
              'start': 82,
              'end': 89,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 17,
                  'index': 82
                },
                'end': {
                  'line': 6,
                  'column': 24,
                  'index': 89
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
              'column': 25,
              'index': 90
            },
            'end': {
              'line': 12,
              'column': 1,
              'index': 161
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
                  'column': 2,
                  'index': 94
                },
                'end': {
                  'line': 11,
                  'column': 3,
                  'index': 159
                }
              },
              'argument': {
                'type': 'ObjectExpression',
                'start': 101,
                'end': 159,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 9,
                    'index': 101
                  },
                  'end': {
                    'line': 11,
                    'column': 3,
                    'index': 159
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
                        'column': 4,
                        'index': 107
                      },
                      'end': {
                        'line': 8,
                        'column': 18,
                        'index': 121
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
                          'column': 4,
                          'index': 107
                        },
                        'end': {
                          'line': 8,
                          'column': 8,
                          'index': 111
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
                          'column': 10,
                          'index': 113
                        },
                        'end': {
                          'line': 8,
                          'column': 18,
                          'index': 121
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
                        'column': 4,
                        'index': 127
                      },
                      'end': {
                        'line': 9,
                        'column': 11,
                        'index': 134
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
                          'column': 4,
                          'index': 127
                        },
                        'end': {
                          'line': 9,
                          'column': 7,
                          'index': 130
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
                          'column': 9,
                          'index': 132
                        },
                        'end': {
                          'line': 9,
                          'column': 11,
                          'index': 134
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
                        'column': 4,
                        'index': 140
                      },
                      'end': {
                        'line': 10,
                        'column': 18,
                        'index': 154
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
                          'column': 4,
                          'index': 140
                        },
                        'end': {
                          'line': 10,
                          'column': 10,
                          'index': 146
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
                          'column': 12,
                          'index': 148
                        },
                        'end': {
                          'line': 10,
                          'column': 18,
                          'index': 154
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
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 49
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
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 49
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
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
              'column': 15,
              'index': 15
            },
            'end': {
              'line': 1,
              'column': 32,
              'index': 32
            }
          },
          'typeAnnotation': {
            'type': 'TSUnionType',
            'start': 17,
            'end': 32,
            'loc': {
              'start': {
                'line': 1,
                'column': 17,
                'index': 17
              },
              'end': {
                'line': 1,
                'column': 32,
                'index': 32
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
                    'column': 17,
                    'index': 17
                  },
                  'end': {
                    'line': 1,
                    'column': 23,
                    'index': 23
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
                    'column': 26,
                    'index': 26
                  },
                  'end': {
                    'line': 1,
                    'column': 32,
                    'index': 32
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
              'column': 33,
              'index': 33
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 49
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
                  'column': 2,
                  'index': 37
                },
                'end': {
                  'line': 2,
                  'column': 12,
                  'index': 47
                }
              },
              'argument': {
                'type': 'Literal',
                'start': 44,
                'end': 47,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 44
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 47
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
  OneParameterWithVoid: {
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
        'type': 'FunctionDeclaration',
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
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 14,
            'end': 26,
            'loc': {
              'start': {
                'line': 1,
                'column': 14,
                'index': 14
              },
              'end': {
                'line': 1,
                'column': 26,
                'index': 26
              }
            },
            'name': 'name',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 18,
              'end': 26,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 18,
                  'index': 18
                },
                'end': {
                  'line': 1,
                  'column': 26,
                  'index': 26
                }
              },
              'typeAnnotation': {
                'type': 'TSStringKeyword',
                'start': 20,
                'end': 26,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 20,
                    'index': 20
                  },
                  'end': {
                    'line': 1,
                    'column': 26,
                    'index': 26
                  }
                }
              }
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 27,
          'end': 33,
          'loc': {
            'start': {
              'line': 1,
              'column': 27,
              'index': 27
            },
            'end': {
              'line': 1,
              'column': 33,
              'index': 33
            }
          },
          'typeAnnotation': {
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
        },
        'body': {
          'type': 'BlockStatement',
          'start': 34,
          'end': 57,
          'loc': {
            'start': {
              'line': 1,
              'column': 34,
              'index': 34
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
              'start': 38,
              'end': 55,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 38
                },
                'end': {
                  'line': 2,
                  'column': 19,
                  'index': 55
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 38,
                'end': 55,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 38
                  },
                  'end': {
                    'line': 2,
                    'column': 19,
                    'index': 55
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 38,
                  'end': 49,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 38
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 49
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 38,
                    'end': 45,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 38
                      },
                      'end': {
                        'line': 2,
                        'column': 9,
                        'index': 45
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 46,
                    'end': 49,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 10,
                        'index': 46
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 49
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
                    'start': 50,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14,
                        'index': 50
                      },
                      'end': {
                        'line': 2,
                        'column': 18,
                        'index': 54
                      }
                    },
                    'name': 'name'
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
  OneOptionalParameterWithVoid: {
    'type': 'Program',
    'start': 0,
    'end': 58,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 58
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 58,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 58
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 14,
            'end': 27,
            'loc': {
              'start': {
                'line': 1,
                'column': 14,
                'index': 14
              },
              'end': {
                'line': 1,
                'column': 27,
                'index': 27
              }
            },
            'name': 'name',
            'optional': true,
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 19,
              'end': 27,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 19,
                  'index': 19
                },
                'end': {
                  'line': 1,
                  'column': 27,
                  'index': 27
                }
              },
              'typeAnnotation': {
                'type': 'TSStringKeyword',
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
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
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
          'typeAnnotation': {
            'type': 'TSVoidKeyword',
            'start': 30,
            'end': 34,
            'loc': {
              'start': {
                'line': 1,
                'column': 30,
                'index': 30
              },
              'end': {
                'line': 1,
                'column': 34,
                'index': 34
              }
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 35,
          'end': 58,
          'loc': {
            'start': {
              'line': 1,
              'column': 35,
              'index': 35
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 58
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 39,
              'end': 56,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 39
                },
                'end': {
                  'line': 2,
                  'column': 19,
                  'index': 56
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 39,
                'end': 56,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 39
                  },
                  'end': {
                    'line': 2,
                    'column': 19,
                    'index': 56
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 39,
                  'end': 50,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 39
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 50
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 39,
                    'end': 46,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 39
                      },
                      'end': {
                        'line': 2,
                        'column': 9,
                        'index': 46
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 47,
                    'end': 50,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 10,
                        'index': 47
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 50
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
                    'start': 51,
                    'end': 55,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14,
                        'index': 51
                      },
                      'end': {
                        'line': 2,
                        'column': 18,
                        'index': 55
                      }
                    },
                    'name': 'name'
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
  ComplexFunction: {
    'type': 'Program',
    'start': 0,
    'end': 165,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 8,
        'column': 1,
        'index': 165
      }
    },
    'body': [
      {
        'type': 'TSInterfaceDeclaration',
        'start': 0,
        'end': 54,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 4,
            'column': 1,
            'index': 54
          }
        },
        'id': {
          'type': 'Identifier',
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
          },
          'name': 'Family'
        },
        'body': {
          'type': 'TSInterfaceBody',
          'start': 17,
          'end': 54,
          'loc': {
            'start': {
              'line': 1,
              'column': 17,
              'index': 17
            },
            'end': {
              'line': 4,
              'column': 1,
              'index': 54
            }
          },
          'body': [
            {
              'type': 'TSPropertySignature',
              'start': 21,
              'end': 35,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 21
                },
                'end': {
                  'line': 2,
                  'column': 16,
                  'index': 35
                }
              },
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 21,
                'end': 27,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 21
                  },
                  'end': {
                    'line': 2,
                    'column': 8,
                    'index': 27
                  }
                },
                'name': 'father'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 27,
                'end': 35,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 8,
                    'index': 27
                  },
                  'end': {
                    'line': 2,
                    'column': 16,
                    'index': 35
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 29,
                  'end': 35,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 10,
                      'index': 29
                    },
                    'end': {
                      'line': 2,
                      'column': 16,
                      'index': 35
                    }
                  }
                }
              }
            },
            {
              'type': 'TSPropertySignature',
              'start': 38,
              'end': 52,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 2,
                  'index': 38
                },
                'end': {
                  'line': 3,
                  'column': 16,
                  'index': 52
                }
              },
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 38,
                'end': 44,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 2,
                    'index': 38
                  },
                  'end': {
                    'line': 3,
                    'column': 8,
                    'index': 44
                  }
                },
                'name': 'mother'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 44,
                'end': 52,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 8,
                    'index': 44
                  },
                  'end': {
                    'line': 3,
                    'column': 16,
                    'index': 52
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 46,
                  'end': 52,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 10,
                      'index': 46
                    },
                    'end': {
                      'line': 3,
                      'column': 16,
                      'index': 52
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
        'start': 55,
        'end': 165,
        'loc': {
          'start': {
            'line': 5,
            'column': 0,
            'index': 55
          },
          'end': {
            'line': 8,
            'column': 1,
            'index': 165
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 64,
          'end': 68,
          'loc': {
            'start': {
              'line': 5,
              'column': 9,
              'index': 64
            },
            'end': {
              'line': 5,
              'column': 13,
              'index': 68
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 69,
            'end': 26,
            'loc': {
              'start': {
                'line': 5,
                'column': 14,
                'index': 69
              },
              'end': {
                'line': 5,
                'column': 26,
                'index': 81
              }
            },
            'name': 'name',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 73,
              'end': 81,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 18,
                  'index': 73
                },
                'end': {
                  'line': 5,
                  'column': 26,
                  'index': 81
                }
              },
              'typeAnnotation': {
                'type': 'TSStringKeyword',
                'start': 75,
                'end': 81,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 20,
                    'index': 75
                  },
                  'end': {
                    'line': 5,
                    'column': 26,
                    'index': 81
                  }
                }
              }
            }
          },
          {
            'type': 'Identifier',
            'start': 83,
            'end': 42,
            'loc': {
              'start': {
                'line': 5,
                'column': 28,
                'index': 83
              },
              'end': {
                'line': 5,
                'column': 42,
                'index': 97
              }
            },
            'name': 'family',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 89,
              'end': 97,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 34,
                  'index': 89
                },
                'end': {
                  'line': 5,
                  'column': 42,
                  'index': 97
                }
              },
              'typeAnnotation': {
                'type': 'TSTypeReference',
                'start': 91,
                'end': 97,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 36,
                    'index': 91
                  },
                  'end': {
                    'line': 5,
                    'column': 42,
                    'index': 97
                  }
                },
                'typeName': {
                  'type': 'Identifier',
                  'start': 91,
                  'end': 97,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 36,
                      'index': 91
                    },
                    'end': {
                      'line': 5,
                      'column': 42,
                      'index': 97
                    }
                  },
                  'name': 'Family'
                }
              }
            }
          },
          {
            'type': 'Identifier',
            'start': 99,
            'end': 56,
            'loc': {
              'start': {
                'line': 5,
                'column': 44,
                'index': 99
              },
              'end': {
                'line': 5,
                'column': 56,
                'index': 111
              }
            },
            'name': 'age',
            'optional': true,
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 103,
              'end': 111,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 48,
                  'index': 103
                },
                'end': {
                  'line': 5,
                  'column': 56,
                  'index': 111
                }
              },
              'typeAnnotation': {
                'type': 'TSNumberKeyword',
                'start': 105,
                'end': 111,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 50,
                    'index': 105
                  },
                  'end': {
                    'line': 5,
                    'column': 56,
                    'index': 111
                  }
                }
              }
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 112,
          'end': 120,
          'loc': {
            'start': {
              'line': 5,
              'column': 57,
              'index': 112
            },
            'end': {
              'line': 5,
              'column': 65,
              'index': 120
            }
          },
          'typeAnnotation': {
            'type': 'TSTypeReference',
            'start': 114,
            'end': 120,
            'loc': {
              'start': {
                'line': 5,
                'column': 59,
                'index': 114
              },
              'end': {
                'line': 5,
                'column': 65,
                'index': 120
              }
            },
            'typeName': {
              'type': 'Identifier',
              'start': 114,
              'end': 120,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 59,
                  'index': 114
                },
                'end': {
                  'line': 5,
                  'column': 65,
                  'index': 120
                }
              },
              'name': 'Family'
            }
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 121,
          'end': 165,
          'loc': {
            'start': {
              'line': 5,
              'column': 66,
              'index': 121
            },
            'end': {
              'line': 8,
              'column': 1,
              'index': 165
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 125,
              'end': 147,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 2,
                  'index': 125
                },
                'end': {
                  'line': 6,
                  'column': 24,
                  'index': 147
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 125,
                'end': 147,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 2,
                    'index': 125
                  },
                  'end': {
                    'line': 6,
                    'column': 24,
                    'index': 147
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 125,
                  'end': 136,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 2,
                      'index': 125
                    },
                    'end': {
                      'line': 6,
                      'column': 13,
                      'index': 136
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 125,
                    'end': 132,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 2,
                        'index': 125
                      },
                      'end': {
                        'line': 6,
                        'column': 9,
                        'index': 132
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 133,
                    'end': 136,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 10,
                        'index': 133
                      },
                      'end': {
                        'line': 6,
                        'column': 13,
                        'index': 136
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
                    'start': 137,
                    'end': 141,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 14,
                        'index': 137
                      },
                      'end': {
                        'line': 6,
                        'column': 18,
                        'index': 141
                      }
                    },
                    'name': 'name'
                  },
                  {
                    'type': 'Identifier',
                    'start': 143,
                    'end': 146,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 20,
                        'index': 143
                      },
                      'end': {
                        'line': 6,
                        'column': 23,
                        'index': 146
                      }
                    },
                    'name': 'age'
                  }
                ],
                'optional': false
              }
            },
            {
              'type': 'ReturnStatement',
              'start': 150,
              'end': 163,
              'loc': {
                'start': {
                  'line': 7,
                  'column': 2,
                  'index': 150
                },
                'end': {
                  'line': 7,
                  'column': 15,
                  'index': 163
                }
              },
              'argument': {
                'type': 'Identifier',
                'start': 157,
                'end': 163,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 9,
                    'index': 157
                  },
                  'end': {
                    'line': 7,
                    'column': 15,
                    'index': 163
                  }
                },
                'name': 'family'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  DeclareFunctionTypes: {
    'type': 'Program',
    'start': 0,
    'end': 131,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 5,
        'column': 1,
        'index': 131
      }
    },
    'body': [
      {
        'type': 'TSDeclareFunction',
        'start': 0,
        'end': 32,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 32,
            'index': 32
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 14,
            'end': 23,
            'loc': {
              'start': {
                'line': 1,
                'column': 14,
                'index': 14
              },
              'end': {
                'line': 1,
                'column': 23,
                'index': 23
              }
            },
            'name': 'a',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 15,
              'end': 23,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 15,
                  'index': 15
                },
                'end': {
                  'line': 1,
                  'column': 23,
                  'index': 23
                }
              },
              'typeAnnotation': {
                'type': 'TSStringKeyword',
                'start': 17,
                'end': 23,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 17,
                    'index': 17
                  },
                  'end': {
                    'line': 1,
                    'column': 23,
                    'index': 23
                  }
                }
              }
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 24,
          'end': 32,
          'loc': {
            'start': {
              'line': 1,
              'column': 24,
              'index': 24
            },
            'end': {
              'line': 1,
              'column': 32,
              'index': 32
            }
          },
          'typeAnnotation': {
            'type': 'TSStringKeyword',
            'start': 26,
            'end': 32,
            'loc': {
              'start': {
                'line': 1,
                'column': 26,
                'index': 26
              },
              'end': {
                'line': 1,
                'column': 32,
                'index': 32
              }
            }
          }
        }
      },
      {
        'type': 'TSDeclareFunction',
        'start': 33,
        'end': 65,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 33
          },
          'end': {
            'line': 2,
            'column': 32,
            'index': 65
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 42,
          'end': 46,
          'loc': {
            'start': {
              'line': 2,
              'column': 9,
              'index': 42
            },
            'end': {
              'line': 2,
              'column': 13,
              'index': 46
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 47,
            'end': 23,
            'loc': {
              'start': {
                'line': 2,
                'column': 14,
                'index': 47
              },
              'end': {
                'line': 2,
                'column': 23,
                'index': 56
              }
            },
            'name': 'a',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 48,
              'end': 56,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 15,
                  'index': 48
                },
                'end': {
                  'line': 2,
                  'column': 23,
                  'index': 56
                }
              },
              'typeAnnotation': {
                'type': 'TSNumberKeyword',
                'start': 50,
                'end': 56,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 17,
                    'index': 50
                  },
                  'end': {
                    'line': 2,
                    'column': 23,
                    'index': 56
                  }
                }
              }
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 57,
          'end': 65,
          'loc': {
            'start': {
              'line': 2,
              'column': 24,
              'index': 57
            },
            'end': {
              'line': 2,
              'column': 32,
              'index': 65
            }
          },
          'typeAnnotation': {
            'type': 'TSNumberKeyword',
            'start': 59,
            'end': 65,
            'loc': {
              'start': {
                'line': 2,
                'column': 26,
                'index': 59
              },
              'end': {
                'line': 2,
                'column': 32,
                'index': 65
              }
            }
          }
        }
      },
      {
        'type': 'FunctionDeclaration',
        'start': 66,
        'end': 131,
        'loc': {
          'start': {
            'line': 3,
            'column': 0,
            'index': 66
          },
          'end': {
            'line': 5,
            'column': 1,
            'index': 131
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 75,
          'end': 79,
          'loc': {
            'start': {
              'line': 3,
              'column': 9,
              'index': 75
            },
            'end': {
              'line': 3,
              'column': 13,
              'index': 79
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 80,
            'end': 32,
            'loc': {
              'start': {
                'line': 3,
                'column': 14,
                'index': 80
              },
              'end': {
                'line': 3,
                'column': 32,
                'index': 98
              }
            },
            'name': 'a',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 81,
              'end': 98,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 15,
                  'index': 81
                },
                'end': {
                  'line': 3,
                  'column': 32,
                  'index': 98
                }
              },
              'typeAnnotation': {
                'type': 'TSUnionType',
                'start': 83,
                'end': 98,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 17,
                    'index': 83
                  },
                  'end': {
                    'line': 3,
                    'column': 32,
                    'index': 98
                  }
                },
                'types': [
                  {
                    'type': 'TSNumberKeyword',
                    'start': 83,
                    'end': 89,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 17,
                        'index': 83
                      },
                      'end': {
                        'line': 3,
                        'column': 23,
                        'index': 89
                      }
                    }
                  },
                  {
                    'type': 'TSStringKeyword',
                    'start': 92,
                    'end': 98,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 26,
                        'index': 92
                      },
                      'end': {
                        'line': 3,
                        'column': 32,
                        'index': 98
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 99,
          'end': 116,
          'loc': {
            'start': {
              'line': 3,
              'column': 33,
              'index': 99
            },
            'end': {
              'line': 3,
              'column': 50,
              'index': 116
            }
          },
          'typeAnnotation': {
            'type': 'TSUnionType',
            'start': 101,
            'end': 116,
            'loc': {
              'start': {
                'line': 3,
                'column': 35,
                'index': 101
              },
              'end': {
                'line': 3,
                'column': 50,
                'index': 116
              }
            },
            'types': [
              {
                'type': 'TSNumberKeyword',
                'start': 101,
                'end': 107,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 35,
                    'index': 101
                  },
                  'end': {
                    'line': 3,
                    'column': 41,
                    'index': 107
                  }
                }
              },
              {
                'type': 'TSStringKeyword',
                'start': 110,
                'end': 116,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 44,
                    'index': 110
                  },
                  'end': {
                    'line': 3,
                    'column': 50,
                    'index': 116
                  }
                }
              }
            ]
          }
        },
        'body': {
          'type': 'BlockStatement',
          'start': 117,
          'end': 131,
          'loc': {
            'start': {
              'line': 3,
              'column': 51,
              'index': 117
            },
            'end': {
              'line': 5,
              'column': 1,
              'index': 131
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 121,
              'end': 129,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 2,
                  'index': 121
                },
                'end': {
                  'line': 4,
                  'column': 10,
                  'index': 129
                }
              },
              'argument': {
                'type': 'Identifier',
                'start': 128,
                'end': 129,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 9,
                    'index': 128
                  },
                  'end': {
                    'line': 4,
                    'column': 10,
                    'index': 129
                  }
                },
                'name': 'a'
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  DeclareFunctionCommaAfterRestElement: {
    'type': 'Program',
    'start': 0,
    'end': 66,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 1,
        'column': 66,
        'index': 66
      }
    },
    'body': [
      {
        'type': 'TSDeclareFunction',
        'start': 0,
        'end': 66,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 66,
            'index': 66
          }
        },
        'declare': true,
        'id': {
          'type': 'Identifier',
          'start': 17,
          'end': 21,
          'loc': {
            'start': {
              'line': 1,
              'column': 17,
              'index': 17
            },
            'end': {
              'line': 1,
              'column': 21,
              'index': 21
            }
          },
          'name': 'test'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 22,
            'end': 40,
            'loc': {
              'start': {
                'line': 1,
                'column': 22,
                'index': 22
              },
              'end': {
                'line': 1,
                'column': 40,
                'index': 40
              }
            },
            'name': 'a',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 23,
              'end': 40,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 23,
                  'index': 23
                },
                'end': {
                  'line': 1,
                  'column': 40,
                  'index': 40
                }
              },
              'typeAnnotation': {
                'type': 'TSUnionType',
                'start': 25,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 25,
                    'index': 25
                  },
                  'end': {
                    'line': 1,
                    'column': 40,
                    'index': 40
                  }
                },
                'types': [
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
                    'type': 'TSStringKeyword',
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
            }
          },
          {
            'type': 'RestElement',
            'start': 42,
            'end': 46,
            'loc': {
              'start': {
                'line': 1,
                'column': 42,
                'index': 42
              },
              'end': {
                'line': 1,
                'column': 46,
                'index': 46
              }
            },
            'argument': {
              'type': 'Identifier',
              'start': 45,
              'end': 46,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 45,
                  'index': 45
                },
                'end': {
                  'line': 1,
                  'column': 46,
                  'index': 46
                }
              },
              'name': 'b'
            }
          }
        ],
        'returnType': {
          'type': 'TSTypeAnnotation',
          'start': 48,
          'end': 65,
          'loc': {
            'start': {
              'line': 1,
              'column': 48,
              'index': 48
            },
            'end': {
              'line': 1,
              'column': 65,
              'index': 65
            }
          },
          'typeAnnotation': {
            'type': 'TSUnionType',
            'start': 50,
            'end': 65,
            'loc': {
              'start': {
                'line': 1,
                'column': 50,
                'index': 50
              },
              'end': {
                'line': 1,
                'column': 65,
                'index': 65
              }
            },
            'types': [
              {
                'type': 'TSNumberKeyword',
                'start': 50,
                'end': 56,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 50,
                    'index': 50
                  },
                  'end': {
                    'line': 1,
                    'column': 56,
                    'index': 56
                  }
                }
              },
              {
                'type': 'TSStringKeyword',
                'start': 59,
                'end': 65,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 59,
                    'index': 59
                  },
                  'end': {
                    'line': 1,
                    'column': 65,
                    'index': 65
                  }
                }
              }
            ]
          }
        }
      }
    ],
    'sourceType': 'module'
  }
}

export default FunctionTypeSnapshot
