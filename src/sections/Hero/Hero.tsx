import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { Player } from '@lottiefiles/react-lottie-player';
import heroAnimation from '../../../public/lottie/Coding.json';
import './hero.module.css'; 
import { motion } from 'framer-motion';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Tech Enthusiast', 'React Lover', 'Django Engineer', 'Tech Explorer' ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section 
      className="d-flex flex-column flex-md-row align-items-center justify-content-between py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1 className="fw-bold">Hi, I'm <span className="text-primary">Tomiwa</span></h1>
        <h3 className="mt-2">I’m a <span className="text-secondary">{text}</span></h3>
        <motion.div 
          className="mt-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}>
          <a  href="#projects" className="btn btn-outline-primary me-2">View Projects</a>
          <a href="#contact" className="btn btn-outline-secondary">Contact Me</a>
        </motion.div>
      </div>

      <div className="mt-4 mt-md-0">
        <Player
          autoplay
          loop
          src={heroAnimation}
          style={{ height: '300px', width: '300px' }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
