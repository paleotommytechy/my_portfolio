import React from 'react';
import type { Project } from './projectsData';
import { motion } from 'framer-motion';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      className="card shadow-sm h-100"
      data-aos="fade-up"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="mb-2">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="badge bg-secondary me-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a href={project.demo} className="btn btn-primary me-2" target="_blank">
            Live Demo
          </a>
          <a href={project.github} className="btn btn-outline-dark" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
