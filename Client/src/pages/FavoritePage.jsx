import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoritePage = () => {
  // State to store favorite destinations
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);

  // Function to fetch favorite destinations from the server
  const fetchFavoriteDestinations = async () => {
    try {
      // Make a GET request to fetch favorite destinations
      const response = await axios.get('/api/favorites'); // Replace with your API endpoint
      // Set the favorite destinations state with the data from the response
      setFavoriteDestinations(response.data);
    } catch (error) {
      console.error('Error fetching favorite destinations:', error);
    }
  };

  // Fetch favorite destinations when the component mounts
  useEffect(() => {
    fetchFavoriteDestinations();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">My Favorite Destinations</h1>
      {favoriteDestinations.length > 0 ? (
        <ul>
          {favoriteDestinations.map(destination => (
            <li key={destination._id} className="text-lg mb-2">
              {destination.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">You haven't added any favorite destinations yet.</p>
      )}
    </div>
  );
};

export default FavoritePage;
