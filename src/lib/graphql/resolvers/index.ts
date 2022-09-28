import earthquakeQueries from "./earthquakes.resolver"

const resolvers = {
  Query: {
    ...earthquakeQueries
  }
}

export default resolvers