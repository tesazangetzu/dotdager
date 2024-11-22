import React, { useEffect, useState } from "react";
import { Card } from "./items/Card";
import { Modal } from "./items/Modal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Project = () => {
  const [mod, setMod] = useState(false);
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  const titleVariant = {
    hidden: { scale: 0.8, opacity: 0, x: -50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.3,
      },
    },
    hidden: {},
  };

  return (
    <section
      className="relative bg-black overflow-hidden py-16 px-6 sm:py-24 sm:px-28"
      ref={ref}
    >
      <div className="container">
        <motion.h3
          className="text-4xl font-medium text-white mb-16"
          initial="hidden"
          animate={controls}
          variants={titleVariant}
          style={{ transformOrigin: "left" }}
        >
          Featured projects
        </motion.h3>
        <motion.div
          className="block sm:flex sm:-mr-28"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[0, 1].map((card, index) => (
            <Card isOpen={() => setMod(!mod)} key={index} />
          ))}
        </motion.div>
      </div>
      <Modal isOpen={mod} onClose={() => setMod(!mod)} />
    </section>
  );
};
