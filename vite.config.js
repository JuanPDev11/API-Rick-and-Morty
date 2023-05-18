import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://JuanPDev11.github.io/API-Rick-and-Morty/",
  plugins: [react()],
})
