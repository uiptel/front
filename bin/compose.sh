#!/bin/bash

. .env

if [ -z "$1" ]; then
	echo "required param for docker-compose missed allow => {build|up|...}"
	exit 1
fi

COMPOSE_PARAMS=""
if [ ${APP_ENV} == "prod" ]; then 
	COMPOSE_PARAMS=" -f docker-compose.yml"
fi

echo "environment => ${APP_ENV}, compose params => ${COMPOSE_PARAMS}"
docker-compose ${COMPOSE_PARAMS} $1 $2 $3
 