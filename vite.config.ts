/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    Components({
      dts: true,
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~shared': path.resolve(__dirname, '../habbit-frontend/src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
