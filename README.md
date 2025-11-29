MFlow - A Creative Programming Language

Created by Mehdi

A creative compiler for artistic coders
What is MFlow?

MFlow is a complete custom programming language and compiler that I built from scratch for creative coding, generative art, animations, and interactive visuals. It's not a framework or library – it's a real compiled language with a full compiler pipeline that generates executable JavaScript.

Why I Built This

I wanted to create a language that puts creativity first. Most programming languages were designed for general-purpose computing, but MFlow is specifically designed for artists and creative coders. Shapes, colors, and animations aren't afterthoughts – they're first-class language constructs.

Quick Start

Prerequisites

Node.js & npm (install with nvm)
Installation

# Clone the repository
git clone <YOUR_GIT_URL>
cd mflow

# Install dependencies
npm install

# Start the development server
npm run dev
The web IDE will open at http://localhost:8080

How It Works

MFlow uses a complete compiler architecture with five main phases:

1. Lexical Analysis (Lexer)

The lexer tokenizes source code into meaningful tokens:

"circle at (250, 250)" → [CIRCLE, AT, LPAREN, NUMBER, COMMA, NUMBER, RPAREN]
2. Syntax Analysis (Parser)

The parser builds an Abstract Syntax Tree (AST) using recursive descent:

Source → Tokens → AST
3. Semantic Analysis

Validates variable declarations, scoping, and type consistency:

Checks variables are defined before use
Manages nested scopes
Validates function calls
4. Code Generation

Generates optimized JavaScript with Canvas API calls:

MFlow → JavaScript + Canvas API
5. Runtime Execution

The generated code runs in the browser with animation loops and transform state management.

Writing MFlow Code

Basic Syntax

// Variables
let x = 100
let color = #00FFFF

// Shapes
circle at (250, 250) size 50 color #00FFFF
rect at (100, 100) width 80 height 60 color #FF00FF

// Functions
fn drawStar(x, y) {
  circle at (x, y) size 20 color #FFFF00
}

// Loops
repeat 10 {
  circle at (x, 250) size 20 color #00FFFF
  let x = x + 50
}

// Animation
animate {
  move 2 right
  rotate 1
  scale 1.01
}
Project Structure

mflow/
├── src/
│   ├── compiler/           # Full compiler implementation
│   │   ├── lexer/         # Tokenization
│   │   ├── parser/        # AST construction
│   │   ├── ast/           # Node definitions
│   │   ├── semantic/      # Validation
│   │   └── codegen/       # JavaScript generation
│   ├── pages/             # Web IDE interface
│   └── components/        # UI components
├── examples/              # Example programs
├── docs/                  # Full documentation
│   ├── LANGUAGE_SPEC.md
│   └── COMPILER_ARCHITECTURE.md
└── README.md
Technologies Used

TypeScript: Full compiler implementation
React: Web IDE interface
Vite: Build tool and dev server
Tailwind CSS: Styling
shadcn/ui: UI components
Compiler Architecture

The compiler is built with professional compiler construction techniques:

Lexer: Character-by-character scanning with efficient token generation
Parser: Recursive descent with operator precedence
AST: Complete abstract syntax tree representation
Semantic Analyzer: Symbol table-based validation
Code Generator: Template-based JavaScript emission
Read the full architecture documentation in docs/COMPILER_ARCHITECTURE.md

Example Programs

I've included several example programs in the examples/ directory:

basic-shapes.mflow - Shape primitives demonstration
rotating-animation.mflow - Rotation and scaling
moving-circle.mflow - Motion animation
color-gradient.mflow - Pattern generation
generative-pattern.mflow - Complex generative art
function-demo.mflow - Reusable functions
conditional-art.mflow - Conditional rendering
wave-motion.mflow - Combined transformations
Using the Compiler

Web IDE

The easiest way to use MFlow is through the web IDE:

Start the dev server: npm run dev
Write MFlow code in the editor
Click "Compile" to generate JavaScript
Click "Run" to see your creation in the canvas preview
Programmatic Usage

import { MFlowCompiler } from './src/compiler';

const compiler = new MFlowCompiler();
const result = compiler.compile(sourceCode);

if (result.success) {
  console.log(result.output);
  // Execute or save the JavaScript
} else {
  console.error(result.errors);
}
Deployment

This is a standard Vite React application. You can deploy it to:

Vercel: vercel --prod
Netlify: Drag and drop the dist folder
GitHub Pages: Push to gh-pages branch
Any static host: Build with npm run build
Documentation

Language Specification: docs/LANGUAGE_SPEC.md - Complete syntax reference
Compiler Architecture: docs/COMPILER_ARCHITECTURE.md - Implementation details
Marketing Materials: MARKETING.md - Project descriptions and branding
Compiler README: COMPILER_README.md - User-facing documentation
Development

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
Contributing

This is a personal project showcasing compiler construction and creative coding. If you'd like to contribute or suggest features, feel free to open an issue or pull request.

License

MIT License - See LICENSE file for details

About the Creator

I'm Mehdi, and I built MFlow to demonstrate professional compiler construction while making creative coding more accessible and expressive. This project represents a complete implementation of a programming language from lexical analysis through code generation.

If you're interested in compilers, programming language design, or creative coding, I hope this project inspires you to build something amazing.

MFlow - Where creativity meets computation
Created by Mehdi 🎨⚡
