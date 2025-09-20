import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['5173-i0bv5wd5yd94h8iis4yvz.e2b.app', 'localhost', '127.0.0.1', /\.e2b\.app$/],
    hmr: false
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  }
})