import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: 3000,  // Vite server port
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // Point to Express server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
