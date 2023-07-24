import { Lato } from "next/font/google";
import { getCoinPrice } from "@/utils";
import dynamic from "next/dynamic";
import { type coin } from "@/types/index.t";

const CoinInfo = dynamic(() => import("@/components/CoinInfo"), { ssr: false });
const lato = Lato({ weight: "400", subsets: ["latin"] });

const PriceContainer = async () => {
  const price: Array<coin> = await getCoinPrice();

  return (
    <div
      className={
        lato.className + " grid grid-cols-2 gap-4 mt-20 coin-container"
      }
    >
      <CoinInfo gridClass="row-start-1 col-start-1 btc" price={price[0]} />
      <section className="grid grid-rows-5 gap-4 lg:grid-cols-3 coins">
        {price.map(
          (coin, index) =>
            index > 0 && <CoinInfo gridClass={"coin-" + index} price={coin} />
        )}
      </section>
    </div>
  );
};

export default PriceContainer;
