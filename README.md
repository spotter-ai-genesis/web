# SPOTTER-AI web site

Static site built with [Astro](https://astro.build), published on GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

- **Edit content** (publications, team, software): Markdown files in `src/content/`.
  No local install needed; see [CONTRIBUTING.md](CONTRIBUTING.md).
- **Edit pages**: `src/pages/*.astro` (home = `index.astro`). Styles: `src/styles/global.css`.

## One-time GitHub setup

1. Push this folder as the root of a repository (e.g. `spotter-ai-genesis/web`).
2. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
3. The site appears at `https://spotter-ai-genesis.github.io/<repo>/`.
   `astro.config.mjs` assumes the repo is called `web`; for another name, change `BASE`.
   For a custom domain: add `public/CNAME` containing the domain, set `SITE` to
   `https://<domain>` and `BASE` to `/`, and add the DNS record GitHub shows under Settings → Pages.

## Local preview (optional)

Requires Node ≥ 22.

```bash
npm install
npm run dev        # http://localhost:4321/web/  (live reload)
npm run build      # what CI runs; fails on invalid content
```
