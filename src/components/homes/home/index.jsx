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
