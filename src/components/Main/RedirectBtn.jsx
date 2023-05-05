import React from "react";
import Link from "next/link";

import { AiOutlineRight } from "react-icons/ai";

const RedirectBtn = ({ isSecondVisible }) => {
  return (
    <div className="fixed bottom-10 right-10 z-50 max-sm:w-[full] max-sm:inset-x-1 max-sm:bottom-5 ">
      <Link
        href={"/DashboardPage"}
        className={
          !isSecondVisible
            ? "hidden"
            : "bg-black py-3 px-10 rounded-[50px] relative flex justify-between items-center animate__animated animate__fadeInUp ring-1 ring-white ring-inset"
        }
      >
        <h1 className="text-white jetbrains-mono animate__animated animate__wobble animate__delay-2s animate__repeat-3 max-sm:opacity-0 ">
          Ver
        </h1>
        <AiOutlineRight className="text-white absolute right-1 right-animation max-sm:right-5" />
      </Link>
    </div>
  );
};

export default RedirectBtn;
