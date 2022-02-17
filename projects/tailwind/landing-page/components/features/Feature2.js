import React from "react";
import Image from "next/image";
import RightRoundedRectangle from "../rounded-rectangle/Right";
import PurpleButton from "../buttons/PurpleButton";
function Feature2() {
  return (
    <section>
 
      {/* feature #2 */}
      <div className="relative mt-20 lg:mt-52">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          {/* image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <Image
              className="hero-img"
              src="/illustration-features-tab-2.png"
              height={393}
              width={478}
            />
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">
              Intelligent Search
            </h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">
           Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks.
            </p>
           <PurpleButton text="More Info"/>
            <RightRoundedRectangle />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature2;
