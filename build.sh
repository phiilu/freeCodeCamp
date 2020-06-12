#!/bin/bash
cd responsive-web-design/build-a-survey-form && npm ci && npm run build && cd -
cd front-end-libraries/random-quote-machine && yarn install --frozen-lockfile && yarn build && cd -

rm -rf public

mkdir public
mkdir -p public/responsive-web-design/build-a-survey-form
echo "created directoy: public/responsive-web-design/build-a-survey-form"
# Random Quote Machine
mkdir -p public/front-end-libraries/random-quote-machine
echo "created directoy: public/front-end-libraries/random-quote-machine"

cp -R responsive-web-design/build-a-survey-form/dist/* public/responsive-web-design/build-a-survey-form
echo "copied files to public/responsive-web-design/build-a-survey-form"
# Random Quote Machine
cp -R front-end-libraries/random-quote-machine/out/* public/front-end-libraries/random-quote-machine/
echo "copied files to public/front-end-libraries/random-quote-machine/"

mv public/responsive-web-design/build-a-survey-form/*.css public
mv public/responsive-web-design/build-a-survey-form/*.js public
mv public/responsive-web-design/build-a-survey-form/*.map public

cp src/index.html public
echo "copied root index.html"
