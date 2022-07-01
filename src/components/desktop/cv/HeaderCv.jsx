import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Typist from 'react-typist';
import '../../../styles/desktop/cv/headerCv.css';

function HeaderCv() {
  return (
    <header id="cvPageHeader">
      <h1>
        <LinkScroll to="whoAmI" smooth duration={ 600 }>
          <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 2000, blink: true }}>
            João Felipe Pelliccione da Cunha
            <Typist.Backspace count={ 32 } delay={ 2100 } />
            Junior Full-Stack Web Developer
            <Typist.Backspace count={ 31 } delay={ 2100 } />
            Business Administrator
            <Typist.Backspace count={ 22 } delay={ 2100 } />
            João Felipe Pelliccione da Cunha
          </Typist>
        </LinkScroll>
      </h1>
      <nav>
        <ul id="cvPageHeaderNavBar">
          <li className="notDropdown">
            <LinkScroll to="academicBackground" smooth duration={ 600 } offset={ -140 }>
              Academic Background
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="professionalXp" smooth duration={ 600 } offset={ -140 }>
              Professional Experiences
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="toolsAndLanguages" smooth duration={ 600 } offset={ -140 }>
              {'Tools & Languages'}
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="extraCvActivities" smooth duration={ 600 } offset={ -140 }>
              Extracurricular Activities
            </LinkScroll>
          </li>
          {/* <li><Link to="/portfolio" className="notDropdown">Tech Portfolio</Link></li> */}
          <li className="dropdown">
            <Link to="#" className="dropdownBtn" onClick={ (e) => e.preventDefault() }>Contact Info »</Link>
            <div className="dropdownContent">
              <a href="mailto:jf.pelliccione@gmail.com" target="_blank" rel="noreferrer">E-mail</a>
              <a href="https://github.com/joaofelipelliccione" target="_blank" rel="noreferrer">Github</a>
              <a href="https://www.linkedin.com/in/joaofelipelliccione/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderCv;
