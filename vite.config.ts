import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import Preview from 'vite-plugin-vue-component-preview';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(), Preview(), vue2()]
});
