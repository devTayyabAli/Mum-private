"use client"
import "@/src/styles/index.scss";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function MyApp({ Component, pageProps }) {
  // const [s1Loaded,setS1Loaded] = useState(false)

  // useEffect(()=>{
  //   if(s1Loaded){
  //     history.replaceState(
  //       {},
  //       document.domain,
  //       "?" + "apl=" + "zNa5vPtXTJEVKqvxE0Tg%2BjM3CTIJfwx0tOMo%2FW4il1s%3D"
  //     ); //To navigate to a registrant's personal portal's URL query string
  //     portal(document.getElementById("personalPortal"))
  //   }
  // },[s1Loaded])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./stylesheets/style.css" />  
      </Head>
      <Component {...pageProps} />      
      <Script 
        src="https://portal.neoterican.com/Screens/Scripts/injector.js?version=13"
        onError={()=>{}}
        onReady={()=>{ 
          // setS1Loaded(true)
        }}
      />      
    </>
  );
}