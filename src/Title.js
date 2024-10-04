import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import { fadein } from "./variants";

const Title = ({ Current }) => {
  return (
    <motion.div
      variants={fadein("up", 0.2)}
      initial="show"
      exit="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="App"
    >
      <div className="video_contain">
        <video src={Current} className="video" autoPlay loop muted></video>
        <div className="shadow"></div>
        <div className="overlay_name">
          <h1>Chilukuri Srikanth Reddy</h1>
          <h3>Frontend Developer</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Title;
