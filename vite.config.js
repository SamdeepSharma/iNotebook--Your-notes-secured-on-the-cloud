/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const serverBaseUrl = 'https://i-notebook-backend-beige.vercel.app';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.SERVER_BASE_URL': JSON.stringify(serverBaseUrl),
  },
})
