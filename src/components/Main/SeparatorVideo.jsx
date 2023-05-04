import React, { useContext } from "react";
import { AnimationContext } from "@/pages/Main/MainPage";
import videourl from "../../assets/Backgrounds/videobg.mp4";



import "animate.css";

const SeparatorVideo = () => {
  const { setRefs, isVisible } = useContext(AnimationContext);

  return (
    <div className="h-screen w-full grid grid-rows-2 place-items-center items-center min-h-[100vh] bg-black text-white max-sm:grid-rows-1">
      <video
        src={videourl}
        autoPlay muted loop
        className="relative w-full h-full object-cover max-sm:hidden"
      ></video>
      <div className="flex flex-col justify-center items-center ml-10 p-20 max-sm:p-4 max-sm:ml-0 ">
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
      <div className="flex justify-center items-center max-sm:hidden"></div>
    </div>
  );
};

export default SeparatorVideo;
