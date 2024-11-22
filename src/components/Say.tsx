import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slidesSay } from "../utils/data";

export const Say = () => {
  const secctionRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);
  const [page, setPage] = useState(0);

  const calculatePosition = (index: number) => {
    const positions = [
      { top: [40, 20, 0], left: [0, 20, 40] },
      { top: [20, 0, 0], left: [0, 20, 2040] },
      { top: [0, 0, 0], left: [0, 2020, 2040] },
    ];
    return {
      top: positions[page].top[index],
      left: inView ? positions[page].left[index] : -1000,
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (secctionRef.current) {
        const sectionTop = secctionRef.current.getBoundingClientRect().top;
        const sectionBottom =
          secctionRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        (sectionTop < windowHeight && sectionTop >= 0) ||
        (sectionBottom > 0 && sectionBottom <= windowHeight)
          ? setInView(true)
          : setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={secctionRef}
      className="relative sm:h-screen bg-custom-1 py-16 px-6 lg:py-24 lg:px-28 overflow-hidden"
    >
      <div className="container">
        <div className="flex justify-between items-center w-full mb-14">
          <motion.h3
            className="text-4xl"
            initial={{ x: 400, scale: 0.6 }}
            animate={{ x: inView ? 0 : 400, scale: inView ? 1 : 0.6 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            What they say about us
          </motion.h3>
          <motion.div
            className="hidden sm:flex justify-around items-center w-44"
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <button
              type="button"
              className="w-12 h-12 flex justify-center items-center rounded-full border border-black bg-transparent cursor-pointer hover:bg-black hover:text-custom-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
              onClick={() => setPage(page <= 0 ? 0 : page - 1)}
              disabled={page === 0}
            >
              <i className="icon-left"></i>
            </button>
            <p className="w-12">
              {page + 1} de {slidesSay.length}
            </p>
            <button
              type="button"
              className="w-12 h-12 flex justify-center items-center rounded-full border border-black bg-transparent cursor-pointer hover:bg-black hover:text-custom-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
              onClick={() => setPage(page >= 2 ? 2 : page + 1)}
              disabled={page === slidesSay.length - 1}
            >
              <i className="icon-right"></i>
            </button>
          </motion.div>
        </div>
        <div className="relative h-[440px] flex justify-center gap-8 mb-5 sm:mb-0">
          {slidesSay.map((slide, index) => (
            <AnimatePresence initial={false} custom={page} key={slide.id}>
              <motion.div
                className="about absolute bg-white w-[290px] h-[376px] sm:w-11/12 sm:h-[392px] shadow-md"
                custom={page}
                initial={calculatePosition(index)}
                animate={calculatePosition(index)}
                exit={calculatePosition(index)}
                transition={{
                  duration: inView ? 1 : 0.5,
                  ease: "easeInOut",
                  delay: (slidesSay.length - 1 - index) * 0.3,
                }}
                style={{
                  top: `${calculatePosition(index).top}px`,
                  left: `${calculatePosition(index).left}px`,
                  zIndex: index,
                }}
              >
                <p className="text-sm sm:text-2xl sm:leading-8 mb-8">
                  "{slide.quote}"
                </p>
                <p className="text-base font-semibold sm:text-3xl mb-2">
                  {slide.text}
                </p>
                <p className="text-sm sm:text-lg">{slide.position}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
        <motion.div
          className="flex justify-around items-center w-44 m-auto sm:hidden"
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <button
            type="button"
            className="w-12 h-12 flex justify-center items-center rounded-full border border-black bg-transparent cursor-pointer hover:bg-black hover:text-custom-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
            onClick={() => setPage(page <= 0 ? 0 : page - 1)}
            disabled={page === 0}
          >
            <i className="icon-left"></i>
          </button>
          <p className="w-12">
            {page + 1} de {slidesSay.length}
          </p>
          <button
            type="button"
            className="w-12 h-12 flex justify-center items-center rounded-full border border-black bg-transparent cursor-pointer hover:bg-black hover:text-custom-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
            onClick={() => setPage(page >= 2 ? 2 : page + 1)}
            disabled={page === slidesSay.length - 1}
          >
            <i className="icon-right"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
