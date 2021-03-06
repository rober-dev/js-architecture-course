// Vendor libs
import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';

// Custom components
import ReviewList from '../../components/reviews/ReviewList';

// Custom libs
import withApollo from '../../lib/withApollo';

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

      {loading && <div>loading</div>}
      {error && <div>{error}</div>}
      {data && data.allReviews && data.allReviews.length && (
        <ReviewList reviews={data.allReviews} />
      )}
    </div>
  );
};

// Exportation
export default withApollo(HomePage, { getDataFromTree });
