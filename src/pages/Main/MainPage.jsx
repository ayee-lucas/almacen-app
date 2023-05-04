import React, { useRef, useEffect, useState, createContext, use } from "react";
import RedirectBtn from "@/components/Main/RedirectBtn";
import Presentation from "@/components/Main/Presentation";
import AboutPage from "@/components/Main/AboutPage";
import Separator from "@/components/Main/Separator";
import SeparatorVideo from "@/components/Main/SeparatorVideo";
import Footer from "@/components/Main/Footer";
import LoadingFirst from "@/components/Loader/LoadingFirst";

export const AnimationContext = createContext();

const MainPage = () => {
  const animationRef = useRef([]);

  const [isVisible, setIsVisible] = useState();

  const [isSecondVisible, setIsSecondVisible] = useState(false);

  const [toggleVisible, setToggleVisible] = useState('hidden');

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

    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleVisible('visible');
    },  3000);
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
      <LoadingFirst />

      {/* Presentation Component */}
      <Presentation />
      <RedirectBtn isSecondVisible={isSecondVisible} />
      <AnimationContext.Provider value={contextValue}>
        <div className={toggleVisible}>
        {/* Separator */}
        <Separator />
        {/* Video Separator */}
        <SeparatorVideo />
        {/* About Page Component */}
        <AboutPage />

      <Footer />
        </div>
      </AnimationContext.Provider>
    </>
  );
};

export default MainPage;
