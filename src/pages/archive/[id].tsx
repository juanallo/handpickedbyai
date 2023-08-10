import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight, { HighlightProps } from "@/components/Highlight";
import Subscribe from "@/components/Subscribe";
import Archive, { Page } from "@/components/Archive";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import fs from "fs";
import { formatDate } from "@/utils/date";

export const getStaticProps: GetStaticProps<{
  image: HighlightProps;
}> = async ({ params }) => {
  const imageID = params.id;
  const images = JSON.parse(fs.readFileSync("images.json").toString());
  const image = images
    .find((image: HighlightProps) => {
      return image.id === imageID;
    })

  return { props: { image: { ...image, date: image.date && formatDate(image.date) } } };
};

export async function getStaticPaths() {
  const images = JSON.parse(fs.readFileSync("images.json").toString());
  const paths = images.map((image: HighlightProps) => ({
    params: { id: image.id },
  }));
  return { paths, fallback: false };
}

export default function Home({
  image,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="h-full w-1200 min-h-min flex m-auto flex-col gap-14 justify-start items-center bg-black align-content-center flex-wrap-nowrap border-radius-0">
      <div className="px-12 pt-12">
        <Hero />
      </div>

      <div className="w-full gap-14 flex flex-col justify-center">
        <div>
          <h4 className="text-center">{image.date}</h4>
          <Highlight {...image} />
        </div>
        <div className="px-16 w-full flex flex-col items-center">
          <div className="flex flex-col  max-w-4xl min-w-[50%]">
            <Follow />
          </div>
        </div>

        <Subscribe />
        <div className="w-full flex flex-col items-center">
          <div className="px-16 flex flex-col gap-14 max-w-4xl min-w-[50%]">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
