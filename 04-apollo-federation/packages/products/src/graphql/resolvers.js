// Custom libs
const products = require('../../data/products');

const resolvers = {
  Query: {
    topProducts: (parent, { first }) => {
      return products.slice(0, first);
    }
  }
};

module.exports = resolvers;
