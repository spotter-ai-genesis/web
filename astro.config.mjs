// Site address. For a GitHub project page (https://<org>.github.io/<repo>/) keep BASE as the
// repo name; with a custom domain (public/CNAME), set SITE to it and BASE to "/".
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = process.env.SITE ?? 'https://spotter-ai-genesis.github.io';
const BASE = process.env.BASE ?? '/web';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
