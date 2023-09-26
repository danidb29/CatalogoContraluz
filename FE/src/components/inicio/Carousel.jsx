import React from "react";
import "./Carousel.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
        <div className="slide_direction">
          <div className="left" onClick={handlePrevious}>
            <i class="ri-arrow-left-s-line"></i>
          </div>
          <div className="right" onClick={handleNext}>
            <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};
