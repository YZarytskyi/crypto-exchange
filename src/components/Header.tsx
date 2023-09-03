import { FC } from 'react';
import Image from 'next/image';

import SectionContainer from '@/components/SectionContainer';

import logoIcon from '../../public/BTC.png';

const Header: FC = () => {
  return (
    <header className="py-6">
      <SectionContainer className="flex justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoIcon} alt="Logo" width={24} />
          <p className="text-xl">Crypto Exchange</p>
        </div>
        <nav>
          <ul className="flex gap-3">
            <li>
              <a href="#exchange">Exchange</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </SectionContainer>
    </header>
  );
};

export default Header;
