import React from 'react';
import Head from 'next/head';
import './styles.css';
import '@babel/polyfill';
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <>
      <ApolloProvider client={apollo}>
        <Head>
          <title>Vacation Rentals, Homes, Experiences & Places</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link rel='icon' type='image/x-icon' href='/img/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://us1.prisma.sh/kokoaj-0cd9e2/backend/dev',
    cache: new InMemoryCache().restore(initialState || {})
  });
})(MyApp);