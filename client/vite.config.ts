import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();


// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: 'dist',
    // assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api-etnair': {
        target: 'http://etnair-api:3000' ,
        changeOrigin: true,
      },
    },
  },
})
