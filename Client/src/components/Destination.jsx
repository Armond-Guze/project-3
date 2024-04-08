import React, { useState, useEffect } from 'react';
import techData from '/Users/there/bootcamp/videogame-api/Server/seeds/techData.json'; // Import the techData JSON file

const Destination = () => {
  const [randomDestinations, setRandomDestinations] = useState([]);

  // Function to select random destinations from the techData array
  const selectRandomDestinations = () => {
    const shuffledData = [...techData].sort(() => 0.5 - Math.random()); // Shuffle the array
    const selectedDestinations = shuffledData.slice(0, 3); // Select the first three elements
    setRandomDestinations(selectedDestinations);
  };

  // Call the selectRandomDestinations function when the component mounts
  useEffect(() => {
    selectRandomDestinations();
  }, []);

  return (
    <div className="container mt-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">Featured Destinations</h2>
      <div className="flex justify-center">
        {randomDestinations.map((destination, index) => (
          <div key={index} className="mx-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-700 mb-4">{destination.location}</p>
              {destination.topDestination && (
                <span className="bg-green-500 text-white font-semibold py-1 px-2 rounded-md">Top Destination</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;

