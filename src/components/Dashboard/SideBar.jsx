import React from "react";
import NavSideBar from "./NavSideBar";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import Image from "next/image";
import logo from "../../assets/Logos/blackboxDark.png";

const SideBar = () => {
    const array = ["Home", "Bodega", "Sucursales", "Clientes"];
  return (
    <>
      <nav className="absolute bg-neutral-950 p-6 z-0 w-[350px] h-full">
        <div className="relative flex justify-between items-center">
          <div className="relative flex items-center">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="text-white jetbrains-mono text-[20px] font-medium">
              BLACKBOX
            </h1>
          </div>
          <AiOutlineMenu className="text-white text-[30px]" />
        </div>
        <div className="p-2 pt-20 text-white k2d font-light text-[20px]">
            <NavSideBar name={'Home'}/>
            <NavSideBar name={'Home'}/>
            <NavSideBar name={'Home'}/>
            <NavSideBar name={'Home'}/>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
