FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067

ENTRYPOINT ["/bin/bash", "-l", "-c"]
WORKDIR /app/


COPY .nixpacks/nixpkgs-f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e.nix .nixpacks/nixpkgs-f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e.nix
RUN nix-env -if .nixpacks/nixpkgs-f69ae4816bc1b501460ad2c0c63ed0cc4a9b876e.nix && nix-collect-garbage -d


ARG CI NIXPACKS_METADATA NIXPACKS_PKGMGR_CMD NODE_ENV NPM_CONFIG_PRODUCTION
ENV CI=$CI NIXPACKS_METADATA=$NIXPACKS_METADATA NIXPACKS_PKGMGR_CMD=$NIXPACKS_PKGMGR_CMD NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=$NPM_CONFIG_PRODUCTION

# setup phase
# noop

# install phase
ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
COPY . /app/.
RUN --mount=type=cache,id=RCTqcI3AY-/root/bun,target=/root/.bun bun install --frozen-lockfile

# build phase
COPY . /app/.
RUN --mount=type=cache,id=RCTqcI3AY-apps/web/next/cache,target=/app/apps/web/.next/cache --mount=type=cache,id=RCTqcI3AY-node_modules/cache,target=/app/node_modules/.cache bun run build:api


RUN printf '\nPATH=/app/node_modules/.bin:$PATH' >> /root/.profile


# start
COPY . /app

CMD ["cd apps/api && bun run start:prod"]

