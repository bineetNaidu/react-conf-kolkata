import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | React Conf Kolkata</title>
      </Head>
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-white text-8xl font-bold">
          The first <span className="italic text-pink-800">React</span>{' '}
          conference in <span className="italic text-pink-800">Kolkata</span> 🌴
        </h1>
        <p className="text-gray-500 text-3xl text-center w-3/4 mx-auto mt-8">
          An in-person conference within eMerge Salt Lake, anchoring Kolkata
          Tech Week.
        </p>

        <h3 className="text-pink-700 mt-8 text-3xl mb-24">
          APRIL 18 - 19, 2022 |
          <span className="font-bold"> Technopolis, Salt Lake City</span>
        </h3>

        <div className="flex justify-center mt-8">
          <Link href="/buy-tickets">
            <a className="bg-pink-800 text-white font-bold py-2 px-4 rounded">
              Tickets
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
