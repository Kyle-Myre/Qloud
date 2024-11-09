import { compression } from 'vite-plugin-compression2'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , compression()],
})
