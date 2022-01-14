import { FC } from 'react';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
    <footer className="flex justify-between items-center text-sm text-gray-700 px-6 py-4">
      <p>
        Copyright © 2022{' '}
        <span className="hover:underline hover:text-gray-400 cursor-pointer">
          rconfKol
        </span>{' '}
        Inc. All rights reserved.
      </p>
      <div className="flex justify-around">
        <a href="#">info@reactconfkolkata.com</a>
        <span className="mx-2">|</span>
        <a href="#">+91 9898989889</a>
        <span className="mx-2">|</span>
        <Link href="/coc">
          <a>Code of Conduct</a>
        </Link>
      </div>
    </footer>
  );
};
