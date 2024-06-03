"use client";
import MobileLinks from "./MobileLinks";
import { ImagesSlider } from "./ui/ImagesSlider";
import { heroImages, heroText } from "../utils/utils";
import { motion } from "framer-motion";
import React from "react";
const HeroImageSlider = () => {
  const [currentIndex, setIndex] = React.useState(0);

  const animationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };
  React.useEffect(() => {
    setTimeout(() => {
      if (currentIndex === heroText.length - 1) {
        return setIndex(0);
      }
      return setIndex(currentIndex + 1);
    }, 5000);
  }, [currentIndex]);
  return (
    <section id="home">
      <ImagesSlider
        overlay
        className="min-h-[100svh] flex flex-col justify-around text-white"
        images={heroImages}
      >
        <h1 className="text-center font-bold z-50">
          MenoClean Remedial <br />
          Services
        </h1>
        <motion.h4
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          key={heroText[currentIndex]}
          className="z-50 text-center"
        >
          {heroText[currentIndex]}
        </motion.h4>
        <MobileLinks />
        <div className="p-4 z-50 flex gap-2">
          <a href="#contact">
            <button className="p-2 rounded-[4px] hover:bg-[#568AD9] bg-[#0060F1]">
              Request service
            </button>
          </a>
          {/* <a href="/video">
            <button className="p-2 rounded-[4px] hover:bg-[#568AD9] border border-[#0060F1]">
              watch video
            </button>
          </a> */}
        </div>
      </ImagesSlider>
    </section>
  );
};

export default HeroImageSlider;
