import React from "react";
import Image from "next/image";
import chevronIcon from "@/../public/image/chevron.svg";

const StartSection = () => {
  return (
    <div className=" flex flex-col lg:w-[313px] gap-2.5 order-3 lg:order-2">
      <button className=" flex flex-row items-center justify-center w-full max-w-[350px] lg:w-[313px] min-h-10 rounded-[10px] py-2 px-10 gap-2.5 bg-[#FC004E] [box-shadow:_2px_2px_10px_0px_rgba(0_231_249_/_1)] cursor-pointer">
        <span className=" font-urbanist lg:font-figtree font-bold text-xl leading-[100%] tracking-normal align-middle">
          GET STARTED
        </span>
        <Image src={chevronIcon} alt={"Chevron Icon"} />
      </button>
      <span className=" font-figtree font-normal text-xs leading-4 tracking-normal align-middle text-center">
        1-minute quiz for personalized Insights
      </span>
    </div>
  );
};

export default StartSection;
