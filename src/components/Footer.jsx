import React from "react";
import Logo from "../assets/Logo-icon.png";
import FallingText from "./FallingText";


const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <>
      <footer className="md:px-20 px-5 md:pt-0 py-10 bg-gradient-to-r from-[#000000] to-[#07106a]">
        
        <FallingText />
        <div className="footer-all md:flex justify-between md:py-5 py-10">
          <div className="footer_1">
            <div className="services">
              <ul className="">
                <li className="py-3">
                  <a
                    href="#"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Online Advertisement
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="#"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Offline Advertisement
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="#"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Brand Consulting
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="footer_2 md:py-0 py-10">
            <div className="services">
              <ul className="">
                <li className="py-3">
                  <a
                    href="https://www.facebook.com/PrismAdverto/"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Facebook
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="https://www.instagram.com/prismadverto/?hl=en"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Instagram
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="https://twitter.com/PrismAdverto"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Twitter
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="https://in.linkedin.com/company/prism-adverto"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="https://www.youtube.com/@prismadverto"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_3">
            <div className="services">
              <ul className="md:px-0 px-1">
                <li className="py-3 relative group">
                  {/* Link */}
                  <a
                    href="#"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    India
                  </a>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-max max-w-xs bg-black text-white text-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none z-10 shadow-lg">
                    <p className="text-[16px] font-light">
                      Artistic Wing # 3A, Coimbatore, Tamilnadu 641 029.
                    </p>
                    <p className="text-[16px] font-light">
                      project@prismadverto.net
                    </p>
                    <p className="text-[16px] font-light">
                      +91 75988 35353, +91 99409 35353
                    </p>
                  </div>
                </li>
                <li className="py-3 relative group">
                  {/* Link */}
                  <a
                    href="#"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    United States
                  </a>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-max max-w-xs bg-black text-white text-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none z-10 shadow-lg">
                    <p className="text-[16px] font-light">
                      NO: 2827 N Shiloh Rd # 252 Garland, Texas 75044.
                    </p>
                    <p className="text-[16px] font-light">
                      expert@prismadverto.net
                    </p>
                    <p className="text-[16px] font-light">+1 480-213-3701</p>
                  </div>
                </li>

                <li className="py-3 relative group">
                  {/* Link */}
                  <a
                    href="#"
                    className="text-black bg-[#ffffff88] py-2 px-7 rounded-4xl transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105"
                  >
                    Canada
                  </a>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-max max-w-xs bg-black text-white text-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none z-10 shadow-lg">
                    <p className="text-[16px] font-light">
                      No: 820 5885 Spring Garden Road, Halifax NS B3H1Y3..
                    </p>
                    <p className="text-[16px] font-light">+1 782 882 9099</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="div footer-bottom pt-10">
          <p className="text-white/50 text-end text-[14px]">
            © {thisYear} - Prism Adverto Pvt Ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
