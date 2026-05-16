import vue from '@vitejs/plugin-vue';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next/resolvers';
import path from 'path';
import IconsResolve from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['if-function', 'color-functions', 'global-builtin', 'import'],
      },
    },
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [BootstrapVueNextResolver(), IconsResolve()],
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // test: {
  //   environment: 'jsdom',
  //   globals: true,
  // },
});
