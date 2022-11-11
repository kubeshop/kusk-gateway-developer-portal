# build environment
ARG TARGET=nginx:1.23.2-alpine

FROM docker.io/node:16.14-buster as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --prefer-offline
COPY . ./
RUN npm run build

# production environment
FROM ${TARGET}
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]