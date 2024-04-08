import React, { useState } from 'react';
import Weather from '../components/Weather';

const HomePage = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto text-white text-center z-10 mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Welcome to Trip Junkie
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Trip Junkie is your ultimate destination for discovering top trending travel destinations,
          checking their weather, and planning your next adventure!
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Whether you're dreaming of sunny beaches, snowy mountains, or bustling cities, we've got you covered.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Start exploring now and turn your travel dreams into reality!
        </p>
      </div>
      <Weather setBackgroundImage={setBackgroundImage} />
    </div>
  );
};

export default HomePage;
