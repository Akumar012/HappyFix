import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   host: '0.0.0.0', // accessible on LAN
  //   allowedHosts: [
  //     'postcephalic-domenic-unferociously.ngrok-free.dev',
  //     'localhost',
  //     '127.0.0.1'
  //   ],
  //   proxy: {
  //     // Proxy /api requests to your backend
  //     '/api': {
  //       target: 'http://localhost:3000', // Your backend URL
  //       changeOrigin: true,
  //       secure: false, // If your backend is http, not https
  //       rewrite: (path) => path.replace(/^\/api/, '') // Remove /api prefix
  //     }
  //   }
  // }
})
