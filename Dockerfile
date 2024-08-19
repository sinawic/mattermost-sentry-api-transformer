FROM node:20.12.0-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY ["index.js", "./"]

CMD [ "node", "index.js" ]