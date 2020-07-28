// Vendor libs
import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';

// Custom components
import ProductForm from '../../../components/products/ProductForm';

// Custom libs
import withApollo from '../../../lib/withApollo';

// GraphQL queries
const PRODUCT_BY_UPC = gql`
  query($upc: ID!) {
    productByUPC(upc: $upc) {
      upc
      name
      price
      weight
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation($upc: ID!, $name: String!, $price: Int, $weight: Int) {
    updateProduct(upc: $upc, name: $name, price: $price, weight: $weight) {
      upc
      name
      price
      weight
    }
  }
`;

// Component definition
const ProductDetail = () => {
  // Get route params
  const router = useRouter();
  const { id } = router.query;

  // Get product
  const { error, loading, data } = useQuery(PRODUCT_BY_UPC, {
    variables: { upc: id || '' }
  });

  // Update product
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const handleProductForm = values => {
    const { upc, name, price, weight } = values;
    updateProduct({
      variables: {
        upc,
        name,
        price,
        weight
      }
    });
  };

  return (
    <div>
      <h1>Product edit page</h1>

      {loading && <div>Cargando producto ...</div>}
      {error && <div>Ha ocurrido un error cargando el producto.</div>}

      {data && data.productByUPC && (
        <ProductForm
          product={data.productByUPC}
          onFormSubmitted={handleProductForm}
        />
      )}
    </div>
  );
};

// Exportation
export default withApollo(ProductDetail, { getDataFromTree });
