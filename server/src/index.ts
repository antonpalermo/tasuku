import 'reflect-metadata'

import express from 'express'

import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

const main = async () => {
  const app = express()
  const port = process.env.PORT || 4000

  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [`${__dirname}/resolvers/**/*.ts`],
    }),
  })

  await apollo.start()

  apollo.applyMiddleware({ app, path: '/' })

  app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  )
}

main().catch((e) => console.log(e))
