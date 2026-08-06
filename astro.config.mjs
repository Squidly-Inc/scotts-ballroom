// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // DEPLOY_TARGET=production (set in Cloudflare Pages) -> real domain at root.
  // Default (GitHub Actions) -> github.io preview, unchanged.
  site: process.env.DEPLOY_TARGET === 'production'
    ? 'https://scottsballroom.com'
    : 'https://squidly-inc.github.io',
  base: process.env.DEPLOY_TARGET === 'production' ? '/' : '/scotts-ballroom',
  integrations: [
    sitemap({
      // redirect stubs carry noindex; keep them out of the sitemap
      filter: (page) => !['/menu/', '/private-dining/', '/reservations/'].some((p) => page.endsWith(p)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
