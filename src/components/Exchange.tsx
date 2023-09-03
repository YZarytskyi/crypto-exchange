'use client';

import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { getCoinPairPrice } from '@/lib/api';
import { numberToFixed } from '@/helpers/numberToFixed';
import SectionContainer from '@/components/SectionContainer';
import { getCoinOptions, sendCoinsOptions } from '@/data/coins';
import { CoinsSelect } from '@/types/types';

import BTCIcon from '../../public/BTC.png';
import ETHIcon from '../../public/ETH.png';
import { Spinner } from '@/components/Spinner';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCoinPairPrice();

    setSendCoinInput(1);
  }, [sendCoin, getCoin]);

  async function fetchCoinPairPrice() {
    setIsLoading(true);
    setGetCoinInput('');

    const price = await getCoinPairPrice(`${sendCoin.coin}${getCoin.coin}`);

    if (price) {
      const formattedPrice = price + price * 0.05;
      setCurrentPrice(formattedPrice);
      setGetCoinInput(numberToFixed((sendCoinInput || 0) * formattedPrice));
    }

    setIsLoading(false);
  }

  const onChangeCoin = (
    e: SyntheticEvent,
    newCoin: CoinsSelect | null,
    setState: Dispatch<SetStateAction<CoinsSelect>>,
  ): void => {
    if (newCoin) setState(newCoin);
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
                onChange={(e, newCoin) => onChangeCoin(e, newCoin, setSendCoin)}
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

            <div className="mb-6 flex items-center justify-between">
              <p className="flex items-center gap-2">
                1 {sendCoin.coin} ={' '}
                {isLoading ? (
                  <Spinner className="inline-flex h-[20px] w-[20px]" />
                ) : (
                  currentPrice
                )}{' '}
                {getCoin.coin}
              </p>
              <button onClick={fetchCoinPairPrice}>Update Price</button>
            </div>

            <label htmlFor="get-coins" className="mb-2 block text-xs">
              You receive
            </label>
            <div className="relative mb-8 flex gap-3">
              <input
                id="get-coins"
                type="number"
                value={getCoinInput}
                onChange={onChangeGetCoinInput}
                className="focus:shadow-inputFocus border-input flex-grow rounded-md border-[1px] bg-transparent px-4 py-2 outline-none"
              />
              {isLoading && (
                <Spinner className="absolute left-[18px] top-1/2 h-[22px] w-[22px] -translate-y-1/2" />
              )}
              <Autocomplete
                id="get-coins-list"
                className="w-[150px] focus-within:w-full"
                disableClearable
                blurOnSelect
                value={getCoin}
                onChange={(e, newCoin) => onChangeCoin(e, newCoin, setGetCoin)}
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
