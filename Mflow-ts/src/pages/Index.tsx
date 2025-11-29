import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MFlowCompiler } from '@/compiler';
import { Play, Code, Download, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const EXAMPLE_CODE = `// Draw a colorful scene
circle at (200, 200) size 50 color #00FFFF
rect at (400, 200) width 80 height 80 color #FF00FF

// Animate the shapes
animate {
  move 2 right
  rotate 1
}`;

const EXAMPLES = {
  basic: `// Simple shapes
circle at (250, 200) size 60 color #00FFFF
rect at (250, 350) width 100 height 100 color #FF00FF`,
  
  animation: `// Moving circle
circle at (50, 250) size 40 color #00FFFF

animate {
  move 3 right
  rotate 2
}`,
  
  pattern: `// Generative pattern
repeat 8 {
  circle at (250, 250) size 80 color #00FFFF
  animate {
    rotate 5
  }
}`,
  
  colors: `// Color transitions
let x = 100
repeat 5 {
  circle at (x, 250) size 30 color #00FFFF
  let x = x + 80
}`,
  
  complex: `// Complex scene
scene main {
  circle at (150, 150) size 40 color #00FFFF
  rect at (350, 150) width 60 height 60 color #FF00FF
  triangle (250, 300) (200, 400) (300, 400) color #FFFF00
  
  animate {
    move 1 right
    rotate 0.5
  }
}`
};

const Index = () => {
  const [code, setCode] = useState(EXAMPLE_CODE);
  const [output, setOutput] = useState('');
  const [activeTab, setActiveTab] = useState('editor');

  const handleCompile = () => {
    const compiler = new MFlowCompiler();
    const result = compiler.compile(code);

    if (result.success && result.output) {
      setOutput(result.output);
      setActiveTab('output');
      toast.success('Compiled successfully!');
    } else {
      toast.error('Compilation failed', {
        description: result.errors?.join('\n'),
      });
    }
  };

  const handleRun = () => {
    handleCompile();
    // In a real implementation, this would execute the code
    setTimeout(() => {
      setActiveTab('preview');
    }, 100);
  };

  const handleDownload = () => {
    if (!output) {
      toast.error('No output to download');
      return;
    }
    
    const blob = new Blob([output], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.js';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded output.js');
  };

  const loadExample = (example: keyof typeof EXAMPLES) => {
    setCode(EXAMPLES[example]);
    toast.success('Example loaded');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold glow-text flex items-center gap-3">
                <Sparkles className="text-primary" />
                MFlow
              </h1>
              <p className="mt-2 text-muted-foreground">
                A creative compiler for artistic coders — by Mehdi
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={handleCompile} variant="secondary">
                <Code className="mr-2 h-4 w-4" />
                Compile
              </Button>
              <Button onClick={handleRun} className="bg-primary hover:bg-primary/90">
                <Play className="mr-2 h-4 w-4" />
                Run
              </Button>
              {output && (
                <Button onClick={handleDownload} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Examples Sidebar */}
          <Card className="lg:col-span-3 p-4 h-fit">
            <h3 className="font-bold mb-4 text-primary">Examples</h3>
            <div className="space-y-2">
              {Object.keys(EXAMPLES).map((example) => (
                <Button
                  key={example}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => loadExample(example as keyof typeof EXAMPLES)}
                >
                  {example.charAt(0).toUpperCase() + example.slice(1)}
                </Button>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold mb-2 text-sm">Quick Reference</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p><code className="text-primary">let x = 10</code> - Variables</p>
                <p><code className="text-primary">circle at (x, y)</code> - Shapes</p>
                <p><code className="text-primary">animate {'{ }'}</code> - Animation</p>
                <p><code className="text-primary">repeat n {'{ }'}</code> - Loops</p>
                <p><code className="text-primary">#RRGGBB</code> - Colors</p>
              </div>
            </div>
          </Card>

          {/* Main Editor */}
          <Card className="lg:col-span-9 p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="output">Output</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="editor" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    MFlow Source Code
                  </label>
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="font-mono text-sm min-h-[500px] code-block"
                    placeholder="Write your MFlow code here..."
                  />
                </div>
              </TabsContent>

              <TabsContent value="output" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Compiled JavaScript
                  </label>
                  <Textarea
                    value={output || '// No output yet. Click "Compile" to generate code.'}
                    readOnly
                    className="font-mono text-sm min-h-[500px] code-block"
                  />
                </div>
              </TabsContent>

              <TabsContent value="preview" className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Canvas Preview
                  </label>
                  <div className="border border-code-border rounded-lg p-4 bg-code-bg">
                    <canvas
                      id="mflow-canvas"
                      width="500"
                      height="500"
                      className="mx-auto bg-background border border-border rounded"
                    />
                  </div>
                  {output && (
                    <script dangerouslySetInnerHTML={{ __html: output }} />
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Footer Info */}
        <Card className="mt-8 p-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-bold text-primary mb-2">Creative Syntax</h3>
              <p className="text-sm text-muted-foreground">
                Expressive language designed for artists and creative coders
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">Real Compiler</h3>
              <p className="text-sm text-muted-foreground">
                Full lexer, parser, AST, semantic analysis & code generation
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">JavaScript Output</h3>
              <p className="text-sm text-muted-foreground">
                Compiles to optimized JavaScript with Canvas API
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
