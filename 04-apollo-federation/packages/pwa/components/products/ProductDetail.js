// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';

// Component definition
const ProductForm = ({ product }) => {
  return (
    <>
      <div>
        <span>UPC</span>
        <label>{product.upc}</label>
      </div>

      <div>
        <span>NAME</span>
        <label>{product.name}</label>
      </div>

      <div>
        <span>PRICE</span>
        <label>{product.price}</label>
      </div>

      <div>
        <span>WEIGHT</span>
        <label>{product.weight}</label>
      </div>
    </>
  );
};

// PropTypes
ProductForm.propTypes = {
  product: PropTypes.shape({
    upc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number
  })
};

// Exportation
export default ProductForm;
