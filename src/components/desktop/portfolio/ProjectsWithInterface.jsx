import React from 'react';
import { useSelector } from 'react-redux';
import ProjectsCarousel from './ProjectsCarousel';
import '../../../styles/desktop/portfolio/projectsWithInterface.css';

function ProjectsWithInterface() {
  const projectsWithInterface = useSelector((state) => state.reducer.projectsData.withInterface);

  return (
    <section id="projectsWithInterface">
      <h2>Projects with Interface</h2>
      <ProjectsCarousel
        projectsWithInterface={ projectsWithInterface }
      />
    </section>
  );
}

export default ProjectsWithInterface;
