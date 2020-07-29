// Vendor libs
import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';

// Custom libs
import withApollo from '../../lib/withApollo';

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
const ProductsPage = () => {
  // GraphQL query
  // Get product
  const { error, loading, data } = useQuery(GETALL_PRODUCTS);

  return (
    <div>
      <h1>Products page</h1>
      {loading && <div>Cargando producto ...</div>}
      {error && <div>Ha ocurrido un error cargando productos.</div>}

      {data && data.allProducts && (
        <>
          <Link href='/products/addnew/'>
            <a href='/products/addnew/'>Nuevo producto</a>
          </Link>
          <ul>
            {data.allProducts.map(p => {
              return (
                <li key={p.upc}>
                  <p>
                    UPC: <span>{p.upc}</span>
                  </p>
                  <p>
                    NAME: <span>{p.name}</span>
                  </p>
                  <p>
                    PRICE: <span>{p.price}</span>
                  </p>
                  <p>
                    WEIGHT: <span>{p.weight}</span>
                  </p>

                  <div>
                    <Link href='./detail/[id]' as={`./detail/${p.upc}`}>
                      <a>Detalle</a>
                    </Link>
                  </div>
                  <div>
                    <Link href='./edit/[id]' as={`./edit/${p.upc}`}>
                      <a>Editar</a>
                    </Link>
                  </div>
                  <div>
                    <Link href='./delete/[id]' as={`./delete/${p.upc}`}>
                      <a>Borrar</a>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

// Exportation
export default withApollo(ProductsPage, { getDataFromTree });
