import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';
import Script from 'next/script';

export default function Document(context) {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/img/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#0a4c6c" />
        <meta name="msapplication-config" content="/img/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#0a4c6c" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />

        <noscript>
          <Image
            src="https://sb.scorecardresearch.com/p?c1=2&c2=6683813&cv=2.0&cj=1"
            alt="comScore"
            title="comScore"
            width="1"
            height="1"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          async
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
