#!/bin/sh
set -eu

EXPOSE_VARS=${EXPOSE_VARS:-HOSTNAME}
JSON="{"

for VAR in ${EXPOSE_VARS}
do
    JSON="${JSON}\"${VAR}\": \"\${${VAR}}\", "
done
JSON="${JSON%??}}"

export JSON=$(echo ${JSON} | envsubst | base64 -w 0)
cat index.html | envsubst > index.tmp && mv index.tmp index.html
exec "$@"
