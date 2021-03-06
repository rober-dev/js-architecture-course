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
    allProducts: [Product]!
    topProducts(first: Int = 2): [Product]
    productByUPC(upc: ID): Product
  }

  extend type Mutation {
    addNewProduct(upc: ID!, name: String!, price: Int, weight: Int): Product!
    updateProduct(upc: ID!, name: String!, price: Int, weight: Int): Product!
    deleteProduct(upc: ID!): Boolean
  }
`;

module.exports = typeDefs;
