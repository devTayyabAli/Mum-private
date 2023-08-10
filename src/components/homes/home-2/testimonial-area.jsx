import StartIcon from "@/src/svg/start-icon";
import React, { useRef } from "react";

import Slider from "react-slick";

import { Image } from "antd";

const slider_data = [
  {
    id: 1,
    img: "./assets/az8.webp",
    name: "Lana Rey",
    job: "Founder & Leader",
    info: (
      <>
        "Is it possible to Love your credit card processor? with Softec, yes!"
      </>
    ),
  },
  {
    id: 2,
    img: "./assets/az11.webp",
    name: "J. McGhee",
    job: "Founder & Leader",
    info: (
      <>
        "Is it possible to Love your credit card processor? with Softec, yes!"
      </>
    ),
  },
  {
    id: 3,
    img: "./assets/az10.webp",
    name: "Michael H.",
    job: "Founder & Leader",
    info: (
      <>
        "Is it possible to Love your credit card processor? with Softec, yes!"
      </>
    ),
  },
  {
    id: 4,
    img: "./assets/conf.jpg",
    name: "Lana Rey",
    job: "Founder & Leader",
    info: (
      <>
        "Is it possible to Love your credit card processor? with Softec, yes!"
      </>
    ),
  },
];

// slider setting
const setting = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const testimonial_content = {
  bg_img: "/assets/img/testimonial/testi-bg-2-1.png",
  title: <>Gallery</>,
};
const { bg_img, title } = testimonial_content;
const TestimonialArea = () => {
  const sliderRef = useRef();
  return (
    <>
      

      <section id="venue" style={{ padding: 0 }}>
        <br />
        <br />
        <div
          className="container-fluid aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="section-header">
            <h2>Event Venue</h2>
            <p>Event venue location info and gallery</p>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 venue-map">
              <iframe
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.423261842811!2d28.704164075936713!3d40.99410817135258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1a51db1def5%3A0x6ef286c62b8744fe!2sDoubleTree%20by%20Hilton%20Istanbul%20-%20Avcilar!5e0!3m2!1sen!2s!4v1685146326255!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>
            <div className="col-lg-6 venue-info">
              <div className="row justify-content-center">
                <div className="col-11 col-lg-8 position-relative">
                  <h3>DoubleTree by Hilton Avcilar</h3>
                  <p>
                    Situated in the European side of the city, Hilton is close
                    to Taksim Square, with its shops, restaurants, night spots,
                    and cafes. Lose yourself in the labyrinth of the Grand
                    Bazaar, selling everything from spices to intricate Turkish
                    fabrics. Don’t miss seeing some of Istanbul’s legendary
                    buildings, including Topkapi and Dolmabahce Palaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section> 

      <div
        className="tp-testimonial-2-area pt-110 pb-120"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-testimonial-2-section-box mb-15 text-center">
                <h3 className="tp-section-title-lg text-white">{title}</h3>
                <p className="text-white">
                  {" "}
                  View our gallery from the recent events
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-testimonial-2-section">
                <Slider
                  {...setting}
                  ref={sliderRef}
                  className="tp-testimonial-2-slider-active"
                >
                  {slider_data.map((item, i) => (
                    <div
                      key={i}
                      className="tp-testimonial-2-item p-relative wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src={item.img}
                        alt="theme-pure"
                        style={{ borderRadius: "15px" }}
                      />
                      

                      {/* <div className="tp-testimonial-2-star">
                                       <span>
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon /> 
                                       </span> 
                                    </div> */}
                      {/* <div className="tp-testimonial-2-content">
                                       <p>{item.info}</p>
                                    </div>
                                    <div className="tp-testimonial-2-author d-flex align-items-center">
                                       <div className="tp-testimonial-2-img">
                                          <Image src={item.img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-2-author-info">
                                          <h5>{item.name}</h5>
                                          <span>{item.job}</span>
                                       </div>
                                    </div> */}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section id="neoterican" className="section-with-bg">
        <br />
        <br />
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Neoterican</h2>
            <h6
              style={{
                textAlign: "center",
                color: "grey",
                margin: 0,
                padding: 0,
              }}
            >
              Our parent company
            </h6>
          </div>
          <div
            className="row no-gutters supporters-wrap clearfix aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay={100}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p>
              <Image
                loading="lazy"
                src="https://deliverysources.web.app/IstanbulMUN/images/neoLogo.webp"
                className="img-fluid"
                style={{
                  width: 170,
                  height: 170,
                  float: "left",
                  marginRight: 15,
                  marginBottom: 10,
                }}
                alt="Neoterican Istanbul MUN"
              />
              Istanbul International MUN is a project of{" "}
              <a
                target="_blank"
                style={{ color: "#f99f1b" }}
                href="https://neoterican.com"
              >
                Neoterican LLC
              </a>
              . Neoterican is a US-based organization committed to provide the
              youth with an international exposure. We, at Neoterican, aim to
              engage the youth in various forms of discourses to expose them to
              the problems of the world and enable them to draft plausible and
              best solutions. We yearn to make the leaders of tomorrow, today.
              <br />
              Our mission is to inculcate a new vision in the youth we serve. We
              bring to them a platform, where they are immersed wholly, as
              leaders and peacemakers, in an environment where they have to
              uptake the responsibilities as leaders and come together with each
              other to conclude what will the world best.
              <br />
              Through our projects, we yearn to impart meaningful and important
              skills in the young generation that becomes a part of us. We aim
              to develop leadership skills, diplomatic skills, analytical and
              assessment skills, and most importantly, the ability to negotiate,
              compromise and understand each other. We believe in equal
              opportunity for everyone and that’s why, in our programs, we focus
              on each and every participant equally. We are committed to build
              confidence, sociability, tolerance, and empathy in the
              participants. Istanbul International Model United Nations is our
              upcoming event. It is a simulation of the United Nations where
              participants come as delegates and are allotted different nations
              to represent. These delegates will formulate solutions together to
              various matters concerning the world. These delegates will become
              a part of our international social network and play their part for
              a better tomorrow. Learn more at{" "}
              <a
                target="_blank"
                style={{ color: "#f99f1b" }}
                href="https://neoterican.com"
              >
                neoterican.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialArea;
