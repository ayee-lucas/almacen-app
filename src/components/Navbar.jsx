import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import logo from "../assets/Logos/blackboxDark.png";
import { DashboardContext } from "@/pages/Dashboard";

const Navbar = () => {
  const {nav, handleNav} = useContext(DashboardContext);
  return (
    <>
      <div className="flex h-[60px] w-full bg-black top-0 left-0 right-0">
        <div className="w-full h-full text-white flex items-center justify-between max-sm:justify-center">
          <div className="flex items-center ml-5">
            <button onClick={handleNav}>
              <AiOutlineMenu className="text-[25px] max-sm:absolute max-sm:left-5" />
            </button>
            <Link
              href={"/"}
              type="button"
              className="ml-5 text-[30px] jetbrains-mono font-semibold -tracking-widest max-sm:m-0"
            >
              BLACKBOX
            </Link>
          </div>
          <div className="mr-4 max-sm:hidden">
            <Image src={logo} width={50} height={50} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
