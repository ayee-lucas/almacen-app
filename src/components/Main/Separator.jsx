import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../assets/Logos/logoblackbox.png";
import { AnimationContext } from "@/pages/Main/MainPage";
import "animate.css";

const Separator = () => {
  const {setRefs, isVisible} = useContext(AnimationContext);

  return (
    <div className="h-screen w-full grid sm:grid-cols-2 items-center min-h-[100vh] "
    
    >
      <div className="flex flex-col justify-center items-center sm:ml-10 max-sm:p-6 logo-delay hide-animation"
      
            ref={(ref) => setRefs(ref, 0)}
      >
        <h1 className="text-5xl font-bold text-center p-4 animate__animated animate__fadeInUp ">
          Flexible y <span className=""> Seguro </span>
        </h1>
        <section className=""
        >
          <div
            className="text-center p-4 text-lg max-sm:text-[16px]"
          >
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
        </section>
      </div>
      <div className="flex justify-center items-center max-sm:hidden hide-animation logo-delay"
      
            ref={(ref) => setRefs(ref, 1)}
      >
        <Image src={logo} width={500} height={500} alt="logo" />
      </div>
    </div>
  );
};

export default Separator;
