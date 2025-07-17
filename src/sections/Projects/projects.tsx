import React, { useEffect } from 'react';
import { projects } from './projectsData';
import ProjectCard from './projectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🚀 Projects</h2>
        <p className="text-muted">Some of the work I've built and shipped</p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((project) => (
          <div className="col" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
