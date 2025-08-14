import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with '/api' to your backend server
      '/api': {
        target: 'http://localhost:8088', // Replace with your backend server URL and port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})