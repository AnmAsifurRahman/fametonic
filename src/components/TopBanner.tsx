const TopBanner = () => {
  return (
    <div className=" max-h-19 flex justify-center  gap-2.5  px-5 py-5 lg:py-2.5 lg:px-[200px]  bg-[linear-gradient(90deg,_#FC004E_0%,_#10CBE0_100%)] ">
      <p className=" w-87.5 lg:w-auto font-figtree leading-[100%] tracking-[0%] text-center ">
        <span className="   font-extrabold text-base  lg:text-[22px]  text-[#00E7F9] text-center align-middle">
          🚀 FRESH BEGINNINGS SALE:{" "}
        </span>
        <span className=" font-semibold text-sm lg:text-[22px] align-middle">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </p>
    </div>
  );
};

export default TopBanner;
