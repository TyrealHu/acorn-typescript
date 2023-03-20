export const TypeScriptError = {
  AbstractMethodHasImplementation: ({ methodName }) =>
    `Method '${methodName}' cannot have an implementation because it is marked abstract.`,
  AbstractPropertyHasInitializer: ({
    propertyName
  }) =>
    `Property '${propertyName}' cannot have an initializer because it is marked abstract.`,
  AccesorCannotDeclareThisParameter:
    '\'get\' and \'set\' accessors cannot declare \'this\' parameters.',
  AccesorCannotHaveTypeParameters: 'An accessor cannot have type parameters.',
  CannotFindName: ({ name }) => `Cannot find name '${name}'.`,
  ClassMethodHasDeclare: 'Class methods cannot have the \'declare\' modifier.',
  ClassMethodHasReadonly: 'Class methods cannot have the \'readonly\' modifier.',
  ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference:
    'A \'const\' initializer in an ambient context must be a string or numeric literal or literal enum reference.',
  ConstructorHasTypeParameters:
    'Type parameters cannot appear on a constructor declaration.',
  DeclareAccessor: ({ kind }) =>
    `'declare' is not allowed in ${kind}ters.`,
  DeclareClassFieldHasInitializer:
    'Initializers are not allowed in ambient contexts.',
  DeclareFunctionHasImplementation:
    'An implementation cannot be declared in ambient contexts.',
  DuplicateAccessibilityModifier:
  // `Accessibility modifier already seen: ${modifier}` would be more helpful.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    () =>
      `Accessibility modifier already seen.`,
  DuplicateModifier: ({ modifier }) =>
    `Duplicate modifier: '${modifier}'.`,
  // `token` matches the terminology used by typescript:
  // https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts#L2915
  EmptyHeritageClauseType: ({ token }) =>
    `'${token}' list cannot be empty.`,
  EmptyTypeArguments: 'Type argument list cannot be empty.',
  EmptyTypeParameters: 'Type parameter list cannot be empty.',
  ExpectedAmbientAfterExportDeclare:
    '\'export declare\' must be followed by an ambient declaration.',
  ImportAliasHasImportType: 'An import alias can not use \'import type\'.',
  IncompatibleModifiers: ({
    modifiers

  }) =>
    `'${modifiers[0]}' modifier cannot be used with '${modifiers[1]}' modifier.`,
  IndexSignatureHasAbstract:
    'Index signatures cannot have the \'abstract\' modifier.',
  IndexSignatureHasAccessibility: ({
    modifier
  }) =>
    `Index signatures cannot have an accessibility modifier ('${modifier}').`,
  IndexSignatureHasDeclare:
    'Index signatures cannot have the \'declare\' modifier.',
  IndexSignatureHasOverride:
    '\'override\' modifier cannot appear on an index signature.',
  IndexSignatureHasStatic:
    'Index signatures cannot have the \'static\' modifier.',
  InitializerNotAllowedInAmbientContext:
    'Initializers are not allowed in ambient contexts.',
  InvalidModifierOnTypeMember: ({ modifier }) =>
    `'${modifier}' modifier cannot appear on a type member.`,
  InvalidModifierOnTypeParameter: ({ modifier }) =>
    `'${modifier}' modifier cannot appear on a type parameter.`,
  InvalidModifierOnTypeParameterPositions: ({
    modifier
  }) =>
    `'${modifier}' modifier can only appear on a type parameter of a class, interface or type alias.`,
  InvalidModifiersOrder: ({
    orderedModifiers
  }) =>
    `'${orderedModifiers[0]}' modifier must precede '${orderedModifiers[1]}' modifier.`,
  InvalidPropertyAccessAfterInstantiationExpression:
    'Invalid property access after an instantiation expression. ' +
    'You can either wrap the instantiation expression in parentheses, or delete the type arguments.',
  InvalidTupleMemberLabel:
    'Tuple members must be labeled with a simple identifier.',
  MissingInterfaceName:
    '\'interface\' declarations must be followed by an identifier.',
  MixedLabeledAndUnlabeledElements:
    'Tuple members must all have names or all not have names.',
  NonAbstractClassHasAbstractMethod:
    'Abstract methods can only appear within an abstract class.',
  NonClassMethodPropertyHasAbstractModifer:
    '\'abstract\' modifier can only appear on a class, method, or property declaration.',
  OptionalTypeBeforeRequired:
    'A required element cannot follow an optional element.',
  OverrideNotInSubClass:
    'This member cannot have an \'override\' modifier because its containing class does not extend another class.',
  PatternIsOptional:
    'A binding pattern parameter cannot be optional in an implementation signature.',
  PrivateElementHasAbstract:
    'Private elements cannot have the \'abstract\' modifier.',
  PrivateElementHasAccessibility: ({
    modifier
  }) =>
    `Private elements cannot have an accessibility modifier ('${modifier}').`,
  PrivateMethodsHasAccessibility: ({
    modifier
  }) =>
    `Private methods cannot have an accessibility modifier ('${modifier}').`,
  ReadonlyForMethodSignature:
    '\'readonly\' modifier can only appear on a property declaration or index signature.',
  ReservedArrowTypeParam:
    'This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.',
  ReservedTypeAssertion:
    'This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.',
  SetAccesorCannotHaveOptionalParameter:
    'A \'set\' accessor cannot have an optional parameter.',
  SetAccesorCannotHaveRestParameter:
    'A \'set\' accessor cannot have rest parameter.',
  SetAccesorCannotHaveReturnType:
    'A \'set\' accessor cannot have a return type annotation.',
  SingleTypeParameterWithoutTrailingComma: ({ typeParameterName }) =>
    `Single type parameter ${typeParameterName} should have a trailing comma. Example usage: <${typeParameterName},>.`,
  StaticBlockCannotHaveModifier:
    'Static class blocks cannot have any modifier.',
  TypeAnnotationAfterAssign:
    'Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.',
  TypeImportCannotSpecifyDefaultAndNamed:
    'A type-only import can specify a default import or named bindings, but not both.',
  TypeModifierIsUsedInTypeExports:
    'The \'type\' modifier cannot be used on a named export when \'export type\' is used on its export statement.',
  TypeModifierIsUsedInTypeImports:
    'The \'type\' modifier cannot be used on a named import when \'import type\' is used on its import statement.',
  UnexpectedParameterModifier:
    'A parameter property is only allowed in a constructor implementation.',
  UnexpectedReadonly:
    '\'readonly\' type modifier is only permitted on array and tuple literal types.',
  UnexpectedTypeAnnotation: 'Did not expect a type annotation here.',
  UnexpectedTypeCastInParameter: 'Unexpected type cast in parameter position.',
  UnsupportedImportTypeArgument:
    'Argument in a type import must be a string literal.',
  UnsupportedParameterPropertyKind:
    'A parameter property may not be declared using a binding pattern.',
  UnsupportedSignatureParameterKind: ({ type }) =>
    `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${type}.`,
  LetInLexicalBinding:
    '\'let\' is not allowed to be used as a name in \'let\' or \'const\' declarations.'
}

export const DecoratorsError = {
  UnexpectedLeadingDecorator: 'Leading decorators must be attached to a class declaration.'
}
