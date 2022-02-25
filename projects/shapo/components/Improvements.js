import React from "react";
import Image from "next/image";
import Shape1 from "./shapes/Shape1";
import Shape2 from "./shapes/Shape2";
import Shape3 from "./shapes/Shape3";

function Improvements() {
  return (
    <section className="bg-gray-900 pb-20">
      <div className="container max-w-3xl">
        {/* text */}
        <div
          className="bg-gray-900 
            text-center mb-14">
          <div className="text-3xl mb-7">We&apos;ve made improvements.</div>
          <div className="font-light md:text-xl">
            We only want to give you the best of the best. Version 2 is packed
            with new features, designs, colours and more. And guess what?
            It&apos;s completely free!
          </div>
        </div>

        {/* shapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-60 sm:place-items-center ">
          <Shape1 />
          <Shape2 />
          <Shape3 />
        </div>
      </div>
    </section>
  );
}

export default Improvements;
