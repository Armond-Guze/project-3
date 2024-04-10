import React, { useState, useEffect } from 'react';

function FavoritePage(props) {
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);

  useEffect(() => {
    // Load favorite destinations from local storage when the component mounts
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteDestinations(savedFavorites);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">My Favorite Destinations</h1>
      <div className="flex justify-center">
        {favoriteDestinations.length > 0 ? (
          <ul className="flex flex-wrap justify-center">
            {favoriteDestinations.map((destination, index) => (
              <li key={index} className="text-lg mb-2 mx-2">
                {destination.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg">You haven't added any favorite destinations yet.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;
