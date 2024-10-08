import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
import { useLottie } from "lottie-react";
import about from '../assets/about.json';

const About = () => {
  const options = {
    animationData: about,
    loop: true,
  };
  
  const { View } = useLottie(options);

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        {/* Animated Lottie Container */}
        <motion.div
          className="about-animation"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {View}
        </motion.div>

        {/* Introduction Content with Animation */}
        <motion.div
          className="about-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, delay: 0.3 }}
        >
          <h1 className="about-title">
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
            <span style={{fontSize:'34px', color:'#b2babb'}}>H</span>ii, I'm <span style={{color:'#cb4335'}}>Himanshu Kumar</span>, a passionate web developer and designer specializing in creating beautiful and functional websites. I have a strong background in front-end development with a focus on React and modern web technologies.
          </motion.p>

          <motion.p
            className="about-description"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.7 }}
          >
            With a keen eye for detail and a drive to stay up-to-date with industry trends, I strive to deliver high-quality solutions that meet both user and business needs.
          </motion.p>

          {/* Skills Section */}
          <motion.div
            className="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h2>Skills</h2>
            <ul className="skills-list">
              <motion.li whileHover={{ scale: 1.05 }}>React & JavaScript</motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>HTML & CSS</motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>Responsive Design</motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>UI/UX Principles</motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>Git & Version Control</motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
