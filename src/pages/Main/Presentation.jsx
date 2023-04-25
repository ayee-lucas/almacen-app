import React from 'react'
import Link from 'next/link'
import AboutPage from '../../components/AboutPage'
//Icons

import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const Presentation = () => {
  return (
    <>
      <div className="bg-presentation w-full h-screen bg-cover bg-center bg-fixed overflow-hidden">
        <div className="absolute transition-all bg-black left-5 top-3 bottom-3 right-5 opacity-75 max-sm:inset-0 max-sm:opacity-90 max-sm:bg-gradient-to-b max-sm:from-black max-sm:via-black gradient" />
        <div className="flex items-center w-full h-full sm:justify-center">
          {/* Presentation Text */}
          <div className=" z-[2] max-sm:ml-6 ">
            <div className="underline-container">
              <h1 className="underline-text transition-all text-white ropa-sans sm:tracking-widest text-center text-[140px] font-bold max-sm:hidden max-lg:text-[120px]">
                BLACKBOX
              </h1>
              <div className="underline max-sm:hidden" />
              <h3 className="underline-label max-sm:hidden text-white jetbrains-mono text-center text-[15px]">
                Almacenamos tu exito, cuidamos tus productos
              </h3>
            </div>
            {/** Mobile Title */}
            <div className="underline-container transition-all mb-44 text-white jetbrains-mono text-[60px] sm:hidden">
              <h1 className="underline-text">BLACK</h1>
              <div className="underline" />
              <h1 className="underline-label">BOX</h1>
            </div>
            <div className="z-[2] max-sm:absolute max-sm:left-[30%] mt-20 max-sm:ml-4 flex justify-center">
              {/* Map Link */}
              <Link
                href={"/"}
                className="bg-black py-3 px-10 rounded-[10px] relative flex justify-between items-center"
              >
                <h1 className="text-white jetbrains-mono">Mapa</h1>
                <AiOutlineRight className="text-white absolute right-1 right-animation" />
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Down Indicator */}
        <div className="flex justify-center items-center w-full bounce-animation">
          <div className="absolute bottom-9">
            <h1 className="text-white text-sm tracking-widest jetbrains-mono pb-1">
              Mas Informacion
            </h1>
            <AiOutlineDown className="text-white absolute left-[45%]" />
          </div>
        </div>
      </div>
      {/* About Page Component */}
      <AboutPage />
    </>
  );
};

export default Presentation;