# puttski.com

Personal website for Putte Arvfors — Web Analyst & Digital Troubleshooter.  
Matomo‑first analytics, experimentation, tagging, and pragmatic engineering.

---

## Features

- **Static site + Nginx**: Lightweight, containerized static site.
- **Matomo‑first**: Content emphasizes Matomo (Analytics + Tag Manager); GA4/GTM secondary.
- **CI/CD ready**: Built to publish Docker images to GHCR on pushes to `main`.
- **Zero‑touch deploys**: Use Watchtower or Portainer stacks to auto‑pull updates.
- **TLS friendly**: Works well behind Nginx Proxy Manager or Cloudflare Tunnel.

---

## Site Content

- Hero, About, Focus, Skills, Certifications, and Contact sections in `src/index.html`.
- Certifications: two‑column card layout with issuer logos and links to external credentials.
- Logos optimized with `<picture>`: WebP 1x/2x + PNG fallback.
- Uses the image in `src/img/` on the hero.
- Links to LinkedIn and GitHub:
  - LinkedIn: https://www.linkedin.com/in/putte/
  - GitHub: https://github.com/Puttrix

### Positioning

- Matomo‑first analytics and tagging.
- SEO/AEO/GEO focus with structured data and answer‑engine optimization.
- Privacy‑first approach with GDPR/consent considerations.

---

## Assets & Performance

- Images: Small WebP variants for logos (`28px`/`56px`) with PNG fallback.
- Lazy‑loading: Logos use `loading="lazy"` + `decoding="async"` for snappier paint.
- CSS cache busting: `styles.css?v=3` avoids stale 30‑day cache (Nginx sets `expires 30d`).

---

## Routing, 404s, Robots

- SPA routing: Extensionless paths fall back to `index.html`.
- Assets: Requests with file extensions (`.css`, `.js`, `.png`, `.webp`, `.txt`, `.xml`, etc.) are served directly or return 404.
- Custom error page: `src/404.html` (inline styles, no external deps). Nginx sends it via `error_page 404 /404.html` and disables caching.
- Robots: `src/robots.txt` served at `/robots.txt` (explicit Nginx handler). Add a sitemap URL when available.

---

## Quick Start

Run locally with Docker:

```bash
docker build -t puttski.com .
docker run --rm -p 8080:80 puttski.com
```

Open http://localhost:8080

---

## Deployment

You can publish a container image to GitHub Container Registry (GHCR) and run it on your server.

### GitHub Actions (optional)

Add a workflow (e.g. `.github/workflows/docker.yml`) that:

- Triggers on pushes to `main`
- Builds the Docker image (e.g., `ghcr.io/puttrix/puttski.com:latest`)
- Pushes to GHCR with `permissions.packages: write`

### Portainer or Docker Compose

Example `docker-compose.yml`:

```yaml
version: "3.8"
services:
  web:
    image: ghcr.io/puttrix/puttski.com:latest
    restart: unless-stopped
    ports:
      - "8080:80"

  watchtower:
    image: containrrr/watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --cleanup --interval 30
```

If GHCR is private, configure registry credentials in Portainer or the host.

### TLS (optional)

- Nginx Proxy Manager: Point a Proxy Host (e.g. `https://puttski.com`) at the container, enable Let’s Encrypt.
- Cloudflare Tunnel: Forward a public hostname to the server/container port.

---

## Repository Structure

```
src/
  index.html
  404.html
  robots.txt
  styles.css
  script.js
  img/
    logos/
Dockerfile
nginx.conf
README.md
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
