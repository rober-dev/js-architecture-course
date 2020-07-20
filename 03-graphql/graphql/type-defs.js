const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    director: String!
    description: String
  }

  type Query {
    movie(id: ID!): Movie
    movies: [Movie]
  }

  type Mutation {
    addNewMovie(
      id: ID!
      title: String!
      director: String!
      description: String
    ): Movie
    updateMovie(
      id: ID!
      title: String!
      director: String!
      description: String
    ): Movie
    deleteMovie(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
