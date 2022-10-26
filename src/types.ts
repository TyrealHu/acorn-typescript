import type { Position, TokContext, TokenType } from 'acorn'

export type LookaheadState = {
  pos: number;
  value: any;
  type: TokenType;
  start: number;
  end: number;
  context: TokContext[];
  startLoc: Position;
  lastTokEndLoc: Position;
  curLine: number;
  lineStart: number;
  curPosition: () => Position;
};
