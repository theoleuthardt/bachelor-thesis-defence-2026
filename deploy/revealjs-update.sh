#!/usr/bin/env sh
# Pulls the latest presentation image from GHCR and (re)starts the
# container only if it actually changed. Run periodically by
# revealjs-update.timer on the LXC.
set -eu
cd "$(dirname "$0")"

podman-compose pull
podman-compose up -d --remove-orphans
podman image prune -f
