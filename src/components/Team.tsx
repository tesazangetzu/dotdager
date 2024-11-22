import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import img from "../images/team.png";
import linkedin from "../images/linkedin.svg";

export const Team = () => {
  const secctionRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  useEffect(() => {
    setTimeout(
      () => {
        setShowNavigation(inView);
      },
      inView ? 1000 : 0
    );
  }, [inView]);

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
    <section className="bg-black px-6 py-16 sm:h-screen lg:px-0 lg:py-16 xl:py-22 overflow-hidden">
      <div className="container">
        <div className="block sm:flex justify-around items-start mb-10 lg:mb-20">
          <motion.h3
            ref={secctionRef}
            className="text-white font-semibold text-3xl text-center mb-4 sm:mb-0 sm:text-5xl sm:text-left"
            initial={{ x: -100, scale: 0.6 }}
            animate={{ x: inView ? 0 : -100, scale: inView ? 1 : 0.6 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Meet the team
          </motion.h3>
          <motion.p
            ref={secctionRef}
            className="text-white sm:text-3xl sm:w-[605px]"
            initial={{ x: -100, scale: 0.6 }}
            animate={{ x: inView ? 0 : -100, scale: inView ? 1 : 0.6 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Our passion for technology and design drives us to create solutions
            that stand out <span className="text-custom-1">●</span>
          </motion.p>
        </div>
        <Swiper
          id="team"
          slidesPerView={4}
          spaceBetween={6}
          centeredSlides={true}
          navigation={showNavigation}
          modules={[Navigation, Pagination]}
          loop={false}
          speed={600}
          initialSlide={2}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          breakpoints={{
            375: {
              slidesPerView: 1.3,
              spaceBetween: 6,
              centeredSlides: false,
            },
            435: {
              slidesPerView: 1.3,
              spaceBetween: 6,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 6,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 6,
              centeredSlides: true,
            },
          }}
        >
          {showNavigation && (
            <div className="absolute top-[90%] left-[43%] sm:top-[118%] sm:left-[47%]  text-center text-white lg:hidden">
              {currentSlide} de {totalSlides}
            </div>
          )}
          {Array.from({ length: 6 }, (_, i) => {}).map((slider, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  className="relative"
                  initial={{ y: 600, opacity: 0 }}
                  animate={{
                    y: inView ? 0 : 600,
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: inView ? index * 0.1 : 0,
                    ease: "easeInOut",
                  }}
                >
                  <img src={img} alt="team" className="team-img w-full" />
                  <div className="absolute w-full h-[119px] bg-gradient-to-t from-zinc-800 to-transparent text-white p-6 bottom-0">
                    <p className="absolute text-4xl">Lucas</p>
                    <p className="absolute text-base bottom-6 left-6">
                      Design Lead
                    </p>
                    <a href="http://" className="absolute bottom-6 right-6">
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
