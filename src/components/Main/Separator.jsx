import React, { useContext } from "react";
import Image from "next/image";
import logo from "../../assets/Logos/blackboxText.png";
import { AnimationContext } from "@/pages/Main/MainPage";
import "animate.css";

const Separator = () => {
  const { setRefs, isVisible } = useContext(AnimationContext);

  return (
    <div className="h-screen w-full grid sm:grid-cols-2 items-center min-h-[100vh] ">
      <div
        className="flex flex-col justify-center items-center sm:ml-10 max-sm:p-6 logo-delay hide-animation"
        ref={(ref) => setRefs(ref, 0)}
      >
        <h1 className="text-5xl font-bold text-center p-4 animate__animated animate__fadeInUp ">
          Flexible & Secure
        </h1>
        <section className="">
          <div className="text-center p-4 text-lg max-sm:text-[16px]">
            <p>
              We are a warehousing company committed to providing safe and
              reliable storage solutions for our clients. With years of
              experience, we understand the importance of security and proper
              handling of goods. Our goal is to be the trusted partner of our
              clients in the management and storage of their good.
            </p>
            <p className="mt-4 ">
              Trust us for the storage of your products, and focus on growing your business without worries.
           </p>
          </div>
        </section>
      </div>
      <div
        className="flex justify-center items-center max-sm:hidden hide-animation logo-delay"
        ref={(ref) => setRefs(ref, 1)}
      >
        <Image src={logo} width={500} height={500} alt="logo" />
      </div>
    </div>
  );
};

export default Separator;
