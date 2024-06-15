"use client";
import React, { createContext } from "react";
import { motion } from "framer-motion";
import Aboutus from "./Aboutus";

const Motiondiv = () => {
  return (
    <div className="max-w-[1080px] mx-auto my-0 p-5 ">
      <motion.div
        whileInView={{
          opacity: 1,
          duration: 10,
          x: "2%",
          transition: { ease: [0.17, 0.67, 0.83, 0.67] },
        }}
        initial={{ opacity: 0 }}
      >
        <Aboutus />
      </motion.div>
    </div>
  );
};

export default Motiondiv;
