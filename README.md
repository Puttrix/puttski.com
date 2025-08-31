# puttski.com

Personal website for Putte Arvfors — Web Analyst & Digital Troublemaker.  
Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first engineering.

---

## What’s Inside (Astro + Nginx)

- **Astro static site**: Modern, content‑first framework generating static HTML/CSS/JS.
- **Structured data**: JSON‑LD for `WebSite`, `WebPage`, `Person`, credentials, and breadcrumbs.
- **Optimized assets**: WebP logos with PNG fallbacks, lazy‑loading, and tight sizing.
- **Dark mode**: Auto by system preference, plus a user toggle (Auto/Light/Dark).
- **Nginx runtime**: Serves the built site with a custom 404 and long‑cache for assets.
- **CI/CD ready**: GitHub Actions builds and pushes a Docker image to GHCR on `main`.
- **Tunnel/proxy friendly**: Works well behind Cloudflare Tunnel or Nginx Proxy Manager.

---

## Site Content

- Hero, About, Focus, Skills, Certifications, and Contact (see `src/pages/index.astro`).
- Certifications show issuer logos and link to public credentials.
- JSON‑LD added in `src/layouts/Base.astro` (including breadcrumbs).
- Theme system: CSS variables in `src/styles.css` with `@media (prefers-color-scheme)` and manual override via `data-theme`.
- Links:
  - LinkedIn: https://www.linkedin.com/in/putte/
  - GitHub: https://github.com/Puttrix

### Positioning

- Matomo‑first analytics and tagging.
- SEO/AEO/GEO with structured data and answer‑engine optimization.
- Privacy‑first approach with GDPR/consent considerations.

---

## Develop Locally (Astro)

Install deps and run the dev server (default http://localhost:4321):

```bash
npm install
npm run dev
```

Build a production bundle:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

### Theme Toggle (Auto/Light/Dark)

- The toggle lives in the header (🌓/☀️/🌙) and persists selection in `localStorage` (`theme` = `auto` | `light` | `dark`).
- Auto removes any manual override and follows the system preference.
- Implementation:
  - Bootstrap in `src/layouts/Base.astro` to avoid FOUC.
  - Runtime logic in `public/script.js` updates `document.documentElement[data-theme]`.

---

## Run with Docker

Build and run the container locally (maps to port 8888):

```bash
docker build -t puttski.com .
docker run --rm -p 8888:80 puttski.com
```

Open http://localhost:8888

---

## Deployment

Builds publish to GHCR via GitHub Actions (`.github/workflows/docker.yml`), then you can run the image on your server.

### Portainer or Docker Compose

```yaml
version: "3.8"
services:
  web:
    image: ghcr.io/puttrix/puttski.com:latest
    restart: unless-stopped
    ports:
      - "8888:80"

  watchtower:
    image: containrrr/watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --cleanup --interval 30
```

If GHCR is private, configure registry credentials on the host/Portainer.

### Cloudflare Tunnel (recommended)

- Tunnel → Public Hostnames: `puttski.com` → `http://localhost:8888` (or container:80).
- Cache Rules:
  - Bypass: HTML (or `*.html`) and `/robots.txt`, `/sitemap.xml`.
  - Cache Everything: static assets (`*.css, *.js, *.png, *.webp, *.woff2, ...`).
- Purge cache after deploys.

---

## Nginx Behavior (in the container)

- HTML served with no cache (via `index`/explicit files).
- Assets (`css/js/img/webp/woff2/...`) served directly with long cache.
- Unknown paths return the custom 404 page (`src/pages/404.astro`).

---

## Repository Structure

```
astro.config.mjs
package.json
Dockerfile
nginx.conf

public/
  script.js
  robots.txt
  img/
    H3I0509_2-600x569.jpg

src/
  styles.css
  layouts/
    Base.astro
  pages/
    index.astro
    404.astro
  img/
    logos/

.github/
  workflows/
    docker.yml
```

---

## License

MIT License — free to use, modify, and deploy.

---

## Author

Developed by **Putte Arvfors** — connect on LinkedIn: https://www.linkedin.com/in/putte/

Happy self‑hosting!
