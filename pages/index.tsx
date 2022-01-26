import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="w-full h-20">
          <img src="/logo.png" alt="Fwywd Logo" className="w-40 float-left" />
          <ul className="h-full flex justify-end items-center">
            <li className="mr-6 text-light-green"><a href="#">ABOUT</a></li>
            <li className="mr-6 text-light-green"><a href="#">SKILLS</a></li>
            <li className="mr-6 text-light-green"><a href="#">VALUES</a></li>
            <li className="mr-6 text-light-green"><a href="#">FUTURE</a></li>
          </ul>
        </div>
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
        <div className='mt-0 p-0 w-full h-full bg-about'>
          <div className='w-full flex justify-center py-10'>
            <h1 className='text-2xl font-bold text-brack tracking-widest mr-4'>私について</h1>
            <h2 className='text-light-green tracking-wider my-auto'>ABOUT</h2>
          </div>
          <div className='flex justify-center'>
            <div className='mx-16 text-center'>
              <img src="/about-1.png " alt="about-1" className=' m-auto' />
              <p className='text-xl font-bold text-light-green tracking-widest my-8'>趣味</p>
              <p className='text-brack tracking-widest w-64 my-4'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>  
            </div>
            <div className='mx-16 text-center'>
              <img src="/about-2.png " alt="about-2" className=' m-auto' />
              <p className='text-xl font-bold text-light-green tracking-widest my-8'>好きな食べ物</p>
              <p className='text-brack tracking-widest w-64 my-4'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className='mx-16 text-center'>
              <img src="/about-3.png " alt="about-3" className=' m-auto' />
              <p className='text-xl font-bold text-light-green tracking-widest my-8'>性格</p>
              <p className='text-brack tracking-widest w-64 my-4'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  )
}
