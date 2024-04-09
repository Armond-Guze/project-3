import { gql } from '@apollo/client';

// Mutation for user login
export const FAVORITES = gql`
  query favorites {
    me {
      token
      user {
        favoriteDestination{
            name 
            location
        }
      }
    }
  }
`;