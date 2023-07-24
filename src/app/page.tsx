import HomePage from "@/components/HomePage";
import NewsInfo from "@/components/NewsInfo";
import TodaysPrice from "@/components/TodaysPrice";

import { Lato } from "next/font/google";

const lato700 = Lato({ weight: "700", subsets: ["latin"] });
const lato400 = Lato({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
      <TodaysPrice />
      <NewsInfo lato={lato400} />
    </>
  );
}
