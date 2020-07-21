// Vendor libs
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    name: String!
    username: String!
    birthDate: String
  }

  extend type Query {
    me: User
  }
`;

module.exports = typeDefs;
