import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${resolve(__dirname, 'src')}/`,
      },
    ],
  },
  plugins: [Vue(), VueJsx()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  esbuild: {
    pure: ['console.log'],
    drop: ['debugger'],
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    open: false,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
