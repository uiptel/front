#!/bin/bash

. .env
. .funcs

REGISTRY=anryzhov
APP_VERSION=$(app_version)
APP_NAME=$(app_name)
DOCKER_FILE=.docker/prod/Dockerfile
PRODUCTION_IMAGE_NAME=${REGISTRY}/${APP_NAME}:${APP_VERSION:-latest}
BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') 
COMMIT_ID=$(git log --format="%H" -n 1)

echo "build production image => ${PRODUCTION_IMAGE_NAME}"
docker build -t ${PRODUCTION_IMAGE_NAME} -f ${DOCKER_FILE} \
    --build-arg BUILD_DATE=${BUILD_DATE} \
    --build-arg COMMIT_ID=${COMMIT_ID} \
    --build-arg VERSION=${APP_VERSION} \
    \.

[ $? != 0 ] && echo "build production image fail, exit." &&  exit 1

echo ${PRODUCTION_IMAGE_NAME}
