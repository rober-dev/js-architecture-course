// Vendor libs
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Review {
    id: ID!
    body: String
    author: User
  }

  extend type User {
    id: ID! @external
    reviews: [Review]
  }

  extend type Query {
    allReviews: [Review]
  }
`;

module.exports = typeDefs;
