import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Destination = () => {
  const [randomDestinations, setRandomDestinations] = useState([]);

  // Function to fetch random destinations from the server
  const fetchRandomDestinations = async () => {
    try {
      const response = await axios.get('/api/randomDestinations'); // Fetch data from the /api/randomDestinations endpoint
      setRandomDestinations(response.data);
    } catch (error) {
      console.error('Error fetching random destinations:', error);
    }
  };

  // Call the fetchRandomDestinations function when the component mounts
  useEffect(() => {
    fetchRandomDestinations();
  }, []);

  return (
    <div className="container mt-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">Featured Destinations</h2>
      <div className="flex justify-center">
        {Array.isArray(randomDestinations) && randomDestinations.map((destination, index) => (
          <div key={index} className="mx-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-700 mb-4">{destination.location}</p>
              {/* Add other properties as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;


