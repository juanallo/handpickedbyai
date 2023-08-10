import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Handpicked by AI</title>
        <meta name="description" content="AI generated images handpicked by AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:title" content="Handpicked by AI" />
        <meta name="og:url" content="https://juanallo.github.io/handpickedbyai/" />
        <meta name="og:description" content="AI generated images handpicked by AI" />
        <meta name="og:image" content="" />
        <link rel="icon" type="image/x-icon" href="/handpickedbyai/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/handpickedbyai/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
