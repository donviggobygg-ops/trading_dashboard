import { defineConfig } from 'vite'

export default defineConfig({
  base: '/trading_dashboard/',
  server: {
    port: 3000,
    open: true,
    strictPort: false,
    proxy: {
      '/fdapi': {
        target: 'https://financialdata.net',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/fdapi/, '')
      },
      '/rbapi': {
        target: 'https://api.stockstrader.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/rbapi/, '')
      },
      '/massiveapi': {
        target: 'https://api.massive.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/massiveapi/, '')
      }
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser'
  }
})
