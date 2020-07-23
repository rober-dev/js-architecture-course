// Vendor libs
const _ = require('lodash');

// Custom libs
const reviews = require('../../data/reviews');

const resolvers = {
  Query: {
    allReviews: (parent, args, ctx) => {
      return reviews;
    },
  },
  Review: {
    author(review) {
      return { __typename: 'User', id: review.authorID };
    },
  },
  User: {
    reviews(user) {
      return reviews.filter((review) => review.authorID === user.id);
    },
  },
};

module.exports = resolvers;
