#!/bin/sh
set -eu

EXPOSE_VARS=${EXPOSE_VARS:-HOSTNAME}
JS="window.__app_env={"

for VAR in ${EXPOSE_VARS}
do
    JS="${JS}\"${VAR}\": \"\${${VAR}}\", "
done
JS="${JS%??}}"

echo ${JS} | envsubst > env.js
exec "$@"
