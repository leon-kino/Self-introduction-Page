import React from 'react';
import Nav from './Nav';
import Img from './image';

const Header = () => {
  return (
    <div className="w-full h-full md:flex md:justify-between">
      <div className="w-max h-max m-auto md:ml-0">
        <Img src="/logo.png" w={167} h={75} />
      </div>
      <ul className="h-full flex justify-center mb-5 md:my-auto">
        <Nav title={'ABOUT'} />
        <Nav title={'SKILLS'} />
        <Nav title={'VALUES'} />
        <Nav title={'FUTURE'} />
      </ul>
    </div>
  );
};

export default Header;
