// Custom libs
const reviews = require('../../data/reviews');

const resolvers = {
  Query: {
    allReviews: () => {
      return reviews;
    },
    review: (parent, { id }) => {
      return reviews.find(r => r.id === id);
    }
  },
  Review: {
    author(review) {
      return { __typename: 'User', id: review.authorID };
    }
  },
  User: {
    reviews(user) {
      return reviews.filter(review => review.authorID === user.id);
    }
  }
};

module.exports = resolvers;
