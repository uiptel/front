# ---- BUILD IMAGE ----
FROM node:alpine AS builder
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# ---- PROD IMAGE ----
FROM nginx:stable-alpine
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html