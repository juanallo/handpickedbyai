import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight, { HighlightProps } from "@/components/Highlight";
import Subscribe from "@/components/Subscribe";
import Archive, { Page } from "@/components/Archive";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import fs from "fs";
import { formatDate } from "@/utils/date";
import Head from 'next/head'

export const getStaticProps: GetStaticProps<{
  highlight: HighlightProps;
  pages: Array<Page>;
}> = async () => {
  const [highlight, ...images] = JSON.parse(
    fs.readFileSync("images.json").toString()
  );
  const pages = images.map((image: Page) => {
    const date = formatDate(image.date)
    return { id: image.id, date };
  });
  return { props: { highlight, pages } };
};

export default function Home({
  highlight,
  pages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="h-full w-1200 min-h-min flex m-auto flex-col gap-14 justify-start items-center bg-black align-content-center flex-wrap-nowrap border-radius-0">
      <Head>
        <title>AI Image of the day</title>
        <meta name="og:title" content="AI Image of the day" />
        <meta name="og:url" content={`https://juanallo.github.io/handpickedbyai/archive/${highlight.id}`} />
        <meta name="og:description" content={highlight.caption} />
        <meta name="og:image" content={highlight.image} />
      </Head>
      <div className="px-12 pt-12">
        <Hero />
      </div>

      <div className="w-full gap-14 flex flex-col justify-center">
        <Highlight {...highlight} />
        <div className="w-full flex flex-col items-center">
          <div className="px-16 flex flex-col w-full max-w-3xl min-w-[50%]">
            <Follow />
          </div>
        </div>

        <Subscribe />
        <div className="w-full flex flex-col items-center">
          <div className="px-16 w-full flex flex-col gap-14 max-w-3xl min-w-[50%]">
            <Archive pages={pages} />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
