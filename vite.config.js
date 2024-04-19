/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const serverBaseUrl = process.env.SERVER_BASE_URL || 'http://localhost:5000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.SERVER_BASE_URL': JSON.stringify(serverBaseUrl),
  },
})
