// Vendor libs
const { ApolloServer } = require('apollo-server-express');
const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');

// Load environment variables
require('dotenv').config();

const { PORT, API_NAME } = process.env || 5000;
const { API_ACCOUNTS, API_PRODUCTS, API_REVIEWS } = process.env;

// Apollo Gateway setup
const apolloGateway = new ApolloGateway({
  port: PORT,
  serviceList: [
    { name: 'accounts', url: API_ACCOUNTS },
    { name: 'products', url: API_PRODUCTS },
    { name: 'reviews', url: API_REVIEWS }
    // { name: 'inventory', url: API_INVENTORY },
  ]
});

(async () => {
  // Load APIs
  const { schema, executor } = await apolloGateway.load();

  // Setup Apollo Server
  const apolloServer = new ApolloServer({ schema, executor });
  const app = express();
  apolloServer.applyMiddleware({ app });

  // Start server
  app.listen({ port: PORT }, () => {
    console.log(
      `🚀 ${API_NAME} ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
  });
})();
