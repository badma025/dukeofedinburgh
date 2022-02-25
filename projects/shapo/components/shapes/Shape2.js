import Image from "next/image";

function Shape2() {
  return (
    <div
      className=" p-6
    gap-4 mb-6 bg-gray-800 rounded-full shadow-2xl flex mx-auto items-center max-w-sm">
      <div className="h-20 w-20 mx-auto">
        <Image src="/improvements/Cube-2.png" height={250} width={250} alt="" />
      </div>
      <div className="h-20 w-20 mx-auto">
        <Image src="/improvements/Vector.png" height={213} width={250} alt="" />
      </div>
      <div className="h-20 w-20 mx-auto">
        <Image
          src="/improvements/purpleCube.png"
          height={250}
          width={250}
          alt=""
        />
      </div>
    </div>
  );
}

export default Shape2;
