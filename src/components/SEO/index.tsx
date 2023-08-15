import Head from "next/head";
import { HighlightProps } from "../Highlight";

export interface SEOProps {
  title: string;
  image: HighlightProps;
}

const SEO = ({ title, image }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:title" content={title} />
      <meta
        name="og:url"
        content={`https://juanallo.github.io/handpickedbyai/archive/${image.id}`}
      />
      <meta name="og:description" content={image.caption} />
      <meta
        name="description"
        content={`Handpicked by AI - ${image.caption}`}
      />
      <meta name="og:image" content={image.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@juan_allo" />
      <meta name="twitter:title" content="AI images handpicked by AI" />
      <meta name="twitter:description" content={image.caption} />
      <meta name="twitter:image" content={image.image} />
      <meta name="twitter:image:alt" content={image.caption} />
      <link rel="icon" type="image/x-icon" href="/handpickedbyai/favicon.png" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/handpickedbyai/favicon.png"
      />
    </Head>
  );
};

export default SEO;
