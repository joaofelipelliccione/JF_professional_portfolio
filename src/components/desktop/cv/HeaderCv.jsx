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
            <Typist.Backspace count={32} delay={2100} />
            Desenvolvedor Web
            <Typist.Backspace count={17} delay={2100} />
            Administrador
            <Typist.Backspace count={13} delay={2100} />
            João Felipe Pelliccione da Cunha
          </Typist>
        </LinkScroll>
      </h1>
      <nav>
        <ul id="cvPageHeaderNavBar">
          <li className="notDropdown">
            <LinkScroll to="academicBackground" smooth duration={ 600 } offset={ -140 }>
              Formação Acadêmica
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="professionalXp" smooth duration={ 600 } offset={ -140 }>
              Experiências Profissionais
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="toolsAndLanguages" smooth duration={ 600 } offset={ -140 }>
              Ferramentas e Idiomas
            </LinkScroll>
          </li>
          <li className="notDropdown">
            <LinkScroll to="extraCvActivities" smooth duration={ 600 } offset={ -140 }>
              Atividades Extracurriculares
            </LinkScroll>
          </li>
          <li><Link to="/portfolio" className="notDropdown">Portfólio Tech</Link></li>
          <li className="dropdown">
            <Link to="#" className="dropdownBtn" onClick={ (e) => e.preventDefault() }>Contato »</Link>
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
