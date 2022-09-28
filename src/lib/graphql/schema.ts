import { join } from 'path'

import { readdirSync, readFileSync } from 'fs'
import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './resolvers'

const typeDefFiles = readdirSync(join(__dirname, './typedefs'))

let typeDefs = ''

for(const file of typeDefFiles) {
  let typeDef = readFileSync(
    join(
      __dirname, 
      './typedefs', 
      file
    ), 
    {
      encoding: 'utf8'
    })

  typeDefs = typeDefs + typeDef
}

const schema = makeExecutableSchema({
  typeDefs, 
  resolvers
})

export default schema