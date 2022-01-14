import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | React Conf Kolkata</title>
      </Head>

      <div className="container min-w-full px-6 text-white mt-12 w-full mb-8">
        <h1 className="text-5xl font-extrabold">Contact</h1>

        <div className="flex justify-center items-center flex-col mx-auto text-center mt-8">
          <div className="relative">
            <input
              type="text"
              className="rounded-md py-3 pl-5 pr-20 w-full bg-gray-700 placeholder:text-sm text-white focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email for event updates"
            />
            <button className="absolute right-1 top-2.5 bg-pink-700 rounded-md py-1 text-white focus:outline-none focus:shadow-outline w-20 text-sm">
              Subscribe
            </button>
          </div>

          <div className="mt-16">
            <h1 className="text-2xl font-bold mb-4">
              info@reactconfkolkata.com
            </h1>
            <p>105 E Atlantic Ave Suite</p>
            <p className="my-2">200 Salt Lake KOL 0000</p>
            <p>India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
