FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma/

COPY . .

RUN npx prisma migrate dev --name init


CMD ["node", "index.js"]
