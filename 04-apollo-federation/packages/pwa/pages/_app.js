// Vendor libs
import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Material-UI theme
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme';

// Custom libs
import { useApollo } from '../lib/apolloClient';

// BaseApp definition
const BaseApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Page title base</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
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
