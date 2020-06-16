#!/bin/bash

. .env

export USER_NAME=`id -u -n` USER_UID=`id -u` APP_VERSION=`cat package.json | jq -r '.version'`

if [ -z "$1" ]; then
	echo "required param for docker-compose missed allow => {build|up|...}"
	exit 1
fi

echo "application => ${APP_NAME}, version => ${APP_VERSION}"
docker-compose ${@}
