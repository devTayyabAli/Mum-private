import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import useCharAnimation from "@/src/hooks/useCharAnimation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// images import
import shape_1 from "../../../../public/assets/img/hero/hero-line-shape.webp";
import shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.webp";
import shape_img_1 from "../../../../public/assets/img/hero/hero-shape-1.webp";
import shape_img_2 from "../../../../public/assets/img/hero/hero-shape-2.webp";
import thumb_1 from "../../../../public/assets/img/hero/hero-sm-3.webp";
import thumb_2 from "../../../../public/assets/img/hero/hero-sm-4.webp";
import Home1 from "../../../../public/assets/img/Home_slider/1.webp";
import Home2 from "../../../../public/assets/img/Home_slider/2.webp";
import Home3 from "../../../../public/assets/img/Home_slider/3.webp";
import Home4 from "../../../../public/assets/img/Home_slider/4.webp";
import Home5 from "../../../../public/assets/img/Home_slider/5.webp";
import Home6 from "../../../../public/assets/img/Home_slider/6.webp";
import Home7 from "../../../../public/assets/img/Home_slider/7.webp";
import Home8 from "../../../../public/assets/img/Home_slider/8.webp";
import Home9 from "../../../../public/assets/img/Home_slider/9.webp";

import Typewriter from "typewriter-effect";
import {BsArrowRightShort} from 'react-icons/bs'

import { Autoplay, Pagination, Navigation } from "swiper";
const setting = {
  loop: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },

  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};
// hero content data
const hero_content = {
  hero_shape: [
    {
      id: 1,
      cls: "tp-hero-shape-1",
      img: shape_1,
    },
    {
      id: 2,
      cls: "tp-hero-shape-2",
      img: shape_2,
    },
  ],
  hero_title: (
    <>
      <span className="tp_title">
        <span className="child">Neoterican</span>
      </span>{" "}
      <br />
      {/* <span>
        <span className="child">Hurry up now!</span>
      </span>{" "} */}
    </>
  ),
  sub_title: <>We are not going to save your data</>,
  hero_shape_img: [
    {
      id: 1,
      cls: "1",
      img: shape_img_1,
    },
    {
      id: 2,
      cls: "2",
      img: shape_img_2,
    },
  ],

  hero_thumbs: [
    {
      id: 1,
      col: "4",
      cls: "tp-hero__sm-img",
      img: thumb_1,
    },
    {
      id: 2,
      col: "8",
      cls: "",
      img: thumb_2,
    },
  ],
};
const { hero_shape, hero_title, sub_title, hero_shape_img, hero_thumbs } =
  hero_content;

const HeroSlider = () => {
  let hero_bg = useRef(null);

  useEffect(() => {
    gsap.from(hero_bg.current, {
      opacity: 0,
      scale: 1.2,
      duration: 1.5,
    });
    gsap.to(hero_bg.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
    });
  }, []);

  useCharAnimation(".tp-hero__hero-title span.child");

  return (
    <>
      <div className="tp-hero__area tp-hero__pl-pr mt-20">
        <div className="tp-hero__bg p-relative">
          <div className=" tp-hero-bg-single px-lg-4">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              style={{borderRadius:"15px"}}
            >
              <SwiperSlide>
                {" "}
                <Image
                  src={Home1}
                  alt="theme-pure"
                  style={{ borderRadius: "15px"}}
                  className="Slider_Imge_inner"
                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home2}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home3}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home4}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home5}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home6}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home7}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home8}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Home9}
                  alt="theme-pure"
                  style={{ borderRadius: "15px" }}
                  className="Slider_Imge_inner"

                />
                <div className="Slider_Imge"></div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tp-hero-shape">
            {/* {hero_shape.map((item, i) => (
              <Image
                key={i}
                className={item.cls}
                src={item.img}
                alt="theme-pure"
              />
            ))} */}
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-hero__content-box text-center z-index-3">
                  <div className="tp-hero__title-box p-relative" >
                    <h2 className="tp-hero__hero-title tp-title-anim text-white mt-4">
                      {hero_title}
                    </h2>
                    <h3 className="tp-hero__hero-title tp-title-anim text-white" >
                      <Typewriter
                        options={{
                          strings: ["Neoterican", "Hurry up now!"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h3>
                    {/* <h2 style={{ marginTop: "-2rem" }} className="text-white">
                      89 days left
                    </h2> */}
                    <div className="tp-about__btn " >
                      <a className="tp-btn tp-btn-hover alt-color-black" href="/">
                        <span style={{ marginBottom: "-13px" }} className="d-flex align-items-center">
                          {" "}
                          REGISTER NOW <BsArrowRightShort className="fs-2"/>
                        </span>
                        <b></b>
                      </a>
                    </div>
                    {/* <div className="pb-0 mb-0 mt-2 d-flex justify-content-center">

                    <div className=" d-flex Slider_Main_div" >
                      <Swiper
                        {...setting}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper1  "
                      >
                        <SwiperSlide>
                          {" "}
                          <Image
                            src={Home1}
                            alt="theme-pure"
                           
                          
                          />
                          <div className=""></div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src={Home2}
                            alt="theme-pure"
                           
                          />
                          
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src={Home3}
                            alt="theme-pure"
                           
                          />
                          
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src={Home4}
                            alt="theme-pure"
                           
                          />
                          
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src={Home4}
                            alt="theme-pure"
                           
                          />
                          
                        </SwiperSlide><SwiperSlide>
                          <Image
                            src={Home4}
                            alt="theme-pure"
                           
                          />
                          
                        </SwiperSlide><SwiperSlide>
                          <Image
                            src={Home4}
                            alt="theme-pure"
                           
                          />
                          
                        </SwiperSlide>
                      </Swiper>
                      <div className="tp-about__btn ms-3 mt-3 " >
                      <a className="tp-btn tp-btn-hover alt-color-black" href="/">
                        <span style={{ marginBottom: "-13px" }}>
                         More
                        </span>
                        <b></b>
                      </a>
                    </div>
                    </div>
                    </div> */}


                    {/* <div
                      className="tp-hero__title-shape "
                      style={{ position: "absolute", top: "110%" }}
                    >
                      <LineShape />
                    </div> */}
                  </div>
                  {/* <div
                    className="tp-hero__input p-relative wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                    style={{ marginTop: "1rem" }}
                  >
                    <HeroForm />
                  </div> */}
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    {/* {sub_title} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-hero__bottom z-index-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-hero__thumb-wrapper-main p-relative">
                  {/* {hero_shape_img.map((item, i) => (
                    <div
                      key={i}
                      className={`tp-hero__shape-img-${item.cls} d-none d-xl-block`}
                    >
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                  ))} */}
                  <div>
                    <div className="tp-hero__thumb-wrapper d-none d-md-block p-relative">
                      <div className="row">
                        <div className="col-12">
                          <div className="tp-hero__thumb-box text-center">
                            <h2 className="text-center ">Success Story</h2>
                            <p>
                              Neoterican has been on an incredible journey,
                              organizing two remarkable Model United Nations
                              conferences in 2022 and the February 2023 edition.
                              These conferences were a true testament to our
                              commitment to cultural diversity, with over 50-80
                              nationalities represented. We were thrilled to
                              welcome delegates from around the globe, fostering
                              an environment of cross-cultural exchange and
                              collaboration.
                            </p>
                            <p>
                              The success of these conferences was evident in
                              the substantial footfall, with approximately 250
                              attendees in each year. The enthusiastic
                              participation and engagement of delegates
                              contributed to the vibrant atmosphere, sparking
                              engaging discussions and inspiring solutions to
                              global challenges.
                            </p>
                            <p>
                              At Neoterican, our mission remains unwavering: to
                              empower youth leaders, promote cultural
                              understanding, and foster the development of
                              innovative solutions. We are grateful for the
                              support and dedication of our delegates,
                              volunteers, and partners who have been
                              instrumental in making our MUN conferences a
                              resounding success.
                            </p>
                            <p>
                              Join us on this remarkable journey as we strive to
                              make a lasting impact and create a brighter future
                              together.
                            </p>
                            <div className="tp-about__btn ">
                              <a
                                className="tp-btn tp-btn-hover alt-color-black"
                                href="/"
                              >
                                <span style={{ marginBottom: "-13px" }} className="d-flex align-items-center">
                                  {" "}
                                  REGISTER NOW <BsArrowRightShort className="fs-2"/>
                                </span>
                                <b></b>
                              </a>
                            </div>

                            {/* <div className="row">
                              <div className="col-md-12">
                                <div className="tp-hero__thumb mb-20">
                                  <Image
                                    style={{ width: "auto", height: "auto" }}
                                    className="w-100"
                                    src={hero_thumb_1}
                                    alt="theme-pure"
                                  />
                                </div>
                              </div>
                            </div> */}

                            {/* <div className="row">
                              {hero_thumbs.map((item, i) => (
                                <div key={i} className={`col-md-${item.col}`}>
                                  <div className={`tp-hero__thumb ${item.cls}`}>
                                    <Image
                                      style={{ width: "auto", height: "auto" }}
                                      className="w-100"
                                      src={item.img}
                                      alt="theme-pure"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div> */}
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                          <div className="tp-hero__thumb-box">
                            <div className="tp-hero__thumb">
                              <Image
                                style={{ width: "auto", height: "auto" }}
                                className="w-100"
                                src={hero_thumb_2}
                                alt="theme-pure"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
