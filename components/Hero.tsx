import React from 'react';
import Img from './image';

const Hero = () => {
  return (
    <div
      className="
        bg-bgc-green w-full h-full md:flex md:items-center pb-1"
    >
      <div className="h-full md:w-full md:ml-32">
        <h1
          className="
          text-white text-3xl md:text-5xl font-bold m-auto
           text-center pt-10 md:ml-0 md:text-left"
        >
          自己紹介ページ
        </h1>
        <h2
          className="
            text-sub-title text-2xl md:text-3xl font-bold pt-5 m-auto
             text-center md:ml-0 md:text-left"
        >
          木野 伶音
        </h2>
      </div>
      <div className="w-full">
        <div className="w-max h-max hidden md:block ml-auto m-10">
          <Img src="/hero.png" w={585} h={498} />
        </div>
        <div className="w-max h-max md:hidden mx-auto m-10">
          <Img src="/hero.png" w={260} h={210} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
