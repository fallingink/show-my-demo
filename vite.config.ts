import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'https://api.showmydemo.org/.netlify/functions/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  define: {
    '/api': "https://showmydemo.org/.netlify/functions"
  },
  base:"./"
})
