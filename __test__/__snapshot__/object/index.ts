const ObjectSnapshot = {
  GetAndSetWithThis: {
    'type': 'Program',
    'start': 0,
    'end': 170,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 9,
        'column': 1,
        'index': 170
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 170,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 9,
            'column': 1,
            'index': 170
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 170,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 9,
                'column': 1,
                'index': 170
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
              'name': 'test'
            },
            'init': {
              'type': 'ObjectExpression',
              'start': 13,
              'end': 170,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                },
                'end': {
                  'line': 9,
                  'column': 1,
                  'index': 170
                }
              },
              'properties': [
                {
                  'type': 'Property',
                  'start': 19,
                  'end': 40,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 4,
                      'index': 19
                    },
                    'end': {
                      'line': 2,
                      'column': 25,
                      'index': 40
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 19,
                    'end': 30,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 4,
                        'index': 19
                      },
                      'end': {
                        'line': 2,
                        'column': 15,
                        'index': 30
                      }
                    },
                    'name': 'privateName'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 32,
                    'end': 40,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 17,
                        'index': 32
                      },
                      'end': {
                        'line': 2,
                        'column': 25,
                        'index': 40
                      }
                    },
                    'value': 'tyreal',
                    'raw': '\'tyreal\''
                  },
                  'kind': 'init'
                },
                {
                  'type': 'Property',
                  'start': 46,
                  'end': 100,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 4,
                      'index': 46
                    },
                    'end': {
                      'line': 5,
                      'column': 5,
                      'index': 100
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 50,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 8,
                        'index': 50
                      },
                      'end': {
                        'line': 3,
                        'column': 12,
                        'index': 54
                      }
                    },
                    'name': 'name'
                  },
                  'kind': 'get',
                  'value': {
                    'type': 'FunctionExpression',
                    'start': 54,
                    'end': 100,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 12,
                        'index': 54
                      },
                      'end': {
                        'line': 5,
                        'column': 5,
                        'index': 100
                      }
                    },
                    'id': null,
                    'expression': false,
                    'generator': false,
                    'async': false,
                    'params': [
                      {
                        'type': 'Identifier',
                        'start': 55,
                        'end': 17,
                        'loc': {
                          'start': {
                            'line': 3,
                            'column': 13,
                            'index': 55
                          },
                          'end': {
                            'line': 3,
                            'column': 17,
                            'index': 59
                          }
                        },
                        'name': 'this'
                      }
                    ],
                    'body': {
                      'type': 'BlockStatement',
                      'start': 61,
                      'end': 100,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 19,
                          'index': 61
                        },
                        'end': {
                          'line': 5,
                          'column': 5,
                          'index': 100
                        }
                      },
                      'body': [
                        {
                          'type': 'ReturnStatement',
                          'start': 71,
                          'end': 94,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 8,
                              'index': 71
                            },
                            'end': {
                              'line': 4,
                              'column': 31,
                              'index': 94
                            }
                          },
                          'argument': {
                            'type': 'MemberExpression',
                            'start': 78,
                            'end': 94,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 15,
                                'index': 78
                              },
                              'end': {
                                'line': 4,
                                'column': 31,
                                'index': 94
                              }
                            },
                            'object': {
                              'type': 'ThisExpression',
                              'start': 78,
                              'end': 82,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 15,
                                  'index': 78
                                },
                                'end': {
                                  'line': 4,
                                  'column': 19,
                                  'index': 82
                                }
                              }
                            },
                            'property': {
                              'type': 'Identifier',
                              'start': 83,
                              'end': 94,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 20,
                                  'index': 83
                                },
                                'end': {
                                  'line': 4,
                                  'column': 31,
                                  'index': 94
                                }
                              },
                              'name': 'privateName'
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
                  'type': 'Property',
                  'start': 106,
                  'end': 168,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 4,
                      'index': 106
                    },
                    'end': {
                      'line': 8,
                      'column': 5,
                      'index': 168
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 110,
                    'end': 114,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 8,
                        'index': 110
                      },
                      'end': {
                        'line': 6,
                        'column': 12,
                        'index': 114
                      }
                    },
                    'name': 'name'
                  },
                  'kind': 'set',
                  'value': {
                    'type': 'FunctionExpression',
                    'start': 114,
                    'end': 168,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 12,
                        'index': 114
                      },
                      'end': {
                        'line': 8,
                        'column': 5,
                        'index': 168
                      }
                    },
                    'id': null,
                    'expression': false,
                    'generator': false,
                    'async': false,
                    'params': [
                      {
                        'type': 'Identifier',
                        'start': 115,
                        'end': 17,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 13,
                            'index': 115
                          },
                          'end': {
                            'line': 6,
                            'column': 17,
                            'index': 119
                          }
                        },
                        'name': 'this'
                      },
                      {
                        'type': 'Identifier',
                        'start': 121,
                        'end': 24,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 19,
                            'index': 121
                          },
                          'end': {
                            'line': 6,
                            'column': 24,
                            'index': 126
                          }
                        },
                        'name': '_name'
                      }
                    ],
                    'body': {
                      'type': 'BlockStatement',
                      'start': 128,
                      'end': 168,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 26,
                          'index': 128
                        },
                        'end': {
                          'line': 8,
                          'column': 5,
                          'index': 168
                        }
                      },
                      'body': [
                        {
                          'type': 'ExpressionStatement',
                          'start': 138,
                          'end': 162,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 8,
                              'index': 138
                            },
                            'end': {
                              'line': 7,
                              'column': 32,
                              'index': 162
                            }
                          },
                          'expression': {
                            'type': 'AssignmentExpression',
                            'start': 138,
                            'end': 162,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 138
                              },
                              'end': {
                                'line': 7,
                                'column': 32,
                                'index': 162
                              }
                            },
                            'operator': '=',
                            'left': {
                              'type': 'MemberExpression',
                              'start': 138,
                              'end': 154,
                              'loc': {
                                'start': {
                                  'line': 7,
                                  'column': 8,
                                  'index': 138
                                },
                                'end': {
                                  'line': 7,
                                  'column': 24,
                                  'index': 154
                                }
                              },
                              'object': {
                                'type': 'ThisExpression',
                                'start': 138,
                                'end': 142,
                                'loc': {
                                  'start': {
                                    'line': 7,
                                    'column': 8,
                                    'index': 138
                                  },
                                  'end': {
                                    'line': 7,
                                    'column': 12,
                                    'index': 142
                                  }
                                }
                              },
                              'property': {
                                'type': 'Identifier',
                                'start': 143,
                                'end': 154,
                                'loc': {
                                  'start': {
                                    'line': 7,
                                    'column': 13,
                                    'index': 143
                                  },
                                  'end': {
                                    'line': 7,
                                    'column': 24,
                                    'index': 154
                                  }
                                },
                                'name': 'privateName'
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
                                  'line': 7,
                                  'column': 27,
                                  'index': 157
                                },
                                'end': {
                                  'line': 7,
                                  'column': 32,
                                  'index': 162
                                }
                              },
                              'name': '_name'
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
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  GetAndSetWithoutThis: {
    'type': 'Program',
    'start': 0,
    'end': 168,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 9,
        'column': 1,
        'index': 168
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 168,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 9,
            'column': 1,
            'index': 168
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 168,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 9,
                'column': 1,
                'index': 168
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
              'name': 'test'
            },
            'init': {
              'type': 'ObjectExpression',
              'start': 13,
              'end': 168,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                },
                'end': {
                  'line': 9,
                  'column': 1,
                  'index': 168
                }
              },
              'properties': [
                {
                  'type': 'Property',
                  'start': 19,
                  'end': 40,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 4,
                      'index': 19
                    },
                    'end': {
                      'line': 2,
                      'column': 25,
                      'index': 40
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 19,
                    'end': 30,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 4,
                        'index': 19
                      },
                      'end': {
                        'line': 2,
                        'column': 15,
                        'index': 30
                      }
                    },
                    'name': 'privateName'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 32,
                    'end': 40,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 17,
                        'index': 32
                      },
                      'end': {
                        'line': 2,
                        'column': 25,
                        'index': 40
                      }
                    },
                    'value': 'tyreal',
                    'raw': '\'tyreal\''
                  },
                  'kind': 'init'
                },
                {
                  'type': 'Property',
                  'start': 46,
                  'end': 96,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 4,
                      'index': 46
                    },
                    'end': {
                      'line': 5,
                      'column': 5,
                      'index': 96
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 50,
                    'end': 54,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 8,
                        'index': 50
                      },
                      'end': {
                        'line': 3,
                        'column': 12,
                        'index': 54
                      }
                    },
                    'name': 'name'
                  },
                  'kind': 'get',
                  'value': {
                    'type': 'FunctionExpression',
                    'start': 54,
                    'end': 96,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 12,
                        'index': 54
                      },
                      'end': {
                        'line': 5,
                        'column': 5,
                        'index': 96
                      }
                    },
                    'id': null,
                    'expression': false,
                    'generator': false,
                    'async': false,
                    'params': [],
                    'body': {
                      'type': 'BlockStatement',
                      'start': 57,
                      'end': 96,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 15,
                          'index': 57
                        },
                        'end': {
                          'line': 5,
                          'column': 5,
                          'index': 96
                        }
                      },
                      'body': [
                        {
                          'type': 'ReturnStatement',
                          'start': 67,
                          'end': 90,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 8,
                              'index': 67
                            },
                            'end': {
                              'line': 4,
                              'column': 31,
                              'index': 90
                            }
                          },
                          'argument': {
                            'type': 'MemberExpression',
                            'start': 74,
                            'end': 90,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 15,
                                'index': 74
                              },
                              'end': {
                                'line': 4,
                                'column': 31,
                                'index': 90
                              }
                            },
                            'object': {
                              'type': 'ThisExpression',
                              'start': 74,
                              'end': 78,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 15,
                                  'index': 74
                                },
                                'end': {
                                  'line': 4,
                                  'column': 19,
                                  'index': 78
                                }
                              }
                            },
                            'property': {
                              'type': 'Identifier',
                              'start': 79,
                              'end': 90,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 20,
                                  'index': 79
                                },
                                'end': {
                                  'line': 4,
                                  'column': 31,
                                  'index': 90
                                }
                              },
                              'name': 'privateName'
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
                  'type': 'Property',
                  'start': 102,
                  'end': 166,
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 4,
                      'index': 102
                    },
                    'end': {
                      'line': 8,
                      'column': 5,
                      'index': 166
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 106,
                    'end': 110,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 8,
                        'index': 106
                      },
                      'end': {
                        'line': 6,
                        'column': 12,
                        'index': 110
                      }
                    },
                    'name': 'name'
                  },
                  'kind': 'set',
                  'value': {
                    'type': 'FunctionExpression',
                    'start': 110,
                    'end': 166,
                    'loc': {
                      'start': {
                        'line': 6,
                        'column': 12,
                        'index': 110
                      },
                      'end': {
                        'line': 8,
                        'column': 5,
                        'index': 166
                      }
                    },
                    'id': null,
                    'expression': false,
                    'generator': false,
                    'async': false,
                    'params': [
                      {
                        'type': 'Identifier',
                        'start': 111,
                        'end': 26,
                        'loc': {
                          'start': {
                            'line': 6,
                            'column': 13,
                            'index': 111
                          },
                          'end': {
                            'line': 6,
                            'column': 26,
                            'index': 124
                          }
                        },
                        'name': '_name',
                        'typeAnnotation': {
                          'type': 'TSTypeAnnotation',
                          'start': 116,
                          'end': 124,
                          'loc': {
                            'start': {
                              'line': 6,
                              'column': 18,
                              'index': 116
                            },
                            'end': {
                              'line': 6,
                              'column': 26,
                              'index': 124
                            }
                          },
                          'typeAnnotation': {
                            'type': 'TSStringKeyword',
                            'start': 118,
                            'end': 124,
                            'loc': {
                              'start': {
                                'line': 6,
                                'column': 20,
                                'index': 118
                              },
                              'end': {
                                'line': 6,
                                'column': 26,
                                'index': 124
                              }
                            }
                          }
                        }
                      }
                    ],
                    'body': {
                      'type': 'BlockStatement',
                      'start': 126,
                      'end': 166,
                      'loc': {
                        'start': {
                          'line': 6,
                          'column': 28,
                          'index': 126
                        },
                        'end': {
                          'line': 8,
                          'column': 5,
                          'index': 166
                        }
                      },
                      'body': [
                        {
                          'type': 'ExpressionStatement',
                          'start': 136,
                          'end': 160,
                          'loc': {
                            'start': {
                              'line': 7,
                              'column': 8,
                              'index': 136
                            },
                            'end': {
                              'line': 7,
                              'column': 32,
                              'index': 160
                            }
                          },
                          'expression': {
                            'type': 'AssignmentExpression',
                            'start': 136,
                            'end': 160,
                            'loc': {
                              'start': {
                                'line': 7,
                                'column': 8,
                                'index': 136
                              },
                              'end': {
                                'line': 7,
                                'column': 32,
                                'index': 160
                              }
                            },
                            'operator': '=',
                            'left': {
                              'type': 'MemberExpression',
                              'start': 136,
                              'end': 152,
                              'loc': {
                                'start': {
                                  'line': 7,
                                  'column': 8,
                                  'index': 136
                                },
                                'end': {
                                  'line': 7,
                                  'column': 24,
                                  'index': 152
                                }
                              },
                              'object': {
                                'type': 'ThisExpression',
                                'start': 136,
                                'end': 140,
                                'loc': {
                                  'start': {
                                    'line': 7,
                                    'column': 8,
                                    'index': 136
                                  },
                                  'end': {
                                    'line': 7,
                                    'column': 12,
                                    'index': 140
                                  }
                                }
                              },
                              'property': {
                                'type': 'Identifier',
                                'start': 141,
                                'end': 152,
                                'loc': {
                                  'start': {
                                    'line': 7,
                                    'column': 13,
                                    'index': 141
                                  },
                                  'end': {
                                    'line': 7,
                                    'column': 24,
                                    'index': 152
                                  }
                                },
                                'name': 'privateName'
                              },
                              'computed': false,
                              'optional': false
                            },
                            'right': {
                              'type': 'Identifier',
                              'start': 155,
                              'end': 160,
                              'loc': {
                                'start': {
                                  'line': 7,
                                  'column': 27,
                                  'index': 155
                                },
                                'end': {
                                  'line': 7,
                                  'column': 32,
                                  'index': 160
                                }
                              },
                              'name': '_name'
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
        'kind': 'const'
      }
    ],
    'sourceType': 'module'
  },
  NormalObject: {
    'type': 'Program',
    'start': 0,
    'end': 89,
    'loc': {
      'start': {
        'line': 1,
        'column': 0,
        'index': 0
      },
      'end': {
        'line': 6,
        'column': 1,
        'index': 89
      }
    },
    'body': [
      {
        'type': 'VariableDeclaration',
        'start': 0,
        'end': 89,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 6,
            'column': 1,
            'index': 89
          }
        },
        'declarations': [
          {
            'type': 'VariableDeclarator',
            'start': 6,
            'end': 89,
            'loc': {
              'start': {
                'line': 1,
                'column': 6,
                'index': 6
              },
              'end': {
                'line': 6,
                'column': 1,
                'index': 89
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
              'name': 'test'
            },
            'init': {
              'type': 'ObjectExpression',
              'start': 13,
              'end': 89,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 13,
                  'index': 13
                },
                'end': {
                  'line': 6,
                  'column': 1,
                  'index': 89
                }
              },
              'properties': [
                {
                  'type': 'Property',
                  'start': 19,
                  'end': 40,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 4,
                      'index': 19
                    },
                    'end': {
                      'line': 2,
                      'column': 25,
                      'index': 40
                    }
                  },
                  'method': false,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 19,
                    'end': 30,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 4,
                        'index': 19
                      },
                      'end': {
                        'line': 2,
                        'column': 15,
                        'index': 30
                      }
                    },
                    'name': 'privateName'
                  },
                  'value': {
                    'type': 'Literal',
                    'start': 32,
                    'end': 40,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 17,
                        'index': 32
                      },
                      'end': {
                        'line': 2,
                        'column': 25,
                        'index': 40
                      }
                    },
                    'value': 'tyreal',
                    'raw': '\'tyreal\''
                  },
                  'kind': 'init'
                },
                {
                  'type': 'Property',
                  'start': 46,
                  'end': 86,
                  'loc': {
                    'start': {
                      'line': 3,
                      'column': 4,
                      'index': 46
                    },
                    'end': {
                      'line': 5,
                      'column': 5,
                      'index': 86
                    }
                  },
                  'method': true,
                  'shorthand': false,
                  'computed': false,
                  'key': {
                    'type': 'Identifier',
                    'start': 46,
                    'end': 51,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 4,
                        'index': 46
                      },
                      'end': {
                        'line': 3,
                        'column': 9,
                        'index': 51
                      }
                    },
                    'name': 'speak'
                  },
                  'kind': 'init',
                  'value': {
                    'type': 'FunctionExpression',
                    'start': 51,
                    'end': 86,
                    'loc': {
                      'start': {
                        'line': 3,
                        'column': 9,
                        'index': 51
                      },
                      'end': {
                        'line': 5,
                        'column': 5,
                        'index': 86
                      }
                    },
                    'id': null,
                    'expression': false,
                    'generator': false,
                    'async': false,
                    'params': [],
                    'body': {
                      'type': 'BlockStatement',
                      'start': 54,
                      'end': 86,
                      'loc': {
                        'start': {
                          'line': 3,
                          'column': 12,
                          'index': 54
                        },
                        'end': {
                          'line': 5,
                          'column': 5,
                          'index': 86
                        }
                      },
                      'body': [
                        {
                          'type': 'ExpressionStatement',
                          'start': 64,
                          'end': 80,
                          'loc': {
                            'start': {
                              'line': 4,
                              'column': 8,
                              'index': 64
                            },
                            'end': {
                              'line': 4,
                              'column': 24,
                              'index': 80
                            }
                          },
                          'expression': {
                            'type': 'CallExpression',
                            'start': 64,
                            'end': 80,
                            'loc': {
                              'start': {
                                'line': 4,
                                'column': 8,
                                'index': 64
                              },
                              'end': {
                                'line': 4,
                                'column': 24,
                                'index': 80
                              }
                            },
                            'callee': {
                              'type': 'MemberExpression',
                              'start': 64,
                              'end': 75,
                              'loc': {
                                'start': {
                                  'line': 4,
                                  'column': 8,
                                  'index': 64
                                },
                                'end': {
                                  'line': 4,
                                  'column': 19,
                                  'index': 75
                                }
                              },
                              'object': {
                                'type': 'Identifier',
                                'start': 64,
                                'end': 71,
                                'loc': {
                                  'start': {
                                    'line': 4,
                                    'column': 8,
                                    'index': 64
                                  },
                                  'end': {
                                    'line': 4,
                                    'column': 15,
                                    'index': 71
                                  }
                                },
                                'name': 'console'
                              },
                              'property': {
                                'type': 'Identifier',
                                'start': 72,
                                'end': 75,
                                'loc': {
                                  'start': {
                                    'line': 4,
                                    'column': 16,
                                    'index': 72
                                  },
                                  'end': {
                                    'line': 4,
                                    'column': 19,
                                    'index': 75
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
                                'start': 76,
                                'end': 79,
                                'loc': {
                                  'start': {
                                    'line': 4,
                                    'column': 20,
                                    'index': 76
                                  },
                                  'end': {
                                    'line': 4,
                                    'column': 23,
                                    'index': 79
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
  AsyncArrowFunctionInSubscript: {
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
        'line': 3,
        'column': 1,
        'index': 34
      }
    },
    'body': [
      {
        'type': 'ExpressionStatement',
        'start': 0,
        'end': 34,
        'loc': {
          'start': {
            'line': 1,
            'column': 0,
            'index': 0
          },
          'end': {
            'line': 3,
            'column': 1,
            'index': 34
          }
        },
        'expression': {
          'type': 'ArrowFunctionExpression',
          'start': 0,
          'end': 34,
          'loc': {
            'start': {
              'line': 1,
              'column': 0,
              'index': 0
            },
            'end': {
              'line': 3,
              'column': 1,
              'index': 34
            }
          },
          'id': null,
          'expression': false,
          'generator': false,
          'async': true,
          'params': [],
          'body': {
            'type': 'BlockStatement',
            'start': 12,
            'end': 34,
            'loc': {
              'start': {
                'line': 1,
                'column': 12,
                'index': 12
              },
              'end': {
                'line': 3,
                'column': 1,
                'index': 34
              }
            },
            'body': [
              {
                'type': 'ExpressionStatement',
                'start': 16,
                'end': 32,
                'loc': {
                  'start': {
                    'line': 2,
                    'column': 2,
                    'index': 16
                  },
                  'end': {
                    'line': 2,
                    'column': 18,
                    'index': 32
                  }
                },
                'expression': {
                  'type': 'CallExpression',
                  'start': 16,
                  'end': 32,
                  'loc': {
                    'start': {
                      'line': 2,
                      'column': 2,
                      'index': 16
                    },
                    'end': {
                      'line': 2,
                      'column': 18,
                      'index': 32
                    }
                  },
                  'callee': {
                    'type': 'MemberExpression',
                    'start': 16,
                    'end': 27,
                    'loc': {
                      'start': {
                        'line': 2,
                        'column': 2,
                        'index': 16
                      },
                      'end': {
                        'line': 2,
                        'column': 13,
                        'index': 27
                      }
                    },
                    'object': {
                      'type': 'Identifier',
                      'start': 16,
                      'end': 23,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 2,
                          'index': 16
                        },
                        'end': {
                          'line': 2,
                          'column': 9,
                          'index': 23
                        }
                      },
                      'name': 'console'
                    },
                    'property': {
                      'type': 'Identifier',
                      'start': 24,
                      'end': 27,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 10,
                          'index': 24
                        },
                        'end': {
                          'line': 2,
                          'column': 13,
                          'index': 27
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
                      'start': 28,
                      'end': 31,
                      'loc': {
                        'start': {
                          'line': 2,
                          'column': 14,
                          'index': 28
                        },
                        'end': {
                          'line': 2,
                          'column': 17,
                          'index': 31
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
      }
    ],
    'sourceType': 'module'
  }
}

export default ObjectSnapshot
