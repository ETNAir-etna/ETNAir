# STEP 1 : Build the Typescript app
FROM node:18-alpine AS builder

RUN mkdir api && cd api

COPY api/package* .
RUN npm ci

COPY api/migrations/ ./migrations/
COPY api/prisma/ ./prisma/
COPY shared/ ./shared/
COPY api/tsconfig.json .
COPY api/src/ ./src/
COPY .env ./.env

RUN npx prisma generate

RUN npm run build 

RUN npm prune --production

# # STEP 2: FINAL image to execute the server
FROM node:18-alpine

WORKDIR /app

COPY --from=builder ../package*.json ./
COPY --from=builder ../node_modules ./node_modules
COPY --from=builder ../migrations ./migrations
COPY --from=builder ../prisma ./prisma/
COPY --from=builder ../.env ./

COPY --from=builder ../dist ./dist

RUN mkdir -p dist/api && \
    mv dist/prisma dist/api && \
    mv dist/src dist/api

RUN npm install -g prisma

CMD ["sh", "-c", "npx prisma migrate deploy  && node dist/api/prisma/seed.js && node dist/api/src/server.js"]
