import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
/*const compileLess = require('compile-less-cli');

/*compileLess('src', {
  out: './assets/less/stylesheet.less',              // Output directory.
  combine: './assets/css/stylesheet.css', // Combine CSS files.
})*/
require("compiless")(__dirname, {
  "./src/assets/less/": "./src/assets/css/"
});