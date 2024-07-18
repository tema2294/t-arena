FROM registry.dev77.xyz:4433/proxy_cache/node:20.10 as build_node

WORKDIR /build/

COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .npmrc .npmrc
COPY .prettierrc .prettierrc
COPY babel.config.js babel.config.js
COPY env.d.ts env.d.ts
COPY jest.config.js jest.config.js
COPY jest.setup.js jest.setup.js
COPY mui.d.ts mui.d.ts
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY webpack.config.ts webpack.config.ts
COPY src src
COPY public public

RUN npm i --registry=http://nexus.dev77.xyz/repository/npm-proxy/ \
  && npm run build \
  && rm -Rf node_modules


FROM registry.dev77.xyz:4433/proxy_cache/nginx:1.25.4 as release

COPY --from=build_node /build/build/ /var/arena/static/
COPY ./ci/robots.txt /var/arena/robots.txt
COPY ./ci/envs.json.example /var/arena/envs.json.example
COPY ./ci/nginx.conf.template /etc/nginx/nginx.conf.template
COPY ./ci/run_nginx.sh /usr/local/sbin/run_nginx

EXPOSE 80

