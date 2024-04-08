const mongoose = require('mongoose');

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
    // Add more fields as needed based on project requirements
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
