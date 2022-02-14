import React from 'react';

const Nav = (props: { title: string}) => {
  return (
    <li className="mx-3 text-light-green font-bold">
      <a href="#">{props.title}</a>
    </li>
  );
};

export default Nav;
