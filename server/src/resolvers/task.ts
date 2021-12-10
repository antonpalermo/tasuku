import {
  Arg,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Root,
  Subscription,
} from 'type-graphql'
import { Task } from '../schemas/task'
import { TaskInput } from '../schemas/taskInput'
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

  @Mutation()
  update(@Arg('id') id: string, @Arg('task') task: TaskInput): Task {
    return {
      id: '1',
      name: 'Heavy task',
      isCompleted: true,
    }
  }

  @Mutation()
  delete(@Arg('id') id: string): Task {
    return {
      id: '1',
      name: 'Heavy task',
      isCompleted: true,
    }
  }

  @Mutation()
  done(@Arg('id') id: string, @PubSub() pubSub: PubSubEngine): Task {
    pubSub.publish('ON_TASK_COMPLETE', {
      id: '21',
      name: 'Heavy task',
      isCompleted: true,
    })
    return {
      id: '1',
      name: 'Heavy task',
      isCompleted: true,
    }
  }

  @Subscription({
    topics: 'ON_TASK_COMPLETE',
  })
  onComplete(@Root() payload: Task): Task {
    return payload
  }
}
