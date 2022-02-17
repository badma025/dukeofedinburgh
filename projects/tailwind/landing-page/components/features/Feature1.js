import React from "react";
import Image from "next/image";
import LeftRoundedRectangle from "../rounded-rectangle/Left";
import PurpleButton from "../buttons/PurpleButton";
function Feature1() {
  return (
    <section>
      {" "}
      {/* heading */}
      <div className="sm:first-letter:w-3/4 lg:w-5/2 mx-auto px-2 ">
        <h1 className="text-3xl text-center  text-bookmark-blue">Features</h1>
        <p className="text-center text-bookmark-grey mt-4">
          Our aim is to make this website quick and easy for you to bookmark
          tabs so you can access them on the go.
        </p>
      </div>
      {/* feature #1 */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <Image
              className="hero-img"
              src="/illustration-features-tab-1.png"
              height={346}
              width={536}
            />
          </div>
          {/* content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">
              Bookmark in one click
            </h1>
            <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full ">
              Organise your bookmarks however you like. Our simple drag-and drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <PurpleButton text="More Info"/>
            <LeftRoundedRectangle />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1;
