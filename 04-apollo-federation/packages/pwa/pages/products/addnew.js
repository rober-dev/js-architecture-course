// Vendor libs
import React from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';

// Custom components
import ProductForm from '../../components/products/ProductForm';

// Custom libs
import withApollo from '../../lib/withApollo';

const ADDNEW_PRODUCT = gql`
  mutation($upc: ID!, $name: String!, $price: Int, $weight: Int) {
    addNewProduct(upc: $upc, name: $name, price: $price, weight: $weight) {
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

// Component definition
const ProductDetail = () => {
  // Update product
  const [
    updateProduct,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(ADDNEW_PRODUCT, {
    update: (cache, { data: productAdded }) => {
      let storedProducts;
      try {
        storedProducts = cache.readQuery({ query: GETALL_PRODUCTS });
        if (storedProducts) {
          cache.writeQuery({
            query: GETALL_PRODUCTS,
            data: {
              allProducts: [...storedProducts.allProducts, productAdded]
            }
          });
        } // eslint-disable-next-line no-empty
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
      <h1>Add new product</h1>
      {mutationLoading && <div>loading ...</div>}
      {mutationError && (
        <pre>
          Error:{' '}
          {mutationError.graphQLErrors.map(({ message }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i}>{message}</span>
          ))}
        </pre>
      )}

      <ProductForm onFormSubmitted={handleProductForm} />
      <Link href='/products/list'>
        <a>Volver</a>
      </Link>
    </div>
  );
};

// Exportation
export default withApollo(ProductDetail, { getDataFromTree });
