import { useRouter } from 'next/router'
import { useGetTaskQuery } from '../generated/graphql'

const DetailsPage = () => {
  const { query } = useRouter()

  const { loading, data } = useGetTaskQuery({
    variables: { taskId: `${query.id}` },
  })

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Details</h1>
      <h1>Name: {data?.task.task?.name}</h1>
    </div>
  )
}

export default DetailsPage
