/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import historicoPuc from '../../../certificates/historico-final-puc.pdf';
import diplomaADM from '../../../certificates/diploma-ADM.pdf';
import diplomaEMP from '../../../certificates/diploma-EMP.pdf';
import hertsResults from '../../../certificates/herts_results.pdf';
import certificadoTeresiano from '../../../certificates/teresiano1.pdf';
import '../../../styles/mobile/cv/mobileAcademicCv.css';

function MobileAcademicCv() {
  return (
    <section id="mobAcademicBackground">
      <h2>Academic Background</h2>

      <div id="mobAbContainer1">
        <div id="mobAdmPuc">
          <h3 className="mobAbEachTitle">
            Undergraduate degree in Business Administration with a minor in Entrepreneurship
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">PUC-Rio</span>
          </h3>
          <div className="mobAbContent">
            <span>- Concluded in December 2021</span>
            <span>- Final GPA of 9.67</span>
            <a href={ historicoPuc } target="_blank" rel="noreferrer" className="mobAbContentLinks">Academic Record</a>
            <a href={ diplomaADM } target="_blank" rel="noreferrer" className="mobAbContentLinks">Business Administration Diploma (Major)</a>
            <a href={ diplomaEMP } target="_blank" rel="noreferrer" className="mobAbContentLinks">Entrepreneurship Diploma (Minor)</a>
          </div>
        </div>

        <div id="mobTrybe">
          <h3 className="mobAbEachTitle">
            Full-Stack Web Development Vocational Course
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">Trybe</span>
          </h3>
          <div className="mobAbContent">
            <span>- Expected completion for July 2022</span>
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer" className="mobAbContentLinks">School's Website</a>
          </div>
        </div>
      </div>

      <div id="mobAbContainer2">
        <div id="mobHertsExchange">
          <h3 className="mobAbEachTitle">
            Academic Exchange
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">University of Hertfordshire</span>
          </h3>
          <div className="mobAbContent">
            <span>
              - Completion of an entire semester of PUC-Rio's Business Administration undergraduate degree, at the University of Hertfordshire.
            </span>
            <a href={ hertsResults } target="_blank" rel="noreferrer" className="mobAbContentLinks">
              Academic Record
            </a>
          </div>
        </div>

        <div id="mobTeresiano">
          <h3 className="mobAbEachTitle">
            Primary, Middle and High School
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">Colégio Teresiano</span>
          </h3>
          <div className="mobAbContent">
            <span>- Concluded in December 2016</span>
            <a href={ certificadoTeresiano } target="_blank" rel="noreferrer" className="mobAbContentLinks">Diploma</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAcademicCv;
