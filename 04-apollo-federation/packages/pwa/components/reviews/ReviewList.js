// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';

// Customm components
import ReviewListItem from './ReviewListItem';

// Component definition
const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h4>Review list component</h4>
      <ul>
        {reviews &&
          reviews.length &&
          reviews.map(review => {
            return (
              <div key={review.id}>
                <ReviewListItem review={review} />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

// PropTypes
ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.string
    })
  )
};

// Exportation
export default ReviewList;
