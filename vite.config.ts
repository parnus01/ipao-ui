import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    plugins: [react(), dts({include: ['lib']})], 
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
        }
    },
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./lib")
        }
      }
})