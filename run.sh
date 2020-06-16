#!/bin/sh

IMAGE=node:buster-slim
echo "run command => \"${@}\" in new container from image => \"${IMAGE}\""
docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app ${IMAGE} ${@}

