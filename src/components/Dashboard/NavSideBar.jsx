import React from "react";

const NavSideBar = ({icon, name}) => {
  return (
    <>
      <div className="relative flex items-center pt-3 max-sm:justify-center">
        {icon}
        <button type="button" className="pl-3">{name}</button>
      </div>
      <div className="mt-5 opacity-20 bg-white w-50 h-px max-sm:mx-10" />
    </>
  );
};

export default NavSideBar;
