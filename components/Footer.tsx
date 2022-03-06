import React from 'react';
import Img from './image';

const Footer = () => {
  return (
    <footer className="md:mt-2 bg-bgc-footer">
      <div className="md:w-1/6 m-auto">
        <div className=" py-10 md:flex justify-center">
          <div className="flex justify-center my-2 md:my-0">
            <p className="text-sm text-white mx-3 md:hidden">お問い合わせ</p>
            <p className="text-sm text-white mx-3 md:hidden">助成金について</p>
          </div>
          <div className="flex justify-center my-2 md:my-0">
            <p className="text-sm text-white mx-3 md:hidden">特定商取引法に基づく表記</p>
            <p className="text-sm text-white mx-3 md:hidden">プライバシーポリシー</p>
          </div>
          <p className="text-white text-xs my-auto hidden md:block">CREATED BY</p>
          <p className="text-white my-auto ml-5 font-bold hidden md:block">木野 伶音</p>
        </div>
        <div className="m-auto mb-10">
          <div className="w-max h-max mx-auto">
            <Img src="/logo_white.png" w={120} h={150} />
          </div>
        </div>
        <div className="flex justify-center">
          <a href="https://twitter.com/share?url=https://self-introduction-page.vercel.app/&text=木野伶音の自己紹介ページ&hashtags=自己紹介">
            <div className="w-max h-max mx-3">
              <Img src="/twitter.png" w={20} h={20} />
            </div>
          </a>
          <a href="http://www.facebook.com/share.php?u=https://self-introduction-page.vercel.app/">
            <div className="w-max h-max mx-3">
              <Img src="/facebook.png" w={20} h={20} />
            </div>
          </a>
        </div>
        <p className="text-white text-xs text-center py-10">©︎ 2021 KIKAGAKU</p>
      </div>
    </footer>
  );
};

export default Footer;
