#!/bin/sh
set -eu

EXPOSE_VARS=${EXPOSE_VARS:-HOSTNAME}
JSON="{"

for VAR in ${EXPOSE_VARS}
do
    JSON="${JSON}\"${VAR}\": \"\${${VAR}}\", "
done
JSON="${JSON%??}}"

export JSON=$(echo ${JSON} | envsubst | base64 | tr -d '\n')
cat index.html | envsubst > /dev/shm/index.html && mv /dev/shm/index.html index.html
exec "$@"
