import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Task } from '../schemas/task'
import { TaskResult } from '../schemas/taskResult'

@Resolver(Task)
export class TaskResolver {
  @Query()
  task(): TaskResult {
    return {
      errors: [],
      task: {
        id: '1',
        name: 'Sample task',
        isCompleted: true,
      },
    }
  }

  @Mutation()
  create(): Task {
    return {
      id: '1',
      name: 'Sample task',
      isCompleted: true,
    }
  }
}
