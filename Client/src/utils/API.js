const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to get random destinations
router.get('/', async (req, res) => {
  try {
    // Make a request to the OpenWeatherMap API to get random cities
    const response = await axios.get('https://api.openweathermap.org/data/2.5/find?q=random&cnt=10&appid=86a6c14c449d6231e1d0c3495c6b76ca');
    // Extract relevant data from the API response
    const randomCities = response.data.list.map(city => ({
      name: city.name,
      location: `${city.coord.lat},${city.coord.lon}`,
      // Add other properties as needed
    }));
    // Send the random cities data as the response
    res.json(randomCities);
  } catch (error) {
    console.error('Error fetching random destinations:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
