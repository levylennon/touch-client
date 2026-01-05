import { join } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: join(__dirname, '../../dist/preload'),
    emptyOutDir: false,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: false,
    rollupOptions: {
      input: {
        'web-index': join(__dirname, 'web-index.ts')
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        manualChunks: {}
      }
    }
  },
  resolve: {
    alias: {
      '@lindo/shared': join(__dirname, '../shared')
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})
