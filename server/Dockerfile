FROM node:alpine
WORKDIR /server-dir
COPY ./package*.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js"]