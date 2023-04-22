import React from "react";
import Link from "next/link";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const Presentation = () => {
  return (
    <div className="flex justify-center items-center bg-presentation w-full h-screen bg-cover bg-center bg-fixed">
      <div className="absolute bg-black left-5 top-3 bottom-3 right-5 opacity-70" />
      <div className="z-[2]">
        <div className="underline-container">
          <h1 className=" underline-text text-white ropa-sans tracking-widest text-center text-[140px] font-bold">
            BLACKBOX
          </h1>
          <div className="underline" />
          <h3 className="underline-label text-white jetbrains-mono text-center text-[15px]">
            Almacenamos tu exito, cuidamos tus productos
          </h3>
        </div>
        <div className="z-[2] w-full flex justify-center items-center mt-20">
          <Link
            href={"/"}
            className="bg-black py-3 px-10 rounded-[10px] relative flex justify-between items-center"
          >
            <h1 className="text-white jetbrains-mono">Mapa</h1>
            <AiOutlineRight className="text-white absolute right-1 " />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-9">
            <h1 className="text-white text-sm tracking-widest jetbrains-mono pb-1">Mas Informacion</h1>
            <AiOutlineDown className="text-white absolute left-[45%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
