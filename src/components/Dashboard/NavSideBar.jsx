import React, { useContext } from "react";
import { DashboardContext } from "@/pages/Dashboard";

const NavSideBar = ({ icon, name }) => {
  const { nav, handleNav, setPage } = useContext(DashboardContext);

  const handleClick = (page) => {
    setPage(page);
    console.log(page);
  };

  return (
    <>
      <div className="relative flex items-center pt-3 max-sm:justify-center">
        {icon}
        <button
          type="button"
          onClick={() => handleClick(`${name}`)}
          className="pl-3"
        >
          {name}
        </button>
      </div>
      <div className="mt-5 opacity-20 bg-white w-50 h-px max-sm:mx-10" />
    </>
  );
};

export default NavSideBar;
