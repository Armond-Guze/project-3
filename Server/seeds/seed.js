const mongoose = require('mongoose');
const Destination = require('../models/destination');
const techData = require('./techData.json');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:5173/travelApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed the database
const seedDatabase = async () => {
  try {
    await Destination.insertMany(techData); // Insert data from the techData.json file into the Destination collection
    console.log('Database seeded successfully');
    process.exit(); // Exit the process after seeding the database
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1); // Exit with error code
  }
};

// Call the seedDatabase function to seed the database
seedDatabase();