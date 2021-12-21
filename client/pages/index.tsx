import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  useGetAllTasksQuery,
  useOnCreateTaskSubscription,
} from '../generated/graphql'

import CreateForm from '../components/CreateForm'
import Task from '../components/Task'

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
      <CreateForm />
      <div>
        {tasks?.map((x: any) => (
          <div key={x.id}>
            <Task id={x.id} title={x.name} isComplete={x.isComplete} />
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
