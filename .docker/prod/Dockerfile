# ---- BUILD IMAGE ----
FROM node:alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npx ng build --prod

# ---- PROD IMAGE ----
FROM nginx:stable-alpine
ARG BUILD_DATE
ARG COMMIT_ID
ARG VERSION

# Labels.
LABEL maintainer="ryzhov@uiptel.com"
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.vcs-ref=$COMMIT_ID
LABEL org.label-schema.version=$VERSION


COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/dist .
RUN echo "{\"build_date\": \"${BUILD_DATE}\", \"vcs-ref\": \"${COMMIT_ID}\", \"version\": \"${VERSION}\"}" > app.json
