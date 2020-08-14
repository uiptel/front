#!/bin/sh
set -e

JS="window.__app_env={\"build_date\": \"${BUILD_DATE}\", \"vcs_ref\": \"${VCS_REF}\", \
    \"version\": \"${VERSION}\", \"digest_image\": \"${DIGEST_IMAGE}\", \"hostname\": \"${HOSTNAME}\"}"

echo ${JS} | envsubst > env.js
exec "$@"
