import { CameraIcon, ChatIcon, GiftIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-bookmark-blue py-8 ">
      <div className="container flex flex-col md:flex-row items-center">
        <div className=" flex flex-1 flex-wrap items-center justify-center gap-12 ">
          <Image
            src="/logo-bookmark-white.png"
            width={148}
            height={25}
            alt=""
          />
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
