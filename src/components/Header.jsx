import React from "react";

export function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[400px] h-20 bg-red-400 rounded-2xl mt-32 text-white font-semibold p-2 flex justify-between">
        <div className="">
          <p>My balance</p>
          <span>$921.48</span>
        </div>
        <img src="/image/logo.svg" alt="Logo"></img>
      </div>
    </div>
  );
}
