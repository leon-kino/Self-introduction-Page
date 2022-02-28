import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import AboutSkills from '../components/AboutSkills';
import ValuesFuture from '../components/ValuesFuture';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import createOgp from '../utis/server/ogpUtils';

const Home = () => {
  const getStaticProps: GetStaticProps = async () => {
    [...Array(10)].forEach((_) => {
      void createOgp();
    });

    return {
      props: {},
    };
  };
  getStaticProps;
  return (
    <>
      <NextSeo title="自己紹介ページ" description="木野伶音の自己紹介ページです。" />
      {/* head */}
      <Head>
        <title>自己紹介ページ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          key="ogImage"
          content={`https://self-introduction-page.vercel.app/`}
        />
        <meta name="twitter:card" key="twitterCard" content="summary_large_image" />
        <meta name="twitter:title" content={'aaaa'} />
        <meta name="twitter:description" content={'これはテストだよ'} />
        <meta
          name="twitter:image"
          key="twitterImage"
          content={`https://self-introduction-page.vercel.app/`}
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
