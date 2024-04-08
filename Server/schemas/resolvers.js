const { AuthenticationError } = require('@apollo/server');
const { User } = require('../models');
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
        }
    }
};

