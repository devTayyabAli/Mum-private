import LinearGradientLine from "@/src/svg/linear-gradient-line";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// service img import
import service_img_1 from "../../../../public/assets/img/service/sv-icon-2-1.png";
import service_img_2 from "../../../../public/assets/img/service/sv-icon-2-2.png";
import service_img_3 from "../../../../public/assets/img/service/sv-icon-2-3.png";
import service_img_4 from "../../../../public/assets/img/service/sv-icon-2-4.png";
import bg_img from "../../../../public/assets/img/service/sv-bg-2-1.jpg";

const service_content = {
  title: (
    <>
     WHAT IS IN IT FOR YOU
    </>
  ),
  des: <>We've got all your payments covered</>,

  users_data: [
    {
      id: 1,
      users_count: (
        <>
          3.5<i>m</i>
        </>
      ),
      users_status: <>Active Users</>,
    },
    {
      id: 2,
      users_count: (
        <>
          240<i>+</i>
        </>
      ),
      users_status: <>Trusted Companies</>,
    },
    {
      id: 3,
      users_count: (
        <>
          78<i>k</i>
        </>
      ),
      users_status: <>Customer care</>,
    },
  ],
  service_data: [
    {
      id: 1,
      color: "",
      title: "Change the world",
      dec:"An opportunity to collaborate with the global community to find plausible solutions to rising problems",

      img: service_img_1,
    },
    {
      id: 2,
      color: "2",
      title: "Global exposure",
      dec:"An outclass chance of networking with the international community of delegates and secretariat",
      img: service_img_2,
    },
    {
      id: 3,
      color: "3",
      title: "Diplomacy skills",
      dec:"We believe in meaningful discourses. We aspire to inculcate the ability to negotiate and debate through dialogue",
      img: service_img_3,
    },
    {
      id: 4,
      color: "4",
      title: "Recognition",
      dec:"Be recongnized and known for your solutions in the Neoterican network. We testify your contribution with a UNHCR endorsed certificate",
      img: service_img_4,
    },
  ],

  free_tools_title: "More free tools than you can handle",
  free_tools: [
    <>Invoicing</>,
    <>Online Checkout</>,
    <>Point-of-Sale</>,
    <>Online Food Ordering</>,
    <>ICard Vault</>,
    <>Customer Portal</>,
    <>Inventory</>,
    <>Virtual Terminal</>,
    <>Recurring Plans</>,
    <>Payment Links</>,
    <>SMS Payments</>,
    <>QR Codes</>,
  ],
};
const { title, des, users_data, service_data, free_tools_title, free_tools } =
  service_content;

const ServiceArea = () => {
  return (
    <>
     

      <div className="tp-service-2__area p-relative  pb-160">
        <div className="row justify-content-center">
          <div
            className="col-xl-10 wow tpfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="tp-service-2__bottom-wrapper p-relative mt-110">
              <div className="tp-service-2__feature-item">
                <h4 className="tp-service-2__feature-title">OUR MISSION</h4>
                <p>
                  Our mission is to inculcate a new vision in the youth we
                  serve. We bring to them a platform, where they are immersed
                  wholly, as diplomats and peacemakers, in an environment where
                  they have to uptake the responsibilities as leaders and
                  policymakers and change the world for the better.
                </p>
              </div>
            </div>
          </div>
        </div>
      <br />
      <br />
      <br />
        <div className="tp-service-2__shape ">
          <Image src={bg_img} alt="theme-pure" />
        </div>
        <div className="container z-index-5">
          <div className="row align-items-center mb-50">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-2__section-box">
                <h3 className="tp-section-title-lg pb-20">{title}</h3>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                <div className="tp-service-2__user-shape">
                  {/* <LinearGradientLine /> */}
                </div>
                {/* {users_data.map((item, i) => (
                  <div key={i} className="tp-service-2__user">
                    <span>{item.users_count}</span>
                    <p>{item.users_status}</p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
          <div className="row gx-60">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".8s"
              >
                <div className="tp-service-2__item-wrapper p-relative">
                  <div className="tp-service-2__item d-flex justify-content-between flex-column">
                    <div className="tp-service-2__icon">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="tp-service-2__text">
                      <h4 className="tp-service-2__title-sm">
                        <Link href="/service-details">{item.title}</Link>
                      </h4>
                    <p>{item.dec}</p>
                      <Link
                        className="tp-service-2__link"
                        href="/service-details"
                      >
                        Explore
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
