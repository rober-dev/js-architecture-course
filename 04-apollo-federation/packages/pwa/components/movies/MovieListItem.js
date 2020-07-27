// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';

// Component definition
const MovieListItem = ({ movie }) => {
  return (
    <li>
      <span>
        {movie.title} - {movie.year}
      </span>
    </li>
  );
};

// PropTypes
MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    year: PropTypes.number
  })
};

// Exportation
export default MovieListItem;
