import React from 'react';

/**
 *
 *
 * @export
 * @return {*}
 */
export default function Footer() {
  return (
    <footer className="md:mt-2 bg-bgc-footer">
      <div className="md:w-1/6 m-auto">
        <div className=" py-10 md:flex justify-center">
          <div className='flex justify-center my-2 md:my-0'>
            <p className='text-sm text-white mx-3 md:hidden'>
              お問い合わせ
            </p>
            <p className='text-sm text-white mx-3 md:hidden'>
              助成金について
            </p>
          </div>
          <div className='flex justify-center my-2 md:my-0'>
            <p className='text-sm text-white mx-3 md:hidden'>
              特定商取引法に基づく表記
            </p>
            <p className='text-sm text-white mx-3 md:hidden'>
              プライバシーポリシー
            </p>
          </div>
          <p className="text-white text-xs my-auto hidden md:block">
            CREATED BY
          </p>
          <p className="text-white my-auto ml-5 font-bold hidden md:block">
            木野 伶音
          </p>
        </div>
        <img src="/logo_white.png" className="h-36 m-auto mb-10" />
        <div className="flex justify-center">
          <img src="/twitter.png" className="h-4 mx-3" />
          <img src="/facebook.png" className="h-4 mx-3" />
        </div>
        <p className="text-white text-xs text-center py-10">
          ©︎ 2021 KIKAGAKU
        </p>
      </div>
    </footer>
  );
};
