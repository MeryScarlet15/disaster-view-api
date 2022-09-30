rm -rf build

npm run build

cp -R src/lib/graphql/typedefs build/src/lib/graphql

git push heroku main

rm -rf build

