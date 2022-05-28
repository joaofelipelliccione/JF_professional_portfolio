import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import githubIcon from '../../../images/icons/github-icon.svg';
import linkedinIcon from '../../../images/icons/linkedin-icon.svg';

function MobHeaderCvHambContent({ isHambContentOpen, setIsHambContentOpen }) {
  const cvPageSections = [
    { title: 'Academic Background', location: 'mobAcademicBackground' },
    { title: 'Professional Experiences', location: 'mobProfessionalXp' },
    { title: 'Tools & Languages', location: 'mobToolsAndLanguages' },
    { title: 'Extracurricular Activities', location: 'mobExtraCvActivities' },
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
      id="mobHeaderCvHambContentContainer"
      ref={ dropdownRef }
    >
      {cvPageSections.map(({ title, location }) => (
        <LinkScroll
          className="headerCvHambInternalLinks"
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
        id="mobPortfolioLink"
        to="/portfolio"
      >
        Tech Portfolio ↦
      </Link>
      <div id="headerCvHambExternalLinksCont">
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

MobHeaderCvHambContent.propTypes = {
  isHambContentOpen: PropTypes.bool.isRequired,
  setIsHambContentOpen: PropTypes.func.isRequired,
};

export default MobHeaderCvHambContent;
