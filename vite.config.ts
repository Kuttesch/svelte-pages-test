import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/svelte-pages-test',
  build: {
    outDir: 'docs', // Output to the 'docs' folder
  },
})
