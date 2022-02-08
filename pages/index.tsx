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
      <main className="w-max md:w-full">
        {/* header */}
        <div className="w-full h-full md:flex md:justify-between">
          <img src="/logo.png" alt="Fwywd Logo"
            className="w-72 md:w-40 m-auto md:ml-0" />
          <ul className="h-full flex justify-center mb-5 md:my-auto">
            <li
              className="mx-3 text-light-green font-bold text-3xl md:text-base">
              <a href="#">ABOUT</a>
            </li>
            <li
              className="mx-3 text-light-green font-bold text-3xl md:text-base">
              <a href="#">SKILLS</a>
            </li>
            <li
              className="mx-3 text-light-green font-bold text-3xl md:text-base">
              <a href="#">VALUES</a>
            </li>
            <li
              className="mx-3 text-light-green font-bold text-3xl md:text-base">
              <a href="#">FUTURE</a>
            </li>
          </ul>
        </div>
        {/* hero */}
        <div className="bg-bgc-green w-full h-full flex items-center">
          <div className="h-full w-full ml-32">
            <h1 className="text-white text-5xl font-bold mb-5">自己紹介ページ</h1>
            <h2 className="text-sub-title text-3xl font-bold">木野 伶音</h2>
          </div>
          <div className="w-full">
            <img src="/hero.png" alt="hero" className="ml-auto m-10" />
          </div>
        </div>
        {/* about-skills */}
        <div className="mt-0 p-0 w-full h-full bg-about bg-no-repeat">
          {/* about */}
          <div>
            <div className="w-full flex justify-center py-10">
              <h1
                className="text-2xl font-bold
               text-brack tracking-widest mr-4"
              >
                私について
              </h1>
              <h2 className="text-light-green tracking-wider my-auto">ABOUT</h2>
            </div>
            <div className="flex justify-center">
              <div className="mx-16 text-center">
                <img src="/about-1.png " alt="about-1" className=" m-auto" />
                <p
                  className="text-xl font-bold
                text-light-green tracking-widest my-8"
                >
                  趣味
                </p>
                <p className="text-brack tracking-widest w-64 my-4">
                  1.ボーリング<br />
                  上手くないはないです<br />
                  2映画鑑賞<br />
                  ハリーポッターが大好きです
                </p>
              </div>
              <div className="mx-16 text-center">
                <img src="/about-2.png " alt="about-2" className=" m-auto" />
                <p
                  className="text-xl font-bold
                text-light-green tracking-widest my-8"
                >
                  好きな食べ物
                </p>
                <p className="text-brack tracking-widest w-64 my-4">
                  1ピザ <br />
                  サイゼリアでは絶対に食べます<br />
                  2カレー<br />
                  辛すぎず甘すぎずの中辛派です
                </p>
              </div>
              <div className="mx-16 text-center">
                <img src="/about-3.png " alt="about-3" className=" m-auto" />
                <p
                  className="text-xl font-bold
                text-light-green tracking-widest my-8"
                >
                  性格
                </p>
                <p className="text-brack tracking-widest w-64 my-4">
                  1負けず嫌い<br />
                  他人に負けるのが嫌いです<br />
                  2思い立ったら即行動<br />
                  考える前に<br />体が動いているタイプです
                </p>
              </div>
            </div>
          </div>
          {/* skills */}
          <div className="mt-0 p-0 w-full h-full bg-skills bg-no-repeat">
            <div className="flex w-10/12 mx-auto py-40">
              <img src="/skill.png" alt="skill" className="py-10" />
              <div className="pl-5">
                <div className="flex py-5">
                  <h1
                    className="text-2xl font-bold
                  text-brack tracking-widest mr-4"
                  >
                    スキル
                  </h1>
                  <h2
                    className="text-light-green
                  tracking-wider my-auto"
                  >
                    SKILLS
                  </h2>
                </div>
                <p className="w-full py-5 text-brack">
                  社会人経験がなくて、大したスキルは持っていないです。<br />
                  しかし、10代だからこその行動力や発想力を持っています。<br />
                  プログラミングに関しては、実戦で使えるレベルではないですが、<br />
                  学校などで学んでいたので他の高校生よりはできます。
                </p>
                <div className="rounded bg-white h-64 w-full">
                  <div className="pl-7 py-5">
                    <p className="text-light-green text-xl">プログラミング</p>
                    <div className="flex">
                      <div
                        className="bg-bgc-skills rounded h-4
                      w-10/12 relative my-auto"
                      >
                        <div
                          className="absolute bg-skills-bar
                        h-4 w-2/5 borders rounded"
                        ></div>
                      </div>
                      <p className="text-light-green -auto pl-3">40%</p>
                    </div>
                    <p className="text-light-green text-xl">行動力</p>
                    <div className="flex">
                      <div
                        className="bg-bgc-skills rounded h-4
                      w-10/12 relative my-auto"
                      >
                        <div
                          className="absolute bg-skills-bar
                        h-4 w-full borders rounded"
                        ></div>
                      </div>
                      <p className="text-light-green -auto pl-3">100%</p>
                    </div>
                    <p className="text-light-green text-xl">発想力</p>
                    <div className="flex">
                      <div
                        className="bg-bgc-skills rounded h-4
                      w-10/12 relative my-auto"
                      >
                        <div
                          className="absolute bg-skills-bar
                        h-4 w-4/5 borders rounded"
                        ></div>
                      </div>
                      <p className="text-light-green pl-3">80%</p>
                    </div>
                    <p className="text-light-green text-xl">経験</p>
                    <div className="flex">
                      <div
                        className="bg-bgc-skills rounded h-4
                      w-10/12 relative my-auto"
                      >
                        <div
                          className="absolute bg-skills-bar
                        h-4 w-1/5 borders rounded"
                        ></div>
                      </div>
                      <p className="text-light-green -auto pl-3">20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* values-future */}
        <div className="bg-future bg-no-repeat bg-bottom">
          {/* values */}
          <div className="mt-0 p-0 w-full h-full">
            <div className="flex justify-center mb-14">
              <h1
                className="text-2xl font-bold
               text-brack tracking-widest mr-4"
              >
                価値観
              </h1>
              <h2
                className="text-light-green
               tracking-wider my-auto"
              >
                VALUES
              </h2>
            </div>
            <div
              className="flex bg-white rounded
            w-8/12 m-auto justify-around pb-10"
            >
              <div className="w-72 h-10/12">
                <img src="value1.png" alt="value1" className="m-auto" />
                <h3
                  className="font-bold text-brack
                tracking-widest text-center py-5"
                >
                  成長
                </h3>
                <h4
                  className="w-9/12 m-auto text-center
                text-sm text-brack"
                >
                  「毎日1%の成長」<br />が人生の目標です。<br />
                  毎日少しでも良いことをするか<br />しないかで最終的には莫大な差が生まれると思っています。
                </h4>
              </div>
              <div className="w-72 border-l-2 h-10/12 border-line-green">
                <img src="value2.png" alt="value1" className="m-auto" />
                <h3
                  className="font-bold text-brack
                tracking-widest text-center py-5"
                >
                  挑戦
                </h3>
                <h4
                  className="w-9/12 m-auto text-center
                text-sm text-brack"
                >
                成長するためには常に<br />挑戦し続けなければなりません。<br />
                なので、できるだけ多くの物事に挑戦し続けます。
                </h4>
              </div>
              <div className="w-72 border-l-2 h-10/12 border-line-green">
                <img src="value3.png" alt="value1" className="m-auto" />
                <h3
                  className="font-bold text-brack
                tracking-widest text-center py-5"
                >
                  メリハリ
                </h3>
                <h4
                  className="w-9/12 m-auto text-center
                text-sm text-brack"
                >
                  楽しむときは楽しむ。<br />
                  頑張るときは頑張る。<br />
                  などのメリハリを<br />大切にしています。<br />
                </h4>
              </div>
            </div>
          </div>
          {/* future */}
          <div className="w-8/12 m-auto py-10">
            <div className="flex justify-between">
              <div className="w-11/12">
                <div className="flex">
                  <h1
                    className="text-2xl font-bold
                  text-brack tracking-widest mr-4 my-10"
                  >
                    3年後にやりたいこと
                  </h1>
                  <h2
                    className="text-light-green
                  tracking-wider my-auto"
                  >
                    FUTURE
                  </h2>
                </div>
                <p className="mr-5 text-brack">
                まずは自分の為でなく、<br />他人の為に全力を出せる人になります。<br />
                そして私のように経済的な理由で夢を諦める人を減らします。<br />
                教育を変えることでより良い日本・世界にします。
                </p>
              </div>
              <img src="future.png" alt="future" />
            </div>
          </div>
        </div>
      </main>
      {/* footer */}
      <footer className="mt-2 bg-bgc-footer">
        <div className="w-1/6 m-auto">
          <div className=" py-10 flex justify-center">
            <p className="text-white text-xs my-auto">CREATED BY</p>
            <p className="text-white my-auto ml-5 font-bold">木野 伶音</p>
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
    </div>
  );
}
