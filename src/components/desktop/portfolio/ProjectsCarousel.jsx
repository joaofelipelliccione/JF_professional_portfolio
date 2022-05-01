import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import ProjectsCarouselPlayPauseBtn from './ProjectsCarouselPlayPauseBtn';

function ProjectsCarousel({ projectsWithInterface }) {
  // REF: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
  const [currentProject, setCurrentProject] = React.useState(0);
  const [isProjectsCarouselPaused, setIsProjectsCarouselPaused] = React.useState(false);
  const timeoutRef = React.useRef(null);
  const TIMER = 7500;

  const goToNextProject = () => {
    if (currentProject !== projectsWithInterface.length - 1) {
      setCurrentProject(currentProject + 1);
    }
    if (currentProject === projectsWithInterface.length - 1) {
      setCurrentProject(0);
    }
  };

  const goToLastProject = () => {
    if (currentProject !== 0) {
      setCurrentProject(currentProject - 1);
    }
    if (currentProject === 0) {
      setCurrentProject(projectsWithInterface.length - 1);
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    if (isProjectsCarouselPaused === false) {
      resetTimeout();
      timeoutRef.current = setTimeout(goToNextProject, TIMER);
    }
    if (isProjectsCarouselPaused === true) {
      resetTimeout();
    }

    return () => {
      resetTimeout();
    };
  }, [currentProject, isProjectsCarouselPaused]);

  return (
    <div id="projectsCarouselContainer">
      <button
        className="projectsCarouselNavBtn"
        type="button"
        onClick={ goToLastProject }
      >
        <BsFillArrowLeftCircleFill />
      </button>
      {projectsWithInterface.map((project, i) => (
        <div
          key={ project.id }
          className={ `eachCarouselProject ${i === currentProject ? 'active' : 'inactive'}` }
        >
          <ProjectsCarouselPlayPauseBtn
            isProjectsCarouselPaused={ isProjectsCarouselPaused }
            setIsProjectsCarouselPaused={ setIsProjectsCarouselPaused }
          />
          <h3>{project.title}</h3>
          <h4>{`Developed using ${project.skills}`}</h4>
          <img
            alt="Gif do Projeto"
            src={ project.gifPath }
            id={ project.id }
          />
          <p
            id="eachCarouselDescription"
          >
            { project.description }
          </p>
          <p
            id="eachCarouselTimeInProg"
          >
            { `Time since I started coding: ${project.timeInProg}` }
          </p>
          <a
            href={ project.URL }
            target="_blank"
            rel="noreferrer"
          >
            Visit the website!
          </a>
        </div>
      ))}
      <button
        className="projectsCarouselNavBtn"
        type="button"
        onClick={ goToNextProject }
      >
        <BsFillArrowRightCircleFill />
      </button>

    </div>
  );
}

ProjectsCarousel.propTypes = {
  projectsWithInterface: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsCarousel;
