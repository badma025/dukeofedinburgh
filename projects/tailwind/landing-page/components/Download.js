import React from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";

function Download() {
  return (
    //   heading
    <section className="py-20 mt-20 ">
      <div className="sm:w-3/4 lg:w-5/2 mx-auto px-2 ">
        <h1 className="text-3xl text-center  text-bookmark-blue">
          Download the extension
        </h1>
        <p className="text-center text-bookmark-grey mt-4">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like to prioritise.
        </p>
      </div>
      {/* cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </section>
  );
}

export default Download;
