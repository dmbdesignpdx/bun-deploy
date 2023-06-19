FROM oven/bun:0.6.9
WORKDIR /src
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
EXPOSE 3000
RUN bun task build
