import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  output: 'static',
  site: 'https://deep41.github.io',
  base: '/',
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
}); 