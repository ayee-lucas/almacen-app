import React from "react";

const AboutPage = () => {
  return (
    <div className="h-screen w-full bg-presentationAboutPage bg-cover max-sm:bg-center max-lg:h-full lg:h-full">
      <div className="relative h-full w-full">
        <div
          className="absolute transition-all bg-black inset-0 opacity-70 
                        max-sm:opacity-70 max-sm:bg-gradient-to-b max-sm:from-black max-sm:via-black gradient"
        />
        <div className="absolute transition-all bg-black inset-0 opacity-0 max-sm:opacity-60" />
        <div className="underline-container">
          <h1
            className="pl-20 pt-20 underline-text text-white merryweather tracking-tighter text-[80px] font-light
                       max-sm:text-[50px] max-sm:pl-8 max-sm:pt-8 max-lg:text-[70px]"
          >
            Nosotros
            <div className="bg-white w-80 h-px max-sm:ml-0 max-sm:w-40 max-lg:w-60" />
          </h1>
        </div>
        <div
          className="relative flex justify-between p-20 pb-16 text-[20px] max-lg:pt-16 max-lg:pb-32
                     max-sm:-pb-10 max-sm:grid max-sm:grid-rows-2 max-sm:gap-1 max-sm:p-0 max-sm:px-3 max-sm:py-8 max-sm:pb-32 max-sm:text-[15px]"
        >
          <div className="text-justify pr-36 max-lg:pr-12 max-sm:px-4 max-sm:text-sm">
            <h2 className=" text-white ubuntu text-[40px] max-lg:text-[28px]">
              Historia
            </h2>
            <p className=" text-white tracking-wider mt-5 max-lg:text-[16px] max-lg:mt-7">
              Nuestra historia se remonta a hace más de una década, cuando un
              grupo de emprendedores decidió crear una empresa dedicada a
              ofrecer soluciones de almacenamiento flexibles y seguras para
              negocios de todos los tamaños.<br/> A lo largo de los años, hemos
              crecido y evolucionado junto con nuestros clientes, adaptándonos a
              las necesidades cambiantes del mercado y expandiendo nuestros
              servicios a nuevas áreas geográficas.<br/> Hoy en día, somos una
              empresa líder en el sector de alquiler de bodegas y
              almacenamiento, y seguimos comprometidos con nuestra misión de
              ofrecer soluciones de calidad y confiables a nuestros clientes en
              todo momento.
            </p>
          </div>
          <div className="text-justify max-sm:px-4 max-sm:mt-4">
            <h2 className=" text-white ubuntu text-[40px] max-lg:text-[28px]">
              Que hacemos por ti?
            </h2>
            <p className=" text-white tracking-wider mt-5 max-lg:text-[16px] max-lg:mt-7">
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
