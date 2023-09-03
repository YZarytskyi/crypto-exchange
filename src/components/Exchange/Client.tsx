'use client';

import React, { SyntheticEvent, useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CoinsSelect } from '@/types/types';

interface ClientProps {
  coinsList: string[];
}

const Client: React.FC<ClientProps> = ({ coinsList }) => {
  const [sendCoin, setSendCoin] = useState<CoinsSelect>({
    firstLetter: 'B',
    pair: 'BTCUSDT',
  });
  const [getCoin, setGetCoin] = useState<CoinsSelect>({
    firstLetter: 'A',
    pair: 'ADA',
  });

  const options: CoinsSelect[] = coinsList.map(pair => {
    const firstLetter = pair[0].toUpperCase();
    return {
      firstLetter: firstLetter,
      pair,
    };
  });

  const onChangeSendCoin = (
    e: SyntheticEvent,
    newCoin: CoinsSelect | null,
  ): void => {
    if (newCoin) {
      setSendCoin({ firstLetter: newCoin.firstLetter, pair: newCoin.pair });
    }
  };

  const onChangeGetCoin = (
    e: SyntheticEvent,
    newCoin: CoinsSelect | null,
  ): void => {
    if (newCoin) {
      setGetCoin({ firstLetter: newCoin.firstLetter, pair: newCoin.pair });
    }
  };

  return (
    <section id="exchange" className="py-5">
      <SectionContainer className="flex gap-3">
        <div className="flex w-1/2 items-center justify-center text-3xl">
          Crypto Exchange
        </div>
        <div className="w-1/2">
          <div className="rounded-2xl bg-gray-900 p-8">
            <label htmlFor="send-coins" className="mb-2 block text-xs">
              You send
            </label>
            <div className="focus-within:shadow-inputFocus border-input mb-8 flex gap-1 rounded-md border-[1px]">
              <input
                id="send-coins"
                type="text"
                className="flex-grow border-none bg-transparent px-4 py-2 outline-none"
              />
              <Autocomplete
                id="coinsList"
                className="w-[150px]"
                value={sendCoin}
                onChange={onChangeSendCoin}
                options={options.sort((a, b) =>
                  a.firstLetter.localeCompare(b.firstLetter),
                )}
                groupBy={coin => coin.firstLetter}
                getOptionLabel={coin => coin.pair.replace(/USDT/, '')}
                renderInput={params => <TextField {...params} label="Coin" />}
              />
            </div>
            <label htmlFor="get-coins" className="mb-2 block text-xs">
              You receive
            </label>
            <div className="focus-within:shadow-inputFocus border-input mb-8 flex rounded-md border-[1px]">
              <input
                id="get-coins"
                type="text"
                className="flex-grow border-none bg-transparent px-4 py-2 outline-none"
              />
              <Autocomplete
                id="coinsList"
                className="w-[150px]"
                value={getCoin}
                onChange={onChangeGetCoin}
                options={options.sort((a, b) =>
                  a.firstLetter.localeCompare(b.firstLetter),
                )}
                groupBy={coin => coin.firstLetter}
                getOptionLabel={coin => coin.pair.replace(/USDT/, '')}
                renderInput={params => <TextField {...params} label="Coin" />}
              />
            </div>
            <button className="block w-full rounded-md bg-gray-800 py-4 uppercase transition-colors hover:bg-gray-700">
              Exchange
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Client;
