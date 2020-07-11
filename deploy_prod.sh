#!/bin/bash

CONTAINER=uiptel-front
PRODUCTION_IMAGE=${1:-anryzhov/uiptel-front:0.0.0}
DEPLOYMENT=uiptel

echo ">>>>>>>>>>> push image => \"${PRODUCTION_IMAGE}\" to docker hub ..."
docker push ${PRODUCTION_IMAGE}
DIGEST_IMAGE=$(docker inspect --format='{{index .RepoDigests 0}}' ${PRODUCTION_IMAGE})

[ -z "${DIGEST_IMAGE}" ] && echo "!!! exit due digest image not set"

echo ">>>>>>>>>>> deploy image => \"${DIGEST_IMAGE}\" to container => \"${CONTAINER}@${DEPLOYMENT}\" ..."
kubectl set image deployment/${DEPLOYMENT} ${CONTAINER}=${DIGEST_IMAGE}
kubectl set env deployment/${DEPLOYMENT} DIGEST_IMAGE=${DIGEST_IMAGE}
