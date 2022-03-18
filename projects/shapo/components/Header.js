import Image from "next/image";
import React from "react";
import { MenuIcon, MoonIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="">
      <nav className="container py-4 mb-10 mt-4 sm:mt-12 flex items-center">
        <div className="flex flex-1 items-center sm:gap-12 md:gap-24">
          <Image src="/Shapo..png " height={26} width={89} alt="" />

          <ul className="hidden gap-8 text-gray-500 sm:text-sm md:text-lg sm:flex sm:-mr-4  md:-mr-14 lg:mr-28">
            <li className="header_bounce">About</li>
            <li className="header_bounce">Contact</li>
            <li className="header_bounce">Enquiries</li>
            <li className="header_bounce">Donate</li>
          </ul>

          {/* icons */}
          <div className=" hidden sm:flex items-center gap-5">
            <div className="h-7 w-7 rounded-full">
              <ShoppingCartIcon className="header_bounce" />
            </div>
            <div className="h-7 w-7 rounded-full">
              <MoonIcon className="header_bounce" />
            </div>
          </div>
        </div>
        <div className="justify-end hidden sm:flex lg:text-2xl">Login</div>

        <div className="h-10 w-10 justify-end sm:hidden">
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
