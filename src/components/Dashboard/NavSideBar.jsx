import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const NavSideBar = ({icon, name}) => {
  return (
    <>
      <div className="relative flex items-center pt-3">
        <AiOutlineHome className="text-white" />
        <a href="" className="pl-3">
          {name}
        </a>
      </div>
      <div className="mt-5 opacity-20 bg-white w-50 h-px max-sm:ml-0 max-sm:w-40 max-lg:w-60" />
    </>
  );
};

export default NavSideBar;
