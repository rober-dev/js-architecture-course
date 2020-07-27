// Vendor libs
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Component definition
const ProductForm = ({ product }) => {
  // State members
  const [upc, setUPC] = useState(product.upc);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [weight, setWeight] = useState(product.weight);

  return (
    <form>
      <input type='text' value={upc} onChange={e => setUPC(e.current.target)} />

      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.current.target)}
        />
      </div>

      <div>
        <input
          type='text'
          value={price}
          onChange={e => setPrice(e.current.target)}
        />
      </div>

      <div>
        <input
          type='text'
          value={weight}
          onChange={e => setWeight(e.current.target)}
        />
      </div>
    </form>
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
