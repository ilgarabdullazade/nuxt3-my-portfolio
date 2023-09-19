ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

RUN npm install -g pnpm

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm run build

ENV NODE_ENV=production

EXPOSE $PORT

CMD [ "node", ".output/server/index.mjs" ]