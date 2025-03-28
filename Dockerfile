ARG NODE_VERSION=20.16.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV=production

EXPOSE ${PORT}

CMD ["node", ".output/server/index.mjs"]
