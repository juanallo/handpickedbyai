import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Subscribe from "@/components/Subscribe";
import Navigation, { Page } from "@/components/Navigation";

const pages: Array<Page> = [
  { id: "123", date: "Thursday, August 3, 2023" },
  { id: "134", date: "Wednesday, August 2, 2023" },
  { id: "134", date: "Tuesday, August 1, 2023" },
  { id: "134", date: "Monday, July 31, 2023" },
];

export default function Home() {
  return (
    <main className="h-full w-1200 min-h-min content-start flex flex-col gap-14 justify-start items-center bg-black align-content-center flex-wrap-nowrap border-radius-0 p-12">
      <Hero />
      <div className="px-10 w-full gap-14 flex flex-col">
        <Highlight />
        <Follow />
        <Subscribe />
        <Navigation pages={pages} />
        <Footer />
      </div>
    </main>
  );
}
