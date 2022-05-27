import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderPortfolio from '../components/desktop/portfolio/HeaderPortfolio';
import ProjectsWithInterface from '../components/desktop/portfolio/ProjectsWithInterface';
import ProjectsNoInterface from '../components/desktop/portfolio/ProjectsNoInterface';
import Footer from '../components/desktop/Footer';
import MobileHeaderPortfolio from '../components/mobile/portfolio/MobileHeaderPortfolio';
import MobileProjectsWithInterface from '../components/mobile/portfolio/MobileProjectsWithInterface';
import MobileProjectsNoInterface from '../components/mobile/portfolio/MobileProjectsNoInterface';
import MobileFooter from '../components/mobile/MobileFooter';
import '../styles/desktop/portfolio/portfolio.css';

function Portfolio() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div id="portfolioPage">
      {isMobileDevice ? <MobileHeaderPortfolio /> : <HeaderPortfolio />}
      {isMobileDevice ? <MobileProjectsWithInterface /> : <ProjectsWithInterface />}
      {isMobileDevice ? <MobileProjectsNoInterface /> : <ProjectsNoInterface />}
      {isMobileDevice ? <MobileFooter /> : <Footer />}
    </div>
  );
}

export default Portfolio;
