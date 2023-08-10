import AnswerQuestion from "@/src/common/answer-question";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import img from "../../../../public/assets/img/faq/faq-1.png";
import {
  BsFacebook,
  BsFillPhoneFill,
  BsGeoAltFill,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const faq_content = {
  sub_title: "Support",
  title: (
    <>
      Frequently <br /> Asked Questions
    </>
  ),
  description: (
    <>
      Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem
      accusantium.!
    </>
  ),
  btn_text: "Get in Touch",
};
const { sub_title, title, description, btn_text } = faq_content;

const FaqArea = ({ style_service }) => {
  return (
    <>
      <div className="tp-faq-area pt-140 pb-120 fix">
        <div className="container">
          <div className="row">
            <div
              className={`col-xl-6 col-lg-6 ${
                style_service && "wow tpfadeLeft"
              }`}
              data-wow-duration={style_service && ".9s"}
              data-wow-delay={style_service && ".4s"}
            >
              <div className="tp-faq-left-wrapper p-relative">
                <div
                  className={`tp-faq-section-box ${
                    style_service && "tp-inner-font tp-inner-faq-box"
                  } pb-20`}
                >
                  <h4
                    className={`${
                      style_service
                        ? "inner-section-subtitle"
                        : "tp-section-subtitle-2"
                    }`}
                  >
                    {sub_title}
                  </h4>
                  <h3
                    className={`${
                      style_service ? "tp-section-title" : "tp-section-title-lg"
                    }`}
                  >
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
                <div className="tp-faq-btn">
                  <Link
                    className={`${
                      style_service
                        ? "tp-btn-inner tp-btn-hover alt-color-black"
                        : "tp-btn-green"
                    } `}
                    href="/contact"
                  >
                    {btn_text}
                  </Link>
                </div>
                <div
                  className="tp-faq-img"
                  data-parallax='{"x": -50, "smoothness": 30}'
                >
                  <Image src={img} alt="" />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <AnswerQuestion />
            </div>
          </div>
        </div>
      </div>

      {/* <section id="contact" className="section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>We are here to help</p>
          </div>
          <div className="row contact-info">
            <div className="col-md-4">
              <div className="contact-address">
               
                <i className="bi">
                  <BsGeoAltFill />
                </i>

                <h3>Address</h3>
                <a href="https://goo.gl/maps/aanoLH5aJm11qEJs7" target="_blank">
                  <address style={{ fontSize: 15, color: "inherit" }}>
                    1309 Coffeen Avenue STE 1200, Sheridan, WY, USA, 82801
                  </address>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-phone">
                
                <i className="bi">
                  <BsFillPhoneFill />
                </i>

                <h3>Phone</h3>
                <p>
                  <a href="tel:+14245351631">+1 (424) 535-1631</a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-email">
                <i className="bi">
                  <HiOutlineMail />
                </i>

                <h3>Email</h3>
                <p>
                  <a href="mailto:support@istanbulmun.com">
                    support@istanbulmun.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row contact-info">
            <div className="col-md-4">
              <div className="contact-address">
       
                <i className="bi">
                  <BsFacebook />
                </i>

                <h3>Facebook</h3>
                <p>
                  <a
                    href="https://www.facebook.com/istanbulmun"
                    target="_blank"
                  >
                    facebook.com/istanbulmun
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-phone">
                <i className="bi">
                  <BsInstagram />
                </i>

                <h3>Instagram</h3>
                <p>
                  <a
                    href="https://www.instagram.com/istanbulmun"
                    target="_blank"
                  >
                    instagram.com/istanbulmun
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-email">
                <i className="bi">
                  <BsWhatsapp />
                </i>
                <h3>Whatsapp</h3>
                <p>
                  <a
                    target="_blank"
                    href="https://wa.me/14245351631?text=Istanbul+International+Model+United+Nations"
                  >
                    +1 (424) 535-1631
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default FaqArea;
