import Navber from "./home/_components/Navber";
import TopBanner from "./home/_components/TopBanner";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" font-figtree h-screen">
      <TopBanner />
      <Navber />
      <div>{children}</div>
    </div>
  );
}
