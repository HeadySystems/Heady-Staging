FROM node:20-slim AS base
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3301/health || exit 1

EXPOSE 3301
VOLUME /app/data

USER node
CMD ["node", "heady-manager.js"]
