import { FC, HTMLAttributes } from "react";
import { type coin } from "../types/index.t";

interface coinInfoProps {
  gridClass: HTMLAttributes<HTMLDivElement>["className"];
  price: coin;
}

const CoinInfo: FC<coinInfoProps> = ({ gridClass, price }) => {
  const coinPrice = Number(price.price_usd).toFixed(2);
  const change = price.percent_change_24h;

  return (
    <div className={gridClass}>
      <h1>{price.symbol}</h1>
      <h1 style={{ color: "#00C213" }}>{coinPrice} $</h1>
      <h1 className={Number(change) > 0 ? "text-[#81FF8D]" : "text-[#FF0000]"}>
        {change} %
      </h1>
    </div>
  );
};

export default CoinInfo;
