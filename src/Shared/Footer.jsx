import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideCTA =
    location.pathname === "/about" || location.pathname === "/coach" ||  location.pathname.startsWith("/blog/");
  return (
    <div className="container mb-5">
      <footer className="rounded-[50px] bg-[#0D0D0D] text-white py-16 mb-5 relative w-full">
        {/* Container */}
        <div className="px-6 xl:px-40">
          {/* CTA Section */}

          {!hideCTA && (
            <div className="text-center mb-16">
              <h2 className="text-white text-center font-poppins font-semibold capitalize leading-[164%] 4xl:text-[90px] 3xl:text-[70px] 2xl:text-[90px] xl:text-[48px] lg:text-[40px]">
                Build A Better Tomorrow By <br />
                Taking Care Of Today
              </h2>
              <Link to="/home">
                <button
                  className="mt-8 text-sm px-4 py-2 sm:text-base cursor-pointer sm:px-6 sm:py-3 md:text-lg md:px-8 md:py-4 lg:text-xl lg:px-10 lg:py-5 
                   rounded-full border border-white 
                   bg-black text-white 
                    hover:bg-white hover:text-black 
                   transition duration-700"
                >
                  Find Your Pillars Coach
                </button>
              </Link>
            </div>
          )}

          {/* Footer Grid */}
          <div className="border-t border-gray-800 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm 2xl:w-1/2">
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Link</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/" className="font-bold text-white">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                </ul>
              </div>

              {/* Social Links - Column 1 */}
              <div>
                <h4 className="font-semibold mb-4">FOLLOW US</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      LINK DINE
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FACEBOOK
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links - Column 2 */}
              <div>
                <h4 className="font-semibold mb-4">FOLLOW US</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      LINK DINE
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FACEBOOK
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="flex justify-between flex-col lg:flex-row gap-6 mt-10">
            <div className="">
              <p>© 2025 Pillars, All Rights Reserved</p>
            </div>
            <div className="flex lg:flex-row flex-col gap-6">
              <Link to="/privacy-policy">Privacy policy</Link>
              <Link to="/terms-and-conditions">Terms and conditions</Link>
              <Link to="/cookies-policy">Cookies policy</Link>
            </div>
          </div>
        </div>

        {/* Background Text */}
        <h1 className="text-gradient text-[70px] leading-[70px] xs:text-[100px] xs:leading-[100px] sm:text-[160px] sm:leading-[160px]  md:text-[180px] md:leading-[180px] lg:text-[220px] lg:leading-[220px]   xl:text-[290px] xl:leading-[290px] mt-[100px] 2xl:text-[400px] 2xl:leading-[400px]  text-center font-bold select-none">
          PILLARS
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
