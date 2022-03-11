import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

function ProjectsCarouselPlayPauseBtn({ isProjectsCarouselPaused, setIsProjectsCarouselPaused }) {
  // REF: https://codepen.io/diegotorres/pen/WxaxKo

  const onClickPlayPauseBtn = () => {
    if (isProjectsCarouselPaused === false) {
      setIsProjectsCarouselPaused(true);
    }
    if (isProjectsCarouselPaused === true) {
      setIsProjectsCarouselPaused(false);
    }
  };

  return (
    <div id="projectsCarouselPlayPauseBtnContainer">
      <div
        id="projectsCarouselPlayPauseBtnFlipper"
        className={ `projectsCarouselPPBtn ${isProjectsCarouselPaused ? 'active' : 'inactive'}` }
      >
        <button
          id="projectsCarouselPauseBtn"
          type="button"
          onClick={ () => onClickPlayPauseBtn() }
        >
          <AiOutlinePauseCircle />
        </button>
        <button
          id="projectsCarouselPlayBtn"
          type="button"
          onClick={ () => onClickPlayPauseBtn() }
        >
          <AiOutlinePlayCircle />
        </button>
      </div>

    </div>
  );
}

ProjectsCarouselPlayPauseBtn.propTypes = {
  isProjectsCarouselPaused: PropTypes.bool.isRequired,
  setIsProjectsCarouselPaused: PropTypes.func.isRequired,
};

export default ProjectsCarouselPlayPauseBtn;
