# STEP 1 : Build the Typescript app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY prisma ./prisma/
COPY migrations ./migrations/
COPY .env ./.env

COPY src ./src

RUN npm run build

RUN npm prune --production

# STEP 2: FINAL image to execute the server
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/.env ./
COPY --from=builder /app/node_modules ./node_modules

RUN npm install -g prisma

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]
