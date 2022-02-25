import Image from "next/image"

function Shape1() {
  return (
    <div className="mb-6 bg-gray-800 p-6
    gap-4 rounded-full shadow-2xl flex mx-auto items-center">
      <div className="h-20 w-20 mx-auto">
        <Image
          src="/improvements/blackShape.png"
          height={213}
          width={250}
          alt=""
        />
      </div>
      <div className="h-20 w-20 mx-auto">
        <Image src="/improvements/Vector.png" height={213} width={250} alt="" />
      </div>
      <div className="h-20 w-20 mx-auto">
        <Image src="/improvements/cube.png" height={213} width={250} alt="" />
      </div>
    </div>
  );
}

export default Shape1