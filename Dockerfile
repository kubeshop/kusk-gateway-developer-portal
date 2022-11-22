# build environment
ARG TARGET=nginx:1.23.2-alpine

FROM docker.io/node:16.14-buster as build
ARG ASSET_BASE_PATH=/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --prefer-offline
COPY . ./
RUN npm run build -- --base=${ASSET_BASE_PATH}

# production environment
FROM ${TARGET}
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
