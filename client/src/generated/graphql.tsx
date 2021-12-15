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

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name: string, isComplete: boolean, dateCreated: any, dateUpdated: any }> };


export const QueryDocument = gql`
    query Query {
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
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;