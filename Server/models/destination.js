const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    topDestination: {
        type: Boolean,
        default: false,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Assuming your User model is named 'User'
        }
    ],
    // Add more fields as needed based on project requirements
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
