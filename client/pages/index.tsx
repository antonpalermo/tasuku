import { gql, useQuery, useSubscription } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  useGetAllTasksQuery,
  useOnCreateTaskSubscription,
} from '../generated/graphql'

import TaskForm from '../components/TaskForm'

const Home = () => {
  const router = useRouter()
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
      <TaskForm />
      <div>
        {tasks?.map((x: any) => (
          <div key={x.id}>
            <h2>{x.name}</h2>
            <button onClick={() => router.push(`/details?id=${x.id}`)}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
