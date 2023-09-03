import React, { FC } from 'react';

import SectionContainer from '@/components/SectionContainer';
import Image from 'next/image';
import logoIcon from '../../public/BTC.png';

const Footer: FC = () => {
  return (
    <footer className="pb-10 pt-20">
      <SectionContainer>
        <div className="mb-12 flex justify-between">
          <div className="flex items-center gap-3">
            <Image src={logoIcon} alt="Logo" width={24} />
            <p className="text-xl">Crypto Exchange</p>
          </div>
          <ul className="flex gap-5">
            <li>
              <a href="#exchange">Exchange</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
          <a className="block text-center" href="mailto:support@exchange.com">
            support@exchange.com
          </a>
        </div>
        <p className="text-gray-400">&copy;EXCHANGE.COM 2020 - 2023</p>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
