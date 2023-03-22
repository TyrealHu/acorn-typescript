const DecoratorsSnapshot = {
  ClassMethod: {
    'type': 'Program',
    'start': 0,
    'end': 241,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 10,
        'column': 1,
        'index': 241
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 193,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 193
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 14,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 14,
              'index': 14
            }
          },
          'name': 'first'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [],
        'body': {
          'type': 'BlockStatement',
          'start': 17,
          'end': 193,
          'loc': {
            'start': {
              'line': 1,
              'column': 17,
              'index': 17
            },
            'end': {
              'line': 6,
              'column': 1,
              'index': 193
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 21,
              'end': 63,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 21
                },
                'end': {
                  'line': 2,
                  'column': 44,
                  'index': 63
                }
              },
              'expression': {
                'type': 'CallExpression',
                'start': 21,
                'end': 62,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 21
                  },
                  'end': {
                    'line': 2,
                    'column': 43,
                    'index': 62
                  }
                },
                'callee': {
                  'type': 'MemberExpression',
                  'start': 21,
                  'end': 32,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 21
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 32
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 21,
                    'end': 28,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 21
                      },
                      'end': {
                        'line': 2,
                        'column': 9,
                        'index': 28
                      }
                    },
                    'name': 'console'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 29,
                    'end': 32,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 10,
                        'index': 29
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 32
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
                    'start': 33,
                    'end': 61,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 14,
                        'index': 33
                      },
                      'end': {
                        'line': 2,
                        'column': 42,
                        'index': 61
                      }
                    },
                    'value': 'first(): factory evaluated',
                    'raw': '"first(): factory evaluated"'
                  }
                ],
                'optional': false
              }
            },
            {
              'type': 'ReturnStatement',
              'start': 66,
              'end': 191,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 2,
                  'index': 66
                },
                'end': {
                  'line': 5,
                  'column': 4,
                  'index': 191
                }
              },
              'argument': {
                'type': 'FunctionExpression',
                'start': 73,
                'end': 190,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 9,
                    'index': 73
                  },
                  'end': {
                    'line': 5,
                    'column': 3,
                    'index': 190
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 83,
                    'end': 30,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 19,
                        'index': 83
                      },
                      'end': {
                        'line': 3,
                        'column': 30,
                        'index': 94
                      }
                    },
                    'name': 'target',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 89,
                      'end': 94,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 25,
                          'index': 89
                        },
                        'end': {
                          'line': 3,
                          'column': 30,
                          'index': 94
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSAnyKeyword',
                        'start': 91,
                        'end': 94,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 27,
                            'index': 91
                          },
                          'end': {
                            'line': 3,
                            'column': 30,
                            'index': 94
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 96,
                    'end': 51,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 32,
                        'index': 96
                      },
                      'end': {
                        'line': 3,
                        'column': 51,
                        'index': 115
                      }
                    },
                    'name': 'propertyKey',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 107,
                      'end': 115,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 43,
                          'index': 107
                        },
                        'end': {
                          'line': 3,
                          'column': 51,
                          'index': 115
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 109,
                        'end': 115,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 45,
                            'index': 109
                          },
                          'end': {
                            'line': 3,
                            'column': 51,
                            'index': 115
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 117,
                    'end': 83,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 53,
                        'index': 117
                      },
                      'end': {
                        'line': 3,
                        'column': 83,
                        'index': 147
                      }
                    },
                    'name': 'descriptor',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 127,
                      'end': 147,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 63,
                          'index': 127
                        },
                        'end': {
                          'line': 3,
                          'column': 83,
                          'index': 147
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSTypeReference',
                        'start': 129,
                        'end': 147,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 65,
                            'index': 129
                          },
                          'end': {
                            'line': 3,
                            'column': 83,
                            'index': 147
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 129,
                          'end': 147,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 65,
                              'index': 129
                            },
                            'end': {
                              'line': 3,
                              'column': 83,
                              'index': 147
                            }
                          },
                          'name': 'PropertyDescriptor'
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 149,
                  'end': 190,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 85,
                      'index': 149
                    },
                    'end': {
                      'line': 5,
                      'column': 3,
                      'index': 190
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 155,
                      'end': 186,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 4,
                          'index': 155
                        },
                        'end': {
                          'line': 4,
                          'column': 35,
                          'index': 186
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 155,
                        'end': 185,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 4,
                            'index': 155
                          },
                          'end': {
                            'line': 4,
                            'column': 34,
                            'index': 185
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 155,
                          'end': 166,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 4,
                              'index': 155
                            },
                            'end': {
                              'line': 4,
                              'column': 15,
                              'index': 166
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 155,
                            'end': 162,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 4,
                                'index': 155
                              },
                              'end': {
                                'line': 4,
                                'column': 11,
                                'index': 162
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 163,
                            'end': 166,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 12,
                                'index': 163
                              },
                              'end': {
                                'line': 4,
                                'column': 15,
                                'index': 166
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
                            'start': 167,
                            'end': 184,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 16,
                                'index': 167
                              },
                              'end': {
                                'line': 4,
                                'column': 33,
                                'index': 184
                              }
                            },
                            'value': 'first(): called',
                            'raw': '"first(): called"'
                          }
                        ],
                        'optional': false
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        'type': 'ClassDeclaration',
        'start': 194,
        'end': 241,
        'loc': {
          'start': {
            'line': 7,
            'column': 0,
            'index': 194
          },
          'end': {
            'line': 10,
            'column': 1,
            'index': 241
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 200,
          'end': 212,
          'loc': {
            'start': {
              'line': 7,
              'column': 6,
              'index': 200
            },
            'end': {
              'line': 7,
              'column': 18,
              'index': 212
            }
          },
          'name': 'ExampleClass'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 213,
          'end': 241,
          'loc': {
            'start': {
              'line': 7,
              'column': 19,
              'index': 213
            },
            'end': {
              'line': 10,
              'column': 1,
              'index': 241
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 217,
              'end': 239,
              'loc': {
                'start': {
                  'line': 8,
                  'column': 2,
                  'index': 217
                },
                'end': {
                  'line': 9,
                  'column': 13,
                  'index': 239
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 228,
                'end': 234,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 2,
                    'index': 228
                  },
                  'end': {
                    'line': 9,
                    'column': 8,
                    'index': 234
                  }
                },
                'name': 'method'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 234,
                'end': 239,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 8,
                    'index': 234
                  },
                  'end': {
                    'line': 9,
                    'column': 13,
                    'index': 239
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 237,
                  'end': 239,
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 11,
                      'index': 237
                    },
                    'end': {
                      'line': 9,
                      'column': 13,
                      'index': 239
                    }
                  },
                  'body': []
                }
              },
              'decorators': [
                {
                  'type': 'Decorator',
                  'start': 217,
                  'end': 225,
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 2,
                      'index': 217
                    },
                    'end': {
                      'line': 8,
                      'column': 10,
                      'index': 225
                    }
                  },
                  'expression': {
                    'type': 'CallExpression',
                    'start': 218,
                    'end': 225,
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 3,
                        'index': 218
                      },
                      'end': {
                        'line': 8,
                        'column': 10,
                        'index': 225
                      }
                    },
                    'callee': {
                      'type': 'Identifier',
                      'start': 218,
                      'end': 223,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 3,
                          'index': 218
                        },
                        'end': {
                          'line': 8,
                          'column': 8,
                          'index': 223
                        }
                      },
                      'name': 'first'
                    },
                    'arguments': []
                  }
                }
              ]
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  Class: {
    'type': 'Program',
    'start': 0,
    'end': 287,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 12,
        'column': 1,
        'index': 287
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 171,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 5,
            'column': 1,
            'index': 171
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 33,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 33,
              'index': 33
            }
          },
          'name': 'reportableClassDecorator'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'typeParameters': {
          'type': 'TSTypeParameterDeclaration',
          'start': 33,
          'end': 73,
          'loc': {
            'start': {
              'line': 1,
              'column': 33,
              'index': 33
            },
            'end': {
              'line': 1,
              'column': 73,
              'index': 73
            }
          },
          'params': [
            {
              'type': 'TSTypeParameter',
              'start': 34,
              'end': 72,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 34,
                  'index': 34
                },
                'end': {
                  'line': 1,
                  'column': 72,
                  'index': 72
                }
              },
              'name': 'T',
              'constraint': {
                'type': 'TSTypeLiteral',
                'start': 44,
                'end': 72,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 44,
                    'index': 44
                  },
                  'end': {
                    'line': 1,
                    'column': 72,
                    'index': 72
                  }
                },
                'members': [
                  {
                    'type': 'TSConstructSignatureDeclaration',
                    'start': 46,
                    'end': 70,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 46,
                        'index': 46
                      },
                      'end': {
                        'line': 1,
                        'column': 70,
                        'index': 70
                      }
                    },
                    'parameters': [
                      {
                        'type': 'RestElement',
                        'start': 51,
                        'end': 65,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 51,
                            'index': 51
                          },
                          'end': {
                            'line': 1,
                            'column': 65,
                            'index': 65
                          }
                        },
                        'argument': {
                          'type': 'Identifier',
                          'start': 54,
                          'end': 58,
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 54,
                              'index': 54
                            },
                            'end': {
                              'line': 1,
                              'column': 58,
                              'index': 58
                            }
                          },
                          'name': 'args'
                        },
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 58,
                          'end': 65,
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 58,
                              'index': 58
                            },
                            'end': {
                              'line': 1,
                              'column': 65,
                              'index': 65
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSArrayType',
                            'start': 60,
                            'end': 65,
                            'loc': {
                              'start': {
                                'line': 1,
                                'column': 60,
                                'index': 60
                              },
                              'end': {
                                'line': 1,
                                'column': 65,
                                'index': 65
                              }
                            },
                            'elementType': {
                              'type': 'TSAnyKeyword',
                              'start': 60,
                              'end': 63,
                              'loc': {
                                'start': {
                                  'line': 1,
                                  'column': 60,
                                  'index': 60
                                },
                                'end': {
                                  'line': 1,
                                  'column': 63,
                                  'index': 63
                                }
                              }
                            }
                          }
                        }
                      }
                    ],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 66,
                      'end': 70,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 66,
                          'index': 66
                        },
                        'end': {
                          'line': 1,
                          'column': 70,
                          'index': 70
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSTypeLiteral',
                        'start': 68,
                        'end': 70,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 68,
                            'index': 68
                          },
                          'end': {
                            'line': 1,
                            'column': 70,
                            'index': 70
                          }
                        },
                        'members': []
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        'params': [
          {
            'type': 'Identifier',
            'start': 74,
            'end': 88,
            'loc': {
              'start': {
                'line': 1,
                'column': 74,
                'index': 74
              },
              'end': {
                'line': 1,
                'column': 88,
                'index': 88
              }
            },
            'name': 'constructor',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 85,
              'end': 88,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 85,
                  'index': 85
                },
                'end': {
                  'line': 1,
                  'column': 88,
                  'index': 88
                }
              },
              'typeAnnotation': {
                'type': 'TSTypeReference',
                'start': 87,
                'end': 88,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 87,
                    'index': 87
                  },
                  'end': {
                    'line': 1,
                    'column': 88,
                    'index': 88
                  }
                },
                'typeName': {
                  'type': 'Identifier',
                  'start': 87,
                  'end': 88,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 87,
                      'index': 87
                    },
                    'end': {
                      'line': 1,
                      'column': 88,
                      'index': 88
                    }
                  },
                  'name': 'T'
                }
              }
            }
          }
        ],
        'body': {
          'type': 'BlockStatement',
          'start': 90,
          'end': 171,
          'loc': {
            'start': {
              'line': 1,
              'column': 90,
              'index': 90
            },
            'end': {
              'line': 5,
              'column': 1,
              'index': 171
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 94,
              'end': 169,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 94
                },
                'end': {
                  'line': 4,
                  'column': 4,
                  'index': 169
                }
              },
              'argument': {
                'type': 'ClassExpression',
                'start': 101,
                'end': 168,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 101
                  },
                  'end': {
                    'line': 4,
                    'column': 3,
                    'index': 168
                  }
                },
                'id': null,
                'superClass': {
                  'type': 'Identifier',
                  'start': 115,
                  'end': 126,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 23,
                      'index': 115
                    },
                    'end': {
                      'line': 2,
                      'column': 34,
                      'index': 126
                    }
                  },
                  'name': 'constructor'
                },
                'body': {
                  'type': 'ClassBody',
                  'start': 127,
                  'end': 168,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 35,
                      'index': 127
                    },
                    'end': {
                      'line': 4,
                      'column': 3,
                      'index': 168
                    }
                  },
                  'body': [
                    {
                      'type': 'PropertyDefinition',
                      'start': 133,
                      'end': 164,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 4,
                          'index': 133
                        },
                        'end': {
                          'line': 3,
                          'column': 35,
                          'index': 164
                        }
                      },
                      'static': false,
                      'computed': false,
                      'key': {
                        'type': 'Identifier',
                        'start': 133,
                        'end': 145,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 4,
                            'index': 133
                          },
                          'end': {
                            'line': 3,
                            'column': 16,
                            'index': 145
                          }
                        },
                        'name': 'reportingURL'
                      },
                      'value': {
                        'type': 'Literal',
                        'start': 148,
                        'end': 163,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 19,
                            'index': 148
                          },
                          'end': {
                            'line': 3,
                            'column': 34,
                            'index': 163
                          }
                        },
                        'value': 'http://www...',
                        'raw': '"http://www..."'
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        'type': 'ClassDeclaration',
        'start': 172,
        'end': 287,
        'loc': {
          'start': {
            'line': 6,
            'column': 0,
            'index': 172
          },
          'end': {
            'line': 12,
            'column': 1,
            'index': 287
          }
        },
        'decorators': [
          {
            'type': 'Decorator',
            'start': 172,
            'end': 197,
            'loc': {
              'start': {
                'line': 6,
                'column': 0,
                'index': 172
              },
              'end': {
                'line': 6,
                'column': 25,
                'index': 197
              }
            },
            'expression': {
              'type': 'Identifier',
              'start': 173,
              'end': 197,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 1,
                  'index': 173
                },
                'end': {
                  'line': 6,
                  'column': 25,
                  'index': 197
                }
              },
              'name': 'reportableClassDecorator'
            }
          }
        ],
        'id': {
          'type': 'Identifier',
          'start': 204,
          'end': 216,
          'loc': {
            'start': {
              'line': 7,
              'column': 6,
              'index': 204
            },
            'end': {
              'line': 7,
              'column': 18,
              'index': 216
            }
          },
          'name': 'ExampleClass'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 217,
          'end': 287,
          'loc': {
            'start': {
              'line': 7,
              'column': 19,
              'index': 217
            },
            'end': {
              'line': 12,
              'column': 1,
              'index': 287
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 221,
              'end': 234,
              'loc': {
                'start': {
                  'line': 8,
                  'column': 2,
                  'index': 221
                },
                'end': {
                  'line': 8,
                  'column': 15,
                  'index': 234
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 221,
                'end': 226,
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 2,
                    'index': 221
                  },
                  'end': {
                    'line': 8,
                    'column': 7,
                    'index': 226
                  }
                },
                'name': 'title'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 226,
                'end': 234,
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 7,
                    'index': 226
                  },
                  'end': {
                    'line': 8,
                    'column': 15,
                    'index': 234
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 228,
                  'end': 234,
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 9,
                      'index': 228
                    },
                    'end': {
                      'line': 8,
                      'column': 15,
                      'index': 234
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 237,
              'end': 285,
              'loc': {
                'start': {
                  'line': 9,
                  'column': 2,
                  'index': 237
                },
                'end': {
                  'line': 11,
                  'column': 3,
                  'index': 285
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 237,
                'end': 248,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 2,
                    'index': 237
                  },
                  'end': {
                    'line': 9,
                    'column': 13,
                    'index': 248
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 248,
                'end': 285,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 13,
                    'index': 248
                  },
                  'end': {
                    'line': 11,
                    'column': 3,
                    'index': 285
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 249,
                    'end': 23,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 14,
                        'index': 249
                      },
                      'end': {
                        'line': 9,
                        'column': 23,
                        'index': 258
                      }
                    },
                    'name': 't',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 250,
                      'end': 258,
                      'loc': {
                        'start': {
                          'line': 9,
                          'column': 15,
                          'index': 250
                        },
                        'end': {
                          'line': 9,
                          'column': 23,
                          'index': 258
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 252,
                        'end': 258,
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 17,
                            'index': 252
                          },
                          'end': {
                            'line': 9,
                            'column': 23,
                            'index': 258
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 260,
                  'end': 285,
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 25,
                      'index': 260
                    },
                    'end': {
                      'line': 11,
                      'column': 3,
                      'index': 285
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 266,
                      'end': 281,
                      'loc': {
                        'start': {
                          'line': 10,
                          'column': 4,
                          'index': 266
                        },
                        'end': {
                          'line': 10,
                          'column': 19,
                          'index': 281
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 266,
                        'end': 280,
                        'loc': {
                          'start': {
                            'line': 10,
                            'column': 4,
                            'index': 266
                          },
                          'end': {
                            'line': 10,
                            'column': 18,
                            'index': 280
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 266,
                          'end': 276,
                          'loc': {
                            'start': {
                              'line': 10,
                              'column': 4,
                              'index': 266
                            },
                            'end': {
                              'line': 10,
                              'column': 14,
                              'index': 276
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 266,
                            'end': 270,
                            'loc': {
                              'start': {
                                'line': 10,
                                'column': 4,
                                'index': 266
                              },
                              'end': {
                                'line': 10,
                                'column': 8,
                                'index': 270
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 271,
                            'end': 276,
                            'loc': {
                              'start': {
                                'line': 10,
                                'column': 9,
                                'index': 271
                              },
                              'end': {
                                'line': 10,
                                'column': 14,
                                'index': 276
                              }
                            },
                            'name': 'title'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 279,
                          'end': 280,
                          'loc': {
                            'start': {
                              'line': 10,
                              'column': 17,
                              'index': 279
                            },
                            'end': {
                              'line': 10,
                              'column': 18,
                              'index': 280
                            }
                          },
                          'name': 't'
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  ClassAccessor: {
    'type': 'Program',
    'start': 0,
    'end': 322,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 15,
        'column': 1,
        'index': 322
      }
    },
    'body': [
      {
        'type': 'FunctionDeclaration',
        'start': 0,
        'end': 170,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 5,
            'column': 1,
            'index': 170
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 9,
          'end': 21,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 21,
              'index': 21
            }
          },
          'name': 'configurable'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 22,
            'end': 36,
            'loc': {
              'start': {
                'line': 1,
                'column': 22,
                'index': 22
              },
              'end': {
                'line': 1,
                'column': 36,
                'index': 36
              }
            },
            'name': 'value',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 27,
              'end': 36,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 27,
                  'index': 27
                },
                'end': {
                  'line': 1,
                  'column': 36,
                  'index': 36
                }
              },
              'typeAnnotation': {
                'type': 'TSTypeReference',
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
                  'name': 'Boolean'
                }
              }
            }
          }
        ],
        'body': {
          'type': 'BlockStatement',
          'start': 38,
          'end': 170,
          'loc': {
            'start': {
              'line': 1,
              'column': 38,
              'index': 38
            },
            'end': {
              'line': 5,
              'column': 1,
              'index': 170
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 42,
              'end': 168,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 42
                },
                'end': {
                  'line': 4,
                  'column': 4,
                  'index': 168
                }
              },
              'argument': {
                'type': 'FunctionExpression',
                'start': 49,
                'end': 167,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 49
                  },
                  'end': {
                    'line': 4,
                    'column': 3,
                    'index': 167
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 59,
                    'end': 30,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 19,
                        'index': 59
                      },
                      'end': {
                        'line': 2,
                        'column': 30,
                        'index': 70
                      }
                    },
                    'name': 'target',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 65,
                      'end': 70,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 25,
                          'index': 65
                        },
                        'end': {
                          'line': 2,
                          'column': 30,
                          'index': 70
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSAnyKeyword',
                        'start': 67,
                        'end': 70,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 27,
                            'index': 67
                          },
                          'end': {
                            'line': 2,
                            'column': 30,
                            'index': 70
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 72,
                    'end': 51,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 32,
                        'index': 72
                      },
                      'end': {
                        'line': 2,
                        'column': 51,
                        'index': 91
                      }
                    },
                    'name': 'propertyKey',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 83,
                      'end': 91,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 43,
                          'index': 83
                        },
                        'end': {
                          'line': 2,
                          'column': 51,
                          'index': 91
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 85,
                        'end': 91,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 45,
                            'index': 85
                          },
                          'end': {
                            'line': 2,
                            'column': 51,
                            'index': 91
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 93,
                    'end': 83,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 53,
                        'index': 93
                      },
                      'end': {
                        'line': 2,
                        'column': 83,
                        'index': 123
                      }
                    },
                    'name': 'descriptor',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 103,
                      'end': 123,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 63,
                          'index': 103
                        },
                        'end': {
                          'line': 2,
                          'column': 83,
                          'index': 123
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSTypeReference',
                        'start': 105,
                        'end': 123,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 65,
                            'index': 105
                          },
                          'end': {
                            'line': 2,
                            'column': 83,
                            'index': 123
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 105,
                          'end': 123,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 65,
                              'index': 105
                            },
                            'end': {
                              'line': 2,
                              'column': 83,
                              'index': 123
                            }
                          },
                          'name': 'PropertyDescriptor'
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 125,
                  'end': 167,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 85,
                      'index': 125
                    },
                    'end': {
                      'line': 4,
                      'column': 3,
                      'index': 167
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 131,
                      'end': 163,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 4,
                          'index': 131
                        },
                        'end': {
                          'line': 3,
                          'column': 36,
                          'index': 163
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 131,
                        'end': 162,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 4,
                            'index': 131
                          },
                          'end': {
                            'line': 3,
                            'column': 35,
                            'index': 162
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 131,
                          'end': 154,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 4,
                              'index': 131
                            },
                            'end': {
                              'line': 3,
                              'column': 27,
                              'index': 154
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 131,
                            'end': 141,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 4,
                                'index': 131
                              },
                              'end': {
                                'line': 3,
                                'column': 14,
                                'index': 141
                              }
                            },
                            'name': 'descriptor'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 142,
                            'end': 154,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 15,
                                'index': 142
                              },
                              'end': {
                                'line': 3,
                                'column': 27,
                                'index': 154
                              }
                            },
                            'name': 'configurable'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 157,
                          'end': 162,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 30,
                              'index': 157
                            },
                            'end': {
                              'line': 3,
                              'column': 35,
                              'index': 162
                            }
                          },
                          'name': 'value'
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        'type': 'ClassDeclaration',
        'start': 171,
        'end': 322,
        'loc': {
          'start': {
            'line': 6,
            'column': 0,
            'index': 171
          },
          'end': {
            'line': 15,
            'column': 1,
            'index': 322
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 177,
          'end': 189,
          'loc': {
            'start': {
              'line': 6,
              'column': 6,
              'index': 177
            },
            'end': {
              'line': 6,
              'column': 18,
              'index': 189
            }
          },
          'name': 'ExampleClass'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 190,
          'end': 322,
          'loc': {
            'start': {
              'line': 6,
              'column': 19,
              'index': 190
            },
            'end': {
              'line': 15,
              'column': 1,
              'index': 322
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 194,
              'end': 207,
              'loc': {
                'start': {
                  'line': 7,
                  'column': 2,
                  'index': 194
                },
                'end': {
                  'line': 7,
                  'column': 15,
                  'index': 207
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 194,
                'end': 199,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 2,
                    'index': 194
                  },
                  'end': {
                    'line': 7,
                    'column': 7,
                    'index': 199
                  }
                },
                'name': 'title'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 199,
                'end': 207,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 7,
                    'index': 199
                  },
                  'end': {
                    'line': 7,
                    'column': 15,
                    'index': 207
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 201,
                  'end': 207,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 9,
                      'index': 201
                    },
                    'end': {
                      'line': 7,
                      'column': 15,
                      'index': 207
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 210,
              'end': 258,
              'loc': {
                'start': {
                  'line': 8,
                  'column': 2,
                  'index': 210
                },
                'end': {
                  'line': 10,
                  'column': 3,
                  'index': 258
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 210,
                'end': 221,
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 2,
                    'index': 210
                  },
                  'end': {
                    'line': 8,
                    'column': 13,
                    'index': 221
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 221,
                'end': 258,
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 13,
                    'index': 221
                  },
                  'end': {
                    'line': 10,
                    'column': 3,
                    'index': 258
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 222,
                    'end': 23,
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 14,
                        'index': 222
                      },
                      'end': {
                        'line': 8,
                        'column': 23,
                        'index': 231
                      }
                    },
                    'name': 't',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 223,
                      'end': 231,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 15,
                          'index': 223
                        },
                        'end': {
                          'line': 8,
                          'column': 23,
                          'index': 231
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 225,
                        'end': 231,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 17,
                            'index': 225
                          },
                          'end': {
                            'line': 8,
                            'column': 23,
                            'index': 231
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 233,
                  'end': 258,
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 25,
                      'index': 233
                    },
                    'end': {
                      'line': 10,
                      'column': 3,
                      'index': 258
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 239,
                      'end': 254,
                      'loc': {
                        'start': {
                          'line': 9,
                          'column': 4,
                          'index': 239
                        },
                        'end': {
                          'line': 9,
                          'column': 19,
                          'index': 254
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 239,
                        'end': 253,
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 4,
                            'index': 239
                          },
                          'end': {
                            'line': 9,
                            'column': 18,
                            'index': 253
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 239,
                          'end': 249,
                          'loc': {
                            'start': {
                              'line': 9,
                              'column': 4,
                              'index': 239
                            },
                            'end': {
                              'line': 9,
                              'column': 14,
                              'index': 249
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 239,
                            'end': 243,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 4,
                                'index': 239
                              },
                              'end': {
                                'line': 9,
                                'column': 8,
                                'index': 243
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 244,
                            'end': 249,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 9,
                                'index': 244
                              },
                              'end': {
                                'line': 9,
                                'column': 14,
                                'index': 249
                              }
                            },
                            'name': 'title'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 252,
                          'end': 253,
                          'loc': {
                            'start': {
                              'line': 9,
                              'column': 17,
                              'index': 252
                            },
                            'end': {
                              'line': 9,
                              'column': 18,
                              'index': 253
                            }
                          },
                          'name': 't'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 261,
              'end': 320,
              'loc': {
                'start': {
                  'line': 11,
                  'column': 2,
                  'index': 261
                },
                'end': {
                  'line': 14,
                  'column': 3,
                  'index': 320
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 288,
                'end': 289,
                'loc': {
                  'start': {
                    'line': 12,
                    'column': 6,
                    'index': 288
                  },
                  'end': {
                    'line': 12,
                    'column': 7,
                    'index': 289
                  }
                },
                'name': 'x'
              },
              'kind': 'get',
              'value': {
                'type': 'FunctionExpression',
                'start': 289,
                'end': 320,
                'loc': {
                  'start': {
                    'line': 12,
                    'column': 7,
                    'index': 289
                  },
                  'end': {
                    'line': 14,
                    'column': 3,
                    'index': 320
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 292,
                  'end': 320,
                  'loc': {
                    'start': {
                      'line': 12,
                      'column': 10,
                      'index': 292
                    },
                    'end': {
                      'line': 14,
                      'column': 3,
                      'index': 320
                    }
                  },
                  'body': [
                    {
                      'type': 'ReturnStatement',
                      'start': 298,
                      'end': 316,
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 4,
                          'index': 298
                        },
                        'end': {
                          'line': 13,
                          'column': 22,
                          'index': 316
                        }
                      },
                      'argument': {
                        'type': 'MemberExpression',
                        'start': 305,
                        'end': 315,
                        'loc': {
                          'start': {
                            'line': 13,
                            'column': 11,
                            'index': 305
                          },
                          'end': {
                            'line': 13,
                            'column': 21,
                            'index': 315
                          }
                        },
                        'object': {
                          'type': 'ThisExpression',
                          'start': 305,
                          'end': 309,
                          'loc': {
                            'start': {
                              'line': 13,
                              'column': 11,
                              'index': 305
                            },
                            'end': {
                              'line': 13,
                              'column': 15,
                              'index': 309
                            }
                          }
                        },
                        'property': {
                          'type': 'Identifier',
                          'start': 310,
                          'end': 315,
                          'loc': {
                            'start': {
                              'line': 13,
                              'column': 16,
                              'index': 310
                            },
                            'end': {
                              'line': 13,
                              'column': 21,
                              'index': 315
                            }
                          },
                          'name': 'title'
                        },
                        'computed': false,
                        'optional': false
                      }
                    }
                  ]
                }
              },
              'decorators': [
                {
                  'type': 'Decorator',
                  'start': 261,
                  'end': 281,
                  'loc': {
                    'start': {
                      'line': 11,
                      'column': 2,
                      'index': 261
                    },
                    'end': {
                      'line': 11,
                      'column': 22,
                      'index': 281
                    }
                  },
                  'expression': {
                    'type': 'CallExpression',
                    'start': 262,
                    'end': 281,
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 3,
                        'index': 262
                      },
                      'end': {
                        'line': 11,
                        'column': 22,
                        'index': 281
                      }
                    },
                    'callee': {
                      'type': 'Identifier',
                      'start': 262,
                      'end': 274,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 3,
                          'index': 262
                        },
                        'end': {
                          'line': 11,
                          'column': 15,
                          'index': 274
                        }
                      },
                      'name': 'configurable'
                    },
                    'arguments': [
                      {
                        'type': 'Literal',
                        'start': 275,
                        'end': 280,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 16,
                            'index': 275
                          },
                          'end': {
                            'line': 11,
                            'column': 21,
                            'index': 280
                          }
                        },
                        'value': false,
                        'raw': 'false'
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  ClassProperty: {
    'type': 'Program',
    'start': 0,
    'end': 164,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 10,
        'column': 1,
        'index': 164
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
          'end': 15,
          'loc': {
            'start': {
              'line': 1,
              'column': 9,
              'index': 9
            },
            'end': {
              'line': 1,
              'column': 15,
              'index': 15
            }
          },
          'name': 'format'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 16,
            'end': 30,
            'loc': {
              'start': {
                'line': 1,
                'column': 16,
                'index': 16
              },
              'end': {
                'line': 1,
                'column': 30,
                'index': 30
              }
            },
            'name': 'target',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 22,
              'end': 30,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 22,
                  'index': 22
                },
                'end': {
                  'line': 1,
                  'column': 30,
                  'index': 30
                }
              },
              'typeAnnotation': {
                'type': 'TSStringKeyword',
                'start': 24,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 24,
                    'index': 24
                  },
                  'end': {
                    'line': 1,
                    'column': 30,
                    'index': 30
                  }
                }
              }
            }
          }
        ],
        'body': {
          'type': 'BlockStatement',
          'start': 32,
          'end': 51,
          'loc': {
            'start': {
              'line': 1,
              'column': 32,
              'index': 32
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 51
            }
          },
          'body': [
            {
              'type': 'ReturnStatement',
              'start': 36,
              'end': 49,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 36
                },
                'end': {
                  'line': 2,
                  'column': 15,
                  'index': 49
                }
              },
              'argument': {
                'type': 'Identifier',
                'start': 43,
                'end': 49,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 43
                  },
                  'end': {
                    'line': 2,
                    'column': 15,
                    'index': 49
                  }
                },
                'name': 'target'
              }
            }
          ]
        }
      },
      {
        'type': 'ClassDeclaration',
        'start': 52,
        'end': 164,
        'loc': {
          'start': {
            'line': 4,
            'column': 0,
            'index': 52
          },
          'end': {
            'line': 10,
            'column': 1,
            'index': 164
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 58,
          'end': 70,
          'loc': {
            'start': {
              'line': 4,
              'column': 6,
              'index': 58
            },
            'end': {
              'line': 4,
              'column': 18,
              'index': 70
            }
          },
          'name': 'ExampleClass'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 71,
          'end': 164,
          'loc': {
            'start': {
              'line': 4,
              'column': 19,
              'index': 71
            },
            'end': {
              'line': 10,
              'column': 1,
              'index': 164
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 75,
              'end': 111,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 2,
                  'index': 75
                },
                'end': {
                  'line': 6,
                  'column': 15,
                  'index': 111
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 98,
                'end': 103,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 2,
                    'index': 98
                  },
                  'end': {
                    'line': 6,
                    'column': 7,
                    'index': 103
                  }
                },
                'name': 'title'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 103,
                'end': 111,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 7,
                    'index': 103
                  },
                  'end': {
                    'line': 6,
                    'column': 15,
                    'index': 111
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 105,
                  'end': 111,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 9,
                      'index': 105
                    },
                    'end': {
                      'line': 6,
                      'column': 15,
                      'index': 111
                    }
                  }
                }
              },
              'value': null,
              'decorators': [
                {
                  'type': 'Decorator',
                  'start': 75,
                  'end': 95,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 2,
                      'index': 75
                    },
                    'end': {
                      'line': 5,
                      'column': 22,
                      'index': 95
                    }
                  },
                  'expression': {
                    'type': 'CallExpression',
                    'start': 76,
                    'end': 95,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 3,
                        'index': 76
                      },
                      'end': {
                        'line': 5,
                        'column': 22,
                        'index': 95
                      }
                    },
                    'callee': {
                      'type': 'Identifier',
                      'start': 76,
                      'end': 82,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 3,
                          'index': 76
                        },
                        'end': {
                          'line': 5,
                          'column': 9,
                          'index': 82
                        }
                      },
                      'name': 'format'
                    },
                    'arguments': [
                      {
                        'type': 'Literal',
                        'start': 83,
                        'end': 94,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 10,
                            'index': 83
                          },
                          'end': {
                            'line': 5,
                            'column': 21,
                            'index': 94
                          }
                        },
                        'value': 'Hello, %s',
                        'raw': '\'Hello, %s\''
                      }
                    ]
                  }
                }
              ]
            },
            {
              'type': 'MethodDefinition',
              'start': 114,
              'end': 162,
              'loc': {
                'start': {
                  'line': 7,
                  'column': 2,
                  'index': 114
                },
                'end': {
                  'line': 9,
                  'column': 3,
                  'index': 162
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 114,
                'end': 125,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 2,
                    'index': 114
                  },
                  'end': {
                    'line': 7,
                    'column': 13,
                    'index': 125
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 125,
                'end': 162,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 13,
                    'index': 125
                  },
                  'end': {
                    'line': 9,
                    'column': 3,
                    'index': 162
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 126,
                    'end': 23,
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 14,
                        'index': 126
                      },
                      'end': {
                        'line': 7,
                        'column': 23,
                        'index': 135
                      }
                    },
                    'name': 't',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 127,
                      'end': 135,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 15,
                          'index': 127
                        },
                        'end': {
                          'line': 7,
                          'column': 23,
                          'index': 135
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 129,
                        'end': 135,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 17,
                            'index': 129
                          },
                          'end': {
                            'line': 7,
                            'column': 23,
                            'index': 135
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 137,
                  'end': 162,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 25,
                      'index': 137
                    },
                    'end': {
                      'line': 9,
                      'column': 3,
                      'index': 162
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 143,
                      'end': 158,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 4,
                          'index': 143
                        },
                        'end': {
                          'line': 8,
                          'column': 19,
                          'index': 158
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 143,
                        'end': 157,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 4,
                            'index': 143
                          },
                          'end': {
                            'line': 8,
                            'column': 18,
                            'index': 157
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 143,
                          'end': 153,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 4,
                              'index': 143
                            },
                            'end': {
                              'line': 8,
                              'column': 14,
                              'index': 153
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 143,
                            'end': 147,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 4,
                                'index': 143
                              },
                              'end': {
                                'line': 8,
                                'column': 8,
                                'index': 147
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 148,
                            'end': 153,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 9,
                                'index': 148
                              },
                              'end': {
                                'line': 8,
                                'column': 14,
                                'index': 153
                              }
                            },
                            'name': 'title'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 156,
                          'end': 157,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 17,
                              'index': 156
                            },
                            'end': {
                              'line': 8,
                              'column': 18,
                              'index': 157
                            }
                          },
                          'name': 't'
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  ClassParams: {
    'type': 'Program',
    'start': 0,
    'end': 167,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 167
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 62,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 62
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 6,
          'end': 13,
          'loc': {
            'start': {
              'line': 1,
              'column': 6,
              'index': 6
            },
            'end': {
              'line': 1,
              'column': 13,
              'index': 13
            }
          },
          'name': 'MyClass'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 62,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 62
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 18,
              'end': 60,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 18
                },
                'end': {
                  'line': 2,
                  'column': 44,
                  'index': 60
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 18,
                'end': 26,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 18
                  },
                  'end': {
                    'line': 2,
                    'column': 10,
                    'index': 26
                  }
                },
                'name': 'myMethod'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 26,
                'end': 60,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 10,
                    'index': 26
                  },
                  'end': {
                    'line': 2,
                    'column': 44,
                    'index': 60
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 37,
                    'end': 40,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 21,
                        'index': 37
                      },
                      'end': {
                        'line': 2,
                        'column': 40,
                        'index': 56
                      }
                    },
                    'name': 'myParameter',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 48,
                      'end': 56,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 32,
                          'index': 48
                        },
                        'end': {
                          'line': 2,
                          'column': 40,
                          'index': 56
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 50,
                        'end': 56,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 34,
                            'index': 50
                          },
                          'end': {
                            'line': 2,
                            'column': 40,
                            'index': 56
                          }
                        }
                      }
                    },
                    'decorators': [
                      {
                        'type': 'Decorator',
                        'start': 27,
                        'end': 36,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 11,
                            'index': 27
                          },
                          'end': {
                            'line': 2,
                            'column': 20,
                            'index': 36
                          }
                        },
                        'expression': {
                          'type': 'Identifier',
                          'start': 28,
                          'end': 36,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 12,
                              'index': 28
                            },
                            'end': {
                              'line': 2,
                              'column': 20,
                              'index': 36
                            }
                          },
                          'name': 'logParam'
                        }
                      }
                    ]
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 58,
                  'end': 60,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 42,
                      'index': 58
                    },
                    'end': {
                      'line': 2,
                      'column': 44,
                      'index': 60
                    }
                  },
                  'body': []
                }
              }
            }
          ]
        }
      },
      {
        'type': 'FunctionDeclaration',
        'start': 63,
        'end': 167,
        'loc': {
          'start': {
            'line': 4,
            'column': 0,
            'index': 63
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 167
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 72,
          'end': 80,
          'loc': {
            'start': {
              'line': 4,
              'column': 9,
              'index': 72
            },
            'end': {
              'line': 4,
              'column': 17,
              'index': 80
            }
          },
          'name': 'logParam'
        },
        'expression': false,
        'generator': false,
        'async': false,
        'params': [
          {
            'type': 'Identifier',
            'start': 81,
            'end': 29,
            'loc': {
              'start': {
                'line': 4,
                'column': 18,
                'index': 81
              },
              'end': {
                'line': 4,
                'column': 29,
                'index': 92
              }
            },
            'name': 'target',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 87,
              'end': 92,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 24,
                  'index': 87
                },
                'end': {
                  'line': 4,
                  'column': 29,
                  'index': 92
                }
              },
              'typeAnnotation': {
                'type': 'TSAnyKeyword',
                'start': 89,
                'end': 92,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 26,
                    'index': 89
                  },
                  'end': {
                    'line': 4,
                    'column': 29,
                    'index': 92
                  }
                }
              }
            }
          },
          {
            'type': 'Identifier',
            'start': 94,
            'end': 48,
            'loc': {
              'start': {
                'line': 4,
                'column': 31,
                'index': 94
              },
              'end': {
                'line': 4,
                'column': 48,
                'index': 111
              }
            },
            'name': 'methodKey',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 103,
              'end': 111,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 40,
                  'index': 103
                },
                'end': {
                  'line': 4,
                  'column': 48,
                  'index': 111
                }
              },
              'typeAnnotation': {
                'type': 'TSStringKeyword',
                'start': 105,
                'end': 111,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 42,
                    'index': 105
                  },
                  'end': {
                    'line': 4,
                    'column': 48,
                    'index': 111
                  }
                }
              }
            }
          },
          {
            'type': 'Identifier',
            'start': 113,
            'end': 72,
            'loc': {
              'start': {
                'line': 4,
                'column': 50,
                'index': 113
              },
              'end': {
                'line': 4,
                'column': 72,
                'index': 135
              }
            },
            'name': 'parameterIndex',
            'typeAnnotation': {
              'type': 'TSTypeAnnotation',
              'start': 127,
              'end': 135,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 64,
                  'index': 127
                },
                'end': {
                  'line': 4,
                  'column': 72,
                  'index': 135
                }
              },
              'typeAnnotation': {
                'type': 'TSNumberKeyword',
                'start': 129,
                'end': 135,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 66,
                    'index': 129
                  },
                  'end': {
                    'line': 4,
                    'column': 72,
                    'index': 135
                  }
                }
              }
            }
          }
        ],
        'body': {
          'type': 'BlockStatement',
          'start': 137,
          'end': 167,
          'loc': {
            'start': {
              'line': 4,
              'column': 74,
              'index': 137
            },
            'end': {
              'line': 6,
              'column': 1,
              'index': 167
            }
          },
          'body': [
            {
              'type': 'ExpressionStatement',
              'start': 141,
              'end': 165,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 2,
                  'index': 141
                },
                'end': {
                  'line': 5,
                  'column': 26,
                  'index': 165
                }
              },
              'expression': {
                'type': 'AssignmentExpression',
                'start': 141,
                'end': 164,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 2,
                    'index': 141
                  },
                  'end': {
                    'line': 5,
                    'column': 25,
                    'index': 164
                  }
                },
                'operator': '=',
                'left': {
                  'type': 'MemberExpression',
                  'start': 141,
                  'end': 152,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 2,
                      'index': 141
                    },
                    'end': {
                      'line': 5,
                      'column': 13,
                      'index': 152
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 141,
                    'end': 147,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 2,
                        'index': 141
                      },
                      'end': {
                        'line': 5,
                        'column': 8,
                        'index': 147
                      }
                    },
                    'name': 'target'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 148,
                    'end': 152,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 9,
                        'index': 148
                      },
                      'end': {
                        'line': 5,
                        'column': 13,
                        'index': 152
                      }
                    },
                    'name': 'test'
                  },
                  'computed': false,
                  'optional': false
                },
                'right': {
                  'type': 'Identifier',
                  'start': 155,
                  'end': 164,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 16,
                      'index': 155
                    },
                    'end': {
                      'line': 5,
                      'column': 25,
                      'index': 164
                    }
                  },
                  'name': 'methodKey'
                }
              }
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  }
}

export default DecoratorsSnapshot
