import Image from "next/image";

function Shape3() {
  return (
    <div
      className="mb-6 bg-gray-800 p-6
    gap-4 rounded-full shadow-2xl flex mx-auto items-center max-w-sm">
      <div className="h-20 w-20 mx-auto">
        <Image
          src="/improvements/greenDoughnut.png"
          height={213}
          width={250}
          alt=""
        />
      </div>
      <div className="h-20 w-20 mx-auto">
        <Image src="/improvements/Vector.png" height={213} width={250} alt="" />
      </div>
      <div className="h-20 w-20 mx-auto">
        <Image
          src="/improvements/orangeDoughnut.png"
          height={213}
          width={250}
          alt=""
        />
      </div>
    </div>
  );
}

export default Shape3;
