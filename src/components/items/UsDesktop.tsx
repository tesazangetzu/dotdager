import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import us1 from "../../images/us-1.png";
import us2 from "../../images/us-2.png";
import logo from "../../images/logo-white.png";

export const UsDesktop = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);
  const transition = { duration: 1 };

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const sectionTop = textRef.current.getBoundingClientRect().top;
        const sectionBottom = textRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (
          (sectionTop < windowHeight && sectionTop >= 0) ||
          (sectionBottom > 0 && sectionBottom <= windowHeight)
        ) {
          setInView(true);
          setIsTransformed(true);
        } else {
          setInView(false);
          setIsTransformed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <motion.h3
        ref={textRef}
        className="text-center font-normal mb-10"
        animate={{
          fontSize: inView ? "36px" : "20px",
        }}
        transition={{ duration: 1 }}
      >
        We are a team focused on transforming <br /> your ideas into solutions
      </motion.h3>
      <div
        className="relative flex justify-center items-center h-[784px] overflow-hidden [&>img]:absolute"
        // onClick={() => setIsTransformed(!isTransformed)}
      >
        <motion.img
          src={us1}
          className="person-1"
          width={200}
          animate={{
            x: isTransformed ? -450 : -540,
            y: isTransformed ? -60 : -200,
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us1}
          className="person-2"
          width={200}
          animate={{
            x: isTransformed ? 20 : 0,
            y: isTransformed ? -240 : -300,
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us1}
          className="person-3"
          width={200}
          animate={{
            x: isTransformed ? 280 : 500,
            y: isTransformed ? -210 : -270,
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us1}
          className="person-4"
          width={200}
          animate={{
            x: isTransformed ? 50 : 50,
            y: isTransformed ? 160 : 250,
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us2}
          className="banana-1"
          width={250}
          animate={{
            x: isTransformed ? -200 : -280,
            y: isTransformed ? -200 : -220,
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us2}
          className="banana-2"
          width={250}
          animate={{
            x: isTransformed ? -300 : -450,
            y: isTransformed ? 150 : 40,
            rotate: [110],
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us2}
          className="banana-3"
          width={250}
          animate={{
            x: isTransformed ? -140 : -320,
            y: isTransformed ? 40 : 150,
            rotate: [-30],
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us2}
          className="banana-4"
          width={250}
          animate={{
            x: isTransformed ? 340 : 310,
            y: isTransformed ? 0 : -100,
            rotate: [-30],
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={us2}
          className="banana-5"
          width={250}
          animate={{
            x: isTransformed ? 320 : 400,
            y: isTransformed ? 180 : 250,
            rotate: [30],
          }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={logo}
          className="logo"
          width={280}
          animate={{
            x: isTransformed ? 90 : 10,
            y: isTransformed ? -80 : 0,
            rotate: isTransformed ? -34 : 0,
          }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
