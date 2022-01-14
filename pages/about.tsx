import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | React Conf Kolkata</title>
      </Head>

      <div className="container min-w-full px-6 text-white mt-12 w-full">
        <h1 className="text-5xl font-extrabold">About</h1>

        <div className="flex justify-center items-center flex-col mx-auto text-center mt-8">
          <h1 className="font-bold text-2xl pb-8">
            9 speakers, 2 days, 1 incredible location
          </h1>
          <div className="w-10/12 text-justify">
            <p className="mb-4">
              The first React Conference in Kolkata for and by the community
              located just four blocks from the beach with the Kolkata Beach
              Botanical Garden right outside event doors! We're bringing
              together industry leaders to share the latest in React ranging
              from technical writing to web3 and everything in between!
            </p>
            <p>
              React Kolkata will be organized April 18 - 19, 2022 at the Kolkata
              Beach Convention Center within the eMerge Salt Lake Conference
              gathering 400+ React developers to learn, have fun, network, and
              mingle.
            </p>

            <div className="flex justify-evenly mt-6 mix-w-sm w-full">
              <img
                width="450px"
                height="300px"
                src="https://www.reactmiami.com/_next/image?url=%2Fmbcc.jpeg&w=640&q=75"
                alt="location"
              />
              <img
                width="450px"
                height="300px"
                src="https://www.reactmiami.com/_next/image?url=%2Fmiami-beach.jpg&w=640&q=75"
                alt="locations"
              />
            </div>

            {/* a table for schedules */}
            <div className="flex flex-col w-full mt-6 justify-center items-center">
              <h1 className="text-2xl font-bold mb-4">Schedule</h1>
              <table className="w-64 mx-auto">
                <thead className="text-center">
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>9:00 AM</td>
                    <td>Registration</td>
                  </tr>
                  <tr>
                    <td>9:30 AM</td>
                    <td>Keynote</td>
                  </tr>
                  <tr>
                    <td>12:00 PM</td>
                    <td>Break</td>
                  </tr>
                  <tr>
                    <td>12:30 PM</td>
                    <td>
                      <Link href="/speakers">
                        <a>OVER</a>
                      </Link>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
