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
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  )
}
