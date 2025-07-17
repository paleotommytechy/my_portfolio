import React from 'react';
import { timeline } from './timelineData';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="text-center mb-4" data-aos="fade-up">
        <h2 className="fw-bold">👨‍🎓 About Me</h2>
        <p className="text-muted">A timeline of my Computer Engineering journey</p>
      </div>

      <div className="position-relative border-start border-2 ps-4">
        {timeline.map((item, idx) => (
          <motion.div
            className="mb-4"
            key={idx}
            data-aos="fade-up"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <span className="badge bg-primary rounded-pill mb-1">{item.year}</span>
            <h5 className="fw-semibold">{item.title}</h5>
            <p className="text-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
