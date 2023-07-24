import Image from "next/image";
import { Lexend_Deca } from "next/font/google";

const lexend_deca = Lexend_Deca({ weight: "variable", subsets: ["latin"] });

const HomeComponent = () => {
  return (
    <div className="relative flex items-center justify-between w-4/5 h-screen mx-auto home-container">
      <div>
        <h1 className={lexend_deca.className + " font-medium text-6xl mb-4"}>
          Seize every trading opportunity without fail
        </h1>
        <p
          className={lexend_deca.className + " font-light h-lg text-[#8D99AE]"}
        >
          Unlock the potential of decentralized wealth, where digital currencies
          redefine economic possibilities
        </p>
      </div>
      <div className="">
        <Image
          src="/Group 5.png"
          alt="Bitcoin logo"
          width={1368}
          height={1356}
          priority={true}
          sizes="(min-width: 1020px) calc(41.11vw - 21px)"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
