import React from "react";

const AboutPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative bg-presentationAboutPage h-full w-full">
        <div className="absolute bg-black inset-0 opacity-40" />
        <div className="underline-container">
          <h1 className="pl-20 pt-20 underline-text text-white jetbrains-mono tracking-tighter text-[80px] font-bold">
            About Us
          </h1>
          <div className="underlineAboutPage" />
        </div>
        <div className="flex justify-between p-10">
          <div className="text-justify pl-2 pr-48">
            <h2 className="about-label text-white k2d tracking-normal text-[35px]">
              Storage Solutions
            </h2>
            <p className="about-p text-white k2d tracking-widest text-[20px]">
              Somos una empresa almacenadora comprometida en ofrecer soluciones
              de almacenamiento seguras y confiables para nuestros clientes. Con
              años de experiencia, comprendemos la importancia de la seguridad y
              el manejo adecuado de los bienes. Nuestro objetivo es ser el socio
              de confianza de nuestros clientes en el manejo y almacenamiento de
              sus bienes.
            </p>
          </div>
          <div className="text-justify mr-12 pl-2 pr-20">
            <h2 className="about-label text-black k2d tracking-tighter text-[35px] font-medium">
              Offers
            </h2>
            <p className="about-p text-black k2d tracking-wider text-[20px] font-semibold">
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
