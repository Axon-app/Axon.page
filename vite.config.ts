import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Axon.page/', // GitHub Pages repository name
  server: {
    port: 5173,
    open: true, // Abre automáticamente el navegador
    host: true, // Permite acceso desde la red local
    strictPort: false, // Si el puerto está ocupado, busca otro automáticamente
  },
  preview: {
    port: 4173,
    open: true,
  }
})
