import React from "react";
import Presentation from "../../components/Main/Presentation";
import AboutPage from "../../components/Main/AboutPage";
import Separator from "@/components/Main/Separator";
import SeparatorVideo from "@/components/Main/SeparatorVideo";



const  MainPage = () => {
  return (
    <>
      {/* Presentation Component */}
      <Presentation />

      {/* Separator */}
      <Separator />

      {/* Video Separator */}

      <SeparatorVideo />

      {/* About Page Component */}
      <AboutPage />
    </>
  );
};

export default MainPage;
