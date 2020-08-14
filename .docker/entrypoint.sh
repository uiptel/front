#!/bin/sh
set -e

JSON="{\
    \"build_date\": \"${BUILD_DATE}\",\
    \"vcs_ref\": \"${VCS_REF}\",\
    \"version\": \"${VERSION}\",\
    \"digest_image\": \"${DIGEST_IMAGE}\",\
    \"hostname\": \"${HOSTNAME}\"\
}"

echo ${JSON} | envsubst > env.json
exec "$@"
