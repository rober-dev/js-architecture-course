// Vendor libs
const _ = require('lodash');

// Custom libs
const products = require('../../data/products');

const resolvers = {
  Query: {
    topProducts: (parent, { first }, ctx) => {
      return products.slice(0, first);
    },
  },
};

module.exports = resolvers;
