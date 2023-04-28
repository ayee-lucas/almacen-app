import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import logo from "../../assets/Logos/blackboxDark.png";

const SideBar = () => {
  return (
    <>
      <nav className="absolute bg-neutral-950 p-6 z-0 w-[350px] h-full">
        <div className="relative flex justify-between items-center">
            <div className="relative flex items-center">
                <Image src={logo} width={50} height={50} alt="logo"/>
                <h1 className="text-white jetbrains-mono text-[20px] font-medium">BLACKBOX</h1>
            </div>
            <AiOutlineMenu className="text-white text-[30px]" />
        </div>
        <div className="p-5 pt-20 text-white k2d text-[20px]">
           <div className="relative flex">
                <AiOutlineMenu className="text-white text-[30px]" />
                <a href="">Home</a>
           </div>
           <div className="bg-white w-80 h-px max-sm:ml-0 max-sm:w-40 max-lg:w-60" />
        </div>
      </nav>
    </>
  );
};

export default SideBar;
