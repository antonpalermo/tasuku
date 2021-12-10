import 'reflect-metadata'

import http from 'http'
import express from 'express'

import { buildSchema } from 'type-graphql'
import { execute, subscribe } from 'graphql'
import { ApolloServer } from 'apollo-server-express'
import { SubscriptionServer } from 'subscriptions-transport-ws'

const main = async () => {
  const app = express()
  const httpServer = http.createServer(app)

  const port = process.env.PORT || 4000

  const schema = await buildSchema({
    resolvers: [`${__dirname}/resolvers/**/*.ts`],
    validate: false,
  })

  const apollo = new ApolloServer({
    schema,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              ws.close()
            },
          }
        },
      },
    ],
  })

  const ws = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: '/',
    }
  )

  await apollo.start()

  apollo.applyMiddleware({ app, path: '/' })

  await new Promise<void>((res) => httpServer.listen({ port }, res))
  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
}

main().catch((e) => console.log(e))
