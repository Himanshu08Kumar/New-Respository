import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import about from "../assets/about.json";
import nature from "../assets/nature.json";
import cycle from "../assets/cycle.json"

const About = () => {
  const options = {
    animationData: about,
    loop: true,
  };

  const option1 = {
    animationData: cycle,
    loop: true,
  };

  const { View: AboutView } = useLottie(options);
  const { View: NatureAni } = useLottie(option1);

  return (
    <>
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-container">
        <div className="background-animation">{NatureAni}</div>
          
          <motion.div
            className="about-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
          >
            <motion.p
              className="about-description"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
            >
              <span style={{ color: "#4ecca3", fontSize: "2rem" }}>
                Himanshu Kumar
              </span>
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.7 }}
            >
              <span style={{ color: "#FCFAEE", fontSize: "2.4rem" }}>
                Front-End Developer
              </span>
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.8 }}
            >
              {`I expertise in creating visually appealing and user-centric applications using modern technologies like React, JavaScript, and CSS. With a keen eye for detail and a commitment to staying updated with the latest industry trends, I strive to build websites that not only look great but also provide a seamless and intuitive user experience.`
                .split(" ")
                .map((word, index) => (
                  <>
                    <span key={index} className="hover-word">
                      {word}
                    </span>{" "}
                  </>
                ))}
            </motion.p>
          </motion.div>
          <motion.div
            className="about-animation"
            initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.9 }}
            
          >
            {AboutView}
          </motion.div>
          

        </div>
      </motion.section>
      {/* <h1 className="about-title">
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            >
              About Me
            </motion.span>
          </h1> 

          <motion.p
  className="about-description"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
>
  Hii, I'm
</motion.p>  */}
    </>
  );
};

export default About;
