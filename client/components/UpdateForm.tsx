import React from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'

type UpdateFormProps = {
  currentValue: string
  isHidden: boolean
  update(values: any, helpers: FormikHelpers<any>): Promise<any>
}

const UpdateForm: React.FunctionComponent<UpdateFormProps> = ({
  update,
  currentValue,
  isHidden,
}) => {
  const initialValue = {
    name: currentValue,
  }

  return (
    <div hidden={isHidden}>
      <Formik initialValues={initialValue} onSubmit={update}>
        {({ isSubmitting }) => (
          <Form>
            <Field name={'name'} id={'name'} placeholder={'Name'} />
            <button type={'submit'} disabled={isSubmitting}>
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UpdateForm
