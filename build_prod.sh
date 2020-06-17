#!/bin/bash

. .env
. .funcs

REGISTRY=anryzhov
PUSH_TO_REGISTRY=no
APP_VERSION=$(app_version)
DOCKER_FILE=.docker/prod/Dockerfile
BUILD_HASH=ff00ffee
PRODUCTION_IMAGE_NAME=${REGISTRY}/${APP_NAME}:${BUILD_HASH:-local}

echo "build production image => ${PRODUCTION_IMAGE_NAME}"
docker build -t ${PRODUCTION_IMAGE_NAME} -f ${DOCKER_FILE} .
[ $? != 0 ] && echo "build production image fail, exit." &&  exit 1

if [ ${PUSH_TO_REGISTRY} = "yes" ]; then
    echo "push image => ${PRODUCTION_IMAGE_NAME} to registry"
    docker push ${PRODUCTION_IMAGE_NAME}
    [ $? != 0 ] && echo "push production image fail, exit." &&  exit 1
fi

echo ${PRODUCTION_IMAGE_NAME}
