FROM node:12

WORKDIR /usr/src/demo

COPY ./server/package.json ./server/package.json
COPY ./server/package-lock.json ./server/package-lock.json
COPY ./server/server.ts ./server/server.ts
COPY ./server/tsconfig.json ./server/tsconfig.json
COPY ./server/controllers ./server/controllers
COPY ./dashboard/ ./dashboard

RUN npm install -g typescript && npm --prefix ./dashboard install ./dashboard && npm run build --prefix ./dashboard && npm --prefix ./server install ./server && npm run build_server --prefix ./server

CMD ["/bin/bash"]