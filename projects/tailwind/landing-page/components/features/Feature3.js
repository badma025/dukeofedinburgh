import React from "react";
import Image from "next/image";
import LeftRoundedRectangle from "../rounded-rectangle/Left";
import PurpleButton from "../buttons/PurpleButton";

function Feature3() {
  return (
    <section>
      {/* feature #3 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <Image
              className="hero-img"
              src="/illustration-features-tab-3.png"
              height={346}
              width={536}
            />
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">
              Share your bookmarks
            </h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at a click of a button.
            </p>
            <PurpleButton text="More Info"/>
            <LeftRoundedRectangle />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature3;
