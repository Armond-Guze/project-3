const { signToken, AuthenticationError } = require('../utils/auth');
const { User, Destination } = require('../models')

const resolvers = {
    Query: {
        // Resolver function to fetch top trending travel destinations
        topTrendingDestinations: async () => {
            try {
                // Fetch top trending destinations from the database
                const destinations = await Destination.find().limit(10); // Adjust as per your requirement
                return destinations;
            } catch (error) {
                console.error('Error fetching top trending destinations:', error);
                throw new Error('Failed to fetch top trending destinations');
            }
        },
        // Resolver function to fetch user's favorite destinations (assuming you have user authentication)
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('favoriteDestination');
            }
            throw AuthenticationError;
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        // Resolver function to add a destination to user's favorites
        addToFavorites: async (_, args, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { favoriteDestination: args.id } },
                    { new: true }
                );


            }
            throw AuthenticationError;
        },
        // Resolver function to remove a destination from user's favorites
        removeFromFavorites: async (_, { id }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { favoriteDestination: { id } } },
                    { new: true }
                );
    
    
            }
            throw AuthenticationError;
    
        }
    },
};

module.exports = resolvers;
