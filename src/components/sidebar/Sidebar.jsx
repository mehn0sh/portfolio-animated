import React, { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
export default function Sidebar() {
  const [open, setopen] = useState(false);
 
  return (
    <motion.div
      className={`sidebar ${open && "show-sideBar"}`}
      animate={open ? "open" : "close"}
    >
      <motion.div className="bg">
        <Links />
      </motion.div>

      <ToggleButton setopen={setopen} />
    </motion.div>
  );
}
