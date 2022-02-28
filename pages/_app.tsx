import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        defaultTitle="自己紹介ページ"
        canonical="https://self-introduction-page.vercel.app/"
        description="木野伶音の自己紹介ページです。更新日:2021年2月22日"
        twitter={{
          handle: '1re0n',
          site: '1re0n',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          title: '木野伶音の自己紹介ページ',
          description: '木野伶音の自己紹介ページです。更新日:2021年2月22日',
          site_name: '自己紹介サイト',
          url: 'https://self-introduction-page.vercel.app/',
          images: [
            {
              url: '/logo_white.png',
              width: 1200,
              height: 630,
              alt: 'self-introduction/ogp画像',
            },
          ],
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
