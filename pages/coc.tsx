import { NextPage } from 'next';
import Head from 'next/head';

const Coc: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code of Conduct | React Conf Kolkata</title>
      </Head>

      <div className="container min-w-full px-6 text-white mt-12 w-full mb-8">
        <h1 className="text-5xl font-extrabold">Code of Conduct</h1>

        <div className="flex justify-center items-center flex-col mx-auto text-center mt-8">
          <div className="text-lg w-11/12">
            <p className="mb-3">
              All attendees, speakers, sponsors and volunteers at React Summit
              Conference and React Amsterdam Meetups are required to follow this
              Code of Conduct. Organisers will strictly enforce it throughout
              the events and community gatherings. We expect cooperation from
              all participants to help ensure a safe environment for everybody.
            </p>
            <p>
              In case you have identified a breach of our CoC, please approach
              our crew (organizers and volunteers in branded t-shirts)
              immediately or contact our CoC enforcement team -
              info@reactconfkolkata.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coc;
