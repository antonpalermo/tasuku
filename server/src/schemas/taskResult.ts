import { Field, ObjectType } from 'type-graphql'
import { Error } from './error'
import { Task } from './task'

@ObjectType()
export class TaskResult {
  @Field(() => [Error], { nullable: true })
  errors?: Error[]

  @Field(() => Task, { nullable: true })
  task?: Task
}
