// Vendor libs
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import PropTypes from 'prop-types';
import { useApollo } from '../lib/apolloClient';

// BaseApp definition
const BaseApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

BaseApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    initialApolloState: PropTypes.object
  })
};

export default BaseApp;
