import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import type { SpeakerType } from '../lib/types';
import { SpeakerCard } from '../components/SpeakerCard';

const Speakers: NextPage<{ speakers: SpeakerType[] }> = ({ speakers }) => {
  return (
    <>
      <Head>
        <title>Speakers | React Conf Kolkata</title>
      </Head>
      <div className="container mx-auto px-4">
        <div className="text-white my-16">
          <h1 className="text-4xl font-bold mb-4">Speakers</h1>
          <p className="text-lg mb-3 text-gray-600">
            React, JavaScript, and Web3 experts from south Kolkata and around
            India.
          </p>
          <p className="text-lg mb-3">
            Complete speaker lineup announced January 21st
          </p>
          <p className="text-lg mb-3">
            ASL Interpretation provided for all speakers both in person and with
            presentation recordings
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mb-4">
          {speakers.map((speaker: SpeakerType) => (
            <SpeakerCard key={speaker._id} speaker={speaker} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const Q = `query GetSpeakerList {
  getSpeakerList {
    items {
      _id
      name
      bio
      avatar
      links {
        github
        website
      }
    }
    total
  }
}`;

  const URL = process.env.TAKESHAPE_API_ENDPOINT!;
  const API_KEY = process.env.TAKESHAPE_API_KEY!;

  const res = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ query: Q }),
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const { data } = await res.json();

  return {
    props: {
      speakers: data.getSpeakerList.items || [],
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Speakers;
