import React from 'react';
import historicoPuc from '../../../certificates/historico-final-puc.pdf';
import diplomaADM from '../../../certificates/diploma-ADM.pdf';
import hertsResults from '../../../certificates/herts_results.pdf';
import certificadoTeresiano from '../../../certificates/teresiano1.pdf';
import '../../../styles/desktop/cv/academicCv.css';

function AcademicCv() { // aB --> "Academic Background"
  return (
    <section id="academicBackground">
      <h2>Academic Background</h2>

      <div id="aBContainer1">
        <div id="admPuc">
          <h3 className="aBEachTitle">
            Undergraduate degree in Business Administration with a minor in Entrepreneurship 
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">PUC-Rio</span>
          </h3>
          <div className="aBContent">
            <span>- Concluded in December 2021</span>
            <span>- Final GPA of 9.67</span>
            <a href={ historicoPuc } target="_blank" rel="noreferrer" className="aBContentLinks">Academic Record</a>
            <a href={ diplomaADM } target="_blank" rel="noreferrer" className="aBContentLinks">Business Administration Diploma (Major)</a>
            <a href="#" target="_blank" rel="noreferrer" className="aBContentLinks">Entrepreneurship Diploma (Minor)</a>
          </div>
        </div>

        <div id="trybe">
          <h3 className="aBEachTitle">
            Full-Stack Web Development Vocational Course
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">Trybe</span>
          </h3>
          <div className="aBContent">
            <span>- Expected completion for July 2022</span>
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer" className="aBContentLinks">School's Website</a>
          </div>
        </div>
      </div>

      <div id="aBContainer2">
        <div id="hertsExchange">
          <h3 className="aBEachTitle">
            Academic Exchange
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">University of Hertfordshire</span>
          </h3>
          <div className="aBContent">
            <span>
              - Completion of an entire semester of PUC-Rio's Business Administration undergraduate degree, at the University of Hertfordshire.
            </span>
            <a href={ hertsResults } target="_blank" rel="noreferrer" className="aBContentLinks">
              Academic Record
            </a>
          </div>
        </div>

        <div id="teresiano">
          <h3 className="aBEachTitle">
            Primary, Middle and High School
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">Colégio Teresiano</span>
          </h3>
          <div className="aBContent">
            <span>- Concluded in December 2016</span>
            <a href={ certificadoTeresiano } target="_blank" rel="noreferrer" className="aBContentLinks">Diploma</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicCv;
