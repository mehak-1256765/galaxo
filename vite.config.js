import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools(), // optimize and transform images
    visualizer({ open: true }), // view bundle size
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild', // super fast JS/CSS minification
    sourcemap: false,
    target: 'esnext',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // inline small assets (like icons)
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

