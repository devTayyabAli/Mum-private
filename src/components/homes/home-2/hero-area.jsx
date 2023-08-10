import Link from "next/link";
import React from "react";
import ArrowLine from "@/src/svg/arrow-line";
import RoundLine from "@/src/svg/round-line";
import useCharAnimation from "@/src/hooks/useCharAnimation";
import Image from "next/image";

// img import
import scroll_bg from "../../../../public/assets/img/hero/scroll-down.png";
import users_img from "../../../../public/assets/img/hero/hero-user.jpg";
import hero_shape_1 from "../../../../public/assets/img/hero/hero-img-2-1.png";
import hero_shape_2 from "../../../../public/assets/img/hero/image_02.png";
import hero_shape_3 from "../../../../public/assets/img/hero/hero-img-2-3.png";
import hero_shape_4 from "../../../../public/assets/img/hero/hero-img-2-4.png";
import hero_shape_5 from "../../../../public/assets/img/hero/hero-shape-2-2.png";

// hero_content
const hero_content = {
  bg_img: "/assets/img/hero/hero-bg-2.png",
  scroll_btn: "Scroll Down",
  title: (
    <>
      <i>
        <i className="child-1">STANBUL MUN </i>{" "}
      </i>{" "}
      <i>
        <i className="child-1">INTERNATIONAL MODEL </i>{" "}
      </i>{" "}
      <i>
        <i className="child-1">UNITED NATIONS</i>{" "}
      </i>{" "}
      {/* <i>
        <i className="child-1">ways.</i>
      </i> */}
    </>
  ),
  btn_text: "Get Started For Free",
  sub_title: (
    <>
      Over<span>5Ok+ Client</span> all over the world
    </>
  ),
};
const { bg_img, scroll_btn, title, btn_text, sub_title } = hero_content;

const HeroArea = () => {
  useCharAnimation(".tp-hero-2__title i.child-1");
  return (
    <>
      <div
        id="hero"
        className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
        style={{
          backgroundImage: "url(./assets/cof2.jpg)",
        }}
      >
        <section>
          <div
            className="hero-container aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="row">
             
                <h1 className="mb-4 pb-0">
                  Istanbul MUN -<br />
                  <span>International</span> Model United Nations
                </h1>
         
           
              <p className="mb-4 pb-0">
              05<sup>th</sup> - 08<sup>th</sup> October, 2023 at Istanbul,
              Turkey
            </p>
            <h5 className="mb-4 pb-0" style={{ color: "white" }}>
              Journey of a{" "}
              <span style={{ color: "var(--main-color)" }}>Lifetime</span>
            </h5>
            {/* <a
              id="playerX"
              href="https://deliverysources.web.app/IstanbulMUN/videos/vfx0.mp4"
              className="glightbox play-btn mb-4"
            ></a> */}
            <div className="d-flex justify-content-center">

            <a
              href="/Information/Pricing"
              id="pricingLinker"
              style={{ border: "2px solid #991b1b",width:"20%" }}
              className="about-btn scrollto"
            >
              <p style={{ margin: 0 }}>Pricing →</p>
              {/* <hr style={{ color: "#f9d3d3" }} />
              <p style={{ margin: 0, fontSize: "13px !important" }}>
                Early Applicant Discounts (Limited Slots Left)
              </p> */}
            </a>
            </div>
              </div>
            </div>
            
 
        </section>

        {/* <div className="scroll-bg d-none d-sm-block">
          <Image src={scroll_bg} alt="theme-pure" />
        </div>
        <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
          <a className="mouse-scroll-btn" href="#payment-method"></a>
          <span>{scroll_btn}</span>
        </div>
        <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
          <ArrowLine />
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0 align-items-end">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__title-box">
                <h3 className="tp-hero-2__title tp-char-animation">
                  {title}
                </h3>


              </div>
              <div className="tp-hero-2__btn">
                <Link
                  className="tp-btn-green wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  href="/service-details"
                >
                  {btn_text}
                </Link>
              </div>
              <div className="tp-hero-2__user p-relative">
                <h4 className="tp-char-animation-2" >{sub_title}</h4>
                <div className="tp-hero-2__user-img">
                  <Image src={users_img} alt="theme-pure" />
                </div>
                <div className="tp-hero-2__shape-1">
                  <RoundLine />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__right text-end p-relative">
                <div
                  className="tp-hero-2__main-img wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s" >
                  <Image src={hero_shape_1} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-1 d-none d-sm-block"
                  data-parallax='{"x": 100, "smoothness": 30}' >
                  <Image src={hero_shape_2} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-2 d-none d-sm-block"
                  data-parallax='{"x": -100, "smoothness": 10}' >
                  <Image src={hero_shape_3} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-3 d-none d-sm-block"
                  data-parallax='{"y": -80, "smoothness": 30}' >
                  <Image src={hero_shape_4} alt="theme-pure" />
                </div>

                <div className="tp-hero-2__sub-img-4">
                  <Image src={hero_shape_5} alt="theme-pure" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <section id="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <h2>About The Event</h2>
              <p>
                Istanbul International MUN will take place in Istanbul, Turkey
                and simulate and model the United Nations to expose the
                participating youth to the global economic, political, and
                social affairs to enable them to be the leaders of the future
                and find plausible solutions to bring about peace and unity.
                Individuals take up the role of delegates to represent different
                nations and engage in a discourse of diplomacy and leadership to
                solve world crisis.{" "}
                <a
                  href="https://istanbulmun.com/Information/Rundown"
                  target="_blank"
                >
                  See the events' overview
                </a>{" "}
                to learn more.
              </p>
            </div>
            <div className="col-lg-3">
              <h3>Where</h3>
              <p>DoubleTree by Hilton Avcilar, Istanbul, Turkey</p>
            </div>
            <div className="col-lg-3">
              <h3>When</h3>
              <p>
                Thursday to Sunday
                <br />
                05<sup>th</sup>-08<sup>th</sup> October, 2023
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HeroArea;
