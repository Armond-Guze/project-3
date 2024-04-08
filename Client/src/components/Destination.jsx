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
      // Shuffle the destinations array and select the first three
      const shuffledDestinations = destinations.sort(() => Math.random() - 0.5);
      const selectedDestinations = shuffledDestinations.slice(0, 3);
      setRandomDestinations(selectedDestinations);
    } catch (error) {
      console.error('Error fetching random destinations from weather API:', error);
    }
  };

  // Call the fetchRandomDestinations function when the component mounts
  useEffect(() => {
    fetchRandomDestinations();
  }, []);

  return (
    <div className="container mt-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">More Destinations</h2>
      <div className="flex justify-center">
        {randomDestinations.map((destination, index) => (
          <div key={index} className="mx-4" onClick={() => onCityClick(destination.name)}>
            <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              {/* Add other properties as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
