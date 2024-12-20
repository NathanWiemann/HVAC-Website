import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://berkscountyhvac.com',
  integrations: [
    tailwind(),
    sitemap()
  ]
});