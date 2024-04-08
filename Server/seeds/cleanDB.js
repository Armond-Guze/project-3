const mongoose = require('mongoose');
const Destination = require('../models/destination');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travelApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to clean the database
const cleanDatabase = async () => {
  try {
    await Destination.deleteMany(); // Remove all documents from the Destination collection
    console.log('Database cleaned successfully');
    process.exit(); // Exit the process after cleaning the database
  } catch (error) {
    console.error('Error cleaning database:', error);
    process.exit(1); // Exit with error code
  }
};

// Call the cleanDatabase function to clear the database
cleanDatabase();