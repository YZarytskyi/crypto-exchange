import { CoinsSelect } from '@/types/types';

import BTCIcon from '../../public/BTC.png';
import USDTIcon from '../../public/USDT.png';
import ETHIcon from '../../public/ETH.png';
import ETCIcon from '../../public/ETC.png';
import BNBIcon from '../../public/BNB.png';
import XRPIcon from '../../public/XRP.png';
import ADAIcon from '../../public/ADA.png';
import DOGEIcon from '../../public/DOGE.png';
import SOLIcon from '../../public/SOL.png';
import TRXIcon from '../../public/TRX.png';
import DOTIcon from '../../public/DOT.png';
import MATICIcon from '../../public/MATIC.png';
import LTCIcon from '../../public/LTC.png';
import BCHIcon from '../../public/BCH.png';
import XMRIcon from '../../public/XMR.png';
import XLMIcon from '../../public/XLM.png';

export const getCoinOptions: CoinsSelect[] = [
  {
    coin: 'BTC',
    name: 'Bitcoin',
    icon: BTCIcon,
  },
  {
    coin: 'USDT',
    name: 'Tether',
    icon: USDTIcon,
  },
];

export const sendCoinsOptions: CoinsSelect[] = [
  {
    coin: 'ETH',
    name: 'Ethereum',
    icon: ETHIcon,
  },
  {
    coin: 'ETC',
    name: 'Ethereum Classic',
    icon: ETCIcon,
  },
  {
    coin: 'BNB',
    name: 'Binance Coin',
    icon: BNBIcon,
  },
  {
    coin: 'XRP',
    name: 'Ripple',
    icon: XRPIcon,
  },
  {
    coin: 'ADA',
    name: 'Cardano',
    icon: ADAIcon,
  },
  {
    coin: 'DOGE',
    name: 'Dogecoin',
    icon: DOGEIcon,
  },
  {
    coin: 'SOL',
    name: 'Solana',
    icon: SOLIcon,
  },
  {
    coin: 'TRX',
    name: 'Tron',
    icon: TRXIcon,
  },
  {
    coin: 'DOT',
    name: 'Polkadot',
    icon: DOTIcon,
  },
  {
    coin: 'MATIC',
    name: 'Polygon',
    icon: MATICIcon,
  },
  {
    coin: 'LTC',
    name: 'Litecoin',
    icon: LTCIcon,
  },
  {
    coin: 'BCH',
    name: 'Bitcoin Cash',
    icon: BCHIcon,
  },
  {
    coin: 'XMR',
    name: 'Monero',
    icon: XMRIcon,
  },
  {
    coin: 'XLM',
    name: 'Stellar',
    icon: XLMIcon,
  },
];
