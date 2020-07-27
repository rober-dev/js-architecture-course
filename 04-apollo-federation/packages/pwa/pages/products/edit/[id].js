// Vendor libs
import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';

// Custom components
import ProductForm from '../../../components/products/ProductForm';

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

// Component definition
const ProductDetail = () => {
  // Get route params
  const router = useRouter();
  const { id } = router.query;

  const { error, loading, data } = useQuery(PRODUCT_BY_UPC, {
    variables: { upc: id || '' }
  });

  return (
    <div>
      <h1>Product detail page</h1>

      {loading && <div>Cargando producto ...</div>}
      {error && <div>Ha ocurrido un error cargando el producto.</div>}

      {data && data.productByUPC && <ProductForm product={data.productByUPC} />}
    </div>
  );
};

// Exportation
export default ProductDetail;
