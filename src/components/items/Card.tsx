import React, { FC } from "react";
import { motion } from "framer-motion";
import img from "../../images/project.png";

export const Card: FC<CardProps> = ({ isOpen }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className="text-white mr-6 group w-full sm:w-auto mb-20 sm:mb-0"
    >
      <div className="relative overflow-hidden rounded-ss-3xl rounded-se-3xl mb-6">
        <img
          src={img}
          alt="project"
          className="rounded-ss-3xl rounded-se-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div
            className="bg-custom-1 text-black rounded-full h-20 w-20 flex items-center justify-center text-xs cursor-pointer"
            onClick={() => isOpen()}
          >
            See more
          </div>
        </div>
      </div>
      <p className="text-2xl sm:text-3xl mb-2">Project 01</p>
      <p className="text-sm sm:text-base font-normal mb-6">Description</p>
      <ul className="list-none flex [&>li]:border [&>li]:border-white [&>li]:py-2 [&>li]:px-6 [&>li]:mr-2 [&>li]:sm:mr-4 [&>li]:rounded-full [&>li]:whitespace-nowrap [&>li]:text-xs [&>li]:sm:text-base">
        <li>Branding</li>
        <li>UX UI Design</li>
        <li>Development</li>
      </ul>
    </motion.div>
  );
};
