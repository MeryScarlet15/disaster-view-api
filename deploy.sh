rm -rf build

npm run build

cp -R src/lib/graphql/typedefs build/src/lib/graphql

git add *

git commit -m "deploy"

git push

git push heroku main

echo "The deploy has finished"


