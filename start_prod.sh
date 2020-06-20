#!/bin/bash

. .env
. .funcs

APP_VERSION=$(app_version)
LOCAL_PORT=127.0.0.1:8080
LOCAL_PORT_SSL=127.0.0.1:8443
CONTAINER_NAME=${APP_NAME}.prod_v${APP_VERSION}
PRODUCTION_IMAGE=${1:-anryzhov/uiptel:0.0.0}

# -- check for already started container for this application --
CONTAINER_ID=`docker ps -q --filter="name=${CONTAINER_NAME}"`
if [ -n "${CONTAINER_ID}" ]; then
	echo "stop container => `docker container stop ${CONTAINER_ID}`"
fi

echo "start production image => ${PRODUCTION_IMAGE}"
docker run -p ${LOCAL_PORT}:80/tcp -p ${LOCAL_PORT_SSL}:443/tcp --name ${CONTAINER_NAME} ${PRODUCTION_IMAGE}
