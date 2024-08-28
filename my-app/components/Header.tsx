import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className=" mx-auto flex flex-col items-center justify-between font-bold">
        <div className="">
          <p>Omm&apos;s Project Portfolio</p>
        </div>
      </div>
      <div className="flex  text-white text-md mx-auto">
        <div className="flex flex-row gap-20 ">
          <Link href="/">Homepage</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contacts</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
