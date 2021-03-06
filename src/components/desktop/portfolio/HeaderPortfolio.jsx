import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Typist from 'react-typist';
import '../../../styles/desktop/portfolio/headerPortfolio.css';

function HeaderPortfolio() {
  return (
    <header id="portfolioPageHeader">
      <h1>
        <LinkScroll to="projectsWithInterface" smooth duration={ 600 }>
          <Typist cursor={ { hideWhenDone: true, hideWhenDoneDelay: 2000, blink: true } }>
              Portfolio
              <Typist.Backspace count={9} delay={2100} />
              WEB Development Projects
              <Typist.Backspace count={24} delay={2100} />
              Tech Portfolio
            </Typist>
        </LinkScroll>
      </h1>
      <nav>
        <ul id="portfolioPageHeaderNavBar">
          <li><Link to="/" className="notDropdown">Curriculum</Link></li>
          <li className="notDropdown">
            <LinkScroll to="projectsWithInterface" smooth duration={ 600 } spy>
              Projects with Interface
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="projectsWithoutInterface" smooth duration={ 600 } offset={ -140 } spy>
              Projects without Interface
            </LinkScroll>
          </li>
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

export default HeaderPortfolio;
