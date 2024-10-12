import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   cors:{
  //     origin:false
  //   },
  //   proxy: {
  //     '/api': {
  //       target: 'https://equran.id/apidev/v2/surah',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
