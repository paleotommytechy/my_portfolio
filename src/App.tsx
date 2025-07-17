import React, { useEffect, } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Hero from './sections/Hero/Hero';
import ThemeToggle from './components/ThemeToggle';
import Projects from './sections/Projects/projects';
import Skills from './sections/Skills/Skills';
import Blog from './sections/Blog/Blog';
import About from './sections/About';
import Contact from './sections/Contact/Contact';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container py-3">
      <div className="d-flex justify-content-end align-items-center gap-3">
      <span className="brand fw-bold fs-5">TOMMYTECHY</span>
        <ThemeToggle />
      </div>
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <About />
      <Contact />
    </div>
  );
}

export default App;
