import ScrollToTop from "@/src/hooks/scroll-to-top";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React, { Suspense } from "react";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
const ServicesArea = React.lazy(() => import("./services-area"));
// import ServicesArea from "./services-area";
import TestimonialArea from "./testimonial-area";
import PaymentMethodArea from "../home-2/payment-method-area";

const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div id='portalContainer' style={{
                display:'none',
                zIndex: '8',
                width: '90vw',
                height: 'fit-content',
              }}>
                <div style={
                  {
                    display: 'flex',
                    justifyContent: 'end',
                  }
                }>
                  <button style={{
                    background: 'white',
                    position:'fixed',
                    color: 'black',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    fontWeight: '700',
                    borderRadius: '7px',
                    zIndex:'10'
                  }} onClick={() => {
                    var portalElement = document.getElementById('personalPortal')
                    var portalContainer = document.getElementById('portalContainer')
                    portalElement.innerHTML = ""
                    portalContainer.style.display = "none"
                  }}>Close</button>
                </div>
                <section id="personalPortal"></section>
              </div>
            </div>
            <HeroSlider />
            <FeatureArea />
            <AboutArea />
            <Suspense fallback={<div> Please Wait... </div>}>
              <ServicesArea />
            </Suspense>

            <ProjectArea />
            <TestimonialArea />
            <PaymentMethodArea />
            {/* <RankArea /> */}
            {/* <PriceArea /> */}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
