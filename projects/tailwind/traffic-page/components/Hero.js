import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";

function Hero() {
  return (
    <div className="py-10 px-8 mx-auto max-w-7xl">
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-white text-7xl pt-10 font-bold leading-tight">
            Tracking user movements around the world.
          </h1>
          <p className="pt-2 max-w-lg text-left text-xl tracking-wide leading-relxed text-gray-300">
            Whether it&apos;s your family or your business, we want to help you
            take care of the things that matter the most.
          </p>
          <div className="flex gap-x-5 items-center pt-12">
            <button className="p-4 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md transition hover:bg-teal-300">
              Get Trial Project
            </button>

            <button className="flex gap-x-2 items-center py-4 px-6 font-medium tracking-wide text-gray-300 transition hover:text-teal-300">
              <PlayIcon className="w-8 h-8 stroke-current" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center pl-24">
          <Image
            src="/hero.png"
            width={1314}
            height={1170}
            alt=""
            className="max-w-xl drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
