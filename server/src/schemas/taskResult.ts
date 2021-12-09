import { Field, ObjectType } from 'type-graphql'
import { Error } from './error'
import { Task } from './task'

@ObjectType()
export class TaskResult {
  @Field(() => [Error])
  errors: Error[]

  @Field(() => Task)
  task: Task
}
