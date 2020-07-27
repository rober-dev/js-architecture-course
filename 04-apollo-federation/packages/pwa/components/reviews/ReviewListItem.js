// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';

// Componet definition
const ReviewListItem = ({ review }) => {
  return (
    <li>
      <span>
        {review.id} - {review.body}
      </span>
    </li>
  );
};

// PropTypes
ReviewListItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string
  })
};

// Exportation
export default ReviewListItem;
