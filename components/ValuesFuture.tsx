import React from 'react';
import Values from './values';

const ValuesFuture = () => {
  return (
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
                '成長するためには常に\n挑戦し続けなければなりません\n' +
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
  );
};
export default ValuesFuture;
