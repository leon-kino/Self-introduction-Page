import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import AboutSkills from '../components/AboutSkills';
import ValuesFuture from '../components/ValuesFuture';

const Home = () => {
  return (
    <div>
      {/* head */}
      <Head>
        <title>自己紹介ページ</title>
      </Head>
      {/* body */}
      <Hero />
      <AboutSkills />
      <ValuesFuture />
    </div>
  );
};
export default Home;
