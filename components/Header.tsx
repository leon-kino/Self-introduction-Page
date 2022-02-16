import React from 'react';
import Nav from './nav';
/**
 *
 *
 * @export
 * @return {*}
 */
export default function Header() {
  return (
    <div className="w-full h-full md:flex md:justify-between">
      <img src="/logo.png" alt="Fwywd Logo"
        className="w-40 m-auto md:ml-0" />
      <ul className="h-full flex justify-center mb-5 md:my-auto">
        <Nav title={'ABOUT'} />
        <Nav title={'SKILLS'} />
        <Nav title={'VALUES'} />
        <Nav title={'FUTURE'} />
      </ul>
    </div>
  );
};
