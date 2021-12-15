import { gql, useQuery, useSubscription } from '@apollo/client'
import { useEffect, useState } from 'react'
import {
  useGetAllTasksQuery,
  useOnCreateTaskSubscription,
} from '../generated/graphql'

const Home = () => {
  const [tasks, setTasks] = useState<any[]>()

  useOnCreateTaskSubscription({
    onSubscriptionData: ({ subscriptionData: { data } }) =>
      setTasks((old: any) => [...old, data?.onCreate.task]),
  })

  const { loading } = useGetAllTasksQuery({
    onCompleted: (data) => setTasks(data?.tasks),
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
