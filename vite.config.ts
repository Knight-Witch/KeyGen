import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/embed/keygen-app.ts',
      name: 'KeyGenApp',
      formats: ['iife'],
      fileName: () => 'keygen-app.js'
    },
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: false,
    minify: false
  }
});
