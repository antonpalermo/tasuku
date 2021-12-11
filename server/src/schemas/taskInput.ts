import { Field, InputType } from 'type-graphql'

@InputType()
export class TaskInput {
  @Field(() => String, { nullable: true })
  name: string

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isComplete: boolean
}
