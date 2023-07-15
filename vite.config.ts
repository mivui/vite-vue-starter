import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Legacy from '@vitejs/plugin-legacy';
import PolyfillCommonjs from 'vite-plugin-polyfill-commonjs';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${resolve(__dirname, 'src')}/`,
      },
    ],
  },
  plugins: [
    Vue(),
    VueJsx(),
    Legacy({
      targets: { chrome: '49', firefox: '18' },
    }),
    PolyfillCommonjs(),
  ],
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
    https: false,
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
