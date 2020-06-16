#!/bin/bash

. .env

DOCKER_PARAMS=""
APP_VERSION=`node -pe "require('./package.json').version"`
CONTAINER=${APP_NAME}.${APP_ENV}_v${APP_VERSION:-local}

USER=`id -u -n`
COMMAND=bash

echo "exec command => \"${COMMAND}\" in container => ${CONTAINER}"
docker exec -it -u ${USER} ${CONTAINER} ${COMMAND}
