#!/bin/sh
cd ../packages
for D in *; do
    cd ${D}
    npm i --package-lock-only
    npm audit fix --force
    yarn upgrade --latest
    yarn install
    cd ../
done

cd ../

tsc;
