import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight, { HighlightProps } from "@/components/Highlight";
import Subscribe from "@/components/Subscribe";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import fs from "fs";
import { formatDate } from "@/utils/date";
import LeftArrowIcon from "@/components/icons/LeftArrow";
import RightArrowIcon from "@/components/icons/RightArrow";
import Link from "next/link";
import SEO from "@/components/SEO";
import Fill from "@/components/Footer/Fill";

export const getStaticProps: GetStaticProps<{
  image: HighlightProps;
  prev: string;
  next: string;
}> = async ({ params }) => {
  if (!params || !params.id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const imageID = params.id;
  const images = JSON.parse(fs.readFileSync("images.json").toString());
  const imageIndex = images.findIndex((image: HighlightProps) => {
    return image.id === imageID;
  });

  const image = images[imageIndex];
  const prevIndex = imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1;
  const nextIndex = imageIndex + 1 >= images.length ? 0 : imageIndex + 1;

  return {
    props: {
      image: { ...image, date: image.date && formatDate(image.date) },
      prev: images[prevIndex].id,
      next: images[nextIndex].id,
    },
  };
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
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="h-full w-1200 min-h-min flex m-auto flex-col gap-14 justify-start items-center bg-black align-content-center flex-wrap-nowrap border-radius-0">
      <SEO title={`Archive | ${image.date}`} image={image} />
      <div className="px-12 pt-12">
        <Hero />
      </div>

      <div className="w-full gap-14 flex flex-col justify-center">
        <div className=" grid grid-cols-3 gap-4">
          <Link
            href={`/archive/${prev}`}
            className="justify-self-end"
            title="Previous Image"
          >
            <LeftArrowIcon />
          </Link>
          <h4 className="text-center">{image.date}</h4>
          <Link
            href={`/archive/${next}`}
            className="justify-self-start"
            title="Next Image"
          >
            <RightArrowIcon />
          </Link>
          <div className="col-span-3">
            <Highlight {...image} />{" "}
          </div>
        </div>
        {/* <div className="w-full flex flex-col items-center">
          <div className="px-16 flex flex-col w-full max-w-3xl min-w-[50%]">
            <Follow />
          </div>
        </div> */}

        <Subscribe />
        <div className="w-full flex flex-col items-center">
          <div className="px-16 flex flex-col gap-14 w-full max-w-3xl min-w-[50%]">
            <Footer />
          </div>
        </div>
      </div>
      <Fill />
    </main>
  );
}
