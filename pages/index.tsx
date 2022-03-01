import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import AboutSkills from '../components/AboutSkills';
import ValuesFuture from '../components/ValuesFuture';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo title="自己紹介ページ" description="木野伶音の自己紹介ページです。" />
      {/* head */}
      <Head>
        <title>自己紹介ページ</title>
        <meta
          name="google-site-verification"
          content="iwK0mLFWcgnUjp0yjhQhzUrodTCi15zpPWfn6S5Utyo"
        />
      </Head>
      {/* body */}
      <Hero />
      <AboutSkills />
      <ValuesFuture />
    </>
  );
};
export default Home;
