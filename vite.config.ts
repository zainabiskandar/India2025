// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/India2025/', // must match your repo name exactly (case-sensitive)
  plugins: [react()],
})
