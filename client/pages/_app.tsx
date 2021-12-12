import { AppProps } from 'next/app'

import Layout from '../components/Layout'

import { WebSocketLink } from '@apollo/client/link/ws'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:4000`,
      options: {
        reconnect: true,
      },
    })
  : new HttpLink()

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
})

const link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        )
      },
      wsLink,
      httpLink
    )
  : httpLink

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}

export default App
