# Stage 1: Build the Nuxt 3 application
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as builder

WORKDIR /app

# Copy dependency files first to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Build the Nuxt application
RUN yarn build

# Stage 2: Create a minimal production image
FROM node:${NODE_VERSION}-slim as production

ARG PORT=3000
ENV NODE_ENV=production
ENV PORT=${PORT}
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the application port
EXPOSE ${PORT}

# Start the Nuxt server
CMD ["node", ".output/server/index.mjs"]
