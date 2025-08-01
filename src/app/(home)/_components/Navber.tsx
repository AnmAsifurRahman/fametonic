import React from "react";
import Image from "next/image";
import webIcon from "@/../public/icon-web.svg";
import mobileIcon from "@/../public/icon-mobile.svg";

import menuIcon from "@/../public/menu.svg";

import Link from "next/link";

const Navber = () => {
  return (
    <div className=" relative flex pt-4 lg:pt-[35px] pr-[29px] pl-[140px] justify-between lg:px-[211px]  ">
      <Image
        src={mobileIcon}
        alt={"mobileIcon"}
        className=" w-auto block lg:hidden"
      />

      <Image src={webIcon} alt={"webIcon"} className="w-auto hidden lg:block" />

      <Image src={menuIcon} alt={"menuIcon"} className="block lg:hidden" />
      <div className="hidden lg:flex gap-10 justify-center font-semibold text-lg leading-[100%] tracking-[0%] text-[#A9A9A9]  ">
        <Link href={"#"}>About us</Link>
        <Link href={"#"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navber;
