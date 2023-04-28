import React from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import "animate.css";

//Icons
import Link from 'next/link'

const Presentation = () => {
  return (
    <div className="bg-presentation w-full h-screen bg-cover bg-center bg-fixed overflow-hidden">
      <div className="absolute transition-all bg-black opacity-80 inset-0  bg-gradient-to-b from-black via-black gradient to-gray-800" />
      <div className="absolute bg-black inset-0 opacity-10" />
      <div className="flex items-center w-full h-full sm:justify-center">
        {/* Presentation Text */}
        <div className=" z-[2] max-sm:ml-6 ">
          <div className="underline-container ">
            <h1 className="underline-text animate__animated animate__fadeInUp transition-all text-white ropa-sans sm:tracking-widest text-center text-[140px] font-bold max-sm:hidden max-lg:text-[120px]">
              BLACKBOX
            </h1>
            <div className="underline max-sm:hidden" />
            <h3 className="underline-label max-sm:hidden text-white jetbrains-mono text-center text-[15px]">
              Almacenamos tu exito, cuidamos tus productos
            </h3>
          </div>
          {/** Mobile Title */}
          <div className="underline-container transition-all mb-44 text-white jetbrains-mono text-[60px] sm:hidden">
            <h1 className="underline-text animate__animated animate__slideInDown">
              BLACK
            </h1>
            <div className="underline" />
            <h1 className="underline-label  animate__animated animate__fadeInUp ">
              BOX
            </h1>
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
  );
};

export default Presentation;
