const typeDefs = `
 type User {
    _id: ID
    username: String
    email: String
    favoriteDestination: [Destination]
 }

  type Destination {
    _id: ID
    name: String
    location: String
    topDestination: Boolean
  }
  
  type Auth{
    token: ID
    user: User
  }

  type Query {
    topTrendingDestinations: [Destination]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToFavorites(id: ID): User
    removeFromFavorites(id: ID): User
  }
`;

module.exports = typeDefs;
