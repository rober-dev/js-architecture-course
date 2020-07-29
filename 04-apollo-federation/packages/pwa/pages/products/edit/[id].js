// Vendor libs
import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';

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
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    update: (cache, { data: productUpdated }) => {
      let storedAllProducts;

      try {
        storedAllProducts = cache.readQuery({ query: GETALL_PRODUCTS });
        if (storedAllProducts) {
          cache.writeQuery({
            query: GETALL_PRODUCTS,
            data: {
              allProducts: [...storedAllProducts.allProducts, productUpdated]
            }
          });
        }
        // eslint-disable-next-line no-empty
      } catch (err) {}

      // Update cache query of GET_PRODUCT_BY_UPC
      let storedProductByUPC;
      try {
        storedProductByUPC = cache.readQuery({
          query: PRODUCT_BY_UPC,
          variables: { upc: productUpdated.updateProduct.upc }
        });
        if (storedProductByUPC) {
          cache.writeQuery({
            query: PRODUCT_BY_UPC,
            variables: { upc: productUpdated.updateProduct.upc },
            data: {
              productByUPC: { ...productUpdated.updateProduct }
            }
          });
        }
        // eslint-disable-next-line no-empty
      } catch (err) {}
    },
    onError: ({ graphQLErrors }) => {
      graphQLErrors.map(e => console.log(e.message.toString()));
    }
  });

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

      <Link href='/products/list'>
        <a>Volver</a>
      </Link>
    </div>
  );
};

// Exportation
export default withApollo(ProductDetail, { getDataFromTree });
