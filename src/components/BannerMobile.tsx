import React from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";
import img from "../images/banner-mobile.png";
import img768 from "../images/banner-768.png";
import imgM from "../images/m-monkey-mobile.png";

export const BannerMobile = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-28 bg-white">
      <Header />
      <div className="relative z-20 px-6 md:px-22">
        <motion.h1
          className="text-4xl mb-10"
          initial={{ scale: 0.6, x: -60 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Transformamos <br /> tus ideas en <br />{" "}
          <span className="font-semibold">soluciones</span> <br /> digitales
        </motion.h1>
        <motion.button
          type="button"
          className="py-4 px-6 rounded-full bg-custom-1 text-black z-10"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Contáctanos
        </motion.button>
      </div>
      <motion.img
        src={img}
        alt="mobile"
        className="absolute left-0 -bottom-20 z-10 w-screen md:hidden"
        initial={{ x: -200, y: 500 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      />
      <motion.img
        src={img768}
        alt="mobile"
        className="absolute left-0 -bottom-4 z-10 w-screen hidden md:block"
        initial={{ x: -200, y: 500 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      />
      <motion.img
        src={imgM}
        alt="m"
        className="absolute left-0 bottom-0 z-10 w-screen sm:w-auto md:right-0 md:left-auto"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{
          duration: 1,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  );
};
