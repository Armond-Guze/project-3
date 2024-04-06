const {AuthenticationError} = require ('@apollo/server') 
const { User } = require('../models')
const {signToken} = require ("../utils/auth.js")

module.exports = {
    Query: {
        me: (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Must be logged in')
            }
            return User.findOne(context.user.id)

        }
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            try {
                const user = await User.create(args)
                const token = signToken (user)
                return {user, token}
            } catch (error) {
                console.log(error)
                throw AuthenticationError
                
            }
            
        }
    }
}