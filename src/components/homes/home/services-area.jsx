import Image from "next/image";
import Link from "next/link";

import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import service_data from "@/src/data/service-data";
import RightArrow from "@/src/svg/right-arrow";
import ReactPlayer from "react-player";
import img from "../../../../public/assets/img/service/sv-dashbord.png";
import { AppContext } from "@/src/context/ContextProvider";
import VideoPopup from "@/src/modals/video-popup";
import React, {useState, useRef, useContext, useEffect} from "react";

const service_content = {
  title: "Explore Our Data Services",
  sub_title: <>More than 15,000 companies trust and choose Itech</>,

  bg_img: "/assets/img/service/sv-bg.jpg",
  title_2: (
    <>
      Data Analysis <br /> Tools & Methods
    </>
  ),
  des: (
    <>
      Lorem Ipsum is simply dummy text <br /> of the printing
    </>
  ),
  btn_text: "Work with Us",
};
const { title, sub_title, bg_img, title_2, des, btn_text } = service_content;

const ServicesArea = () => {
  let titleRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoEl = useRef(null);
//   const {  handleMouseLeave } = useContext(AppContext);

  const [Render_state, setRender_state] = useState(false);
  const [Video_URL, setVideo_URL] = useState("")

  const videoRef = useRef(null);

  useEffect(() => {
    setRender_state(true);
  }, []);



  useTitleAnimation(titleRef);
  return (
    <>
      <div className="tp-service__area p-relative fix " style={{paddingBottom:"5rem"}}>
        <div className="tp-service__grey-shape grey-bg"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                ref={titleRef}
                className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim"
              >
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row ">
            {service_data.slice(0, 5).map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div className="tp-service__item mb-30 ">
                  {Render_state && (
                    <>
                      <a
                        className="popup-video tp-cursor-point-area"
                        onClick={() => (setIsVideoOpen(true),setVideo_URL(item.url))}
                        // onMouseEnter={() => handleMouseEnter(true)}
                        // onMouseLeave={() => handleMouseLeave(false)}
                      >
                        <video
                        id="vidPlayer"
                        controls={false}
                          muted
                          loop
                          autoPlay
                          width="100%"
                          height="100%"
                          playing
                          className="hover-to-play w-100 tp-vedio-wrap__video"
                          style={{borderRadius:"15px"}}
                        src={item.url}
                      >
                        <source src="" type="video/mp4" />
                      </video>
                        {/* <ReactPlayer
                          url={item.url}
                          controls={false}
                          muted
                          loop
                          autoPlay
                          width="100%"
                          height="100%"
                          playing
                          className="hover-to-play w-100 tp-vedio-wrap__video"
                          style={{borderRadius:"15px"}}
                          ref={videoEl}
                        /> */}
                      </a>
                    </>
                  )}
                  {/* <video src=""></video> */}
                  {/* <ReactPlayer url='https://deliverysources.web.app/IstanbulMUN/videos/mun10.mp4' className=" tp-service__video w-100 h-100 "   /> */}
                  {/* <video src="https://deliverysources.web.app/IstanbulMUN/videos/mun10.mp4" type="video/mp4" muted loop autoPlay class="hover-to-play w-100"></video> */}

                  {/* <div className="tp-service__icon">
                                    <Image src={item.img} alt="theme-pure" />
                                </div> */}
                  {/* <div className="tp-service__content">
                                    <h3 className="tp-service__title-sm tp-yellow-color"><Link href="/service-details">{item.title}</Link></h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="tp-service__link">
                                    <Link href="/service-details">
                                        <RightArrow /> 
                                    </Link>
                                </div> */}
                </div>
              </div>
            ))}

            {/* <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <div className="tp-service__dashboard" 
                        style={{backgroundImage: `url(${bg_img})`}} >
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">{title_2}</h3>
                              <p>{des}</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/project-details">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s" 
                              src={img} alt="theme-pure" />
                           </div>
                        </div>
                     </div> */}
          </div>
        </div>
      </div>
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={Video_URL}
      />
    </>
  );
};

export default ServicesArea;
