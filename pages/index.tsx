import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | React Conf Kolkata</title>
      </Head>

      <div className="min-h-screen h-full bg-black">
        <h1 className="text-pink-300">Hello React Conf Kolkata</h1>
      </div>
    </>
  );
};

export default Home;
