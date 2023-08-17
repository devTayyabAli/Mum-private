import Image from 'next/image';
import { gsap } from 'gsap';
import Link from 'next/link';
import Offcanvus from '@/src/common/offcanvus';
import SearchPopup from '@/src/modals/search-popup';
import SearchIconTwo from '@/src/svg/search-icon-2';
import UserIcon from '@/src/svg/user-icon';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import NavMenu from './nav-menu';
import useSticky from '@/src/hooks/use-sticky';
import logo from "../../../public/assets/img/logo/logo-black.webp"
import { BsArrowRightShort } from 'react-icons/bs';



const Header = () => {
   const { sticky } = useSticky()
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)
   // gsa use
   let g_timline = new gsap.timeline();
   let header_top_animation = useRef(null)

   useEffect(() => {
      gsap.from(header_top_animation, {
         opacity: 0,
         y: '20px',
         delay: 1.05
      });
      gsap.to(header_top_animation, {
         opacity: 1,
         y: '0px',
         delay: 1.05
      })
   }, [])

   return (
      <>
         <header className="header-bottom__transparent z-index-6 tp-header-height mt-5">
            <div id="header-sticky" className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}>
               <div className="container">
                  <div className="row align-items-center mt-4">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="header-bottom__logo">
                           <Link href="/">
                              <Image src={logo} alt="" style={{ width: "30%" }} loading="lazy" />
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                        <div className="header-bottom__main-menu">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                        <div className="header-bottom__right d-flex align-items-center justify-content-end">
                           <div className="header-bottom__btn d-flex align-items-center">
                              {/* <Link className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block "   href={"/register"}>
                                    <span className="white-text d-flex align-items-center ">REGISTER NOW  <BsArrowRightShort className="fs-2"/></span>
                                    <b></b>
                                 </Link> */}
                              <Link className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block "
                                 //  href="/service-details" 
                                 href={"/"}
                                 onClick={() => {
                                    registrations(document.getElementById("personalPortal"), {
                                       sourceLink: "https://localhost",
                                       project: 4,
                                       sequentialPostScriptLoad: true,
                                    });
                                    var portalContainer = document.getElementById('portalContainer')
                                    portalContainer.style.display = "block"
                                 }}>
                                 <span className="white-text d-flex align-items-center ">REGISTER NOW  <BsArrowRightShort className="fs-2" /></span>
                                 <b></b>
                              </Link>
                              <a className="header-bottom__bar d-lg-none tp-menu-bar" onClick={() => setSidebarOpen(true)}><i className="fal fa-bars"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
         <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </>
   );
};


export default Header;