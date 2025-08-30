# Build static site with Astro
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

# Runtime: serve static files with Nginx
FROM nginx:alpine
# Serve Astro build output
COPY --from=build /app/dist/ /usr/share/nginx/html/
# Also copy static images referenced with absolute /img/* paths
COPY src/img/ /usr/share/nginx/html/img/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
