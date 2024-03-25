import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    target: 'es2018',
    outDir: 'dist',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), // Set your entry HTML file here
      },
      output: {
        entryFileNames: '[name]/index.js', // Output file structure: component-name/index.js
        chunkFileNames: '[name]/index.js', // Output file structure for chunks
        assetFileNames: 'assets/[name].[ext]', // Output file structure for assets
      },
    },
  },
});
