#!/bin/bash

rm -rfv ./coverage/* 

jscoverage ./api ./coverage/api
jscoverage ./assets ./coverage/assets

cp -vr ./test/ ./coverage/test 

cd ./coverage/

../node_modules/vows/bin/vows --cover-html