import { gql, useQuery, useSubscription } from '@apollo/client'
import { useEffect, useState } from 'react'

const Home = () => {
  const FETCH_POST = gql`
    query Tasks {
      tasks {
        id
        name
        isComplete
        dateCreated
        dateUpdated
      }
    }
  `

  const ON_CREATE = gql`
    subscription Subscription {
      onCreate {
        task {
          id
          name
          isComplete
          dateCreated
          dateUpdated
        }
        message
      }
    }
  `

  const [tasks, setTasks] = useState<any[]>()
  const { loading } = useQuery(FETCH_POST, {
    onCompleted: (data) => setTasks(data?.tasks),
  })

  useSubscription(ON_CREATE, {
    onSubscriptionData: ({ subscriptionData: { data } }) =>
      setTasks((old: any) => [...old, data?.onCreate.task]),
  })

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Home Components</h1>
      <div>
        {tasks?.map((x: any) => (
          <div key={x.id}>
            <h2>{x.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
