import axios from 'axios';

import { Coin } from '@/types/types';

export async function getCoinsList() {
  try {
    const { data } = await axios.get(
      'https://api.binance.com/api/v1/exchangeInfo',
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCoinPairPrice(coinsPair: string) {
  try {
    const { data } = await axios.get(
      `https://api.binance.com/api/v3/ticker/price?symbol=${coinsPair}`,
    );
    return Number(data.price);
  } catch (error) {
    console.error(error);
  }
}
