#!/bin/bash

if [ -z "$1" ]; then
	echo "required param  <docker_image_name> missed"
	exit 1
fi

CONTAINER=uiptel-front
PRODUCTION_IMAGE=anryzhov/uiptel:0.0.0
DEPLOYMENT=uiptel

kubectl set image deployment/${DEPLOYMENT} ${CONTAINER}=${PRODUCTION_IMAGE}
