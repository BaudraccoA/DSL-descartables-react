import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Asegúrate de que esta ruta sea correcta para tu configuración de Netlify
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
