import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo-black.png";
import { useLockBodyScroll } from "../utils/useLockBodyScroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useLockBodyScroll(isMenuOpen);

  return (
    <motion.header
      className="absolute top-0 left-0 flex justify-between items-center w-full h-20 px-6 sm:px-22 lg:px-0"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
    >
      <img src={logo} alt="logo" width={150} />

      {/* Botón hamburguesa en responsive */}
      <div className="lg:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen && <span className="text-3xl">&#9776;</span>}
        </button>
      </div>

      {/* Menú en desktop */}
      <ul className="hidden lg:flex justify-start items-center [&>li]:cursor-pointer">
        <li className="mx-5">Start</li>
        <li className="mx-5">Services</li>
        <li className="mx-5 mr-16">Projects</li>
        <li className="rounded-3xl bg-custom-1 px-8 py-3 cursor-pointer">
          Contact
        </li>
      </ul>

      {/* Menú en responsive */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button
            className="absolute top-5 right-6 text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-black/50">&times;</span>
          </button>
          <ul className="text-lg text-center pt-16 pl-6 mb-10 [&>li]:text-left [&>li]:mb-5">
            <li>Start</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <button
            type="button"
            className="w-40 ml-6 mt-[70%] py-4 px-8 rounded-full bg-custom-1 text-black"
          >
            Contact
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};
