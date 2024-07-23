import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // port: 5173, // 前端开发服务器的端口
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 代理到后端服务器
        changeOrigin: true,
        // rewrite: (path:string) => path.replace(/^\/api/, '') // 可选：如果后端不需要 /api 前缀，可以重写路径
      }
    }
  }
})

