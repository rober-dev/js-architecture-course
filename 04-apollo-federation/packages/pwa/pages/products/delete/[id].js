// Vendor libs
import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/react-hooks';
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

const DELETE_PRODUCT = gql`
  mutation($upc: ID!) {
    deleteProduct(upc: $upc)
  }
`;

// GraphQL queries
const GETALL_PRODUCTS = gql`
  query {
    allProducts {
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

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [
      {
        query: GETALL_PRODUCTS
      },
      {
        query: PRODUCT_BY_UPC,
        variables: { upc: id }
      }
    ],
    awaitRefetchQueries: false,
    onCompleted: () => {
      router.push('/products/list');
    }
  });

  const handleDeleteButton = (e, upc) => {
    e.preventDefault();
    deleteProduct({
      variables: {
        upc
      }
    });
  };

  return (
    <div>
      <h1>Delete product</h1>

      {loading && <div>Cargando producto ...</div>}
      {error && <div>Ha ocurrido un error cargando el producto.</div>}

      {data && data.productByUPC && (
        <>
          <ProductDetail product={data.productByUPC} />
          <button
            type='submit'
            onClick={e => handleDeleteButton(e, data.productByUPC.upc)}
          >
            Borrar
          </button>
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
