const mongoose = require('mongoose');
const Destination = require('../models/destination');
const axios = require('axios');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:5173/travelApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to fetch random cities from the weather API
const fetchRandomCities = async () => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/find?q=random&cnt=10&appid=86a6c14c449d6231e1d0c3495c6b76ca');
    const cities = response.data.list.map(city => ({
      name: city.name,
      location: `${city.coord.lat},${city.coord.lon}`,
      // Add other properties as needed
    }));
    return cities;
  } catch (error) {
    console.error('Error fetching random cities:', error);
    return [];
  }
};

// Function to seed the database with random cities
const seedDatabase = async () => {
  try {
    const randomCities = await fetchRandomCities();
    await Destination.insertMany(randomCities);
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Call the seedDatabase function to seed the database
seedDatabase();
