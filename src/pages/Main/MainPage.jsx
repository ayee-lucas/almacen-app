import React from "react";
import Presentation from "../../components/Main/Presentation";
import AboutPage from "../../components/Main/AboutPage";
import Separator from "@/components/Main/Separator";
import SeparatorVideo from "@/components/Main/SeparatorVideo";

const MainPage = () => {
  return (
    <>
      {/* Presentation Component */}
      <section>
        <Presentation />
      </section>

      {/* Separator */}

      <section>
        <Separator />
      </section>

      {/* Video Separator */}

      <section>
        <SeparatorVideo />
      </section>

      {/* About Page Component */}
      <section>
        <AboutPage />
      </section>
    </>
  );
};

export default MainPage;
