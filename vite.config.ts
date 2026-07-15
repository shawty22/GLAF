import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the build works from any GitHub Pages path
// (user site or project site) without knowing the repo name in advance.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
