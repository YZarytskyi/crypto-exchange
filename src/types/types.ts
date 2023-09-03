import { StaticImageData } from 'next/image';

export interface Coin {
  status: string;
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
}

export interface CoinsSelect {
  coin: string;
  name: string;
  icon: StaticImageData;
}
