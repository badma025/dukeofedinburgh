import Image from "next/image";
import PurpleButton from "./buttons/PurpleButton";
import WhiteButton from "./buttons/WhiteButton";
import RightRoundedRectangle from "./rounded-rectangle/Right";

function Hero() {
  return (
    <section className="relative">
      {/* content */}
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <section className="flex flex-1 flex-col lg:items-start">
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            A simple bookmark manager.
          </h2>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organise your favourite websites.
            Open a new browser tab and see results load instantly. Try it for
            free.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <PurpleButton text="Get It on Chrome" />
            <WhiteButton text=" Get It on Firefox"/>
          </div>
        </section>
        <div className="flex justify-center flex-1 mb-10 md-mb-16 lg:mb-0 z-10">
          <Image
            className="hero-img"
            src="/hero-bg.png"
            height={386}
            width={579}
          />
        </div>
      </div>
      {/* rounded rectangle */}
      <RightRoundedRectangle />
    </section>
  );
}

export default Hero;
