import "@/src/styles/index.scss";
import Head from "next/head";



if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
  

}


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="./stylesheets/style.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}