import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { imagetools } from 'vite-imagetools';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),

    // Compress all static images during build (JPG, PNG, SVG, etc.)
    viteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: true },
        ],
      },
      webp: {
        quality: 75,
      },
      avif: {
        quality: 50,
      },
    }),

    // Optimize imported images with query strings (e.g., ?w=800&format=webp)
    imagetools(),

    // Visualize final bundle size
    visualizer({ open: true }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    minify: 'esbuild',
    sourcemap: false,
    target: 'esnext',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline assets < 4KB
    chunkSizeWarningLimit: 500,
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
