import Link from "next/link";
import { Krona_One, Lato } from "next/font/google";

const krona_one = Krona_One({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "700", subsets: ["latin"] });

const Nav = () => {
  return (
    <nav className="fixed top-0 z-40 w-full text-navbar bg-primary">
      <div className="flex items-center justify-between w-4/5 py-5 mx-auto">
        <div className={krona_one.className}>
          <Link href="/" className="text-3xl">
            <h1 className="logo">K3Coin</h1>
          </Link>
        </div>
        <div className={"flex gap-4 text-xl " + lato.className}>
          <Link href="#crypto">Cryptocurrency</Link>
          <Link href="/">Exchange</Link>
          <Link href="/about">Product</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
