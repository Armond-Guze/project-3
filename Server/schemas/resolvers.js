const { AuthenticationError } = require('@apollo/server');
const { User, Destination } = require('../models'); // Assuming you have a Destination model
const { signToken } = require("../utils/auth.js");

module.exports = {
    Query: {
        me: (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in');
            }
            return User.findById(context.user.id);
        }
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            try {
                const user = await User.create(args);
                const token = signToken(user);
                return { user, token };
            } catch (error) {
                console.log(error);
                throw new AuthenticationError('Failed to create user');
            }
        },
        login: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect email or password');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect email or password');
            }

            const token = signToken(user);

            return { token, user };
        },
        likeDestination: async (parent, { destinationId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in to like a destination');
            }

            const user = await User.findById(context.user.id);
            if (!user) {
                throw new AuthenticationError('User not found');
            }

            const destination = await Destination.findById(destinationId);
            if (!destination) {
                throw new Error('Destination not found');
            }

            // Add logic to like the destination (for example, add it to the user's likedDestinations array)
            // user.likedDestinations.push(destination);
            // await user.save();

            // Return the liked destination (you can return whatever data you want here)
            return destination;
        }
    }
};
