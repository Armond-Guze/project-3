import React from 'react';
import { useQuery } from '@apollo/client';
import { LIKE_DESTINATION } from '../utils/mutations'; // Import the GraphQL query

function Likes() {
  const { loading, error, data } = useQuery(LIKE_DESTINATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Liked Destinations</h2>
      <ul>
        {data.me.likedDestinations.map(destination => (
          <li key={destination.id}>
            <h3>{destination.name}</h3>
            {/* Display other destination fields if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Likes;
