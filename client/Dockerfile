FROM node:alpine AS builder
WORKDIR /client-dir
COPY ./package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /client-dir/dist /usr/share/nginx/html
COPY --from=builder /client-dir/default.conf /etc/nginx.conf/default.conf