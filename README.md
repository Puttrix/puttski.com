# puttski.com

A simple static website designed and self-hosted using GitHub Actions, Docker, and Portainer.  
Ideal for GitOps-style workflows where updates are just a `git push` away.

---

##  Features

- **Containerized static site**: Powered by Nginx for efficiency and reliability.
- **Automated CI/CD**: Builds and publishes a Docker image to GitHub Container Registry (GHCR) on every commit to `main`.
- **Zero‑touch deployment**: Use Watchtower or Portainer with docker‑compose to auto‑pull and redeploy updates.
- **Ready for TLS**: Easily integrates with Nginx Proxy Manager or Cloudflare Tunnel for HTTPS.

---

##  Requirements

- Docker & Docker Compose (on the host server)
- Portainer (optional, but recommended for easy deployment)
- A GitHub repository (`puttski.com`)
- GHCR (GitHub Container Registry) for hosting the Docker image
- Optionally a reverse‑proxy (Nginx Proxy Manager, Traefik, or Cloudflare Tunnel) for TLS termination

---

##  Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/Puttrix/puttski.com.git
cd puttski.com
```

### 2. Configure GitHub Actions

The workflow `.github/workflows/docker.yml` will:

- Trigger on pushes to `main`
- Build the Docker image (`ghcr.io/your-username/puttski.com:latest`)
- Push it to GHCR automatically

Make sure `permissions.packages: write` is set, and that the GHCR package is available (public or authenticated on the server).

### 3. Deploy via Portainer (or Docker Compose)

Create a `docker-compose.yml` (or use the built‑in Portainer “Stack”) with:

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

If your GHCR package is private, configure registry credentials accordingly.

### 4. Enable TLS (optional)

- **Nginx Proxy Manager**: Point a Proxy Host (e.g. `https://puttski.com`) at `http://puttski:80` and enable Let’s Encrypt.
- **Cloudflare Tunnel**: Forward a public hostname to the server port/container port.

---

##  Usage Flow

1. Make changes in your project (e.g., `src/index.html`, `styles.css`, `script.js`).
2. Push commits to `main`.
3. GitHub Actions builds and publishes the Docker image.
4. Watchtower (or a Portainer webhook) detects the update and redeploys the container.
5. Your site is live—updated instantly and securely.

---

##  Contributing

Contributions are welcome! Feel free to:

- Enhance Docker security or add staging workflows
- Add features (e.g., asset hashing, image optimization)
- Improve documentation or deployment options

---

##  License

MIT License — free to use, modify, and deploy.

---

##  Author

Developed by **Putte Arvfors**

Happy self-hosting!
