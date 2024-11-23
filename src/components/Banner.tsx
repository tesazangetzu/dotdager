import React, { useRef } from "react";
import mBig from "../images/d-big.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./Header";

gsap.registerPlugin(ScrollTrigger);

export const Banner = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const overlaySectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="h-[956px] px-28  bg-white overflow-hidden"
    >
      <div className="container relative pt-20">
        <Header />
        <div
          className="h-screen w-full absolute top-0 left-0 bg-white z-10 hidden"
          ref={overlaySectionRef}
        ></div>
        <motion.div
          className="w-[564px] pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
        >
          <h1 className="text-7xl mb-10">
            We transform your ideas into innovative solutions
          </h1>
          <button
            type="button"
            className="py-4 px-8 rounded-full bg-custom-1 text-black"
          >
            Contact us
          </button>
        </motion.div>
        <motion.img
          ref={imageRef}
          src={mBig}
          alt="m-big"
          initial={{ y: 500, x: -200, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
          className="absolute top-[250px] -right-[350px] w-[1400px] z-10"
        />
      </div>
    </section>
  );
};
