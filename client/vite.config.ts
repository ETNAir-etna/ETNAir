import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiUrl: string | undefined = process.env.VITE_ENV === "development" ? "http://localhost:3000" : process.env.API_URL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-etnair': `${apiUrl}`,
    },
  },
})
