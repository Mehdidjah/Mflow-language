// AST Node types for MFlow language

export enum NodeType {
  PROGRAM = 'Program',
  
  // Statements
  LET_STATEMENT = 'LetStatement',
  FUNCTION_DECLARATION = 'FunctionDeclaration',
  RETURN_STATEMENT = 'ReturnStatement',
  IF_STATEMENT = 'IfStatement',
  REPEAT_STATEMENT = 'RepeatStatement',
  ANIMATE_BLOCK = 'AnimateBlock',
  SCENE_BLOCK = 'SceneBlock',
  EXPRESSION_STATEMENT = 'ExpressionStatement',
  
  // Expressions
  IDENTIFIER = 'Identifier',
  NUMBER_LITERAL = 'NumberLiteral',
  STRING_LITERAL = 'StringLiteral',
  COLOR_LITERAL = 'ColorLiteral',
  BINARY_EXPRESSION = 'BinaryExpression',
  CALL_EXPRESSION = 'CallExpression',
  
  // Shapes
  CIRCLE = 'Circle',
  RECT = 'Rect',
  LINE = 'Line',
  TRIANGLE = 'Triangle',
  
  // Animations
  MOVE = 'Move',
  ROTATE = 'Rotate',
  SCALE = 'Scale',
  FADE = 'Fade',
}

export interface ASTNode {
  type: NodeType;
  line: number;
  column: number;
}

export interface Program extends ASTNode {
  type: NodeType.PROGRAM;
  body: Statement[];
}

// Statements
export type Statement =
  | LetStatement
  | FunctionDeclaration
  | ReturnStatement
  | IfStatement
  | RepeatStatement
  | AnimateBlock
  | SceneBlock
  | ExpressionStatement;

export interface LetStatement extends ASTNode {
  type: NodeType.LET_STATEMENT;
  identifier: Identifier;
  value: Expression;
}

export interface FunctionDeclaration extends ASTNode {
  type: NodeType.FUNCTION_DECLARATION;
  name: Identifier;
  parameters: Identifier[];
  body: Statement[];
}

export interface ReturnStatement extends ASTNode {
  type: NodeType.RETURN_STATEMENT;
  value: Expression | null;
}

export interface IfStatement extends ASTNode {
  type: NodeType.IF_STATEMENT;
  condition: Expression;
  thenBranch: Statement[];
  elseBranch: Statement[] | null;
}

export interface RepeatStatement extends ASTNode {
  type: NodeType.REPEAT_STATEMENT;
  times: Expression;
  body: Statement[];
}

export interface AnimateBlock extends ASTNode {
  type: NodeType.ANIMATE_BLOCK;
  animations: AnimationCommand[];
}

export interface SceneBlock extends ASTNode {
  type: NodeType.SCENE_BLOCK;
  name: string;
  body: Statement[];
}

export interface ExpressionStatement extends ASTNode {
  type: NodeType.EXPRESSION_STATEMENT;
  expression: Expression;
}

// Expressions
export type Expression =
  | Identifier
  | NumberLiteral
  | StringLiteral
  | ColorLiteral
  | BinaryExpression
  | CallExpression
  | ShapeExpression
  | AnimationCommand;

export interface Identifier extends ASTNode {
  type: NodeType.IDENTIFIER;
  name: string;
}

export interface NumberLiteral extends ASTNode {
  type: NodeType.NUMBER_LITERAL;
  value: number;
}

export interface StringLiteral extends ASTNode {
  type: NodeType.STRING_LITERAL;
  value: string;
}

export interface ColorLiteral extends ASTNode {
  type: NodeType.COLOR_LITERAL;
  value: string;
}

export interface BinaryExpression extends ASTNode {
  type: NodeType.BINARY_EXPRESSION;
  operator: string;
  left: Expression;
  right: Expression;
}

export interface CallExpression extends ASTNode {
  type: NodeType.CALL_EXPRESSION;
  callee: Expression;
  arguments: Expression[];
}

// Shapes
export type ShapeExpression = Circle | Rect | Line | Triangle;

export interface Circle extends ASTNode {
  type: NodeType.CIRCLE;
  position: { x: Expression; y: Expression };
  size: Expression;
  color: Expression;
}

export interface Rect extends ASTNode {
  type: NodeType.RECT;
  position: { x: Expression; y: Expression };
  width: Expression;
  height: Expression;
  color: Expression;
}

export interface Line extends ASTNode {
  type: NodeType.LINE;
  start: { x: Expression; y: Expression };
  end: { x: Expression; y: Expression };
  color: Expression;
}

export interface Triangle extends ASTNode {
  type: NodeType.TRIANGLE;
  points: Array<{ x: Expression; y: Expression }>;
  color: Expression;
}

// Animation Commands
export type AnimationCommand = Move | Rotate | Scale | Fade;

export interface Move extends ASTNode {
  type: NodeType.MOVE;
  amount: Expression;
  direction: 'up' | 'down' | 'left' | 'right';
}

export interface Rotate extends ASTNode {
  type: NodeType.ROTATE;
  angle: Expression;
}

export interface Scale extends ASTNode {
  type: NodeType.SCALE;
  factor: Expression;
}

export interface Fade extends ASTNode {
  type: NodeType.FADE;
  amount: Expression;
}
