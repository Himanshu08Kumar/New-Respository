import React from 'react';
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill, RiBootstrapLine } from "react-icons/ri";
import { AiOutlineLinux } from "react-icons/ai";
import { IoLogoWindows } from "react-icons/io";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import background from "../assets/background.json";
import "./skills.css"

// Animation Variants for the Icons
const iconVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1, // Stagger effect for each icon
      type: "spring",
      stiffness: 150,
    },
  }),
  hover: {
    scale: 1.01,
    rotate: 2,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Skills = () => {
  const options = {
    animationData: background,
    loop: true,
  };

  const { View: AboutView } = useLottie(options);

  // Array of Skills Data
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'ReactJs' },
    { icon: <FaNodeJs />, name: 'NodeJs' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
    { icon: <RiBootstrapLine />, name: 'Bootstrap' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <AiOutlineLinux />, name: 'Linux' },
    { icon: <IoLogoWindows />, name: 'Windows' },
  ];

  return (
    <>
      <div className="background-animation">{AboutView}</div>
      
      {/* Skills List */}
      <motion.div
        className="skills-container"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1, // Stagger animation for each skill
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            custom={index}
            variants={iconVariants}
            whileHover="hover"
          >
            <div className="icon-text-container">
              <div className="icon">{skill.icon}</div>
              <p className="name">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
