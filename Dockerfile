FROM oven/bun:1.4-slim AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .
RUN bun --bun run prepare && bun --bun run build

FROM oven/bun:1.4-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=build --chown=bun:bun /app/build ./build

USER bun
EXPOSE 3000
CMD ["bun", "build/index.js"]
