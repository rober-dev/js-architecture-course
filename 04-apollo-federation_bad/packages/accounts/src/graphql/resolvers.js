// Vendor libs
const _ = require('lodash');

// Custom libs
const users = require('../../data/users');

const resolvers = {
  Query: {
    me: (parent, args, ctx) => {
      return users[1];
    },
  },
  User: {
    __resolveReference(object) {
      return users.find((user) => user.id === object.id);
    },
  },
};

module.exports = resolvers;
