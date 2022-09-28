import { createGraphqlServer } from "./src/lib/graphql/GraphQL";

createGraphqlServer(process.env.PORT || "4000");
