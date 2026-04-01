FROM node:22-bookworm-slim

ENV npm_config_engine_strict=false \
    NODE_ENV=production \
    PORT=3300

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl ca-certificates tini \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY docker/manager-runtime/package.json ./package.json
COPY heady-manager.js ./
COPY configs ./configs
COPY docs/api ./docs/api
COPY packages ./packages
COPY services ./services
COPY src ./src
COPY utils ./utils

RUN npm install --omit=dev --no-audit --no-fund --prefer-offline

RUN mkdir -p /app/data /app/logs /app/.cache \
    && chown -R node:node /app

USER node

EXPOSE 3300

HEALTHCHECK --interval=20s --timeout=5s --start-period=30s --retries=5 \
  CMD curl -fsS "http://127.0.0.1:${PORT}/api/health" >/dev/null || exit 1

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "heady-manager.js"]
