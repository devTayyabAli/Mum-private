import project_data from "@/src/data/project-data";
import RightArrow from "@/src/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";

// import { Navigation, Scrollbar,Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from "../../../../public/assets/img/logo/logo-black.png";
import Five_LOGO from "../../../../public/assets/img/Join_SVG/5-01.svg";

// import required modules
import { Pagination, Navigation } from "swiper";


const setting = {
  // loop: true,
  slidesPerView: 3,
  // centeredSlides: true,
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

const ProjectArea = () => {


  return (
    <>
      <div className="tp-project__area grey-bg pt-50 pb-110 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="tp-project__section-box wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <h3 className="tp-section-title">Alumni Testimony</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-xl-12">
              <div className="tp-project__slider-section">
                <Swiper
                  {...setting}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {project_data.map((item, i) => (
                    <SwiperSlide
                      key={i}
                      className="swiper-slide wow tpfadeUp tp-project__swiper-slide"
                      data-wow-duration=".9s"
                      data-wow-delay={item.delay}
                    >
                      <div className="tp-project__slider-wrapper">
                        <Image src={item.img_1} alt="theme-pure" />
                        <div className="tp-project__item d-flex align-items-center">
                          <div className="tp-project__thumb"></div>
                          <div className="tp-project__content">
                            <div className="tp-project__brand-icon">
                              {/* <Image src={item.img_2} alt="theme-pure" /> */}
                            </div>
                            <div className="tp-project__title-box">
                              <h4 className="tp-project__title-sm">
                                <Link href="/project-details">
                                  {item.title}
                                </Link>
                              </h4>
                              <p>{item.description}</p>
                            </div>
                            {/* <div className="tp-project__meta d-flex align-items-center"></div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* <div className="tp-scrollbar"></div> */}
              </div>
            </div>
          </div>
        </div>
      
        {/* <div className="container">
          <div
            className="tp-project__section-box wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <h3 className="tp-section-title">Why Join Neoteric Summit</h3>
          </div>


          <div className="row">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-8  d-flex justify-content-center">
               <div className="Main_div_SVG_join_logo">
                  <Image src={Five_LOGO} alt="" className="w-75"/>
               </div>
               <div className="Main_div_Join">
                  <div className="first_logo_div">
                     <Image src={logo} alt="" className="w-50"/>
                  </div>
                  
               </div>
               



            </div>
            <div className="col-lg-2">

            </div>
          </div>
        </div> */}

       
      </div>
    </>
  );
};

export default ProjectArea;
