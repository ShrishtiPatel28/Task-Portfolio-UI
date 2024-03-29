import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Task-Portfolio-UI/',
  plugins: [reactRefresh()],
})
