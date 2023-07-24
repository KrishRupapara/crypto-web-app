import { cache } from "react";

export const getMarketPrice = cache(async () => {
  const res = await fetch("https://api.coinlore.net/api/global/");

  if (!res.ok) throw new Error("Something went wrong");

  const data = await res.json();
  return data;
});

export const getCoinPrice = async () => {
  const res = await fetch(
    "https://api.coinlore.net/api/ticker/?id=90,80,518,33285,2710,58,2"
  );
  if (!res.ok) throw new Error("Something went wrong");

  const data = await res.json();
  return data;
};

export const getNews = cache(async () => {
  const res = await fetch(
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&extra_params=crypto-app",
    {
      headers: {
        authorization: `Apikey ${process.env.API_KEY}`,
      },
    }
  );

  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
});
