typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    likedDestinations: [Destination]!
    # Add any other fields you have for a user
  }

  type Destination {
    id: ID!
    name: String!
    # Add any other fields you have for a destination
  }

  type AuthSuccess {
    token: String!
    user: User!
  }
 
  type Query {
    me: User!
  }

  type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
    ): AuthSuccess!

    login(email: String!, password: String!): AuthSuccess!

    # Mutation for liking a destination
    likeDestination(destinationId: ID!): Destination!
    # You can adjust the return type and input arguments according to your application's needs
  }
`;

module.exports = typeDefs;


