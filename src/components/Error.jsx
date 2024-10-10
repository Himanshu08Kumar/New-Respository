import React from 'react'
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import pageNotFound from "../assets/pageNotFound.json";
const Error = () => {
    const options = {
        animationData: pageNotFound,
        loop: true,
      };

      const { View } = useLottie(options);
  return (
      <div className="about-container">
          <motion.div
            className="about-animation"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {View}
          </motion.div>
    </div>
  )
}

export default Error
