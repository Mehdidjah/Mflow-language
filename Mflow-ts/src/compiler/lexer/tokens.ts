// Token types for MFlow language
export enum TokenType {
  // Literals
  NUMBER = 'NUMBER',
  STRING = 'STRING',
  COLOR = 'COLOR',
  IDENTIFIER = 'IDENTIFIER',

  // Keywords
  LET = 'LET',
  FN = 'FN',
  RETURN = 'RETURN',
  IF = 'IF',
  ELSE = 'ELSE',
  REPEAT = 'REPEAT',
  ANIMATE = 'ANIMATE',
  SCENE = 'SCENE',

  // Shape keywords
  CIRCLE = 'CIRCLE',
  RECT = 'RECT',
  LINE = 'LINE',
  TRIANGLE = 'TRIANGLE',

  // Animation keywords
  MOVE = 'MOVE',
  ROTATE = 'ROTATE',
  SCALE = 'SCALE',
  FADE = 'FADE',

  // Direction keywords
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',

  // Properties
  AT = 'AT',
  SIZE = 'SIZE',
  WIDTH = 'WIDTH',
  HEIGHT = 'HEIGHT',
  COLOR_PROP = 'COLOR_PROP',
  SPEED = 'SPEED',

  // Operators
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
  MODULO = 'MODULO',
  ASSIGN = 'ASSIGN',
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  LESS_THAN = 'LESS_THAN',
  GREATER_THAN = 'GREATER_THAN',
  LESS_EQUAL = 'LESS_EQUAL',
  GREATER_EQUAL = 'GREATER_EQUAL',

  // Delimiters
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  LBRACE = 'LBRACE',
  RBRACE = 'RBRACE',
  COMMA = 'COMMA',
  DOT = 'DOT',
  NEWLINE = 'NEWLINE',

  // Special
  EOF = 'EOF',
  ILLEGAL = 'ILLEGAL',
}

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  column: number;
}

export const KEYWORDS: Record<string, TokenType> = {
  let: TokenType.LET,
  fn: TokenType.FN,
  return: TokenType.RETURN,
  if: TokenType.IF,
  else: TokenType.ELSE,
  repeat: TokenType.REPEAT,
  animate: TokenType.ANIMATE,
  scene: TokenType.SCENE,
  circle: TokenType.CIRCLE,
  rect: TokenType.RECT,
  line: TokenType.LINE,
  triangle: TokenType.TRIANGLE,
  move: TokenType.MOVE,
  rotate: TokenType.ROTATE,
  scale: TokenType.SCALE,
  fade: TokenType.FADE,
  up: TokenType.UP,
  down: TokenType.DOWN,
  left: TokenType.LEFT,
  right: TokenType.RIGHT,
  at: TokenType.AT,
  size: TokenType.SIZE,
  width: TokenType.WIDTH,
  height: TokenType.HEIGHT,
  color: TokenType.COLOR_PROP,
  speed: TokenType.SPEED,
};
