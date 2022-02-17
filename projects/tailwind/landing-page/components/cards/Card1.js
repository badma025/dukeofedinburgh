import React from "react";
import Image from "next/image"
import PurpleButton from "../buttons/PurpleButton";
import DownloadPurpleButton from "../buttons/DownloadPurpleButton";

function Card1() {
  return (
    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
      <div className="p-6 flex flex-col items-center">
        <Image src="/logo-chrome.svg" alt="" height={100} width={102} />
        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
        <p className="mb-2 text-bookmark-grey font-light">
          Minimum version 4.2
        </p>
      </div>
      <hr className="border-b border-bookmark-white" />
      <div className="flex p-6">
        <DownloadPurpleButton/>
      </div>
    </div>
  );
}

export default Card1;
