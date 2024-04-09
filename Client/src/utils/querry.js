import { gql } from '@apollo/client';

export const GET_LIKED_DESTINATIONS = gql`
  query {
    likedDestinations {
      id
      name
    }
  }
`;