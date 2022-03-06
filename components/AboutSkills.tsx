import React from 'react';
import About from './About';
import Skills from './Skills';
import Img from './image';

const AboutSkills = () => {
  return (
    <>
      {/* about-skills */}
      <div className="mt-0 p-0 w-full h-full md:bg-about bg-no-repeat">
        {/* about */}
        <div id="ABOUT">
          <div className="w-full md:flex justify-center py-10">
            <h1
              className="w-full md:w-max text-2xl text-center font-bold
             text-brack tracking-widest mr-4"
            >
              私について
            </h1>
            <h2
              className="
            text-light-green mt-2 text-center tracking-wider md:my-auto"
            >
              ABOUT
            </h2>
          </div>
          <div className="md:flex justify-center">
            <About
              src={'/about-1.png'}
              title={'趣味'}
              content={'1ボーリング\n上手くはないです\n2映画鑑賞\nハリーポッターが大好きです'}
            />
            <About
              src={'/about-2.png'}
              title={'好きな食べ物'}
              content={'1ピザ\nサイゼリアでは絶対に食べます\n2カレー\n辛すぎず甘すぎずの中辛派です'}
            />
            <About
              src={'/about-3.png'}
              title={'性格'}
              content={
                '1負けず嫌い\n他人に負けるのが嫌いです\n2思い立ったら即行動\n考える前に\n体が動いているタイプです'
              }
            />
          </div>
        </div>
        {/* skills */}
        <div
          id="SKILLS"
          className="
        mt-0 p-0 w-full h-full bg-skills-sp md:bg-skills bg-no-repeat"
        >
          <div className="md:flex w-10/12 mx-auto py-10 md:py-40">
            <div className="w-max h-max hidden md:block my-auto">
              <Img src="/skill.png" w={535} h={372} />
            </div>
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
              <div className="w-max h-max md:hidden my-auto">
                <Img src="/skill.png" w={300} h={300} />
              </div>
              <p className="w-full py-5 text-brack text-center md:text-left">
                社会人経験がなくて、大したスキルは持っていないです。
                <br />
                しかし、10代だからこその行動力や発想力を持っています。
                <br />
                プログラミングに関しては、実戦で使えるレベルではないですが、
                <br />
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
    </>
  );
};

export default AboutSkills;
