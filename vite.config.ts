import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/skeptech.githib.io",
  plugins: [react()],
  assetsInclude:"**/*.glb"
})
