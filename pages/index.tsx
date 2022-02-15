import React from 'react';
import Head from 'next/head';
import About from '../components/about';
import Skills from '../components/skills';
import Values from '../components/values';

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
        {/* hero */}
        <div className="
        bg-bgc-green w-full h-full md:flex md:items-center pb-1">
          <div className="h-full md:w-full md:ml-32">
            <h1 className="
          text-white text-3xl md:text-5xl font-bold m-auto
           text-center pt-10 md:ml-0 md:text-left">
              自己紹介ページ
            </h1>
            <h2 className="
            text-sub-title text-2xl md:text-3xl font-bold pt-5 m-auto
             text-center md:ml-0 md:text-left">
              木野 伶音
            </h2>
          </div>
          <div className="w-full">
            <img src="/hero.png" alt="hero"
              className="w-8/12 md:w-max mx-auto md:ml-auto m-10" />
          </div>
        </div>
        {/* about-skills */}
        <div className="mt-0 p-0 w-full h-full md:bg-about bg-no-repeat">
          {/* about */}
          <div>
            <div className="w-full md:flex justify-center py-10">
              <h1
                className="w-full md:w-max text-2xl text-center font-bold
               text-brack tracking-widest mr-4"
              >
                私について
              </h1>
              <h2 className="
              text-light-green mt-2 text-center tracking-wider md:my-auto">
                ABOUT
              </h2>
            </div>
            <div className="md:flex justify-center">
              <About src={'/about-1.png'} title={'趣味'}
                content={'1ボーリング\n上手くはないです\n2映画鑑賞\nハリーポッターが大好きです'} />
              <About src={'/about-2.png'} title={'好きな食べ物'}
                content={'1ピザ\nサイゼリアでは絶対に食べます\n2カレー\n辛すぎず甘すぎずの中辛派です'} />
              <About src={'/about-3.png'} title={'性格'}
                content={
                  '1負けず嫌い\n他人に負けるのが嫌いです\n2思い立ったら即行動\n考える前に\n体が動いているタイプです'} />
            </div>
          </div>
          {/* skills */}
          <div className="
          mt-0 p-0 w-full h-full bg-skills-sp md:bg-skills bg-no-repeat">
            <div className="md:flex w-10/12 mx-auto py-10 md:py-40">
              <img src="/skill.png" alt="skill" className="
              py-10 hidden md:block" />
              <div className="md:pl-5">
                <div className="md:flex py-5">
                  <h1
                    className="text-2xl font-bold
                  text-brack tracking-widest mr-4 w-full md:w-max text-center"
                  >
                    スキル
                  </h1>
                  <h2
                    className="text-light-green
                  tracking-wider my-auto w-full md:w-max text-center"
                  >
                    SKILLS
                  </h2>
                </div>
                <img src="/skill.png" alt="skill" className="
              py-10 md:hidden m-auto" />
                <p className="w-full py-5 text-brack text-center md:text-left">
                  社会人経験がなくて、大したスキルは持っていないです。<br />
                  しかし、10代だからこその行動力や発想力を持っています。<br />
                  プログラミングに関しては、実戦で使えるレベルではないですが、<br />
                  学校などで学んでいたので他の高校生よりはできます。
                </p>
                <div className="rounded bg-white h-64 m-auto w-full">
                  <div className="px-5 py-5">
                    <Skills title={'プログラミング'} percent={40} />
                    <Skills title={'行動力'} percent={100} />
                    <Skills title={'発想力'} percent={80} />
                    <Skills title={'経験'} percent={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* values-future */}
        <div className="bg-future-sp md:bg-future bg-no-repeat bg-bottom">
          {/* values */}
          <div className="mt-0 p-0 w-full h-full">
            <div className="
            flex flex-col md:flex-row justify-center my-14">
              <h1
                className="text-2xl font-bold
               text-brack tracking-widest mx-2 text-center"
              >
                価値観
              </h1>
              <h2
                className="text-light-green mx-2
               tracking-wider my-auto text-center"
              >
                VALUES
              </h2>
            </div>
            <div
              className="md:flex bg-white rounded
            w-10/12 md:w-8/12 m-auto justify-around pb-10"
            >
              <Values src={'value1.png'} title={'成長'}
                content={
                  '「毎日1%の成長\nが人生の目標です。\n毎日少しでも良いことをするか\nし' +
                   'ないかで最終的には莫大な差が生まれると思っています。'
                } />
              <div className="md:border-l-2 border-line-green">
                <Values src={'value2.png'} title={'挑戦'}
                  content={
                    '清朝すつた目には常に\n挑戦し続けなければなりません\n' +
                    'なので、できるだけ多くの物事に挑戦し続けます。'
                  } />
              </div>
              <div className="md:border-l-2 border-line-green">
                <Values src={'value3.png'} title={'メリハリ'}
                  content={
                    '楽しむときは楽しむ。\n頑張るときは頑張る。\n' +
                    'などのメリハリを\n大切にしています。'
                  } />
              </div>
            </div>
          </div>
          {/* future */}
          <div className="
          w-10/12 md:w-8/12 m-auto py-10 md:flex justify-between">
            <div className="md:w-11/12">
              <div className="w-max flex flex-col md:flex-row m-auto md:m-0">
                <h1
                  className="text-2xl font-bold text-center mx-auto
                  text-brack tracking-widest md:mr-4 mt-10 md:my-10"
                >
                    3年後にやりたいこと
                </h1>
                <h2
                  className="text-light-green w-max
                  tracking-wider m-auto md:mx-0 pb-5 md:pb-0"
                >
                    FUTURE
                </h2>
              </div>
              <h1 className="
                mx-auto md:mr-5 text-brack text-center md:text-left">
                まずは自分の為でなく、<br />
                他人の為に全力を出せる人になります。<br />
                そして私のように経済的な理由で夢を諦める人を減らします。<br />
                教育を変えることでより良い日本・世界にします。
              </h1>
            </div>
            <img src="future.png" alt="future" className='
            w-max hidden md:block' />
          </div>
          <img src="future.png" alt="future" className='
         w-max md:hidden' />
        </div>
      </main>
    </div>
  );
}
