#!/bin/bash
cd responsive-web-design/build-a-survey-form && npm run build && cd -

rm -rf public

mkdir public
mkdir -p public/responsive-web-design/build-a-survey-form
echo "created directoy: public/responsive-web-design/build-a-survey-form"

cp -R responsive-web-design/build-a-survey-form/dist/* public/responsive-web-design/build-a-survey-form
echo "copied files to public/responsive-web-design/build-a-survey-form"
