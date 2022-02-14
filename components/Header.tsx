import React from 'react';

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
        <li
          className="mx-3 text-light-green font-bold">
          <a href="#">ABOUT</a>
        </li>
        <li
          className="mx-3 text-light-green font-bold">
          <a href="#">SKILLS</a>
        </li>
        <li
          className="mx-3 text-light-green font-bold">
          <a href="#">VALUES</a>
        </li>
        <li
          className="ml-3 md:mr-6
            text-light-green font-bold">
          <a href="#">FUTURE</a>
        </li>
      </ul>
    </div>
  );
};
