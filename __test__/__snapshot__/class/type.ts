const ClassTypeSnapshot = {
  Issue44: {
    'type': 'Program',
    'start': 0,
    'end': 354,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 14,
        'column': 0,
        'index': 354
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 1,
        'end': 353,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 13,
            'column': 1,
            'index': 353
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 7,
          'end': 11,
          'loc': {
            'start': {
              'line': 2,
              'column': 6,
              'index': 7
            },
            'end': {
              'line': 2,
              'column': 10,
              'index': 11
            }
          },
          'name': 'Test'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 12,
          'end': 353,
          'loc': {
            'start': {
              'line': 2,
              'column': 11,
              'index': 12
            },
            'end': {
              'line': 13,
              'column': 1,
              'index': 353
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 16,
              'end': 351,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 2,
                  'index': 16
                },
                'end': {
                  'line': 12,
                  'column': 3,
                  'index': 351
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 16,
                'end': 25,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 2,
                    'index': 16
                  },
                  'end': {
                    'line': 3,
                    'column': 11,
                    'index': 25
                  }
                },
                'name': 'parseNode'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 25,
                'end': 351,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 11,
                    'index': 25
                  },
                  'end': {
                    'line': 12,
                    'column': 3,
                    'index': 351
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 26,
                    'end': 41,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 12,
                        'index': 26
                      },
                      'end': {
                        'line': 3,
                        'column': 41,
                        'index': 55
                      }
                    },
                    'name': 'esTreeNode',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 36,
                      'end': 55,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 22,
                          'index': 36
                        },
                        'end': {
                          'line': 3,
                          'column': 41,
                          'index': 55
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSTypeReference',
                        'start': 38,
                        'end': 55,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 24,
                            'index': 38
                          },
                          'end': {
                            'line': 3,
                            'column': 41,
                            'index': 55
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 38,
                          'end': 55,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 24,
                              'index': 38
                            },
                            'end': {
                              'line': 3,
                              'column': 41,
                              'index': 55
                            }
                          },
                          'name': 'GenericEsTreeNode'
                        }
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 56,
                  'end': 62,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 42,
                      'index': 56
                    },
                    'end': {
                      'line': 3,
                      'column': 48,
                      'index': 62
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 58,
                    'end': 62,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 44,
                        'index': 58
                      },
                      'end': {
                        'line': 3,
                        'column': 48,
                        'index': 62
                      }
                    }
                  }
                },
                'body': {
                  'type': 'BlockStatement',
                  'start': 63,
                  'end': 351,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 49,
                      'index': 63
                    },
                    'end': {
                      'line': 12,
                      'column': 3,
                      'index': 351
                    }
                  },
                  'body': [
                    {
                      'type': 'VariableDeclaration',
                      'start': 69,
                      'end': 98,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 4,
                          'index': 69
                        },
                        'end': {
                          'line': 4,
                          'column': 33,
                          'index': 98
                        }
                      },
                      'declarations': [
                        {
                          'type': 'VariableDeclarator',
                          'start': 75,
                          'end': 97,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 10,
                              'index': 75
                            },
                            'end': {
                              'line': 4,
                              'column': 32,
                              'index': 97
                            }
                          },
                          'id': {
                            'type': 'ObjectPattern',
                            'start': 75,
                            'end': 84,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 10,
                                'index': 75
                              },
                              'end': {
                                'line': 4,
                                'column': 19,
                                'index': 84
                              }
                            },
                            'properties': [
                              {
                                'type': 'Property',
                                'start': 77,
                                'end': 82,
                                'loc': {
                                  'start': {
                                    'line': 4,
                                    'column': 12,
                                    'index': 77
                                  },
                                  'end': {
                                    'line': 4,
                                    'column': 17,
                                    'index': 82
                                  }
                                },
                                'method': false,
                                'shorthand': true,
                                'computed': false,
                                'key': {
                                  'type': 'Identifier',
                                  'start': 77,
                                  'end': 82,
                                  'loc': {
                                    'start': {
                                      'line': 4,
                                      'column': 12,
                                      'index': 77
                                    },
                                    'end': {
                                      'line': 4,
                                      'column': 17,
                                      'index': 82
                                    }
                                  },
                                  'name': 'param'
                                },
                                'kind': 'init',
                                'value': {
                                  'type': 'Identifier',
                                  'start': 77,
                                  'end': 82,
                                  'loc': {
                                    'start': {
                                      'line': 4,
                                      'column': 12,
                                      'index': 77
                                    },
                                    'end': {
                                      'line': 4,
                                      'column': 17,
                                      'index': 82
                                    }
                                  },
                                  'name': 'param'
                                }
                              }
                            ]
                          },
                          'init': {
                            'type': 'Identifier',
                            'start': 87,
                            'end': 97,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 22,
                                'index': 87
                              },
                              'end': {
                                'line': 4,
                                'column': 32,
                                'index': 97
                              }
                            },
                            'name': 'esTreeNode'
                          }
                        }
                      ],
                      'kind': 'const'
                    },
                    {
                      'type': 'IfStatement',
                      'start': 103,
                      'end': 314,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 4,
                          'index': 103
                        },
                        'end': {
                          'line': 10,
                          'column': 5,
                          'index': 314
                        }
                      },
                      'test': {
                        'type': 'Identifier',
                        'start': 107,
                        'end': 112,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 8,
                            'index': 107
                          },
                          'end': {
                            'line': 5,
                            'column': 13,
                            'index': 112
                          }
                        },
                        'name': 'param'
                      },
                      'consequent': {
                        'type': 'BlockStatement',
                        'start': 114,
                        'end': 314,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 15,
                            'index': 114
                          },
                          'end': {
                            'line': 10,
                            'column': 5,
                            'index': 314
                          }
                        },
                        'body': [
                          {
                            'type': 'ExpressionStatement',
                            'start': 122,
                            'end': 248,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 6,
                                'index': 122
                              },
                              'end': {
                                'line': 8,
                                'column': 8,
                                'index': 248
                              }
                            },
                            'expression': {
                              'type': 'AssignmentExpression',
                              'start': 122,
                              'end': 247,
                              'loc': {
                                'start': {
                                  'line': 6,
                                  'column': 6,
                                  'index': 122
                                },
                                'end': {
                                  'line': 8,
                                  'column': 7,
                                  'index': 247
                                }
                              },
                              'operator': '=',
                              'left': {
                                'type': 'MemberExpression',
                                'start': 123,
                                'end': 133,
                                'loc': {
                                  'start': {
                                    'line': 6,
                                    'column': 7,
                                    'index': 123
                                  },
                                  'end': {
                                    'line': 6,
                                    'column': 17,
                                    'index': 133
                                  }
                                },
                                'object': {
                                  'type': 'ThisExpression',
                                  'start': 123,
                                  'end': 127,
                                  'loc': {
                                    'start': {
                                      'line': 6,
                                      'column': 7,
                                      'index': 123
                                    },
                                    'end': {
                                      'line': 6,
                                      'column': 11,
                                      'index': 127
                                    }
                                  }
                                },
                                'property': {
                                  'type': 'Identifier',
                                  'start': 128,
                                  'end': 133,
                                  'loc': {
                                    'start': {
                                      'line': 6,
                                      'column': 12,
                                      'index': 128
                                    },
                                    'end': {
                                      'line': 6,
                                      'column': 17,
                                      'index': 133
                                    }
                                  },
                                  'name': 'param'
                                },
                                'computed': false,
                                'optional': false
                              },
                              'right': {
                                'type': 'NewExpression',
                                'start': 158,
                                'end': 247,
                                'loc': {
                                  'start': {
                                    'line': 6,
                                    'column': 42,
                                    'index': 158
                                  },
                                  'end': {
                                    'line': 8,
                                    'column': 7,
                                    'index': 247
                                  }
                                },
                                'callee': {
                                  'type': 'CallExpression',
                                  'start': 163,
                                  'end': 206,
                                  'loc': {
                                    'start': {
                                      'line': 6,
                                      'column': 47,
                                      'index': 163
                                    },
                                    'end': {
                                      'line': 6,
                                      'column': 90,
                                      'index': 206
                                    }
                                  },
                                  'callee': {
                                    'type': 'MemberExpression',
                                    'start': 163,
                                    'end': 194,
                                    'loc': {
                                      'start': {
                                        'line': 6,
                                        'column': 47,
                                        'index': 163
                                      },
                                      'end': {
                                        'line': 6,
                                        'column': 78,
                                        'index': 194
                                      }
                                    },
                                    'object': {
                                      'type': 'MemberExpression',
                                      'start': 163,
                                      'end': 175,
                                      'loc': {
                                        'start': {
                                          'line': 6,
                                          'column': 47,
                                          'index': 163
                                        },
                                        'end': {
                                          'line': 6,
                                          'column': 59,
                                          'index': 175
                                        }
                                      },
                                      'object': {
                                        'type': 'ThisExpression',
                                        'start': 163,
                                        'end': 167,
                                        'loc': {
                                          'start': {
                                            'line': 6,
                                            'column': 47,
                                            'index': 163
                                          },
                                          'end': {
                                            'line': 6,
                                            'column': 51,
                                            'index': 167
                                          }
                                        }
                                      },
                                      'property': {
                                        'type': 'Identifier',
                                        'start': 168,
                                        'end': 175,
                                        'loc': {
                                          'start': {
                                            'line': 6,
                                            'column': 52,
                                            'index': 168
                                          },
                                          'end': {
                                            'line': 6,
                                            'column': 59,
                                            'index': 175
                                          }
                                        },
                                        'name': 'context'
                                      },
                                      'computed': false,
                                      'optional': false
                                    },
                                    'property': {
                                      'type': 'Identifier',
                                      'start': 176,
                                      'end': 194,
                                      'loc': {
                                        'start': {
                                          'line': 6,
                                          'column': 60,
                                          'index': 176
                                        },
                                        'end': {
                                          'line': 6,
                                          'column': 78,
                                          'index': 194
                                        }
                                      },
                                      'name': 'getNodeConstructor'
                                    },
                                    'computed': false,
                                    'optional': false
                                  },
                                  'arguments': [
                                    {
                                      'type': 'MemberExpression',
                                      'start': 195,
                                      'end': 205,
                                      'loc': {
                                        'start': {
                                          'line': 6,
                                          'column': 79,
                                          'index': 195
                                        },
                                        'end': {
                                          'line': 6,
                                          'column': 89,
                                          'index': 205
                                        }
                                      },
                                      'object': {
                                        'type': 'Identifier',
                                        'start': 195,
                                        'end': 200,
                                        'loc': {
                                          'start': {
                                            'line': 6,
                                            'column': 79,
                                            'index': 195
                                          },
                                          'end': {
                                            'line': 6,
                                            'column': 84,
                                            'index': 200
                                          }
                                        },
                                        'name': 'param'
                                      },
                                      'property': {
                                        'type': 'Identifier',
                                        'start': 201,
                                        'end': 205,
                                        'loc': {
                                          'start': {
                                            'line': 6,
                                            'column': 85,
                                            'index': 201
                                          },
                                          'end': {
                                            'line': 6,
                                            'column': 89,
                                            'index': 205
                                          }
                                        },
                                        'name': 'type'
                                      },
                                      'computed': false,
                                      'optional': false
                                    }
                                  ],
                                  'optional': false
                                },
                                'arguments': [
                                  {
                                    'type': 'Identifier',
                                    'start': 217,
                                    'end': 222,
                                    'loc': {
                                      'start': {
                                        'line': 7,
                                        'column': 8,
                                        'index': 217
                                      },
                                      'end': {
                                        'line': 7,
                                        'column': 13,
                                        'index': 222
                                      }
                                    },
                                    'name': 'param'
                                  },
                                  {
                                    'type': 'ThisExpression',
                                    'start': 224,
                                    'end': 228,
                                    'loc': {
                                      'start': {
                                        'line': 7,
                                        'column': 15,
                                        'index': 224
                                      },
                                      'end': {
                                        'line': 7,
                                        'column': 19,
                                        'index': 228
                                      }
                                    }
                                  },
                                  {
                                    'type': 'MemberExpression',
                                    'start': 229,
                                    'end': 239,
                                    'loc': {
                                      'start': {
                                        'line': 7,
                                        'column': 20,
                                        'index': 229
                                      },
                                      'end': {
                                        'line': 7,
                                        'column': 30,
                                        'index': 239
                                      }
                                    },
                                    'object': {
                                      'type': 'ThisExpression',
                                      'start': 229,
                                      'end': 233,
                                      'loc': {
                                        'start': {
                                          'line': 7,
                                          'column': 20,
                                          'index': 229
                                        },
                                        'end': {
                                          'line': 7,
                                          'column': 24,
                                          'index': 233
                                        }
                                      }
                                    },
                                    'property': {
                                      'type': 'Identifier',
                                      'start': 234,
                                      'end': 239,
                                      'loc': {
                                        'start': {
                                          'line': 7,
                                          'column': 25,
                                          'index': 234
                                        },
                                        'end': {
                                          'line': 7,
                                          'column': 30,
                                          'index': 239
                                        }
                                      },
                                      'name': 'scope'
                                    },
                                    'computed': false,
                                    'optional': false
                                  }
                                ]
                              }
                            }
                          },
                          {
                            'type': 'ExpressionStatement',
                            'start': 255,
                            'end': 308,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 6,
                                'index': 255
                              },
                              'end': {
                                'line': 9,
                                'column': 59,
                                'index': 308
                              }
                            },
                            'expression': {
                              'type': 'CallExpression',
                              'start': 255,
                              'end': 307,
                              'loc': {
                                'start': {
                                  'line': 9,
                                  'column': 6,
                                  'index': 255
                                },
                                'end': {
                                  'line': 9,
                                  'column': 58,
                                  'index': 307
                                }
                              },
                              'callee': {
                                'type': 'MemberExpression',
                                'start': 255,
                                'end': 274,
                                'loc': {
                                  'start': {
                                    'line': 9,
                                    'column': 6,
                                    'index': 255
                                  },
                                  'end': {
                                    'line': 9,
                                    'column': 25,
                                    'index': 274
                                  }
                                },
                                'object': {
                                  'type': 'TSNonNullExpression',
                                  'start': 255,
                                  'end': 266,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 6,
                                      'index': 255
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 17,
                                      'index': 266
                                    }
                                  },
                                  'expression': {
                                    'type': 'MemberExpression',
                                    'start': 255,
                                    'end': 265,
                                    'loc': {
                                      'start': {
                                        'line': 9,
                                        'column': 6,
                                        'index': 255
                                      },
                                      'end': {
                                        'line': 9,
                                        'column': 16,
                                        'index': 265
                                      }
                                    },
                                    'object': {
                                      'type': 'ThisExpression',
                                      'start': 255,
                                      'end': 259,
                                      'loc': {
                                        'start': {
                                          'line': 9,
                                          'column': 6,
                                          'index': 255
                                        },
                                        'end': {
                                          'line': 9,
                                          'column': 10,
                                          'index': 259
                                        }
                                      }
                                    },
                                    'property': {
                                      'type': 'Identifier',
                                      'start': 260,
                                      'end': 265,
                                      'loc': {
                                        'start': {
                                          'line': 9,
                                          'column': 11,
                                          'index': 260
                                        },
                                        'end': {
                                          'line': 9,
                                          'column': 16,
                                          'index': 265
                                        }
                                      },
                                      'name': 'param'
                                    },
                                    'computed': false,
                                    'optional': false
                                  }
                                },
                                'property': {
                                  'type': 'Identifier',
                                  'start': 267,
                                  'end': 274,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 18,
                                      'index': 267
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 25,
                                      'index': 274
                                    }
                                  },
                                  'name': 'declare'
                                },
                                'computed': false,
                                'optional': false
                              },
                              'arguments': [
                                {
                                  'type': 'Literal',
                                  'start': 275,
                                  'end': 286,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 26,
                                      'index': 275
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 37,
                                      'index': 286
                                    }
                                  },
                                  'value': 'parameter',
                                  'raw': '\'parameter\''
                                },
                                {
                                  'type': 'Identifier',
                                  'start': 288,
                                  'end': 306,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 39,
                                      'index': 288
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 57,
                                      'index': 306
                                    }
                                  },
                                  'name': 'UNKNOWN_EXPRESSION'
                                }
                              ],
                              'optional': false
                            }
                          }
                        ]
                      },
                      'alternate': null
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 319,
                      'end': 347,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 4,
                          'index': 319
                        },
                        'end': {
                          'line': 11,
                          'column': 32,
                          'index': 347
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 319,
                        'end': 346,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 4,
                            'index': 319
                          },
                          'end': {
                            'line': 11,
                            'column': 31,
                            'index': 346
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 319,
                          'end': 334,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 4,
                              'index': 319
                            },
                            'end': {
                              'line': 11,
                              'column': 19,
                              'index': 334
                            }
                          },
                          'object': {
                            'type': 'Super',
                            'start': 319,
                            'end': 324,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 4,
                                'index': 319
                              },
                              'end': {
                                'line': 11,
                                'column': 9,
                                'index': 324
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 325,
                            'end': 334,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 10,
                                'index': 325
                              },
                              'end': {
                                'line': 11,
                                'column': 19,
                                'index': 334
                              }
                            },
                            'name': 'parseNode'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'arguments': [
                          {
                            'type': 'Identifier',
                            'start': 335,
                            'end': 345,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 20,
                                'index': 335
                              },
                              'end': {
                                'line': 11,
                                'column': 30,
                                'index': 345
                              }
                            },
                            'name': 'esTreeNode'
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
      }
    ],
    'sourceType': 'module'
  },
  Issue42: {
    'type': 'Program',
    'start': 0,
    'end': 214,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 9,
        'column': 0,
        'index': 214
      }
    },
    'body': [
      {
        'type': 'ExportNamedDeclaration',
        'start': 1,
        'end': 213,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 8,
            'column': 1,
            'index': 213
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'ClassDeclaration',
          'start': 8,
          'end': 213,
          'loc': {
            'start': {
              'line': 2,
              'column': 7,
              'index': 8
            },
            'end': {
              'line': 8,
              'column': 1,
              'index': 213
            }
          },
          'id': {
            'type': 'Identifier',
            'start': 14,
            'end': 26,
            'loc': {
              'start': {
                'line': 2,
                'column': 13,
                'index': 14
              },
              'end': {
                'line': 2,
                'column': 25,
                'index': 26
              }
            },
            'name': 'ObjectEntity'
          },
          'superClass': {
            'type': 'Identifier',
            'start': 35,
            'end': 51,
            'loc': {
              'start': {
                'line': 2,
                'column': 34,
                'index': 35
              },
              'end': {
                'line': 2,
                'column': 50,
                'index': 51
              }
            },
            'name': 'ExpressionEntity'
          },
          'body': {
            'type': 'ClassBody',
            'start': 52,
            'end': 213,
            'loc': {
              'start': {
                'line': 2,
                'column': 51,
                'index': 52
              },
              'end': {
                'line': 8,
                'column': 1,
                'index': 213
              }
            },
            'body': [
              {
                'type': 'MethodDefinition',
                'start': 56,
                'end': 211,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 2,
                    'index': 56
                  },
                  'end': {
                    'line': 7,
                    'column': 6,
                    'index': 211
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 56,
                  'end': 67,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 2,
                      'index': 56
                    },
                    'end': {
                      'line': 3,
                      'column': 13,
                      'index': 67
                    }
                  },
                  'name': 'constructor'
                },
                'kind': 'constructor',
                'value': {
                  'type': 'FunctionExpression',
                  'start': 67,
                  'end': 211,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 13,
                      'index': 67
                    },
                    'end': {
                      'line': 7,
                      'column': 6,
                      'index': 211
                    }
                  },
                  'id': null,
                  'expression': false,
                  'generator': false,
                  'async': false,
                  'params': [
                    {
                      'type': 'Identifier',
                      'start': 73,
                      'end': 46,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 4,
                          'index': 73
                        },
                        'end': {
                          'line': 4,
                          'column': 46,
                          'index': 115
                        }
                      },
                      'name': 'properties',
                      'typeAnnotation': {
                        'type': 'TSTypeAnnotation',
                        'start': 83,
                        'end': 115,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 14,
                            'index': 83
                          },
                          'end': {
                            'line': 4,
                            'column': 46,
                            'index': 115
                          }
                        },
                        'typeAnnotation': {
                          'type': 'TSUnionType',
                          'start': 85,
                          'end': 115,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 16,
                              'index': 85
                            },
                            'end': {
                              'line': 4,
                              'column': 46,
                              'index': 115
                            }
                          },
                          'types': [
                            {
                              'type': 'TSArrayType',
                              'start': 85,
                              'end': 101,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 16,
                                  'index': 85
                                },
                                'end': {
                                  'line': 4,
                                  'column': 32,
                                  'index': 101
                                }
                              },
                              'elementType': {
                                'type': 'TSTypeReference',
                                'start': 85,
                                'end': 99,
                                'loc': {
                                  'start': {
                                    'line': 4,
                                    'column': 16,
                                    'index': 85
                                  },
                                  'end': {
                                    'line': 4,
                                    'column': 30,
                                    'index': 99
                                  }
                                },
                                'typeName': {
                                  'type': 'Identifier',
                                  'start': 85,
                                  'end': 99,
                                  'loc': {
                                    'start': {
                                      'line': 4,
                                      'column': 16,
                                      'index': 85
                                    },
                                    'end': {
                                      'line': 4,
                                      'column': 30,
                                      'index': 99
                                    }
                                  },
                                  'name': 'ObjectProperty'
                                }
                              }
                            },
                            {
                              'type': 'TSTypeReference',
                              'start': 104,
                              'end': 115,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 35,
                                  'index': 104
                                },
                                'end': {
                                  'line': 4,
                                  'column': 46,
                                  'index': 115
                                }
                              },
                              'typeName': {
                                'type': 'Identifier',
                                'start': 104,
                                'end': 115,
                                'loc': {
                                  'start': {
                                    'line': 4,
                                    'column': 35,
                                    'index': 104
                                  },
                                  'end': {
                                    'line': 4,
                                    'column': 46,
                                    'index': 115
                                  }
                                },
                                'name': 'PropertyMap'
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      'type': 'TSParameterProperty',
                      'start': 121,
                      'end': 173,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 4,
                          'index': 121
                        },
                        'end': {
                          'line': 5,
                          'column': 56,
                          'index': 173
                        }
                      },
                      'accessibility': 'private',
                      'parameter': {
                        'type': 'Identifier',
                        'start': 129,
                        'end': 56,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 12,
                            'index': 129
                          },
                          'end': {
                            'line': 5,
                            'column': 56,
                            'index': 173
                          }
                        },
                        'name': 'prototypeExpression',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 148,
                          'end': 173,
                          'loc': {
                            'start': {
                              'line': 5,
                              'column': 31,
                              'index': 148
                            },
                            'end': {
                              'line': 5,
                              'column': 56,
                              'index': 173
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSUnionType',
                            'start': 150,
                            'end': 173,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 33,
                                'index': 150
                              },
                              'end': {
                                'line': 5,
                                'column': 56,
                                'index': 173
                              }
                            },
                            'types': [
                              {
                                'type': 'TSTypeReference',
                                'start': 150,
                                'end': 166,
                                'loc': {
                                  'start': {
                                    'line': 5,
                                    'column': 33,
                                    'index': 150
                                  },
                                  'end': {
                                    'line': 5,
                                    'column': 49,
                                    'index': 166
                                  }
                                },
                                'typeName': {
                                  'type': 'Identifier',
                                  'start': 150,
                                  'end': 166,
                                  'loc': {
                                    'start': {
                                      'line': 5,
                                      'column': 33,
                                      'index': 150
                                    },
                                    'end': {
                                      'line': 5,
                                      'column': 49,
                                      'index': 166
                                    }
                                  },
                                  'name': 'ExpressionEntity'
                                }
                              },
                              {
                                'type': 'TSNullKeyword',
                                'start': 169,
                                'end': 173,
                                'loc': {
                                  'start': {
                                    'line': 5,
                                    'column': 52,
                                    'index': 169
                                  },
                                  'end': {
                                    'line': 5,
                                    'column': 56,
                                    'index': 173
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      'type': 'TSParameterProperty',
                      'start': 179,
                      'end': 204,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 4,
                          'index': 179
                        },
                        'end': {
                          'line': 6,
                          'column': 29,
                          'index': 204
                        }
                      },
                      'accessibility': 'private',
                      'parameter': {
                        'type': 'AssignmentPattern',
                        'start': 179,
                        'end': 29,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 4,
                            'index': 179
                          },
                          'end': {
                            'line': 6,
                            'column': 29,
                            'index': 204
                          }
                        },
                        'left': {
                          'type': 'Identifier',
                          'start': 187,
                          'end': 196,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 12,
                              'index': 187
                            },
                            'end': {
                              'line': 6,
                              'column': 21,
                              'index': 196
                            }
                          },
                          'name': 'immutable'
                        },
                        'right': {
                          'type': 'Literal',
                          'start': 199,
                          'end': 204,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 24,
                              'index': 199
                            },
                            'end': {
                              'line': 6,
                              'column': 29,
                              'index': 204
                            }
                          },
                          'value': false,
                          'raw': 'false'
                        }
                      }
                    }
                  ],
                  'body': {
                    'type': 'BlockStatement',
                    'start': 209,
                    'end': 211,
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 4,
                        'index': 209
                      },
                      'end': {
                        'line': 7,
                        'column': 6,
                        'index': 211
                      }
                    },
                    'body': []
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
  Issue36: {
    'type': 'Program',
    'start': 0,
    'end': 1133,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 31,
        'column': 0,
        'index': 1133
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 1,
        'end': 1132,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 30,
            'column': 2,
            'index': 1132
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 7,
            'end': 1131,
            'loc': {
              'start': {
                'line': 2,
                'column': 6,
                'index': 7
              },
              'end': {
                'line': 30,
                'column': 1,
                'index': 1131
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 7,
              'end': 19,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 6,
                  'index': 7
                },
                'end': {
                  'line': 2,
                  'column': 18,
                  'index': 19
                }
              },
              'name': 'getIdMatcher'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 22,
              'end': 1131,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 21,
                  'index': 22
                },
                'end': {
                  'line': 30,
                  'column': 1,
                  'index': 1131
                }
              },
              'returnType': {
                'type': 'TSTypeAnnotation',
                'start': 281,
                'end': 326,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 1,
                    'index': 281
                  },
                  'end': {
                    'line': 10,
                    'column': 46,
                    'index': 326
                  }
                },
                'typeAnnotation': {
                  'type': 'TSParenthesizedType',
                  'start': 283,
                  'end': 326,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 3,
                      'index': 283
                    },
                    'end': {
                      'line': 10,
                      'column': 46,
                      'index': 326
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSFunctionType',
                    'start': 284,
                    'end': 325,
                    'loc': {
                      'start': {
                        'line': 10,
                        'column': 4,
                        'index': 284
                      },
                      'end': {
                        'line': 10,
                        'column': 45,
                        'index': 325
                      }
                    },
                    'parameters': [
                      {
                        'type': 'Identifier',
                        'start': 285,
                        'end': 15,
                        'loc': {
                          'start': {
                            'line': 10,
                            'column': 5,
                            'index': 285
                          },
                          'end': {
                            'line': 10,
                            'column': 15,
                            'index': 295
                          }
                        },
                        'name': 'id',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 287,
                          'end': 295,
                          'loc': {
                            'start': {
                              'line': 10,
                              'column': 7,
                              'index': 287
                            },
                            'end': {
                              'line': 10,
                              'column': 15,
                              'index': 295
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSStringKeyword',
                            'start': 289,
                            'end': 295,
                            'loc': {
                              'start': {
                                'line': 10,
                                'column': 9,
                                'index': 289
                              },
                              'end': {
                                'line': 10,
                                'column': 15,
                                'index': 295
                              }
                            }
                          }
                        }
                      },
                      {
                        'type': 'RestElement',
                        'start': 297,
                        'end': 33,
                        'loc': {
                          'start': {
                            'line': 10,
                            'column': 17,
                            'index': 297
                          },
                          'end': {
                            'line': 10,
                            'column': 33,
                            'index': 313
                          }
                        },
                        'argument': {
                          'type': 'Identifier',
                          'start': 300,
                          'end': 310,
                          'loc': {
                            'start': {
                              'line': 10,
                              'column': 20,
                              'index': 300
                            },
                            'end': {
                              'line': 10,
                              'column': 30,
                              'index': 310
                            }
                          },
                          'name': 'parameters'
                        },
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 310,
                          'end': 313,
                          'loc': {
                            'start': {
                              'line': 10,
                              'column': 30,
                              'index': 310
                            },
                            'end': {
                              'line': 10,
                              'column': 33,
                              'index': 313
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 312,
                            'end': 313,
                            'loc': {
                              'start': {
                                'line': 10,
                                'column': 32,
                                'index': 312
                              },
                              'end': {
                                'line': 10,
                                'column': 33,
                                'index': 313
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 312,
                              'end': 313,
                              'loc': {
                                'start': {
                                  'line': 10,
                                  'column': 32,
                                  'index': 312
                                },
                                'end': {
                                  'line': 10,
                                  'column': 33,
                                  'index': 313
                                }
                              },
                              'name': 'T'
                            }
                          }
                        }
                      }
                    ],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 315,
                      'end': 325,
                      'loc': {
                        'start': {
                          'line': 10,
                          'column': 35,
                          'index': 315
                        },
                        'end': {
                          'line': 10,
                          'column': 45,
                          'index': 325
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSBooleanKeyword',
                        'start': 318,
                        'end': 325,
                        'loc': {
                          'start': {
                            'line': 10,
                            'column': 38,
                            'index': 318
                          },
                          'end': {
                            'line': 10,
                            'column': 45,
                            'index': 325
                          }
                        }
                      }
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
                  'start': 54,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 8,
                      'index': 54
                    },
                    'end': 279
                  },
                  'name': 'option',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 60,
                    'end': 279,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 14,
                        'index': 60
                      },
                      'end': {
                        'line': 9,
                        'column': 75,
                        'index': 279
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSUnionType',
                      'start': 78,
                      'end': 279,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 16,
                          'index': 78
                        },
                        'end': {
                          'line': 9,
                          'column': 75,
                          'index': 279
                        }
                      },
                      'types': [
                        {
                          'type': 'TSUndefinedKeyword',
                          'start': 80,
                          'end': 89,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 18,
                              'index': 80
                            },
                            'end': {
                              'line': 4,
                              'column': 27,
                              'index': 89
                            }
                          }
                        },
                        {
                          'type': 'TSBooleanKeyword',
                          'start': 108,
                          'end': 115,
                          'loc': {
                            'start': {
                              'line': 5,
                              'column': 18,
                              'index': 108
                            },
                            'end': {
                              'line': 5,
                              'column': 25,
                              'index': 115
                            }
                          }
                        },
                        {
                          'type': 'TSStringKeyword',
                          'start': 134,
                          'end': 140,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 18,
                              'index': 134
                            },
                            'end': {
                              'line': 6,
                              'column': 24,
                              'index': 140
                            }
                          }
                        },
                        {
                          'type': 'TSTypeReference',
                          'start': 159,
                          'end': 165,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 18,
                              'index': 159
                            },
                            'end': {
                              'line': 7,
                              'column': 24,
                              'index': 165
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 159,
                            'end': 165,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 18,
                                'index': 159
                              },
                              'end': {
                                'line': 7,
                                'column': 24,
                                'index': 165
                              }
                            },
                            'name': 'RegExp'
                          }
                        },
                        {
                          'type': 'TSArrayType',
                          'start': 184,
                          'end': 203,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 18,
                              'index': 184
                            },
                            'end': {
                              'line': 8,
                              'column': 37,
                              'index': 203
                            }
                          },
                          'elementType': {
                            'type': 'TSParenthesizedType',
                            'start': 184,
                            'end': 201,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 18,
                                'index': 184
                              },
                              'end': {
                                'line': 8,
                                'column': 35,
                                'index': 201
                              }
                            },
                            'typeAnnotation': {
                              'type': 'TSUnionType',
                              'start': 185,
                              'end': 200,
                              'loc': {
                                'start': {
                                  'line': 8,
                                  'column': 19,
                                  'index': 185
                                },
                                'end': {
                                  'line': 8,
                                  'column': 34,
                                  'index': 200
                                }
                              },
                              'types': [
                                {
                                  'type': 'TSStringKeyword',
                                  'start': 185,
                                  'end': 191,
                                  'loc': {
                                    'start': {
                                      'line': 8,
                                      'column': 19,
                                      'index': 185
                                    },
                                    'end': {
                                      'line': 8,
                                      'column': 25,
                                      'index': 191
                                    }
                                  }
                                },
                                {
                                  'type': 'TSTypeReference',
                                  'start': 194,
                                  'end': 200,
                                  'loc': {
                                    'start': {
                                      'line': 8,
                                      'column': 28,
                                      'index': 194
                                    },
                                    'end': {
                                      'line': 8,
                                      'column': 34,
                                      'index': 200
                                    }
                                  },
                                  'typeName': {
                                    'type': 'Identifier',
                                    'start': 194,
                                    'end': 200,
                                    'loc': {
                                      'start': {
                                        'line': 8,
                                        'column': 28,
                                        'index': 194
                                      },
                                      'end': {
                                        'line': 8,
                                        'column': 34,
                                        'index': 200
                                      }
                                    },
                                    'name': 'RegExp'
                                  }
                                }
                              ]
                            }
                          }
                        },
                        {
                          'type': 'TSParenthesizedType',
                          'start': 222,
                          'end': 279,
                          'loc': {
                            'start': {
                              'line': 9,
                              'column': 18,
                              'index': 222
                            },
                            'end': {
                              'line': 9,
                              'column': 75,
                              'index': 279
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSFunctionType',
                            'start': 223,
                            'end': 278,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 19,
                                'index': 223
                              },
                              'end': {
                                'line': 9,
                                'column': 74,
                                'index': 278
                              }
                            },
                            'parameters': [
                              {
                                'type': 'Identifier',
                                'start': 224,
                                'end': 30,
                                'loc': {
                                  'start': {
                                    'line': 9,
                                    'column': 20,
                                    'index': 224
                                  },
                                  'end': {
                                    'line': 9,
                                    'column': 30,
                                    'index': 234
                                  }
                                },
                                'name': 'id',
                                'typeAnnotation': {
                                  'type': 'TSTypeAnnotation',
                                  'start': 226,
                                  'end': 234,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 22,
                                      'index': 226
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 30,
                                      'index': 234
                                    }
                                  },
                                  'typeAnnotation': {
                                    'type': 'TSStringKeyword',
                                    'start': 228,
                                    'end': 234,
                                    'loc': {
                                      'start': {
                                        'line': 9,
                                        'column': 24,
                                        'index': 228
                                      },
                                      'end': {
                                        'line': 9,
                                        'column': 30,
                                        'index': 234
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                'type': 'RestElement',
                                'start': 236,
                                'end': 48,
                                'loc': {
                                  'start': {
                                    'line': 9,
                                    'column': 32,
                                    'index': 236
                                  },
                                  'end': {
                                    'line': 9,
                                    'column': 48,
                                    'index': 252
                                  }
                                },
                                'argument': {
                                  'type': 'Identifier',
                                  'start': 239,
                                  'end': 249,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 35,
                                      'index': 239
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 45,
                                      'index': 249
                                    }
                                  },
                                  'name': 'parameters'
                                },
                                'typeAnnotation': {
                                  'type': 'TSTypeAnnotation',
                                  'start': 249,
                                  'end': 252,
                                  'loc': {
                                    'start': {
                                      'line': 9,
                                      'column': 45,
                                      'index': 249
                                    },
                                    'end': {
                                      'line': 9,
                                      'column': 48,
                                      'index': 252
                                    }
                                  },
                                  'typeAnnotation': {
                                    'type': 'TSTypeReference',
                                    'start': 251,
                                    'end': 252,
                                    'loc': {
                                      'start': {
                                        'line': 9,
                                        'column': 47,
                                        'index': 251
                                      },
                                      'end': {
                                        'line': 9,
                                        'column': 48,
                                        'index': 252
                                      }
                                    },
                                    'typeName': {
                                      'type': 'Identifier',
                                      'start': 251,
                                      'end': 252,
                                      'loc': {
                                        'start': {
                                          'line': 9,
                                          'column': 47,
                                          'index': 251
                                        },
                                        'end': {
                                          'line': 9,
                                          'column': 48,
                                          'index': 252
                                        }
                                      },
                                      'name': 'T'
                                    }
                                  }
                                }
                              }
                            ],
                            'typeAnnotation': {
                              'type': 'TSTypeAnnotation',
                              'start': 254,
                              'end': 278,
                              'loc': {
                                'start': {
                                  'line': 9,
                                  'column': 50,
                                  'index': 254
                                },
                                'end': {
                                  'line': 9,
                                  'column': 74,
                                  'index': 278
                                }
                              },
                              'typeAnnotation': {
                                'type': 'TSUnionType',
                                'start': 257,
                                'end': 278,
                                'loc': {
                                  'start': {
                                    'line': 9,
                                    'column': 53,
                                    'index': 257
                                  },
                                  'end': {
                                    'line': 9,
                                    'column': 74,
                                    'index': 278
                                  }
                                },
                                'types': [
                                  {
                                    'type': 'TSBooleanKeyword',
                                    'start': 257,
                                    'end': 264,
                                    'loc': {
                                      'start': {
                                        'line': 9,
                                        'column': 53,
                                        'index': 257
                                      },
                                      'end': {
                                        'line': 9,
                                        'column': 60,
                                        'index': 264
                                      }
                                    }
                                  },
                                  {
                                    'type': 'TSNullKeyword',
                                    'start': 267,
                                    'end': 271,
                                    'loc': {
                                      'start': {
                                        'line': 9,
                                        'column': 63,
                                        'index': 267
                                      },
                                      'end': {
                                        'line': 9,
                                        'column': 67,
                                        'index': 271
                                      }
                                    }
                                  },
                                  {
                                    'type': 'TSVoidKeyword',
                                    'start': 274,
                                    'end': 278,
                                    'loc': {
                                      'start': {
                                        'line': 9,
                                        'column': 70,
                                        'index': 274
                                      },
                                      'end': {
                                        'line': 9,
                                        'column': 74,
                                        'index': 278
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              'body': {
                'type': 'BlockStatement',
                'start': 330,
                'end': 1131,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 50,
                    'index': 330
                  },
                  'end': {
                    'line': 30,
                    'column': 1,
                    'index': 1131
                  }
                },
                'body': [
                  {
                    'type': 'IfStatement',
                    'start': 340,
                    'end': 407,
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 8,
                        'index': 340
                      },
                      'end': {
                        'line': 13,
                        'column': 9,
                        'index': 407
                      }
                    },
                    'test': {
                      'type': 'BinaryExpression',
                      'start': 344,
                      'end': 359,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 12,
                          'index': 344
                        },
                        'end': {
                          'line': 11,
                          'column': 27,
                          'index': 359
                        }
                      },
                      'left': {
                        'type': 'Identifier',
                        'start': 344,
                        'end': 350,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 12,
                            'index': 344
                          },
                          'end': {
                            'line': 11,
                            'column': 18,
                            'index': 350
                          }
                        },
                        'name': 'option'
                      },
                      'operator': '===',
                      'right': {
                        'type': 'Literal',
                        'start': 355,
                        'end': 359,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 23,
                            'index': 355
                          },
                          'end': {
                            'line': 11,
                            'column': 27,
                            'index': 359
                          }
                        },
                        'value': true,
                        'raw': 'true'
                      }
                    },
                    'consequent': {
                      'type': 'BlockStatement',
                      'start': 361,
                      'end': 407,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 29,
                          'index': 361
                        },
                        'end': {
                          'line': 13,
                          'column': 9,
                          'index': 407
                        }
                      },
                      'body': [
                        {
                          'type': 'ReturnStatement',
                          'start': 379,
                          'end': 397,
                          'loc': {
                            'start': {
                              'line': 12,
                              'column': 16,
                              'index': 379
                            },
                            'end': {
                              'line': 12,
                              'column': 34,
                              'index': 397
                            }
                          },
                          'argument': {
                            'type': 'ArrowFunctionExpression',
                            'start': 386,
                            'end': 396,
                            'loc': {
                              'start': {
                                'line': 12,
                                'column': 23,
                                'index': 386
                              },
                              'end': {
                                'line': 12,
                                'column': 33,
                                'index': 396
                              }
                            },
                            'id': null,
                            'expression': true,
                            'generator': false,
                            'async': false,
                            'params': [],
                            'body': {
                              'type': 'Literal',
                              'start': 392,
                              'end': 396,
                              'loc': {
                                'start': {
                                  'line': 12,
                                  'column': 29,
                                  'index': 392
                                },
                                'end': {
                                  'line': 12,
                                  'column': 33,
                                  'index': 396
                                }
                              },
                              'value': true,
                              'raw': 'true'
                            }
                          }
                        }
                      ]
                    },
                    'alternate': null
                  },
                  {
                    'type': 'IfStatement',
                    'start': 416,
                    'end': 569,
                    'loc': {
                      'start': {
                        'line': 14,
                        'column': 8,
                        'index': 416
                      },
                      'end': {
                        'line': 16,
                        'column': 9,
                        'index': 569
                      }
                    },
                    'test': {
                      'type': 'BinaryExpression',
                      'start': 420,
                      'end': 448,
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 12,
                          'index': 420
                        },
                        'end': {
                          'line': 14,
                          'column': 40,
                          'index': 448
                        }
                      },
                      'left': {
                        'type': 'UnaryExpression',
                        'start': 420,
                        'end': 433,
                        'loc': {
                          'start': {
                            'line': 14,
                            'column': 12,
                            'index': 420
                          },
                          'end': {
                            'line': 14,
                            'column': 25,
                            'index': 433
                          }
                        },
                        'operator': 'typeof',
                        'prefix': true,
                        'argument': {
                          'type': 'Identifier',
                          'start': 427,
                          'end': 433,
                          'loc': {
                            'start': {
                              'line': 14,
                              'column': 19,
                              'index': 427
                            },
                            'end': {
                              'line': 14,
                              'column': 25,
                              'index': 433
                            }
                          },
                          'name': 'option'
                        }
                      },
                      'operator': '===',
                      'right': {
                        'type': 'Literal',
                        'start': 438,
                        'end': 448,
                        'loc': {
                          'start': {
                            'line': 14,
                            'column': 30,
                            'index': 438
                          },
                          'end': {
                            'line': 14,
                            'column': 40,
                            'index': 448
                          }
                        },
                        'value': 'function',
                        'raw': '\'function\''
                      }
                    },
                    'consequent': {
                      'type': 'BlockStatement',
                      'start': 450,
                      'end': 569,
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 42,
                          'index': 450
                        },
                        'end': {
                          'line': 16,
                          'column': 9,
                          'index': 569
                        }
                      },
                      'body': [
                        {
                          'type': 'ReturnStatement',
                          'start': 468,
                          'end': 559,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 16,
                              'index': 468
                            },
                            'end': {
                              'line': 15,
                              'column': 107,
                              'index': 559
                            }
                          },
                          'argument': {
                            'type': 'ArrowFunctionExpression',
                            'start': 475,
                            'end': 558,
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 23,
                                'index': 475
                              },
                              'end': {
                                'line': 15,
                                'column': 106,
                                'index': 558
                              }
                            },
                            'id': null,
                            'expression': true,
                            'generator': false,
                            'async': false,
                            'params': [
                              {
                                'type': 'Identifier',
                                'start': 476,
                                'end': 478,
                                'loc': {
                                  'start': {
                                    'line': 15,
                                    'column': 24,
                                    'index': 476
                                  },
                                  'end': {
                                    'line': 15,
                                    'column': 26,
                                    'index': 478
                                  }
                                },
                                'name': 'id'
                              },
                              {
                                'type': 'RestElement',
                                'start': 480,
                                'end': 493,
                                'loc': {
                                  'start': {
                                    'line': 15,
                                    'column': 28,
                                    'index': 480
                                  },
                                  'end': {
                                    'line': 15,
                                    'column': 41,
                                    'index': 493
                                  }
                                },
                                'argument': {
                                  'type': 'Identifier',
                                  'start': 483,
                                  'end': 493,
                                  'loc': {
                                    'start': {
                                      'line': 15,
                                      'column': 31,
                                      'index': 483
                                    },
                                    'end': {
                                      'line': 15,
                                      'column': 41,
                                      'index': 493
                                    }
                                  },
                                  'name': 'parameters'
                                }
                              }
                            ],
                            'body': {
                              'type': 'LogicalExpression',
                              'start': 498,
                              'end': 558,
                              'loc': {
                                'start': {
                                  'line': 15,
                                  'column': 46,
                                  'index': 498
                                },
                                'end': {
                                  'line': 15,
                                  'column': 106,
                                  'index': 558
                                }
                              },
                              'left': {
                                'type': 'LogicalExpression',
                                'start': 499,
                                'end': 548,
                                'loc': {
                                  'start': {
                                    'line': 15,
                                    'column': 47,
                                    'index': 499
                                  },
                                  'end': {
                                    'line': 15,
                                    'column': 96,
                                    'index': 548
                                  }
                                },
                                'left': {
                                  'type': 'UnaryExpression',
                                  'start': 499,
                                  'end': 519,
                                  'loc': {
                                    'start': {
                                      'line': 15,
                                      'column': 47,
                                      'index': 499
                                    },
                                    'end': {
                                      'line': 15,
                                      'column': 67,
                                      'index': 519
                                    }
                                  },
                                  'operator': '!',
                                  'prefix': true,
                                  'argument': {
                                    'type': 'CallExpression',
                                    'start': 500,
                                    'end': 519,
                                    'loc': {
                                      'start': {
                                        'line': 15,
                                        'column': 48,
                                        'index': 500
                                      },
                                      'end': {
                                        'line': 15,
                                        'column': 67,
                                        'index': 519
                                      }
                                    },
                                    'callee': {
                                      'type': 'MemberExpression',
                                      'start': 500,
                                      'end': 513,
                                      'loc': {
                                        'start': {
                                          'line': 15,
                                          'column': 48,
                                          'index': 500
                                        },
                                        'end': {
                                          'line': 15,
                                          'column': 61,
                                          'index': 513
                                        }
                                      },
                                      'object': {
                                        'type': 'Identifier',
                                        'start': 500,
                                        'end': 502,
                                        'loc': {
                                          'start': {
                                            'line': 15,
                                            'column': 48,
                                            'index': 500
                                          },
                                          'end': {
                                            'line': 15,
                                            'column': 50,
                                            'index': 502
                                          }
                                        },
                                        'name': 'id'
                                      },
                                      'property': {
                                        'type': 'Identifier',
                                        'start': 503,
                                        'end': 513,
                                        'loc': {
                                          'start': {
                                            'line': 15,
                                            'column': 51,
                                            'index': 503
                                          },
                                          'end': {
                                            'line': 15,
                                            'column': 61,
                                            'index': 513
                                          }
                                        },
                                        'name': 'startsWith'
                                      },
                                      'computed': false,
                                      'optional': false
                                    },
                                    'arguments': [
                                      {
                                        'type': 'Literal',
                                        'start': 514,
                                        'end': 518,
                                        'loc': {
                                          'start': {
                                            'line': 15,
                                            'column': 62,
                                            'index': 514
                                          },
                                          'end': {
                                            'line': 15,
                                            'column': 66,
                                            'index': 518
                                          }
                                        },
                                        'value': '\u0000',
                                        'raw': '\'\\0\''
                                      }
                                    ],
                                    'optional': false
                                  }
                                },
                                'operator': '&&',
                                'right': {
                                  'type': 'CallExpression',
                                  'start': 523,
                                  'end': 548,
                                  'loc': {
                                    'start': {
                                      'line': 15,
                                      'column': 71,
                                      'index': 523
                                    },
                                    'end': {
                                      'line': 15,
                                      'column': 96,
                                      'index': 548
                                    }
                                  },
                                  'callee': {
                                    'type': 'Identifier',
                                    'start': 523,
                                    'end': 529,
                                    'loc': {
                                      'start': {
                                        'line': 15,
                                        'column': 71,
                                        'index': 523
                                      },
                                      'end': {
                                        'line': 15,
                                        'column': 77,
                                        'index': 529
                                      }
                                    },
                                    'name': 'option'
                                  },
                                  'arguments': [
                                    {
                                      'type': 'Identifier',
                                      'start': 530,
                                      'end': 532,
                                      'loc': {
                                        'start': {
                                          'line': 15,
                                          'column': 78,
                                          'index': 530
                                        },
                                        'end': {
                                          'line': 15,
                                          'column': 80,
                                          'index': 532
                                        }
                                      },
                                      'name': 'id'
                                    },
                                    {
                                      'type': 'SpreadElement',
                                      'start': 534,
                                      'end': 547,
                                      'loc': {
                                        'start': {
                                          'line': 15,
                                          'column': 82,
                                          'index': 534
                                        },
                                        'end': {
                                          'line': 15,
                                          'column': 95,
                                          'index': 547
                                        }
                                      },
                                      'argument': {
                                        'type': 'Identifier',
                                        'start': 537,
                                        'end': 547,
                                        'loc': {
                                          'start': {
                                            'line': 15,
                                            'column': 85,
                                            'index': 537
                                          },
                                          'end': {
                                            'line': 15,
                                            'column': 95,
                                            'index': 547
                                          }
                                        },
                                        'name': 'parameters'
                                      }
                                    }
                                  ],
                                  'optional': false
                                }
                              },
                              'operator': '||',
                              'right': {
                                'type': 'Literal',
                                'start': 553,
                                'end': 558,
                                'loc': {
                                  'start': {
                                    'line': 15,
                                    'column': 101,
                                    'index': 553
                                  },
                                  'end': {
                                    'line': 15,
                                    'column': 106,
                                    'index': 558
                                  }
                                },
                                'value': false,
                                'raw': 'false'
                              }
                            }
                          }
                        }
                      ]
                    },
                    'alternate': null
                  },
                  {
                    'type': 'IfStatement',
                    'start': 578,
                    'end': 1101,
                    'loc': {
                      'start': {
                        'line': 17,
                        'column': 8,
                        'index': 578
                      },
                      'end': {
                        'line': 28,
                        'column': 9,
                        'index': 1101
                      }
                    },
                    'test': {
                      'type': 'Identifier',
                      'start': 582,
                      'end': 588,
                      'loc': {
                        'start': {
                          'line': 17,
                          'column': 12,
                          'index': 582
                        },
                        'end': {
                          'line': 17,
                          'column': 18,
                          'index': 588
                        }
                      },
                      'name': 'option'
                    },
                    'consequent': {
                      'type': 'BlockStatement',
                      'start': 590,
                      'end': 1101,
                      'loc': {
                        'start': {
                          'line': 17,
                          'column': 20,
                          'index': 590
                        },
                        'end': {
                          'line': 28,
                          'column': 9,
                          'index': 1101
                        }
                      },
                      'body': [
                        {
                          'type': 'VariableDeclaration',
                          'start': 608,
                          'end': 638,
                          'loc': {
                            'start': {
                              'line': 18,
                              'column': 16,
                              'index': 608
                            },
                            'end': {
                              'line': 18,
                              'column': 46,
                              'index': 638
                            }
                          },
                          'declarations': [
                            {
                              'type': 'VariableDeclarator',
                              'start': 614,
                              'end': 637,
                              'loc': {
                                'start': {
                                  'line': 18,
                                  'column': 22,
                                  'index': 614
                                },
                                'end': {
                                  'line': 18,
                                  'column': 45,
                                  'index': 637
                                }
                              },
                              'id': {
                                'type': 'Identifier',
                                'start': 614,
                                'end': 617,
                                'loc': {
                                  'start': {
                                    'line': 18,
                                    'column': 22,
                                    'index': 614
                                  },
                                  'end': {
                                    'line': 18,
                                    'column': 25,
                                    'index': 617
                                  }
                                },
                                'name': 'ids'
                              },
                              'init': {
                                'type': 'NewExpression',
                                'start': 620,
                                'end': 637,
                                'loc': {
                                  'start': {
                                    'line': 18,
                                    'column': 28,
                                    'index': 620
                                  },
                                  'end': {
                                    'line': 18,
                                    'column': 45,
                                    'index': 637
                                  }
                                },
                                'callee': {
                                  'type': 'Identifier',
                                  'start': 624,
                                  'end': 627,
                                  'loc': {
                                    'start': {
                                      'line': 18,
                                      'column': 32,
                                      'index': 624
                                    },
                                    'end': {
                                      'line': 18,
                                      'column': 35,
                                      'index': 627
                                    }
                                  },
                                  'name': 'Set'
                                },
                                'typeParameters': {
                                  'type': 'TSTypeParameterInstantiation',
                                  'start': 627,
                                  'end': 635,
                                  'loc': {
                                    'start': {
                                      'line': 18,
                                      'column': 35,
                                      'index': 627
                                    },
                                    'end': {
                                      'line': 18,
                                      'column': 43,
                                      'index': 635
                                    }
                                  },
                                  'params': [
                                    {
                                      'type': 'TSStringKeyword',
                                      'start': 628,
                                      'end': 634,
                                      'loc': {
                                        'start': {
                                          'line': 18,
                                          'column': 36,
                                          'index': 628
                                        },
                                        'end': {
                                          'line': 18,
                                          'column': 42,
                                          'index': 634
                                        }
                                      }
                                    }
                                  ]
                                },
                                'arguments': []
                              }
                            }
                          ],
                          'kind': 'const'
                        },
                        {
                          'type': 'VariableDeclaration',
                          'start': 655,
                          'end': 685,
                          'loc': {
                            'start': {
                              'line': 19,
                              'column': 16,
                              'index': 655
                            },
                            'end': {
                              'line': 19,
                              'column': 46,
                              'index': 685
                            }
                          },
                          'declarations': [
                            {
                              'type': 'VariableDeclarator',
                              'start': 661,
                              'end': 684,
                              'loc': {
                                'start': {
                                  'line': 19,
                                  'column': 22,
                                  'index': 661
                                },
                                'end': {
                                  'line': 19,
                                  'column': 45,
                                  'index': 684
                                }
                              },
                              'id': {
                                'type': 'Identifier',
                                'start': 661,
                                'end': 40,
                                'loc': {
                                  'start': {
                                    'line': 19,
                                    'column': 22,
                                    'index': 661
                                  },
                                  'end': {
                                    'line': 19,
                                    'column': 40,
                                    'index': 679
                                  }
                                },
                                'name': 'matchers',
                                'typeAnnotation': {
                                  'type': 'TSTypeAnnotation',
                                  'start': 669,
                                  'end': 679,
                                  'loc': {
                                    'start': {
                                      'line': 19,
                                      'column': 30,
                                      'index': 669
                                    },
                                    'end': {
                                      'line': 19,
                                      'column': 40,
                                      'index': 679
                                    }
                                  },
                                  'typeAnnotation': {
                                    'type': 'TSArrayType',
                                    'start': 671,
                                    'end': 679,
                                    'loc': {
                                      'start': {
                                        'line': 19,
                                        'column': 32,
                                        'index': 671
                                      },
                                      'end': {
                                        'line': 19,
                                        'column': 40,
                                        'index': 679
                                      }
                                    },
                                    'elementType': {
                                      'type': 'TSTypeReference',
                                      'start': 671,
                                      'end': 677,
                                      'loc': {
                                        'start': {
                                          'line': 19,
                                          'column': 32,
                                          'index': 671
                                        },
                                        'end': {
                                          'line': 19,
                                          'column': 38,
                                          'index': 677
                                        }
                                      },
                                      'typeName': {
                                        'type': 'Identifier',
                                        'start': 671,
                                        'end': 677,
                                        'loc': {
                                          'start': {
                                            'line': 19,
                                            'column': 32,
                                            'index': 671
                                          },
                                          'end': {
                                            'line': 19,
                                            'column': 38,
                                            'index': 677
                                          }
                                        },
                                        'name': 'RegExp'
                                      }
                                    }
                                  }
                                }
                              },
                              'init': {
                                'type': 'ArrayExpression',
                                'start': 682,
                                'end': 684,
                                'loc': {
                                  'start': {
                                    'line': 19,
                                    'column': 43,
                                    'index': 682
                                  },
                                  'end': {
                                    'line': 19,
                                    'column': 45,
                                    'index': 684
                                  }
                                },
                                'elements': []
                              }
                            }
                          ],
                          'kind': 'const'
                        },
                        {
                          'type': 'ForOfStatement',
                          'start': 702,
                          'end': 978,
                          'loc': {
                            'start': {
                              'line': 20,
                              'column': 16,
                              'index': 702
                            },
                            'end': {
                              'line': 26,
                              'column': 17,
                              'index': 978
                            }
                          },
                          'await': false,
                          'left': {
                            'type': 'VariableDeclaration',
                            'start': 707,
                            'end': 718,
                            'loc': {
                              'start': {
                                'line': 20,
                                'column': 21,
                                'index': 707
                              },
                              'end': {
                                'line': 20,
                                'column': 32,
                                'index': 718
                              }
                            },
                            'declarations': [
                              {
                                'type': 'VariableDeclarator',
                                'start': 713,
                                'end': 718,
                                'loc': {
                                  'start': {
                                    'line': 20,
                                    'column': 27,
                                    'index': 713
                                  },
                                  'end': {
                                    'line': 20,
                                    'column': 32,
                                    'index': 718
                                  }
                                },
                                'id': {
                                  'type': 'Identifier',
                                  'start': 713,
                                  'end': 718,
                                  'loc': {
                                    'start': {
                                      'line': 20,
                                      'column': 27,
                                      'index': 713
                                    },
                                    'end': {
                                      'line': 20,
                                      'column': 32,
                                      'index': 718
                                    }
                                  },
                                  'name': 'value'
                                },
                                'init': null
                              }
                            ],
                            'kind': 'const'
                          },
                          'right': {
                            'type': 'CallExpression',
                            'start': 722,
                            'end': 741,
                            'loc': {
                              'start': {
                                'line': 20,
                                'column': 36,
                                'index': 722
                              },
                              'end': {
                                'line': 20,
                                'column': 55,
                                'index': 741
                              }
                            },
                            'callee': {
                              'type': 'Identifier',
                              'start': 722,
                              'end': 733,
                              'loc': {
                                'start': {
                                  'line': 20,
                                  'column': 36,
                                  'index': 722
                                },
                                'end': {
                                  'line': 20,
                                  'column': 47,
                                  'index': 733
                                }
                              },
                              'name': 'ensureArray'
                            },
                            'arguments': [
                              {
                                'type': 'Identifier',
                                'start': 734,
                                'end': 740,
                                'loc': {
                                  'start': {
                                    'line': 20,
                                    'column': 48,
                                    'index': 734
                                  },
                                  'end': {
                                    'line': 20,
                                    'column': 54,
                                    'index': 740
                                  }
                                },
                                'name': 'option'
                              }
                            ],
                            'optional': false
                          },
                          'body': {
                            'type': 'BlockStatement',
                            'start': 743,
                            'end': 978,
                            'loc': {
                              'start': {
                                'line': 20,
                                'column': 57,
                                'index': 743
                              },
                              'end': {
                                'line': 26,
                                'column': 17,
                                'index': 978
                              }
                            },
                            'body': [
                              {
                                'type': 'IfStatement',
                                'start': 769,
                                'end': 960,
                                'loc': {
                                  'start': {
                                    'line': 21,
                                    'column': 24,
                                    'index': 769
                                  },
                                  'end': {
                                    'line': 25,
                                    'column': 25,
                                    'index': 960
                                  }
                                },
                                'test': {
                                  'type': 'BinaryExpression',
                                  'start': 773,
                                  'end': 796,
                                  'loc': {
                                    'start': {
                                      'line': 21,
                                      'column': 28,
                                      'index': 773
                                    },
                                    'end': {
                                      'line': 21,
                                      'column': 51,
                                      'index': 796
                                    }
                                  },
                                  'left': {
                                    'type': 'Identifier',
                                    'start': 773,
                                    'end': 778,
                                    'loc': {
                                      'start': {
                                        'line': 21,
                                        'column': 28,
                                        'index': 773
                                      },
                                      'end': {
                                        'line': 21,
                                        'column': 33,
                                        'index': 778
                                      }
                                    },
                                    'name': 'value'
                                  },
                                  'operator': 'instanceof',
                                  'right': {
                                    'type': 'Identifier',
                                    'start': 790,
                                    'end': 796,
                                    'loc': {
                                      'start': {
                                        'line': 21,
                                        'column': 45,
                                        'index': 790
                                      },
                                      'end': {
                                        'line': 21,
                                        'column': 51,
                                        'index': 796
                                      }
                                    },
                                    'name': 'RegExp'
                                  }
                                },
                                'consequent': {
                                  'type': 'BlockStatement',
                                  'start': 798,
                                  'end': 879,
                                  'loc': {
                                    'start': {
                                      'line': 21,
                                      'column': 53,
                                      'index': 798
                                    },
                                    'end': {
                                      'line': 23,
                                      'column': 25,
                                      'index': 879
                                    }
                                  },
                                  'body': [
                                    {
                                      'type': 'ExpressionStatement',
                                      'start': 832,
                                      'end': 853,
                                      'loc': {
                                        'start': {
                                          'line': 22,
                                          'column': 32,
                                          'index': 832
                                        },
                                        'end': {
                                          'line': 22,
                                          'column': 53,
                                          'index': 853
                                        }
                                      },
                                      'expression': {
                                        'type': 'CallExpression',
                                        'start': 832,
                                        'end': 852,
                                        'loc': {
                                          'start': {
                                            'line': 22,
                                            'column': 32,
                                            'index': 832
                                          },
                                          'end': {
                                            'line': 22,
                                            'column': 52,
                                            'index': 852
                                          }
                                        },
                                        'callee': {
                                          'type': 'MemberExpression',
                                          'start': 832,
                                          'end': 845,
                                          'loc': {
                                            'start': {
                                              'line': 22,
                                              'column': 32,
                                              'index': 832
                                            },
                                            'end': {
                                              'line': 22,
                                              'column': 45,
                                              'index': 845
                                            }
                                          },
                                          'object': {
                                            'type': 'Identifier',
                                            'start': 832,
                                            'end': 840,
                                            'loc': {
                                              'start': {
                                                'line': 22,
                                                'column': 32,
                                                'index': 832
                                              },
                                              'end': {
                                                'line': 22,
                                                'column': 40,
                                                'index': 840
                                              }
                                            },
                                            'name': 'matchers'
                                          },
                                          'property': {
                                            'type': 'Identifier',
                                            'start': 841,
                                            'end': 845,
                                            'loc': {
                                              'start': {
                                                'line': 22,
                                                'column': 41,
                                                'index': 841
                                              },
                                              'end': {
                                                'line': 22,
                                                'column': 45,
                                                'index': 845
                                              }
                                            },
                                            'name': 'push'
                                          },
                                          'computed': false,
                                          'optional': false
                                        },
                                        'arguments': [
                                          {
                                            'type': 'Identifier',
                                            'start': 846,
                                            'end': 851,
                                            'loc': {
                                              'start': {
                                                'line': 22,
                                                'column': 46,
                                                'index': 846
                                              },
                                              'end': {
                                                'line': 22,
                                                'column': 51,
                                                'index': 851
                                              }
                                            },
                                            'name': 'value'
                                          }
                                        ],
                                        'optional': false
                                      }
                                    }
                                  ]
                                },
                                'alternate': {
                                  'type': 'BlockStatement',
                                  'start': 885,
                                  'end': 960,
                                  'loc': {
                                    'start': {
                                      'line': 23,
                                      'column': 31,
                                      'index': 885
                                    },
                                    'end': {
                                      'line': 25,
                                      'column': 25,
                                      'index': 960
                                    }
                                  },
                                  'body': [
                                    {
                                      'type': 'ExpressionStatement',
                                      'start': 919,
                                      'end': 934,
                                      'loc': {
                                        'start': {
                                          'line': 24,
                                          'column': 32,
                                          'index': 919
                                        },
                                        'end': {
                                          'line': 24,
                                          'column': 47,
                                          'index': 934
                                        }
                                      },
                                      'expression': {
                                        'type': 'CallExpression',
                                        'start': 919,
                                        'end': 933,
                                        'loc': {
                                          'start': {
                                            'line': 24,
                                            'column': 32,
                                            'index': 919
                                          },
                                          'end': {
                                            'line': 24,
                                            'column': 46,
                                            'index': 933
                                          }
                                        },
                                        'callee': {
                                          'type': 'MemberExpression',
                                          'start': 919,
                                          'end': 926,
                                          'loc': {
                                            'start': {
                                              'line': 24,
                                              'column': 32,
                                              'index': 919
                                            },
                                            'end': {
                                              'line': 24,
                                              'column': 39,
                                              'index': 926
                                            }
                                          },
                                          'object': {
                                            'type': 'Identifier',
                                            'start': 919,
                                            'end': 922,
                                            'loc': {
                                              'start': {
                                                'line': 24,
                                                'column': 32,
                                                'index': 919
                                              },
                                              'end': {
                                                'line': 24,
                                                'column': 35,
                                                'index': 922
                                              }
                                            },
                                            'name': 'ids'
                                          },
                                          'property': {
                                            'type': 'Identifier',
                                            'start': 923,
                                            'end': 926,
                                            'loc': {
                                              'start': {
                                                'line': 24,
                                                'column': 36,
                                                'index': 923
                                              },
                                              'end': {
                                                'line': 24,
                                                'column': 39,
                                                'index': 926
                                              }
                                            },
                                            'name': 'add'
                                          },
                                          'computed': false,
                                          'optional': false
                                        },
                                        'arguments': [
                                          {
                                            'type': 'Identifier',
                                            'start': 927,
                                            'end': 932,
                                            'loc': {
                                              'start': {
                                                'line': 24,
                                                'column': 40,
                                                'index': 927
                                              },
                                              'end': {
                                                'line': 24,
                                                'column': 45,
                                                'index': 932
                                              }
                                            },
                                            'name': 'value'
                                          }
                                        ],
                                        'optional': false
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          'type': 'ReturnStatement',
                          'start': 995,
                          'end': 1091,
                          'loc': {
                            'start': {
                              'line': 27,
                              'column': 16,
                              'index': 995
                            },
                            'end': {
                              'line': 27,
                              'column': 112,
                              'index': 1091
                            }
                          },
                          'argument': {
                            'type': 'ArrowFunctionExpression',
                            'start': 1002,
                            'end': 1090,
                            'loc': {
                              'start': {
                                'line': 27,
                                'column': 23,
                                'index': 1002
                              },
                              'end': {
                                'line': 27,
                                'column': 111,
                                'index': 1090
                              }
                            },
                            'id': null,
                            'expression': true,
                            'generator': false,
                            'async': false,
                            'params': [
                              {
                                'type': 'Identifier',
                                'start': 1003,
                                'loc': {
                                  'start': {
                                    'line': 27,
                                    'column': 24,
                                    'index': 1003
                                  },
                                  'end': 1013
                                },
                                'name': 'id',
                                'typeAnnotation': {
                                  'type': 'TSTypeAnnotation',
                                  'start': 1005,
                                  'end': 1013,
                                  'loc': {
                                    'start': {
                                      'line': 27,
                                      'column': 26,
                                      'index': 1005
                                    },
                                    'end': {
                                      'line': 27,
                                      'column': 34,
                                      'index': 1013
                                    }
                                  },
                                  'typeAnnotation': {
                                    'type': 'TSStringKeyword',
                                    'start': 1007,
                                    'end': 1013,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 28,
                                        'index': 1007
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 34,
                                        'index': 1013
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                'type': 'RestElement',
                                'start': 1015,
                                'end': 1028,
                                'loc': {
                                  'start': {
                                    'line': 27,
                                    'column': 36,
                                    'index': 1015
                                  },
                                  'end': {
                                    'line': 27,
                                    'column': 49,
                                    'index': 1028
                                  }
                                },
                                'argument': {
                                  'type': 'Identifier',
                                  'start': 1018,
                                  'end': 1028,
                                  'loc': {
                                    'start': {
                                      'line': 27,
                                      'column': 39,
                                      'index': 1018
                                    },
                                    'end': {
                                      'line': 27,
                                      'column': 49,
                                      'index': 1028
                                    }
                                  },
                                  'name': '_arguments'
                                }
                              }
                            ],
                            'body': {
                              'type': 'LogicalExpression',
                              'start': 1033,
                              'end': 1090,
                              'loc': {
                                'start': {
                                  'line': 27,
                                  'column': 54,
                                  'index': 1033
                                },
                                'end': {
                                  'line': 27,
                                  'column': 111,
                                  'index': 1090
                                }
                              },
                              'left': {
                                'type': 'CallExpression',
                                'start': 1033,
                                'end': 1044,
                                'loc': {
                                  'start': {
                                    'line': 27,
                                    'column': 54,
                                    'index': 1033
                                  },
                                  'end': {
                                    'line': 27,
                                    'column': 65,
                                    'index': 1044
                                  }
                                },
                                'callee': {
                                  'type': 'MemberExpression',
                                  'start': 1033,
                                  'end': 1040,
                                  'loc': {
                                    'start': {
                                      'line': 27,
                                      'column': 54,
                                      'index': 1033
                                    },
                                    'end': {
                                      'line': 27,
                                      'column': 61,
                                      'index': 1040
                                    }
                                  },
                                  'object': {
                                    'type': 'Identifier',
                                    'start': 1033,
                                    'end': 1036,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 54,
                                        'index': 1033
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 57,
                                        'index': 1036
                                      }
                                    },
                                    'name': 'ids'
                                  },
                                  'property': {
                                    'type': 'Identifier',
                                    'start': 1037,
                                    'end': 1040,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 58,
                                        'index': 1037
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 61,
                                        'index': 1040
                                      }
                                    },
                                    'name': 'has'
                                  },
                                  'computed': false,
                                  'optional': false
                                },
                                'arguments': [
                                  {
                                    'type': 'Identifier',
                                    'start': 1041,
                                    'end': 1043,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 62,
                                        'index': 1041
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 64,
                                        'index': 1043
                                      }
                                    },
                                    'name': 'id'
                                  }
                                ],
                                'optional': false
                              },
                              'operator': '||',
                              'right': {
                                'type': 'CallExpression',
                                'start': 1048,
                                'end': 1090,
                                'loc': {
                                  'start': {
                                    'line': 27,
                                    'column': 69,
                                    'index': 1048
                                  },
                                  'end': {
                                    'line': 27,
                                    'column': 111,
                                    'index': 1090
                                  }
                                },
                                'callee': {
                                  'type': 'MemberExpression',
                                  'start': 1048,
                                  'end': 1061,
                                  'loc': {
                                    'start': {
                                      'line': 27,
                                      'column': 69,
                                      'index': 1048
                                    },
                                    'end': {
                                      'line': 27,
                                      'column': 82,
                                      'index': 1061
                                    }
                                  },
                                  'object': {
                                    'type': 'Identifier',
                                    'start': 1048,
                                    'end': 1056,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 69,
                                        'index': 1048
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 77,
                                        'index': 1056
                                      }
                                    },
                                    'name': 'matchers'
                                  },
                                  'property': {
                                    'type': 'Identifier',
                                    'start': 1057,
                                    'end': 1061,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 78,
                                        'index': 1057
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 82,
                                        'index': 1061
                                      }
                                    },
                                    'name': 'some'
                                  },
                                  'computed': false,
                                  'optional': false
                                },
                                'arguments': [
                                  {
                                    'type': 'ArrowFunctionExpression',
                                    'start': 1062,
                                    'end': 1089,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 83,
                                        'index': 1062
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 110,
                                        'index': 1089
                                      }
                                    },
                                    'id': null,
                                    'expression': true,
                                    'generator': false,
                                    'async': false,
                                    'params': [
                                      {
                                        'type': 'Identifier',
                                        'start': 1062,
                                        'end': 1069,
                                        'loc': {
                                          'start': {
                                            'line': 27,
                                            'column': 83,
                                            'index': 1062
                                          },
                                          'end': {
                                            'line': 27,
                                            'column': 90,
                                            'index': 1069
                                          }
                                        },
                                        'name': 'matcher'
                                      }
                                    ],
                                    'body': {
                                      'type': 'CallExpression',
                                      'start': 1073,
                                      'end': 1089,
                                      'loc': {
                                        'start': {
                                          'line': 27,
                                          'column': 94,
                                          'index': 1073
                                        },
                                        'end': {
                                          'line': 27,
                                          'column': 110,
                                          'index': 1089
                                        }
                                      },
                                      'callee': {
                                        'type': 'MemberExpression',
                                        'start': 1073,
                                        'end': 1085,
                                        'loc': {
                                          'start': {
                                            'line': 27,
                                            'column': 94,
                                            'index': 1073
                                          },
                                          'end': {
                                            'line': 27,
                                            'column': 106,
                                            'index': 1085
                                          }
                                        },
                                        'object': {
                                          'type': 'Identifier',
                                          'start': 1073,
                                          'end': 1080,
                                          'loc': {
                                            'start': {
                                              'line': 27,
                                              'column': 94,
                                              'index': 1073
                                            },
                                            'end': {
                                              'line': 27,
                                              'column': 101,
                                              'index': 1080
                                            }
                                          },
                                          'name': 'matcher'
                                        },
                                        'property': {
                                          'type': 'Identifier',
                                          'start': 1081,
                                          'end': 1085,
                                          'loc': {
                                            'start': {
                                              'line': 27,
                                              'column': 102,
                                              'index': 1081
                                            },
                                            'end': {
                                              'line': 27,
                                              'column': 106,
                                              'index': 1085
                                            }
                                          },
                                          'name': 'test'
                                        },
                                        'computed': false,
                                        'optional': false
                                      },
                                      'arguments': [
                                        {
                                          'type': 'Identifier',
                                          'start': 1086,
                                          'end': 1088,
                                          'loc': {
                                            'start': {
                                              'line': 27,
                                              'column': 107,
                                              'index': 1086
                                            },
                                            'end': {
                                              'line': 27,
                                              'column': 109,
                                              'index': 1088
                                            }
                                          },
                                          'name': 'id'
                                        }
                                      ],
                                      'optional': false
                                    }
                                  }
                                ],
                                'optional': false
                              }
                            }
                          }
                        }
                      ]
                    },
                    'alternate': null
                  },
                  {
                    'type': 'ReturnStatement',
                    'start': 1110,
                    'end': 1129,
                    'loc': {
                      'start': {
                        'line': 29,
                        'column': 8,
                        'index': 1110
                      },
                      'end': {
                        'line': 29,
                        'column': 27,
                        'index': 1129
                      }
                    },
                    'argument': {
                      'type': 'ArrowFunctionExpression',
                      'start': 1117,
                      'end': 1128,
                      'loc': {
                        'start': {
                          'line': 29,
                          'column': 15,
                          'index': 1117
                        },
                        'end': {
                          'line': 29,
                          'column': 26,
                          'index': 1128
                        }
                      },
                      'id': null,
                      'expression': true,
                      'generator': false,
                      'async': false,
                      'params': [],
                      'body': {
                        'type': 'Literal',
                        'start': 1123,
                        'end': 1128,
                        'loc': {
                          'start': {
                            'line': 29,
                            'column': 21,
                            'index': 1123
                          },
                          'end': {
                            'line': 29,
                            'column': 26,
                            'index': 1128
                          }
                        },
                        'value': false,
                        'raw': 'false'
                      }
                    }
                  }
                ]
              },
              'typeParameters': {
                'type': 'TSTypeParameterDeclaration',
                'start': 22,
                'end': 44,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 21,
                    'index': 22
                  },
                  'end': {
                    'line': 2,
                    'column': 43,
                    'index': 44
                  }
                },
                'params': [
                  {
                    'type': 'TSTypeParameter',
                    'start': 23,
                    'end': 43,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 22,
                        'index': 23
                      },
                      'end': {
                        'line': 2,
                        'column': 42,
                        'index': 43
                      }
                    },
                    'name': 'T',
                    'constraint': {
                      'type': 'TSTypeReference',
                      'start': 33,
                      'end': 43,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 32,
                          'index': 33
                        },
                        'end': {
                          'line': 2,
                          'column': 42,
                          'index': 43
                        }
                      },
                      'typeName': {
                        'type': 'Identifier',
                        'start': 33,
                        'end': 38,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 32,
                            'index': 33
                          },
                          'end': {
                            'line': 2,
                            'column': 37,
                            'index': 38
                          }
                        },
                        'name': 'Array'
                      },
                      'typeParameters': {
                        'type': 'TSTypeParameterInstantiation',
                        'start': 38,
                        'end': 43,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 37,
                            'index': 38
                          },
                          'end': {
                            'line': 2,
                            'column': 42,
                            'index': 43
                          }
                        },
                        'params': [
                          {
                            'type': 'TSAnyKeyword',
                            'start': 39,
                            'end': 42,
                            'loc': {
                              'start': {
                                'line': 2,
                                'column': 38,
                                'index': 39
                              },
                              'end': {
                                'line': 2,
                                'column': 41,
                                'index': 42
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
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  Issue35: {
    'type': 'Program',
    'start': 0,
    'end': 1682,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 35,
        'column': 0,
        'index': 1682
      }
    },
    'body': [
      {
        'type': 'ExportNamedDeclaration',
        'start': 1,
        'end': 1681,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 34,
            'column': 1,
            'index': 1681
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'ClassDeclaration',
          'start': 8,
          'end': 1681,
          'loc': {
            'start': {
              'line': 2,
              'column': 7,
              'index': 8
            },
            'end': {
              'line': 34,
              'column': 1,
              'index': 1681
            }
          },
          'id': {
            'type': 'Identifier',
            'start': 14,
            'end': 26,
            'loc': {
              'start': {
                'line': 2,
                'column': 13,
                'index': 14
              },
              'end': {
                'line': 2,
                'column': 25,
                'index': 26
              }
            },
            'name': 'PluginDriver'
          },
          'superClass': null,
          'body': {
            'type': 'ClassBody',
            'start': 27,
            'end': 1681,
            'loc': {
              'start': {
                'line': 2,
                'column': 26,
                'index': 27
              },
              'end': {
                'line': 34,
                'column': 1,
                'index': 1681
              }
            },
            'body': [
              {
                'type': 'PropertyDefinition',
                'start': 37,
                'end': 72,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 8,
                    'index': 37
                  },
                  'end': {
                    'line': 3,
                    'column': 43,
                    'index': 72
                  }
                },
                'accessibility': 'public',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 53,
                  'end': 61,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 24,
                      'index': 53
                    },
                    'end': {
                      'line': 3,
                      'column': 32,
                      'index': 61
                    }
                  },
                  'name': 'emitFile'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 61,
                  'end': 71,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 32,
                      'index': 61
                    },
                    'end': {
                      'line': 3,
                      'column': 42,
                      'index': 71
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 63,
                    'end': 71,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 34,
                        'index': 63
                      },
                      'end': {
                        'line': 3,
                        'column': 42,
                        'index': 71
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 63,
                      'end': 71,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 34,
                          'index': 63
                        },
                        'end': {
                          'line': 3,
                          'column': 42,
                          'index': 71
                        }
                      },
                      'name': 'EmitFile'
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 81,
                'end': 115,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 8,
                    'index': 81
                  },
                  'end': {
                    'line': 4,
                    'column': 42,
                    'index': 115
                  }
                },
                'accessibility': 'public',
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 88,
                  'end': 102,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 15,
                      'index': 88
                    },
                    'end': {
                      'line': 4,
                      'column': 29,
                      'index': 102
                    }
                  },
                  'name': 'finaliseAssets'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 102,
                  'end': 114,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 29,
                      'index': 102
                    },
                    'end': {
                      'line': 4,
                      'column': 41,
                      'index': 114
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSFunctionType',
                    'start': 104,
                    'end': 114,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 31,
                        'index': 104
                      },
                      'end': {
                        'line': 4,
                        'column': 41,
                        'index': 114
                      }
                    },
                    'parameters': [],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 107,
                      'end': 114,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 34,
                          'index': 107
                        },
                        'end': {
                          'line': 4,
                          'column': 41,
                          'index': 114
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSVoidKeyword',
                        'start': 110,
                        'end': 114,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 37,
                            'index': 110
                          },
                          'end': {
                            'line': 4,
                            'column': 41,
                            'index': 114
                          }
                        }
                      }
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 124,
                'end': 180,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 8,
                    'index': 124
                  },
                  'end': {
                    'line': 5,
                    'column': 64,
                    'index': 180
                  }
                },
                'accessibility': 'public',
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 131,
                  'end': 142,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 15,
                      'index': 131
                    },
                    'end': {
                      'line': 5,
                      'column': 26,
                      'index': 142
                    }
                  },
                  'name': 'getFileName'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 142,
                  'end': 179,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 26,
                      'index': 142
                    },
                    'end': {
                      'line': 5,
                      'column': 63,
                      'index': 179
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSFunctionType',
                    'start': 144,
                    'end': 179,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 28,
                        'index': 144
                      },
                      'end': {
                        'line': 5,
                        'column': 63,
                        'index': 179
                      }
                    },
                    'parameters': [
                      {
                        'type': 'Identifier',
                        'start': 145,
                        'end': 52,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 29,
                            'index': 145
                          },
                          'end': {
                            'line': 5,
                            'column': 52,
                            'index': 168
                          }
                        },
                        'name': 'fileReferenceId',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 160,
                          'end': 168,
                          'loc': {
                            'start': {
                              'line': 5,
                              'column': 44,
                              'index': 160
                            },
                            'end': {
                              'line': 5,
                              'column': 52,
                              'index': 168
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSStringKeyword',
                            'start': 162,
                            'end': 168,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 46,
                                'index': 162
                              },
                              'end': {
                                'line': 5,
                                'column': 52,
                                'index': 168
                              }
                            }
                          }
                        }
                      }
                    ],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 170,
                      'end': 179,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 54,
                          'index': 170
                        },
                        'end': {
                          'line': 5,
                          'column': 63,
                          'index': 179
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 173,
                        'end': 179,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 57,
                            'index': 173
                          },
                          'end': {
                            'line': 5,
                            'column': 63,
                            'index': 179
                          }
                        }
                      }
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 189,
                'end': 284,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 8,
                    'index': 189
                  },
                  'end': {
                    'line': 6,
                    'column': 103,
                    'index': 284
                  }
                },
                'accessibility': 'public',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 205,
                  'end': 224,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 24,
                      'index': 205
                    },
                    'end': {
                      'line': 6,
                      'column': 43,
                      'index': 224
                    }
                  },
                  'name': 'setChunkInformation'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 224,
                  'end': 283,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 43,
                      'index': 224
                    },
                    'end': {
                      'line': 6,
                      'column': 102,
                      'index': 283
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSFunctionType',
                    'start': 226,
                    'end': 283,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 45,
                        'index': 226
                      },
                      'end': {
                        'line': 6,
                        'column': 102,
                        'index': 283
                      }
                    },
                    'parameters': [
                      {
                        'type': 'Identifier',
                        'start': 227,
                        'end': 93,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 46,
                            'index': 227
                          },
                          'end': {
                            'line': 6,
                            'column': 93,
                            'index': 274
                          }
                        },
                        'name': 'facadeChunkByModule',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 246,
                          'end': 274,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 65,
                              'index': 246
                            },
                            'end': {
                              'line': 6,
                              'column': 93,
                              'index': 274
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 248,
                            'end': 274,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 67,
                                'index': 248
                              },
                              'end': {
                                'line': 6,
                                'column': 93,
                                'index': 274
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 248,
                              'end': 259,
                              'loc': {
                                'start': {
                                  'line': 6,
                                  'column': 67,
                                  'index': 248
                                },
                                'end': {
                                  'line': 6,
                                  'column': 78,
                                  'index': 259
                                }
                              },
                              'name': 'ReadonlyMap'
                            },
                            'typeParameters': {
                              'type': 'TSTypeParameterInstantiation',
                              'start': 259,
                              'end': 274,
                              'loc': {
                                'start': {
                                  'line': 6,
                                  'column': 78,
                                  'index': 259
                                },
                                'end': {
                                  'line': 6,
                                  'column': 93,
                                  'index': 274
                                }
                              },
                              'params': [
                                {
                                  'type': 'TSTypeReference',
                                  'start': 260,
                                  'end': 266,
                                  'loc': {
                                    'start': {
                                      'line': 6,
                                      'column': 79,
                                      'index': 260
                                    },
                                    'end': {
                                      'line': 6,
                                      'column': 85,
                                      'index': 266
                                    }
                                  },
                                  'typeName': {
                                    'type': 'Identifier',
                                    'start': 260,
                                    'end': 266,
                                    'loc': {
                                      'start': {
                                        'line': 6,
                                        'column': 79,
                                        'index': 260
                                      },
                                      'end': {
                                        'line': 6,
                                        'column': 85,
                                        'index': 266
                                      }
                                    },
                                    'name': 'Module'
                                  }
                                },
                                {
                                  'type': 'TSTypeReference',
                                  'start': 268,
                                  'end': 273,
                                  'loc': {
                                    'start': {
                                      'line': 6,
                                      'column': 87,
                                      'index': 268
                                    },
                                    'end': {
                                      'line': 6,
                                      'column': 92,
                                      'index': 273
                                    }
                                  },
                                  'typeName': {
                                    'type': 'Identifier',
                                    'start': 268,
                                    'end': 273,
                                    'loc': {
                                      'start': {
                                        'line': 6,
                                        'column': 87,
                                        'index': 268
                                      },
                                      'end': {
                                        'line': 6,
                                        'column': 92,
                                        'index': 273
                                      }
                                    },
                                    'name': 'Chunk'
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 276,
                      'end': 283,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 95,
                          'index': 276
                        },
                        'end': {
                          'line': 6,
                          'column': 102,
                          'index': 283
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSVoidKeyword',
                        'start': 279,
                        'end': 283,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 98,
                            'index': 279
                          },
                          'end': {
                            'line': 6,
                            'column': 102,
                            'index': 283
                          }
                        }
                      }
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 293,
                'end': 455,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 8,
                    'index': 293
                  },
                  'end': {
                    'line': 10,
                    'column': 18,
                    'index': 455
                  }
                },
                'accessibility': 'public',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 309,
                  'end': 324,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 24,
                      'index': 309
                    },
                    'end': {
                      'line': 7,
                      'column': 39,
                      'index': 324
                    }
                  },
                  'name': 'setOutputBundle'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 324,
                  'end': 454,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 39,
                      'index': 324
                    },
                    'end': {
                      'line': 10,
                      'column': 17,
                      'index': 454
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSFunctionType',
                    'start': 326,
                    'end': 454,
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 41,
                        'index': 326
                      },
                      'end': {
                        'line': 10,
                        'column': 17,
                        'index': 454
                      }
                    },
                    'parameters': [
                      {
                        'type': 'Identifier',
                        'start': 344,
                        'end': 52,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 16,
                            'index': 344
                          },
                          'end': {
                            'line': 8,
                            'column': 52,
                            'index': 380
                          }
                        },
                        'name': 'bundle',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 350,
                          'end': 380,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 22,
                              'index': 350
                            },
                            'end': {
                              'line': 8,
                              'column': 52,
                              'index': 380
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 352,
                            'end': 380,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 24,
                                'index': 352
                              },
                              'end': {
                                'line': 8,
                                'column': 52,
                                'index': 380
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 352,
                              'end': 380,
                              'loc': {
                                'start': {
                                  'line': 8,
                                  'column': 24,
                                  'index': 352
                                },
                                'end': {
                                  'line': 8,
                                  'column': 52,
                                  'index': 380
                                }
                              },
                              'name': 'OutputBundleWithPlaceholders'
                            }
                          }
                        }
                      },
                      {
                        'type': 'Identifier',
                        'start': 398,
                        'end': 54,
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 16,
                            'index': 398
                          },
                          'end': {
                            'line': 9,
                            'column': 54,
                            'index': 436
                          }
                        },
                        'name': 'outputOptions',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 411,
                          'end': 436,
                          'loc': {
                            'start': {
                              'line': 9,
                              'column': 29,
                              'index': 411
                            },
                            'end': {
                              'line': 9,
                              'column': 54,
                              'index': 436
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 413,
                            'end': 436,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 31,
                                'index': 413
                              },
                              'end': {
                                'line': 9,
                                'column': 54,
                                'index': 436
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 413,
                              'end': 436,
                              'loc': {
                                'start': {
                                  'line': 9,
                                  'column': 31,
                                  'index': 413
                                },
                                'end': {
                                  'line': 9,
                                  'column': 54,
                                  'index': 436
                                }
                              },
                              'name': 'NormalizedOutputOptions'
                            }
                          }
                        }
                      }
                    ],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 447,
                      'end': 454,
                      'loc': {
                        'start': {
                          'line': 10,
                          'column': 10,
                          'index': 447
                        },
                        'end': {
                          'line': 10,
                          'column': 17,
                          'index': 454
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSVoidKeyword',
                        'start': 450,
                        'end': 454,
                        'loc': {
                          'start': {
                            'line': 10,
                            'column': 13,
                            'index': 450
                          },
                          'end': {
                            'line': 10,
                            'column': 17,
                            'index': 454
                          }
                        }
                      }
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 465,
                'end': 507,
                'loc': {
                  'start': {
                    'line': 12,
                    'column': 8,
                    'index': 465
                  },
                  'end': {
                    'line': 12,
                    'column': 50,
                    'index': 507
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 482,
                  'end': 493,
                  'loc': {
                    'start': {
                      'line': 12,
                      'column': 25,
                      'index': 482
                    },
                    'end': {
                      'line': 12,
                      'column': 36,
                      'index': 493
                    }
                  },
                  'name': 'fileEmitter'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 493,
                  'end': 506,
                  'loc': {
                    'start': {
                      'line': 12,
                      'column': 36,
                      'index': 493
                    },
                    'end': {
                      'line': 12,
                      'column': 49,
                      'index': 506
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 495,
                    'end': 506,
                    'loc': {
                      'start': {
                        'line': 12,
                        'column': 38,
                        'index': 495
                      },
                      'end': {
                        'line': 12,
                        'column': 49,
                        'index': 506
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 495,
                      'end': 506,
                      'loc': {
                        'start': {
                          'line': 12,
                          'column': 38,
                          'index': 495
                        },
                        'end': {
                          'line': 12,
                          'column': 49,
                          'index': 506
                        }
                      },
                      'name': 'FileEmitter'
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 516,
                'end': 584,
                'loc': {
                  'start': {
                    'line': 13,
                    'column': 8,
                    'index': 516
                  },
                  'end': {
                    'line': 13,
                    'column': 76,
                    'index': 584
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 533,
                  'end': 547,
                  'loc': {
                    'start': {
                      'line': 13,
                      'column': 25,
                      'index': 533
                    },
                    'end': {
                      'line': 13,
                      'column': 39,
                      'index': 547
                    }
                  },
                  'name': 'pluginContexts'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 547,
                  'end': 583,
                  'loc': {
                    'start': {
                      'line': 13,
                      'column': 39,
                      'index': 547
                    },
                    'end': {
                      'line': 13,
                      'column': 75,
                      'index': 583
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 549,
                    'end': 583,
                    'loc': {
                      'start': {
                        'line': 13,
                        'column': 41,
                        'index': 549
                      },
                      'end': {
                        'line': 13,
                        'column': 75,
                        'index': 583
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 549,
                      'end': 560,
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 41,
                          'index': 549
                        },
                        'end': {
                          'line': 13,
                          'column': 52,
                          'index': 560
                        }
                      },
                      'name': 'ReadonlyMap'
                    },
                    'typeParameters': {
                      'type': 'TSTypeParameterInstantiation',
                      'start': 560,
                      'end': 583,
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 52,
                          'index': 560
                        },
                        'end': {
                          'line': 13,
                          'column': 75,
                          'index': 583
                        }
                      },
                      'params': [
                        {
                          'type': 'TSTypeReference',
                          'start': 561,
                          'end': 567,
                          'loc': {
                            'start': {
                              'line': 13,
                              'column': 53,
                              'index': 561
                            },
                            'end': {
                              'line': 13,
                              'column': 59,
                              'index': 567
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 561,
                            'end': 567,
                            'loc': {
                              'start': {
                                'line': 13,
                                'column': 53,
                                'index': 561
                              },
                              'end': {
                                'line': 13,
                                'column': 59,
                                'index': 567
                              }
                            },
                            'name': 'Plugin'
                          }
                        },
                        {
                          'type': 'TSTypeReference',
                          'start': 569,
                          'end': 582,
                          'loc': {
                            'start': {
                              'line': 13,
                              'column': 61,
                              'index': 569
                            },
                            'end': {
                              'line': 13,
                              'column': 74,
                              'index': 582
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 569,
                            'end': 582,
                            'loc': {
                              'start': {
                                'line': 13,
                                'column': 61,
                                'index': 569
                              },
                              'end': {
                                'line': 13,
                                'column': 74,
                                'index': 582
                              }
                            },
                            'name': 'PluginContext'
                          }
                        }
                      ]
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 593,
                'end': 637,
                'loc': {
                  'start': {
                    'line': 14,
                    'column': 8,
                    'index': 593
                  },
                  'end': {
                    'line': 14,
                    'column': 52,
                    'index': 637
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 610,
                  'end': 617,
                  'loc': {
                    'start': {
                      'line': 14,
                      'column': 25,
                      'index': 610
                    },
                    'end': {
                      'line': 14,
                      'column': 32,
                      'index': 617
                    }
                  },
                  'name': 'plugins'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 617,
                  'end': 636,
                  'loc': {
                    'start': {
                      'line': 14,
                      'column': 32,
                      'index': 617
                    },
                    'end': {
                      'line': 14,
                      'column': 51,
                      'index': 636
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeOperator',
                    'start': 619,
                    'end': 636,
                    'loc': {
                      'start': {
                        'line': 14,
                        'column': 34,
                        'index': 619
                      },
                      'end': {
                        'line': 14,
                        'column': 51,
                        'index': 636
                      }
                    },
                    'operator': 'readonly',
                    'typeAnnotation': {
                      'type': 'TSArrayType',
                      'start': 628,
                      'end': 636,
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 43,
                          'index': 628
                        },
                        'end': {
                          'line': 14,
                          'column': 51,
                          'index': 636
                        }
                      },
                      'elementType': {
                        'type': 'TSTypeReference',
                        'start': 628,
                        'end': 634,
                        'loc': {
                          'start': {
                            'line': 14,
                            'column': 43,
                            'index': 628
                          },
                          'end': {
                            'line': 14,
                            'column': 49,
                            'index': 634
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 628,
                          'end': 634,
                          'loc': {
                            'start': {
                              'line': 14,
                              'column': 43,
                              'index': 628
                            },
                            'end': {
                              'line': 14,
                              'column': 49,
                              'index': 634
                            }
                          },
                          'name': 'Plugin'
                        }
                      }
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 646,
                'end': 717,
                'loc': {
                  'start': {
                    'line': 15,
                    'column': 8,
                    'index': 646
                  },
                  'end': {
                    'line': 15,
                    'column': 79,
                    'index': 717
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 663,
                  'end': 676,
                  'loc': {
                    'start': {
                      'line': 15,
                      'column': 25,
                      'index': 663
                    },
                    'end': {
                      'line': 15,
                      'column': 38,
                      'index': 676
                    }
                  },
                  'name': 'sortedPlugins'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 679,
                  'end': 716,
                  'loc': {
                    'start': {
                      'line': 15,
                      'column': 41,
                      'index': 679
                    },
                    'end': {
                      'line': 15,
                      'column': 78,
                      'index': 716
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 683,
                    'end': 686,
                    'loc': {
                      'start': {
                        'line': 15,
                        'column': 45,
                        'index': 683
                      },
                      'end': {
                        'line': 15,
                        'column': 48,
                        'index': 686
                      }
                    },
                    'name': 'Map'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 686,
                    'end': 714,
                    'loc': {
                      'start': {
                        'line': 15,
                        'column': 48,
                        'index': 686
                      },
                      'end': {
                        'line': 15,
                        'column': 76,
                        'index': 714
                      }
                    },
                    'params': [
                      {
                        'type': 'TSTypeReference',
                        'start': 687,
                        'end': 703,
                        'loc': {
                          'start': {
                            'line': 15,
                            'column': 49,
                            'index': 687
                          },
                          'end': {
                            'line': 15,
                            'column': 65,
                            'index': 703
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 687,
                          'end': 703,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 49,
                              'index': 687
                            },
                            'end': {
                              'line': 15,
                              'column': 65,
                              'index': 703
                            }
                          },
                          'name': 'AsyncPluginHooks'
                        }
                      },
                      {
                        'type': 'TSArrayType',
                        'start': 705,
                        'end': 713,
                        'loc': {
                          'start': {
                            'line': 15,
                            'column': 67,
                            'index': 705
                          },
                          'end': {
                            'line': 15,
                            'column': 75,
                            'index': 713
                          }
                        },
                        'elementType': {
                          'type': 'TSTypeReference',
                          'start': 705,
                          'end': 711,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 67,
                              'index': 705
                            },
                            'end': {
                              'line': 15,
                              'column': 73,
                              'index': 711
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 705,
                            'end': 711,
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 67,
                                'index': 705
                              },
                              'end': {
                                'line': 15,
                                'column': 73,
                                'index': 711
                              }
                            },
                            'name': 'Plugin'
                          }
                        }
                      }
                    ]
                  },
                  'arguments': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 726,
                'end': 786,
                'loc': {
                  'start': {
                    'line': 16,
                    'column': 8,
                    'index': 726
                  },
                  'end': {
                    'line': 16,
                    'column': 68,
                    'index': 786
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 743,
                  'end': 761,
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 25,
                      'index': 743
                    },
                    'end': {
                      'line': 16,
                      'column': 43,
                      'index': 761
                    }
                  },
                  'name': 'unfulfilledActions'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 764,
                  'end': 785,
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 46,
                      'index': 764
                    },
                    'end': {
                      'line': 16,
                      'column': 67,
                      'index': 785
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 768,
                    'end': 771,
                    'loc': {
                      'start': {
                        'line': 16,
                        'column': 50,
                        'index': 768
                      },
                      'end': {
                        'line': 16,
                        'column': 53,
                        'index': 771
                      }
                    },
                    'name': 'Set'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 771,
                    'end': 783,
                    'loc': {
                      'start': {
                        'line': 16,
                        'column': 53,
                        'index': 771
                      },
                      'end': {
                        'line': 16,
                        'column': 65,
                        'index': 783
                      }
                    },
                    'params': [
                      {
                        'type': 'TSTypeReference',
                        'start': 772,
                        'end': 782,
                        'loc': {
                          'start': {
                            'line': 16,
                            'column': 54,
                            'index': 772
                          },
                          'end': {
                            'line': 16,
                            'column': 64,
                            'index': 782
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 772,
                          'end': 782,
                          'loc': {
                            'start': {
                              'line': 16,
                              'column': 54,
                              'index': 772
                            },
                            'end': {
                              'line': 16,
                              'column': 64,
                              'index': 782
                            }
                          },
                          'name': 'HookAction'
                        }
                      }
                    ]
                  },
                  'arguments': []
                }
              },
              {
                'type': 'MethodDefinition',
                'start': 796,
                'end': 1679,
                'loc': {
                  'start': {
                    'line': 18,
                    'column': 8,
                    'index': 796
                  },
                  'end': {
                    'line': 33,
                    'column': 9,
                    'index': 1679
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 796,
                  'end': 805,
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 8,
                      'index': 796
                    },
                    'end': {
                      'line': 18,
                      'column': 17,
                      'index': 805
                    }
                  },
                  'name': 'hookFirst'
                },
                'kind': 'method',
                'typeParameters': {
                  'type': 'TSTypeParameterDeclaration',
                  'start': 805,
                  'end': 852,
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 17,
                      'index': 805
                    },
                    'end': {
                      'line': 18,
                      'column': 64,
                      'index': 852
                    }
                  },
                  'params': [
                    {
                      'type': 'TSTypeParameter',
                      'start': 806,
                      'end': 851,
                      'loc': {
                        'start': {
                          'line': 18,
                          'column': 18,
                          'index': 806
                        },
                        'end': {
                          'line': 18,
                          'column': 63,
                          'index': 851
                        }
                      },
                      'name': 'H',
                      'constraint': {
                        'type': 'TSIntersectionType',
                        'start': 816,
                        'end': 851,
                        'loc': {
                          'start': {
                            'line': 18,
                            'column': 28,
                            'index': 816
                          },
                          'end': {
                            'line': 18,
                            'column': 63,
                            'index': 851
                          }
                        },
                        'types': [
                          {
                            'type': 'TSTypeReference',
                            'start': 816,
                            'end': 832,
                            'loc': {
                              'start': {
                                'line': 18,
                                'column': 28,
                                'index': 816
                              },
                              'end': {
                                'line': 18,
                                'column': 44,
                                'index': 832
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 816,
                              'end': 832,
                              'loc': {
                                'start': {
                                  'line': 18,
                                  'column': 28,
                                  'index': 816
                                },
                                'end': {
                                  'line': 18,
                                  'column': 44,
                                  'index': 832
                                }
                              },
                              'name': 'AsyncPluginHooks'
                            }
                          },
                          {
                            'type': 'TSTypeReference',
                            'start': 835,
                            'end': 851,
                            'loc': {
                              'start': {
                                'line': 18,
                                'column': 47,
                                'index': 835
                              },
                              'end': {
                                'line': 18,
                                'column': 63,
                                'index': 851
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 835,
                              'end': 851,
                              'loc': {
                                'start': {
                                  'line': 18,
                                  'column': 47,
                                  'index': 835
                                },
                                'end': {
                                  'line': 18,
                                  'column': 63,
                                  'index': 851
                                }
                              },
                              'name': 'FirstPluginHooks'
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                'value': {
                  'type': 'FunctionExpression',
                  'start': 852,
                  'end': 1679,
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 64,
                      'index': 852
                    },
                    'end': {
                      'line': 33,
                      'column': 9,
                      'index': 1679
                    }
                  },
                  'id': null,
                  'expression': false,
                  'generator': false,
                  'async': false,
                  'params': [
                    {
                      'type': 'Identifier',
                      'start': 870,
                      'end': 27,
                      'loc': {
                        'start': {
                          'line': 19,
                          'column': 16,
                          'index': 870
                        },
                        'end': {
                          'line': 19,
                          'column': 27,
                          'index': 881
                        }
                      },
                      'name': 'hookName',
                      'typeAnnotation': {
                        'type': 'TSTypeAnnotation',
                        'start': 878,
                        'end': 881,
                        'loc': {
                          'start': {
                            'line': 19,
                            'column': 24,
                            'index': 878
                          },
                          'end': {
                            'line': 19,
                            'column': 27,
                            'index': 881
                          }
                        },
                        'typeAnnotation': {
                          'type': 'TSTypeReference',
                          'start': 880,
                          'end': 881,
                          'loc': {
                            'start': {
                              'line': 19,
                              'column': 26,
                              'index': 880
                            },
                            'end': {
                              'line': 19,
                              'column': 27,
                              'index': 881
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 880,
                            'end': 881,
                            'loc': {
                              'start': {
                                'line': 19,
                                'column': 26,
                                'index': 880
                              },
                              'end': {
                                'line': 19,
                                'column': 27,
                                'index': 881
                              }
                            },
                            'name': 'H'
                          }
                        }
                      }
                    },
                    {
                      'type': 'Identifier',
                      'start': 899,
                      'end': 62,
                      'loc': {
                        'start': {
                          'line': 20,
                          'column': 16,
                          'index': 899
                        },
                        'end': {
                          'line': 20,
                          'column': 62,
                          'index': 945
                        }
                      },
                      'name': 'parameters',
                      'typeAnnotation': {
                        'type': 'TSTypeAnnotation',
                        'start': 909,
                        'end': 945,
                        'loc': {
                          'start': {
                            'line': 20,
                            'column': 26,
                            'index': 909
                          },
                          'end': {
                            'line': 20,
                            'column': 62,
                            'index': 945
                          }
                        },
                        'typeAnnotation': {
                          'type': 'TSTypeReference',
                          'start': 911,
                          'end': 945,
                          'loc': {
                            'start': {
                              'line': 20,
                              'column': 28,
                              'index': 911
                            },
                            'end': {
                              'line': 20,
                              'column': 62,
                              'index': 945
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 911,
                            'end': 921,
                            'loc': {
                              'start': {
                                'line': 20,
                                'column': 28,
                                'index': 911
                              },
                              'end': {
                                'line': 20,
                                'column': 38,
                                'index': 921
                              }
                            },
                            'name': 'Parameters'
                          },
                          'typeParameters': {
                            'type': 'TSTypeParameterInstantiation',
                            'start': 921,
                            'end': 945,
                            'loc': {
                              'start': {
                                'line': 20,
                                'column': 38,
                                'index': 921
                              },
                              'end': {
                                'line': 20,
                                'column': 62,
                                'index': 945
                              }
                            },
                            'params': [
                              {
                                'type': 'TSIndexedAccessType',
                                'start': 922,
                                'end': 944,
                                'loc': {
                                  'start': {
                                    'line': 20,
                                    'column': 39,
                                    'index': 922
                                  },
                                  'end': {
                                    'line': 20,
                                    'column': 61,
                                    'index': 944
                                  }
                                },
                                'objectType': {
                                  'type': 'TSTypeReference',
                                  'start': 922,
                                  'end': 941,
                                  'loc': {
                                    'start': {
                                      'line': 20,
                                      'column': 39,
                                      'index': 922
                                    },
                                    'end': {
                                      'line': 20,
                                      'column': 58,
                                      'index': 941
                                    }
                                  },
                                  'typeName': {
                                    'type': 'Identifier',
                                    'start': 922,
                                    'end': 941,
                                    'loc': {
                                      'start': {
                                        'line': 20,
                                        'column': 39,
                                        'index': 922
                                      },
                                      'end': {
                                        'line': 20,
                                        'column': 58,
                                        'index': 941
                                      }
                                    },
                                    'name': 'FunctionPluginHooks'
                                  }
                                },
                                'indexType': {
                                  'type': 'TSTypeReference',
                                  'start': 942,
                                  'end': 943,
                                  'loc': {
                                    'start': {
                                      'line': 20,
                                      'column': 59,
                                      'index': 942
                                    },
                                    'end': {
                                      'line': 20,
                                      'column': 60,
                                      'index': 943
                                    }
                                  },
                                  'typeName': {
                                    'type': 'Identifier',
                                    'start': 942,
                                    'end': 943,
                                    'loc': {
                                      'start': {
                                        'line': 20,
                                        'column': 59,
                                        'index': 942
                                      },
                                      'end': {
                                        'line': 20,
                                        'column': 60,
                                        'index': 943
                                      }
                                    },
                                    'name': 'H'
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      'type': 'Identifier',
                      'start': 963,
                      'end': 54,
                      'loc': {
                        'start': {
                          'line': 21,
                          'column': 16,
                          'index': 963
                        },
                        'end': {
                          'line': 21,
                          'column': 54,
                          'index': 1001
                        }
                      },
                      'name': 'replaceContext',
                      'optional': true,
                      'typeAnnotation': {
                        'type': 'TSTypeAnnotation',
                        'start': 978,
                        'end': 1001,
                        'loc': {
                          'start': {
                            'line': 21,
                            'column': 31,
                            'index': 978
                          },
                          'end': {
                            'line': 21,
                            'column': 54,
                            'index': 1001
                          }
                        },
                        'typeAnnotation': {
                          'type': 'TSUnionType',
                          'start': 980,
                          'end': 1001,
                          'loc': {
                            'start': {
                              'line': 21,
                              'column': 33,
                              'index': 980
                            },
                            'end': {
                              'line': 21,
                              'column': 54,
                              'index': 1001
                            }
                          },
                          'types': [
                            {
                              'type': 'TSTypeReference',
                              'start': 980,
                              'end': 994,
                              'loc': {
                                'start': {
                                  'line': 21,
                                  'column': 33,
                                  'index': 980
                                },
                                'end': {
                                  'line': 21,
                                  'column': 47,
                                  'index': 994
                                }
                              },
                              'typeName': {
                                'type': 'Identifier',
                                'start': 980,
                                'end': 994,
                                'loc': {
                                  'start': {
                                    'line': 21,
                                    'column': 33,
                                    'index': 980
                                  },
                                  'end': {
                                    'line': 21,
                                    'column': 47,
                                    'index': 994
                                  }
                                },
                                'name': 'ReplaceContext'
                              }
                            },
                            {
                              'type': 'TSNullKeyword',
                              'start': 997,
                              'end': 1001,
                              'loc': {
                                'start': {
                                  'line': 21,
                                  'column': 50,
                                  'index': 997
                                },
                                'end': {
                                  'line': 21,
                                  'column': 54,
                                  'index': 1001
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      'type': 'Identifier',
                      'start': 1019,
                      'end': 52,
                      'loc': {
                        'start': {
                          'line': 22,
                          'column': 16,
                          'index': 1019
                        },
                        'end': {
                          'line': 22,
                          'column': 52,
                          'index': 1055
                        }
                      },
                      'name': 'skipped',
                      'optional': true,
                      'typeAnnotation': {
                        'type': 'TSTypeAnnotation',
                        'start': 1027,
                        'end': 1055,
                        'loc': {
                          'start': {
                            'line': 22,
                            'column': 24,
                            'index': 1027
                          },
                          'end': {
                            'line': 22,
                            'column': 52,
                            'index': 1055
                          }
                        },
                        'typeAnnotation': {
                          'type': 'TSUnionType',
                          'start': 1029,
                          'end': 1055,
                          'loc': {
                            'start': {
                              'line': 22,
                              'column': 26,
                              'index': 1029
                            },
                            'end': {
                              'line': 22,
                              'column': 52,
                              'index': 1055
                            }
                          },
                          'types': [
                            {
                              'type': 'TSTypeReference',
                              'start': 1029,
                              'end': 1048,
                              'loc': {
                                'start': {
                                  'line': 22,
                                  'column': 26,
                                  'index': 1029
                                },
                                'end': {
                                  'line': 22,
                                  'column': 45,
                                  'index': 1048
                                }
                              },
                              'typeName': {
                                'type': 'Identifier',
                                'start': 1029,
                                'end': 1040,
                                'loc': {
                                  'start': {
                                    'line': 22,
                                    'column': 26,
                                    'index': 1029
                                  },
                                  'end': {
                                    'line': 22,
                                    'column': 37,
                                    'index': 1040
                                  }
                                },
                                'name': 'ReadonlySet'
                              },
                              'typeParameters': {
                                'type': 'TSTypeParameterInstantiation',
                                'start': 1040,
                                'end': 1048,
                                'loc': {
                                  'start': {
                                    'line': 22,
                                    'column': 37,
                                    'index': 1040
                                  },
                                  'end': {
                                    'line': 22,
                                    'column': 45,
                                    'index': 1048
                                  }
                                },
                                'params': [
                                  {
                                    'type': 'TSTypeReference',
                                    'start': 1041,
                                    'end': 1047,
                                    'loc': {
                                      'start': {
                                        'line': 22,
                                        'column': 38,
                                        'index': 1041
                                      },
                                      'end': {
                                        'line': 22,
                                        'column': 44,
                                        'index': 1047
                                      }
                                    },
                                    'typeName': {
                                      'type': 'Identifier',
                                      'start': 1041,
                                      'end': 1047,
                                      'loc': {
                                        'start': {
                                          'line': 22,
                                          'column': 38,
                                          'index': 1041
                                        },
                                        'end': {
                                          'line': 22,
                                          'column': 44,
                                          'index': 1047
                                        }
                                      },
                                      'name': 'Plugin'
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              'type': 'TSNullKeyword',
                              'start': 1051,
                              'end': 1055,
                              'loc': {
                                'start': {
                                  'line': 22,
                                  'column': 48,
                                  'index': 1051
                                },
                                'end': {
                                  'line': 22,
                                  'column': 52,
                                  'index': 1055
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
                    'start': 1065,
                    'end': 1117,
                    'loc': {
                      'start': {
                        'line': 23,
                        'column': 9,
                        'index': 1065
                      },
                      'end': {
                        'line': 23,
                        'column': 61,
                        'index': 1117
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSTypeReference',
                      'start': 1067,
                      'end': 1117,
                      'loc': {
                        'start': {
                          'line': 23,
                          'column': 11,
                          'index': 1067
                        },
                        'end': {
                          'line': 23,
                          'column': 61,
                          'index': 1117
                        }
                      },
                      'typeName': {
                        'type': 'Identifier',
                        'start': 1067,
                        'end': 1074,
                        'loc': {
                          'start': {
                            'line': 23,
                            'column': 11,
                            'index': 1067
                          },
                          'end': {
                            'line': 23,
                            'column': 18,
                            'index': 1074
                          }
                        },
                        'name': 'Promise'
                      },
                      'typeParameters': {
                        'type': 'TSTypeParameterInstantiation',
                        'start': 1074,
                        'end': 1117,
                        'loc': {
                          'start': {
                            'line': 23,
                            'column': 18,
                            'index': 1074
                          },
                          'end': {
                            'line': 23,
                            'column': 61,
                            'index': 1117
                          }
                        },
                        'params': [
                          {
                            'type': 'TSUnionType',
                            'start': 1075,
                            'end': 1116,
                            'loc': {
                              'start': {
                                'line': 23,
                                'column': 19,
                                'index': 1075
                              },
                              'end': {
                                'line': 23,
                                'column': 60,
                                'index': 1116
                              }
                            },
                            'types': [
                              {
                                'type': 'TSTypeReference',
                                'start': 1075,
                                'end': 1109,
                                'loc': {
                                  'start': {
                                    'line': 23,
                                    'column': 19,
                                    'index': 1075
                                  },
                                  'end': {
                                    'line': 23,
                                    'column': 53,
                                    'index': 1109
                                  }
                                },
                                'typeName': {
                                  'type': 'Identifier',
                                  'start': 1075,
                                  'end': 1085,
                                  'loc': {
                                    'start': {
                                      'line': 23,
                                      'column': 19,
                                      'index': 1075
                                    },
                                    'end': {
                                      'line': 23,
                                      'column': 29,
                                      'index': 1085
                                    }
                                  },
                                  'name': 'ReturnType'
                                },
                                'typeParameters': {
                                  'type': 'TSTypeParameterInstantiation',
                                  'start': 1085,
                                  'end': 1109,
                                  'loc': {
                                    'start': {
                                      'line': 23,
                                      'column': 29,
                                      'index': 1085
                                    },
                                    'end': {
                                      'line': 23,
                                      'column': 53,
                                      'index': 1109
                                    }
                                  },
                                  'params': [
                                    {
                                      'type': 'TSIndexedAccessType',
                                      'start': 1086,
                                      'end': 1108,
                                      'loc': {
                                        'start': {
                                          'line': 23,
                                          'column': 30,
                                          'index': 1086
                                        },
                                        'end': {
                                          'line': 23,
                                          'column': 52,
                                          'index': 1108
                                        }
                                      },
                                      'objectType': {
                                        'type': 'TSTypeReference',
                                        'start': 1086,
                                        'end': 1105,
                                        'loc': {
                                          'start': {
                                            'line': 23,
                                            'column': 30,
                                            'index': 1086
                                          },
                                          'end': {
                                            'line': 23,
                                            'column': 49,
                                            'index': 1105
                                          }
                                        },
                                        'typeName': {
                                          'type': 'Identifier',
                                          'start': 1086,
                                          'end': 1105,
                                          'loc': {
                                            'start': {
                                              'line': 23,
                                              'column': 30,
                                              'index': 1086
                                            },
                                            'end': {
                                              'line': 23,
                                              'column': 49,
                                              'index': 1105
                                            }
                                          },
                                          'name': 'FunctionPluginHooks'
                                        }
                                      },
                                      'indexType': {
                                        'type': 'TSTypeReference',
                                        'start': 1106,
                                        'end': 1107,
                                        'loc': {
                                          'start': {
                                            'line': 23,
                                            'column': 50,
                                            'index': 1106
                                          },
                                          'end': {
                                            'line': 23,
                                            'column': 51,
                                            'index': 1107
                                          }
                                        },
                                        'typeName': {
                                          'type': 'Identifier',
                                          'start': 1106,
                                          'end': 1107,
                                          'loc': {
                                            'start': {
                                              'line': 23,
                                              'column': 50,
                                              'index': 1106
                                            },
                                            'end': {
                                              'line': 23,
                                              'column': 51,
                                              'index': 1107
                                            }
                                          },
                                          'name': 'H'
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                'type': 'TSNullKeyword',
                                'start': 1112,
                                'end': 1116,
                                'loc': {
                                  'start': {
                                    'line': 23,
                                    'column': 56,
                                    'index': 1112
                                  },
                                  'end': {
                                    'line': 23,
                                    'column': 60,
                                    'index': 1116
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  'body': {
                    'type': 'BlockStatement',
                    'start': 1118,
                    'end': 1679,
                    'loc': {
                      'start': {
                        'line': 23,
                        'column': 62,
                        'index': 1118
                      },
                      'end': {
                        'line': 33,
                        'column': 9,
                        'index': 1679
                      }
                    },
                    'body': [
                      {
                        'type': 'VariableDeclaration',
                        'start': 1136,
                        'end': 1224,
                        'loc': {
                          'start': {
                            'line': 24,
                            'column': 16,
                            'index': 1136
                          },
                          'end': {
                            'line': 24,
                            'column': 104,
                            'index': 1224
                          }
                        },
                        'declarations': [
                          {
                            'type': 'VariableDeclarator',
                            'start': 1140,
                            'end': 1223,
                            'loc': {
                              'start': {
                                'line': 24,
                                'column': 20,
                                'index': 1140
                              },
                              'end': {
                                'line': 24,
                                'column': 103,
                                'index': 1223
                              }
                            },
                            'id': {
                              'type': 'Identifier',
                              'start': 1140,
                              'end': 79,
                              'loc': {
                                'start': {
                                  'line': 24,
                                  'column': 20,
                                  'index': 1140
                                },
                                'end': {
                                  'line': 24,
                                  'column': 79,
                                  'index': 1199
                                }
                              },
                              'name': 'promise',
                              'typeAnnotation': {
                                'type': 'TSTypeAnnotation',
                                'start': 1147,
                                'end': 1199,
                                'loc': {
                                  'start': {
                                    'line': 24,
                                    'column': 27,
                                    'index': 1147
                                  },
                                  'end': {
                                    'line': 24,
                                    'column': 79,
                                    'index': 1199
                                  }
                                },
                                'typeAnnotation': {
                                  'type': 'TSTypeReference',
                                  'start': 1149,
                                  'end': 1199,
                                  'loc': {
                                    'start': {
                                      'line': 24,
                                      'column': 29,
                                      'index': 1149
                                    },
                                    'end': {
                                      'line': 24,
                                      'column': 79,
                                      'index': 1199
                                    }
                                  },
                                  'typeName': {
                                    'type': 'Identifier',
                                    'start': 1149,
                                    'end': 1156,
                                    'loc': {
                                      'start': {
                                        'line': 24,
                                        'column': 29,
                                        'index': 1149
                                      },
                                      'end': {
                                        'line': 24,
                                        'column': 36,
                                        'index': 1156
                                      }
                                    },
                                    'name': 'Promise'
                                  },
                                  'typeParameters': {
                                    'type': 'TSTypeParameterInstantiation',
                                    'start': 1156,
                                    'end': 1199,
                                    'loc': {
                                      'start': {
                                        'line': 24,
                                        'column': 36,
                                        'index': 1156
                                      },
                                      'end': {
                                        'line': 24,
                                        'column': 79,
                                        'index': 1199
                                      }
                                    },
                                    'params': [
                                      {
                                        'type': 'TSUnionType',
                                        'start': 1157,
                                        'end': 1198,
                                        'loc': {
                                          'start': {
                                            'line': 24,
                                            'column': 37,
                                            'index': 1157
                                          },
                                          'end': {
                                            'line': 24,
                                            'column': 78,
                                            'index': 1198
                                          }
                                        },
                                        'types': [
                                          {
                                            'type': 'TSTypeReference',
                                            'start': 1157,
                                            'end': 1191,
                                            'loc': {
                                              'start': {
                                                'line': 24,
                                                'column': 37,
                                                'index': 1157
                                              },
                                              'end': {
                                                'line': 24,
                                                'column': 71,
                                                'index': 1191
                                              }
                                            },
                                            'typeName': {
                                              'type': 'Identifier',
                                              'start': 1157,
                                              'end': 1167,
                                              'loc': {
                                                'start': {
                                                  'line': 24,
                                                  'column': 37,
                                                  'index': 1157
                                                },
                                                'end': {
                                                  'line': 24,
                                                  'column': 47,
                                                  'index': 1167
                                                }
                                              },
                                              'name': 'ReturnType'
                                            },
                                            'typeParameters': {
                                              'type': 'TSTypeParameterInstantiation',
                                              'start': 1167,
                                              'end': 1191,
                                              'loc': {
                                                'start': {
                                                  'line': 24,
                                                  'column': 47,
                                                  'index': 1167
                                                },
                                                'end': {
                                                  'line': 24,
                                                  'column': 71,
                                                  'index': 1191
                                                }
                                              },
                                              'params': [
                                                {
                                                  'type': 'TSIndexedAccessType',
                                                  'start': 1168,
                                                  'end': 1190,
                                                  'loc': {
                                                    'start': {
                                                      'line': 24,
                                                      'column': 48,
                                                      'index': 1168
                                                    },
                                                    'end': {
                                                      'line': 24,
                                                      'column': 70,
                                                      'index': 1190
                                                    }
                                                  },
                                                  'objectType': {
                                                    'type': 'TSTypeReference',
                                                    'start': 1168,
                                                    'end': 1187,
                                                    'loc': {
                                                      'start': {
                                                        'line': 24,
                                                        'column': 48,
                                                        'index': 1168
                                                      },
                                                      'end': {
                                                        'line': 24,
                                                        'column': 67,
                                                        'index': 1187
                                                      }
                                                    },
                                                    'typeName': {
                                                      'type': 'Identifier',
                                                      'start': 1168,
                                                      'end': 1187,
                                                      'loc': {
                                                        'start': {
                                                          'line': 24,
                                                          'column': 48,
                                                          'index': 1168
                                                        },
                                                        'end': {
                                                          'line': 24,
                                                          'column': 67,
                                                          'index': 1187
                                                        }
                                                      },
                                                      'name': 'FunctionPluginHooks'
                                                    }
                                                  },
                                                  'indexType': {
                                                    'type': 'TSTypeReference',
                                                    'start': 1188,
                                                    'end': 1189,
                                                    'loc': {
                                                      'start': {
                                                        'line': 24,
                                                        'column': 68,
                                                        'index': 1188
                                                      },
                                                      'end': {
                                                        'line': 24,
                                                        'column': 69,
                                                        'index': 1189
                                                      }
                                                    },
                                                    'typeName': {
                                                      'type': 'Identifier',
                                                      'start': 1188,
                                                      'end': 1189,
                                                      'loc': {
                                                        'start': {
                                                          'line': 24,
                                                          'column': 68,
                                                          'index': 1188
                                                        },
                                                        'end': {
                                                          'line': 24,
                                                          'column': 69,
                                                          'index': 1189
                                                        }
                                                      },
                                                      'name': 'H'
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            'type': 'TSNullKeyword',
                                            'start': 1194,
                                            'end': 1198,
                                            'loc': {
                                              'start': {
                                                'line': 24,
                                                'column': 74,
                                                'index': 1194
                                              },
                                              'end': {
                                                'line': 24,
                                                'column': 78,
                                                'index': 1198
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              }
                            },
                            'init': {
                              'type': 'CallExpression',
                              'start': 1202,
                              'end': 1223,
                              'loc': {
                                'start': {
                                  'line': 24,
                                  'column': 82,
                                  'index': 1202
                                },
                                'end': {
                                  'line': 24,
                                  'column': 103,
                                  'index': 1223
                                }
                              },
                              'callee': {
                                'type': 'MemberExpression',
                                'start': 1202,
                                'end': 1217,
                                'loc': {
                                  'start': {
                                    'line': 24,
                                    'column': 82,
                                    'index': 1202
                                  },
                                  'end': {
                                    'line': 24,
                                    'column': 97,
                                    'index': 1217
                                  }
                                },
                                'object': {
                                  'type': 'Identifier',
                                  'start': 1202,
                                  'end': 1209,
                                  'loc': {
                                    'start': {
                                      'line': 24,
                                      'column': 82,
                                      'index': 1202
                                    },
                                    'end': {
                                      'line': 24,
                                      'column': 89,
                                      'index': 1209
                                    }
                                  },
                                  'name': 'Promise'
                                },
                                'property': {
                                  'type': 'Identifier',
                                  'start': 1210,
                                  'end': 1217,
                                  'loc': {
                                    'start': {
                                      'line': 24,
                                      'column': 90,
                                      'index': 1210
                                    },
                                    'end': {
                                      'line': 24,
                                      'column': 97,
                                      'index': 1217
                                    }
                                  },
                                  'name': 'resolve'
                                },
                                'computed': false,
                                'optional': false
                              },
                              'arguments': [
                                {
                                  'type': 'Literal',
                                  'start': 1218,
                                  'end': 1222,
                                  'loc': {
                                    'start': {
                                      'line': 24,
                                      'column': 98,
                                      'index': 1218
                                    },
                                    'end': {
                                      'line': 24,
                                      'column': 102,
                                      'index': 1222
                                    }
                                  },
                                  'value': null,
                                  'raw': 'null'
                                }
                              ],
                              'optional': false
                            }
                          }
                        ],
                        'kind': 'let'
                      },
                      {
                        'type': 'ForOfStatement',
                        'start': 1241,
                        'end': 1637,
                        'loc': {
                          'start': {
                            'line': 25,
                            'column': 16,
                            'index': 1241
                          },
                          'end': {
                            'line': 31,
                            'column': 17,
                            'index': 1637
                          }
                        },
                        'await': false,
                        'left': {
                          'type': 'VariableDeclaration',
                          'start': 1246,
                          'end': 1258,
                          'loc': {
                            'start': {
                              'line': 25,
                              'column': 21,
                              'index': 1246
                            },
                            'end': {
                              'line': 25,
                              'column': 33,
                              'index': 1258
                            }
                          },
                          'declarations': [
                            {
                              'type': 'VariableDeclarator',
                              'start': 1252,
                              'end': 1258,
                              'loc': {
                                'start': {
                                  'line': 25,
                                  'column': 27,
                                  'index': 1252
                                },
                                'end': {
                                  'line': 25,
                                  'column': 33,
                                  'index': 1258
                                }
                              },
                              'id': {
                                'type': 'Identifier',
                                'start': 1252,
                                'end': 1258,
                                'loc': {
                                  'start': {
                                    'line': 25,
                                    'column': 27,
                                    'index': 1252
                                  },
                                  'end': {
                                    'line': 25,
                                    'column': 33,
                                    'index': 1258
                                  }
                                },
                                'name': 'plugin'
                              },
                              'init': null
                            }
                          ],
                          'kind': 'const'
                        },
                        'right': {
                          'type': 'CallExpression',
                          'start': 1262,
                          'end': 1293,
                          'loc': {
                            'start': {
                              'line': 25,
                              'column': 37,
                              'index': 1262
                            },
                            'end': {
                              'line': 25,
                              'column': 68,
                              'index': 1293
                            }
                          },
                          'callee': {
                            'type': 'MemberExpression',
                            'start': 1262,
                            'end': 1283,
                            'loc': {
                              'start': {
                                'line': 25,
                                'column': 37,
                                'index': 1262
                              },
                              'end': {
                                'line': 25,
                                'column': 58,
                                'index': 1283
                              }
                            },
                            'object': {
                              'type': 'ThisExpression',
                              'start': 1262,
                              'end': 1266,
                              'loc': {
                                'start': {
                                  'line': 25,
                                  'column': 37,
                                  'index': 1262
                                },
                                'end': {
                                  'line': 25,
                                  'column': 41,
                                  'index': 1266
                                }
                              }
                            },
                            'property': {
                              'type': 'Identifier',
                              'start': 1267,
                              'end': 1283,
                              'loc': {
                                'start': {
                                  'line': 25,
                                  'column': 42,
                                  'index': 1267
                                },
                                'end': {
                                  'line': 25,
                                  'column': 58,
                                  'index': 1283
                                }
                              },
                              'name': 'getSortedPlugins'
                            },
                            'computed': false,
                            'optional': false
                          },
                          'arguments': [
                            {
                              'type': 'Identifier',
                              'start': 1284,
                              'end': 1292,
                              'loc': {
                                'start': {
                                  'line': 25,
                                  'column': 59,
                                  'index': 1284
                                },
                                'end': {
                                  'line': 25,
                                  'column': 67,
                                  'index': 1292
                                }
                              },
                              'name': 'hookName'
                            }
                          ],
                          'optional': false
                        },
                        'body': {
                          'type': 'BlockStatement',
                          'start': 1295,
                          'end': 1637,
                          'loc': {
                            'start': {
                              'line': 25,
                              'column': 70,
                              'index': 1295
                            },
                            'end': {
                              'line': 31,
                              'column': 17,
                              'index': 1637
                            }
                          },
                          'body': [
                            {
                              'type': 'IfStatement',
                              'start': 1321,
                              'end': 1366,
                              'loc': {
                                'start': {
                                  'line': 26,
                                  'column': 24,
                                  'index': 1321
                                },
                                'end': {
                                  'line': 26,
                                  'column': 69,
                                  'index': 1366
                                }
                              },
                              'test': {
                                'type': 'LogicalExpression',
                                'start': 1325,
                                'end': 1355,
                                'loc': {
                                  'start': {
                                    'line': 26,
                                    'column': 28,
                                    'index': 1325
                                  },
                                  'end': {
                                    'line': 26,
                                    'column': 58,
                                    'index': 1355
                                  }
                                },
                                'left': {
                                  'type': 'Identifier',
                                  'start': 1325,
                                  'end': 1332,
                                  'loc': {
                                    'start': {
                                      'line': 26,
                                      'column': 28,
                                      'index': 1325
                                    },
                                    'end': {
                                      'line': 26,
                                      'column': 35,
                                      'index': 1332
                                    }
                                  },
                                  'name': 'skipped'
                                },
                                'operator': '&&',
                                'right': {
                                  'type': 'CallExpression',
                                  'start': 1336,
                                  'end': 1355,
                                  'loc': {
                                    'start': {
                                      'line': 26,
                                      'column': 39,
                                      'index': 1336
                                    },
                                    'end': {
                                      'line': 26,
                                      'column': 58,
                                      'index': 1355
                                    }
                                  },
                                  'callee': {
                                    'type': 'MemberExpression',
                                    'start': 1336,
                                    'end': 1347,
                                    'loc': {
                                      'start': {
                                        'line': 26,
                                        'column': 39,
                                        'index': 1336
                                      },
                                      'end': {
                                        'line': 26,
                                        'column': 50,
                                        'index': 1347
                                      }
                                    },
                                    'object': {
                                      'type': 'Identifier',
                                      'start': 1336,
                                      'end': 1343,
                                      'loc': {
                                        'start': {
                                          'line': 26,
                                          'column': 39,
                                          'index': 1336
                                        },
                                        'end': {
                                          'line': 26,
                                          'column': 46,
                                          'index': 1343
                                        }
                                      },
                                      'name': 'skipped'
                                    },
                                    'property': {
                                      'type': 'Identifier',
                                      'start': 1344,
                                      'end': 1347,
                                      'loc': {
                                        'start': {
                                          'line': 26,
                                          'column': 47,
                                          'index': 1344
                                        },
                                        'end': {
                                          'line': 26,
                                          'column': 50,
                                          'index': 1347
                                        }
                                      },
                                      'name': 'has'
                                    },
                                    'computed': false,
                                    'optional': false
                                  },
                                  'arguments': [
                                    {
                                      'type': 'Identifier',
                                      'start': 1348,
                                      'end': 1354,
                                      'loc': {
                                        'start': {
                                          'line': 26,
                                          'column': 51,
                                          'index': 1348
                                        },
                                        'end': {
                                          'line': 26,
                                          'column': 57,
                                          'index': 1354
                                        }
                                      },
                                      'name': 'plugin'
                                    }
                                  ],
                                  'optional': false
                                }
                              },
                              'consequent': {
                                'type': 'ContinueStatement',
                                'start': 1357,
                                'end': 1366,
                                'loc': {
                                  'start': {
                                    'line': 26,
                                    'column': 60,
                                    'index': 1357
                                  },
                                  'end': {
                                    'line': 26,
                                    'column': 69,
                                    'index': 1366
                                  }
                                },
                                'label': null
                              },
                              'alternate': null
                            },
                            {
                              'type': 'ExpressionStatement',
                              'start': 1391,
                              'end': 1619,
                              'loc': {
                                'start': {
                                  'line': 27,
                                  'column': 24,
                                  'index': 1391
                                },
                                'end': {
                                  'line': 30,
                                  'column': 27,
                                  'index': 1619
                                }
                              },
                              'expression': {
                                'type': 'AssignmentExpression',
                                'start': 1391,
                                'end': 1618,
                                'loc': {
                                  'start': {
                                    'line': 27,
                                    'column': 24,
                                    'index': 1391
                                  },
                                  'end': {
                                    'line': 30,
                                    'column': 26,
                                    'index': 1618
                                  }
                                },
                                'operator': '=',
                                'left': {
                                  'type': 'Identifier',
                                  'start': 1391,
                                  'end': 1398,
                                  'loc': {
                                    'start': {
                                      'line': 27,
                                      'column': 24,
                                      'index': 1391
                                    },
                                    'end': {
                                      'line': 27,
                                      'column': 31,
                                      'index': 1398
                                    }
                                  },
                                  'name': 'promise'
                                },
                                'right': {
                                  'type': 'CallExpression',
                                  'start': 1401,
                                  'end': 1618,
                                  'loc': {
                                    'start': {
                                      'line': 27,
                                      'column': 34,
                                      'index': 1401
                                    },
                                    'end': {
                                      'line': 30,
                                      'column': 26,
                                      'index': 1618
                                    }
                                  },
                                  'callee': {
                                    'type': 'MemberExpression',
                                    'start': 1401,
                                    'end': 1413,
                                    'loc': {
                                      'start': {
                                        'line': 27,
                                        'column': 34,
                                        'index': 1401
                                      },
                                      'end': {
                                        'line': 27,
                                        'column': 46,
                                        'index': 1413
                                      }
                                    },
                                    'object': {
                                      'type': 'Identifier',
                                      'start': 1401,
                                      'end': 1408,
                                      'loc': {
                                        'start': {
                                          'line': 27,
                                          'column': 34,
                                          'index': 1401
                                        },
                                        'end': {
                                          'line': 27,
                                          'column': 41,
                                          'index': 1408
                                        }
                                      },
                                      'name': 'promise'
                                    },
                                    'property': {
                                      'type': 'Identifier',
                                      'start': 1409,
                                      'end': 1413,
                                      'loc': {
                                        'start': {
                                          'line': 27,
                                          'column': 42,
                                          'index': 1409
                                        },
                                        'end': {
                                          'line': 27,
                                          'column': 46,
                                          'index': 1413
                                        }
                                      },
                                      'name': 'then'
                                    },
                                    'computed': false,
                                    'optional': false
                                  },
                                  'arguments': [
                                    {
                                      'type': 'ArrowFunctionExpression',
                                      'start': 1414,
                                      'end': 1617,
                                      'loc': {
                                        'start': {
                                          'line': 27,
                                          'column': 47,
                                          'index': 1414
                                        },
                                        'end': {
                                          'line': 30,
                                          'column': 25,
                                          'index': 1617
                                        }
                                      },
                                      'id': null,
                                      'expression': false,
                                      'generator': false,
                                      'async': false,
                                      'params': [
                                        {
                                          'type': 'Identifier',
                                          'start': 1414,
                                          'end': 1420,
                                          'loc': {
                                            'start': {
                                              'line': 27,
                                              'column': 47,
                                              'index': 1414
                                            },
                                            'end': {
                                              'line': 27,
                                              'column': 53,
                                              'index': 1420
                                            }
                                          },
                                          'name': 'result'
                                        }
                                      ],
                                      'body': {
                                        'type': 'BlockStatement',
                                        'start': 1424,
                                        'end': 1617,
                                        'loc': {
                                          'start': {
                                            'line': 27,
                                            'column': 57,
                                            'index': 1424
                                          },
                                          'end': {
                                            'line': 30,
                                            'column': 25,
                                            'index': 1617
                                          }
                                        },
                                        'body': [
                                          {
                                            'type': 'IfStatement',
                                            'start': 1458,
                                            'end': 1492,
                                            'loc': {
                                              'start': {
                                                'line': 28,
                                                'column': 32,
                                                'index': 1458
                                              },
                                              'end': {
                                                'line': 28,
                                                'column': 66,
                                                'index': 1492
                                              }
                                            },
                                            'test': {
                                              'type': 'BinaryExpression',
                                              'start': 1462,
                                              'end': 1476,
                                              'loc': {
                                                'start': {
                                                  'line': 28,
                                                  'column': 36,
                                                  'index': 1462
                                                },
                                                'end': {
                                                  'line': 28,
                                                  'column': 50,
                                                  'index': 1476
                                                }
                                              },
                                              'left': {
                                                'type': 'Identifier',
                                                'start': 1462,
                                                'end': 1468,
                                                'loc': {
                                                  'start': {
                                                    'line': 28,
                                                    'column': 36,
                                                    'index': 1462
                                                  },
                                                  'end': {
                                                    'line': 28,
                                                    'column': 42,
                                                    'index': 1468
                                                  }
                                                },
                                                'name': 'result'
                                              },
                                              'operator': '!=',
                                              'right': {
                                                'type': 'Literal',
                                                'start': 1472,
                                                'end': 1476,
                                                'loc': {
                                                  'start': {
                                                    'line': 28,
                                                    'column': 46,
                                                    'index': 1472
                                                  },
                                                  'end': {
                                                    'line': 28,
                                                    'column': 50,
                                                    'index': 1476
                                                  }
                                                },
                                                'value': null,
                                                'raw': 'null'
                                              }
                                            },
                                            'consequent': {
                                              'type': 'ReturnStatement',
                                              'start': 1478,
                                              'end': 1492,
                                              'loc': {
                                                'start': {
                                                  'line': 28,
                                                  'column': 52,
                                                  'index': 1478
                                                },
                                                'end': {
                                                  'line': 28,
                                                  'column': 66,
                                                  'index': 1492
                                                }
                                              },
                                              'argument': {
                                                'type': 'Identifier',
                                                'start': 1485,
                                                'end': 1491,
                                                'loc': {
                                                  'start': {
                                                    'line': 28,
                                                    'column': 59,
                                                    'index': 1485
                                                  },
                                                  'end': {
                                                    'line': 28,
                                                    'column': 65,
                                                    'index': 1491
                                                  }
                                                },
                                                'name': 'result'
                                              }
                                            },
                                            'alternate': null
                                          },
                                          {
                                            'type': 'ReturnStatement',
                                            'start': 1525,
                                            'end': 1591,
                                            'loc': {
                                              'start': {
                                                'line': 29,
                                                'column': 32,
                                                'index': 1525
                                              },
                                              'end': {
                                                'line': 29,
                                                'column': 98,
                                                'index': 1591
                                              }
                                            },
                                            'argument': {
                                              'type': 'CallExpression',
                                              'start': 1532,
                                              'end': 1590,
                                              'loc': {
                                                'start': {
                                                  'line': 29,
                                                  'column': 39,
                                                  'index': 1532
                                                },
                                                'end': {
                                                  'line': 29,
                                                  'column': 97,
                                                  'index': 1590
                                                }
                                              },
                                              'callee': {
                                                'type': 'MemberExpression',
                                                'start': 1532,
                                                'end': 1544,
                                                'loc': {
                                                  'start': {
                                                    'line': 29,
                                                    'column': 39,
                                                    'index': 1532
                                                  },
                                                  'end': {
                                                    'line': 29,
                                                    'column': 51,
                                                    'index': 1544
                                                  }
                                                },
                                                'object': {
                                                  'type': 'ThisExpression',
                                                  'start': 1532,
                                                  'end': 1536,
                                                  'loc': {
                                                    'start': {
                                                      'line': 29,
                                                      'column': 39,
                                                      'index': 1532
                                                    },
                                                    'end': {
                                                      'line': 29,
                                                      'column': 43,
                                                      'index': 1536
                                                    }
                                                  }
                                                },
                                                'property': {
                                                  'type': 'Identifier',
                                                  'start': 1537,
                                                  'end': 1544,
                                                  'loc': {
                                                    'start': {
                                                      'line': 29,
                                                      'column': 44,
                                                      'index': 1537
                                                    },
                                                    'end': {
                                                      'line': 29,
                                                      'column': 51,
                                                      'index': 1544
                                                    }
                                                  },
                                                  'name': 'runHook'
                                                },
                                                'computed': false,
                                                'optional': false
                                              },
                                              'arguments': [
                                                {
                                                  'type': 'Identifier',
                                                  'start': 1545,
                                                  'end': 1553,
                                                  'loc': {
                                                    'start': {
                                                      'line': 29,
                                                      'column': 52,
                                                      'index': 1545
                                                    },
                                                    'end': {
                                                      'line': 29,
                                                      'column': 60,
                                                      'index': 1553
                                                    }
                                                  },
                                                  'name': 'hookName'
                                                },
                                                {
                                                  'type': 'Identifier',
                                                  'start': 1555,
                                                  'end': 1565,
                                                  'loc': {
                                                    'start': {
                                                      'line': 29,
                                                      'column': 62,
                                                      'index': 1555
                                                    },
                                                    'end': {
                                                      'line': 29,
                                                      'column': 72,
                                                      'index': 1565
                                                    }
                                                  },
                                                  'name': 'parameters'
                                                },
                                                {
                                                  'type': 'Identifier',
                                                  'start': 1567,
                                                  'end': 1573,
                                                  'loc': {
                                                    'start': {
                                                      'line': 29,
                                                      'column': 74,
                                                      'index': 1567
                                                    },
                                                    'end': {
                                                      'line': 29,
                                                      'column': 80,
                                                      'index': 1573
                                                    }
                                                  },
                                                  'name': 'plugin'
                                                },
                                                {
                                                  'type': 'Identifier',
                                                  'start': 1575,
                                                  'end': 1589,
                                                  'loc': {
                                                    'start': {
                                                      'line': 29,
                                                      'column': 82,
                                                      'index': 1575
                                                    },
                                                    'end': {
                                                      'line': 29,
                                                      'column': 96,
                                                      'index': 1589
                                                    }
                                                  },
                                                  'name': 'replaceContext'
                                                }
                                              ],
                                              'optional': false
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  'optional': false
                                }
                              }
                            }
                          ]
                        }
                      },
                      {
                        'type': 'ReturnStatement',
                        'start': 1654,
                        'end': 1669,
                        'loc': {
                          'start': {
                            'line': 32,
                            'column': 16,
                            'index': 1654
                          },
                          'end': {
                            'line': 32,
                            'column': 31,
                            'index': 1669
                          }
                        },
                        'argument': {
                          'type': 'Identifier',
                          'start': 1661,
                          'end': 1668,
                          'loc': {
                            'start': {
                              'line': 32,
                              'column': 23,
                              'index': 1661
                            },
                            'end': {
                              'line': 32,
                              'column': 30,
                              'index': 1668
                            }
                          },
                          'name': 'promise'
                        }
                      }
                    ]
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
  Issue34: {
    'type': 'Program',
    'start': 0,
    'end': 975,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 23,
        'column': 0,
        'index': 975
      }
    },
    'body': [
      {
        'type': 'ExportDefaultDeclaration',
        'start': 1,
        'end': 974,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 22,
            'column': 1,
            'index': 974
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'ClassDeclaration',
          'start': 16,
          'end': 974,
          'loc': {
            'start': {
              'line': 2,
              'column': 15,
              'index': 16
            },
            'end': {
              'line': 22,
              'column': 1,
              'index': 974
            }
          },
          'id': {
            'type': 'Identifier',
            'start': 22,
            'end': 27,
            'loc': {
              'start': {
                'line': 2,
                'column': 21,
                'index': 22
              },
              'end': {
                'line': 2,
                'column': 26,
                'index': 27
              }
            },
            'name': 'Graph'
          },
          'superClass': null,
          'body': {
            'type': 'ClassBody',
            'start': 28,
            'end': 974,
            'loc': {
              'start': {
                'line': 2,
                'column': 27,
                'index': 28
              },
              'end': {
                'line': 22,
                'column': 1,
                'index': 974
              }
            },
            'body': [
              {
                'type': 'PropertyDefinition',
                'start': 38,
                'end': 80,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 8,
                    'index': 38
                  },
                  'end': {
                    'line': 3,
                    'column': 50,
                    'index': 80
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 47,
                  'end': 58,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 17,
                      'index': 47
                    },
                    'end': {
                      'line': 3,
                      'column': 28,
                      'index': 58
                    }
                  },
                  'name': 'acornParser'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 58,
                  'end': 79,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 28,
                      'index': 58
                    },
                    'end': {
                      'line': 3,
                      'column': 49,
                      'index': 79
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeQuery',
                    'start': 60,
                    'end': 79,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 30,
                        'index': 60
                      },
                      'end': {
                        'line': 3,
                        'column': 49,
                        'index': 79
                      }
                    },
                    'exprName': {
                      'type': 'TSQualifiedName',
                      'start': 67,
                      'end': 79,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 37,
                          'index': 67
                        },
                        'end': {
                          'line': 3,
                          'column': 49,
                          'index': 79
                        }
                      },
                      'left': {
                        'type': 'Identifier',
                        'start': 67,
                        'end': 72,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 37,
                            'index': 67
                          },
                          'end': {
                            'line': 3,
                            'column': 42,
                            'index': 72
                          }
                        },
                        'name': 'acorn'
                      },
                      'right': {
                        'type': 'Identifier',
                        'start': 73,
                        'end': 79,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 43,
                            'index': 73
                          },
                          'end': {
                            'line': 3,
                            'column': 49,
                            'index': 79
                          }
                        },
                        'name': 'Parser'
                      }
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 89,
                'end': 144,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 8,
                    'index': 89
                  },
                  'end': {
                    'line': 4,
                    'column': 63,
                    'index': 144
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 98,
                  'end': 111,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 17,
                      'index': 98
                    },
                    'end': {
                      'line': 4,
                      'column': 30,
                      'index': 111
                    }
                  },
                  'name': 'cachedModules'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 114,
                  'end': 143,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 33,
                      'index': 114
                    },
                    'end': {
                      'line': 4,
                      'column': 62,
                      'index': 143
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 118,
                    'end': 121,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 37,
                        'index': 118
                      },
                      'end': {
                        'line': 4,
                        'column': 40,
                        'index': 121
                      }
                    },
                    'name': 'Map'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 121,
                    'end': 141,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 40,
                        'index': 121
                      },
                      'end': {
                        'line': 4,
                        'column': 60,
                        'index': 141
                      }
                    },
                    'params': [
                      {
                        'type': 'TSStringKeyword',
                        'start': 122,
                        'end': 128,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 41,
                            'index': 122
                          },
                          'end': {
                            'line': 4,
                            'column': 47,
                            'index': 128
                          }
                        }
                      },
                      {
                        'type': 'TSTypeReference',
                        'start': 130,
                        'end': 140,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 49,
                            'index': 130
                          },
                          'end': {
                            'line': 4,
                            'column': 59,
                            'index': 140
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 130,
                          'end': 140,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 49,
                              'index': 130
                            },
                            'end': {
                              'line': 4,
                              'column': 59,
                              'index': 140
                            }
                          },
                          'name': 'ModuleJSON'
                        }
                      }
                    ]
                  },
                  'arguments': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 153,
                'end': 204,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 8,
                    'index': 153
                  },
                  'end': {
                    'line': 5,
                    'column': 59,
                    'index': 204
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 162,
                  'end': 183,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 17,
                      'index': 162
                    },
                    'end': {
                      'line': 5,
                      'column': 38,
                      'index': 183
                    }
                  },
                  'name': 'deoptimizationTracker'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 186,
                  'end': 203,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 41,
                      'index': 186
                    },
                    'end': {
                      'line': 5,
                      'column': 58,
                      'index': 203
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 190,
                    'end': 201,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 45,
                        'index': 190
                      },
                      'end': {
                        'line': 5,
                        'column': 56,
                        'index': 201
                      }
                    },
                    'name': 'PathTracker'
                  },
                  'arguments': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 213,
                'end': 241,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 8,
                    'index': 213
                  },
                  'end': {
                    'line': 6,
                    'column': 36,
                    'index': 241
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 213,
                  'end': 225,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 8,
                      'index': 213
                    },
                    'end': {
                      'line': 6,
                      'column': 20,
                      'index': 225
                    }
                  },
                  'name': 'entryModules'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 225,
                  'end': 235,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 20,
                      'index': 225
                    },
                    'end': {
                      'line': 6,
                      'column': 30,
                      'index': 235
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSArrayType',
                    'start': 227,
                    'end': 235,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 22,
                        'index': 227
                      },
                      'end': {
                        'line': 6,
                        'column': 30,
                        'index': 235
                      }
                    },
                    'elementType': {
                      'type': 'TSTypeReference',
                      'start': 227,
                      'end': 233,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 22,
                          'index': 227
                        },
                        'end': {
                          'line': 6,
                          'column': 28,
                          'index': 233
                        }
                      },
                      'typeName': {
                        'type': 'Identifier',
                        'start': 227,
                        'end': 233,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 22,
                            'index': 227
                          },
                          'end': {
                            'line': 6,
                            'column': 28,
                            'index': 233
                          }
                        },
                        'name': 'Module'
                      }
                    }
                  }
                },
                'value': {
                  'type': 'ArrayExpression',
                  'start': 238,
                  'end': 240,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 33,
                      'index': 238
                    },
                    'end': {
                      'line': 6,
                      'column': 35,
                      'index': 240
                    }
                  },
                  'elements': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 250,
                'end': 285,
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 8,
                    'index': 250
                  },
                  'end': {
                    'line': 7,
                    'column': 43,
                    'index': 285
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 259,
                  'end': 277,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 17,
                      'index': 259
                    },
                    'end': {
                      'line': 7,
                      'column': 35,
                      'index': 277
                    }
                  },
                  'name': 'fileOperationQueue'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 277,
                  'end': 284,
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 35,
                      'index': 277
                    },
                    'end': {
                      'line': 7,
                      'column': 42,
                      'index': 284
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 279,
                    'end': 284,
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 37,
                        'index': 279
                      },
                      'end': {
                        'line': 7,
                        'column': 42,
                        'index': 284
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 279,
                      'end': 284,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 37,
                          'index': 279
                        },
                        'end': {
                          'line': 7,
                          'column': 42,
                          'index': 284
                        }
                      },
                      'name': 'Queue'
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 294,
                'end': 330,
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 8,
                    'index': 294
                  },
                  'end': {
                    'line': 8,
                    'column': 44,
                    'index': 330
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 303,
                  'end': 315,
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 17,
                      'index': 303
                    },
                    'end': {
                      'line': 8,
                      'column': 29,
                      'index': 315
                    }
                  },
                  'name': 'moduleLoader'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 315,
                  'end': 329,
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 29,
                      'index': 315
                    },
                    'end': {
                      'line': 8,
                      'column': 43,
                      'index': 329
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 317,
                    'end': 329,
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 31,
                        'index': 317
                      },
                      'end': {
                        'line': 8,
                        'column': 43,
                        'index': 329
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 317,
                      'end': 329,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 31,
                          'index': 317
                        },
                        'end': {
                          'line': 8,
                          'column': 43,
                          'index': 329
                        }
                      },
                      'name': 'ModuleLoader'
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 339,
                'end': 405,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 8,
                    'index': 339
                  },
                  'end': {
                    'line': 9,
                    'column': 74,
                    'index': 405
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 348,
                  'end': 359,
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 17,
                      'index': 348
                    },
                    'end': {
                      'line': 9,
                      'column': 28,
                      'index': 359
                    }
                  },
                  'name': 'modulesById'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 362,
                  'end': 404,
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 31,
                      'index': 362
                    },
                    'end': {
                      'line': 9,
                      'column': 73,
                      'index': 404
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 366,
                    'end': 369,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 35,
                        'index': 366
                      },
                      'end': {
                        'line': 9,
                        'column': 38,
                        'index': 369
                      }
                    },
                    'name': 'Map'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 369,
                    'end': 402,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 38,
                        'index': 369
                      },
                      'end': {
                        'line': 9,
                        'column': 71,
                        'index': 402
                      }
                    },
                    'params': [
                      {
                        'type': 'TSStringKeyword',
                        'start': 370,
                        'end': 376,
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 39,
                            'index': 370
                          },
                          'end': {
                            'line': 9,
                            'column': 45,
                            'index': 376
                          }
                        }
                      },
                      {
                        'type': 'TSUnionType',
                        'start': 378,
                        'end': 401,
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 47,
                            'index': 378
                          },
                          'end': {
                            'line': 9,
                            'column': 70,
                            'index': 401
                          }
                        },
                        'types': [
                          {
                            'type': 'TSTypeReference',
                            'start': 378,
                            'end': 384,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 47,
                                'index': 378
                              },
                              'end': {
                                'line': 9,
                                'column': 53,
                                'index': 384
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 378,
                              'end': 384,
                              'loc': {
                                'start': {
                                  'line': 9,
                                  'column': 47,
                                  'index': 378
                                },
                                'end': {
                                  'line': 9,
                                  'column': 53,
                                  'index': 384
                                }
                              },
                              'name': 'Module'
                            }
                          },
                          {
                            'type': 'TSTypeReference',
                            'start': 387,
                            'end': 401,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 56,
                                'index': 387
                              },
                              'end': {
                                'line': 9,
                                'column': 70,
                                'index': 401
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 387,
                              'end': 401,
                              'loc': {
                                'start': {
                                  'line': 9,
                                  'column': 56,
                                  'index': 387
                                },
                                'end': {
                                  'line': 9,
                                  'column': 70,
                                  'index': 401
                                }
                              },
                              'name': 'ExternalModule'
                            }
                          }
                        ]
                      }
                    ]
                  },
                  'arguments': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 414,
                'end': 443,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 8,
                    'index': 414
                  },
                  'end': {
                    'line': 10,
                    'column': 37,
                    'index': 443
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 414,
                  'end': 434,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 8,
                      'index': 414
                    },
                    'end': {
                      'line': 10,
                      'column': 28,
                      'index': 434
                    }
                  },
                  'name': 'needsTreeshakingPass'
                },
                'value': {
                  'type': 'Literal',
                  'start': 437,
                  'end': 442,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 31,
                      'index': 437
                    },
                    'end': {
                      'line': 10,
                      'column': 36,
                      'index': 442
                    }
                  },
                  'value': false,
                  'raw': 'false'
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 452,
                'end': 498,
                'loc': {
                  'start': {
                    'line': 11,
                    'column': 8,
                    'index': 452
                  },
                  'end': {
                    'line': 11,
                    'column': 54,
                    'index': 498
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 452,
                  'end': 457,
                  'loc': {
                    'start': {
                      'line': 11,
                      'column': 8,
                      'index': 452
                    },
                    'end': {
                      'line': 11,
                      'column': 13,
                      'index': 457
                    }
                  },
                  'name': 'phase'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 457,
                  'end': 469,
                  'loc': {
                    'start': {
                      'line': 11,
                      'column': 13,
                      'index': 457
                    },
                    'end': {
                      'line': 11,
                      'column': 25,
                      'index': 469
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 459,
                    'end': 469,
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 15,
                        'index': 459
                      },
                      'end': {
                        'line': 11,
                        'column': 25,
                        'index': 469
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 459,
                      'end': 469,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 15,
                          'index': 459
                        },
                        'end': {
                          'line': 11,
                          'column': 25,
                          'index': 469
                        }
                      },
                      'name': 'BuildPhase'
                    }
                  }
                },
                'value': {
                  'type': 'MemberExpression',
                  'start': 472,
                  'end': 497,
                  'loc': {
                    'start': {
                      'line': 11,
                      'column': 28,
                      'index': 472
                    },
                    'end': {
                      'line': 11,
                      'column': 53,
                      'index': 497
                    }
                  },
                  'object': {
                    'type': 'Identifier',
                    'start': 472,
                    'end': 482,
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 28,
                        'index': 472
                      },
                      'end': {
                        'line': 11,
                        'column': 38,
                        'index': 482
                      }
                    },
                    'name': 'BuildPhase'
                  },
                  'property': {
                    'type': 'Identifier',
                    'start': 483,
                    'end': 497,
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 39,
                        'index': 483
                      },
                      'end': {
                        'line': 11,
                        'column': 53,
                        'index': 497
                      }
                    },
                    'name': 'LOAD_AND_PARSE'
                  },
                  'computed': false,
                  'optional': false
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 507,
                'end': 543,
                'loc': {
                  'start': {
                    'line': 12,
                    'column': 8,
                    'index': 507
                  },
                  'end': {
                    'line': 12,
                    'column': 44,
                    'index': 543
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 516,
                  'end': 528,
                  'loc': {
                    'start': {
                      'line': 12,
                      'column': 17,
                      'index': 516
                    },
                    'end': {
                      'line': 12,
                      'column': 29,
                      'index': 528
                    }
                  },
                  'name': 'pluginDriver'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 528,
                  'end': 542,
                  'loc': {
                    'start': {
                      'line': 12,
                      'column': 29,
                      'index': 528
                    },
                    'end': {
                      'line': 12,
                      'column': 43,
                      'index': 542
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 530,
                    'end': 542,
                    'loc': {
                      'start': {
                        'line': 12,
                        'column': 31,
                        'index': 530
                      },
                      'end': {
                        'line': 12,
                        'column': 43,
                        'index': 542
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 530,
                      'end': 542,
                      'loc': {
                        'start': {
                          'line': 12,
                          'column': 31,
                          'index': 530
                        },
                        'end': {
                          'line': 12,
                          'column': 43,
                          'index': 542
                        }
                      },
                      'name': 'PluginDriver'
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 552,
                'end': 590,
                'loc': {
                  'start': {
                    'line': 13,
                    'column': 8,
                    'index': 552
                  },
                  'end': {
                    'line': 13,
                    'column': 46,
                    'index': 590
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 561,
                  'end': 574,
                  'loc': {
                    'start': {
                      'line': 13,
                      'column': 17,
                      'index': 561
                    },
                    'end': {
                      'line': 13,
                      'column': 30,
                      'index': 574
                    }
                  },
                  'name': 'pureFunctions'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 574,
                  'end': 589,
                  'loc': {
                    'start': {
                      'line': 13,
                      'column': 30,
                      'index': 574
                    },
                    'end': {
                      'line': 13,
                      'column': 45,
                      'index': 589
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 576,
                    'end': 589,
                    'loc': {
                      'start': {
                        'line': 13,
                        'column': 32,
                        'index': 576
                      },
                      'end': {
                        'line': 13,
                        'column': 45,
                        'index': 589
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 576,
                      'end': 589,
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 32,
                          'index': 576
                        },
                        'end': {
                          'line': 13,
                          'column': 45,
                          'index': 589
                        }
                      },
                      'name': 'PureFunctions'
                    }
                  }
                },
                'value': null
              },
              {
                'type': 'PropertyDefinition',
                'start': 599,
                'end': 634,
                'loc': {
                  'start': {
                    'line': 14,
                    'column': 8,
                    'index': 599
                  },
                  'end': {
                    'line': 14,
                    'column': 43,
                    'index': 634
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 608,
                  'end': 613,
                  'loc': {
                    'start': {
                      'line': 14,
                      'column': 17,
                      'index': 608
                    },
                    'end': {
                      'line': 14,
                      'column': 22,
                      'index': 613
                    }
                  },
                  'name': 'scope'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 616,
                  'end': 633,
                  'loc': {
                    'start': {
                      'line': 14,
                      'column': 25,
                      'index': 616
                    },
                    'end': {
                      'line': 14,
                      'column': 42,
                      'index': 633
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 620,
                    'end': 631,
                    'loc': {
                      'start': {
                        'line': 14,
                        'column': 29,
                        'index': 620
                      },
                      'end': {
                        'line': 14,
                        'column': 40,
                        'index': 631
                      }
                    },
                    'name': 'GlobalScope'
                  },
                  'arguments': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 643,
                'end': 707,
                'loc': {
                  'start': {
                    'line': 15,
                    'column': 8,
                    'index': 643
                  },
                  'end': {
                    'line': 15,
                    'column': 72,
                    'index': 707
                  }
                },
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 652,
                  'end': 662,
                  'loc': {
                    'start': {
                      'line': 15,
                      'column': 17,
                      'index': 652
                    },
                    'end': {
                      'line': 15,
                      'column': 27,
                      'index': 662
                    }
                  },
                  'name': 'watchFiles'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 662,
                  'end': 684,
                  'loc': {
                    'start': {
                      'line': 15,
                      'column': 27,
                      'index': 662
                    },
                    'end': {
                      'line': 15,
                      'column': 49,
                      'index': 684
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 664,
                    'end': 684,
                    'loc': {
                      'start': {
                        'line': 15,
                        'column': 29,
                        'index': 664
                      },
                      'end': {
                        'line': 15,
                        'column': 49,
                        'index': 684
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 664,
                      'end': 670,
                      'loc': {
                        'start': {
                          'line': 15,
                          'column': 29,
                          'index': 664
                        },
                        'end': {
                          'line': 15,
                          'column': 35,
                          'index': 670
                        }
                      },
                      'name': 'Record'
                    },
                    'typeParameters': {
                      'type': 'TSTypeParameterInstantiation',
                      'start': 670,
                      'end': 684,
                      'loc': {
                        'start': {
                          'line': 15,
                          'column': 35,
                          'index': 670
                        },
                        'end': {
                          'line': 15,
                          'column': 49,
                          'index': 684
                        }
                      },
                      'params': [
                        {
                          'type': 'TSStringKeyword',
                          'start': 671,
                          'end': 677,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 36,
                              'index': 671
                            },
                            'end': {
                              'line': 15,
                              'column': 42,
                              'index': 677
                            }
                          }
                        },
                        {
                          'type': 'TSLiteralType',
                          'start': 679,
                          'end': 683,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 44,
                              'index': 679
                            },
                            'end': {
                              'line': 15,
                              'column': 48,
                              'index': 683
                            }
                          },
                          'literal': {
                            'type': 'Literal',
                            'start': 679,
                            'end': 683,
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 44,
                                'index': 679
                              },
                              'end': {
                                'line': 15,
                                'column': 48,
                                'index': 683
                              }
                            },
                            'value': true,
                            'raw': 'true'
                          }
                        }
                      ]
                    }
                  }
                },
                'value': {
                  'type': 'CallExpression',
                  'start': 687,
                  'end': 706,
                  'loc': {
                    'start': {
                      'line': 15,
                      'column': 52,
                      'index': 687
                    },
                    'end': {
                      'line': 15,
                      'column': 71,
                      'index': 706
                    }
                  },
                  'callee': {
                    'type': 'MemberExpression',
                    'start': 687,
                    'end': 700,
                    'loc': {
                      'start': {
                        'line': 15,
                        'column': 52,
                        'index': 687
                      },
                      'end': {
                        'line': 15,
                        'column': 65,
                        'index': 700
                      }
                    },
                    'object': {
                      'type': 'Identifier',
                      'start': 687,
                      'end': 693,
                      'loc': {
                        'start': {
                          'line': 15,
                          'column': 52,
                          'index': 687
                        },
                        'end': {
                          'line': 15,
                          'column': 58,
                          'index': 693
                        }
                      },
                      'name': 'Object'
                    },
                    'property': {
                      'type': 'Identifier',
                      'start': 694,
                      'end': 700,
                      'loc': {
                        'start': {
                          'line': 15,
                          'column': 59,
                          'index': 694
                        },
                        'end': {
                          'line': 15,
                          'column': 65,
                          'index': 700
                        }
                      },
                      'name': 'create'
                    },
                    'computed': false,
                    'optional': false
                  },
                  'arguments': [
                    {
                      'type': 'Literal',
                      'start': 701,
                      'end': 705,
                      'loc': {
                        'start': {
                          'line': 15,
                          'column': 66,
                          'index': 701
                        },
                        'end': {
                          'line': 15,
                          'column': 70,
                          'index': 705
                        }
                      },
                      'value': null,
                      'raw': 'null'
                    }
                  ],
                  'optional': false
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 716,
                'end': 734,
                'loc': {
                  'start': {
                    'line': 16,
                    'column': 8,
                    'index': 716
                  },
                  'end': {
                    'line': 16,
                    'column': 26,
                    'index': 734
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 716,
                  'end': 725,
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 8,
                      'index': 716
                    },
                    'end': {
                      'line': 16,
                      'column': 17,
                      'index': 725
                    }
                  },
                  'name': 'watchMode'
                },
                'value': {
                  'type': 'Literal',
                  'start': 728,
                  'end': 733,
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 20,
                      'index': 728
                    },
                    'end': {
                      'line': 16,
                      'column': 25,
                      'index': 733
                    }
                  },
                  'value': false,
                  'raw': 'false'
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 744,
                'end': 800,
                'loc': {
                  'start': {
                    'line': 18,
                    'column': 8,
                    'index': 744
                  },
                  'end': {
                    'line': 18,
                    'column': 64,
                    'index': 800
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 761,
                  'end': 776,
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 25,
                      'index': 761
                    },
                    'end': {
                      'line': 18,
                      'column': 40,
                      'index': 776
                    }
                  },
                  'name': 'externalModules'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 776,
                  'end': 794,
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 40,
                      'index': 776
                    },
                    'end': {
                      'line': 18,
                      'column': 58,
                      'index': 794
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSArrayType',
                    'start': 778,
                    'end': 794,
                    'loc': {
                      'start': {
                        'line': 18,
                        'column': 42,
                        'index': 778
                      },
                      'end': {
                        'line': 18,
                        'column': 58,
                        'index': 794
                      }
                    },
                    'elementType': {
                      'type': 'TSTypeReference',
                      'start': 778,
                      'end': 792,
                      'loc': {
                        'start': {
                          'line': 18,
                          'column': 42,
                          'index': 778
                        },
                        'end': {
                          'line': 18,
                          'column': 56,
                          'index': 792
                        }
                      },
                      'typeName': {
                        'type': 'Identifier',
                        'start': 778,
                        'end': 792,
                        'loc': {
                          'start': {
                            'line': 18,
                            'column': 42,
                            'index': 778
                          },
                          'end': {
                            'line': 18,
                            'column': 56,
                            'index': 792
                          }
                        },
                        'name': 'ExternalModule'
                      }
                    }
                  }
                },
                'value': {
                  'type': 'ArrayExpression',
                  'start': 797,
                  'end': 799,
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 61,
                      'index': 797
                    },
                    'end': {
                      'line': 18,
                      'column': 63,
                      'index': 799
                    }
                  },
                  'elements': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 809,
                'end': 853,
                'loc': {
                  'start': {
                    'line': 19,
                    'column': 8,
                    'index': 809
                  },
                  'end': {
                    'line': 19,
                    'column': 52,
                    'index': 853
                  }
                },
                'accessibility': 'private',
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 817,
                  'end': 837,
                  'loc': {
                    'start': {
                      'line': 19,
                      'column': 16,
                      'index': 817
                    },
                    'end': {
                      'line': 19,
                      'column': 36,
                      'index': 837
                    }
                  },
                  'name': 'implicitEntryModules'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 837,
                  'end': 847,
                  'loc': {
                    'start': {
                      'line': 19,
                      'column': 36,
                      'index': 837
                    },
                    'end': {
                      'line': 19,
                      'column': 46,
                      'index': 847
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSArrayType',
                    'start': 839,
                    'end': 847,
                    'loc': {
                      'start': {
                        'line': 19,
                        'column': 38,
                        'index': 839
                      },
                      'end': {
                        'line': 19,
                        'column': 46,
                        'index': 847
                      }
                    },
                    'elementType': {
                      'type': 'TSTypeReference',
                      'start': 839,
                      'end': 845,
                      'loc': {
                        'start': {
                          'line': 19,
                          'column': 38,
                          'index': 839
                        },
                        'end': {
                          'line': 19,
                          'column': 44,
                          'index': 845
                        }
                      },
                      'typeName': {
                        'type': 'Identifier',
                        'start': 839,
                        'end': 845,
                        'loc': {
                          'start': {
                            'line': 19,
                            'column': 38,
                            'index': 839
                          },
                          'end': {
                            'line': 19,
                            'column': 44,
                            'index': 845
                          }
                        },
                        'name': 'Module'
                      }
                    }
                  }
                },
                'value': {
                  'type': 'ArrayExpression',
                  'start': 850,
                  'end': 852,
                  'loc': {
                    'start': {
                      'line': 19,
                      'column': 49,
                      'index': 850
                    },
                    'end': {
                      'line': 19,
                      'column': 51,
                      'index': 852
                    }
                  },
                  'elements': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 862,
                'end': 893,
                'loc': {
                  'start': {
                    'line': 20,
                    'column': 8,
                    'index': 862
                  },
                  'end': {
                    'line': 20,
                    'column': 39,
                    'index': 893
                  }
                },
                'accessibility': 'private',
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 870,
                  'end': 877,
                  'loc': {
                    'start': {
                      'line': 20,
                      'column': 16,
                      'index': 870
                    },
                    'end': {
                      'line': 20,
                      'column': 23,
                      'index': 877
                    }
                  },
                  'name': 'modules'
                },
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 877,
                  'end': 887,
                  'loc': {
                    'start': {
                      'line': 20,
                      'column': 23,
                      'index': 877
                    },
                    'end': {
                      'line': 20,
                      'column': 33,
                      'index': 887
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSArrayType',
                    'start': 879,
                    'end': 887,
                    'loc': {
                      'start': {
                        'line': 20,
                        'column': 25,
                        'index': 879
                      },
                      'end': {
                        'line': 20,
                        'column': 33,
                        'index': 887
                      }
                    },
                    'elementType': {
                      'type': 'TSTypeReference',
                      'start': 879,
                      'end': 885,
                      'loc': {
                        'start': {
                          'line': 20,
                          'column': 25,
                          'index': 879
                        },
                        'end': {
                          'line': 20,
                          'column': 31,
                          'index': 885
                        }
                      },
                      'typeName': {
                        'type': 'Identifier',
                        'start': 879,
                        'end': 885,
                        'loc': {
                          'start': {
                            'line': 20,
                            'column': 25,
                            'index': 879
                          },
                          'end': {
                            'line': 20,
                            'column': 31,
                            'index': 885
                          }
                        },
                        'name': 'Module'
                      }
                    }
                  }
                },
                'value': {
                  'type': 'ArrayExpression',
                  'start': 890,
                  'end': 892,
                  'loc': {
                    'start': {
                      'line': 20,
                      'column': 36,
                      'index': 890
                    },
                    'end': {
                      'line': 20,
                      'column': 38,
                      'index': 892
                    }
                  },
                  'elements': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 902,
                'end': 972,
                'loc': {
                  'start': {
                    'line': 21,
                    'column': 8,
                    'index': 902
                  },
                  'end': {
                    'line': 21,
                    'column': 78,
                    'index': 972
                  }
                },
                'accessibility': 'private',
                'declare': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 918,
                  'end': 929,
                  'loc': {
                    'start': {
                      'line': 21,
                      'column': 24,
                      'index': 918
                    },
                    'end': {
                      'line': 21,
                      'column': 35,
                      'index': 929
                    }
                  },
                  'name': 'pluginCache'
                },
                'optional': true,
                'typeAnnotation': {
                  'type': 'TSTypeAnnotation',
                  'start': 930,
                  'end': 971,
                  'loc': {
                    'start': {
                      'line': 21,
                      'column': 36,
                      'index': 930
                    },
                    'end': {
                      'line': 21,
                      'column': 77,
                      'index': 971
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 932,
                    'end': 971,
                    'loc': {
                      'start': {
                        'line': 21,
                        'column': 38,
                        'index': 932
                      },
                      'end': {
                        'line': 21,
                        'column': 77,
                        'index': 971
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 932,
                      'end': 938,
                      'loc': {
                        'start': {
                          'line': 21,
                          'column': 38,
                          'index': 932
                        },
                        'end': {
                          'line': 21,
                          'column': 44,
                          'index': 938
                        }
                      },
                      'name': 'Record'
                    },
                    'typeParameters': {
                      'type': 'TSTypeParameterInstantiation',
                      'start': 938,
                      'end': 971,
                      'loc': {
                        'start': {
                          'line': 21,
                          'column': 44,
                          'index': 938
                        },
                        'end': {
                          'line': 21,
                          'column': 77,
                          'index': 971
                        }
                      },
                      'params': [
                        {
                          'type': 'TSStringKeyword',
                          'start': 939,
                          'end': 945,
                          'loc': {
                            'start': {
                              'line': 21,
                              'column': 45,
                              'index': 939
                            },
                            'end': {
                              'line': 21,
                              'column': 51,
                              'index': 945
                            }
                          }
                        },
                        {
                          'type': 'TSTypeReference',
                          'start': 947,
                          'end': 970,
                          'loc': {
                            'start': {
                              'line': 21,
                              'column': 53,
                              'index': 947
                            },
                            'end': {
                              'line': 21,
                              'column': 76,
                              'index': 970
                            }
                          },
                          'typeName': {
                            'type': 'Identifier',
                            'start': 947,
                            'end': 970,
                            'loc': {
                              'start': {
                                'line': 21,
                                'column': 53,
                                'index': 947
                              },
                              'end': {
                                'line': 21,
                                'column': 76,
                                'index': 970
                              }
                            },
                            'name': 'SerializablePluginCache'
                          }
                        }
                      ]
                    }
                  }
                },
                'value': null
              }
            ]
          }
        }
      }
    ],
    'sourceType': 'module'
  },
  Issue33: {
    'type': 'Program',
    'start': 0,
    'end': 470,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 14,
        'column': 0,
        'index': 470
      }
    },
    'body': [
      {
        'type': 'ExportDefaultDeclaration',
        'start': 1,
        'end': 469,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 13,
            'column': 2,
            'index': 469
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'ClassDeclaration',
          'start': 16,
          'end': 469,
          'loc': {
            'start': {
              'line': 2,
              'column': 15,
              'index': 16
            },
            'end': {
              'line': 13,
              'column': 2,
              'index': 469
            }
          },
          'id': {
            'type': 'Identifier',
            'start': 22,
            'end': 28,
            'loc': {
              'start': {
                'line': 2,
                'column': 21,
                'index': 22
              },
              'end': {
                'line': 2,
                'column': 27,
                'index': 28
              }
            },
            'name': 'Bundle'
          },
          'superClass': null,
          'body': {
            'type': 'ClassBody',
            'start': 29,
            'end': 469,
            'loc': {
              'start': {
                'line': 2,
                'column': 28,
                'index': 29
              },
              'end': {
                'line': 13,
                'column': 2,
                'index': 469
              }
            },
            'body': [
              {
                'type': 'PropertyDefinition',
                'start': 35,
                'end': 99,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 4,
                    'index': 35
                  },
                  'end': {
                    'line': 3,
                    'column': 68,
                    'index': 99
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 52,
                  'end': 71,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 21,
                      'index': 52
                    },
                    'end': {
                      'line': 3,
                      'column': 40,
                      'index': 71
                    }
                  },
                  'name': 'facadeChunkByModule'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 74,
                  'end': 98,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 43,
                      'index': 74
                    },
                    'end': {
                      'line': 3,
                      'column': 67,
                      'index': 98
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 78,
                    'end': 81,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 47,
                        'index': 78
                      },
                      'end': {
                        'line': 3,
                        'column': 50,
                        'index': 81
                      }
                    },
                    'name': 'Map'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 81,
                    'end': 96,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 50,
                        'index': 81
                      },
                      'end': {
                        'line': 3,
                        'column': 65,
                        'index': 96
                      }
                    },
                    'params': [
                      {
                        'type': 'TSTypeReference',
                        'start': 82,
                        'end': 88,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 51,
                            'index': 82
                          },
                          'end': {
                            'line': 3,
                            'column': 57,
                            'index': 88
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 82,
                          'end': 88,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 51,
                              'index': 82
                            },
                            'end': {
                              'line': 3,
                              'column': 57,
                              'index': 88
                            }
                          },
                          'name': 'Module'
                        }
                      },
                      {
                        'type': 'TSTypeReference',
                        'start': 90,
                        'end': 95,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 59,
                            'index': 90
                          },
                          'end': {
                            'line': 3,
                            'column': 64,
                            'index': 95
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 90,
                          'end': 95,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 59,
                              'index': 90
                            },
                            'end': {
                              'line': 3,
                              'column': 64,
                              'index': 95
                            }
                          },
                          'name': 'Chunk'
                        }
                      }
                    ]
                  },
                  'arguments': []
                }
              },
              {
                'type': 'PropertyDefinition',
                'start': 104,
                'end': 160,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 4,
                    'index': 104
                  },
                  'end': {
                    'line': 4,
                    'column': 60,
                    'index': 160
                  }
                },
                'accessibility': 'private',
                'readonly': true,
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 121,
                  'end': 139,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 21,
                      'index': 121
                    },
                    'end': {
                      'line': 4,
                      'column': 39,
                      'index': 139
                    }
                  },
                  'name': 'includedNamespaces'
                },
                'value': {
                  'type': 'NewExpression',
                  'start': 142,
                  'end': 159,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 42,
                      'index': 142
                    },
                    'end': {
                      'line': 4,
                      'column': 59,
                      'index': 159
                    }
                  },
                  'callee': {
                    'type': 'Identifier',
                    'start': 146,
                    'end': 149,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 46,
                        'index': 146
                      },
                      'end': {
                        'line': 4,
                        'column': 49,
                        'index': 149
                      }
                    },
                    'name': 'Set'
                  },
                  'typeParameters': {
                    'type': 'TSTypeParameterInstantiation',
                    'start': 149,
                    'end': 157,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 49,
                        'index': 149
                      },
                      'end': {
                        'line': 4,
                        'column': 57,
                        'index': 157
                      }
                    },
                    'params': [
                      {
                        'type': 'TSTypeReference',
                        'start': 150,
                        'end': 156,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 50,
                            'index': 150
                          },
                          'end': {
                            'line': 4,
                            'column': 56,
                            'index': 156
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 150,
                          'end': 156,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 50,
                              'index': 150
                            },
                            'end': {
                              'line': 4,
                              'column': 56,
                              'index': 156
                            }
                          },
                          'name': 'Module'
                        }
                      }
                    ]
                  },
                  'arguments': []
                }
              },
              {
                'type': 'MethodDefinition',
                'start': 166,
                'end': 466,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 4,
                    'index': 166
                  },
                  'end': {
                    'line': 12,
                    'column': 8,
                    'index': 466
                  }
                },
                'static': false,
                'computed': false,
                'key': {
                  'type': 'Identifier',
                  'start': 166,
                  'end': 177,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 4,
                      'index': 166
                    },
                    'end': {
                      'line': 6,
                      'column': 15,
                      'index': 177
                    }
                  },
                  'name': 'constructor'
                },
                'kind': 'constructor',
                'value': {
                  'type': 'FunctionExpression',
                  'start': 177,
                  'end': 466,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 15,
                      'index': 177
                    },
                    'end': {
                      'line': 12,
                      'column': 8,
                      'index': 466
                    }
                  },
                  'id': null,
                  'expression': false,
                  'generator': false,
                  'async': false,
                  'params': [
                    {
                      'type': 'TSParameterProperty',
                      'start': 187,
                      'end': 242,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 8,
                          'index': 187
                        },
                        'end': {
                          'line': 7,
                          'column': 63,
                          'index': 242
                        }
                      },
                      'accessibility': 'private',
                      'readonly': true,
                      'parameter': {
                        'type': 'Identifier',
                        'start': 204,
                        'end': 63,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 25,
                            'index': 204
                          },
                          'end': {
                            'line': 7,
                            'column': 63,
                            'index': 242
                          }
                        },
                        'name': 'outputOptions',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 217,
                          'end': 242,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 38,
                              'index': 217
                            },
                            'end': {
                              'line': 7,
                              'column': 63,
                              'index': 242
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 219,
                            'end': 242,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 40,
                                'index': 219
                              },
                              'end': {
                                'line': 7,
                                'column': 63,
                                'index': 242
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 219,
                              'end': 242,
                              'loc': {
                                'start': {
                                  'line': 7,
                                  'column': 40,
                                  'index': 219
                                },
                                'end': {
                                  'line': 7,
                                  'column': 63,
                                  'index': 242
                                }
                              },
                              'name': 'NormalizedOutputOptions'
                            }
                          }
                        }
                      }
                    },
                    {
                      'type': 'TSParameterProperty',
                      'start': 252,
                      'end': 302,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 8,
                          'index': 252
                        },
                        'end': {
                          'line': 8,
                          'column': 58,
                          'index': 302
                        }
                      },
                      'accessibility': 'private',
                      'readonly': true,
                      'parameter': {
                        'type': 'Identifier',
                        'start': 269,
                        'end': 58,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 25,
                            'index': 269
                          },
                          'end': {
                            'line': 8,
                            'column': 58,
                            'index': 302
                          }
                        },
                        'name': 'unsetOptions',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 281,
                          'end': 302,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 37,
                              'index': 281
                            },
                            'end': {
                              'line': 8,
                              'column': 58,
                              'index': 302
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 283,
                            'end': 302,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 39,
                                'index': 283
                              },
                              'end': {
                                'line': 8,
                                'column': 58,
                                'index': 302
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 283,
                              'end': 294,
                              'loc': {
                                'start': {
                                  'line': 8,
                                  'column': 39,
                                  'index': 283
                                },
                                'end': {
                                  'line': 8,
                                  'column': 50,
                                  'index': 294
                                }
                              },
                              'name': 'ReadonlySet'
                            },
                            'typeParameters': {
                              'type': 'TSTypeParameterInstantiation',
                              'start': 294,
                              'end': 302,
                              'loc': {
                                'start': {
                                  'line': 8,
                                  'column': 50,
                                  'index': 294
                                },
                                'end': {
                                  'line': 8,
                                  'column': 58,
                                  'index': 302
                                }
                              },
                              'params': [
                                {
                                  'type': 'TSStringKeyword',
                                  'start': 295,
                                  'end': 301,
                                  'loc': {
                                    'start': {
                                      'line': 8,
                                      'column': 51,
                                      'index': 295
                                    },
                                    'end': {
                                      'line': 8,
                                      'column': 57,
                                      'index': 301
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      'type': 'TSParameterProperty',
                      'start': 312,
                      'end': 365,
                      'loc': {
                        'start': {
                          'line': 9,
                          'column': 8,
                          'index': 312
                        },
                        'end': {
                          'line': 9,
                          'column': 61,
                          'index': 365
                        }
                      },
                      'accessibility': 'private',
                      'readonly': true,
                      'parameter': {
                        'type': 'Identifier',
                        'start': 329,
                        'end': 61,
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 25,
                            'index': 329
                          },
                          'end': {
                            'line': 9,
                            'column': 61,
                            'index': 365
                          }
                        },
                        'name': 'inputOptions',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 341,
                          'end': 365,
                          'loc': {
                            'start': {
                              'line': 9,
                              'column': 37,
                              'index': 341
                            },
                            'end': {
                              'line': 9,
                              'column': 61,
                              'index': 365
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 343,
                            'end': 365,
                            'loc': {
                              'start': {
                                'line': 9,
                                'column': 39,
                                'index': 343
                              },
                              'end': {
                                'line': 9,
                                'column': 61,
                                'index': 365
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 343,
                              'end': 365,
                              'loc': {
                                'start': {
                                  'line': 9,
                                  'column': 39,
                                  'index': 343
                                },
                                'end': {
                                  'line': 9,
                                  'column': 61,
                                  'index': 365
                                }
                              },
                              'name': 'NormalizedInputOptions'
                            }
                          }
                        }
                      }
                    },
                    {
                      'type': 'TSParameterProperty',
                      'start': 375,
                      'end': 418,
                      'loc': {
                        'start': {
                          'line': 10,
                          'column': 8,
                          'index': 375
                        },
                        'end': {
                          'line': 10,
                          'column': 51,
                          'index': 418
                        }
                      },
                      'accessibility': 'private',
                      'readonly': true,
                      'parameter': {
                        'type': 'Identifier',
                        'start': 392,
                        'end': 51,
                        'loc': {
                          'start': {
                            'line': 10,
                            'column': 25,
                            'index': 392
                          },
                          'end': {
                            'line': 10,
                            'column': 51,
                            'index': 418
                          }
                        },
                        'name': 'pluginDriver',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 404,
                          'end': 418,
                          'loc': {
                            'start': {
                              'line': 10,
                              'column': 37,
                              'index': 404
                            },
                            'end': {
                              'line': 10,
                              'column': 51,
                              'index': 418
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 406,
                            'end': 418,
                            'loc': {
                              'start': {
                                'line': 10,
                                'column': 39,
                                'index': 406
                              },
                              'end': {
                                'line': 10,
                                'column': 51,
                                'index': 418
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 406,
                              'end': 418,
                              'loc': {
                                'start': {
                                  'line': 10,
                                  'column': 39,
                                  'index': 406
                                },
                                'end': {
                                  'line': 10,
                                  'column': 51,
                                  'index': 418
                                }
                              },
                              'name': 'PluginDriver'
                            }
                          }
                        }
                      }
                    },
                    {
                      'type': 'TSParameterProperty',
                      'start': 428,
                      'end': 457,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 8,
                          'index': 428
                        },
                        'end': {
                          'line': 11,
                          'column': 37,
                          'index': 457
                        }
                      },
                      'accessibility': 'private',
                      'readonly': true,
                      'parameter': {
                        'type': 'Identifier',
                        'start': 445,
                        'end': 37,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 25,
                            'index': 445
                          },
                          'end': {
                            'line': 11,
                            'column': 37,
                            'index': 457
                          }
                        },
                        'name': 'graph',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 450,
                          'end': 457,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 30,
                              'index': 450
                            },
                            'end': {
                              'line': 11,
                              'column': 37,
                              'index': 457
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSTypeReference',
                            'start': 452,
                            'end': 457,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 32,
                                'index': 452
                              },
                              'end': {
                                'line': 11,
                                'column': 37,
                                'index': 457
                              }
                            },
                            'typeName': {
                              'type': 'Identifier',
                              'start': 452,
                              'end': 457,
                              'loc': {
                                'start': {
                                  'line': 11,
                                  'column': 32,
                                  'index': 452
                                },
                                'end': {
                                  'line': 11,
                                  'column': 37,
                                  'index': 457
                                }
                              },
                              'name': 'Graph'
                            }
                          }
                        }
                      }
                    }
                  ],
                  'body': {
                    'type': 'BlockStatement',
                    'start': 464,
                    'end': 466,
                    'loc': {
                      'start': {
                        'line': 12,
                        'column': 6,
                        'index': 464
                      },
                      'end': {
                        'line': 12,
                        'column': 8,
                        'index': 466
                      }
                    },
                    'body': []
                  }
                }
              }
            ]
          }
        }
      }
    ],
    'sourceType': 'module'
  },
  NormalProperty: {
    'type': 'Program',
    'start': 0,
    'end': 227,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 13,
        'column': 1,
        'index': 227
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 227,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 13,
            'column': 1,
            'index': 227
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 227,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 13,
              'column': 1,
              'index': 227
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 29,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 13,
                  'index': 29
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 17,
                'end': 21,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 1,
                    'index': 17
                  },
                  'end': {
                    'line': 2,
                    'column': 5,
                    'index': 21
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 21,
                'end': 29,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 5,
                    'index': 21
                  },
                  'end': {
                    'line': 2,
                    'column': 13,
                    'index': 29
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 23,
                  'end': 29,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 7,
                      'index': 23
                    },
                    'end': {
                      'line': 2,
                      'column': 13,
                      'index': 29
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 31,
              'end': 42,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 31
                },
                'end': {
                  'line': 3,
                  'column': 12,
                  'index': 42
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 31,
                'end': 34,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 1,
                    'index': 31
                  },
                  'end': {
                    'line': 3,
                    'column': 4,
                    'index': 34
                  }
                },
                'name': 'age'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 34,
                'end': 42,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 4,
                    'index': 34
                  },
                  'end': {
                    'line': 3,
                    'column': 12,
                    'index': 42
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 36,
                  'end': 42,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 6,
                      'index': 36
                    },
                    'end': {
                      'line': 3,
                      'column': 12,
                      'index': 42
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 44,
              'end': 58,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 44
                },
                'end': {
                  'line': 4,
                  'column': 15,
                  'index': 58
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 44,
                'end': 50,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 1,
                    'index': 44
                  },
                  'end': {
                    'line': 4,
                    'column': 7,
                    'index': 50
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 50,
                'end': 58,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 7,
                    'index': 50
                  },
                  'end': {
                    'line': 4,
                    'column': 15,
                    'index': 58
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 52,
                  'end': 58,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 9,
                      'index': 52
                    },
                    'end': {
                      'line': 4,
                      'column': 15,
                      'index': 58
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 60,
              'end': 181,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 1,
                  'index': 60
                },
                'end': {
                  'line': 9,
                  'column': 2,
                  'index': 181
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 60,
                'end': 71,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 1,
                    'index': 60
                  },
                  'end': {
                    'line': 5,
                    'column': 12,
                    'index': 71
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 71,
                'end': 181,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 12,
                    'index': 71
                  },
                  'end': {
                    'line': 9,
                    'column': 2,
                    'index': 181
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 72,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 13,
                        'index': 72
                      },
                      'end': {
                        'line': 5,
                        'column': 25,
                        'index': 84
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 76,
                      'end': 84,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 17,
                          'index': 76
                        },
                        'end': {
                          'line': 5,
                          'column': 25,
                          'index': 84
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 78,
                        'end': 84,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 19,
                            'index': 78
                          },
                          'end': {
                            'line': 5,
                            'column': 25,
                            'index': 84
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 86,
                    'end': 38,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 27,
                        'index': 86
                      },
                      'end': {
                        'line': 5,
                        'column': 38,
                        'index': 97
                      }
                    },
                    'name': 'age',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 89,
                      'end': 97,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 30,
                          'index': 89
                        },
                        'end': {
                          'line': 5,
                          'column': 38,
                          'index': 97
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSNumberKeyword',
                        'start': 91,
                        'end': 97,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 32,
                            'index': 91
                          },
                          'end': {
                            'line': 5,
                            'column': 38,
                            'index': 97
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 99,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 40,
                        'index': 99
                      },
                      'end': {
                        'line': 5,
                        'column': 54,
                        'index': 113
                      }
                    },
                    'name': 'school',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 105,
                      'end': 113,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 46,
                          'index': 105
                        },
                        'end': {
                          'line': 5,
                          'column': 54,
                          'index': 113
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 107,
                        'end': 113,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 48,
                            'index': 107
                          },
                          'end': {
                            'line': 5,
                            'column': 54,
                            'index': 113
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 115,
                  'end': 181,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 56,
                      'index': 115
                    },
                    'end': {
                      'line': 9,
                      'column': 2,
                      'index': 181
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 120,
                      'end': 136,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 3,
                          'index': 120
                        },
                        'end': {
                          'line': 6,
                          'column': 19,
                          'index': 136
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 120,
                        'end': 136,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 3,
                            'index': 120
                          },
                          'end': {
                            'line': 6,
                            'column': 19,
                            'index': 136
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 120,
                          'end': 129,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 3,
                              'index': 120
                            },
                            'end': {
                              'line': 6,
                              'column': 12,
                              'index': 129
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 120,
                            'end': 124,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 3,
                                'index': 120
                              },
                              'end': {
                                'line': 6,
                                'column': 7,
                                'index': 124
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 125,
                            'end': 129,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 8,
                                'index': 125
                              },
                              'end': {
                                'line': 6,
                                'column': 12,
                                'index': 129
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 132,
                          'end': 136,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 15,
                              'index': 132
                            },
                            'end': {
                              'line': 6,
                              'column': 19,
                              'index': 136
                            }
                          },
                          'name': 'name'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 140,
                      'end': 154,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 3,
                          'index': 140
                        },
                        'end': {
                          'line': 7,
                          'column': 17,
                          'index': 154
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 140,
                        'end': 154,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 3,
                            'index': 140
                          },
                          'end': {
                            'line': 7,
                            'column': 17,
                            'index': 154
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 140,
                          'end': 148,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 3,
                              'index': 140
                            },
                            'end': {
                              'line': 7,
                              'column': 11,
                              'index': 148
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 140,
                            'end': 144,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 3,
                                'index': 140
                              },
                              'end': {
                                'line': 7,
                                'column': 7,
                                'index': 144
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 145,
                            'end': 148,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 145
                              },
                              'end': {
                                'line': 7,
                                'column': 11,
                                'index': 148
                              }
                            },
                            'name': 'age'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 151,
                          'end': 154,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 14,
                              'index': 151
                            },
                            'end': {
                              'line': 7,
                              'column': 17,
                              'index': 154
                            }
                          },
                          'name': 'age'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 158,
                      'end': 178,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 3,
                          'index': 158
                        },
                        'end': {
                          'line': 8,
                          'column': 23,
                          'index': 178
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 158,
                        'end': 178,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 3,
                            'index': 158
                          },
                          'end': {
                            'line': 8,
                            'column': 23,
                            'index': 178
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 158,
                          'end': 169,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 3,
                              'index': 158
                            },
                            'end': {
                              'line': 8,
                              'column': 14,
                              'index': 169
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 158,
                            'end': 162,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 3,
                                'index': 158
                              },
                              'end': {
                                'line': 8,
                                'column': 7,
                                'index': 162
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 163,
                            'end': 169,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 8,
                                'index': 163
                              },
                              'end': {
                                'line': 8,
                                'column': 14,
                                'index': 169
                              }
                            },
                            'name': 'school'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 172,
                          'end': 178,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 17,
                              'index': 172
                            },
                            'end': {
                              'line': 8,
                              'column': 23,
                              'index': 178
                            }
                          },
                          'name': 'school'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 183,
              'end': 225,
              'loc': {
                'start': {
                  'line': 10,
                  'column': 1,
                  'index': 183
                },
                'end': {
                  'line': 12,
                  'column': 2,
                  'index': 225
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 183,
                'end': 188,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 1,
                    'index': 183
                  },
                  'end': {
                    'line': 10,
                    'column': 6,
                    'index': 188
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 188,
                'end': 225,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 6,
                    'index': 188
                  },
                  'end': {
                    'line': 12,
                    'column': 2,
                    'index': 225
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 191,
                  'end': 225,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 9,
                      'index': 191
                    },
                    'end': {
                      'line': 12,
                      'column': 2,
                      'index': 225
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 196,
                      'end': 222,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 3,
                          'index': 196
                        },
                        'end': {
                          'line': 11,
                          'column': 29,
                          'index': 222
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 196,
                        'end': 222,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 3,
                            'index': 196
                          },
                          'end': {
                            'line': 11,
                            'column': 29,
                            'index': 222
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 196,
                          'end': 207,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 3,
                              'index': 196
                            },
                            'end': {
                              'line': 11,
                              'column': 14,
                              'index': 207
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 196,
                            'end': 203,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 3,
                                'index': 196
                              },
                              'end': {
                                'line': 11,
                                'column': 10,
                                'index': 203
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 204,
                            'end': 207,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 11,
                                'index': 204
                              },
                              'end': {
                                'line': 11,
                                'column': 14,
                                'index': 207
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
                            'start': 208,
                            'end': 221,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 15,
                                'index': 208
                              },
                              'end': {
                                'line': 11,
                                'column': 28,
                                'index': 221
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  PrivateProperty: {
    'type': 'Program',
    'start': 0,
    'end': 251,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 13,
        'column': 1,
        'index': 251
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 251,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 13,
            'column': 1,
            'index': 251
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 251,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 13,
              'column': 1,
              'index': 251
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 37,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 21,
                  'index': 37
                }
              },
              'accessibility': 'private',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 25,
                'end': 29,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 25
                  },
                  'end': {
                    'line': 2,
                    'column': 13,
                    'index': 29
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 29,
                'end': 37,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 13,
                    'index': 29
                  },
                  'end': {
                    'line': 2,
                    'column': 21,
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
                      'column': 15,
                      'index': 31
                    },
                    'end': {
                      'line': 2,
                      'column': 21,
                      'index': 37
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 39,
              'end': 58,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 39
                },
                'end': {
                  'line': 3,
                  'column': 20,
                  'index': 58
                }
              },
              'accessibility': 'private',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 47,
                'end': 50,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 9,
                    'index': 47
                  },
                  'end': {
                    'line': 3,
                    'column': 12,
                    'index': 50
                  }
                },
                'name': 'age'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 50,
                'end': 58,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 12,
                    'index': 50
                  },
                  'end': {
                    'line': 3,
                    'column': 20,
                    'index': 58
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 52,
                  'end': 58,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 14,
                      'index': 52
                    },
                    'end': {
                      'line': 3,
                      'column': 20,
                      'index': 58
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 60,
              'end': 82,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 60
                },
                'end': {
                  'line': 4,
                  'column': 23,
                  'index': 82
                }
              },
              'accessibility': 'private',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 68,
                'end': 74,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 9,
                    'index': 68
                  },
                  'end': {
                    'line': 4,
                    'column': 15,
                    'index': 74
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 74,
                'end': 82,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 15,
                    'index': 74
                  },
                  'end': {
                    'line': 4,
                    'column': 23,
                    'index': 82
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 76,
                  'end': 82,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 17,
                      'index': 76
                    },
                    'end': {
                      'line': 4,
                      'column': 23,
                      'index': 82
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 84,
              'end': 205,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 1,
                  'index': 84
                },
                'end': {
                  'line': 9,
                  'column': 2,
                  'index': 205
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 84,
                'end': 95,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 1,
                    'index': 84
                  },
                  'end': {
                    'line': 5,
                    'column': 12,
                    'index': 95
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 95,
                'end': 205,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 12,
                    'index': 95
                  },
                  'end': {
                    'line': 9,
                    'column': 2,
                    'index': 205
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 96,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 13,
                        'index': 96
                      },
                      'end': {
                        'line': 5,
                        'column': 25,
                        'index': 108
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 100,
                      'end': 108,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 17,
                          'index': 100
                        },
                        'end': {
                          'line': 5,
                          'column': 25,
                          'index': 108
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 102,
                        'end': 108,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 19,
                            'index': 102
                          },
                          'end': {
                            'line': 5,
                            'column': 25,
                            'index': 108
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 110,
                    'end': 38,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 27,
                        'index': 110
                      },
                      'end': {
                        'line': 5,
                        'column': 38,
                        'index': 121
                      }
                    },
                    'name': 'age',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 113,
                      'end': 121,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 30,
                          'index': 113
                        },
                        'end': {
                          'line': 5,
                          'column': 38,
                          'index': 121
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSNumberKeyword',
                        'start': 115,
                        'end': 121,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 32,
                            'index': 115
                          },
                          'end': {
                            'line': 5,
                            'column': 38,
                            'index': 121
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 123,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 40,
                        'index': 123
                      },
                      'end': {
                        'line': 5,
                        'column': 54,
                        'index': 137
                      }
                    },
                    'name': 'school',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 129,
                      'end': 137,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 46,
                          'index': 129
                        },
                        'end': {
                          'line': 5,
                          'column': 54,
                          'index': 137
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 131,
                        'end': 137,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 48,
                            'index': 131
                          },
                          'end': {
                            'line': 5,
                            'column': 54,
                            'index': 137
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 139,
                  'end': 205,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 56,
                      'index': 139
                    },
                    'end': {
                      'line': 9,
                      'column': 2,
                      'index': 205
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 144,
                      'end': 160,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 3,
                          'index': 144
                        },
                        'end': {
                          'line': 6,
                          'column': 19,
                          'index': 160
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 144,
                        'end': 160,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 3,
                            'index': 144
                          },
                          'end': {
                            'line': 6,
                            'column': 19,
                            'index': 160
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 144,
                          'end': 153,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 3,
                              'index': 144
                            },
                            'end': {
                              'line': 6,
                              'column': 12,
                              'index': 153
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 144,
                            'end': 148,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 3,
                                'index': 144
                              },
                              'end': {
                                'line': 6,
                                'column': 7,
                                'index': 148
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 149,
                            'end': 153,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 8,
                                'index': 149
                              },
                              'end': {
                                'line': 6,
                                'column': 12,
                                'index': 153
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 156,
                          'end': 160,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 15,
                              'index': 156
                            },
                            'end': {
                              'line': 6,
                              'column': 19,
                              'index': 160
                            }
                          },
                          'name': 'name'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 164,
                      'end': 178,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 3,
                          'index': 164
                        },
                        'end': {
                          'line': 7,
                          'column': 17,
                          'index': 178
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 164,
                        'end': 178,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 3,
                            'index': 164
                          },
                          'end': {
                            'line': 7,
                            'column': 17,
                            'index': 178
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 164,
                          'end': 172,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 3,
                              'index': 164
                            },
                            'end': {
                              'line': 7,
                              'column': 11,
                              'index': 172
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 164,
                            'end': 168,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 3,
                                'index': 164
                              },
                              'end': {
                                'line': 7,
                                'column': 7,
                                'index': 168
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 169,
                            'end': 172,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 169
                              },
                              'end': {
                                'line': 7,
                                'column': 11,
                                'index': 172
                              }
                            },
                            'name': 'age'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 175,
                          'end': 178,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 14,
                              'index': 175
                            },
                            'end': {
                              'line': 7,
                              'column': 17,
                              'index': 178
                            }
                          },
                          'name': 'age'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 182,
                      'end': 202,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 3,
                          'index': 182
                        },
                        'end': {
                          'line': 8,
                          'column': 23,
                          'index': 202
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 182,
                        'end': 202,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 3,
                            'index': 182
                          },
                          'end': {
                            'line': 8,
                            'column': 23,
                            'index': 202
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 182,
                          'end': 193,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 3,
                              'index': 182
                            },
                            'end': {
                              'line': 8,
                              'column': 14,
                              'index': 193
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 182,
                            'end': 186,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 3,
                                'index': 182
                              },
                              'end': {
                                'line': 8,
                                'column': 7,
                                'index': 186
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 187,
                            'end': 193,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 8,
                                'index': 187
                              },
                              'end': {
                                'line': 8,
                                'column': 14,
                                'index': 193
                              }
                            },
                            'name': 'school'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 196,
                          'end': 202,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 17,
                              'index': 196
                            },
                            'end': {
                              'line': 8,
                              'column': 23,
                              'index': 202
                            }
                          },
                          'name': 'school'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 207,
              'end': 249,
              'loc': {
                'start': {
                  'line': 10,
                  'column': 1,
                  'index': 207
                },
                'end': {
                  'line': 12,
                  'column': 2,
                  'index': 249
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 207,
                'end': 212,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 1,
                    'index': 207
                  },
                  'end': {
                    'line': 10,
                    'column': 6,
                    'index': 212
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 212,
                'end': 249,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 6,
                    'index': 212
                  },
                  'end': {
                    'line': 12,
                    'column': 2,
                    'index': 249
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 215,
                  'end': 249,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 9,
                      'index': 215
                    },
                    'end': {
                      'line': 12,
                      'column': 2,
                      'index': 249
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 220,
                      'end': 246,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 3,
                          'index': 220
                        },
                        'end': {
                          'line': 11,
                          'column': 29,
                          'index': 246
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 220,
                        'end': 246,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 3,
                            'index': 220
                          },
                          'end': {
                            'line': 11,
                            'column': 29,
                            'index': 246
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 220,
                          'end': 231,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 3,
                              'index': 220
                            },
                            'end': {
                              'line': 11,
                              'column': 14,
                              'index': 231
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 220,
                            'end': 227,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 3,
                                'index': 220
                              },
                              'end': {
                                'line': 11,
                                'column': 10,
                                'index': 227
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 228,
                            'end': 231,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 11,
                                'index': 228
                              },
                              'end': {
                                'line': 11,
                                'column': 14,
                                'index': 231
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
                            'start': 232,
                            'end': 245,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 15,
                                'index': 232
                              },
                              'end': {
                                'line': 11,
                                'column': 28,
                                'index': 245
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  ProtectedProperty: {
    'type': 'Program',
    'start': 0,
    'end': 257,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 13,
        'column': 1,
        'index': 257
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 257,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 13,
            'column': 1,
            'index': 257
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 257,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 13,
              'column': 1,
              'index': 257
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 39,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 23,
                  'index': 39
                }
              },
              'accessibility': 'protected',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 27,
                'end': 31,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 11,
                    'index': 27
                  },
                  'end': {
                    'line': 2,
                    'column': 15,
                    'index': 31
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 31,
                'end': 39,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 15,
                    'index': 31
                  },
                  'end': {
                    'line': 2,
                    'column': 23,
                    'index': 39
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 33,
                  'end': 39,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 17,
                      'index': 33
                    },
                    'end': {
                      'line': 2,
                      'column': 23,
                      'index': 39
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 41,
              'end': 62,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 41
                },
                'end': {
                  'line': 3,
                  'column': 22,
                  'index': 62
                }
              },
              'accessibility': 'protected',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 51,
                'end': 54,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 11,
                    'index': 51
                  },
                  'end': {
                    'line': 3,
                    'column': 14,
                    'index': 54
                  }
                },
                'name': 'age'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 54,
                'end': 62,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 14,
                    'index': 54
                  },
                  'end': {
                    'line': 3,
                    'column': 22,
                    'index': 62
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 56,
                  'end': 62,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 16,
                      'index': 56
                    },
                    'end': {
                      'line': 3,
                      'column': 22,
                      'index': 62
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 64,
              'end': 88,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 64
                },
                'end': {
                  'line': 4,
                  'column': 25,
                  'index': 88
                }
              },
              'accessibility': 'protected',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 74,
                'end': 80,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 11,
                    'index': 74
                  },
                  'end': {
                    'line': 4,
                    'column': 17,
                    'index': 80
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 80,
                'end': 88,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 17,
                    'index': 80
                  },
                  'end': {
                    'line': 4,
                    'column': 25,
                    'index': 88
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 82,
                  'end': 88,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 19,
                      'index': 82
                    },
                    'end': {
                      'line': 4,
                      'column': 25,
                      'index': 88
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 90,
              'end': 211,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 1,
                  'index': 90
                },
                'end': {
                  'line': 9,
                  'column': 2,
                  'index': 211
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 90,
                'end': 101,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 1,
                    'index': 90
                  },
                  'end': {
                    'line': 5,
                    'column': 12,
                    'index': 101
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 101,
                'end': 211,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 12,
                    'index': 101
                  },
                  'end': {
                    'line': 9,
                    'column': 2,
                    'index': 211
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 102,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 13,
                        'index': 102
                      },
                      'end': {
                        'line': 5,
                        'column': 25,
                        'index': 114
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 106,
                      'end': 114,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 17,
                          'index': 106
                        },
                        'end': {
                          'line': 5,
                          'column': 25,
                          'index': 114
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 108,
                        'end': 114,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 19,
                            'index': 108
                          },
                          'end': {
                            'line': 5,
                            'column': 25,
                            'index': 114
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 116,
                    'end': 38,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 27,
                        'index': 116
                      },
                      'end': {
                        'line': 5,
                        'column': 38,
                        'index': 127
                      }
                    },
                    'name': 'age',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 119,
                      'end': 127,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 30,
                          'index': 119
                        },
                        'end': {
                          'line': 5,
                          'column': 38,
                          'index': 127
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSNumberKeyword',
                        'start': 121,
                        'end': 127,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 32,
                            'index': 121
                          },
                          'end': {
                            'line': 5,
                            'column': 38,
                            'index': 127
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 129,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 40,
                        'index': 129
                      },
                      'end': {
                        'line': 5,
                        'column': 54,
                        'index': 143
                      }
                    },
                    'name': 'school',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 135,
                      'end': 143,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 46,
                          'index': 135
                        },
                        'end': {
                          'line': 5,
                          'column': 54,
                          'index': 143
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 137,
                        'end': 143,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 48,
                            'index': 137
                          },
                          'end': {
                            'line': 5,
                            'column': 54,
                            'index': 143
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 145,
                  'end': 211,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 56,
                      'index': 145
                    },
                    'end': {
                      'line': 9,
                      'column': 2,
                      'index': 211
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 150,
                      'end': 166,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 3,
                          'index': 150
                        },
                        'end': {
                          'line': 6,
                          'column': 19,
                          'index': 166
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 150,
                        'end': 166,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 3,
                            'index': 150
                          },
                          'end': {
                            'line': 6,
                            'column': 19,
                            'index': 166
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 150,
                          'end': 159,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 3,
                              'index': 150
                            },
                            'end': {
                              'line': 6,
                              'column': 12,
                              'index': 159
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 150,
                            'end': 154,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 3,
                                'index': 150
                              },
                              'end': {
                                'line': 6,
                                'column': 7,
                                'index': 154
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 155,
                            'end': 159,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 8,
                                'index': 155
                              },
                              'end': {
                                'line': 6,
                                'column': 12,
                                'index': 159
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 162,
                          'end': 166,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 15,
                              'index': 162
                            },
                            'end': {
                              'line': 6,
                              'column': 19,
                              'index': 166
                            }
                          },
                          'name': 'name'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 170,
                      'end': 184,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 3,
                          'index': 170
                        },
                        'end': {
                          'line': 7,
                          'column': 17,
                          'index': 184
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 170,
                        'end': 184,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 3,
                            'index': 170
                          },
                          'end': {
                            'line': 7,
                            'column': 17,
                            'index': 184
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 170,
                          'end': 178,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 3,
                              'index': 170
                            },
                            'end': {
                              'line': 7,
                              'column': 11,
                              'index': 178
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 170,
                            'end': 174,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 3,
                                'index': 170
                              },
                              'end': {
                                'line': 7,
                                'column': 7,
                                'index': 174
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 175,
                            'end': 178,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 175
                              },
                              'end': {
                                'line': 7,
                                'column': 11,
                                'index': 178
                              }
                            },
                            'name': 'age'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 181,
                          'end': 184,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 14,
                              'index': 181
                            },
                            'end': {
                              'line': 7,
                              'column': 17,
                              'index': 184
                            }
                          },
                          'name': 'age'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 188,
                      'end': 208,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 3,
                          'index': 188
                        },
                        'end': {
                          'line': 8,
                          'column': 23,
                          'index': 208
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 188,
                        'end': 208,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 3,
                            'index': 188
                          },
                          'end': {
                            'line': 8,
                            'column': 23,
                            'index': 208
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 188,
                          'end': 199,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 3,
                              'index': 188
                            },
                            'end': {
                              'line': 8,
                              'column': 14,
                              'index': 199
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 188,
                            'end': 192,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 3,
                                'index': 188
                              },
                              'end': {
                                'line': 8,
                                'column': 7,
                                'index': 192
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 193,
                            'end': 199,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 8,
                                'index': 193
                              },
                              'end': {
                                'line': 8,
                                'column': 14,
                                'index': 199
                              }
                            },
                            'name': 'school'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 202,
                          'end': 208,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 17,
                              'index': 202
                            },
                            'end': {
                              'line': 8,
                              'column': 23,
                              'index': 208
                            }
                          },
                          'name': 'school'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 213,
              'end': 255,
              'loc': {
                'start': {
                  'line': 10,
                  'column': 1,
                  'index': 213
                },
                'end': {
                  'line': 12,
                  'column': 2,
                  'index': 255
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 213,
                'end': 218,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 1,
                    'index': 213
                  },
                  'end': {
                    'line': 10,
                    'column': 6,
                    'index': 218
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 218,
                'end': 255,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 6,
                    'index': 218
                  },
                  'end': {
                    'line': 12,
                    'column': 2,
                    'index': 255
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 221,
                  'end': 255,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 9,
                      'index': 221
                    },
                    'end': {
                      'line': 12,
                      'column': 2,
                      'index': 255
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 226,
                      'end': 252,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 3,
                          'index': 226
                        },
                        'end': {
                          'line': 11,
                          'column': 29,
                          'index': 252
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 226,
                        'end': 252,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 3,
                            'index': 226
                          },
                          'end': {
                            'line': 11,
                            'column': 29,
                            'index': 252
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 226,
                          'end': 237,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 3,
                              'index': 226
                            },
                            'end': {
                              'line': 11,
                              'column': 14,
                              'index': 237
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 226,
                            'end': 233,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 3,
                                'index': 226
                              },
                              'end': {
                                'line': 11,
                                'column': 10,
                                'index': 233
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 234,
                            'end': 237,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 11,
                                'index': 234
                              },
                              'end': {
                                'line': 11,
                                'column': 14,
                                'index': 237
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
                            'start': 238,
                            'end': 251,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 15,
                                'index': 238
                              },
                              'end': {
                                'line': 11,
                                'column': 28,
                                'index': 251
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  PublicProperty: {
    'type': 'Program',
    'start': 0,
    'end': 248,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 13,
        'column': 1,
        'index': 248
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 248,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 13,
            'column': 1,
            'index': 248
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 248,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 13,
              'column': 1,
              'index': 248
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 36,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 20,
                  'index': 36
                }
              },
              'accessibility': 'public',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 24,
                'end': 28,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 8,
                    'index': 24
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 28
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
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
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 30,
                  'end': 36,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 14,
                      'index': 30
                    },
                    'end': {
                      'line': 2,
                      'column': 20,
                      'index': 36
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 38,
              'end': 56,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 38
                },
                'end': {
                  'line': 3,
                  'column': 19,
                  'index': 56
                }
              },
              'accessibility': 'public',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 45,
                'end': 48,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 8,
                    'index': 45
                  },
                  'end': {
                    'line': 3,
                    'column': 11,
                    'index': 48
                  }
                },
                'name': 'age'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 48,
                'end': 56,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 11,
                    'index': 48
                  },
                  'end': {
                    'line': 3,
                    'column': 19,
                    'index': 56
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 50,
                  'end': 56,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 13,
                      'index': 50
                    },
                    'end': {
                      'line': 3,
                      'column': 19,
                      'index': 56
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 58,
              'end': 79,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 58
                },
                'end': {
                  'line': 4,
                  'column': 22,
                  'index': 79
                }
              },
              'accessibility': 'public',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 65,
                'end': 71,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 8,
                    'index': 65
                  },
                  'end': {
                    'line': 4,
                    'column': 14,
                    'index': 71
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 71,
                'end': 79,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 14,
                    'index': 71
                  },
                  'end': {
                    'line': 4,
                    'column': 22,
                    'index': 79
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 73,
                  'end': 79,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 16,
                      'index': 73
                    },
                    'end': {
                      'line': 4,
                      'column': 22,
                      'index': 79
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 81,
              'end': 202,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 1,
                  'index': 81
                },
                'end': {
                  'line': 9,
                  'column': 2,
                  'index': 202
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 81,
                'end': 92,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 1,
                    'index': 81
                  },
                  'end': {
                    'line': 5,
                    'column': 12,
                    'index': 92
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 92,
                'end': 202,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 12,
                    'index': 92
                  },
                  'end': {
                    'line': 9,
                    'column': 2,
                    'index': 202
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 93,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 13,
                        'index': 93
                      },
                      'end': {
                        'line': 5,
                        'column': 25,
                        'index': 105
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 97,
                      'end': 105,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 17,
                          'index': 97
                        },
                        'end': {
                          'line': 5,
                          'column': 25,
                          'index': 105
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 99,
                        'end': 105,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 19,
                            'index': 99
                          },
                          'end': {
                            'line': 5,
                            'column': 25,
                            'index': 105
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 107,
                    'end': 38,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 27,
                        'index': 107
                      },
                      'end': {
                        'line': 5,
                        'column': 38,
                        'index': 118
                      }
                    },
                    'name': 'age',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 110,
                      'end': 118,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 30,
                          'index': 110
                        },
                        'end': {
                          'line': 5,
                          'column': 38,
                          'index': 118
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSNumberKeyword',
                        'start': 112,
                        'end': 118,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 32,
                            'index': 112
                          },
                          'end': {
                            'line': 5,
                            'column': 38,
                            'index': 118
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 120,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 40,
                        'index': 120
                      },
                      'end': {
                        'line': 5,
                        'column': 54,
                        'index': 134
                      }
                    },
                    'name': 'school',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 126,
                      'end': 134,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 46,
                          'index': 126
                        },
                        'end': {
                          'line': 5,
                          'column': 54,
                          'index': 134
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 128,
                        'end': 134,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 48,
                            'index': 128
                          },
                          'end': {
                            'line': 5,
                            'column': 54,
                            'index': 134
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 136,
                  'end': 202,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 56,
                      'index': 136
                    },
                    'end': {
                      'line': 9,
                      'column': 2,
                      'index': 202
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 141,
                      'end': 157,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 3,
                          'index': 141
                        },
                        'end': {
                          'line': 6,
                          'column': 19,
                          'index': 157
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 141,
                        'end': 157,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 3,
                            'index': 141
                          },
                          'end': {
                            'line': 6,
                            'column': 19,
                            'index': 157
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 141,
                          'end': 150,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 3,
                              'index': 141
                            },
                            'end': {
                              'line': 6,
                              'column': 12,
                              'index': 150
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 141,
                            'end': 145,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 3,
                                'index': 141
                              },
                              'end': {
                                'line': 6,
                                'column': 7,
                                'index': 145
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 146,
                            'end': 150,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 8,
                                'index': 146
                              },
                              'end': {
                                'line': 6,
                                'column': 12,
                                'index': 150
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 153,
                          'end': 157,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 15,
                              'index': 153
                            },
                            'end': {
                              'line': 6,
                              'column': 19,
                              'index': 157
                            }
                          },
                          'name': 'name'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 161,
                      'end': 175,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 3,
                          'index': 161
                        },
                        'end': {
                          'line': 7,
                          'column': 17,
                          'index': 175
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 161,
                        'end': 175,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 3,
                            'index': 161
                          },
                          'end': {
                            'line': 7,
                            'column': 17,
                            'index': 175
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 161,
                          'end': 169,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 3,
                              'index': 161
                            },
                            'end': {
                              'line': 7,
                              'column': 11,
                              'index': 169
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 161,
                            'end': 165,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 3,
                                'index': 161
                              },
                              'end': {
                                'line': 7,
                                'column': 7,
                                'index': 165
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 166,
                            'end': 169,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 166
                              },
                              'end': {
                                'line': 7,
                                'column': 11,
                                'index': 169
                              }
                            },
                            'name': 'age'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 172,
                          'end': 175,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 14,
                              'index': 172
                            },
                            'end': {
                              'line': 7,
                              'column': 17,
                              'index': 175
                            }
                          },
                          'name': 'age'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 179,
                      'end': 199,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 3,
                          'index': 179
                        },
                        'end': {
                          'line': 8,
                          'column': 23,
                          'index': 199
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 179,
                        'end': 199,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 3,
                            'index': 179
                          },
                          'end': {
                            'line': 8,
                            'column': 23,
                            'index': 199
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 179,
                          'end': 190,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 3,
                              'index': 179
                            },
                            'end': {
                              'line': 8,
                              'column': 14,
                              'index': 190
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 179,
                            'end': 183,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 3,
                                'index': 179
                              },
                              'end': {
                                'line': 8,
                                'column': 7,
                                'index': 183
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 184,
                            'end': 190,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 8,
                                'index': 184
                              },
                              'end': {
                                'line': 8,
                                'column': 14,
                                'index': 190
                              }
                            },
                            'name': 'school'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 193,
                          'end': 199,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 17,
                              'index': 193
                            },
                            'end': {
                              'line': 8,
                              'column': 23,
                              'index': 199
                            }
                          },
                          'name': 'school'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 204,
              'end': 246,
              'loc': {
                'start': {
                  'line': 10,
                  'column': 1,
                  'index': 204
                },
                'end': {
                  'line': 12,
                  'column': 2,
                  'index': 246
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 204,
                'end': 209,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 1,
                    'index': 204
                  },
                  'end': {
                    'line': 10,
                    'column': 6,
                    'index': 209
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 209,
                'end': 246,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 6,
                    'index': 209
                  },
                  'end': {
                    'line': 12,
                    'column': 2,
                    'index': 246
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 212,
                  'end': 246,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 9,
                      'index': 212
                    },
                    'end': {
                      'line': 12,
                      'column': 2,
                      'index': 246
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 217,
                      'end': 243,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 3,
                          'index': 217
                        },
                        'end': {
                          'line': 11,
                          'column': 29,
                          'index': 243
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 217,
                        'end': 243,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 3,
                            'index': 217
                          },
                          'end': {
                            'line': 11,
                            'column': 29,
                            'index': 243
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 217,
                          'end': 228,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 3,
                              'index': 217
                            },
                            'end': {
                              'line': 11,
                              'column': 14,
                              'index': 228
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 217,
                            'end': 224,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 3,
                                'index': 217
                              },
                              'end': {
                                'line': 11,
                                'column': 10,
                                'index': 224
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 225,
                            'end': 228,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 11,
                                'index': 225
                              },
                              'end': {
                                'line': 11,
                                'column': 14,
                                'index': 228
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
                            'start': 229,
                            'end': 242,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 15,
                                'index': 229
                              },
                              'end': {
                                'line': 11,
                                'column': 28,
                                'index': 242
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  ReadonlyProperty: {
    'type': 'Program',
    'start': 0,
    'end': 254,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 13,
        'column': 1,
        'index': 254
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 254,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 13,
            'column': 1,
            'index': 254
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 254,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 13,
              'column': 1,
              'index': 254
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 38,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 22,
                  'index': 38
                }
              },
              'readonly': true,
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 26,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 10,
                    'index': 26
                  },
                  'end': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 30,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  },
                  'end': {
                    'line': 2,
                    'column': 22,
                    'index': 38
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 32,
                  'end': 38,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 16,
                      'index': 32
                    },
                    'end': {
                      'line': 2,
                      'column': 22,
                      'index': 38
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 40,
              'end': 60,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 40
                },
                'end': {
                  'line': 3,
                  'column': 21,
                  'index': 60
                }
              },
              'readonly': true,
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 49,
                'end': 52,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 10,
                    'index': 49
                  },
                  'end': {
                    'line': 3,
                    'column': 13,
                    'index': 52
                  }
                },
                'name': 'age'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 52,
                'end': 60,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 13,
                    'index': 52
                  },
                  'end': {
                    'line': 3,
                    'column': 21,
                    'index': 60
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 54,
                  'end': 60,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 15,
                      'index': 54
                    },
                    'end': {
                      'line': 3,
                      'column': 21,
                      'index': 60
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'PropertyDefinition',
              'start': 62,
              'end': 85,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 62
                },
                'end': {
                  'line': 4,
                  'column': 24,
                  'index': 85
                }
              },
              'readonly': true,
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 71,
                'end': 77,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 10,
                    'index': 71
                  },
                  'end': {
                    'line': 4,
                    'column': 16,
                    'index': 77
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 77,
                'end': 85,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 16,
                    'index': 77
                  },
                  'end': {
                    'line': 4,
                    'column': 24,
                    'index': 85
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 79,
                  'end': 85,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 18,
                      'index': 79
                    },
                    'end': {
                      'line': 4,
                      'column': 24,
                      'index': 85
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 87,
              'end': 208,
              'loc': {
                'start': {
                  'line': 5,
                  'column': 1,
                  'index': 87
                },
                'end': {
                  'line': 9,
                  'column': 2,
                  'index': 208
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 87,
                'end': 98,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 1,
                    'index': 87
                  },
                  'end': {
                    'line': 5,
                    'column': 12,
                    'index': 98
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 98,
                'end': 208,
                'loc': {
                  'start': {
                    'line': 5,
                    'column': 12,
                    'index': 98
                  },
                  'end': {
                    'line': 9,
                    'column': 2,
                    'index': 208
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 99,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 13,
                        'index': 99
                      },
                      'end': {
                        'line': 5,
                        'column': 25,
                        'index': 111
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 103,
                      'end': 111,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 17,
                          'index': 103
                        },
                        'end': {
                          'line': 5,
                          'column': 25,
                          'index': 111
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 105,
                        'end': 111,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 19,
                            'index': 105
                          },
                          'end': {
                            'line': 5,
                            'column': 25,
                            'index': 111
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 113,
                    'end': 38,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 27,
                        'index': 113
                      },
                      'end': {
                        'line': 5,
                        'column': 38,
                        'index': 124
                      }
                    },
                    'name': 'age',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 116,
                      'end': 124,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 30,
                          'index': 116
                        },
                        'end': {
                          'line': 5,
                          'column': 38,
                          'index': 124
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSNumberKeyword',
                        'start': 118,
                        'end': 124,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 32,
                            'index': 118
                          },
                          'end': {
                            'line': 5,
                            'column': 38,
                            'index': 124
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 126,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 5,
                        'column': 40,
                        'index': 126
                      },
                      'end': {
                        'line': 5,
                        'column': 54,
                        'index': 140
                      }
                    },
                    'name': 'school',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 132,
                      'end': 140,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 46,
                          'index': 132
                        },
                        'end': {
                          'line': 5,
                          'column': 54,
                          'index': 140
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 134,
                        'end': 140,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 48,
                            'index': 134
                          },
                          'end': {
                            'line': 5,
                            'column': 54,
                            'index': 140
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 142,
                  'end': 208,
                  'loc': {
                    'start': {
                      'line': 5,
                      'column': 56,
                      'index': 142
                    },
                    'end': {
                      'line': 9,
                      'column': 2,
                      'index': 208
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 147,
                      'end': 163,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 3,
                          'index': 147
                        },
                        'end': {
                          'line': 6,
                          'column': 19,
                          'index': 163
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 147,
                        'end': 163,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 3,
                            'index': 147
                          },
                          'end': {
                            'line': 6,
                            'column': 19,
                            'index': 163
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 147,
                          'end': 156,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 3,
                              'index': 147
                            },
                            'end': {
                              'line': 6,
                              'column': 12,
                              'index': 156
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 147,
                            'end': 151,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 3,
                                'index': 147
                              },
                              'end': {
                                'line': 6,
                                'column': 7,
                                'index': 151
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 152,
                            'end': 156,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 8,
                                'index': 152
                              },
                              'end': {
                                'line': 6,
                                'column': 12,
                                'index': 156
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 159,
                          'end': 163,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 15,
                              'index': 159
                            },
                            'end': {
                              'line': 6,
                              'column': 19,
                              'index': 163
                            }
                          },
                          'name': 'name'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 167,
                      'end': 181,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 3,
                          'index': 167
                        },
                        'end': {
                          'line': 7,
                          'column': 17,
                          'index': 181
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 167,
                        'end': 181,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 3,
                            'index': 167
                          },
                          'end': {
                            'line': 7,
                            'column': 17,
                            'index': 181
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 167,
                          'end': 175,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 3,
                              'index': 167
                            },
                            'end': {
                              'line': 7,
                              'column': 11,
                              'index': 175
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 167,
                            'end': 171,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 3,
                                'index': 167
                              },
                              'end': {
                                'line': 7,
                                'column': 7,
                                'index': 171
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 172,
                            'end': 175,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 172
                              },
                              'end': {
                                'line': 7,
                                'column': 11,
                                'index': 175
                              }
                            },
                            'name': 'age'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 178,
                          'end': 181,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 14,
                              'index': 178
                            },
                            'end': {
                              'line': 7,
                              'column': 17,
                              'index': 181
                            }
                          },
                          'name': 'age'
                        }
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 185,
                      'end': 205,
                      'loc': {
                        'start': {
                          'line': 8,
                          'column': 3,
                          'index': 185
                        },
                        'end': {
                          'line': 8,
                          'column': 23,
                          'index': 205
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 185,
                        'end': 205,
                        'loc': {
                          'start': {
                            'line': 8,
                            'column': 3,
                            'index': 185
                          },
                          'end': {
                            'line': 8,
                            'column': 23,
                            'index': 205
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 185,
                          'end': 196,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 3,
                              'index': 185
                            },
                            'end': {
                              'line': 8,
                              'column': 14,
                              'index': 196
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 185,
                            'end': 189,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 3,
                                'index': 185
                              },
                              'end': {
                                'line': 8,
                                'column': 7,
                                'index': 189
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 190,
                            'end': 196,
                            'loc': {
                              'start': {
                                'line': 8,
                                'column': 8,
                                'index': 190
                              },
                              'end': {
                                'line': 8,
                                'column': 14,
                                'index': 196
                              }
                            },
                            'name': 'school'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 199,
                          'end': 205,
                          'loc': {
                            'start': {
                              'line': 8,
                              'column': 17,
                              'index': 199
                            },
                            'end': {
                              'line': 8,
                              'column': 23,
                              'index': 205
                            }
                          },
                          'name': 'school'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 210,
              'end': 252,
              'loc': {
                'start': {
                  'line': 10,
                  'column': 1,
                  'index': 210
                },
                'end': {
                  'line': 12,
                  'column': 2,
                  'index': 252
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 210,
                'end': 215,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 1,
                    'index': 210
                  },
                  'end': {
                    'line': 10,
                    'column': 6,
                    'index': 215
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 215,
                'end': 252,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 6,
                    'index': 215
                  },
                  'end': {
                    'line': 12,
                    'column': 2,
                    'index': 252
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 218,
                  'end': 252,
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 9,
                      'index': 218
                    },
                    'end': {
                      'line': 12,
                      'column': 2,
                      'index': 252
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 223,
                      'end': 249,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 3,
                          'index': 223
                        },
                        'end': {
                          'line': 11,
                          'column': 29,
                          'index': 249
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 223,
                        'end': 249,
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 3,
                            'index': 223
                          },
                          'end': {
                            'line': 11,
                            'column': 29,
                            'index': 249
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 223,
                          'end': 234,
                          'loc': {
                            'start': {
                              'line': 11,
                              'column': 3,
                              'index': 223
                            },
                            'end': {
                              'line': 11,
                              'column': 14,
                              'index': 234
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 223,
                            'end': 230,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 3,
                                'index': 223
                              },
                              'end': {
                                'line': 11,
                                'column': 10,
                                'index': 230
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 231,
                            'end': 234,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 11,
                                'index': 231
                              },
                              'end': {
                                'line': 11,
                                'column': 14,
                                'index': 234
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
                            'start': 235,
                            'end': 248,
                            'loc': {
                              'start': {
                                'line': 11,
                                'column': 15,
                                'index': 235
                              },
                              'end': {
                                'line': 11,
                                'column': 28,
                                'index': 248
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  StaticFunction: {
    'type': 'Program',
    'start': 0,
    'end': 100,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 100
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 100,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 100
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 100,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 6,
              'column': 1,
              'index': 100
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 47,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 31,
                  'index': 47
                }
              },
              'static': true,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 24,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 8,
                    'index': 24
                  },
                  'end': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  }
                },
                'name': 'school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 30,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  },
                  'end': {
                    'line': 2,
                    'column': 22,
                    'index': 38
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 32,
                  'end': 38,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 16,
                      'index': 32
                    },
                    'end': {
                      'line': 2,
                      'column': 22,
                      'index': 38
                    }
                  }
                }
              },
              'value': {
                'type': 'Literal',
                'start': 41,
                'end': 47,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 25,
                    'index': 41
                  },
                  'end': {
                    'line': 2,
                    'column': 31,
                    'index': 47
                  }
                },
                'value': 'gdut',
                'raw': '\'gdut\''
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 49,
              'end': 98,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 49
                },
                'end': {
                  'line': 5,
                  'column': 2,
                  'index': 98
                }
              },
              'static': true,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 56,
                'end': 61,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 8,
                    'index': 56
                  },
                  'end': {
                    'line': 3,
                    'column': 13,
                    'index': 61
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 61,
                'end': 98,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 13,
                    'index': 61
                  },
                  'end': {
                    'line': 5,
                    'column': 2,
                    'index': 98
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 64,
                  'end': 98,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 16,
                      'index': 64
                    },
                    'end': {
                      'line': 5,
                      'column': 2,
                      'index': 98
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 69,
                      'end': 95,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 3,
                          'index': 69
                        },
                        'end': {
                          'line': 4,
                          'column': 29,
                          'index': 95
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 69,
                        'end': 95,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 3,
                            'index': 69
                          },
                          'end': {
                            'line': 4,
                            'column': 29,
                            'index': 95
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 69,
                          'end': 80,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 3,
                              'index': 69
                            },
                            'end': {
                              'line': 4,
                              'column': 14,
                              'index': 80
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 69,
                            'end': 76,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 3,
                                'index': 69
                              },
                              'end': {
                                'line': 4,
                                'column': 10,
                                'index': 76
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 77,
                            'end': 80,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 11,
                                'index': 77
                              },
                              'end': {
                                'line': 4,
                                'column': 14,
                                'index': 80
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
                            'start': 81,
                            'end': 94,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 15,
                                'index': 81
                              },
                              'end': {
                                'line': 4,
                                'column': 28,
                                'index': 94
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  StaticAsyncMethods: {
    type: 'Program',
    start: 0,
    end: 166,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 8, column: 1, index: 166 }
    },
    body: [
      {
        type: 'ClassDeclaration',
        start: 0,
        end: 166,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 8, column: 1, index: 166 }
        },
        id: {
          type: 'Identifier',
          start: 6,
          end: 13,
          loc: {
            start: { line: 1, column: 6, index: 6 },
            end: { line: 1, column: 13, index: 13 }
          },
          name: 'Student'
        },
        superClass: null,
        body: {
          type: 'ClassBody',
          start: 14,
          end: 166,
          loc: {
            start: { line: 1, column: 14, index: 14 },
            end: { line: 8, column: 1, index: 166 }
          },
          body: [
            {
              type: 'MethodDefinition',
              start: 17,
              end: 87,
              loc: {
                start: { line: 2, column: 1, index: 17 },
                end: { line: 4, column: 2, index: 87 }
              },
              static: true,
              computed: false,
              key: {
                type: 'Identifier',
                start: 30,
                end: 35,
                loc: {
                  start: { line: 2, column: 14, index: 30 },
                  end: { line: 2, column: 19, index: 35 }
                },
                name: 'study'
              },
              kind: 'method',
              value: {
                type: 'FunctionExpression',
                start: 35,
                end: 87,
                loc: {
                  start: { line: 2, column: 19, index: 35 },
                  end: { line: 4, column: 2, index: 87 }
                },
                id: null,
                expression: false,
                generator: false,
                async: true,
                params: [],
                returnType: {
                  type: 'TSTypeAnnotation',
                  start: 37,
                  end: 52,
                  loc: {
                    start: { line: 2, column: 21, index: 37 },
                    end: { line: 2, column: 36, index: 52 }
                  },
                  typeAnnotation: {
                    type: 'TSTypeReference',
                    start: 39,
                    end: 52,
                    loc: {
                      start: { line: 2, column: 23, index: 39 },
                      end: { line: 2, column: 36, index: 52 }
                    },
                    typeName: {
                      type: 'Identifier',
                      start: 39,
                      end: 46,
                      loc: {
                        start: { line: 2, column: 23, index: 39 },
                        end: { line: 2, column: 30, index: 46 }
                      },
                      name: 'Promise'
                    },
                    typeParameters: {
                      type: 'TSTypeParameterInstantiation',
                      start: 46,
                      end: 52,
                      loc: {
                        start: { line: 2, column: 30, index: 46 },
                        end: { line: 2, column: 36, index: 52 }
                      },
                      params: [
                        {
                          type: 'TSVoidKeyword',
                          start: 47,
                          end: 51,
                          loc: {
                            start: { line: 2, column: 31, index: 47 },
                            end: { line: 2, column: 35, index: 51 }
                          }
                        }
                      ]
                    }
                  }
                },
                body: {
                  type: 'BlockStatement',
                  start: 53,
                  end: 87,
                  loc: {
                    start: { line: 2, column: 37, index: 53 },
                    end: { line: 4, column: 2, index: 87 }
                  },
                  body: [
                    {
                      type: 'ExpressionStatement',
                      start: 58,
                      end: 84,
                      loc: {
                        start: { line: 3, column: 3, index: 58 },
                        end: { line: 3, column: 29, index: 84 }
                      },
                      expression: {
                        type: 'CallExpression',
                        start: 58,
                        end: 84,
                        loc: {
                          start: { line: 3, column: 3, index: 58 },
                          end: { line: 3, column: 29, index: 84 }
                        },
                        callee: {
                          type: 'MemberExpression',
                          start: 58,
                          end: 69,
                          loc: {
                            start: { line: 3, column: 3, index: 58 },
                            end: { line: 3, column: 14, index: 69 }
                          },
                          object: {
                            type: 'Identifier',
                            start: 58,
                            end: 65,
                            loc: {
                              start: { line: 3, column: 3, index: 58 },
                              end: { line: 3, column: 10, index: 65 }
                            },
                            name: 'console'
                          },
                          property: {
                            type: 'Identifier',
                            start: 66,
                            end: 69,
                            loc: {
                              start: { line: 3, column: 11, index: 66 },
                              end: { line: 3, column: 14, index: 69 }
                            },
                            name: 'log'
                          },
                          computed: false,
                          optional: false
                        },
                        arguments: [
                          {
                            type: 'Literal',
                            start: 70,
                            end: 83,
                            loc: {
                              start: { line: 3, column: 15, index: 70 },
                              end: { line: 3, column: 28, index: 83 }
                            },
                            value: 'Im studying',
                            raw: '\'Im studying\''
                          }
                        ],
                        optional: false
                      }
                    }
                  ]
                }
              }
            },
            {
              type: 'MethodDefinition',
              start: 89,
              end: 164,
              loc: {
                start: { line: 5, column: 1, index: 89 },
                end: { line: 7, column: 2, index: 164 }
              },
              static: true,
              computed: false,
              key: {
                type: 'Identifier',
                start: 104,
                end: 112,
                loc: {
                  start: { line: 5, column: 16, index: 104 },
                  end: { line: 5, column: 24, index: 112 }
                },
                name: 'students'
              },
              kind: 'method',
              value: {
                type: 'FunctionExpression',
                start: 112,
                end: 164,
                loc: {
                  start: { line: 5, column: 24, index: 112 },
                  end: { line: 7, column: 2, index: 164 }
                },
                id: null,
                expression: false,
                generator: true,
                async: true,
                params: [],
                returnType: {
                  type: 'TSTypeAnnotation',
                  start: 114,
                  end: 137,
                  loc: {
                    start: { line: 5, column: 26, index: 114 },
                    end: { line: 5, column: 49, index: 137 }
                  },
                  typeAnnotation: {
                    type: 'TSTypeReference',
                    start: 116,
                    end: 137,
                    loc: {
                      start: { line: 5, column: 28, index: 116 },
                      end: { line: 5, column: 49, index: 137 }
                    },
                    typeName: {
                      type: 'Identifier',
                      start: 116,
                      end: 129,
                      loc: {
                        start: { line: 5, column: 28, index: 116 },
                        end: { line: 5, column: 41, index: 129 }
                      },
                      name: 'AsyncIterable'
                    },
                    typeParameters: {
                      type: 'TSTypeParameterInstantiation',
                      start: 129,
                      end: 137,
                      loc: {
                        start: { line: 5, column: 41, index: 129 },
                        end: { line: 5, column: 49, index: 137 }
                      },
                      params: [
                        {
                          type: 'TSStringKeyword',
                          start: 130,
                          end: 136,
                          loc: {
                            start: { line: 5, column: 42, index: 130 },
                            end: { line: 5, column: 48, index: 136 }
                          }
                        }
                      ]
                    }
                  }
                },
                body: {
                  type: 'BlockStatement',
                  start: 138,
                  end: 164,
                  loc: {
                    start: { line: 5, column: 50, index: 138 },
                    end: { line: 7, column: 2, index: 164 }
                  },
                  body: [
                    {
                      type: 'ExpressionStatement',
                      start: 143,
                      end: 161,
                      loc: {
                        start: { line: 6, column: 3, index: 143 },
                        end: { line: 6, column: 21, index: 161 }
                      },
                      expression: {
                        type: 'YieldExpression',
                        start: 143,
                        end: 161,
                        loc: {
                          start: { line: 6, column: 3, index: 143 },
                          end: { line: 6, column: 21, index: 161 }
                        },
                        delegate: false,
                        argument: {
                          type: 'Literal',
                          start: 149,
                          end: 161,
                          loc: {
                            start: { line: 6, column: 9, index: 149 },
                            end: { line: 6, column: 21, index: 161 }
                          },
                          value: 'John Smith',
                          raw: '\'John Smith\''
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
    sourceType: 'module'
  },
  StaticGetterSetter: {
    type: 'Program',
    start: 0,
    end: 76,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 4, column: 1, index: 76 }
    },
    body: [
      {
        type: 'ClassDeclaration',
        start: 0,
        end: 76,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 4, column: 1, index: 76 }
        },
        id: {
          type: 'Identifier',
          start: 6,
          end: 7,
          loc: {
            start: { line: 1, column: 6, index: 6 },
            end: { line: 1, column: 7, index: 7 }
          },
          name: 'C'
        },
        superClass: null,
        body: {
          type: 'ClassBody',
          start: 8,
          end: 76,
          loc: {
            start: { line: 1, column: 8, index: 8 },
            end: { line: 4, column: 1, index: 76 }
          },
          body: [
            {
              type: 'MethodDefinition',
              start: 12,
              end: 39,
              loc: {
                start: { line: 2, column: 2, index: 12 },
                end: { line: 2, column: 29, index: 39 }
              },
              static: true,
              computed: false,
              key: {
                type: 'Identifier',
                start: 23,
                end: 26,
                loc: {
                  start: { line: 2, column: 13, index: 23 },
                  end: { line: 2, column: 16, index: 26 }
                },
                name: 'foo'
              },
              kind: 'get',
              value: {
                type: 'FunctionExpression',
                start: 26,
                end: 39,
                loc: {
                  start: { line: 2, column: 16, index: 26 },
                  end: { line: 2, column: 29, index: 39 }
                },
                id: null,
                expression: false,
                generator: false,
                async: false,
                params: [],
                returnType: {
                  type: 'TSTypeAnnotation',
                  start: 28,
                  end: 36,
                  loc: {
                    start: { line: 2, column: 18, index: 28 },
                    end: { line: 2, column: 26, index: 36 }
                  },
                  typeAnnotation: {
                    type: 'TSNumberKeyword',
                    start: 30,
                    end: 36,
                    loc: {
                      start: { line: 2, column: 20, index: 30 },
                      end: { line: 2, column: 26, index: 36 }
                    }
                  }
                },
                body: {
                  type: 'BlockStatement',
                  start: 37,
                  end: 39,
                  loc: {
                    start: { line: 2, column: 27, index: 37 },
                    end: { line: 2, column: 29, index: 39 }
                  },
                  body: []
                }
              }
            },
            {
              type: 'MethodDefinition',
              start: 42,
              end: 74,
              loc: {
                start: { line: 3, column: 2, index: 42 },
                end: { line: 3, column: 34, index: 74 }
              },
              static: true,
              computed: false,
              key: {
                type: 'Identifier',
                start: 53,
                end: 56,
                loc: {
                  start: { line: 3, column: 13, index: 53 },
                  end: { line: 3, column: 16, index: 56 }
                },
                name: 'foo'
              },
              kind: 'set',
              value: {
                type: 'FunctionExpression',
                start: 56,
                end: 74,
                loc: {
                  start: { line: 3, column: 16, index: 56 },
                  end: { line: 3, column: 34, index: 74 }
                },
                id: null,
                expression: false,
                generator: false,
                async: false,
                params: [
                  {
                    type: 'Identifier',
                    start: 57,
                    end: 30,
                    loc: {
                      start: { line: 3, column: 17, index: 57 },
                      end: { line: 3, column: 30, index: 70 }
                    },
                    name: 'value',
                    typeAnnotation: {
                      type: 'TSTypeAnnotation',
                      start: 62,
                      end: 70,
                      loc: {
                        start: { line: 3, column: 22, index: 62 },
                        end: { line: 3, column: 30, index: 70 }
                      },
                      typeAnnotation: {
                        type: 'TSNumberKeyword',
                        start: 64,
                        end: 70,
                        loc: {
                          start: { line: 3, column: 24, index: 64 },
                          end: { line: 3, column: 30, index: 70 }
                        }
                      }
                    }
                  }
                ],
                body: {
                  type: 'BlockStatement',
                  start: 72,
                  end: 74,
                  loc: {
                    start: { line: 3, column: 32, index: 72 },
                    end: { line: 3, column: 34, index: 74 }
                  },
                  body: []
                }
              }
            }
          ]
        }
      }
    ],
    sourceType: 'module'
  },
  ComputedProperty: {
    'type': 'Program',
    'start': 0,
    'end': 140,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 9,
        'column': 1,
        'index': 140
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 140,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 9,
            'column': 1,
            'index': 140
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 140,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 9,
              'column': 1,
              'index': 140
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 40,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 24,
                  'index': 40
                }
              },
              'accessibility': 'private',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 25,
                'end': 32,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 25
                  },
                  'end': {
                    'line': 2,
                    'column': 16,
                    'index': 32
                  }
                },
                'name': '_school'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 32,
                'end': 40,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 16,
                    'index': 32
                  },
                  'end': {
                    'line': 2,
                    'column': 24,
                    'index': 40
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 34,
                  'end': 40,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 18,
                      'index': 34
                    },
                    'end': {
                      'line': 2,
                      'column': 24,
                      'index': 40
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 42,
              'end': 82,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 42
                },
                'end': {
                  'line': 5,
                  'column': 2,
                  'index': 82
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 46,
                'end': 52,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 5,
                    'index': 46
                  },
                  'end': {
                    'line': 3,
                    'column': 11,
                    'index': 52
                  }
                },
                'name': 'school'
              },
              'kind': 'get',
              'value': {
                'type': 'FunctionExpression',
                'start': 52,
                'end': 82,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 11,
                    'index': 52
                  },
                  'end': {
                    'line': 5,
                    'column': 2,
                    'index': 82
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 55,
                  'end': 82,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 14,
                      'index': 55
                    },
                    'end': {
                      'line': 5,
                      'column': 2,
                      'index': 82
                    }
                  },
                  'body': [
                    {
                      'type': 'ReturnStatement',
                      'start': 60,
                      'end': 79,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 3,
                          'index': 60
                        },
                        'end': {
                          'line': 4,
                          'column': 22,
                          'index': 79
                        }
                      },
                      'argument': {
                        'type': 'MemberExpression',
                        'start': 67,
                        'end': 79,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 10,
                            'index': 67
                          },
                          'end': {
                            'line': 4,
                            'column': 22,
                            'index': 79
                          }
                        },
                        'object': {
                          'type': 'ThisExpression',
                          'start': 67,
                          'end': 71,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 10,
                              'index': 67
                            },
                            'end': {
                              'line': 4,
                              'column': 14,
                              'index': 71
                            }
                          }
                        },
                        'property': {
                          'type': 'Identifier',
                          'start': 72,
                          'end': 79,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 15,
                              'index': 72
                            },
                            'end': {
                              'line': 4,
                              'column': 22,
                              'index': 79
                            }
                          },
                          'name': '_school'
                        },
                        'computed': false,
                        'optional': false
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 84,
              'end': 138,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 1,
                  'index': 84
                },
                'end': {
                  'line': 8,
                  'column': 2,
                  'index': 138
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 88,
                'end': 94,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 5,
                    'index': 88
                  },
                  'end': {
                    'line': 6,
                    'column': 11,
                    'index': 94
                  }
                },
                'name': 'school'
              },
              'kind': 'set',
              'value': {
                'type': 'FunctionExpression',
                'start': 94,
                'end': 138,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 11,
                    'index': 94
                  },
                  'end': {
                    'line': 8,
                    'column': 2,
                    'index': 138
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 95,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 12,
                        'index': 95
                      },
                      'end': {
                        'line': 6,
                        'column': 25,
                        'index': 108
                      }
                    },
                    'name': 'value',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 100,
                      'end': 108,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 17,
                          'index': 100
                        },
                        'end': {
                          'line': 6,
                          'column': 25,
                          'index': 108
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 102,
                        'end': 108,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 19,
                            'index': 102
                          },
                          'end': {
                            'line': 6,
                            'column': 25,
                            'index': 108
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 110,
                  'end': 138,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 27,
                      'index': 110
                    },
                    'end': {
                      'line': 8,
                      'column': 2,
                      'index': 138
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 115,
                      'end': 135,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 3,
                          'index': 115
                        },
                        'end': {
                          'line': 7,
                          'column': 23,
                          'index': 135
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 115,
                        'end': 135,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 3,
                            'index': 115
                          },
                          'end': {
                            'line': 7,
                            'column': 23,
                            'index': 135
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 115,
                          'end': 127,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 3,
                              'index': 115
                            },
                            'end': {
                              'line': 7,
                              'column': 15,
                              'index': 127
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 115,
                            'end': 119,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 3,
                                'index': 115
                              },
                              'end': {
                                'line': 7,
                                'column': 7,
                                'index': 119
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 120,
                            'end': 127,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 120
                              },
                              'end': {
                                'line': 7,
                                'column': 15,
                                'index': 127
                              }
                            },
                            'name': '_school'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 130,
                          'end': 135,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 18,
                              'index': 130
                            },
                            'end': {
                              'line': 7,
                              'column': 23,
                              'index': 135
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
      }
    ],
    'sourceType': 'module'
  },
  AbstractClass: {
    'type': 'Program',
    'start': 0,
    'end': 392,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 20,
        'column': 1,
        'index': 392
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 181,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 10,
            'column': 1,
            'index': 181
          }
        },
        'abstract': true,
        'id': {
          'type': 'Identifier',
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
          'name': 'Person'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 22,
          'end': 181,
          'loc': {
            'start': {
              'line': 1,
              'column': 22,
              'index': 22
            },
            'end': {
              'line': 10,
              'column': 1,
              'index': 181
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 26,
              'end': 39,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 26
                },
                'end': {
                  'line': 2,
                  'column': 15,
                  'index': 39
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 26,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 26
                  },
                  'end': {
                    'line': 2,
                    'column': 6,
                    'index': 30
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 30,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 6,
                    'index': 30
                  },
                  'end': {
                    'line': 2,
                    'column': 14,
                    'index': 38
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 32,
                  'end': 38,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 8,
                      'index': 32
                    },
                    'end': {
                      'line': 2,
                      'column': 14,
                      'index': 38
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 42,
              'end': 95,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 2,
                  'index': 42
                },
                'end': {
                  'line': 5,
                  'column': 3,
                  'index': 95
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 42,
                'end': 53,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 2,
                    'index': 42
                  },
                  'end': {
                    'line': 3,
                    'column': 13,
                    'index': 53
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 53,
                'end': 95,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 13,
                    'index': 53
                  },
                  'end': {
                    'line': 5,
                    'column': 3,
                    'index': 95
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 54,
                    'end': 26,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 14,
                        'index': 54
                      },
                      'end': {
                        'line': 3,
                        'column': 26,
                        'index': 66
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 58,
                      'end': 66,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 18,
                          'index': 58
                        },
                        'end': {
                          'line': 3,
                          'column': 26,
                          'index': 66
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 60,
                        'end': 66,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 20,
                            'index': 60
                          },
                          'end': {
                            'line': 3,
                            'column': 26,
                            'index': 66
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 68,
                  'end': 95,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 28,
                      'index': 68
                    },
                    'end': {
                      'line': 5,
                      'column': 3,
                      'index': 95
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 74,
                      'end': 91,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 4,
                          'index': 74
                        },
                        'end': {
                          'line': 4,
                          'column': 21,
                          'index': 91
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 74,
                        'end': 90,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 4,
                            'index': 74
                          },
                          'end': {
                            'line': 4,
                            'column': 20,
                            'index': 90
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 74,
                          'end': 83,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 4,
                              'index': 74
                            },
                            'end': {
                              'line': 4,
                              'column': 13,
                              'index': 83
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 74,
                            'end': 78,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 4,
                                'index': 74
                              },
                              'end': {
                                'line': 4,
                                'column': 8,
                                'index': 78
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 79,
                            'end': 83,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 9,
                                'index': 79
                              },
                              'end': {
                                'line': 4,
                                'column': 13,
                                'index': 83
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 86,
                          'end': 90,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 16,
                              'index': 86
                            },
                            'end': {
                              'line': 4,
                              'column': 20,
                              'index': 90
                            }
                          },
                          'name': 'name'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 98,
              'end': 146,
              'loc': {
                'start': {
                  'line': 6,
                  'column': 2,
                  'index': 98
                },
                'end': {
                  'line': 8,
                  'column': 3,
                  'index': 146
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 98,
                'end': 105,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 2,
                    'index': 98
                  },
                  'end': {
                    'line': 6,
                    'column': 9,
                    'index': 105
                  }
                },
                'name': 'display'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 105,
                'end': 146,
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 9,
                    'index': 105
                  },
                  'end': {
                    'line': 8,
                    'column': 3,
                    'index': 146
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 107,
                  'end': 113,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 11,
                      'index': 107
                    },
                    'end': {
                      'line': 6,
                      'column': 17,
                      'index': 113
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 109,
                    'end': 113,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 13,
                        'index': 109
                      },
                      'end': {
                        'line': 6,
                        'column': 17,
                        'index': 113
                      }
                    }
                  }
                },
                'body': {
                  'type': 'BlockStatement',
                  'start': 113,
                  'end': 146,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 17,
                      'index': 113
                    },
                    'end': {
                      'line': 8,
                      'column': 3,
                      'index': 146
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 119,
                      'end': 142,
                      'loc': {
                        'start': {
                          'line': 7,
                          'column': 4,
                          'index': 119
                        },
                        'end': {
                          'line': 7,
                          'column': 27,
                          'index': 142
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 119,
                        'end': 141,
                        'loc': {
                          'start': {
                            'line': 7,
                            'column': 4,
                            'index': 119
                          },
                          'end': {
                            'line': 7,
                            'column': 26,
                            'index': 141
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 119,
                          'end': 130,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 4,
                              'index': 119
                            },
                            'end': {
                              'line': 7,
                              'column': 15,
                              'index': 130
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 119,
                            'end': 126,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 4,
                                'index': 119
                              },
                              'end': {
                                'line': 7,
                                'column': 11,
                                'index': 126
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 127,
                            'end': 130,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 12,
                                'index': 127
                              },
                              'end': {
                                'line': 7,
                                'column': 15,
                                'index': 130
                              }
                            },
                            'name': 'log'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'arguments': [
                          {
                            'type': 'MemberExpression',
                            'start': 131,
                            'end': 140,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 16,
                                'index': 131
                              },
                              'end': {
                                'line': 7,
                                'column': 25,
                                'index': 140
                              }
                            },
                            'object': {
                              'type': 'ThisExpression',
                              'start': 131,
                              'end': 135,
                              'loc': {
                                'start': {
                                  'line': 7,
                                  'column': 16,
                                  'index': 131
                                },
                                'end': {
                                  'line': 7,
                                  'column': 20,
                                  'index': 135
                                }
                              }
                            },
                            'property': {
                              'type': 'Identifier',
                              'start': 136,
                              'end': 140,
                              'loc': {
                                'start': {
                                  'line': 7,
                                  'column': 21,
                                  'index': 136
                                },
                                'end': {
                                  'line': 7,
                                  'column': 25,
                                  'index': 140
                                }
                              },
                              'name': 'name'
                            },
                            'computed': false,
                            'optional': false
                          }
                        ],
                        'optional': false
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 149,
              'end': 179,
              'loc': {
                'start': {
                  'line': 9,
                  'column': 2,
                  'index': 149
                },
                'end': {
                  'line': 9,
                  'column': 32,
                  'index': 179
                }
              },
              'abstract': true,
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 158,
                'end': 162,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 11,
                    'index': 158
                  },
                  'end': {
                    'line': 9,
                    'column': 15,
                    'index': 162
                  }
                },
                'name': 'find'
              },
              'kind': 'method',
              'value': {
                'type': 'TSDeclareMethod',
                'start': 162,
                'end': 179,
                'loc': {
                  'start': {
                    'line': 9,
                    'column': 15,
                    'index': 162
                  },
                  'end': {
                    'line': 9,
                    'column': 32,
                    'index': 179
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 163,
                    'end': 22,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 16,
                        'index': 163
                      },
                      'end': {
                        'line': 9,
                        'column': 22,
                        'index': 169
                      }
                    },
                    'name': 'string'
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 170,
                  'end': 178,
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 23,
                      'index': 170
                    },
                    'end': {
                      'line': 9,
                      'column': 31,
                      'index': 178
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 172,
                    'end': 178,
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 25,
                        'index': 172
                      },
                      'end': {
                        'line': 9,
                        'column': 31,
                        'index': 178
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 172,
                      'end': 178,
                      'loc': {
                        'start': {
                          'line': 9,
                          'column': 25,
                          'index': 172
                        },
                        'end': {
                          'line': 9,
                          'column': 31,
                          'index': 178
                        }
                      },
                      'name': 'Person'
                    }
                  }
                }
              }
            }
          ]
        }
      },
      {
        'type': 'ClassDeclaration',
        'start': 182,
        'end': 392,
        'loc': {
          'start': {
            'line': 11,
            'column': 0,
            'index': 182
          },
          'end': {
            'line': 20,
            'column': 1,
            'index': 392
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 188,
          'end': 196,
          'loc': {
            'start': {
              'line': 11,
              'column': 6,
              'index': 188
            },
            'end': {
              'line': 11,
              'column': 14,
              'index': 196
            }
          },
          'name': 'Employee'
        },
        'superClass': {
          'type': 'Identifier',
          'start': 205,
          'end': 211,
          'loc': {
            'start': {
              'line': 11,
              'column': 23,
              'index': 205
            },
            'end': {
              'line': 11,
              'column': 29,
              'index': 211
            }
          },
          'name': 'Person'
        },
        'body': {
          'type': 'ClassBody',
          'start': 212,
          'end': 392,
          'loc': {
            'start': {
              'line': 11,
              'column': 30,
              'index': 212
            },
            'end': {
              'line': 20,
              'column': 1,
              'index': 392
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 216,
              'end': 232,
              'loc': {
                'start': {
                  'line': 12,
                  'column': 2,
                  'index': 216
                },
                'end': {
                  'line': 12,
                  'column': 18,
                  'index': 232
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 216,
                'end': 223,
                'loc': {
                  'start': {
                    'line': 12,
                    'column': 2,
                    'index': 216
                  },
                  'end': {
                    'line': 12,
                    'column': 9,
                    'index': 223
                  }
                },
                'name': 'empCode'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 223,
                'end': 231,
                'loc': {
                  'start': {
                    'line': 12,
                    'column': 9,
                    'index': 223
                  },
                  'end': {
                    'line': 12,
                    'column': 17,
                    'index': 231
                  }
                },
                'typeAnnotation': {
                  'type': 'TSNumberKeyword',
                  'start': 225,
                  'end': 231,
                  'loc': {
                    'start': {
                      'line': 12,
                      'column': 11,
                      'index': 225
                    },
                    'end': {
                      'line': 12,
                      'column': 17,
                      'index': 231
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 235,
              'end': 322,
              'loc': {
                'start': {
                  'line': 13,
                  'column': 2,
                  'index': 235
                },
                'end': {
                  'line': 16,
                  'column': 3,
                  'index': 322
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 235,
                'end': 246,
                'loc': {
                  'start': {
                    'line': 13,
                    'column': 2,
                    'index': 235
                  },
                  'end': {
                    'line': 13,
                    'column': 13,
                    'index': 246
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 246,
                'end': 322,
                'loc': {
                  'start': {
                    'line': 13,
                    'column': 13,
                    'index': 246
                  },
                  'end': {
                    'line': 16,
                    'column': 3,
                    'index': 322
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 247,
                    'end': 26,
                    'loc': {
                      'start': {
                        'line': 13,
                        'column': 14,
                        'index': 247
                      },
                      'end': {
                        'line': 13,
                        'column': 26,
                        'index': 259
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 251,
                      'end': 259,
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 18,
                          'index': 251
                        },
                        'end': {
                          'line': 13,
                          'column': 26,
                          'index': 259
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 253,
                        'end': 259,
                        'loc': {
                          'start': {
                            'line': 13,
                            'column': 20,
                            'index': 253
                          },
                          'end': {
                            'line': 13,
                            'column': 26,
                            'index': 259
                          }
                        }
                      }
                    }
                  },
                  {
                    'type': 'Identifier',
                    'start': 261,
                    'end': 40,
                    'loc': {
                      'start': {
                        'line': 13,
                        'column': 28,
                        'index': 261
                      },
                      'end': {
                        'line': 13,
                        'column': 40,
                        'index': 273
                      }
                    },
                    'name': 'code',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 265,
                      'end': 273,
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 32,
                          'index': 265
                        },
                        'end': {
                          'line': 13,
                          'column': 40,
                          'index': 273
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSNumberKeyword',
                        'start': 267,
                        'end': 273,
                        'loc': {
                          'start': {
                            'line': 13,
                            'column': 34,
                            'index': 267
                          },
                          'end': {
                            'line': 13,
                            'column': 40,
                            'index': 273
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 275,
                  'end': 322,
                  'loc': {
                    'start': {
                      'line': 13,
                      'column': 42,
                      'index': 275
                    },
                    'end': {
                      'line': 16,
                      'column': 3,
                      'index': 322
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 281,
                      'end': 293,
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 4,
                          'index': 281
                        },
                        'end': {
                          'line': 14,
                          'column': 16,
                          'index': 293
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 281,
                        'end': 292,
                        'loc': {
                          'start': {
                            'line': 14,
                            'column': 4,
                            'index': 281
                          },
                          'end': {
                            'line': 14,
                            'column': 15,
                            'index': 292
                          }
                        },
                        'callee': {
                          'type': 'Super',
                          'start': 281,
                          'end': 286,
                          'loc': {
                            'start': {
                              'line': 14,
                              'column': 4,
                              'index': 281
                            },
                            'end': {
                              'line': 14,
                              'column': 9,
                              'index': 286
                            }
                          }
                        },
                        'arguments': [
                          {
                            'type': 'Identifier',
                            'start': 287,
                            'end': 291,
                            'loc': {
                              'start': {
                                'line': 14,
                                'column': 10,
                                'index': 287
                              },
                              'end': {
                                'line': 14,
                                'column': 14,
                                'index': 291
                              }
                            },
                            'name': 'name'
                          }
                        ],
                        'optional': false
                      }
                    },
                    {
                      'type': 'ExpressionStatement',
                      'start': 298,
                      'end': 318,
                      'loc': {
                        'start': {
                          'line': 15,
                          'column': 4,
                          'index': 298
                        },
                        'end': {
                          'line': 15,
                          'column': 24,
                          'index': 318
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 298,
                        'end': 317,
                        'loc': {
                          'start': {
                            'line': 15,
                            'column': 4,
                            'index': 298
                          },
                          'end': {
                            'line': 15,
                            'column': 23,
                            'index': 317
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 298,
                          'end': 310,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 4,
                              'index': 298
                            },
                            'end': {
                              'line': 15,
                              'column': 16,
                              'index': 310
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 298,
                            'end': 302,
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 4,
                                'index': 298
                              },
                              'end': {
                                'line': 15,
                                'column': 8,
                                'index': 302
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 303,
                            'end': 310,
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 9,
                                'index': 303
                              },
                              'end': {
                                'line': 15,
                                'column': 16,
                                'index': 310
                              }
                            },
                            'name': 'empCode'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 313,
                          'end': 317,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 19,
                              'index': 313
                            },
                            'end': {
                              'line': 15,
                              'column': 23,
                              'index': 317
                            }
                          },
                          'name': 'code'
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 325,
              'end': 390,
              'loc': {
                'start': {
                  'line': 17,
                  'column': 2,
                  'index': 325
                },
                'end': {
                  'line': 19,
                  'column': 3,
                  'index': 390
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 325,
                'end': 329,
                'loc': {
                  'start': {
                    'line': 17,
                    'column': 2,
                    'index': 325
                  },
                  'end': {
                    'line': 17,
                    'column': 6,
                    'index': 329
                  }
                },
                'name': 'find'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 329,
                'end': 390,
                'loc': {
                  'start': {
                    'line': 17,
                    'column': 6,
                    'index': 329
                  },
                  'end': {
                    'line': 19,
                    'column': 3,
                    'index': 390
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 330,
                    'end': 18,
                    'loc': {
                      'start': {
                        'line': 17,
                        'column': 7,
                        'index': 330
                      },
                      'end': {
                        'line': 17,
                        'column': 18,
                        'index': 341
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 334,
                      'end': 341,
                      'loc': {
                        'start': {
                          'line': 17,
                          'column': 11,
                          'index': 334
                        },
                        'end': {
                          'line': 17,
                          'column': 18,
                          'index': 341
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 335,
                        'end': 341,
                        'loc': {
                          'start': {
                            'line': 17,
                            'column': 12,
                            'index': 335
                          },
                          'end': {
                            'line': 17,
                            'column': 18,
                            'index': 341
                          }
                        }
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 342,
                  'end': 350,
                  'loc': {
                    'start': {
                      'line': 17,
                      'column': 19,
                      'index': 342
                    },
                    'end': {
                      'line': 17,
                      'column': 27,
                      'index': 350
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 344,
                    'end': 350,
                    'loc': {
                      'start': {
                        'line': 17,
                        'column': 21,
                        'index': 344
                      },
                      'end': {
                        'line': 17,
                        'column': 27,
                        'index': 350
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 344,
                      'end': 350,
                      'loc': {
                        'start': {
                          'line': 17,
                          'column': 21,
                          'index': 344
                        },
                        'end': {
                          'line': 17,
                          'column': 27,
                          'index': 350
                        }
                      },
                      'name': 'Person'
                    }
                  }
                },
                'body': {
                  'type': 'BlockStatement',
                  'start': 351,
                  'end': 390,
                  'loc': {
                    'start': {
                      'line': 17,
                      'column': 28,
                      'index': 351
                    },
                    'end': {
                      'line': 19,
                      'column': 3,
                      'index': 390
                    }
                  },
                  'body': [
                    {
                      'type': 'ReturnStatement',
                      'start': 357,
                      'end': 386,
                      'loc': {
                        'start': {
                          'line': 18,
                          'column': 4,
                          'index': 357
                        },
                        'end': {
                          'line': 18,
                          'column': 33,
                          'index': 386
                        }
                      },
                      'argument': {
                        'type': 'NewExpression',
                        'start': 364,
                        'end': 385,
                        'loc': {
                          'start': {
                            'line': 18,
                            'column': 11,
                            'index': 364
                          },
                          'end': {
                            'line': 18,
                            'column': 32,
                            'index': 385
                          }
                        },
                        'callee': {
                          'type': 'Identifier',
                          'start': 368,
                          'end': 376,
                          'loc': {
                            'start': {
                              'line': 18,
                              'column': 15,
                              'index': 368
                            },
                            'end': {
                              'line': 18,
                              'column': 23,
                              'index': 376
                            }
                          },
                          'name': 'Employee'
                        },
                        'arguments': [
                          {
                            'type': 'Identifier',
                            'start': 377,
                            'end': 381,
                            'loc': {
                              'start': {
                                'line': 18,
                                'column': 24,
                                'index': 377
                              },
                              'end': {
                                'line': 18,
                                'column': 28,
                                'index': 381
                              }
                            },
                            'name': 'name'
                          },
                          {
                            'type': 'Literal',
                            'start': 383,
                            'end': 384,
                            'loc': {
                              'start': {
                                'line': 18,
                                'column': 30,
                                'index': 383
                              },
                              'end': {
                                'line': 18,
                                'column': 31,
                                'index': 384
                              }
                            },
                            'value': 1,
                            'raw': '1'
                          }
                        ]
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
  PrivateClassMethod: {
    'type': 'Program',
    'start': 0,
    'end': 69,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 5,
        'column': 1,
        'index': 69
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 69,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 5,
            'column': 1,
            'index': 69
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 69,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 5,
              'column': 1,
              'index': 69
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 17,
              'end': 67,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 4,
                  'column': 2,
                  'index': 67
                }
              },
              'accessibility': 'private',
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 25,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 9,
                    'index': 25
                  },
                  'end': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 30,
                'end': 67,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  },
                  'end': {
                    'line': 4,
                    'column': 2,
                    'index': 67
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [],
                'body': {
                  'type': 'BlockStatement',
                  'start': 33,
                  'end': 67,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 17,
                      'index': 33
                    },
                    'end': {
                      'line': 4,
                      'column': 2,
                      'index': 67
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 38,
                      'end': 64,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 3,
                          'index': 38
                        },
                        'end': {
                          'line': 3,
                          'column': 29,
                          'index': 64
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 38,
                        'end': 64,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 3,
                            'index': 38
                          },
                          'end': {
                            'line': 3,
                            'column': 29,
                            'index': 64
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 38,
                          'end': 49,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 3,
                              'index': 38
                            },
                            'end': {
                              'line': 3,
                              'column': 14,
                              'index': 49
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 38,
                            'end': 45,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 3,
                                'index': 38
                              },
                              'end': {
                                'line': 3,
                                'column': 10,
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
                                'line': 3,
                                'column': 11,
                                'index': 46
                              },
                              'end': {
                                'line': 3,
                                'column': 14,
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
                            'type': 'Literal',
                            'start': 50,
                            'end': 63,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 15,
                                'index': 50
                              },
                              'end': {
                                'line': 3,
                                'column': 28,
                                'index': 63
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  PrivateIdClassMethod: {
    'type': 'Program',
    'start': 0,
    'end': 62,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 5,
        'column': 1,
        'index': 62
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
            'line': 5,
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
          'name': 'Student'
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
              'line': 5,
              'column': 1,
              'index': 62
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 17,
              'end': 60,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 4,
                  'column': 2,
                  'index': 60
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'PrivateIdentifier',
                'start': 17,
                'end': 23,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 1,
                    'index': 17
                  },
                  'end': {
                    'line': 2,
                    'column': 7,
                    'index': 23
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 23,
                'end': 60,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 7,
                    'index': 23
                  },
                  'end': {
                    'line': 4,
                    'column': 2,
                    'index': 60
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
                  'end': 60,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 10,
                      'index': 26
                    },
                    'end': {
                      'line': 4,
                      'column': 2,
                      'index': 60
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 31,
                      'end': 57,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 3,
                          'index': 31
                        },
                        'end': {
                          'line': 3,
                          'column': 29,
                          'index': 57
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 31,
                        'end': 57,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 3,
                            'index': 31
                          },
                          'end': {
                            'line': 3,
                            'column': 29,
                            'index': 57
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 31,
                          'end': 42,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 3,
                              'index': 31
                            },
                            'end': {
                              'line': 3,
                              'column': 14,
                              'index': 42
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 31,
                            'end': 38,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 3,
                                'index': 31
                              },
                              'end': {
                                'line': 3,
                                'column': 10,
                                'index': 38
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 39,
                            'end': 42,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 11,
                                'index': 39
                              },
                              'end': {
                                'line': 3,
                                'column': 14,
                                'index': 42
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
                            'start': 43,
                            'end': 56,
                            'loc': {
                              'start': {
                                'line': 3,
                                'column': 15,
                                'index': 43
                              },
                              'end': {
                                'line': 3,
                                'column': 28,
                                'index': 56
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  ClassDuplicateMethod: {
    'type': 'Program',
    'start': 0,
    'end': 148,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 7,
        'column': 1,
        'index': 148
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 148,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 7,
            'column': 1,
            'index': 148
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 148,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 7,
              'column': 1,
              'index': 148
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 17,
              'end': 42,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 26,
                  'index': 42
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 17,
                'end': 22,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 1,
                    'index': 17
                  },
                  'end': {
                    'line': 2,
                    'column': 6,
                    'index': 22
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'TSDeclareMethod',
                'start': 22,
                'end': 42,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 6,
                    'index': 22
                  },
                  'end': {
                    'line': 2,
                    'column': 26,
                    'index': 42
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 23,
                    'end': 19,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 7,
                        'index': 23
                      },
                      'end': {
                        'line': 2,
                        'column': 19,
                        'index': 35
                      }
                    },
                    'name': 'book',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 27,
                      'end': 35,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 11,
                          'index': 27
                        },
                        'end': {
                          'line': 2,
                          'column': 19,
                          'index': 35
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSLiteralType',
                        'start': 29,
                        'end': 35,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 13,
                            'index': 29
                          },
                          'end': {
                            'line': 2,
                            'column': 19,
                            'index': 35
                          }
                        },
                        'literal': {
                          'type': 'Literal',
                          'start': 29,
                          'end': 35,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 13,
                              'index': 29
                            },
                            'end': {
                              'line': 2,
                              'column': 19,
                              'index': 35
                            }
                          },
                          'value': 'math',
                          'raw': '\'math\''
                        }
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 36,
                  'end': 42,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 20,
                      'index': 36
                    },
                    'end': {
                      'line': 2,
                      'column': 26,
                      'index': 42
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 38,
                    'end': 42,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 22,
                        'index': 38
                      },
                      'end': {
                        'line': 2,
                        'column': 26,
                        'index': 42
                      }
                    }
                  }
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 44,
              'end': 72,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 44
                },
                'end': {
                  'line': 3,
                  'column': 29,
                  'index': 72
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 44,
                'end': 49,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 1,
                    'index': 44
                  },
                  'end': {
                    'line': 3,
                    'column': 6,
                    'index': 49
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'TSDeclareMethod',
                'start': 49,
                'end': 72,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 6,
                    'index': 49
                  },
                  'end': {
                    'line': 3,
                    'column': 29,
                    'index': 72
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 50,
                    'end': 22,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 7,
                        'index': 50
                      },
                      'end': {
                        'line': 3,
                        'column': 22,
                        'index': 65
                      }
                    },
                    'name': 'book',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 54,
                      'end': 65,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 11,
                          'index': 54
                        },
                        'end': {
                          'line': 3,
                          'column': 22,
                          'index': 65
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSLiteralType',
                        'start': 56,
                        'end': 65,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 13,
                            'index': 56
                          },
                          'end': {
                            'line': 3,
                            'column': 22,
                            'index': 65
                          }
                        },
                        'literal': {
                          'type': 'Literal',
                          'start': 56,
                          'end': 65,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 13,
                              'index': 56
                            },
                            'end': {
                              'line': 3,
                              'column': 22,
                              'index': 65
                            }
                          },
                          'value': 'english',
                          'raw': '\'english\''
                        }
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 66,
                  'end': 72,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 23,
                      'index': 66
                    },
                    'end': {
                      'line': 3,
                      'column': 29,
                      'index': 72
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 68,
                    'end': 72,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 25,
                        'index': 68
                      },
                      'end': {
                        'line': 3,
                        'column': 29,
                        'index': 72
                      }
                    }
                  }
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 74,
              'end': 146,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 74
                },
                'end': {
                  'line': 6,
                  'column': 2,
                  'index': 146
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 74,
                'end': 79,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 1,
                    'index': 74
                  },
                  'end': {
                    'line': 4,
                    'column': 6,
                    'index': 79
                  }
                },
                'name': 'study'
              },
              'kind': 'method',
              'value': {
                'type': 'FunctionExpression',
                'start': 79,
                'end': 146,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 6,
                    'index': 79
                  },
                  'end': {
                    'line': 6,
                    'column': 2,
                    'index': 146
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 80,
                    'end': 31,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 7,
                        'index': 80
                      },
                      'end': {
                        'line': 4,
                        'column': 31,
                        'index': 104
                      }
                    },
                    'name': 'book',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 84,
                      'end': 104,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 11,
                          'index': 84
                        },
                        'end': {
                          'line': 4,
                          'column': 31,
                          'index': 104
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSUnionType',
                        'start': 86,
                        'end': 104,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 13,
                            'index': 86
                          },
                          'end': {
                            'line': 4,
                            'column': 31,
                            'index': 104
                          }
                        },
                        'types': [
                          {
                            'type': 'TSLiteralType',
                            'start': 86,
                            'end': 92,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 13,
                                'index': 86
                              },
                              'end': {
                                'line': 4,
                                'column': 19,
                                'index': 92
                              }
                            },
                            'literal': {
                              'type': 'Literal',
                              'start': 86,
                              'end': 92,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 13,
                                  'index': 86
                                },
                                'end': {
                                  'line': 4,
                                  'column': 19,
                                  'index': 92
                                }
                              },
                              'value': 'math',
                              'raw': '\'math\''
                            }
                          },
                          {
                            'type': 'TSLiteralType',
                            'start': 95,
                            'end': 104,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 22,
                                'index': 95
                              },
                              'end': {
                                'line': 4,
                                'column': 31,
                                'index': 104
                              }
                            },
                            'literal': {
                              'type': 'Literal',
                              'start': 95,
                              'end': 104,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 22,
                                  'index': 95
                                },
                                'end': {
                                  'line': 4,
                                  'column': 31,
                                  'index': 104
                                }
                              },
                              'value': 'english',
                              'raw': '\'english\''
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 105,
                  'end': 111,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 32,
                      'index': 105
                    },
                    'end': {
                      'line': 4,
                      'column': 38,
                      'index': 111
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 107,
                    'end': 111,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 34,
                        'index': 107
                      },
                      'end': {
                        'line': 4,
                        'column': 38,
                        'index': 111
                      }
                    }
                  }
                },
                'body': {
                  'type': 'BlockStatement',
                  'start': 112,
                  'end': 146,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 39,
                      'index': 112
                    },
                    'end': {
                      'line': 6,
                      'column': 2,
                      'index': 146
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 117,
                      'end': 143,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 3,
                          'index': 117
                        },
                        'end': {
                          'line': 5,
                          'column': 29,
                          'index': 143
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 117,
                        'end': 143,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 3,
                            'index': 117
                          },
                          'end': {
                            'line': 5,
                            'column': 29,
                            'index': 143
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 117,
                          'end': 128,
                          'loc': {
                            'start': {
                              'line': 5,
                              'column': 3,
                              'index': 117
                            },
                            'end': {
                              'line': 5,
                              'column': 14,
                              'index': 128
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 117,
                            'end': 124,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 3,
                                'index': 117
                              },
                              'end': {
                                'line': 5,
                                'column': 10,
                                'index': 124
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 125,
                            'end': 128,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 11,
                                'index': 125
                              },
                              'end': {
                                'line': 5,
                                'column': 14,
                                'index': 128
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
                            'start': 129,
                            'end': 142,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 15,
                                'index': 129
                              },
                              'end': {
                                'line': 5,
                                'column': 28,
                                'index': 142
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  ClassDuplicateConstructor: {
    'type': 'Program',
    'start': 0,
    'end': 166,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 7,
        'column': 1,
        'index': 166
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 166,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 7,
            'column': 1,
            'index': 166
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 166,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 7,
              'column': 1,
              'index': 166
            }
          },
          'body': [
            {
              'type': 'MethodDefinition',
              'start': 17,
              'end': 48,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 32,
                  'index': 48
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 17,
                'end': 28,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 1,
                    'index': 17
                  },
                  'end': {
                    'line': 2,
                    'column': 12,
                    'index': 28
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'TSDeclareMethod',
                'start': 28,
                'end': 48,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 12,
                    'index': 28
                  },
                  'end': {
                    'line': 2,
                    'column': 32,
                    'index': 48
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 29,
                    'end': 25,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 13,
                        'index': 29
                      },
                      'end': {
                        'line': 2,
                        'column': 25,
                        'index': 41
                      }
                    },
                    'name': 'book',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 33,
                      'end': 41,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 17,
                          'index': 33
                        },
                        'end': {
                          'line': 2,
                          'column': 25,
                          'index': 41
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSLiteralType',
                        'start': 35,
                        'end': 41,
                        'loc': {
                          'start': {
                            'line': 2,
                            'column': 19,
                            'index': 35
                          },
                          'end': {
                            'line': 2,
                            'column': 25,
                            'index': 41
                          }
                        },
                        'literal': {
                          'type': 'Literal',
                          'start': 35,
                          'end': 41,
                          'loc': {
                            'start': {
                              'line': 2,
                              'column': 19,
                              'index': 35
                            },
                            'end': {
                              'line': 2,
                              'column': 25,
                              'index': 41
                            }
                          },
                          'value': 'math',
                          'raw': '\'math\''
                        }
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 42,
                  'end': 48,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 26,
                      'index': 42
                    },
                    'end': {
                      'line': 2,
                      'column': 32,
                      'index': 48
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 44,
                    'end': 48,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 28,
                        'index': 44
                      },
                      'end': {
                        'line': 2,
                        'column': 32,
                        'index': 48
                      }
                    }
                  }
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 50,
              'end': 84,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 1,
                  'index': 50
                },
                'end': {
                  'line': 3,
                  'column': 35,
                  'index': 84
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 50,
                'end': 61,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 1,
                    'index': 50
                  },
                  'end': {
                    'line': 3,
                    'column': 12,
                    'index': 61
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'TSDeclareMethod',
                'start': 61,
                'end': 84,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 12,
                    'index': 61
                  },
                  'end': {
                    'line': 3,
                    'column': 35,
                    'index': 84
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 62,
                    'end': 28,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 13,
                        'index': 62
                      },
                      'end': {
                        'line': 3,
                        'column': 28,
                        'index': 77
                      }
                    },
                    'name': 'book',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 66,
                      'end': 77,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 17,
                          'index': 66
                        },
                        'end': {
                          'line': 3,
                          'column': 28,
                          'index': 77
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSLiteralType',
                        'start': 68,
                        'end': 77,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 19,
                            'index': 68
                          },
                          'end': {
                            'line': 3,
                            'column': 28,
                            'index': 77
                          }
                        },
                        'literal': {
                          'type': 'Literal',
                          'start': 68,
                          'end': 77,
                          'loc': {
                            'start': {
                              'line': 3,
                              'column': 19,
                              'index': 68
                            },
                            'end': {
                              'line': 3,
                              'column': 28,
                              'index': 77
                            }
                          },
                          'value': 'english',
                          'raw': '\'english\''
                        }
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 78,
                  'end': 84,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 29,
                      'index': 78
                    },
                    'end': {
                      'line': 3,
                      'column': 35,
                      'index': 84
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 80,
                    'end': 84,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 31,
                        'index': 80
                      },
                      'end': {
                        'line': 3,
                        'column': 35,
                        'index': 84
                      }
                    }
                  }
                }
              }
            },
            {
              'type': 'MethodDefinition',
              'start': 86,
              'end': 164,
              'loc': {
                'start': {
                  'line': 4,
                  'column': 1,
                  'index': 86
                },
                'end': {
                  'line': 6,
                  'column': 2,
                  'index': 164
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 86,
                'end': 97,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 1,
                    'index': 86
                  },
                  'end': {
                    'line': 4,
                    'column': 12,
                    'index': 97
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 97,
                'end': 164,
                'loc': {
                  'start': {
                    'line': 4,
                    'column': 12,
                    'index': 97
                  },
                  'end': {
                    'line': 6,
                    'column': 2,
                    'index': 164
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 98,
                    'end': 37,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 13,
                        'index': 98
                      },
                      'end': {
                        'line': 4,
                        'column': 37,
                        'index': 122
                      }
                    },
                    'name': 'book',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 102,
                      'end': 122,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 17,
                          'index': 102
                        },
                        'end': {
                          'line': 4,
                          'column': 37,
                          'index': 122
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSUnionType',
                        'start': 104,
                        'end': 122,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 19,
                            'index': 104
                          },
                          'end': {
                            'line': 4,
                            'column': 37,
                            'index': 122
                          }
                        },
                        'types': [
                          {
                            'type': 'TSLiteralType',
                            'start': 104,
                            'end': 110,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 19,
                                'index': 104
                              },
                              'end': {
                                'line': 4,
                                'column': 25,
                                'index': 110
                              }
                            },
                            'literal': {
                              'type': 'Literal',
                              'start': 104,
                              'end': 110,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 19,
                                  'index': 104
                                },
                                'end': {
                                  'line': 4,
                                  'column': 25,
                                  'index': 110
                                }
                              },
                              'value': 'math',
                              'raw': '\'math\''
                            }
                          },
                          {
                            'type': 'TSLiteralType',
                            'start': 113,
                            'end': 122,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 28,
                                'index': 113
                              },
                              'end': {
                                'line': 4,
                                'column': 37,
                                'index': 122
                              }
                            },
                            'literal': {
                              'type': 'Literal',
                              'start': 113,
                              'end': 122,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 28,
                                  'index': 113
                                },
                                'end': {
                                  'line': 4,
                                  'column': 37,
                                  'index': 122
                                }
                              },
                              'value': 'english',
                              'raw': '\'english\''
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 123,
                  'end': 129,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 38,
                      'index': 123
                    },
                    'end': {
                      'line': 4,
                      'column': 44,
                      'index': 129
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSVoidKeyword',
                    'start': 125,
                    'end': 129,
                    'loc': {
                      'start': {
                        'line': 4,
                        'column': 40,
                        'index': 125
                      },
                      'end': {
                        'line': 4,
                        'column': 44,
                        'index': 129
                      }
                    }
                  }
                },
                'body': {
                  'type': 'BlockStatement',
                  'start': 130,
                  'end': 164,
                  'loc': {
                    'start': {
                      'line': 4,
                      'column': 45,
                      'index': 130
                    },
                    'end': {
                      'line': 6,
                      'column': 2,
                      'index': 164
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 135,
                      'end': 161,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 3,
                          'index': 135
                        },
                        'end': {
                          'line': 5,
                          'column': 29,
                          'index': 161
                        }
                      },
                      'expression': {
                        'type': 'CallExpression',
                        'start': 135,
                        'end': 161,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 3,
                            'index': 135
                          },
                          'end': {
                            'line': 5,
                            'column': 29,
                            'index': 161
                          }
                        },
                        'callee': {
                          'type': 'MemberExpression',
                          'start': 135,
                          'end': 146,
                          'loc': {
                            'start': {
                              'line': 5,
                              'column': 3,
                              'index': 135
                            },
                            'end': {
                              'line': 5,
                              'column': 14,
                              'index': 146
                            }
                          },
                          'object': {
                            'type': 'Identifier',
                            'start': 135,
                            'end': 142,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 3,
                                'index': 135
                              },
                              'end': {
                                'line': 5,
                                'column': 10,
                                'index': 142
                              }
                            },
                            'name': 'console'
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 143,
                            'end': 146,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 11,
                                'index': 143
                              },
                              'end': {
                                'line': 5,
                                'column': 14,
                                'index': 146
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
                            'start': 147,
                            'end': 160,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 15,
                                'index': 147
                              },
                              'end': {
                                'line': 5,
                                'column': 28,
                                'index': 160
                              }
                            },
                            'value': 'Im studying',
                            'raw': '\'Im studying\''
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
      }
    ],
    'sourceType': 'module'
  },
  DefiniteProperty: {
    'type': 'Program',
    'start': 0,
    'end': 32,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 3,
        'column': 1,
        'index': 32
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 32,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 32
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
          'name': 'Student'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 14,
          'end': 32,
          'loc': {
            'start': {
              'line': 1,
              'column': 14,
              'index': 14
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 32
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 30,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 1,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 14,
                  'index': 30
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 17,
                'end': 21,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 1,
                    'index': 17
                  },
                  'end': {
                    'line': 2,
                    'column': 5,
                    'index': 21
                  }
                },
                'name': 'name'
              },
              'definite': true,
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 22,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 6,
                    'index': 22
                  },
                  'end': {
                    'line': 2,
                    'column': 14,
                    'index': 30
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 24,
                  'end': 30,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 8,
                      'index': 24
                    },
                    'end': {
                      'line': 2,
                      'column': 14,
                      'index': 30
                    }
                  }
                }
              },
              'value': null
            }
          ]
        }
      }
    ],
    'sourceType': 'module'
  },
  Accessor: {
    'type': 'Program',
    'start': 0,
    'end': 97,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 97
      }
    },
    'body': [
      {
        'type': 'ClassDeclaration',
        'start': 0,
        'end': 97,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 97
          }
        },
        'id': {
          'type': 'Identifier',
          'start': 6,
          'end': 12,
          'loc': {
            'start': {
              'line': 1,
              'column': 6,
              'index': 6
            },
            'end': {
              'line': 1,
              'column': 12,
              'index': 12
            }
          },
          'name': 'Person'
        },
        'superClass': null,
        'body': {
          'type': 'ClassBody',
          'start': 13,
          'end': 97,
          'loc': {
            'start': {
              'line': 1,
              'column': 13,
              'index': 13
            },
            'end': {
              'line': 6,
              'column': 1,
              'index': 97
            }
          },
          'body': [
            {
              'type': 'PropertyDefinition',
              'start': 17,
              'end': 39,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 2,
                  'index': 17
                },
                'end': {
                  'line': 2,
                  'column': 24,
                  'index': 39
                }
              },
              'accessor': true,
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 26,
                'end': 30,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 11,
                    'index': 26
                  },
                  'end': {
                    'line': 2,
                    'column': 15,
                    'index': 30
                  }
                },
                'name': 'name'
              },
              'typeAnnotation': {
                'type': 'TSTypeAnnotation',
                'start': 30,
                'end': 38,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 15,
                    'index': 30
                  },
                  'end': {
                    'line': 2,
                    'column': 23,
                    'index': 38
                  }
                },
                'typeAnnotation': {
                  'type': 'TSStringKeyword',
                  'start': 32,
                  'end': 38,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 17,
                      'index': 32
                    },
                    'end': {
                      'line': 2,
                      'column': 23,
                      'index': 38
                    }
                  }
                }
              },
              'value': null
            },
            {
              'type': 'MethodDefinition',
              'start': 42,
              'end': 95,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 2,
                  'index': 42
                },
                'end': {
                  'line': 5,
                  'column': 3,
                  'index': 95
                }
              },
              'static': false,
              'computed': false,
              'key': {
                'type': 'Identifier',
                'start': 42,
                'end': 53,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 2,
                    'index': 42
                  },
                  'end': {
                    'line': 3,
                    'column': 13,
                    'index': 53
                  }
                },
                'name': 'constructor'
              },
              'kind': 'constructor',
              'value': {
                'type': 'FunctionExpression',
                'start': 53,
                'end': 95,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 13,
                    'index': 53
                  },
                  'end': {
                    'line': 5,
                    'column': 3,
                    'index': 95
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'Identifier',
                    'start': 54,
                    'end': 26,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 14,
                        'index': 54
                      },
                      'end': {
                        'line': 3,
                        'column': 26,
                        'index': 66
                      }
                    },
                    'name': 'name',
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
                      'start': 58,
                      'end': 66,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 18,
                          'index': 58
                        },
                        'end': {
                          'line': 3,
                          'column': 26,
                          'index': 66
                        }
                      },
                      'typeAnnotation': {
                        'type': 'TSStringKeyword',
                        'start': 60,
                        'end': 66,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 20,
                            'index': 60
                          },
                          'end': {
                            'line': 3,
                            'column': 26,
                            'index': 66
                          }
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 68,
                  'end': 95,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 28,
                      'index': 68
                    },
                    'end': {
                      'line': 5,
                      'column': 3,
                      'index': 95
                    }
                  },
                  'body': [
                    {
                      'type': 'ExpressionStatement',
                      'start': 74,
                      'end': 91,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 4,
                          'index': 74
                        },
                        'end': {
                          'line': 4,
                          'column': 21,
                          'index': 91
                        }
                      },
                      'expression': {
                        'type': 'AssignmentExpression',
                        'start': 74,
                        'end': 90,
                        'loc': {
                          'start': {
                            'line': 4,
                            'column': 4,
                            'index': 74
                          },
                          'end': {
                            'line': 4,
                            'column': 20,
                            'index': 90
                          }
                        },
                        'operator': '=',
                        'left': {
                          'type': 'MemberExpression',
                          'start': 74,
                          'end': 83,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 4,
                              'index': 74
                            },
                            'end': {
                              'line': 4,
                              'column': 13,
                              'index': 83
                            }
                          },
                          'object': {
                            'type': 'ThisExpression',
                            'start': 74,
                            'end': 78,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 4,
                                'index': 74
                              },
                              'end': {
                                'line': 4,
                                'column': 8,
                                'index': 78
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'start': 79,
                            'end': 83,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 9,
                                'index': 79
                              },
                              'end': {
                                'line': 4,
                                'column': 13,
                                'index': 83
                              }
                            },
                            'name': 'name'
                          },
                          'computed': false,
                          'optional': false
                        },
                        'right': {
                          'type': 'Identifier',
                          'start': 86,
                          'end': 90,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 16,
                              'index': 86
                            },
                            'end': {
                              'line': 4,
                              'column': 20,
                              'index': 90
                            }
                          },
                          'name': 'name'
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
  EscapedKeywordProperty: {
    type: 'Program',
    start: 0,
    end: 28,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 3, column: 1, index: 28 }
    },
    body: [
      {
        type: 'ClassDeclaration',
        start: 0,
        end: 28,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 3, column: 1, index: 28 }
        },
        id: {
          type: 'Identifier',
          start: 6,
          end: 7,
          loc: {
            start: { line: 1, column: 6, index: 6 },
            end: { line: 1, column: 7, index: 7 }
          },
          name: 'C'
        },
        superClass: null,
        body: {
          type: 'ClassBody',
          start: 8,
          end: 28,
          loc: {
            start: { line: 1, column: 8, index: 8 },
            end: { line: 3, column: 1, index: 28 }
          },
          body: [
            {
              type: 'PropertyDefinition',
              start: 11,
              end: 26,
              loc: {
                start: { line: 2, column: 1, index: 11 },
                end: { line: 2, column: 16, index: 26 }
              },
              static: false,
              computed: false,
              key: {
                type: 'Identifier',
                start: 11,
                end: 18,
                loc: {
                  start: { line: 2, column: 1, index: 11 },
                  end: { line: 2, column: 8, index: 18 }
                },
                name: 'in'
              },
              typeAnnotation: {
                type: 'TSTypeAnnotation',
                start: 18,
                end: 26,
                loc: {
                  start: { line: 2, column: 8, index: 18 },
                  end: { line: 2, column: 16, index: 26 }
                },
                typeAnnotation: {
                  type: 'TSStringKeyword',
                  start: 20,
                  end: 26,
                  loc: {
                    start: { line: 2, column: 10, index: 20 },
                    end: { line: 2, column: 16, index: 26 }
                  }
                }
              },
              value: null
            }
          ]
        }
      }
    ],
    sourceType: 'module'
  },
  ConstructorSignature: {
    type: 'Program',
    start: 0,
    end: 43,
    loc: {
      start: { line: 1, column: 0, index: 0 },
      end: { line: 4, column: 1, index: 43 }
    },
    body: [
      {
        type: 'ClassDeclaration',
        start: 0,
        end: 43,
        loc: {
          start: { line: 1, column: 0, index: 0 },
          end: { line: 4, column: 1, index: 43 }
        },
        id: {
          type: 'Identifier',
          start: 6,
          end: 7,
          loc: {
            start: { line: 1, column: 6, index: 6 },
            end: { line: 1, column: 7, index: 7 }
          },
          name: 'C'
        },
        superClass: null,
        body: {
          type: 'ClassBody',
          start: 8,
          end: 43,
          loc: {
            start: { line: 1, column: 8, index: 8 },
            end: { line: 4, column: 1, index: 43 }
          },
          body: [
            {
              type: 'MethodDefinition',
              start: 11,
              end: 24,
              loc: {
                start: { line: 2, column: 1, index: 11 },
                end: { line: 2, column: 14, index: 24 }
              },
              static: false,
              computed: false,
              key: {
                type: 'Identifier',
                start: 11,
                end: 22,
                loc: {
                  start: { line: 2, column: 1, index: 11 },
                  end: { line: 2, column: 12, index: 22 }
                },
                name: 'constructor'
              },
              kind: 'constructor',
              value: {
                type: 'TSDeclareMethod',
                start: 22,
                end: 24,
                loc: {
                  start: { line: 2, column: 12, index: 22 },
                  end: { line: 2, column: 14, index: 24 }
                },
                id: null,
                expression: false,
                generator: false,
                async: false,
                params: []
              }
            },
            {
              type: 'MethodDefinition',
              start: 26,
              end: 41,
              loc: {
                start: { line: 3, column: 1, index: 26 },
                end: { line: 3, column: 16, index: 41 }
              },
              static: false,
              computed: false,
              key: {
                type: 'Identifier',
                start: 26,
                end: 37,
                loc: {
                  start: { line: 3, column: 1, index: 26 },
                  end: { line: 3, column: 12, index: 37 }
                },
                name: 'constructor'
              },
              kind: 'constructor',
              value: {
                type: 'FunctionExpression',
                start: 37,
                end: 41,
                loc: {
                  start: { line: 3, column: 12, index: 37 },
                  end: { line: 3, column: 16, index: 41 }
                },
                id: null,
                expression: false,
                generator: false,
                async: false,
                params: [],
                body: {
                  type: 'BlockStatement',
                  start: 39,
                  end: 41,
                  loc: {
                    start: { line: 3, column: 14, index: 39 },
                    end: { line: 3, column: 16, index: 41 }
                  },
                  body: []
                }
              }
            }
          ]
        }
      }
    ],
    sourceType: 'module'
  }
}

export default ClassTypeSnapshot
