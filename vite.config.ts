import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
// import ViteStyleImport from 'vite-plugin-style-import';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    Vue(),
    VueJsx(),
    // ViteStyleImport({
    //   libs: [
    //     {
    //       libraryName: 'ant-design-vue',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `ant-design-vue/es/${name}/style/index`;
    //       },
    //     },
    //   ],
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    https: false,
    open: false,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
