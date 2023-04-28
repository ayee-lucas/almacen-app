import React from "react";
import Image from "next/image";
import logo from "../../assets/Logos/logoblackbox.png";
import "animate.css";

const Separator = () => {
  return (
    <div className="h-screen w-full grid sm:grid-cols-2 items-center min-h-[100vh]">
      <div className="flex flex-col justify-center items-center sm:ml-10 max-sm:p-6">
        <h1 className="text-5xl font-bold text-center p-4 animate__animated animate__fadeInUp ">
          Flexible y <span className=""> Seguro </span>
        </h1>
        <div className="text-center p-4 text-lg max-sm:text-[16px]">
          <p>
              Somos una empresa almacenadora comprometida en ofrecer soluciones
              de almacenamiento seguras y confiables para nuestros clientes. Con
              años de experiencia, comprendemos la importancia de la seguridad y
              el manejo adecuado de los bienes. Nuestro objetivo es ser el socio
              de confianza de nuestros clientes en el manejo y almacenamiento de
              sus bienes.
          </p>
          <p className="mt-4 ">
            Confía en nosotros para el almacenamiento de tus productos, y
            enfócate en hacer crecer tu negocio sin preocupaciones.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-sm:hidden">

      <Image src={logo} width={500} height={500} alt="logo" />
      </div>

    </div>
  );
};

export default Separator;
