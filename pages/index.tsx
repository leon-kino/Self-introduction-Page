import React from 'react';
import Head from 'next/head';
import Hero from '../components/hero';
import AboutSkills from '../components/AboutSkills';
import ValuesFuture from '../components/ValuesFuture';

/**
 *
 *
 * @export
 * @return {*}
 */
export default function Home() {
  return (
    <div>
      {/* head */}
      <Head>
        <title>fwywd/自己紹介ページ</title>
      </Head>
      {/* body */}
      <main className="w-full">
        <Hero />
        <AboutSkills />
        <ValuesFuture />
      </main>
    </div>
  );
}
