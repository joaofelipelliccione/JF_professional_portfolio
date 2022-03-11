import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

function MobileProjectsCarouselPlayPauseBtn({ isProjectsCarouselPaused, setIsProjectsCarouselPaused }) {
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
    <div id="mobProjectsCarouselPlayPauseBtnContainer">
      <div
        id="mobProjectsCarouselPlayPauseBtnFlipper"
        className={ `mobProjectsCarouselPPBtn ${isProjectsCarouselPaused ? 'active' : 'inactive'}` }
      >
        <button
          id="mobProjectsCarouselPauseBtn"
          type="button"
          onClick={ () => onClickPlayPauseBtn() }
        >
          <AiOutlinePauseCircle />
        </button>
        <button
          id="mobProjectsCarouselPlayBtn"
          type="button"
          onClick={ () => onClickPlayPauseBtn() }
        >
          <AiOutlinePlayCircle />
        </button>
      </div>

    </div>
  );
}

MobileProjectsCarouselPlayPauseBtn.propTypes = {
  isProjectsCarouselPaused: PropTypes.bool.isRequired,
  setIsProjectsCarouselPaused: PropTypes.func.isRequired,
};

export default MobileProjectsCarouselPlayPauseBtn;
