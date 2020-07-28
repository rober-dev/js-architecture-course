// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';

// Component definition
const ProductForm = ({ product, onFormSubmitted }) => {
  const productSchema = yup.object().shape({
    upc: yup.string().required(),
    name: yup.string().min(4).max(50),
    weight: yup.number().integer(),
    price: yup.number().positive().required()
  });

  const handleSubmit = values => {
    onFormSubmitted(values);
  };

  const handleValidate = () => {};

  return (
    <Formik
      initialValues={{
        upc: product ? product.upc : '',
        name: product ? product.name : '',
        price: product ? product.price : 0,
        weight: product ? product.weight : 0
      }}
      validationSchema={productSchema}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input type='text' {...formik.getFieldProps('upc')} />
            {formik.touched.upc && formik.errors.upc ? (
              <div style={{ color: 'red' }}>{formik.errors.upc}</div>
            ) : null}
          </div>

          <div>
            <input type='text' {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: 'red' }}>{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <input type='number' {...formik.getFieldProps('price')} />
            {formik.touched.price && formik.errors.price ? (
              <div style={{ color: 'red' }}>{formik.errors.price}</div>
            ) : null}
          </div>

          <div>
            <input type='number' {...formik.getFieldProps('weight')} />
            {formik.touched.weight && formik.errors.weight ? (
              <div style={{ color: 'red' }}>{formik.errors.weight}</div>
            ) : null}
          </div>

          <button type='submit'>Aceptar</button>
        </form>
      )}
    </Formik>
  );
};

// PropTypes
ProductForm.propTypes = {
  product: PropTypes.shape({
    upc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number
  }),
  onFormSubmitted: PropTypes.func
};

// Exportation
export default ProductForm;
