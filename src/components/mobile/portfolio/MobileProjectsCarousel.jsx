import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import MobileProjectsCarouselPlayPauseBtn from './MobileProjectsCarouselPlayPauseBtn';

function MobileProjectsCarousel({ projectsWithInterface }) {
  // REF: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
  // REF: https://stackoverflow.com/questions/40463173/swipe-effect-in-react-js
  const [currentProject, setCurrentProject] = React.useState(0);
  const [isProjectsCarouselPaused, setIsProjectsCarouselPaused] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(0); // Novo.
  const [touchEnd, setTouchEnd] = React.useState(0); // Novo.
  const timeoutRef = React.useRef(null);
  const TIMER = 6500;
  const FLICK_SENSITIVE = 75;

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

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > FLICK_SENSITIVE) {
      goToNextProject();
    }

    if (touchStart - touchEnd < -FLICK_SENSITIVE) {
      goToLastProject();
    }
  }

  return (
    <div id="mobileProjectsCarouselContainer">
      <button
        className="mobileProjectsCarouselNavBtn"
        type="button"
        onClick={ goToLastProject }
      >
        <BsFillArrowLeftCircleFill />
      </button>
      {projectsWithInterface.map((project, i) => (
        <div
          key={ project.id }
          className={ `eachMobileCarouselProject ${i === currentProject ? 'active' : 'inactive'}` }
          onTouchStart={ (e) => handleTouchStart(e) }
          onTouchMove={ (e) => handleTouchMove(e) }
          onTouchEnd={ handleTouchEnd }
        >
          <MobileProjectsCarouselPlayPauseBtn
            isProjectsCarouselPaused={ isProjectsCarouselPaused }
            setIsProjectsCarouselPaused={ setIsProjectsCarouselPaused }
          />
          <h3>{project.title}</h3>
          <h4>{`Desenvolvido em ${project.skills}`}</h4>
          <img
            alt="Gif do Projeto"
            src={ project.gifPath }
          />
          <p
            id="eachMobileCarouselDescription"
          >
            { project.description }
          </p>
          <p
            id="eachMobileCarouselTimeInProg"
          >
            { `Tempo desde que comecei a programar: ${project.timeInProg}.` }
          </p>
          <a
            href={ project.URL }
            target="_blank"
            rel="noreferrer"
          >
            Ir para o website!
          </a>
        </div>
      ))}
      <button
        className="mobileProjectsCarouselNavBtn"
        type="button"
        onClick={ goToNextProject }
      >
        <BsFillArrowRightCircleFill />
      </button>

    </div>
  );
}

MobileProjectsCarousel.propTypes = {
  projectsWithInterface: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileProjectsCarousel;
