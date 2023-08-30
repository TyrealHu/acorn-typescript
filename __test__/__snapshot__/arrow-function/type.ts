const ArrowFunctionTypeSnapshot = {
  Issue39: {
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
        'line': 1,
        'column': 93,
        'index': 93
      }
    },
    'body': [
      {
        'type': 'ExportNamedDeclaration',
        'start': 0,
        'end': 93,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 1,
            'column': 93,
            'index': 93
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'VariableDeclaration',
          'start': 7,
          'end': 93,
          'loc': {
            'start': {
              'line': 1,
              'column': 7,
              'index': 7
            },
            'end': {
              'line': 1,
              'column': 93,
              'index': 93
            }
          },
          'declarations': [
            {
              'type': 'VariableDeclarator',
              'start': 13,
              'end': 92,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                },
                'end': {
                  'line': 1,
                  'column': 92,
                  'index': 92
                }
              },
              'id': {
                'type': 'Identifier',
                'start': 13,
                'end': 29,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 13,
                    'index': 13
                  },
                  'end': {
                    'line': 1,
                    'column': 29,
                    'index': 29
                  }
                },
                'name': 'getPureFunctions'
              },
              'init': {
                'type': 'ArrowFunctionExpression',
                'start': 32,
                'end': 92,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 32,
                    'index': 32
                  },
                  'end': {
                    'line': 1,
                    'column': 92,
                    'index': 92
                  }
                },
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 71,
                  'end': 86,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 71,
                      'index': 71
                    },
                    'end': {
                      'line': 1,
                      'column': 86,
                      'index': 86
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSTypeReference',
                    'start': 73,
                    'end': 86,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 73,
                        'index': 73
                      },
                      'end': {
                        'line': 1,
                        'column': 86,
                        'index': 86
                      }
                    },
                    'typeName': {
                      'type': 'Identifier',
                      'start': 73,
                      'end': 86,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 73,
                          'index': 73
                        },
                        'end': {
                          'line': 1,
                          'column': 86,
                          'index': 86
                        }
                      },
                      'name': 'PureFunctions'
                    }
                  }
                },
                'id': null,
                'expression': false,
                'generator': false,
                'async': false,
                'params': [
                  {
                    'type': 'ObjectPattern',
                    'start': 33,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 33,
                        'index': 33
                      },
                      'end': 70
                    },
                    'properties': [
                      {
                        'type': 'Property',
                        'start': 35,
                        'end': 44,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 35,
                            'index': 35
                          },
                          'end': {
                            'line': 1,
                            'column': 44,
                            'index': 44
                          }
                        },
                        'method': false,
                        'shorthand': true,
                        'computed': false,
                        'key': {
                          'type': 'Identifier',
                          'start': 35,
                          'end': 44,
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 35,
                              'index': 35
                            },
                            'end': {
                              'line': 1,
                              'column': 44,
                              'index': 44
                            }
                          },
                          'name': 'treeshake'
                        },
                        'kind': 'init',
                        'value': {
                          'type': 'Identifier',
                          'start': 35,
                          'end': 44,
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 35,
                              'index': 35
                            },
                            'end': {
                              'line': 1,
                              'column': 44,
                              'index': 44
                            }
                          },
                          'name': 'treeshake'
                        }
                      }
                    ],
                    'typeAnnotation': {
                      'type': 'TSTypeAnnotation',
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
                      'typeAnnotation': {
                        'type': 'TSTypeReference',
                        'start': 48,
                        'end': 70,
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 48,
                            'index': 48
                          },
                          'end': {
                            'line': 1,
                            'column': 70,
                            'index': 70
                          }
                        },
                        'typeName': {
                          'type': 'Identifier',
                          'start': 48,
                          'end': 70,
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 48,
                              'index': 48
                            },
                            'end': {
                              'line': 1,
                              'column': 70,
                              'index': 70
                            }
                          },
                          'name': 'NormalizedInputOptions'
                        }
                      }
                    }
                  }
                ],
                'body': {
                  'type': 'BlockStatement',
                  'start': 90,
                  'end': 92,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 90,
                      'index': 90
                    },
                    'end': {
                      'line': 1,
                      'column': 92,
                      'index': 92
                    }
                  },
                  'body': []
                }
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
  Issue38: {
    'type': 'Program',
    'start': 0,
    'end': 176,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 7,
        'column': 0,
        'index': 176
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 1,
        'end': 24,
        'loc': {
          'start': {
            'line': 2,
            'column': 0,
            'index': 1
          },
          'end': {
            'line': 2,
            'column': 23,
            'index': 24
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 5,
            'end': 24,
            'loc': {
              'start': {
                'line': 2,
                'column': 4,
                'index': 5
              },
              'end': {
                'line': 2,
                'column': 23,
                'index': 24
              }
            },
            'id': {
              'type': 'Identifier',
              'start': 5,
              'end': 20,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 4,
                  'index': 5
                },
                'end': {
                  'line': 2,
                  'column': 19,
                  'index': 20
                }
              },
              'name': 'defaultHashSize'
            },
            'init': {
              'type': 'Literal',
              'start': 23,
              'end': 24,
              'loc': {
                'start': {
                  'line': 2,
                  'column': 22,
                  'index': 23
                },
                'end': {
                  'line': 2,
                  'column': 23,
                  'index': 24
                }
              },
              'value': 0,
              'raw': '0'
            }
          }
        ],
        'kind': 'let'
      },
      {
        'type': 'ExportNamedDeclaration',
        'start': 25,
        'end': 175,
        'loc': {
          'start': {
            'line': 3,
            'column': 0,
            'index': 25
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 175
          }
        },
        'exportKind': 'value',
        'declaration': {
          'type': 'VariableDeclaration',
          'start': 32,
          'end': 175,
          'loc': {
            'start': {
              'line': 3,
              'column': 7,
              'index': 32
            },
            'end': {
              'line': 6,
              'column': 1,
              'index': 175
            }
          },
          'declarations': [
            {
              'type': 'VariableDeclarator',
              'start': 38,
              'end': 175,
              'loc': {
                'start': {
                  'line': 3,
                  'column': 13,
                  'index': 38
                },
                'end': {
                  'line': 6,
                  'column': 1,
                  'index': 175
                }
              },
              'id': {
                'type': 'Identifier',
                'start': 38,
                'end': 65,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 13,
                    'index': 38
                  },
                  'end': {
                    'line': 3,
                    'column': 40,
                    'index': 65
                  }
                },
                'name': 'getHashPlaceholderGenerator'
              },
              'init': {
                'type': 'ArrowFunctionExpression',
                'start': 68,
                'end': 175,
                'loc': {
                  'start': {
                    'line': 3,
                    'column': 43,
                    'index': 68
                  },
                  'end': {
                    'line': 6,
                    'column': 1,
                    'index': 175
                  }
                },
                'returnType': {
                  'type': 'TSTypeAnnotation',
                  'start': 70,
                  'end': 75,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 45,
                      'index': 70
                    },
                    'end': {
                      'line': 3,
                      'column': 50,
                      'index': 75
                    }
                  },
                  'typeAnnotation': {
                    'type': 'TSAnyKeyword',
                    'start': 72,
                    'end': 75,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 47,
                        'index': 72
                      },
                      'end': {
                        'line': 3,
                        'column': 50,
                        'index': 75
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
                  'start': 79,
                  'end': 175,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 54,
                      'index': 79
                    },
                    'end': {
                      'line': 6,
                      'column': 1,
                      'index': 175
                    }
                  },
                  'body': [
                    {
                      'type': 'VariableDeclaration',
                      'start': 83,
                      'end': 101,
                      'loc': {
                        'start': {
                          'line': 4,
                          'column': 2,
                          'index': 83
                        },
                        'end': {
                          'line': 4,
                          'column': 20,
                          'index': 101
                        }
                      },
                      'declarations': [
                        {
                          'type': 'VariableDeclarator',
                          'start': 87,
                          'end': 100,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 6,
                              'index': 87
                            },
                            'end': {
                              'line': 4,
                              'column': 19,
                              'index': 100
                            }
                          },
                          'id': {
                            'type': 'Identifier',
                            'start': 87,
                            'end': 96,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 6,
                                'index': 87
                              },
                              'end': {
                                'line': 4,
                                'column': 15,
                                'index': 96
                              }
                            },
                            'name': 'nextIndex'
                          },
                          'init': {
                            'type': 'Literal',
                            'start': 99,
                            'end': 100,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 18,
                                'index': 99
                              },
                              'end': {
                                'line': 4,
                                'column': 19,
                                'index': 100
                              }
                            },
                            'value': 0,
                            'raw': '0'
                          }
                        }
                      ],
                      'kind': 'let'
                    },
                    {
                      'type': 'ReturnStatement',
                      'start': 104,
                      'end': 173,
                      'loc': {
                        'start': {
                          'line': 5,
                          'column': 2,
                          'index': 104
                        },
                        'end': {
                          'line': 5,
                          'column': 71,
                          'index': 173
                        }
                      },
                      'argument': {
                        'type': 'ArrowFunctionExpression',
                        'start': 111,
                        'end': 173,
                        'loc': {
                          'start': {
                            'line': 5,
                            'column': 9,
                            'index': 111
                          },
                          'end': {
                            'line': 5,
                            'column': 71,
                            'index': 173
                          }
                        },
                        'id': null,
                        'expression': false,
                        'generator': false,
                        'async': false,
                        'params': [
                          {
                            'type': 'Identifier',
                            'start': 112,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 10,
                                'index': 112
                              },
                              'end': 130
                            },
                            'name': 'optionName',
                            'typeAnnotation': {
                              'type': 'TSTypeAnnotation',
                              'start': 122,
                              'end': 130,
                              'loc': {
                                'start': {
                                  'line': 5,
                                  'column': 20,
                                  'index': 122
                                },
                                'end': {
                                  'line': 5,
                                  'column': 28,
                                  'index': 130
                                }
                              },
                              'typeAnnotation': {
                                'type': 'TSStringKeyword',
                                'start': 124,
                                'end': 130,
                                'loc': {
                                  'start': {
                                    'line': 5,
                                    'column': 22,
                                    'index': 124
                                  },
                                  'end': {
                                    'line': 5,
                                    'column': 28,
                                    'index': 130
                                  }
                                }
                              }
                            }
                          },
                          {
                            'type': 'AssignmentPattern',
                            'start': 132,
                            'end': 166,
                            'loc': {
                              'start': {
                                'line': 5,
                                'column': 30,
                                'index': 132
                              },
                              'end': {
                                'line': 5,
                                'column': 64,
                                'index': 166
                              }
                            },
                            'left': {
                              'type': 'Identifier',
                              'start': 132,
                              'loc': {
                                'start': {
                                  'line': 5,
                                  'column': 30,
                                  'index': 132
                                },
                                'end': 148
                              },
                              'name': 'hashSize',
                              'typeAnnotation': {
                                'type': 'TSTypeAnnotation',
                                'start': 140,
                                'end': 148,
                                'loc': {
                                  'start': {
                                    'line': 5,
                                    'column': 38,
                                    'index': 140
                                  },
                                  'end': {
                                    'line': 5,
                                    'column': 46,
                                    'index': 148
                                  }
                                },
                                'typeAnnotation': {
                                  'type': 'TSNumberKeyword',
                                  'start': 142,
                                  'end': 148,
                                  'loc': {
                                    'start': {
                                      'line': 5,
                                      'column': 40,
                                      'index': 142
                                    },
                                    'end': {
                                      'line': 5,
                                      'column': 46,
                                      'index': 148
                                    }
                                  }
                                }
                              }
                            },
                            'right': {
                              'type': 'Identifier',
                              'start': 151,
                              'end': 166,
                              'loc': {
                                'start': {
                                  'line': 5,
                                  'column': 49,
                                  'index': 151
                                },
                                'end': {
                                  'line': 5,
                                  'column': 64,
                                  'index': 166
                                }
                              },
                              'name': 'defaultHashSize'
                            }
                          }
                        ],
                        'body': {
                          'type': 'BlockStatement',
                          'start': 171,
                          'end': 173,
                          'loc': {
                            'start': {
                              'line': 5,
                              'column': 69,
                              'index': 171
                            },
                            'end': {
                              'line': 5,
                              'column': 71,
                              'index': 173
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
          'kind': 'const'
        },
        'specifiers': [],
        'source': null
      }
    ],
    'sourceType': 'module'
  },
  AssignmentPattern: {
    type: 'Program',
    start: 0,
    end: 20,
    loc: {
      start: {
        line: 1,
        column: 0,
        index: 0
      },
      end: {
        line: 1,
        column: 20,
        index: 20
      }
    },
    body: [
      {
        type: 'ExpressionStatement',
        start: 0,
        end: 20,
        loc: {
          start: {
            line: 1,
            column: 0,
            index: 0
          },
          end: {
            line: 1,
            column: 20,
            index: 20
          }
        },
        expression: {
          type: 'ArrowFunctionExpression',
          start: 0,
          end: 20,
          loc: {
            start: {
              line: 1,
              column: 0,
              index: 0
            },
            end: {
              line: 1,
              column: 20,
              index: 20
            }
          },
          returnType: {
            type: 'TSTypeAnnotation',
            start: 8,
            end: 14,
            loc: {
              start: {
                line: 1,
                column: 8,
                index: 8
              },
              end: {
                line: 1,
                column: 14,
                index: 14
              }
            },
            typeAnnotation: {
              type: 'TSVoidKeyword',
              start: 10,
              end: 14,
              loc: {
                start: {
                  line: 1,
                  column: 10,
                  index: 10
                },
                end: {
                  line: 1,
                  column: 14,
                  index: 14
                }
              }
            }
          },
          id: null,
          expression: false,
          generator: false,
          async: false,
          params: [
            {
              type: 'AssignmentPattern',
              start: 1,
              end: 7,
              loc: {
                start: {
                  line: 1,
                  column: 1,
                  index: 1
                },
                end: {
                  line: 1,
                  column: 7,
                  index: 7
                }
              },
              left: {
                type: 'Identifier',
                start: 1,
                end: 2,
                loc: {
                  start: {
                    line: 1,
                    column: 1,
                    index: 1
                  },
                  end: {
                    line: 1,
                    column: 2,
                    index: 2
                  }
                },
                name: 'x'
              },
              right: {
                type: 'Literal',
                start: 5,
                end: 7,
                loc: {
                  start: {
                    line: 1,
                    column: 5,
                    index: 5
                  },
                  end: {
                    line: 1,
                    column: 7,
                    index: 7
                  }
                },
                value: 42,
                raw: '42'
              }
            }
          ],
          body: {
            type: 'BlockStatement',
            start: 18,
            end: 20,
            loc: {
              start: {
                line: 1,
                column: 18,
                index: 18
              },
              end: {
                line: 1,
                column: 20,
                index: 20
              }
            },
            body: []
          }
        }
      }
    ],
    sourceType: 'module'
  },
  Issue32: {
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
        'line': 2,
        'column': 2,
        'index': 57
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 57,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 2,
            'column': 2,
            'index': 57
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 56,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 2,
                'column': 1,
                'index': 56
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
              'name': 'testApp'
            },
            'init': {
              'type': 'ArrowFunctionExpression',
              'start': 16,
              'end': 56,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 16,
                  'index': 16
                },
                'end': {
                  'line': 2,
                  'column': 1,
                  'index': 56
                }
              },
              'id': null,
              'expression': false,
              'generator': false,
              'async': true,
              'params': [
                {
                  'type': 'Identifier',
                  'start': 22,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 22,
                      'index': 22
                    },
                    'end': 33
                  },
                  'name': 'app',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 25,
                    'end': 33,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 25,
                        'index': 25
                      },
                      'end': {
                        'line': 1,
                        'column': 33,
                        'index': 33
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSStringKeyword',
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
                      }
                    }
                  }
                },
                {
                  'type': 'Identifier',
                  'start': 35,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 35,
                      'index': 35
                    },
                    'end': 48
                  },
                  'name': 'index',
                  'typeAnnotation': {
                    'type': 'TSTypeAnnotation',
                    'start': 40,
                    'end': 48,
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 40,
                        'index': 40
                      },
                      'end': {
                        'line': 1,
                        'column': 48,
                        'index': 48
                      }
                    },
                    'typeAnnotation': {
                      'type': 'TSNumberKeyword',
                      'start': 42,
                      'end': 48,
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 42,
                          'index': 42
                        },
                        'end': {
                          'line': 1,
                          'column': 48,
                          'index': 48
                        }
                      }
                    }
                  }
                }
              ],
              'body': {
                'type': 'BlockStatement',
                'start': 53,
                'end': 56,
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 53,
                    'index': 53
                  },
                  'end': {
                    'line': 2,
                    'column': 1,
                    'index': 56
                  }
                },
                'body': []
              }
            }
          }
        ],
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  }
}

export default ArrowFunctionTypeSnapshot
