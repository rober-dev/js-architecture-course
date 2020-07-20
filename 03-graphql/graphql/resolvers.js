// Vendor libs
const _ = require('lodash');

const resolvers = {
  Query: {
    movie: (parent, { id }, ctx) => {
      const { movies } = ctx;
      const result = _.find(movies, { id });
      return result;
    },
    movies: (parent, args, ctx) => {
      const { movies } = ctx;
      return movies;
    },
  },
  Mutation: {
    addNewMovie: (parent, { id, title, director, description }, ctx) => {
      const { movies } = ctx;
      const newMovie = { id, title, director, description };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (parent, { id, title, director, description }, ctx) => {
      const { movies } = ctx;
      const movie = _.find(movies, { id });
      movie.title = title;
      movie.director = director;
      movie.description = description;
      return movie;
    },
    deleteMovie: (parent, { id }, ctx) => {
      const { movies } = ctx;
      _.remove(movies, { id });
      return true;
    },
  },
};

module.exports = resolvers;
