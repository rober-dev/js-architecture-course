// Vendor libs
import React from 'react';
import { gql, useQuery } from '@apollo/client';

// GrapqhQL queries and mutations
const ALL_REVIEWS = gql`
  query {
    allReviews {
      id
      body
    }
  }
`;

// Component definition
const HomePage = () => {
  const { loading, error, data } = useQuery(ALL_REVIEWS);

  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {loading && <div>loading</div>}
        {error && <div>{error}</div>}
        {data &&
          data.allReviews &&
          data.allReviews.map(r => {
            return <li key={r.id}>{r.body}</li>;
          })}
      </ul>
    </div>
  );
};

// Exportation
export default HomePage;
