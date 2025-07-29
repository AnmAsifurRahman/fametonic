import React from "react";
import Image from "next/image";
import bgImageIcon from "@/../public/image/bg-image.svg";

const HomePage = () => {
  return (
    <>
      <div className="bg-[url(/image/bg-image.svg)]  min-h-[667px] min-w-[666px] bg-right bg-no-repeat  ">
        {" "}
        <div className="absolute mt-53 ml-[215px] w-139">
          {" "}
          <div>
            <span className=" font-urbanist font-bold text-[35px] leading-[100%] tracking-[0] align-middle">
              Want to Turn Social Media Into a Profitable Career?
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
