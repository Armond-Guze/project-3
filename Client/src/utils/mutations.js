import { gql } from '@apollo/client';

// Mutation for user login
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
      username
    }
  }
}
`;

// Mutation for creating a new user
export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        email
        id
      }
    }
  }
`;

// Mutation for liking a destination

export const LIKE_DESTINATION = gql`
  mutation likeDestination($id: ID!) {
    addToFavorites(destinationId: $id) {
      id
      username
      email
      favoriteDestination {
        id
        name
        location
      }
    }
  }
`;