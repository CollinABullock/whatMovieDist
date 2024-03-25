import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
        main: './index.html', // Set your entry HTML file here
      },
      output: {
        entryFileNames: '[name]/index.js', // Output file structure: component-name/index.js
        chunkFileNames: '[name]/index.js', // Output file structure for chunks
        assetFileNames: '[name].[ext]', // Output file structure for assets
      },
    },
  },
});
