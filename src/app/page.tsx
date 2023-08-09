import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight, { HighlightProps } from "@/components/Highlight";
import Subscribe from "@/components/Subscribe";
import Navigation, { Page } from "@/components/Navigation";

const pages: Array<Page> = [
  { id: "123", date: "Thursday, August 3, 2023" },
  { id: "134", date: "Wednesday, August 2, 2023" },
  { id: "134", date: "Tuesday, August 1, 2023" },
  { id: "134", date: "Monday, July 31, 2023" },
];

const image: HighlightProps = {
  image:
    "https://cdn.midjourney.com/7fc3f1e5-b914-4990-a9c8-b00eeb0b51f7/0_0_384_N.webp",
  caption:
    "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean.",
};

export default function Home() {
  return (
    <main className="h-full w-1200 min-h-min flex m-auto flex-col gap-14 justify-start items-center bg-black align-content-center flex-wrap-nowrap border-radius-0">
      <div className="px-12 pt-12">
        <Hero />
      </div>

      <div className="w-full gap-14 flex flex-col ">
        <Highlight {...image} />
        <div className="px-16">
          <Follow />
        </div>

        <Subscribe />
        <div className="px-16 flex flex-col gap-14">
          <Navigation pages={pages} />
          <Footer />
        </div>
      </div>
    </main>
  );
}
