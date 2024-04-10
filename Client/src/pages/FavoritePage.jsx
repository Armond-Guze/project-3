import React, { useState, useEffect } from 'react';

function FavoritePage(props) {
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);

  useEffect(() => {
    // Load favorite destinations from local storage when the component mounts
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteDestinations(savedFavorites);
  }, []);

  const handleDelete = (index) => {
    // Remove the destination at the given index from favorites
    const updatedFavorites = [...favoriteDestinations];
    updatedFavorites.splice(index, 1);
    // Update the state and local storage
    setFavoriteDestinations(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">My Favorite Destinations</h1>
      <div className="flex justify-center">
        {favoriteDestinations.length > 0 ? (
          <ul className="grid grid-cols-3 gap-4">
            {favoriteDestinations.map((destination, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-lg mb-2">
                  {destination.name}
                </div>
                <button onClick={() => handleDelete(index)} className="text-sm text-red-500 focus:outline-none">
                  Delete
                </button>
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

