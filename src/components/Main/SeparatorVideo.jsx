import React, { useContext } from "react";
import bg from '@/assets/Backgrounds/bg_warehouse.jpg'
import Image from "next/image";
import { AnimationContext } from "@/pages/Main/MainPage";



import "animate.css";

const SeparatorVideo = () => {
  const { setRefs, isVisible } = useContext(AnimationContext);

  return (
    <div className="h-[50dvh] w-full place-items-center items-center  bg-black text-white max-sm:grid-rows-1 relative">
      <Image
      src={bg}
      fill
      className="absolute inset-0 w-full h-full object-cover object-center"
       />
      <div className="flex flex-col justify-center items-center h-full max-sm:p-4 max-sm:ml-0 bg-black/30 relative">
        <h1 className="text-5xl font-bold text-center p-4 animate__animated animate__fadeInUp ">
          Additionals
        </h1>
        <div
          className="p-4 text-lg max-sm:text-sm max-sm:text-justify text-center hide-animation"
          ref={(ref) => setRefs(ref, 3)}
        >
          <p>
            In our company, we care about providing not only flexible and secure
            storage solutions but also a complete and satisfactory experience
            for our clients. That is why we offer a wide range of amenities and
            additional services to complement your storage experience.
          </p>
          <p className="mt-4 ">
            From 24/7 access to your storage units to advanced security systems,
            customized insurance options, and inventory management tools, our
            amenities are designed to make your life easier and more efficient.
            Discover everything we have to offer and enjoy the peace of mind
            that comes with knowing your goods are in good hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeparatorVideo;
