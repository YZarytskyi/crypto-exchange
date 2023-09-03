'use client';

import React, { SyntheticEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { getCoinPairPrice } from '@/lib/api';
import { numberToFixed } from '@/helpers/numberToFixed';
import SectionContainer from '@/components/SectionContainer';
import { getCoinOptions, sendCoinsOptions } from '@/data/coins';
import { CoinsSelect } from '@/types/types';

import BTCIcon from '../../../public/BTC.png';
import ETHIcon from '../../../public/ETH.png';

const Exchange: React.FC = () => {
  const [sendCoin, setSendCoin] = useState<CoinsSelect>({
    coin: 'ETH',
    name: 'Ethereum',
    icon: ETHIcon,
  });
  const [getCoin, setGetCoin] = useState<CoinsSelect>({
    coin: 'BTC',
    name: 'Bitcoin',
    icon: BTCIcon,
  });
  const [sendCoinInput, setSendCoinInput] = useState<number | ''>(1);
  const [getCoinInput, setGetCoinInput] = useState<number | ''>('');
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    fetchCoinPairPrice();

    setSendCoinInput(1);
  }, [sendCoin, getCoin]);

  async function fetchCoinPairPrice() {
    const price = await getCoinPairPrice(`${sendCoin.coin}${getCoin.coin}`);

    if (price) {
      const formattedPrice = price + price * 0.05;
      console.log(price, formattedPrice);
      setCurrentPrice(formattedPrice);
      setGetCoinInput(numberToFixed((sendCoinInput || 0) * formattedPrice));
    }
  }

  const onChangeSendCoin = (
    e: SyntheticEvent,
    newCoin: CoinsSelect | null,
  ): void => {
    if (newCoin) setSendCoin(newCoin);
  };

  const onChangeGetCoin = (
    e: SyntheticEvent,
    newCoin: CoinsSelect | null,
  ): void => {
    if (newCoin) setGetCoin(newCoin);
  };

  const onChangeSendCoinInput: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    if (e.target.value) {
      setSendCoinInput(Number(e.currentTarget.value));
      setGetCoinInput(
        numberToFixed(Number(e.currentTarget.value) * (currentPrice || 0)),
      );
    } else {
      setSendCoinInput('');
      setGetCoinInput('');
    }
  };

  const onChangeGetCoinInput: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    if (e.target.value) {
      setGetCoinInput(Number(e.currentTarget.value));
      setSendCoinInput(
        numberToFixed(Number(e.currentTarget.value) / (currentPrice || 0)),
      );
    } else {
      setSendCoinInput('');
      setGetCoinInput('');
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
            <div className="mb-8 flex gap-3">
              <input
                id="send-coins"
                type="number"
                value={sendCoinInput}
                onChange={onChangeSendCoinInput}
                className="focus:shadow-inputFocus border-input flex-grow rounded-md border-[1px] bg-transparent px-4 py-2 outline-none"
              />
              <Autocomplete
                id="send-coins-list"
                className="w-[150px] focus-within:w-full"
                disableClearable
                blurOnSelect
                value={sendCoin}
                onChange={onChangeSendCoin}
                options={sendCoinsOptions}
                getOptionLabel={coin => coin.coin}
                renderOption={(props, option) => (
                  <li
                    {...props}
                    className="flex cursor-pointer items-center gap-3 bg-gray-800 px-2 py-3 hover:bg-gray-700"
                  >
                    <Image
                      src={option.icon}
                      alt={option.coin}
                      width={20}
                      height={20}
                      loading="lazy"
                      className="flex-shrink-0"
                    />
                    <p className="flex gap-1">
                      <span className="flex-shrink-0">{option.name}</span>
                      <span className="opacity-60">({option.coin})</span>
                    </p>
                  </li>
                )}
                renderInput={params => <TextField {...params} label="Coin" />}
              />
            </div>

            <div className="flex justify-between">
              <p>
                1 {sendCoin.coin} = {currentPrice} {getCoin.coin}
              </p>
              <button className="mb-6" onClick={fetchCoinPairPrice}>
                Update Price
              </button>
            </div>

            <label htmlFor="get-coins" className="mb-2 block text-xs">
              You receive
            </label>
            <div className="mb-8 flex gap-3">
              <input
                id="get-coins"
                type="number"
                value={getCoinInput}
                onChange={onChangeGetCoinInput}
                className="focus:shadow-inputFocus border-input flex-grow rounded-md border-[1px] bg-transparent px-4 py-2 outline-none"
              />
              <Autocomplete
                id="get-coins-list"
                className="w-[150px] focus-within:w-full"
                disableClearable
                blurOnSelect
                value={getCoin}
                onChange={onChangeGetCoin}
                options={getCoinOptions}
                getOptionLabel={option => option.coin}
                renderOption={(props, option) => (
                  <li
                    {...props}
                    className="flex cursor-pointer items-center gap-3 bg-gray-800 px-2 py-3 hover:bg-gray-700"
                  >
                    <Image
                      src={option.icon}
                      alt={option.coin}
                      width={20}
                      height={20}
                      loading="lazy"
                      className="flex-shrink-0"
                    />
                    <p className="flex gap-1">
                      <span className="flex-shrink-0">{option.name}</span>
                      <span className="opacity-60">({option.coin})</span>
                    </p>
                  </li>
                )}
                renderInput={params => <TextField {...params} label="Coin" />}
              />
            </div>
            <button className="block w-full rounded-md bg-green-500 py-4 font-bold uppercase text-black transition-colors hover:bg-green-400">
              Exchange
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Exchange;
