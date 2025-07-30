import React from "react";
import HeadingSection from "./_components/HeadingSection";
import StartSection from "./_components/StartSection";
import FooterSection from "./_components/FooterSection";

const HomePage = () => {
  return (
    <div className="bg-[url(/image/bg-image.svg)] flex flex-col items-center lg:items-start lg:h-[679px] lg:w-full  bg-[length:auto_100%] bg-[position:0px_center] md:bg-[position:calc(100%-100px)_center] bg-no-repeat    ">
      <div className="absolute flex flex-col mt-[57px] ml-0 lg:ml-[215px] w-97.5 lg:w-139 ">
        <div className=" flex flex-col  gap-7.5 pt-5 px-5 lg:pt-0 lg:px-0 ">
          <HeadingSection />
          <StartSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
