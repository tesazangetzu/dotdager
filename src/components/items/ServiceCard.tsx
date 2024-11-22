import React from "react";
import img from "../../images/service-img.png";
import img2 from "../../images/project.png";
import img3 from "../../images/service3.png";
import awards from "../../images/awards.png";
import { OptSkill } from "./OptSkill";

export const ServiceCard = () => {
  const skills = [
    "UX Design",
    "UI Design",
    "UI Kit",
    "Design System",
    "Interaction design",
  ];

  return (
    <div className="flex items-center justify-center bg-white rounded-3xl">
      <div className="container relative flex flex-col lg:flex-row justify-start items-start lg:py-10 lg:px-14">
        <div className="order-2 lg:order-1 lg:w-3/5 lg:h-[520px] relative px-6 pb-20 xl:pb-0 lg:pt-12 xl:pr-32">
          <h3 className="text-3xl lg:text-4xl font-medium lg:w-[420px] mb-5">
            UX UI Design
          </h3>
          <ul className="list-none flex flex-wrap mb-2 lg:mb-5 w-full">
            {skills.map((v, i) => <OptSkill text={v} key={i}/>)}
          </ul>
          <p className="mb-4 text-sm lg:text-base lg:leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi
            minima pariatur numquam labore, modi laudantium, a quod delectus
            natus reprehenderit odit tempore consequatur earum nihil eos dolor
            in repudiandae!
          </p>
          <div className="absolute lg:bottom-1 lg:left-0">
            <span>Marcas</span>
            <img src={awards} alt="brand" />
          </div>
        </div>
        <div className="order-1 lg:order-2 mb-5 w-full lg:mb-0 lg:w-2/5 sm:h-[260px] lg:h-[520px]">
          <img
            src={img}
            alt="service"
            className="h-inherit hidden lg:block rounded-3xl"
          />
          <img
            src={img2}
            alt="service"
            className="h-inherit block sm:hidden"
          />
          <img
            src={img3}
            alt="service"
            className="h-inherit hidden w-full sm:block lg:hidden rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
