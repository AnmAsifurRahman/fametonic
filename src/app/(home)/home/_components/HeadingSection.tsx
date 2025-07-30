import React from "react";

const HeadingSection = () => {
  return (
    <div className=" flex flex-col  w-87.5 lg:w-129 gap-4 order-1 lg:order-1 ">
      <p className=" flex flex-col font-urbanist font-extrabold lg:font-bold text-[25px] lg:text-[35px] leading-[100%] tracking-[0]   align-middle ">
        <span className=" h-15 lg:h-21 text-center lg:text-left ">
          Want to Turn Social Media Into a Profitable Career?
        </span>
        <span className=" h-15 lg:h-21 text-center lg:text-left text-[#00E7F9] [text-shadow:_0px_4px_4px_0px_rgba(252_0_78_/_1)]">
          Discover your way to success with Fametonic:
        </span>
      </p>

      <div className=" flex flex-col gap-[13px]">
        <Heading>
          Start growing your influence right away—no waiting required!
        </Heading>
        <Heading>
          Create viral TikToks and Reels step by step with easy-to-follow
          lessons
        </Heading>
        <Heading>Use a Personal AI Worker to boost your content</Heading>
        <Heading>
          Learn from expert-led courses designed for aspiring influencers
        </Heading>
      </div>
    </div>
  );
};

export default HeadingSection;

const Heading = ({ children }: { children: React.ReactNode }) => (
  <p className=" flex flex-row gap-2.5">
    <span className=" font-nunito font-medium text-[22px] leading-[100%] tracking-[0%] align-middle">
      ✨
    </span>
    <span className="font-nunito font-medium lg:font-semibold text-base leading-5.5 tracking-[0%] align-middle">
      {children}
    </span>
  </p>
);
