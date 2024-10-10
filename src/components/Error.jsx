import React from "react";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import pageNotFound from "../assets/pageNotFound.json";
import { style } from "framer-motion/client";
const Error = () => {
  const options = {
    animationData: pageNotFound,
    loop: true,
    style:{
        width: "80%",
      height: "80%",
      marginTop:'-5%'
    }
  };

  const { View } = useLottie(options);
  return (
    <div>
      <motion.div
        className="about-animation"
        initial={{ width: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", stiffness: 120, delay: 0.6 }}
      >
        {View}
      </motion.div>
    </div>
  );
};

export default Error;
