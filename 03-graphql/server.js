// Vendor libs
const { ApolloServer } = require('apollo-server-express');
const _ = require('lodash');
const express = require('express');

// Custom libs
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/type-defs');
const movies = require('./data');

const app = express();

// Apollo server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    movies,
  },
});

// Apply express middleware
server.applyMiddleware({ app });

// Start server
app.listen({ port: 4444 }, () => {
  console.log('Server ready at http://localhost:4444');
});
