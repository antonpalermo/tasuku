import { gql, useQuery, useSubscription } from '@apollo/client'

const FETCH_TASKS = gql`
  query Query {
    tasks {
      name
      id
      isComplete
      dateCreated
      dateUpdated
    }
  }
`

const ON_TASK_CREATED_SUB = gql`
  subscription Subscription {
    on {
      id
      name
      isComplete
      dateCreated
      dateUpdated
    }
  }
`

const Home = () => {
  const { loading, data: task, error } = useQuery(FETCH_TASKS)
  const { loading: taskLoading, data } = useSubscription(ON_TASK_CREATED_SUB)
  if (loading) {
    return <h1>Loading page...</h1>
  }

  if (error) {
    return <h1>Error page!</h1>
  }

  console.log(data)

  return (
    <div>
      {task.tasks.map((x: any) => (
        <div key={x.id}>
          <h1>{x.name}</h1>
        </div>
      ))}

      <h1>New Task: {!taskLoading && data?.on.name}</h1>
    </div>
  )
}

export default Home
