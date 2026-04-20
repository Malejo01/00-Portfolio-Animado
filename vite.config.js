import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined

          if (
            id.includes('/three/')
          ) {
            return 'three-core'
          }

          if (id.includes('@react-three/fiber')) {
            return 'r3f-vendor'
          }

          if (id.includes('@react-three/drei')) {
            return 'drei-vendor'
          }

          if (id.includes('three-stdlib')) {
            return 'three-stdlib-vendor'
          }

          if (id.includes('framer-motion')) {
            return 'motion-vendor'
          }

          if (id.includes('@emailjs/browser')) {
            return 'email-vendor'
          }

          if (id.includes('react-router-dom')) {
            return 'router-vendor'
          }

          return 'vendor'
        },
      },
    },
  },
})
