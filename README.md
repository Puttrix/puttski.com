# puttski.com

Personal website for Putte Arvfors — Web Analyst & Digital Troublemaker.  
Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first engineering.

---

## What's Inside (Astro + Nginx)

- **Astro static site**: Modern, content‑first framework generating static HTML/CSS/JS.
- **Multilingual support**: English (`/`) and Swedish (`/sv`) with automatic browser detection.
- **Language picker**: Flag-based dropdown in header with smooth transitions and mobile support.
- **Expanded content pages**: Detailed "About" and "Work" pages with comprehensive professional information.
- **Context-aware navigation**: Smart navigation that uses anchor links on homepage, full URLs on content pages.
- **Matomo Tag Manager**: Integrated analytics tracking with container `uEmi1sg3` from `matomo.surputte.se`.
- **SEO optimized**: XML sitemap with hreflang annotations for multilingual SEO.
- **Structured data**: JSON‑LD for `WebSite`, `WebPage`, `Person`, credentials, and breadcrumbs (localized).
- **Optimized assets**: WebP logos with PNG fallbacks, lazy‑loading, and tight sizing.
- **Dark mode**: Auto by system preference, plus a user toggle (Auto/Light/Dark).
- **Nginx runtime**: Serves the built site with a custom 404 and long‑cache for assets.
- **CI/CD ready**: GitHub Actions builds and pushes a Docker image to GHCR on `main`.
- **Tunnel/proxy friendly**: Works well behind Cloudflare Tunnel or Nginx Proxy Manager.

---

## Site Content

- **Multilingual pages**: English (`src/pages/index.astro`) and Swedish (`src/pages/sv.astro`).
- **Sections**: Hero, About, Focus, Skills, Certifications, and Contact with full translations.
- **Expanded content**: Dedicated `/about` and `/work` pages with detailed professional information and Swedish translations (`/sv/om`, `/sv/arbete`).
- **Header branding**: Logo displays "Puttski - Putte Arvfors" for clear personal identification.
- **Updated skills**: Added AI tools (Claude Code, ChatGPT, OpenAI Codex, GitHub Copilot) and Optimizely products (ODP, CMS).
- **Certifications**: Show issuer logos and link to public credentials with localized text.
- **Analytics integration**: Matomo Tag Manager implementation in `src/layouts/Base.astro` for privacy-first tracking.
- **JSON‑LD**: Added in `src/layouts/Base.astro` with language-aware structured data.
- **Theme system**: CSS variables in `src/styles.css` with `@media (prefers-color-scheme)` and manual override via `data-theme`.
- **Links**:
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

### Language Support

- **Automatic detection**: Browser language detection redirects Swedish users to `/sv` automatically.
- **Manual switching**: Language picker (🇬🇧/🇸🇪) in header with dropdown menu.
- **Persistent choice**: User preferences stored in `localStorage` to prevent unwanted redirects.
- **Mobile friendly**: Language links included in mobile navigation menu.
- **SEO optimized**: Proper `hreflang`, canonical URLs, and localized structured data.

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
CLAUDE.md        # Instructions for Claude Code

public/
  script.js      # Theme toggle, mobile menu, language picker
  robots.txt
  sitemap.xml    # XML sitemap with multilingual hreflang annotations
  img/
    H3I0509_2-600x569.jpg

src/
  utils/
    i18n.js      # Translation utilities (not actively used)
  styles.css     # Global styles with language picker CSS
  layouts/
    Base.astro   # Main layout with multilingual support and context-aware navigation
  pages/
    index.astro  # English homepage
    about.astro  # Detailed about page (English)
    work.astro   # Detailed work/focus areas page (English)
    sv.astro     # Swedish homepage  
    sv/
      om.astro   # About page (Swedish)
      arbete.astro # Work page (Swedish)
    404.astro    # Custom 404 page
  img/
    logos/       # WebP logos with PNG fallbacks

.github/
  workflows/
    docker.yml   # CI/CD pipeline
```

---

## License

MIT License — free to use, modify, and deploy.

---

## Author

Developed by **Putte Arvfors** — connect on LinkedIn: https://www.linkedin.com/in/putte/

Happy self‑hosting!
