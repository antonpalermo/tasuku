import 'reflect-metadata'

import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

const main = async () => {
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [`${__dirname}/resolvers/**/*.ts`],
    }),
  })

  apollo.listen().then(({ url }) => console.log(`server started on ${url}`))
}

main().catch((e) => console.log(e))
