# ---- BUILD IMAGE ----
FROM node:alpine AS builder
ARG BUILD_DATE
ARG VCS_REF
ARG VERSION
ARG NODE_ENV
ARG API_URL

ENV BUILD_DATE=${BUILD_DATE} VCS_REF=${VCS_REF} VERSION=${VERSION} NODE_ENV=${NODE_ENV} API_URL=${API_URL}

WORKDIR /app
COPY . .
RUN set -eux; \
    npm cache verify; \
    env NODE_ENV=development npm ci; \
    npx ng build --prod

# ---- PROD IMAGE ----
FROM nginx:stable-alpine
ARG BUILD_DATE
ARG VCS_REF
ARG VERSION
ARG WORKDIR

# Labels.
LABEL maintainer="ryzhov@uiptel.com"
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=${BUILD_DATE}
LABEL org.label-schema.vcs-ref=${VCS_REF}
LABEL org.label-schema.version=${VERSION}

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR ${WORKDIR}
RUN rm -rf *
COPY --from=builder /app/dist .
