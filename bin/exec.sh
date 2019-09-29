#!/bin/bash

. .env

DOCKER_PARAMS=""
COMMAND=sh
if [ ${APP_ENV} == "dev" ]; then 
    USER=`whoami`
	DOCKER_PARAMS="-u ${USER}"
    COMMAND=bash
fi
docker exec -it ${DOCKER_PARAMS} ${APP_NAME} ${COMMAND}
