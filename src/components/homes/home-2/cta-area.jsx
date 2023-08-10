import BreadcrumbThree from "@/src/common/breadcrumbs/breadcrumb-3";
import Link from "next/link";
import React from "react";

const cta_content = {
  bg_img: "/assets/img/cta/cta-bg.jpg",
  title: "",
  info: (
    <>
      Eyerything you need to accept cord payments and grow your business <br />
      anywhere on the planet.
    </>
  ),
  btn_text: "Get Started Now",
};
const { bg_img, title, info, btn_text } = cta_content;

const CtaArea = () => {
  return (
    <>
      <section id="subscribe">
        <div className="container aos-init aos-animate" data-aos="zoom-in">
          <div className="section-header" style={{ marginBottom: 20 }}>
            <h2>Fighting Climate Change</h2>
            <p>
              At Neoterican, we contribute a portion of our revenue to carbon
              removal. We believe businesses can play a critically important
              role in helping fight climate change. We’re proud to fund
              next-generation carbon removal. Learn more at{" "}
              <a target="_blank" href="https://climate.stripe.com/ur6Y70">
                climate.stripe.com/ur6Y70
              </a>
            </p>
            <div style={{ width: 100, textAlign: "center", margin: "auto" }}>
              <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <linearGradient
                  id="StripeClimate-gradient-a"
                  gradientUnits="userSpaceOnUse"
                  x1={16}
                  y1="20.6293"
                  x2={16}
                  y2="7.8394"
                  gradientTransform="matrix(1 0 0 -1 0 34)"
                >
                  <stop offset={0} stopColor="#00d924" />
                  <stop offset={1} stopColor="#00cb1b" />
                </linearGradient>
                <path
                  d="M0 10.82h32c0 8.84-7.16 16-16 16s-16-7.16-16-16z"
                  fill="url(#StripeClimate-gradient-a)"
                />
                <linearGradient
                  id="StripeClimate-gradient-b"
                  gradientUnits="userSpaceOnUse"
                  x1={24}
                  y1="28.6289"
                  x2={24}
                  y2="17.2443"
                  gradientTransform="matrix(1 0 0 -1 0 34)"
                >
                  <stop offset=".1562" stopColor="#009c00" />
                  <stop offset={1} stopColor="#00be20" />
                </linearGradient>
                <path
                  d="M32 10.82c0 2.21-1.49 4.65-5.41 4.65-3.42 0-7.27-2.37-10.59-4.65 3.52-2.43 7.39-5.63 10.59-5.63C29.86 5.18 32 8.17 32 10.82z"
                  fill="url(#StripeClimate-gradient-b)"
                />
                <linearGradient
                  id="StripeClimate-gradient-c"
                  gradientUnits="userSpaceOnUse"
                  x1={8}
                  y1="16.7494"
                  x2={8}
                  y2="29.1239"
                  gradientTransform="matrix(1 0 0 -1 0 34)"
                >
                  <stop offset={0} stopColor="#ffe37d" />
                  <stop offset={1} stopColor="#ffc900" />
                </linearGradient>
                <path
                  d="M0 10.82c0 2.21 1.49 4.65 5.41 4.65 3.42 0 7.27-2.37 10.59-4.65-3.52-2.43-7.39-5.64-10.59-5.64C2.14 5.18 0 8.17 0 10.82z"
                  fill="url(#StripeClimate-gradient-c)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="gallery">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Gallery</h2>
            <p>View our gallery from the recent events</p>
          </div>
        </div>
        
      </section> */}

      {/* <div className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content text-center">
                              <h3 className="tp-section-title-lg text-white">{title}</h3>
                              <p>{info}</p>
                              <Link className="tp-btn-green" href="/service-details">{btn_text}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
    </>
  );
};

export default CtaArea;
