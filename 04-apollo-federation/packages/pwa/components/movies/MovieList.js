// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';

// Custom components
import MovieListItem from './MovieListItem';

// Component definition
const MovieList = ({ movies, onMovieSelected }) => {
  return (
    <div>
      <h4>Movie list component</h4>
      <ul>
        {movies &&
          movies.length &&
          movies.map(movie => {
            return (
              <div key={movie.id}>
                <MovieListItem movie={movie} />
                <button type='button' onClick={() => onMovieSelected(movie)}>
                  Seleccionar
                </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

// PropTypes
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.number
    })
  ),
  onMovieSelected: PropTypes.func
};

// Exportation
export default MovieList;
