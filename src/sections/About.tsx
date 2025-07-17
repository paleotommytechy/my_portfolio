// src/sections/About.tsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="fw-bold text-center mb-4">💡 About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="lead">
              I’m a frontend-focused <strong>Full Stack Developer</strong> with a passion for crafting clean, high-performance web applications that deliver real value to users and clients.
            </p>
            <p>
              With a strong background in <strong>React, TypeScript, Django</strong>, and UI/UX principles, I specialize in building engaging, responsive interfaces and scalable solutions. I blend modern tools like <strong>Framer Motion</strong>, <strong>Bootstrap</strong>, and <strong>Vite</strong> to create sleek, interactive user experiences that stand out.
            </p>
            <p>
              I'm currently pursuing a degree in <strong>Computer Engineering</strong>, which has deepened my understanding of software architecture, system design, and programming fundamentals. Alongside my formal education, I’ve continuously invested in building real-world projects and mastering technologies beyond the classroom — refining both my technical and problem-solving abilities through hands-on development.
            </p>
            <p>
              Whether it's bringing a product idea to life, optimizing a frontend interface, or collaborating with teams to ship polished web solutions, I bring reliability, efficiency, and a commitment to excellence in every project.
            </p>
            <p>
              I’m actively open to collaboration, freelance work, and exciting challenges. Let’s connect and create something impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
