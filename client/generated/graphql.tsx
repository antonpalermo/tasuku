import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create: TaskResult;
  delete: Task;
  update: Task;
};


export type MutationCreateArgs = {
  details: TaskInput;
};


export type MutationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationUpdateArgs = {
  id: Scalars['String'];
  task: TaskInput;
};

export type Query = {
  __typename?: 'Query';
  task: TaskResult;
  tasks: Array<Task>;
};


export type QueryTaskArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreate: TaskNotification;
};

export type Task = {
  __typename?: 'Task';
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  id: Scalars['String'];
  isComplete: Scalars['Boolean'];
  name: Scalars['String'];
};

export type TaskInput = {
  isComplete?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TaskNotification = {
  __typename?: 'TaskNotification';
  message: Scalars['String'];
  task: Task;
};

export type TaskResult = {
  __typename?: 'TaskResult';
  errors?: Maybe<Array<Error>>;
  task?: Maybe<Task>;
};

export type CreateTaskMutationVariables = Exact<{
  details: TaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', create: { __typename?: 'TaskResult', errors?: Array<{ __typename?: 'Error', message: string }> | null | undefined, task?: { __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any } | null | undefined } };

export type UpdateTaskMutationVariables = Exact<{
  task: TaskInput;
  updateId: Scalars['String'];
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', update: { __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any } };

export type DeleteTaskMutationVariables = Exact<{
  deleteId: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', delete: { __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any } };

export type GetAllTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any }> };

export type GetTaskQueryVariables = Exact<{
  taskId: Scalars['String'];
}>;


export type GetTaskQuery = { __typename?: 'Query', task: { __typename?: 'TaskResult', errors?: Array<{ __typename?: 'Error', message: string }> | null | undefined, task?: { __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any } | null | undefined } };

export type OnCreateTaskSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateTaskSubscription = { __typename?: 'Subscription', onCreate: { __typename?: 'TaskNotification', task: { __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any } } };


export const CreateTaskDocument = gql`
    mutation createTask($details: TaskInput!) {
  create(details: $details) {
    errors {
      message
    }
    task {
      id
      name
      isComplete
      dateCreated
      dateUpdated
    }
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      details: // value for 'details'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation updateTask($task: TaskInput!, $updateId: String!) {
  update(task: $task, id: $updateId) {
    id
    name
    isComplete
    dateCreated
    dateUpdated
  }
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *      updateId: // value for 'updateId'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation deleteTask($deleteId: String!) {
  delete(id: $deleteId) {
    id
    name
    isComplete
    dateCreated
    dateUpdated
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      deleteId: // value for 'deleteId'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const GetAllTasksDocument = gql`
    query getAllTasks {
  tasks {
    id
    name
    isComplete
    dateCreated
    dateUpdated
  }
}
    `;

/**
 * __useGetAllTasksQuery__
 *
 * To run a query within a React component, call `useGetAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTasksQuery, GetAllTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTasksQuery, GetAllTasksQueryVariables>(GetAllTasksDocument, options);
      }
export function useGetAllTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTasksQuery, GetAllTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTasksQuery, GetAllTasksQueryVariables>(GetAllTasksDocument, options);
        }
export type GetAllTasksQueryHookResult = ReturnType<typeof useGetAllTasksQuery>;
export type GetAllTasksLazyQueryHookResult = ReturnType<typeof useGetAllTasksLazyQuery>;
export type GetAllTasksQueryResult = Apollo.QueryResult<GetAllTasksQuery, GetAllTasksQueryVariables>;
export const GetTaskDocument = gql`
    query getTask($taskId: String!) {
  task(id: $taskId) {
    errors {
      message
    }
    task {
      id
      name
      isComplete
      dateCreated
      dateUpdated
    }
  }
}
    `;

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetTaskQuery(baseOptions: Apollo.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
      }
export function useGetTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
        }
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export const OnCreateTaskDocument = gql`
    subscription onCreateTask {
  onCreate {
    task {
      id
      name
      isComplete
      dateCreated
      dateUpdated
    }
  }
}
    `;

/**
 * __useOnCreateTaskSubscription__
 *
 * To run a query within a React component, call `useOnCreateTaskSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateTaskSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateTaskSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateTaskSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateTaskSubscription, OnCreateTaskSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateTaskSubscription, OnCreateTaskSubscriptionVariables>(OnCreateTaskDocument, options);
      }
export type OnCreateTaskSubscriptionHookResult = ReturnType<typeof useOnCreateTaskSubscription>;
export type OnCreateTaskSubscriptionResult = Apollo.SubscriptionResult<OnCreateTaskSubscription>;