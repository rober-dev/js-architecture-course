// Vendor libs
const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');

// Get environment variables
require('dotenv').config();
const { PORT } = process.env || 5001;
const { API_NAME } = process.env || 'API-ACCOUNTS';

const express = require('express');

// Custom libs
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/type-defs');

// Apollo server setup
const apolloServer = new ApolloServer({
  port: PORT,
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

// Add express
const app = express();
apolloServer.applyMiddleware({ app });

// Start server
app.listen({ port: PORT }, () => {
  console.log(
    `🚀 ${API_NAME} ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
  );
});
