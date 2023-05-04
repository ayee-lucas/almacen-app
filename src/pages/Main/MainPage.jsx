import React, { useRef, useEffect, useState, createContext } from "react";
import Presentation from "@/components/Main/Presentation";
import AboutPage from "@/components/Main/AboutPage";
import Separator from "@/components/Main/Separator";
import SeparatorVideo from "@/components/Main/SeparatorVideo";
import Footer from "@/components/Main/Footer";


export const AnimationContext = createContext();

const MainPage = () => {
  const animationRef = useRef([]);

  const [isVisible, setIsVisible] = useState();

  const [isSecondVisible, setIsSecondVisible] = useState(false);

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
        });
      },
      { threshold: 0.4 }
    );

    animationRef.current.forEach((item) => observer.observe(item));
  }, []);


  useEffect(() => {
    const firstRef = animationRef.current[0];
    const callback = () => {
      console.log("First Ref is intersecting");
      setIsSecondVisible(true);
    };

        const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
         observer.disconnect();
      }
    });

    if (firstRef) {
      observer.observe(firstRef);
    }

    return() => {
      observer.disconnect();
    }

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
      <RedirectBtn isSecondVisible={isSecondVisible} />
      <AnimationContext.Provider value={contextValue}>
        {/* Separator */}
        <Separator />
        {/* Video Separator */}
        <SeparatorVideo />
        {/* About Page Component */}
        <AboutPage />
      </AnimationContext.Provider>
      <Footer/>

    </>
  );
};

export default MainPage;
