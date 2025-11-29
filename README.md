# 🎨⚡ MFlow — A Creative Programming Language  
### **Created by Mehdi**

> **A modern compiler built for artists, designers, and creative coders.**  
> Creativity is now a first-class language feature.

---

## ✨ What is MFlow?

**MFlow** is a custom programming language and full compiler ecosystem built from scratch using TypeScript.  
It compiles directly into **optimized JavaScript** and is designed specifically for:

- 🌀 Creative coding  
- 🔮 Generative art  
- 🎞️ Animations  
- 🖼️ Interactive visuals  

This is **not** a library.  
This is a **real programming language** with a full compiler pipeline engineered by **Mehdi**.

---

## 🎯 Why I Built MFlow

Most programming languages were created for general-purpose tasks.  
I wanted something different — a language where **art**, **visuals**, and **motion** are built into the core.

MFlow focuses on:

- 🖍️ Expressive creative syntax  
- 🧩 Simple and readable structure  
- ⚡ Fast compilation  
- 🖥️ Smooth animations  
- 🧠 Easy logic + powerful visuals  

---

## 🚀 Quick Start

### 📦 Requirements  
- Node.js + npm installed

### ▶️ Installation  
```
git clone <YOUR_REPO_URL>
cd mflow
npm install
npm run dev
```

The Web IDE opens automatically at:

👉 **http://localhost:8080**

---

## 🧠 How the Compiler Works

MFlow uses a **real professional compiler architecture**:

### 1. 🔤 Lexer  
Turns characters → tokens  
```
"circle at (250, 250)" → [CIRCLE, AT, NUMBER, ...]
```

### 2. 🌳 Parser  
Builds an AST using recursive descent.

### 3. 🧩 Semantic Analysis  
Validates:
- variable usage  
- scope  
- types  
- function calls  

### 4. ⚙️ Code Generator  
AST → JavaScript using Canvas API.

### 5. 🎬 Runtime  
Handles:
- animation loops  
- transform state  
- rendering  

---

## 📝 MFlow Language Syntax

### 📍 Variables  
```
let x = 100
let color = #00FFFF
```

### 🔷 Shapes  
```
circle at (250, 250) size 50 color #00FFFF
rect at (100, 100) width 80 height 60 color #FF00FF
```

### 🧱 Functions  
```
fn drawStar(x, y) {
  circle at (x, y) size 20 color #FFFF00
}
```

### 🔁 Loops  
```
repeat 10 {
  circle at (x, 250) size 20
  let x = x + 50
}
```

### 🎞️ Animation  
```
animate {
  move 2 right
  rotate 1
  scale 1.01
}
```

---

## 📂 Project Structure  
```
mflow/
  src/
    compiler/
      lexer/
      parser/
      ast/
      semantic/
      codegen/
    pages/
    components/
  examples/
  docs/
    LANGUAGE_SPEC.md
    COMPILER_ARCHITECTURE.md
  README.md
```

---

## 🛠️ Technologies  
- ⚡ TypeScript (compiler)  
- ⚛️ React (Web IDE)  
- 🚀 Vite (build system)  
- 🎨 Tailwind CSS  
- 🧩 shadcn/ui  
- 🖥️ Canvas API (runtime)

---

## 🎨 Example Programs

### 🔹 Basic Shapes  
```
circle at (200, 200) size 40 color #00FFFF
rect at (100, 100) width 80 height 50 color #FF00FF
```

### 🔹 Simple Animation  
```
animate {
  move 3 right
  rotate 2
}
```

### 🔹 Glow Function  
```
fn glow(x, y) {
  circle at (x, y) size 20 color #FFD700
}
glow(150, 150)
```

### 🔹 Generative Pattern  
```
repeat 20 {
  circle at (rand(400), rand(400)) size rand(50)
}
```

### 🔹 Wave Motion  
```
animate {
  move 1 right
  move sin(time) down
}
```

---

## 🧩 Using the Compiler in Code  
```ts
import { MFlowCompiler } from './src/compiler'

const compiler = new MFlowCompiler()
const result = compiler.compile(source)

if (result.success) {
  console.log(result.output)
} else {
  console.error(result.errors)
}
```

---

## 🌍 Deployment  

MFlow is a Vite app — deploy anywhere:

- ▲ Vercel  
- 🔁 Netlify  
- 🌐 GitHub Pages  
- 📦 Any static host (`npm run build`)

---

## 📘 Documentation  
Found in `/docs`:

- **LANGUAGE_SPEC.md** – syntax reference  
- **COMPILER_ARCHITECTURE.md** – compiler internals  
- **MARKETING.md** – branding + descriptions  
- **COMPILER_README.md** – developer docs  

---

## 🧑‍💻 Development Commands  
```
npm install
npm run dev
npm run build
npm run preview
npm run type-check
```

---

## 🤝 Contributing  
This is a personal project showcasing compiler engineering and creativity tools.  
Suggestions and pull requests are welcome!

---

## 🪪 License  
MIT License — see LICENSE.

---

## 👨‍🎨 About the Creator  
I’m **Mehdi** — a developer passionate about creative coding and compiler design.  
MFlow is my vision of making programming **more visual, expressive, and artistic**.

---

# 🌈 MFlow  
### **Where creativity meets computation.**  
**Made with ❤️ by Mehdi**
