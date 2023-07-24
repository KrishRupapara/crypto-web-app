import MarketVal from "./MarketVal";
import PriceContainer from "./PriceContainer";
import { getMarketPrice } from "@/utils";

const TodaysPrice = async () => {
  const [marketData] = await getMarketPrice();

  return (
    <section className="min-h-screen bg-[#1B1C2B] text-white pt-24" id="crypto">
      <div className="w-4/5 mx-auto ">
        <MarketVal market={marketData} />
        <PriceContainer />
      </div>
    </section>
  );
};

export default TodaysPrice;
