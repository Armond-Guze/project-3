import React, { useState, useEffect } from "react";
import axios from "axios";
// import snowImage from './assets/a snow blizzard plun.jpg'; // Import the snow image
// import cloudsImage from './assets/a cloudy sad day.jpg'; // Import the clouds image
// import rainImage from './assets/a stormy rainy day.jpg'; // Import the rain image
// import clearImage from './assets/beautiful day with.jpg';
// import defaultImage from './assets/snowy mountains meet.jpg';

function Main() {
  const [location, setLocation] = useState("Dallas");
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=86a6c14c449d6231e1d0c3495c6b76ca`
        );
        setWeatherData(response.data);
        // Fetching background image based on weather condition
        const weatherCondition = response.data.weather[0].main.toLowerCase();
        setBackgroundImage(getBackgroundImage(weatherCondition));
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [location]);

  const handleSearch = () => {
    setLocation(searchQuery);
  };

  const getBackgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "clear":
        return `url(./assets/beautiful day with.jpg)`;
      case "clouds":
        return `url(./assets/a cloudy sad day.jpg)`;
      case "rain":
        return `url(./assets/a stormy rainy day.jpg)`;
      case "snow":
        return `url(./assets/a snow blizzard plun.jpg)`;
      default:
        return `url(./assets/snowy mountains meet.jpg)`;
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Plan Trip
        </h1>
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-l-md border-none focus:outline-none"
            placeholder="Enter location..."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none"
          >
            Search
          </button>
        </div>
        {weatherData && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {weatherData.name}
            </h2>
            <div className="text-6xl font-bold text-gray-800">
              {Math.round(weatherData.main.temp - 273.15)}°C
            </div>
            <div className="text-xl text-gray-700 mb-4">
              {weatherData.weather[0].description}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-lg text-gray-700">Feels like</p>
                <p className="text-2xl font-bold text-gray-800">
                  {Math.round(weatherData.main.feels_like - 273.15)}°C
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700">Humidity</p>
                <p className="text-2xl font-bold text-gray-800">
                  {weatherData.main.humidity}%
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700">Wind Speed</p>
                <p className="text-2xl font-bold text-gray-800">
                  {weatherData.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
