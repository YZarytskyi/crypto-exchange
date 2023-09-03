import axios from 'axios';

export async function getCoinsList() {
  try {
    const res = await fetch('https://api.binance.com/api/v1/exchangeInfo');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSelectedCoin(coinId: string) {
  try {
    const { data } = await axios.get(
      `https://api.binance.com/api/v3/ticker/price?symbol=${coinId}`,
    );
    return Number(data.price);
  } catch (error) {
    console.error(error);
  }
}
