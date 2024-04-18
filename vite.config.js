import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const serverBaseUrl = process.env.SERVER_BASE_URL || 'http://3.111.30.209:5001/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.SERVER_BASE_URL': JSON.stringify(serverBaseUrl),
  },
})
