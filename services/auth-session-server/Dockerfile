FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache tini wget

COPY package.json ./
RUN npm install --omit=dev --no-audit --no-fund --prefer-offline

COPY src ./src

ENV NODE_ENV=production \
    PORT=4309

EXPOSE 4309

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "start"]
