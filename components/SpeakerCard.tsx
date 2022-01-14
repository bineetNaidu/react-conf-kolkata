import { FC } from 'react';
import type { SpeakerType } from '../lib/types';

interface SpeakerCardProps {
  speaker: SpeakerType;
}

export const SpeakerCard: FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg group border border-transparent hover:border-pink-700 transition-all">
      <img
        className="w-full group-hover:scale-105 transition-transform"
        src={speaker.avatar}
        alt={speaker.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">{speaker.name}</div>
        <p className="text-gray-500 text-base">{speaker.bio}</p>
      </div>
    </div>
  );
};
