import { ApolloServer } from "apollo-server-express"
import express, { Application } from "express";
import schema from './schema'
const app: Application = express();

export const createGraphqlServer = async (port: string) => {
  const apolloServer: ApolloServer = new ApolloServer({
    schema
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: '/api' 
  })

   app.listen(port, () => {
    console.log("The server is running in " + port + " port");
    console.log(`http://localhost:${port}${apolloServer.graphqlPath}`)
  });
}