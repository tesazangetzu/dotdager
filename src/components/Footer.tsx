import React from "react";
import facebook from "../images/facebook.svg";
import tiktok from "../images/tiktok.svg";
import instagram from "../images/instagram.svg";
import logo from "../images/logo-black.png";
import mark from "../images/mark.svg";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <footer className="bg-custom-1 px-6 sm:pt-22 lg:px-0 xl:h-[789px] lg:pt-22">
      <div className="container">
        <div className="flex-wrap lg:flex lg:justify-between lg:px-28">
          <Contact />
          <hr className="border-black -mx-6 lg:hidden" />
          <div className="order-2 pt-12 pb-6 border-b border-black lg:border-b-0 lg:pt-0 lg:pb-0 lg:order-1">
            <img
              src={logo}
              alt="logo"
              width={250}
              className="mb-10 m-auto lg:mb-20 lg:mx-0"
            />
            <p className="text-3xl lg:text-4xl font-medium mb-6 lg:mb-8">
              instagram.com/dager.32
            </p>
            <p className="text-3xl lg:text-4xl font-medium mb-6 lg:mb-8">
              +51 999 999 999
            </p>
            <div className="flex justify-start items-center">
              <img src={mark} alt="mark" className="mr-3" />
              <p>Lorem ipsum dolor sit amet, Lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:justify-between lg:items-center lg:py-8 lg:px-28">
          <div className="order-3 border-t border-black sm:text-center pt-6 pb-12 lg:py-0 lg:border-0 lg:order-1">
            <p>© DotDager 2024. All rights reserved</p>
            <p className="flex justify-start sm:justify-center items-center mt-4 lg:hidden">
              Designed and developed by
              <img src={logo} alt="logo" className="w-20" />
            </p>
          </div>
          <div className="order-1 pt-6 pb-10 lg:py-0 lg:order-2">
            <p className="mb-4 lg:hidden">Siguenos:</p>
            <ul className="flex [&>li]:px-2">
              <li>
                <a href="https://www.tiktok.com/@elantrodedager" target="_blank" rel="noopener noreferrer">
                  <img src={tiktok} alt="socialNetword" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dager.32/" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="socialNetword" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
