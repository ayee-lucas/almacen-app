import React, { useContext } from "react";
import NavSideBar from "./NavSideBar";
import {
  AiOutlineHome,
  AiOutlineDatabase,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineUserDelete,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import logo from "../../assets/Logos/blackboxDark.png";
import { DashboardContext } from "@/pages/Dashboard";

const SideBar = () => {
  const { nav, handleNav } = useContext(DashboardContext);
  return (
    <>
      <div
        className={
          nav
            ? "absolute inset-0 bg-black z-40 opacity-50 max-sm:hidden"
            : "absolute inset-0 bg-black -z-50 opacity-0  max-sm:hidden"
        }
      />
      <nav
        className={
          nav
            ? "absolute bg-neutral-950 p-6 w-[350px] h-full max-sm:w-full z-50 transition-all"
            : "absolute bg-neutral-950 p-6 w-[350px] h-full max-sm:w-full z-50 translate-x-[-100%] transition-all"
        }
      >
        <div className="relative flex justify-between items-center">
          <div className="flex items-center">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="text-white jetbrains-mono ml-1 text-[22px] font-medium">
              BLACKBOX
            </h1>
          </div>
          <AiOutlineClose
            onClick={handleNav}
            className="text-white text-[30px] cursor-pointer"
          />
        </div>
        <div className="h-[95%] p-2 text-white k2d font-light text-[20px]">
          <div className="pt-20">
            <NavSideBar name={"Home"} icon={<AiOutlineHome />} />
            <NavSideBar name={"Bodega"} icon={<AiOutlineDatabase />} />
            <NavSideBar name={"Users"} icon={<AiOutlineUser />} />
          </div>

          <div className="absolute bottom-10">
            <div className="mt-5 opacity-20 bg-white w-50 h-px" />
            <div className="flex items-center">
              <AiOutlineUserDelete />
              <button type="button" className="pl-3">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
