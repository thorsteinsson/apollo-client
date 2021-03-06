import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddToPlaylistInput = {
  description?: InputMaybe<Scalars['String']>;
  playlistId: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  videoId: Scalars['String'];
  viewsCount?: InputMaybe<Scalars['Int']>;
};

export type CreatePlaylistInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToPlaylist?: Maybe<PlaylistInfo>;
  createPlaylist?: Maybe<PlaylistInfo>;
  removeFromPlaylist?: Maybe<PlaylistInfo>;
};


export type MutationAddToPlaylistArgs = {
  input: AddToPlaylistInput;
};


export type MutationCreatePlaylistArgs = {
  input?: InputMaybe<CreatePlaylistInput>;
};


export type MutationRemoveFromPlaylistArgs = {
  input: RemoveFromPlaylistInput;
};

export type Playlist = {
  __typename?: 'Playlist';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PlaylistInfo = {
  __typename?: 'PlaylistInfo';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<PlaylistItem>>;
};

export type PlaylistItem = {
  __typename?: 'PlaylistItem';
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  videoId: Scalars['ID'];
  viewsCount?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  playlist?: Maybe<PlaylistInfo>;
  playlists: Array<Playlist>;
};


export type QueryPlaylistArgs = {
  id: Scalars['ID'];
};

export type RemoveFromPlaylistInput = {
  playlistId: Scalars['ID'];
  videoId: Scalars['String'];
};

export type CreatePlaylistMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist?: { __typename?: 'PlaylistInfo', id: string, name?: string | null } | null };

export type GetPlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlaylistsQuery = { __typename?: 'Query', playlists: Array<{ __typename?: 'Playlist', id: string, name?: string | null }> };

export type GetPlaylistQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPlaylistQuery = { __typename?: 'Query', playlist?: { __typename?: 'PlaylistInfo', id: string, name?: string | null, videos?: Array<{ __typename?: 'PlaylistItem', videoId: string, title: string }> | null } | null };


export const CreatePlaylistDocument = gql`
    mutation createPlaylist($name: String!) {
  createPlaylist(input: {name: $name}) {
    id
    name
  }
}
    `;
export type CreatePlaylistMutationFn = Apollo.MutationFunction<CreatePlaylistMutation, CreatePlaylistMutationVariables>;

/**
 * __useCreatePlaylistMutation__
 *
 * To run a mutation, you first call `useCreatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaylistMutation, { data, loading, error }] = useCreatePlaylistMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaylistMutation, CreatePlaylistMutationVariables>(CreatePlaylistDocument, options);
      }
export type CreatePlaylistMutationHookResult = ReturnType<typeof useCreatePlaylistMutation>;
export type CreatePlaylistMutationResult = Apollo.MutationResult<CreatePlaylistMutation>;
export type CreatePlaylistMutationOptions = Apollo.BaseMutationOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const GetPlaylistsDocument = gql`
    query GetPlaylists {
  playlists {
    id
    name
  }
}
    `;

/**
 * __useGetPlaylistsQuery__
 *
 * To run a query within a React component, call `useGetPlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaylistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlaylistsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlaylistsQuery, GetPlaylistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlaylistsQuery, GetPlaylistsQueryVariables>(GetPlaylistsDocument, options);
      }
export function useGetPlaylistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaylistsQuery, GetPlaylistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlaylistsQuery, GetPlaylistsQueryVariables>(GetPlaylistsDocument, options);
        }
export type GetPlaylistsQueryHookResult = ReturnType<typeof useGetPlaylistsQuery>;
export type GetPlaylistsLazyQueryHookResult = ReturnType<typeof useGetPlaylistsLazyQuery>;
export type GetPlaylistsQueryResult = Apollo.QueryResult<GetPlaylistsQuery, GetPlaylistsQueryVariables>;
export const GetPlaylistDocument = gql`
    query GetPlaylist($id: ID!) {
  playlist(id: $id) {
    id
    name
    videos {
      videoId
      title
    }
  }
}
    `;

/**
 * __useGetPlaylistQuery__
 *
 * To run a query within a React component, call `useGetPlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaylistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlaylistQuery(baseOptions: Apollo.QueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
      }
export function useGetPlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
        }
export type GetPlaylistQueryHookResult = ReturnType<typeof useGetPlaylistQuery>;
export type GetPlaylistLazyQueryHookResult = ReturnType<typeof useGetPlaylistLazyQuery>;
export type GetPlaylistQueryResult = Apollo.QueryResult<GetPlaylistQuery, GetPlaylistQueryVariables>;