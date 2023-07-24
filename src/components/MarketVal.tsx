import { FC } from "react";
import { Inter } from "next/font/google";
import { market } from "../types/index.t";
interface MarketValProps {
  market: market;
}

const inter = Inter({ weight: "400", subsets: ["latin"] });

const MarketVal: FC<MarketValProps> = ({ market }) => {
  const { total_mcap, mcap_change } = market;
  return (
    <div className={inter.className}>
      <h1 className="mb-3 text-4xl">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <h1 className="text-2xl">
        The global crypto market cap is ${(total_mcap / 1e12).toFixed(2)}T, a{" "}
        <span
          className={
            Number(mcap_change) > 0 ? "text-[#81FF8D]" : "text-[#FF0000]"
          }
        >
          {mcap_change}%{" "}
        </span>
        increase over the last day.
      </h1>
    </div>
  );
};

export default MarketVal;
