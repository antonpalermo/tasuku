import { ObjectType, Field } from 'type-graphql'
import { Task } from './task'

@ObjectType()
export class TaskNotification {
  @Field(() => Task)
  task: Task

  @Field(() => String)
  message: String
}
