// Vendor libs
import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';

// Custom libs
import withApollo from '../../../lib/withApollo';

// Custom components
import ProductDetail from '../../../components/products/ProductDetail';

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
const ProductDetailPage = () => {
  // Get route params
  const router = useRouter();
  const { id } = router.query;

  // Get product
  const { error, loading, data } = useQuery(PRODUCT_BY_UPC, {
    variables: { upc: id || '' }
  });

  return (
    <div>
      <h1>Product detail</h1>

      {loading && <div>Cargando producto ...</div>}
      {error && <div>Ha ocurrido un error cargando el producto.</div>}

      {data && data.productByUPC && (
        <>
          <ProductDetail product={data.productByUPC} />

          <Link href='/products/list'>
            <a>Volver</a>
          </Link>
        </>
      )}
    </div>
  );
};

// Exportation
export default withApollo(ProductDetailPage, { getDataFromTree });
