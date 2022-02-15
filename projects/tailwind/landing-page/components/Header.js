import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1">
          <Image src="/logo-bookmark.svg" width={148} height={25} alt="" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <button
            type="button"
            className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase hover:bg-red-700 transition-colors ease-linear">
            Login
          </button>

        </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <MenuIcon className="h-7 w-7" />
          </div>
      </nav>
    </header>
  );
}

export default Header;
