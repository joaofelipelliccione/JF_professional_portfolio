import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import githubIcon from '../../../images/icons/github-icon.svg';
import linkedinIcon from '../../../images/icons/linkedin-icon.svg';

function MobHeaderPortHambContent({ isHambContentOpen, setIsHambContentOpen }) {
  const portPageSections = [
    { title: 'Projects with Interface', location: 'mobileProjectsWithInterface' },
    { title: 'Projects without Interface', location: 'mobProjectsWithoutInterface' },
  ];

  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const pageClickEvent = ({ target }) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(target)) {
        setIsHambContentOpen(!isHambContentOpen);
      }
    };

    if (isHambContentOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isHambContentOpen]);

  return (
    <div
      id="mobHeaderPortHambContentContainer"
      ref={ dropdownRef }
      className="slide-bottom"
    >
      {portPageSections.map(({ title, location }) => (
        <LinkScroll
          className="headerPortHambInternalLinks"
          key={ title }
          to={ location }
          smooth
          duration={ 600 }
          offset={ -75 }
          onClick={ () => setIsHambContentOpen(false) }
        >
          {title}
        </LinkScroll>
      ))}
      <Link
        id="mobCvLink"
        to="/"
      >
        ↤ Curriculum
      </Link>
      <div id="headerPortHambExternalLinksCont">
        <a
          href="https://github.com/joaofelipelliccione"
          target="_blank"
          rel="noreferrer"
          onClick={ () => setIsHambContentOpen(false) }
        >
          <img
            alt="Github Icon"
            src={ githubIcon }
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joaofelipelliccione/"
          target="_blank"
          rel="noreferrer"
          onClick={ () => setIsHambContentOpen(false) }
        >
          <img
            alt="Linkeding Icon"
            src={ linkedinIcon }
            width="30px"
          />
        </a>
      </div>
    </div>
  );
}

MobHeaderPortHambContent.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};

export default MobHeaderPortHambContent;
