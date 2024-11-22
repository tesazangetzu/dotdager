import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLockBodyScroll } from "../../utils/useLockBodyScroll";
import img from "../../images/image-modal.png";
import imgR from "../../images/image-modal-responsive.png";
import awards from "../../images/awards.png";
import { OptSkill } from "./OptSkill";

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  useLockBodyScroll(isOpen);
  const skills = ["Diseño UX UI", "Diseño Web", "React Native", "Ecommerce"];

  const modalVariants = {
    hidden: { opacity: 1, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-white"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <div className="container relative py-16 px-6 sm:py-24 sm:px-28 h-screen w-screen">
            <button
              type="button"
              className="absolute top-3 right-2 sm:top-4 sm:right-9 text-4xl"
              onClick={() => {
                onClose();
              }}
            >
              <i className="icon-cancel text-black/50"></i>
            </button>
            <div className="block sm:flex justify-start items-start overflow-y-auto max-h-[90vh]">
              <div className="mb-5 sm:mb-0 sm:w-2/5">
                <img
                  src={img}
                  alt="project"
                  className="w-full max-h-[580px] object-cover rounded-xl sm:rounded-3xl hidden sm:block"
                />
                <img
                  src={imgR}
                  alt="project"
                  className="w-full rounded-xl sm:rounded-3xl sm:hidden"
                />
              </div>
              <div className="w-full sm:w-3/5 sm:pl-10">
                <div className="mb-28">
                  <h3 className="text-2xl sm:text-4xl font-medium sm:w-[420px] mb-5">
                    UX/UI design for clothing E-commerce
                  </h3>
                  <ul className="list-none flex flex-wrap mb-2 sm:mb-5 w-full">
                    {skills.map((v, i) => (
                      <OptSkill text={v} key={i} />
                    ))}
                  </ul>
                  <p className="text-sm sm:text-base mb-4 sm:leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero animi minima pariatur numquam labore, modi laudantium,
                    a quod delectus natus reprehenderit odit tempore consequatur
                    earum nihil eos dolor in repudiandae!
                  </p>
                  <p className="text-sm sm:text-base mb-4 sm:leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt fugiat quaerat, iste dicta officia ullam. Iusto
                    eveniet numquam aliquid consectetur, reprehenderit, ad ex
                    possimus voluptate.
                  </p>
                </div>
                <div className="mb-5">
                  <span>Brands</span>
                  <img src={awards} alt="brand" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
