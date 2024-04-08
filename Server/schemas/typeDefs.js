const typeDefs = `#graphql
type User {
    id: ID!
    username: String!,
    email: String!
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
        username: String!,
        email: String!,
        password: String!
    ): AuthSuccess!

    login(email: String!, password: String!): AuthSuccess!
    
  }
`;

module.exports = typeDefs;


