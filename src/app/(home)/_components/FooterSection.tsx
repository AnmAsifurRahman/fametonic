import React from "react";

const FooterSection = () => {
  return (
    <p className=" flex flex-col mx-auto lg:mx-0  w-[281px] lg:w-[516px] gap-[19px] lg:gap-3  font-medium leading-[100%] tracking-normal align-middle text-[#ABABAB] order-2 lg:order-3">
      <span className=" font-figtree text-center lg:text-left text-xs">
        By clicking &quot;Get Started&quot;, you agree with Terms and
        Conditions, Privacy Policy, Subscription Terms
      </span>
      <span className=" font-nunito lg:font-figtree text-center lg:text-left text-[10px]">
        Fametonic 2025 ©All Rights Reserved.
      </span>
    </p>
  );
};

export default FooterSection;
