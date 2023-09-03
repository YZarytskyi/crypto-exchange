import React from 'react';

import { getCoinsList } from '@/lib/api';
import Client from '@/components/Exchange/Client';
import { Coin } from '@/types/types';

export default async function Exchange() {
  const coins = await getCoinsList();

  const filteredCoins = coins.symbols
    .filter(
      (coin: Coin) => coin.status === 'TRADING' && coin.symbol.endsWith('USDT'),
    )
    .map((coin: Coin) => {
      return coin.symbol;
    });

  return <Client coinsList={filteredCoins} />;
}
