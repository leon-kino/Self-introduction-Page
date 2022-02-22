import React from 'react';
import Header from './Header';
import Footer from './Footer';


/**
 *
 *
 * @export
 * @param {*} { children }
 * @return {*}
 */
export default function Layout({children}: {children: any}) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};
