# MFlow - A Creative Programming Language

**Created by Mehdi**

> *A creative compiler for artistic coders*

MFlow is a complete custom programming language and compiler designed specifically for creative coding, generative art, animations, and interactive visuals. Built from scratch with TypeScript, MFlow features a full compiler pipeline including lexical analysis, parsing, AST generation, semantic analysis, and code generation to JavaScript.

## 🎨 Vision

MFlow empowers creative coders and digital artists to express their ideas through an intuitive, expressive syntax. Whether you're creating generative art, interactive visualizations, or experimental animations, MFlow provides a seamless bridge between creative intent and technical execution.

## ✨ Features

- **Expressive Syntax**: Clean, intuitive language designed for creative expression
- **Full Compiler Pipeline**: Complete implementation with lexer, parser, AST, semantic analyzer, and code generator
- **Real-time Compilation**: Instant feedback from source code to executable JavaScript
- **Canvas-Based Graphics**: Built-in support for shapes, colors, and animations
- **Error Handling**: Comprehensive error messages at lexical, syntactic, and semantic levels
- **TypeScript Implementation**: Fully typed, maintainable, and extensible codebase

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/mehdi/mflow.git
cd mflow

# Install dependencies
npm install

# Run the development server
npm run dev

# Build the project
npm run build
```

## 📖 Language Syntax Reference

### Variables

```mflow
let x = 100
let color = #FF00FF
let name = "MFlow"
```

### Shapes

```mflow
// Circle
circle at (200, 200) size 50 color #00FFFF

// Rectangle
rect at (100, 100) width 80 height 60 color #FF00FF

// Line
line (50, 50) (200, 200) color #FFFFFF

// Triangle
triangle (250, 100) (200, 200) (300, 200) color #FFFF00
```

### Functions

```mflow
fn drawStar(x, y) {
  circle at (x, y) size 20 color #FFFF00
}

drawStar(250, 250)
```

### Control Flow

```mflow
// Conditional
if x > 100 {
  circle at (x, 100) size 30 color #00FFFF
} else {
  rect at (x, 100) width 40 height 40 color #FF00FF
}

// Loops
repeat 10 {
  circle at (x, 250) size 15 color #00FFFF
  let x = x + 50
}
```

### Animations

```mflow
animate {
  move 2 right
  rotate 1
  scale 1.01
  fade 0.01
}
```

### Scenes

```mflow
scene intro {
  circle at (250, 250) size 100 color #00FFFF
  
  animate {
    rotate 2
    scale 1.005
  }
}
```

### Operators

```mflow
let result = (10 + 5) * 2 - 3
let isLarge = x > 100
let combined = a == b
```

## 🏗️ Compiler Architecture

### 1. Lexical Analysis (Lexer)

The lexer tokenizes source code into a stream of tokens:

```typescript
import { Lexer } from './compiler/lexer/lexer';

const lexer = new Lexer(sourceCode);
const tokens = lexer.tokenize();
```

**Token Types**:
- Literals: `NUMBER`, `STRING`, `COLOR`, `IDENTIFIER`
- Keywords: `LET`, `FN`, `IF`, `ANIMATE`, `CIRCLE`, etc.
- Operators: `PLUS`, `MINUS`, `ASSIGN`, `EQUAL`, etc.
- Delimiters: `LPAREN`, `RPAREN`, `LBRACE`, `RBRACE`

### 2. Syntax Analysis (Parser)

The parser builds an Abstract Syntax Tree (AST) using recursive descent:

```typescript
import { Parser } from './compiler/parser/parser';

const parser = new Parser(tokens);
const ast = parser.parse();
```

**AST Node Types**:
- Statements: `LetStatement`, `FunctionDeclaration`, `IfStatement`, `AnimateBlock`
- Expressions: `BinaryExpression`, `CallExpression`, `Circle`, `Rect`
- Literals: `NumberLiteral`, `ColorLiteral`, `StringLiteral`

### 3. Semantic Analysis

The semantic analyzer validates variable declarations, scoping, and type consistency:

```typescript
import { SemanticAnalyzer } from './compiler/semantic/analyzer';

const analyzer = new SemanticAnalyzer();
const errors = analyzer.analyze(ast);
```

**Checks**:
- Variable declaration before use
- Scope resolution
- Type validation
- Function parameter matching

### 4. Code Generation

The code generator produces executable JavaScript with Canvas API calls:

```typescript
import { CodeGenerator } from './compiler/codegen/generator';

const generator = new CodeGenerator();
const jsCode = generator.generate(ast);
```

**Output Features**:
- Canvas setup and context management
- Animation loop with `requestAnimationFrame`
- Transform state management
- Helper functions for rendering

### 5. Complete Compilation

```typescript
import { MFlowCompiler } from './compiler';

const compiler = new MFlowCompiler();
const result = compiler.compile(sourceCode);

if (result.success) {
  console.log(result.output);
} else {
  console.error(result.errors);
}
```

## 📁 Project Structure

```
mflow/
├── src/
│   ├── compiler/
│   │   ├── lexer/
│   │   │   ├── tokens.ts         # Token type definitions
│   │   │   └── lexer.ts          # Lexical analyzer
│   │   ├── parser/
│   │   │   └── parser.ts         # Syntax analyzer
│   │   ├── ast/
│   │   │   └── nodes.ts          # AST node definitions
│   │   ├── semantic/
│   │   │   └── analyzer.ts       # Semantic analyzer
│   │   ├── codegen/
│   │   │   └── generator.ts      # Code generator
│   │   └── index.ts              # Compiler entry point
│   ├── pages/
│   │   └── Index.tsx             # Web IDE interface
│   └── components/               # UI components
├── examples/                     # Example programs
├── tests/                        # Test suite
├── docs/                         # Documentation
└── README.md
```

## 🎯 Example Programs

### 1. Basic Shapes

```mflow
// Simple geometric composition
circle at (150, 150) size 60 color #00FFFF
rect at (350, 150) width 80 height 80 color #FF00FF
triangle (250, 300) (200, 400) (300, 400) color #FFFF00
```

### 2. Animation Loop

```mflow
// Rotating colorful circle
circle at (250, 250) size 80 color #00FFFF

animate {
  rotate 2
  scale 1.002
}
```

### 3. Generative Pattern

```mflow
// Circular pattern
let angle = 0
repeat 12 {
  let x = 250 + 150
  let y = 250 + 150
  circle at (x, y) size 30 color #00FFFF
  let angle = angle + 30
}
```

### 4. Color Gradient

```mflow
// Horizontal color transition
let x = 50
repeat 9 {
  circle at (x, 250) size 40 color #00FFFF
  let x = x + 50
}
```

### 5. Complex Scene

```mflow
scene artwork {
  // Background layer
  rect at (250, 250) width 500 height 500 color #1A1A2E
  
  // Foreground elements
  circle at (150, 150) size 50 color #00FFFF
  circle at (350, 150) size 50 color #FF00FF
  circle at (250, 350) size 50 color #FFFF00
  
  // Animation
  animate {
    move 1 right
    rotate 0.5
  }
}
```

## 🛠️ CLI Usage

```bash
# Compile a MFlow file
npm run compile examples/basic.mflow

# Output JavaScript
npm run compile examples/animation.mflow --output dist/animation.js

# Run with live preview
npm run dev
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test lexer
npm test parser
npm test semantic
npm test codegen
```

## 📚 Documentation

- [Language Specification](./docs/language-spec.md)
- [Compiler Design](./docs/compiler-design.md)
- [API Reference](./docs/api-reference.md)
- [Examples Gallery](./docs/examples.md)

## 🎓 Technical Details

### Lexer Implementation

The lexer uses a character-by-character scanning approach with look-ahead for multi-character tokens:

- **Whitespace handling**: Automatic skipping of spaces, tabs, and comments
- **Number parsing**: Support for integers and floating-point numbers
- **String parsing**: Quote-delimited strings with escape sequences
- **Color parsing**: Hex color codes (#RRGGBB format)
- **Keyword recognition**: Efficient keyword lookup table

### Parser Implementation

Recursive descent parser with operator precedence:

- **Expression parsing**: Pratt parsing for binary operators
- **Statement parsing**: Context-aware statement recognition
- **Error recovery**: Synchronization on statement boundaries
- **Look-ahead**: Single-token look-ahead for decision making

### Semantic Analysis

Symbol table-based analysis with scope tracking:

- **Scope management**: Nested scope stack
- **Symbol resolution**: Multi-scope lookup
- **Type inference**: Basic type checking for operations
- **Error collection**: Accumulates all errors before reporting

### Code Generation

Template-based JavaScript generation:

- **Runtime setup**: Canvas initialization and helper functions
- **Transform management**: State-based transformation system
- **Optimization**: Inline function calls where possible
- **Readability**: Generated code is human-readable

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - See [LICENSE](./LICENSE) file for details

## 👨‍💻 Created By

**Mehdi** - Language Designer & Compiler Architect

This compiler is a complete implementation built from the ground up, demonstrating professional compiler construction techniques and creative language design.

## 🌟 Acknowledgments

MFlow was designed to make creative coding more accessible and expressive. Special thanks to the creative coding community for inspiration.

---

**MFlow** - *Where creativity meets computation*
