import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import detail from "../../detail.json";
import { useLottie } from "lottie-react";
import proj from "../assets/project.json";
import { Link } from 'react-router-dom';
import './project.css';
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaSquareGithub } from "react-icons/fa6";

const Projects = () => {
  const options = {
    animationData: proj,
    loop: true,
  };

  const { View } = useLottie(options);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(detail);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const linkVariants = {
    hover: { scale: 1.3, rotate: 15, transition: { yoyo: Infinity } },
  };

  return (
    <div className="project-container">

      <div className="animation">{View}</div>

      <motion.div
        className="projects-list"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
      >
        {data.map((item) => (
          <motion.div
            className="project-card"
            key={item.id}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
          >
            <motion.h1 className="card-title" whileHover={{ color: "#90ee90" }}>
              {item.project}
            </motion.h1>
            
            <motion.p className="card-description" whileHover={{ color: "#d0d0d0" }}>
              {item.detail}
            </motion.p>

            <span className="tech-stack">{item.Tech_Stack}</span>

            <div className="links">
              <motion.div variants={linkVariants} whileHover="hover">
                <Link to={item.link} target="_blank">
                  <LiaExternalLinkAltSolid className="reposatory-link" size={30} />
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link to={item.git} target="_blank">
                  <FaSquareGithub className="reposatory-link" size={30} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
