import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between">
      <nav className="flex w-full screen-max-width justify-between">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, id) => (
            <div
              key={id}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Store" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
