import React from "react";
import logo from "../../../src/assets/images/svg/upb.jpg";
export default function Header() {
 
  return (
    <div className="px-6 pt-10 pb-4 kader-shadow shadow-xl ">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold inter    text-black  flex items-center gap-2">
            Bonjour, Dr Edi <span className="text-2xl">👋🏼</span>
          </h1>
          <p className="gray  text-sm font-medium inter  text-[13px]">
            Passez une bonne journée !
          </p>
        </div>

        <div>
          <img src={logo} alt="logo upb " className="w-14 h-13" />
        </div>
      </div>
      
    </div >
  );
}
