rm -rf build

tsc -p .

cp -R src/lib/graphql/typedefs build/src/lib/graphql

echo "The build has finished"


