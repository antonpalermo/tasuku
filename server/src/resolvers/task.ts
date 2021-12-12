import {
  Arg,
  Mutation,
  Publisher,
  PubSub,
  Query,
  Resolver,
  Root,
  Subscription,
} from 'type-graphql'
import { Task } from '../schemas/task'
import { TaskInput } from '../schemas/taskInput'
import { TaskResult } from '../schemas/taskResult'

import { Task as TaskEntity } from '../entities/task.entity'

const ON_TASK_CHANGE = 'ON_TASK_CHANGE'
const ON_TASK_CREATE = 'ON_TASK_CREATE'
const ON_TASK_UPDATE = 'ON_TASK_UPDATE'
const ON_TASK_DELETE = 'ON_TASK_DELETE'

@Resolver(Task)
export class TaskResolver {
  @Query(() => [Task])
  async tasks(): Promise<Task[]> {
    return await TaskEntity.createQueryBuilder('user').getMany()
  }

  @Query(() => TaskResult)
  async task(@Arg('id') id: string): Promise<TaskResult> {
    const result = await TaskEntity.createQueryBuilder()
      .select()
      .where('id = :id', { id })
      .getOne()

    if (!result) {
      return {
        errors: [
          {
            message: `Unable to get task with id of ${id}`,
          },
        ],
      }
    }

    return {
      task: result,
    }
  }

  @Mutation(() => TaskResult)
  async create(
    @Arg('details') details: TaskInput,
    @PubSub(ON_TASK_CREATE) publish: Publisher<Task>
  ): Promise<TaskResult> {
    if (!details) {
      return {
        errors: [
          {
            message: `Please provide the required details to create new task.`,
          },
        ],
      }
    } else if (!details.name) {
      return {
        errors: [
          {
            message: `Task name is required`,
          },
        ],
      }
    }

    const {
      raw: [createdTask],
    } = await TaskEntity.createQueryBuilder()
      .insert()
      .into(TaskEntity)
      .values([{ ...details }])
      .returning('*')
      .execute()

    await publish({ ...createdTask })

    return {
      task: createdTask,
    }
  }

  @Mutation(() => Task)
  async update(
    @Arg('id') id: string,
    @Arg('task') task: TaskInput,
    @PubSub(ON_TASK_UPDATE) publish: Publisher<Task>
  ): Promise<Task> {
    const {
      raw: [updatedTask],
    } = await TaskEntity.createQueryBuilder()
      .update()
      .set({ ...task })
      .where('id=:id', { id })
      .returning('*')
      .execute()

    await publish({ ...updatedTask })

    console.log(updatedTask)

    return updatedTask
  }

  @Mutation(() => Task)
  async delete(
    @Arg('id') id: string,
    @PubSub(ON_TASK_DELETE) publish: Publisher<Task>
  ): Promise<Task> {
    const {
      raw: [deletedTask],
    } = await TaskEntity.createQueryBuilder()
      .delete()
      .from(TaskEntity)
      .where('id=:id', { id })
      .returning('*')
      .execute()

    await publish({ ...deletedTask })

    return deletedTask
  }

  @Subscription({
    topics: [ON_TASK_CREATE, ON_TASK_UPDATE, ON_TASK_DELETE],
  })
  on(@Root() payload: Task): Task {
    return payload
  }
}
