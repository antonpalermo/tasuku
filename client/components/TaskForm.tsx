import React from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { useCreateTaskMutation } from '../generated/graphql'

interface FormValue {
  name: string
}

const TaskForm = () => {
  const [createTask] = useCreateTaskMutation()

  const initialValue: FormValue = {
    name: '',
  }

  const onFormSubmit = async (
    { name }: FormValue,
    { setSubmitting }: FormikHelpers<FormValue>
  ) => {
    setSubmitting(true)
    await createTask({ variables: { details: { name } } })
    setSubmitting(false)
  }

  return (
    <>
      <Formik initialValues={initialValue} onSubmit={onFormSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name={'name'} id={'name'} placeholder={'Name'} />
            <button type={'submit'} disabled={isSubmitting}>
              Create
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default TaskForm
