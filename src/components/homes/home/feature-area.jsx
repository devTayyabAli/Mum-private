import RightArrow from "@/src/svg/right-arrow";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import {BiMedal,BiSolidLeaf} from 'react-icons/bi'
import {RiGovernmentFill,RiHandHeartFill,RiHeart2Fill,RiEye2Fill} from 'react-icons/ri'


import feature_bottom_shape from "../../../../public/assets/img/feature/fea-bg-shape-1.webp";

// feature data
const feature_data = [
  {
    id: 1,
    img: <> <BiMedal className="Icon_style"/></>,
    title: <>Leadership</>,
    Discription: <>We want the youth to think like leaders. We want a sense of responsibility and action to resonate amongst the leaders of tomorrow</>,

    delay: ".4s",
  },
  {
    id: 2,
    img: <> <RiGovernmentFill className="Icon_style"/></>,
    title: <>Diplomacy</>,
    Discription:<>We believe in structured and meaningful discourses. We aspire to inculcate the ability to negotiate and debate through dialogue</>,

    delay: ".6s",
  },
  {
    id: 3,
    img: <> <BiSolidLeaf className="Icon_style"/></>,
    title: (
      <>
        Peace
      </>
    ),
    Discription:<>There always exist a peaceful solution to all problems. We find the need to teach participants to prioritize peace over everything else</>,
    delay: ".8s",
  },
  {
   id: 3,
   img: <> <RiHandHeartFill className="Icon_style"/></>,
   title: (
     <>
      Harmony
     </>
   ),
   Discription:<>The best course of addressing problems is mutual agreement and consensus. It is our objective to instill the ability communicate and compromise</>,
   delay: ".8s",
 },{
   id: 3,
   img: <> <RiHeart2Fill className="Icon_style"/></>,
   title: (
     <>
      Empathy
     </>
   ),
   Discription:<>At the heart of any diplomatic discourse lies the capability to empathize. The first step is always understanding eachother</>,
   delay: ".8s",
 },{
   id: 3,
   img: <> <RiEye2Fill className="Icon_style"/></>,
   title: (
     <>
     Vision
     </>
   ),
   Discription:<>We strive to develop a sense of practicality, innovativeness, and foresight in our members. We want to enable them find plausible and meaningful solutions</>,
   delay: ".8s",
 },
];

// feature content
const feature_content = {
  title: "WHAT WE HOPE TO INCULCATE",
  sub_title: "More than 15,000 companies trust and choose Itech",
};
const { title, sub_title } = feature_content;

const FeatureArea = () => {
  let titleRef = useRef(null);
  useTitleAnimation(titleRef);

  return (
    <>
      <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
        <div className="tp-feature__bottom-shape">
          <Image
            style={{ height: "auto" }}
            src={feature_bottom_shape}
            alt="them-pure"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 wow tpfadeUpp"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div
                ref={titleRef}
                className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim"
              >
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {feature_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div id="divtest" className="tp-feature__item text-center">
                  <div className="icon-box">
                    <div className="icon">
                    {/* <Image src={item.img} alt={item.title} /> */}
                     {
                      item.img
                     }
                    </div>
                    <h4>
                      <a href="">{item.title}</a>
                    </h4>
                    <p>
                    {item.Discription}
                    </p>
                  </div>

                  {/* <div className="tp-feature__icon">
                              <Image src={item.img} alt={item.title} />
                           </div>
                           <h3 className="tp-feature__title-sm">{item.title}</h3>
                           <div className="tp-feature__link tp-common-btn">
                              <Link href="/service-details">
                                 <RightArrow />
                              </Link>
                           </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
