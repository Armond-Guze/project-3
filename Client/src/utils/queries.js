import { gql } from '@apollo/client';

export const FAVORITES = gql`
  query favorites {
    me {
      user {
        favoriteDestination {
          name
          location
        }
      }
    }
  }
`;
