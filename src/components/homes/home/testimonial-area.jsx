import testimonial_data from "@/src/data/testimonial-data";
import testimonial_svg from "@/src/data/testimonial-svg";
import VideoPopup from "@/src/modals/video-popup";
import RightArrow from "@/src/svg/right-arrow";
import StartTwo from "@/src/svg/start-2";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const tp_setting = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
};

const brands_setting = {
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "0",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialArea = () => {
  const sliderRef = useRef(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const [Video_URL, setVideo_URL] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  let g_title = new gsap.timeline();
  let title_anim = useRef(null);
  useEffect(() => {
    g_title.from(title_anim.current, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -60,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.2,
    });
  });


  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };

  return (
    <>
      <div className="tp-testimonial__area pt-105 pb-200 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="tp-testimonial__section-box text-center">
                <h3 className="tp-section-title">Videos</h3>
              </div>
            </div>
          </div>
          <section id="supporters" className="section-with-bg">
            <div className="container aos-init aos-animate" data-aos="fade-up">
            
              
              <div className="row">
                <div className="row">
                  <div
                    className="col-12 col-sm-12 col-md-3 row"
                    style={{ padding: 0, margin: 0, display: "inline-block" }}
                  >
                    <div
                      className="col-4 col-sm-4 col-md-12 row"
                      style={{
                        padding: 10,
                        display: "inline-block",
                        margin: 0,
                      }}
                      onClick={() => (
                        setIsVideoOpen(true),
                        setVideo_URL(
                          "https://deliverysources.web.app/IstanbulMUN/videos/vfx2.mp4"
                        )
                      )}
                    >
                      <video
                        id="vidPlayer"
                        muted
                        loop
                        playsInline
                        poster="https://deliverysources.web.app/IstanbulMUN/images/vid30x.webp"
                        style={{
                          padding: 0,
                          margin: 0,
                          width: "100%",
                          cursor: "pointer",
                          borderRadius: 15,
                        }}
                        src="https://deliverysources.web.app/IstanbulMUN/videos/vfx2.mp4"
                      >
                        <source src="" type="video/mp4" />
                      </video>
                    </div>
                    <div
                      className="col-4 col-sm-4 col-md-12 row"
                      style={{
                        padding: 10,
                        display: "inline-block",
                        margin: 0,
                      }}
                      onClick={() => (
                        setIsVideoOpen(true),
                        setVideo_URL(
                          "https://deliverysources.web.app/IstanbulMUN/videos/vfx1.mp4"
                        )
                      )}
                    >
                      <video
                        id="vidPlayer"
                        muted
                        loop
                        playsInline
                        poster="https://deliverysources.web.app/IstanbulMUN/images/vid10x.webp"
                        style={{
                          padding: 0,
                          margin: 0,
                          width: "100%",
                          cursor: "pointer",
                          borderRadius: 15,
                        }}
                        src="https://deliverysources.web.app/IstanbulMUN/videos/vfx1.mp4"
                      >
                        <source src="" type="video/mp4" />
                      </video>
                    </div>
                    <div
                      className="col-4 col-sm-4 col-md-12 row"
                      style={{
                        padding: 10,
                        display: "inline-block",
                        margin: 0,
                      }}
                      onClick={() => (
                        setIsVideoOpen(true),
                        setVideo_URL(
                          "https://deliverysources.web.app/IstanbulMUN/videos/vfx3.mp4"
                        )
                      )}
                    >
                      <video
                        id="vidPlayer"
                        muted
                        loop
                        playsInline
                        poster="https://deliverysources.web.app/IstanbulMUN/images/vid15x.webp"
                        style={{
                          padding: 0,
                          margin: 0,
                          width: "100%",
                          cursor: "pointer",
                          borderRadius: 15,
                        }}
                        src="https://deliverysources.web.app/IstanbulMUN/videos/vfx3.mp4"
                      >
                        <source src="" type="video/mp4" />
                      </video>

                      {/* <img
                alt="Istanbul Turkey MUN International Registrations Video"
                loading="lazy"
                className="imgx"
                src="https://deliverysources.web.app/IstanbulMUN/images/vid15x.webp"
                style={{
                  borderRadius: 15,
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  cursor: "pointer"
                }}
              /> */}
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-md-9 row"
                    style={{ padding: 20, margin: 0, display: "inline-block" }}
                  >
                    <div
                      id="vidPane"
                      className="col-12"
                      style={{
                        width: "100%",
                        padding: 0,
                        overflow: "hidden",
                        borderRadius: "20px !important",
                        height: "110%",
                      }}
                      onClick={() => (
                        setIsVideoOpen(true),
                        setVideo_URL(
                          "https://deliverysources.web.app/IstanbulMUN/videos/munTenex.mp4"
                        )
                      )}
                    >
                      <video
                        id="vidPlayer"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="https://deliverysources.web.app/IstanbulMUN/images/munex.jpg"
                        style={{
                          padding: 0,
                          margin: 0,
                          width: "100%",
                          cursor: "pointer",
                          borderRadius: "15px",
                        }}
                        src="https://deliverysources.web.app/IstanbulMUN/videos/munTenex.mp4"
                      >
                        <source src="" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={Video_URL}
        />

          {/* <div className="row justify-content-center">
                     <div className="col-xl-6">
                        <div className="tp-testimonial__section-box text-center">
                           <h3 className="tp-section-title">Word From Our Client</h3>
                           <p>5 Stars Based on 4,700+ Real Users Reviews</p>
                           <div className="tp-testimonial__rating">
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />                                   
                           </div>
                        </div>
                     </div>
                  </div> */}

          {/* <div className="row justify-content-center mt-50">
                     <div className="col-xl-10">
                        <div className="tp-testimonial__slider-section">

                           <Slider 
                           asNavFor={slider2} 
                           // ref={sliderRef} 
                           ref={(slider) => setSlider1(slider)}
                           {...tp_setting} 
                           className="tp-testimonial__slider-active wow tpfadeUp" 
                           data-wow-duration=".9s" 
                           data-wow-delay=".5s">
                            {testimonial_data.slice(0, 12).map((item, i)  => 
                              <div key={i} className="tp-testimonial__wrapper-main">
                                 <div className="tp-testimonial__wrapper">
                                    <div className="row gx-0">
                                       <div className="col-xl-7 col-lg-7">
                                          <div className="tp-testimonial__left-item p-relative">
                                             <div className="tp-testimonial__logo">
                                                <Image src={item?.img} alt="theme-pure" />
                                             </div>
                                             <div className="tp-testimonial__content z-index">
                                                <p>{item.description} </p>
                                             </div>
                                             <div className="tp-testimonial__author-info z-index">
                                                <span>{item.name}</span>
                                                <i>{item.title}</i>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-5">
                                          <div className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                             <div className="tp-testimonial__increase">
                                                <span>{item.count}%</span>
                                                <p>{item.sub_des}</p>
                                             </div>
                                             <div className="tp-testimonial__link">
                                                <Link href="#">
                                                   Read Case Study
                                                   <RightArrow />
                                                </Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>                                
                            )}

                           </Slider>

                           <Slider
                           asNavFor={slider1} ref={(slider) => setSlider2(slider)}
                           {...brands_setting} 
                           className="tp-testimonial__img-active mt-50">
                            {testimonial_svg.map((item, i)  => 
                                <div key={i} className="tp-testimonial__img-wrap tp-title-anim" ref={title_anim}>
                                 <div className="tp-testimonial__img-item">
                                    {item?.svg_img}  
                                 </div>
                              </div>    
                            )} 
                           </Slider>
                        </div>
                     </div>
                  </div> */}
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;
