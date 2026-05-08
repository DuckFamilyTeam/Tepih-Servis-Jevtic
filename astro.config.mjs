import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tepihservisjevtic.rs',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: ['images.unsplash.com'],
  },
  compressHTML: true,
});
