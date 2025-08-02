import React from "react";
import Image from "next/image";
import logoWebIcon from "@/../public/image/logo-web.svg";
import logoMobileIcon from "@/../public/image/logo-mobile.svg";
import menuIcon from "@/../public/image/menu.svg";

import Link from "next/link";

const Navber = () => {
  return (
    <div className=" relative min-w-[221px] flex pt-4 lg:pt-[35px] pr-[29px] pl-[140px] justify-between lg:px-[211px]  ">
      <Image
        src={logoMobileIcon}
        alt={"Mobile Logo"}
        className=" w-auto block lg:hidden"
      />

      <Image
        src={logoWebIcon}
        alt={"wWeb Logo"}
        className="w-auto hidden lg:block"
      />

      <Image
        src={menuIcon}
        alt={"Menu Icon"}
        width={20}
        height={12}
        className="w-auto block lg:hidden"
      />
      <div className="hidden h-5.5 lg:flex gap-10 justify-center  font-semibold text-lg leading-[100%] tracking-[0%] text-[#A9A9A9]  ">
        <Link href={"#"}>About us</Link>
        <Link href={"#"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navber;
