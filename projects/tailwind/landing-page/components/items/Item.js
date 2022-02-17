import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";

function Item({text}) {
  return (
    <div className="flex items-center border-b py-4">
      <span className="flex-1">
        {text}
        </span>
        <ChevronDownIcon className=" text-bookmark-purple h-7 w-7"/>
    </div>
  );
}

export default Item;
