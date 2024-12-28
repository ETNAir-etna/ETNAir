FROM node:18-alpine

WORKDIR /app

COPY package*.json .
RUN npm ci

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["serve", "-s", "dist"]