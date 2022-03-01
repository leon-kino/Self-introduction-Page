import React from 'react';

const Nav = (props: { title: string }) => {
  const src = '#' + props.title;
  return (
    <li className="mx-3 text-light-green font-bold">
      <a href={src}>{props.title}</a>
    </li>
  );
};

export default Nav;
