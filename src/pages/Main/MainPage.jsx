import React, { useRef, useEffect, useState, createContext } from "react";

import Presentation from "@/components/Main/Presentation";
import AboutPage from "@/components/Main/AboutPage";
import Separator from "@/components/Main/Separator";
import SeparatorVideo from "@/components/Main/SeparatorVideo";


export const AnimationContext = createContext();

const MainPage = () => {
  const animationRef = useRef([]);

  const [isVisible, setIsVisible] = useState();

  console.log(isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("show-animation");
          } else {
            setIsVisible(false);
            entry.target.classList.remove("show-animation");
          }
          console.log("Intersection detected:", entry.target);
        });
      },
      { threshold: 0.5 }
    );

    animationRef.current.forEach((item) => observer.observe(item));
  }, []);

  const setRefs = (ref, index) => {
    animationRef.current[index] = ref;
  };

  const contextValue = {
    setRefs,
    isVisible,
  };

  return (
    <>
      {/* Presentation Component */}
      <Presentation />

      <AnimationContext.Provider value={contextValue}>
        {/* Separator */}
        <Separator />
        {/* Video Separator */}
        <SeparatorVideo />
        {/* About Page Component */}
        <AboutPage />
      </AnimationContext.Provider>
    </>
  );
};

export default MainPage;
