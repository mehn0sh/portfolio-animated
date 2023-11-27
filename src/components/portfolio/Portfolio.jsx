import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    img: "./img/1.jpg",
    title: "React Course",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Debitis doloripsam adipisci molestiae! Nulla totam libero earum ! Odit asperiores totam ex maxime nulla enim fuga!",
  },
  {
    id: 2,
    img: "./img/2.jpg",
    title: "javaScript Course",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Debitis doloripsam adipisci molestiae! Nulla totam libero earum ! Odit asperiores totam ex maxime nulla enim fuga!",
  },
  {
    id: 3,
    img: "./img/3.jpg",
    title: "Clock Store",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Debitis doloripsam adipisci molestiae! Nulla totam libero earum ! Odit asperiores totam ex maxime nulla enim fuga!",
  },
  {
    id: 4,
    img: "./img/4.jpg",
    title: "digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Debitis doloripsam adipisci molestiae! Nulla totam libero earum ! Odit asperiores totam ex maxime nulla enim fuga!",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],

  });
  const y = useTransform(scrollYProgress, [0, 1], ['170%','-190%']);

  return (
    <section style={{height:'110vh'}}  >
      <div className="container" ref={ref}>
        <div className="wrapper"  >
          <div className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button >See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const progressB = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <div>

    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feautured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: progressB }}
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
    </div>
  );
}
