import React from 'react';
import Head from 'next/head';

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
        {/* header */}
        <div className="w-full h-20">
          <img src="/logo.png" alt="Fwywd Logo" className="w-40 float-left" />
          <ul className="h-full flex justify-end items-center">
            <li className="mr-6 text-light-green font-bold">
              <a href="#">ABOUT</a>
            </li>
            <li className="mr-6 text-light-green font-bold">
              <a href="#">SKILLS</a>
            </li>
            <li className="mr-6 text-light-green font-bold">
              <a href="#">VALUES</a>
            </li>
            <li className="mr-6 text-light-green font-bold">
              <a href="#">FUTURE</a>
            </li>
          </ul>
        </div>
        {/* hero */}
        <div className="bg-bgc-green w-full h-full flex items-center">
          <div className='h-full w-full ml-32'>
            <h1 className='text-white text-5xl font-bold mb-5'>
              メインタイトル
            </h1>
            <h2 className='text-sub-title text-3xl font-bold'>
              サブタイトル
            </h2>
          </div>
          <div className='w-full'>
            <img src="/hero.png" alt="hero" className='ml-auto m-10' />
          </div>
        </div>
        {/* about-skills */}
        <div className='mt-0 p-0 w-full h-full bg-about bg-no-repeat'>
          {/* about */}
          <div className='w-full flex justify-center py-10'>
            <h1 className='text-2xl font-bold text-brack tracking-widest mr-4'>
              私について
            </h1>
            <h2 className='text-light-green tracking-wider my-auto'>ABOUT</h2>
          </div>
          <div className='flex justify-center'>
            <div className='mx-16 text-center'>
              <img src="/about-1.png " alt="about-1" className=' m-auto' />
              <p className='text-xl font-bold
               text-light-green tracking-widest my-8'>
                趣味
              </p>
              <p className='text-brack tracking-widest w-64 my-4'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <div className='mx-16 text-center'>
              <img src="/about-2.png " alt="about-2" className=' m-auto' />
              <p className='text-xl font-bold
               text-light-green tracking-widest my-8'>
                好きな食べ物</p>
              <p className='text-brack tracking-widest w-64 my-4'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <div className='mx-16 text-center'>
              <img src="/about-3.png " alt="about-3" className=' m-auto' />
              <p className='text-xl font-bold
               text-light-green tracking-widest my-8'>
                性格
              </p>
              <p className='text-brack tracking-widest w-64 my-4'>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          {/* skills */}
          <div className='mt-0 p-0 w-full h-full bg-skills bg-no-repeat'>
            <div className='flex w-10/12 mx-auto py-40'>
              <img src="/skill.png" alt="skill" className='py-10'/>
              <div className='pl-5'>
                <div className='flex py-5'>
                  <h1 className='text-2xl font-bold
                  text-brack tracking-widest mr-4'>
                  スキル
                  </h1>
                  <h2 className='text-light-green
                  tracking-wider my-auto'>SKILLS
                  </h2>
                </div>
                <p className='w-8/12 py-5'>テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div className='rounded bg-white h-64 w-8/12'>
                  <div className='pl-7 py-5'>
                    <p className='text-light-green text-xl'>SKILLSKILL</p>
                    <div className='flex'>
                      <div className='bg-bgc-skills rounded h-4
                       w-10/12 relative my-auto'>
                        <div className='absolute bg-skills-bar
                         h-4 w-2/5 borders rounded'>
                        </div>
                      </div>
                      <p className='text-light-green -auto pl-3'>40%</p>
                    </div>
                    <p className='text-light-green text-xl'>SKILLSKILL</p>
                    <div className='flex'>
                      <div className='bg-bgc-skills rounded h-4
                       w-10/12 relative my-auto'>
                        <div className='absolute bg-skills-bar
                         h-4 w-2/5 borders rounded'>
                        </div>
                      </div>
                      <p className='text-light-green -auto pl-3'>40%</p>
                    </div>
                    <p className='text-light-green text-xl'>SKILLSKILL</p>
                    <div className='flex'>
                      <div className='bg-bgc-skills rounded h-4
                       w-10/12 relative my-auto'>
                        <div className='absolute bg-skills-bar
                         h-4 w-2/5 borders rounded'>
                        </div>
                      </div>
                      <p className='text-light-green pl-3'>40%</p>
                    </div>
                    <p className='text-light-green text-xl'>SKILLSKILL</p>
                    <div className='flex'>
                      <div className='bg-bgc-skills rounded h-4
                       w-10/12 relative my-auto'>
                        <div className='absolute bg-skills-bar
                         h-4 w-2/5 borders rounded'>
                        </div>
                      </div>
                      <p className='text-light-green -auto pl-3'>40%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  );
}
