#!/bin/sh

IMAGE=node:buster-slim
WORKDIR=/usr/src/app

echo "run command => \"${@}\" work dir => \"${WORKDIR}\" container from image => \"${IMAGE}\""
docker run -it --rm -v ${PWD}:${WORKDIR} -w ${WORKDIR} ${IMAGE} ${@}
