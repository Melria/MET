import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import express from 'express';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true, // Enable CORS
    proxy: {
      '/api':'http://localhost:3000',
    }
  },
})
