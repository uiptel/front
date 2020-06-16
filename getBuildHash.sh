#!/bin/sh

exec find node_modules/ -type f | xargs cat | md5sum
