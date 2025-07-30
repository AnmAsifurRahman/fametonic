import Navber from "./_components/Navber";
import TopBanner from "./_components/TopBanner";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" font-figtree h-screen">
      <TopBanner />
      <Navber />
      {children}
    </div>
  );
}
