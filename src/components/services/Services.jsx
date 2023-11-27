import React from "react";
import { color, motion } from "framer-motion";
import "./services.scss";
const variants={
    initial:{
        x:-100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1.5,
            staggerChildren:0.1

        }
    }
}
export default function Services() {

  return (
    <motion.div className="services" variants={variants} initial='initial' whileInView='animate'>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
          <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <img src="./img/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b  whileHover={{color:"orange"}}>for your</motion.b > Business
          </h1>
          <button>WHAT WE DO?</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:'lightgray' ,color:'black'}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            optio debitis cumque, suscipit, nemo odio error laudantium,
            accusamus unde impedit esse tenetur non. Consequuntur numquam
            
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:'lightgray' ,color:'black'}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            optio debitis cumque, suscipit, nemo odio error laudantium,
            accusamus unde impedit esse tenetur non. Consequuntur numquam
            
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:'lightgray' ,color:'black'}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            optio debitis cumque, suscipit, nemo odio error laudantium,
            accusamus unde impedit esse tenetur non. Consequuntur numquam
            
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:'lightgray' ,color:'black'}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            optio debitis cumque, suscipit, nemo odio error laudantium,
            accusamus unde impedit esse tenetur non. Consequuntur numquam
            
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
