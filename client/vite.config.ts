import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const apiUrl: string | undefined = process.env.VITE_ENV === "prod" ? process.env.API_URL : "http://localhost:3000";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
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
        target: process.env.API_URL || "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
})
