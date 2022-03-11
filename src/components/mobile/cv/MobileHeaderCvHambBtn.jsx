import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function MobileHeaderCvHambBtn({ isHambContentOpen, setIsHambContentOpen }) {
  // REF: https://codepen.io/diegotorres/pen/WxaxKo

  const onClickHeaderHamburger = () => {
    if (isHambContentOpen === true) {
      setIsHambContentOpen(false);
    }
    if (isHambContentOpen === false) {
      setIsHambContentOpen(true);
    }
  };

  return (
    <div id="cvPageMobHeaderHamburgerContainer">
      <div
        id="cvPageMobHeaderButtonFlipper"
        className={ `menu ${isHambContentOpen ? 'active' : 'inactive'}` }
      >
        <button
          id="cvPageMobHeaderHamburgerBtn"
          type="button"
          onClick={ () => onClickHeaderHamburger() }
        >
          <AiOutlineMenu />
        </button>
        <button
          id="cvPageMobHeaderCloseBtn"
          type="button"
          onClick={ () => onClickHeaderHamburger() }
        >
          <AiOutlineClose />
        </button>
      </div>

    </div>
  );
}

MobileHeaderCvHambBtn.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};

export default MobileHeaderCvHambBtn;
