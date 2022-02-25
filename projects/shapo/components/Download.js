import Image from "next/image";

function Download() {
  return (
    <section className="bg-gray-900">
      <div className="container max-w-3xl flex flex-col  items-center">
        <h1 className="text-bold text-4xl mb-5">Download.</h1>
        <p className="text-lg text-center">
          (if you are using MacOS, go away, you are a menace to society.)
        </p>
      </div>

      <div className="w-80 bg-white h-0.5 mx-auto m-6" />

      <div className="lg:container lg:max-w-xl lg:flex  lg:flex-row lg:items-center">
        <div className="container lg:mr-6 items-center flex flex-col ">
          <h1 className="mb-4 text-xl">As a desktop app</h1>
          <Image src="/desktop.png" height={150} width={150} alt="" />
        </div>

        <div className="w-80 lg:h-80 lg:w-1.5 bg-white h-0.5 mx-auto m-6" />

        <div className="container lg:ml-6 items-center flex flex-col">
          <h1 className="mb-4 text-xl">As a Chrome Extension</h1>
          <Image src="/chrome.png" height={150} width={150} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Download;
