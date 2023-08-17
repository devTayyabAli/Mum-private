import React, { useEffect, useState } from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import Wrapper from "../layout/wrapper";
import Script from "next/script";

const index = () => {
  //  const [s1Loaded,setS1Loaded] = useState(false)

  // useEffect(()=>{
  //   if(s1Loaded){
  //     registrations(document.getElementById("registerPortal"), {
  //       sourceLink: "https://localhost/register",
  //       project: 4,
  //       sequentialPostScriptLoad: true,
  //     })
  //   }
  // },[s1Loaded])
  return (
    <Wrapper>
        {/* <section id="registerPortal"></section> */}
      <SEO pageTitle={"Softec - Data analytics"} />
      <Register />
      {/* <Script 
        src="https://portal.neoterican.com/Screens/Scripts/injector.js?version=13"
        onError={()=>{}}
        onReady={()=>{ 
          setS1Loaded(true)
        }}
      />    */}
    </Wrapper>
  );
};

export default index;
