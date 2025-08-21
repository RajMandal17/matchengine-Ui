import { defineConfig } from 'vite'
import { createVue2Plugin } from '@vitejs/plugin-vue2'
import { resolve } from 'path'

export default defineConfig({
  plugins: [createVue2Plugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://gitbitex.com:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  build: {
    outDir: 'build/web',
    assetsDir: 'assets'
  }
})