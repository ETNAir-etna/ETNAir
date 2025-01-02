import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, `${process.cwd()}/configs/env/`, "VITE_");

  const apiUrl = env.VITE_API_URL ?? "http://localhost:3000";

  return {
    base: "/",
    plugins: [react()],
    build: {
      outDir: 'dist',
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
          target: apiUrl,
          changeOrigin: true,
        },
      },
    },
  };
});
