import React, { useContext } from "react";
import { AnimationContext } from "@/pages/Main/MainPage";

import "animate.css";

const SeparatorVideo = () => {
  const { setRefs, isVisible } = useContext(AnimationContext);


  return (
    <div className="h-screen w-full grid grid-rows-2 place-items-center items-center min-h-[100vh] bg-black text-white max-sm:grid-rows-1">
      <video
        src={"https://firebasestorage.googleapis.com/v0/b/almacen-app-d3ca2.appspot.com/o/backgrounds%2Fvideobg.mp4?alt=media&token=673e3e9a-cf67-4ece-81cb-541e4a876a6c"}
        autoPlay
        muted
        loop
        className="relative w-full h-full object-cover max-sm:hidden"
      ></video>
      <div className="flex flex-col justify-center items-center ml-10 p-20 max-sm:p-4 max-sm:ml-0 ">
        <h1 className="text-5xl font-bold text-center p-4 animate__animated animate__fadeInUp ">
          Amenidades
        </h1>
        <div
          className="p-4 text-lg max-sm:text-sm max-sm:text-justify text-center hide-animation"
          ref={(ref) => setRefs(ref, 3)}
        >
          <p>
            En nuestra empresa, nos preocupamos por ofrecer no solo soluciones
            de almacenamiento flexibles y seguras, sino también una experiencia
            completa y satisfactoria para nuestros clientes. Es por eso que
            ofrecemos una amplia gama de amenidades y servicios adicionales para
            complementar tu experiencia de almacenamiento.
          </p>
          <p className="mt-4 ">
            Desde acceso 24/7 a tus bodegas hasta sistemas avanzados de
            seguridad, pasando por opciones de seguro personalizadas y
            herramientas de administración de inventario, nuestras amenidades
            están diseñadas para hacer tu vida más fácil y eficiente. Descubre
            todo lo que tenemos para ofrecer y disfruta de la tranquilidad que
            viene con saber que tus bienes están en buenas mano
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-sm:hidden"></div>
    </div>
  );
};

export default SeparatorVideo;
