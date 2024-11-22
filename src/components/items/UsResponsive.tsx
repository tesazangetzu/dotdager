import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import us1 from "../../images/us-1.png";
import us2 from "../../images/us-2.png";
import logo from "../../images/logo-white.png";

export const UsResponsive = () => {
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
    <div className="block lg:hidden">
      <motion.h3
        ref={textRef}
        className="text-center font-normal mb-10 hidden sm:block"
        animate={{
          fontSize: inView ? "24px" : "16px",
        }}
        transition={{ duration: 1 }}
      >
        Somos un equipo enfocado en transformar <br /> tus ideas en soluciones
      </motion.h3>
      <div
        className="relative flex justify-center items-center h-[550px] overflow-hidden -mx-9 [&>img]:absolute"
        // onClick={() => setIsTransformed(!isTransformed)}
      >
        <motion.img
          src={logo}
          className="logo"
          width={210}
          animate={{
            x: isTransformed ? 70 : 0,
            y: isTransformed ? -150 : -220,
            rotate: isTransformed ? -30 : 0,
          }}
          transition={transition}
        />
        <motion.img
          src={us1}
          className="person-1"
          width={127}
          animate={{
            x: isTransformed ? -70 : 0,
            y: isTransformed ? 10 : -10,
          }}
          transition={transition}
        />
        <motion.img
          src={us1}
          className="person-2"
          width={127}
          animate={{
            x: isTransformed ? 100 : 150,
            y: isTransformed ? 30 : -80,
          }}
          transition={transition}
        />
        <motion.img
          src={us2}
          className="banana-1"
          width={200}
          animate={{
            x: isTransformed ? -80 : -90,
            y: isTransformed ? -130 : -70,
            rotate: isTransformed ? 180 : 170,
          }}
          transition={transition}
        />
        <motion.img
          src={us2}
          className="banana-2"
          width={200}
          animate={{
            x: isTransformed ? -40 : -90,
            y: isTransformed ? 160 : 150,
            rotate: [190],
          }}
          transition={transition}
        />
        <motion.img
          src={us2}
          className="banana-3"
          width={200}
          animate={{
            x: isTransformed ? 80 : 80,
            y: isTransformed ? 160 : 140,
            rotate: isTransformed ? 10 : -20,
          }}
          transition={transition}
        />
      </div>
    </div>
  );
};
