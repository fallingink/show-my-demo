import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 7000,
    proxy: {
      '/api': {
        target: 'http://localhost:8888/.netlify/functions/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  //开发时注释掉
  // define: {
  //   '/api': "https://api.showmydemo.org/.netlify/functions"
  // },
})
