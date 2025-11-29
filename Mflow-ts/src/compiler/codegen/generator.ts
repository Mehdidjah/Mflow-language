import * as AST from '../ast/nodes';

export class CodeGenerator {
  private indent: number = 0;
  private output: string = '';

  private emit(code: string): void {
    this.output += code;
  }

  private emitLine(code: string): void {
    this.emit('  '.repeat(this.indent) + code + '\n');
  }

  private emitIndent(): void {
    this.emit('  '.repeat(this.indent));
  }

  public generate(program: AST.Program): string {
    this.output = '';
    this.indent = 0;

    // Runtime setup
    this.emitLine('// MFlow compiled output - Created by Mehdi');
    this.emitLine('const canvas = document.getElementById("mflow-canvas");');
    this.emitLine('const ctx = canvas.getContext("2d");');
    this.emitLine('');
    this.emitLine('// Animation state');
    this.emitLine('let animationState = {');
    this.indent++;
    this.emitLine('x: 0,');
    this.emitLine('y: 0,');
    this.emitLine('rotation: 0,');
    this.emitLine('scale: 1,');
    this.emitLine('opacity: 1');
    this.indent--;
    this.emitLine('};');
    this.emitLine('');
    this.emitLine('// Helper functions');
    this.emitLine('function resetTransform() {');
    this.indent++;
    this.emitLine('ctx.setTransform(1, 0, 0, 1, 0, 0);');
    this.indent--;
    this.emitLine('}');
    this.emitLine('');
    this.emitLine('function applyTransform(x, y) {');
    this.indent++;
    this.emitLine('ctx.translate(x + animationState.x, y + animationState.y);');
    this.emitLine('ctx.rotate(animationState.rotation * Math.PI / 180);');
    this.emitLine('ctx.scale(animationState.scale, animationState.scale);');
    this.emitLine('ctx.globalAlpha = animationState.opacity;');
    this.indent--;
    this.emitLine('}');
    this.emitLine('');
    this.emitLine('// Clear canvas');
    this.emitLine('function clear() {');
    this.indent++;
    this.emitLine('ctx.clearRect(0, 0, canvas.width, canvas.height);');
    this.indent--;
    this.emitLine('}');
    this.emitLine('');
    this.emitLine('// Main program');
    this.emitLine('(function main() {');
    this.indent++;

    for (const statement of program.body) {
      this.generateStatement(statement);
    }

    this.indent--;
    this.emitLine('})();');

    return this.output;
  }

  private generateStatement(stmt: AST.Statement): void {
    switch (stmt.type) {
      case AST.NodeType.LET_STATEMENT:
        this.generateLetStatement(stmt);
        break;
      case AST.NodeType.FUNCTION_DECLARATION:
        this.generateFunctionDeclaration(stmt);
        break;
      case AST.NodeType.RETURN_STATEMENT:
        this.emitIndent();
        this.emit('return');
        if (stmt.value) {
          this.emit(' ');
          this.generateExpression(stmt.value);
        }
        this.emit(';\n');
        break;
      case AST.NodeType.IF_STATEMENT:
        this.generateIfStatement(stmt);
        break;
      case AST.NodeType.REPEAT_STATEMENT:
        this.generateRepeatStatement(stmt);
        break;
      case AST.NodeType.ANIMATE_BLOCK:
        this.generateAnimateBlock(stmt);
        break;
      case AST.NodeType.SCENE_BLOCK:
        this.generateSceneBlock(stmt);
        break;
      case AST.NodeType.EXPRESSION_STATEMENT:
        this.emitIndent();
        this.generateExpression(stmt.expression);
        this.emit(';\n');
        break;
    }
  }

  private generateLetStatement(stmt: AST.LetStatement): void {
    this.emitIndent();
    this.emit(`let ${stmt.identifier.name} = `);
    this.generateExpression(stmt.value);
    this.emit(';\n');
  }

  private generateFunctionDeclaration(stmt: AST.FunctionDeclaration): void {
    this.emitIndent();
    this.emit(`function ${stmt.name.name}(`);
    this.emit(stmt.parameters.map(p => p.name).join(', '));
    this.emit(') {\n');
    this.indent++;

    for (const bodyStmt of stmt.body) {
      this.generateStatement(bodyStmt);
    }

    this.indent--;
    this.emitLine('}');
  }

  private generateIfStatement(stmt: AST.IfStatement): void {
    this.emitIndent();
    this.emit('if (');
    this.generateExpression(stmt.condition);
    this.emit(') {\n');
    this.indent++;

    for (const thenStmt of stmt.thenBranch) {
      this.generateStatement(thenStmt);
    }

    this.indent--;

    if (stmt.elseBranch) {
      this.emitLine('} else {');
      this.indent++;

      for (const elseStmt of stmt.elseBranch) {
        this.generateStatement(elseStmt);
      }

      this.indent--;
    }

    this.emitLine('}');
  }

  private generateRepeatStatement(stmt: AST.RepeatStatement): void {
    this.emitIndent();
    this.emit('for (let __i = 0; __i < ');
    this.generateExpression(stmt.times);
    this.emit('; __i++) {\n');
    this.indent++;

    for (const bodyStmt of stmt.body) {
      this.generateStatement(bodyStmt);
    }

    this.indent--;
    this.emitLine('}');
  }

  private generateAnimateBlock(stmt: AST.AnimateBlock): void {
    this.emitLine('// Animation loop');
    this.emitLine('function animate() {');
    this.indent++;
    this.emitLine('clear();');

    for (const anim of stmt.animations) {
      this.generateAnimationCommand(anim);
    }

    this.emitLine('requestAnimationFrame(animate);');
    this.indent--;
    this.emitLine('}');
    this.emitLine('animate();');
  }

  private generateAnimationCommand(cmd: AST.AnimationCommand): void {
    switch (cmd.type) {
      case AST.NodeType.MOVE:
        this.emitIndent();
        const axis = cmd.direction === 'left' || cmd.direction === 'right' ? 'x' : 'y';
        const sign = cmd.direction === 'left' || cmd.direction === 'up' ? '-' : '+';
        this.emit(`animationState.${axis} ${sign}= `);
        this.generateExpression(cmd.amount);
        this.emit(';\n');
        break;
      case AST.NodeType.ROTATE:
        this.emitIndent();
        this.emit('animationState.rotation += ');
        this.generateExpression(cmd.angle);
        this.emit(';\n');
        break;
      case AST.NodeType.SCALE:
        this.emitIndent();
        this.emit('animationState.scale *= ');
        this.generateExpression(cmd.factor);
        this.emit(';\n');
        break;
      case AST.NodeType.FADE:
        this.emitIndent();
        this.emit('animationState.opacity -= ');
        this.generateExpression(cmd.amount);
        this.emit(';\n');
        break;
    }
  }

  private generateSceneBlock(stmt: AST.SceneBlock): void {
    this.emitLine(`// Scene: ${stmt.name}`);
    this.emitLine(`function scene_${stmt.name}() {`);
    this.indent++;

    for (const bodyStmt of stmt.body) {
      this.generateStatement(bodyStmt);
    }

    this.indent--;
    this.emitLine('}');
    this.emitLine(`scene_${stmt.name}();`);
  }

  private generateExpression(expr: AST.Expression): void {
    switch (expr.type) {
      case AST.NodeType.NUMBER_LITERAL:
        this.emit(expr.value.toString());
        break;
      case AST.NodeType.STRING_LITERAL:
        this.emit(`"${expr.value}"`);
        break;
      case AST.NodeType.COLOR_LITERAL:
        this.emit(`"${expr.value}"`);
        break;
      case AST.NodeType.IDENTIFIER:
        this.emit(expr.name);
        break;
      case AST.NodeType.BINARY_EXPRESSION:
        this.emit('(');
        this.generateExpression(expr.left);
        this.emit(` ${expr.operator} `);
        this.generateExpression(expr.right);
        this.emit(')');
        break;
      case AST.NodeType.CALL_EXPRESSION:
        this.generateExpression(expr.callee);
        this.emit('(');
        expr.arguments.forEach((arg, i) => {
          if (i > 0) this.emit(', ');
          this.generateExpression(arg);
        });
        this.emit(')');
        break;
      case AST.NodeType.CIRCLE:
        this.generateCircle(expr);
        break;
      case AST.NodeType.RECT:
        this.generateRect(expr);
        break;
      case AST.NodeType.LINE:
        this.generateLine(expr);
        break;
      case AST.NodeType.TRIANGLE:
        this.generateTriangle(expr);
        break;
    }
  }

  private generateCircle(expr: AST.Circle): void {
    this.emit('(function() {\n');
    this.indent++;
    this.emitLine('ctx.save();');
    this.emitIndent();
    this.emit('const x = ');
    this.generateExpression(expr.position.x);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const y = ');
    this.generateExpression(expr.position.y);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const size = ');
    this.generateExpression(expr.size);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const color = ');
    this.generateExpression(expr.color);
    this.emit(';\n');
    this.emitLine('applyTransform(x, y);');
    this.emitLine('ctx.beginPath();');
    this.emitLine('ctx.arc(0, 0, size, 0, Math.PI * 2);');
    this.emitLine('ctx.fillStyle = color;');
    this.emitLine('ctx.fill();');
    this.emitLine('ctx.restore();');
    this.indent--;
    this.emitIndent();
    this.emit('})()');
  }

  private generateRect(expr: AST.Rect): void {
    this.emit('(function() {\n');
    this.indent++;
    this.emitLine('ctx.save();');
    this.emitIndent();
    this.emit('const x = ');
    this.generateExpression(expr.position.x);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const y = ');
    this.generateExpression(expr.position.y);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const w = ');
    this.generateExpression(expr.width);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const h = ');
    this.generateExpression(expr.height);
    this.emit(';\n');
    this.emitIndent();
    this.emit('const color = ');
    this.generateExpression(expr.color);
    this.emit(';\n');
    this.emitLine('applyTransform(x, y);');
    this.emitLine('ctx.fillStyle = color;');
    this.emitLine('ctx.fillRect(-w/2, -h/2, w, h);');
    this.emitLine('ctx.restore();');
    this.indent--;
    this.emitIndent();
    this.emit('})()');
  }

  private generateLine(expr: AST.Line): void {
    this.emit('(function() {\n');
    this.indent++;
    this.emitLine('ctx.save();');
    this.emitIndent();
    this.emit('const color = ');
    this.generateExpression(expr.color);
    this.emit(';\n');
    this.emitLine('ctx.strokeStyle = color;');
    this.emitLine('ctx.beginPath();');
    this.emitIndent();
    this.emit('ctx.moveTo(');
    this.generateExpression(expr.start.x);
    this.emit(', ');
    this.generateExpression(expr.start.y);
    this.emit(');\n');
    this.emitIndent();
    this.emit('ctx.lineTo(');
    this.generateExpression(expr.end.x);
    this.emit(', ');
    this.generateExpression(expr.end.y);
    this.emit(');\n');
    this.emitLine('ctx.stroke();');
    this.emitLine('ctx.restore();');
    this.indent--;
    this.emitIndent();
    this.emit('})()');
  }

  private generateTriangle(expr: AST.Triangle): void {
    this.emit('(function() {\n');
    this.indent++;
    this.emitLine('ctx.save();');
    this.emitIndent();
    this.emit('const color = ');
    this.generateExpression(expr.color);
    this.emit(';\n');
    this.emitLine('ctx.fillStyle = color;');
    this.emitLine('ctx.beginPath();');
    
    expr.points.forEach((point, i) => {
      this.emitIndent();
      this.emit(i === 0 ? 'ctx.moveTo(' : 'ctx.lineTo(');
      this.generateExpression(point.x);
      this.emit(', ');
      this.generateExpression(point.y);
      this.emit(');\n');
    });
    
    this.emitLine('ctx.closePath();');
    this.emitLine('ctx.fill();');
    this.emitLine('ctx.restore();');
    this.indent--;
    this.emitIndent();
    this.emit('})()');
  }
}
