import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Error {
    field: String
    message: String
  }

  type Task {
    id: ID
    name: String
    isComplete: Boolean
  }

  type TaskResponse {
    errors: [Error]
    task: Task
  }

  input TaskDetails {
    id: ID
    name: String
    isComplete: Boolean
  }

  type Mutation {
    createTask(task: TaskDetails!): TaskResponse
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },

  Mutation: {
    createTask: () => {
      return {
        errors: null,
        task: {
          id: 1,
          name: 'Create a sample todo-app',
          isCompleted: false,
        },
      }
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server started on ${url}`))
