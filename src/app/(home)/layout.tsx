import Navber from "../../components/Navber";
import TopBanner from "../../components/TopBanner";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" font-figtree h-screen">
      <TopBanner />
      <div
        className="absolute bg-[url(/image/bg-mobile-image.svg)] lg:bg-[url(/image/bg-image.svg)] bg-cover left-0 lg:left-auto right-0 mx-auto lg:mx-0 md:right-0 xl:right-25 top-19 lg:top-31.5 z-0 max-w-[379px]  lg:max-w-[666px] max-h-[426px] lg:max-h-[679px] w-full h-full"
        aria-hidden="true"
      />
      <Navber />
      {children}
    </div>
  );
}
