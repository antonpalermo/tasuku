import React from 'react'
import UpdateForm from './UpdateForm'

import { FormikHelpers } from 'formik'
import { useUpdateTaskMutation } from '../generated/graphql'

type TaskProps = {
  id: string
  title: string
  isComplete: boolean
}

type TaskFields = {
  name: string
}

const Task: React.FunctionComponent<TaskProps> = ({
  id,
  title,
  isComplete,
}) => {
  const [change, setChange] = React.useState(false)

  const [updateTask] = useUpdateTaskMutation()

  const onUpdate = async (
    { name }: TaskFields,
    helper: FormikHelpers<TaskFields>
  ) => {
    await updateTask({ variables: { updateId: id, task: { name } } })
    setChange(!change)
  }

  return (
    <>
      {!change ? (
        <h1>{title}</h1>
      ) : (
        <UpdateForm isHidden={!change} currentValue={title} update={onUpdate} />
      )}
      <button hidden={change} onClick={() => setChange(!change)}>
        Edit
      </button>
    </>
  )
}

export default Task
