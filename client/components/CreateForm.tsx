import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useCreateTaskMutation } from '../generated/graphql'

interface FormValue {
  name: string
}

const CreateForm = () => {
  const [createTask] = useCreateTaskMutation()

  const initialValue: FormValue = {
    name: '',
  }

  const onFormSubmit = async ({ name }: FormValue) => {
    await createTask({ variables: { details: { name } } })
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

export default CreateForm
