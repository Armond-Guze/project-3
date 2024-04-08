import React from 'react';
import Weather from '../components/Weather'

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Trip Junkie</h1>
        <p className="text-lg mb-4">
          Trip Junkie is your ultimate destination for discovering top trending travel destinations,
          checking their weather, and planning your next adventure!
        </p>
        <p className="text-lg mb-4">
          Whether you're dreaming of sunny beaches, snowy mountains, or bustling cities, we've got you covered.
        </p>
        <p className="text-lg mb-4">
          Start exploring now and turn your travel dreams into reality!
        </p>

      </div>

      <Weather></Weather>
    </>
  );
};

export default HomePage; 
