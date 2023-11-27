import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          web Developer
        </motion.span>
        <div className="social">
          <a href="">
            <img src="./img/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="./img/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="./img/youtube.png" alt="" />
          </a>
          <a href="">
            <img src="./img/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
