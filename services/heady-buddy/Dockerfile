# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json ./

RUN --mount=type=cache,id=heady-buddy-npm,target=/root/.npm \
    npm install --omit=dev --no-audit --no-fund

FROM node:22-alpine AS runtime

RUN apk add --no-cache tini

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --chown=node:node . .

ENV NODE_ENV=production \
    PORT=3351

EXPOSE 3351

HEALTHCHECK --interval=20s --timeout=5s --start-period=20s --retries=5 \
  CMD wget -qO- http://127.0.0.1:3351/healthz >/dev/null || exit 1

USER node

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "index.js"]
