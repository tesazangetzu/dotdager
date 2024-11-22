import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../images/awards-white.png";
import img2 from "../images/logolounge.png";
import img3 from "../images/dribbble.png";
import img4 from "../images/behance.png";
import img5 from "../images/layers.png";

export const Experience = () => {
  return (
    <section className="bg-black py-24 border-no overflow-hidden">
      <div className="container">
        <h3 className="text-3xl sm:text-4xl font-medium text-center text-white mb-16">
          Tenemos + 10 años de experiencia
        </h3>
        <Swiper
          slidesPerView={6}
          spaceBetween={64}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          slidesPerGroup={1}
          centeredSlides={true}
          breakpoints={{
            375: {
              slidesPerView: 2.3,
              spaceBetween: 42,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 64,
            },
          }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <SwiperSlide key={i}>
              <img
                src={[img1, img2, img3, img4, img5][i % 5]}
                alt="logo-ex"
                className="mb-12"
              />
              <img
                src={[img1, img2, img3, img4, img5][i % 5]}
                alt="logo-ex"
                className="mb-12"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
