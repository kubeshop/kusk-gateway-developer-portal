FROM docker.io/node:16.14-buster
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV KUSK_GATEWAY_API_URL="http://kusk-gateway-private-envoy-fleet.kusk-system.svc.cluster.local/api"
ENV NODE_ENV=production
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --prefer-offline
RUN [ "npm", "run", "build" ]
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
