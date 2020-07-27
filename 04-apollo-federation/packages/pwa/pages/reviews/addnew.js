// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';

// Custom components
import ReviewForm from '../../components/reviews/ReviewForm';

// Component definition
const ReviewEdit = () => {
  // Event handlers
  const formSubmittedHandler = e => {
    console.log(e);
  };

  return (
    <div>
      <h1>Review edit page</h1>
      <ReviewForm onFormSubmitted={formSubmittedHandler} />
    </div>
  );
};

// PropTypes
ReviewEdit.propTypes = {
  review: PropTypes.shape({
    upc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number
  })
};

// Exportation
export default ReviewEdit;
