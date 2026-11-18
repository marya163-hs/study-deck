import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/study-deck',
  plugins: [react(), tailwindcss()],
})

// https://vite.dev/config/

