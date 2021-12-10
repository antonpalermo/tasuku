import { Field, InputType } from 'type-graphql'

@InputType()
export class TaskInput {
  @Field(() => String)
  name: string

  @Field(() => Boolean, { defaultValue: false })
  isCompleted: boolean
}
