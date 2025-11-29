# MFlow - GitHub Marketing Materials

## Short Description (160 characters)

A creative programming language & compiler for generative art and animations. Full TypeScript compiler with lexer, parser & codegen. Created by Mehdi.

## Long Description

MFlow is a complete custom programming language and compiler designed specifically for creative coders, digital artists, and visual programmers. Built entirely from scratch using TypeScript, MFlow features a full compiler implementation including lexical analysis, parsing, Abstract Syntax Tree generation, semantic analysis, and JavaScript code generation.

Unlike visual programming tools or frameworks, MFlow is a real compiled language with an expressive, artist-friendly syntax that compiles directly to optimized JavaScript with Canvas API calls. Whether you're creating generative art, interactive installations, or experimental animations, MFlow provides the power of a real programming language with the simplicity and clarity that creative work demands.

The compiler architecture includes:
- **Lexical Analyzer**: Tokenizes source code with support for numbers, strings, colors, and custom keywords
- **Parser**: Builds a complete AST using recursive descent parsing
- **Semantic Analyzer**: Validates scoping, variable declarations, and type consistency
- **Code Generator**: Produces clean, optimized JavaScript with animation runtime

MFlow syntax is designed from the ground up for creative expression - shapes, colors, animations, and motion primitives are first-class language constructs, not afterthoughts.

Perfect for artists who code, coders who create art, educators teaching creative programming, and anyone who wants a powerful yet approachable language for visual and interactive projects.

## Tagline

**"A creative compiler for artistic coders — by Mehdi"**

Alternative taglines:
- "Where creativity meets computation"
- "Compiled creativity for digital artists"
- "Creative code, professionally compiled"
- "Art-first language design, compiler-grade execution"

## GitHub Topics

```
programming-language
compiler
creative-coding
generative-art
typescript
lexer
parser
ast
code-generation
semantic-analysis
canvas-api
digital-art
visualization
animation
compiler-design
language-design
artistic-programming
```

## Feature List

### 🎨 **Creative-First Syntax**
- Shapes, colors, and animations as native language constructs
- Intuitive, artist-friendly syntax designed for visual thinking
- No boilerplate - start creating immediately

### ⚙️ **Real Compiler Implementation**
- Complete lexical analysis with token generation
- Recursive descent parser building full AST
- Semantic analyzer with scope checking and validation
- Professional code generation to JavaScript

### 🚀 **Instant Execution**
- Compiles to optimized JavaScript with Canvas API
- Real-time compilation and preview
- Animation runtime with transform state management
- Clean, readable generated code

### 🛠️ **Professional Architecture**
- Fully typed TypeScript implementation
- Modular compiler pipeline design
- Comprehensive error handling and reporting
- Extensible for custom features and backends

### 📚 **Complete Documentation**
- Full language specification
- Compiler architecture documentation
- Example programs and tutorials
- API reference and developer guides

### 🎯 **Built for Creators**
- Web-based IDE with live preview
- CLI tool for compilation workflow
- Export compiled JavaScript
- Example gallery with common patterns

## Example Output Showcase

### Input (MFlow Source):
```mflow
circle at (250, 250) size 80 color #00FFFF

animate {
  rotate 2
  scale 1.002
}
```

### Output (Compiled JavaScript):
```javascript
// MFlow compiled output - Created by Mehdi
const canvas = document.getElementById("mflow-canvas");
const ctx = canvas.getContext("2d");

let animationState = {
  x: 0, y: 0,
  rotation: 0,
  scale: 1,
  opacity: 1
};

function animate() {
  clear();
  
  // Circle rendering with transforms
  ctx.save();
  applyTransform(250, 250);
  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, Math.PI * 2);
  ctx.fillStyle = "#00FFFF";
  ctx.fill();
  ctx.restore();
  
  // Animation updates
  animationState.rotation += 2;
  animationState.scale *= 1.002;
  
  requestAnimationFrame(animate);
}

animate();
```

## Logo Concepts (Midjourney Prompts)

### Prompt 1: Minimal Geometric
```
minimalist logo design, letter M in geometric form, cyan and purple gradient, creative tech aesthetic, flat design, modern sans serif, clean lines, white background, vector style, professional branding --ar 1:1 --v 6
```

### Prompt 2: Futuristic Neon
```
futuristic logo design, glowing neon letter M symbol, holographic cyan and magenta colors, compiler and code theme, dark background, tech startup vibe, sleek modern design, digital art aesthetic, high tech branding --ar 1:1 --v 6
```

### Prompt 3: Creative Flow
```
abstract logo design for creative coding software, flowing M-shaped form, artistic and technical fusion, teal and purple color palette, generative art inspiration, modern minimalist style, creative technology brand, vector logo --ar 1:1 --v 6
```

## Social Media Copy

### Twitter/X Launch Post
```
🎨 Introducing MFlow - a complete programming language & compiler built for creative coders!

✨ Artist-friendly syntax
⚙️ Full compiler pipeline
🚀 Compiles to JavaScript
📚 Professional architecture

Create generative art, animations, and interactive visuals with code that reads like your creative intent.

Created by @Mehdi
#creativecoding #compiler #generativeart
```

### LinkedIn Post
```
I'm excited to share MFlow - a custom programming language and compiler I've built from scratch for creative coding and generative art.

MFlow features:
• Complete compiler implementation (lexer, parser, AST, semantic analyzer, code generator)
• Creative-first syntax designed for artists and visual programmers
• Professional TypeScript architecture
• Compiles to optimized JavaScript with Canvas API

Unlike frameworks or libraries, MFlow is a real compiled language where shapes, colors, and animations are first-class language constructs. The project demonstrates professional compiler construction techniques while making creative coding more accessible and expressive.

Perfect for digital artists, creative coders, educators, and anyone exploring the intersection of art and computation.

Check it out: [GitHub link]

#programming #compiler #creativecoding #opensource #typescript
```

### Dev.to Article Introduction
```
# Building a Creative Programming Language: The MFlow Story

Today I'm open-sourcing MFlow - a complete programming language and compiler I built specifically for creative coding, generative art, and artistic expression.

## What Makes MFlow Different?

MFlow isn't a framework or library - it's a real compiled language with:
- Full compiler pipeline (lexer → parser → AST → semantic analysis → codegen)
- Syntax designed from scratch for creative expression
- Professional TypeScript implementation
- JavaScript compilation target

In this article, I'll walk through the architecture, design decisions, and implementation details of building a compiler from the ground up.

[Continue reading...]
```

## README Badges

```markdown
![MFlow](https://img.shields.io/badge/MFlow-Compiler-00FFFF?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Creative Coding](https://img.shields.io/badge/Creative-Coding-FF00FF?style=for-the-badge)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)
```

## Key Marketing Points

1. **Real Compiler**: Not a framework or DSL - a complete language implementation
2. **Created by Mehdi**: Personal branding emphasizes original authorship
3. **Creative Focus**: Designed specifically for art and visual programming
4. **Professional Quality**: Production-ready architecture and error handling
5. **Educational Value**: Clear demonstration of compiler construction principles
6. **TypeScript**: Modern, typed implementation for maintainability
7. **Open Source**: MIT licensed for maximum accessibility
8. **Active Development**: Living project with room for community contribution

## Target Audiences

- **Creative Coders**: Artists working with code
- **Digital Artists**: Visual creators exploring programming
- **Educators**: Teaching creative programming or compiler design
- **Students**: Learning language implementation
- **Generative Artists**: Creating algorithmic art
- **Interactive Designers**: Building responsive installations
- **Compiler Enthusiasts**: Studying language design
- **Open Source Contributors**: Looking for compiler projects

---

**MFlow** - *Compiled creativity for digital artists* 🎨⚡
