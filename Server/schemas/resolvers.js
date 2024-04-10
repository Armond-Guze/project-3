const { AuthenticationError } = require('@apollo/server');
const { User, Destination } = require('../models');
const { signToken } = require("../utils/auth.js");

module.exports = {
    Mutation: {
        addUser: async (parent, args, context) => {
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
        addToFavorites: async (parent, { destinationId }, context) => {
            if (!context.user) {
              throw new AuthenticationError('Must be logged in to like a destination');
            }
            
            try {
              // Find the user
              const user = await User.findById(context.user.id);
              if (!user) {
                throw new AuthenticationError('User not found');
              }
              
              // Check if the destinationId already exists in user's favorites
              if (user.favoriteDestination.includes(destinationId)) {
                throw new Error('Destination already liked');
              }
              
              // Add the destinationId to the user's favorite destinations
              user.favoriteDestination.push(destinationId);
              
              // Save the user document
              await user.save();
          
              // Return the updated user
              return user;
            } catch (error) {
              console.error('Error adding to favorites:', error);
              throw new Error('Failed to add destination to favorites');
            }
          }
          
        
    }
};
