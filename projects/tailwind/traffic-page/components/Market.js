import React from "react";

function Market() {
  return (
    <div className="py-16 px-8 max-w-7xl mx-auto">
      <div className="flex gap-x-8 justify-between">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold leading-tight text-white">Must-have to Win Your Online Market</h2>
        </div>
        <div className="w-1/2">
          <p className="pt-6 text-left leading-relaxed text-xl text-gray-300">
            Found something that works for you? Request a quote from our site or
            call an agent and we&apos;ll get back to you as soon as possible.
          </p>
          <button className="py-4 px-8 mt-8 font-medium tracking-wider bg-teal-200 rounded-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Market;
