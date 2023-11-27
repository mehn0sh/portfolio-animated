import React from 'react'
import { motion } from 'framer-motion'
const itemVariants={
  close:{
    y:50,
    opacity:0
  },
  open:{
    y:0,
    opacity:1
  }
};
const variants={
  open:{
    transition:{
      staggerChildren:0.15,
    }},
  close:{
    transition:{
      staggerChildren:0.1,
      staggerDirection:-1
    }
  }
}
export default function Links() {
  const items=[
    'HomePage',
    "Services",
    'Portfolio',
    'Contact',
    'About'
  ]

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item=>(
        <motion.a href={`#${item}`} key={item} whileHover={{scale:1.1}} whileTap={{scale:.95}} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}
