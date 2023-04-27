import React from "react";

const AboutPage = () => {
  return (
    <div className="h-screen w-full bg-presentationAboutPage bg-cover max-sm:bg-center max-lg:h-full">
      <div className="relative h-full w-full">
        <div className="absolute transition-all bg-black inset-0 opacity-70 max-sm:opacity-90 max-sm:bg-gradient-to-b max-sm:from-black max-sm:via-black gradient" />
        <div className="underline-container">
          <h1
            className="pl-20 pt-20 underline-text text-white jetbrains-mono tracking-tighter text-[80px] font-bold
                           max-sm:text-[50px] max-sm:pl-5 max-sm:pt-6 "
          >
            About Us
          </h1>
          <div className="underlineAboutPage" />
        </div>
        <div className="flex justify-evenly p-20 relative text-[18px]
                          max-sm:grid max-sm:grid-rows-3 max-sm:gap-1 max-sm:p-0 max-sm:px-2 max-sm:py-5 max-sm:text-[15px]"
        >
          <div className="text-justify pr-32 max-lg:pr-10 max-sm:px-4">
            <h2 className=" text-white k2d text-[40px]">
              Storage Solutions
            </h2>
            <p className=" text-white tracking-wider mt-5">
              Somos una empresa almacenadora comprometida en ofrecer soluciones
              de almacenamiento seguras y confiables para nuestros clientes. Con
              años de experiencia, comprendemos la importancia de la seguridad y
              el manejo adecuado de los bienes. Nuestro objetivo es ser el socio
              de confianza de nuestros clientes en el manejo y almacenamiento de
              sus bienes.
            </p>
          </div>
          <div className="text-justify max-lg:pl-10 max-sm:px-4 max-sm:mt-5">
            <h2 className=" text-white k2d text-[40px]">
              Offers
            </h2>
            <p className=" text-white tracking-wider mt-5">
              Ofrecemos un amplio rango de servicios de almacenamiento y
              trabajamos con cada cliente para personalizar nuestros servicios y
              adaptarnos a sus necesidades específicas. Nos esforzamos por
              brindar un servicio excepcional y estamos dedicados a garantizar
              que cada cliente se sienta satisfecho con nuestros servicios de
              almacenamiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
