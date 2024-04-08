import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const FavoritePage = () => {
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchFavoriteDestinations();
  }, []);

  const fetchFavoriteDestinations = async () => {
    try {
      const response = await axios.get('/api/favorites');
      setFavoriteDestinations(response.data);
    } catch (error) {
      console.error('Error fetching favorite destinations:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">My Favorite Destinations</h1>
      {favoriteDestinations.length > 0 ? (
        <ul>
          {favoriteDestinations.map(destination => (
            <li key={destination.id} className="text-lg mb-2">
              {destination.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">You haven't added any favorite destinations yet.</p>
      )}
      {location.state && location.state.favoriteDestination && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Newly Liked Destination:</h2>
          <p className="text-lg">{location.state.favoriteDestination.name}</p>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
