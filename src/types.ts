import type { Position, TokContext, TokenType } from 'acorn'

export type Accessibility = "public" | "protected" | "private";

export type VarianceAnnotations = "in" | "out";

export type TsModifier =
  | "readonly"
  | "abstract"
  | "declare"
  | "static"
  | "override"
  | Accessibility
  | VarianceAnnotations;

export type LookaheadState = {
  pos: number;
  value: any;
  type: TokenType;
  start: number;
  end: number;
  context: TokContext[];
  startLoc: any;
  lastTokEndLoc: any;
  curLine: number;
  lineStart: number;
  curPosition: () => Position;
  containsEsc: boolean;
};

export type ParsingContext =
  | "EnumMembers"
  | "HeritageClauseElement"
  | "TupleElementTypes"
  | "TypeMembers"
  | "TypeParametersOrArguments";

export type ModifierBase = {
  accessibility?: Accessibility;
} & {
  [key in TsModifier]?: boolean | undefined | null;
};

export type TryParse<Node, Error, Thrown, Aborted, FailState> = {
  node: Node;
  error: Error;
  thrown: Thrown;
  aborted: Aborted;
  failState: FailState;
};
