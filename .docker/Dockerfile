# ---- BUILD IMAGE ----
FROM node:alpine AS builder

WORKDIR /app
COPY . .
RUN npm cache verify && npm ci && npx ng build --prod

# ---- PROD IMAGE ----
FROM nginx:stable-alpine
ARG BUILD_DATE
ARG VCS_REF
ARG VERSION
ARG WORKDIR

# Labels.
LABEL maintainer="ryzhov@uiptel.com"
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.vcs-ref=$COMMIT_ID
LABEL org.label-schema.version=$VERSION

ENV EXPOSE_VARS="BUILD_DATE VCS_REF VERSION DIGEST_IMAGE HOSTNAME API_URL NODE_ENV"
ENV BUILD_DATE=${BUILD_DATE} VCS_REF=${VCS_REF} VERSION=${VERSION} WORKDIR=${WORKDIR}

COPY .docker/entrypoint.sh /usr/local/bin/
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR ${WORKDIR}
RUN rm -rf *
COPY --from=builder /app/dist .

ENTRYPOINT ["entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
