import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Task {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Boolean)
  isComplete: boolean

  @Field()
  dateCreated: Date

  @Field()
  dateUpdated: Date
}
