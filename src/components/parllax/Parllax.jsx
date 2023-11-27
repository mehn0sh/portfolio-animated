import React, { useRef } from "react";
import "./parllax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Parllax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <motion.div
      className={`parllax${type == "portfolio" ? " light" : ""}`}
      ref={ref}
    >
      <motion.h1 style={{y:yText}}>{type === "services" ? "What we do ? " : "What we did ?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y:yBg,backgroundImage:`url(${type=='portfolio'&&'./img/sun.png' || './img/planets.png'})`}} className="planets"></motion.div>
      <motion.div style={{x:yStars}} className="stars"></motion.div>
    </motion.div>
  );
}
