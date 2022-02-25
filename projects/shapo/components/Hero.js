import Image from "next/image";

function Hero() {
  return (
    <main className=" bg-gray-900 items-center mx-auto lg:max-w-4xl md:max-w-2xl sm:max-w-xl flex sm:flex-row flex-col-reverse pb-20 ">
      {/* inner div */}
      <div className="sm:flex-1 text-5xl mt-20">
        {/* actual hero content */}
        <div className="max-w-xs items-center">
            {/* text */}
          <div>
            <h1 className="font-light text-2xl text-center lg:text-3xl sm:text-left">
              The <span className="underline">best</span> quality shapes.
              Delivered to your door.
            </h1>
          </div>
          {/* button */}
          <div className="relative flex sm:left-0 left-20 sm:items-start">
            <button className="font-light text-base rounded-full mt-8 text-gray-900 bg-white p-4">
              Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="justify-end mt-20 object-contain">
        <Image src="/blueCube.png" height={284} width={250} alt="" />
      </div>
    </main>
  );
}

export default Hero;
