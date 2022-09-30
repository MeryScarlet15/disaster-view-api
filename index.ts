import { createGraphqlServer } from "./src/lib/graphql/graphql";

createGraphqlServer(process.env.PORT || "4000");
