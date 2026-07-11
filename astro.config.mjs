import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public site URL — required for sitemap, RSS and absolute OG image URLs.
// Set SITE in the GitHub Actions build (or here) to your Pages/custom domain.
const site = process.env.SITE || 'https://ai-karma-tracker.example.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !/\/(admin|account|api)(\/|$)/.test(page),
    }),
  ],
});
