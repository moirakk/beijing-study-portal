const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');

code = code.replace(
  /plugins: \[react\(\), contentStatusPlugin\(\)\],/,
  `plugins: [react(), contentStatusPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'markdown': ['react-markdown', 'remark-gfm', 'remark-math', 'rehype-katex', 'rehype-raw'],
        }
      }
    }
  }`
);

fs.writeFileSync('vite.config.ts', code);
