import Link from "next/link";
import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="fixed top-0 z-40 w-full text-lg text-white bg-violet-950">
      {/* scroll > 200 color violet-900 */}
      <div className="flex items-center justify-between w-11/12 py-5 mx-auto">
        <div>
          <Link href="/" className="text-xl font-bold">
            Crypto
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Market</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
