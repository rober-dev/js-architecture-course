// Vendor libs
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    upc: ID!
    name: String!
    price: Int
    weight: Int
  }

  extend type Query {
    topProducts(first: Int = 2): [Product]
  }
`;

module.exports = typeDefs;
