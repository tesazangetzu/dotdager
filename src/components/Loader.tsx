import React from "react";
import { motion } from "framer-motion";
import loaderM from "../images/loader-m.png";
import SvgAnimation from "./items/SvgAnimation";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-50">
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 500, opacity: 0 }}
        transition={{ duration: 1, delay: 6, ease: "easeInOut" }}
        className="relative w-screen h-screen bg-white"
      >
        <motion.div
          initial={{ y: 500, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{
            y: { duration: 1, delay: 1, ease: "easeInOut" },
            x: { duration: 1, delay: 3, ease: "easeInOut" },
            opacity: { duration: 1, delay: 1, ease: "easeInOut" },
          }}
          className="absolute top-[38%] left-11 sm:left-[39%] md:left-[30%] lg:left-[34%] inline-flex"
        >
          <img src={loaderM} alt="m" className="z-10" />
          <SvgAnimation/>
        </motion.div>
      </motion.div>
    </div>
  );
};
