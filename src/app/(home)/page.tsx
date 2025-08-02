import React from "react";
import HeadingSection from "./_components/HeadingSection";
import StartSection from "./_components/StartSection";
import FooterSection from "./_components/FooterSection";

const HomePage = () => {
  return (
    <div className=" relative flex flex-col items-center lg:items-start">
      <div className=" flex flex-col mt-76 lg:mt-[57px] ml-0 lg:ml-[215px] max-w-97.5 lg:max-w-full w-full lg:w-139 mb-10  ">
        <div className=" flex flex-col  gap-7.5  px-5 lg:px-0 ">
          <HeadingSection />
          <StartSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
