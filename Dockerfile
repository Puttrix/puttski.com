# Build step only needed if you use a bundler (uncomment as needed)
# FROM node:20-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# Runtime: serve static files with Nginx
FROM nginx:alpine
# If you used a bundler, copy from /app/dist -> /usr/share/nginx/html
# COPY --from=build /app/dist/ /usr/share/nginx/html
# If plain static files in /src, copy them directly:
COPY src/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80