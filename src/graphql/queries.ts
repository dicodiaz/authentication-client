import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const USER_DETAIL_FRAGMENT = gql`
  fragment UserDetail on User {
    id
    email
    password
    name
    bio
    phone
    photo
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($createUserInput: CreateUserInput!) {
    user: createUser(createUserInput: $createUserInput) {
      ...UserDetail
    }
  }

  ${USER_DETAIL_FRAGMENT}
`;
