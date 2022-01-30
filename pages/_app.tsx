import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';

/**
 *
 *
 * @param {AppProps} { Component, pageProps }
 * @return {*}
 */
function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
