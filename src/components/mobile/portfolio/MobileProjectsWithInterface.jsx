import React from 'react';
import { useSelector } from 'react-redux';
import MobileProjectsCarousel from './MobileProjectsCarousel';
import '../../../styles/mobile/portfolio/mobileProjectsWithInterface.css';

function MobileProjectsWithInterface() {
  const projectsWithInterface = useSelector((state) => state.reducer.projectsData.withInterface);

  return (
    <section id="mobileProjectsWithInterface">
      <h2>Projects with Interface</h2>
      <MobileProjectsCarousel
        projectsWithInterface={ projectsWithInterface }
      />
    </section>
  );
}

export default MobileProjectsWithInterface;
