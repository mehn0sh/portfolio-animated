import { animate } from "framer-motion";
import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVarient = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVarient}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVarient}>Mahnoosh!</motion.h2>
          <motion.h1 variants={textVarient}>
            Web developer and ui designer
          </motion.h1>
          <motion.div className="buttons" variants={textVarient}>
            <button>see the last work</button>
            <button>contact me</button>
          </motion.div>
          <motion.img
            variants={textVarient}
            animate="scrollBtn"
            src="./img/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="SlidingTextContainer"
        variants={sliderVarient}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator and Influencer
      </motion.div>
      <div className="imgContainer">
        <img src="./img/girl.png" alt="" />
      </div>
    </div>
  );
}
