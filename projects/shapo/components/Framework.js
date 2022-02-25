import React from "react";
import Image from "next/image";

function Framework() {
  return (
    <section className="bg-gray-900 pb-20">
      <div className=" container sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <div className="bg-gray-900 text-center mb-12 text-3xl">
          <h2>Works with your favourite framework.</h2>
        </div>
        <div className="flex flex-col  sm:flex-row flex-1 items-center md:gap-12 lg:gap-24">
          <div className="mb-8 h-40 w-40 mx-auto">
            <Image src="/react.png" height={500} width={500} alt="" />
          </div>
          <div className="mb-8 h-40 w-40 mx-auto">
            <Image src="/angular.png" height={500} width={500} alt="" />
          </div>
          <div className="mb-8 h-40 w-40 mx-auto">
            <Image src="/vue.png" height={500} width={500} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Framework;
