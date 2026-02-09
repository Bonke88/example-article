import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example-article.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never',
});
