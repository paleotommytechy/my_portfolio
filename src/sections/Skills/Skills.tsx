import React from 'react';
import { skills } from './skillsData';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-5" data-aos="fade-up">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🧠 Skills</h2>
        <p className="text-muted">My technical toolbox</p>
      </div>

      <div className="row">
        {skills.map((group, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <motion.div
              className="p-3 border rounded shadow-sm h-100 bg-body"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h5 className="text-primary">{group.category}</h5>
              {group.skills.map((skill, idx) => (
                <div key={idx} className="mb-2">
                  <div className="d-flex justify-content-between">
                    <small>{skill.name}</small>
                    <small>{skill.level}%</small>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
