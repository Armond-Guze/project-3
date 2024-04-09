import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FAVORITES } from '../utils/queries';


function FavoritePage(props) {
  const [formState, setFormState] = useState([]);
  const [loading, { data }] = useQuery(FAVORITES);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const queryResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = queryResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };



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
