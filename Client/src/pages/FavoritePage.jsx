import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FAVORITES } from '../utils/queries';
import { useLocation } from 'react-router-dom';

function FavoritePage(props) {
  const location = useLocation(); // Use useLocation hook to access location state
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);
  const { loading, data } = useQuery(FAVORITES);

  useEffect(() => {
    if (!loading && data) {
      setFavoriteDestinations(data.favorites); // Set favorite destinations from query data
    }
  }, [loading, data]);

  const addFavoriteDestination = (favoriteDestination) => {
    // Logic to add favorite destination to state or perform mutation
    console.log('Adding to favorites:', favoriteDestination);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">My Favorite Destinations</h1>
      {favoriteDestinations.length > 0 ? (
        <ul>
          {favoriteDestinations.map(destination => (
            <li key={destination._id} className="text-lg mb-2"> {/* Change id to _id */}
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
          {/* Optionally, you can add a button to add the newly liked destination to favorites */}
          <button onClick={() => addFavoriteDestination(location.state.favoriteDestination)}>
            Add to Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;











// const FavoritePage = () => {
//   const [favoriteDestinations, setFavoriteDestinations] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     // Load liked destinations from localStorage when component mounts
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavoriteDestinations(savedFavorites);
//   }, []);

//   // Function to handle adding a new favorite destination
//   const addFavoriteDestination = (destination) => {
//     // Update state with new destination
//     setFavoriteDestinations([...favoriteDestinations, destination]);
//     // Save updated list to localStorage
//     localStorage.setItem('favorites', JSON.stringify([...favoriteDestinations, destination]));
//   };