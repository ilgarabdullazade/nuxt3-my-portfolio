ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV=production

EXPOSE $PORT

CMD [ "node", ".output/server/index.mjs" ]