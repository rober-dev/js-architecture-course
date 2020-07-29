// Vendor libs
const { ApolloError } = require('apollo-server-express');

// Custom libs
let products = require('../../data/products');

const resolvers = {
  Query: {
    allProducts: () => {
      return products;
    },
    topProducts: (parent, { first }) => {
      return products.slice(0, first);
    },
    productByUPC: (parent, { upc }) => {
      if (!upc) {
        return null;
      }

      return products.find(x => x.upc === upc);
    }
  },
  Mutation: {
    addNewProduct: (parent, { upc, name, price, weight }) => {
      let p = products.find(x => x.upc === upc);
      if (!p) {
        p = {
          upc,
          name,
          price,
          weight
        };
        products.push(p);
        return p;
      }
      throw new ApolloError('El producto ya existe');
    },
    updateProduct: (parent, { upc, name, price, weight }) => {
      const product = products.find(p => p.upc === upc);
      product.name = name;
      product.price = price;
      product.weight = weight;
      return product;
    },
    deleteProduct: (parent, { upc }) => {
      const product = products.find(p => p.upc === upc);
      if (!product) {
        throw new ApolloError(`El producto ${upc} no existe`);
      }

      products = products.filter(p => p.upc !== upc);
      return true;
    }
  }
};

module.exports = resolvers;
