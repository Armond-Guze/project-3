import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Destination = ({ onCityClick }) => {
  const [randomDestinations, setRandomDestinations] = useState([]);

  // Function to fetch random destinations from the weather API
  const fetchRandomDestinations = async () => {
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities');
      const destinations = response.data.data.map(cityData => ({
        name: cityData.city,
      }));
      // Shuffle the destinations array
      const shuffledDestinations = destinations.sort(() => Math.random() - 0.5);
      setRandomDestinations(shuffledDestinations);
    } catch (error) {
      console.error('Error fetching random destinations from weather API:', error);
    }
  };

  // Call the fetchRandomDestinations function when the component mounts
  useEffect(() => {
    fetchRandomDestinations();
  }, []);

  return (
    <div className="container mt-8 text-center mb-4">
      <h2 className="text-3xl font-semibold mb-4 bg-gray-200 rounded-lg shadow-lg p-4">Featured Destinations</h2>
      <div className="grid grid-cols-3 gap-4">
        {randomDestinations.slice(0, 6).map((destination, index) => (
          <div key={index} onClick={() => onCityClick(destination.name)}>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 cursor-pointer transition duration-500 transform hover:bg-blue-200 hover:text-black">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
