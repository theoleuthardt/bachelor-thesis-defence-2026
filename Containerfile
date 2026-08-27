# syntax=docker/dockerfile:1

# --- build stage --------------------------------------------------------
FROM docker.io/library/node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- runtime stage -------------------------------------------------------
# nginx-unprivileged already runs as a non-root user and listens on 8080,
# which is what a rootless Podman container needs.
FROM docker.io/nginxinc/nginx-unprivileged:1.27-alpine AS runtime

COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
