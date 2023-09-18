ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production

# SITE_URL = https://example.com
ENV NUXT_PUBLIC_SITE_URL=${SITE_URL}
# API_HOST_NAME = example.com
ENV NUXT_PUBLIC_API_HOST_NAME=${API_HOST_NAME}
# SITE_NAME = Title
ENV NUXT_PUBLIC_SITE_NAME=${SITE_NAME}
# API_BASE = https://api.example.com
ENV NUXT_PUBLIC_API_BASE=${API_BASE}
# ICON_LETTER = A
ENV NUXT_PUBLIC_ICON_LETTER=${ICON_LETTER}
# OWNER_NAME = Alex
ENV NUXT_PUBLIC_OWNER_NAME=${OWNER_NAME}
# OWNER_LAST_NAME = Smith
ENV NUXT_PUBLIC_OWNER_LAST_NAME=${OWNER_LAST_NAME}

EXPOSE $PORT

CMD [ "node", ".output/server/index.mjs" ]