import React from 'react';
import certificadoAdmFin from '../../../certificates/certificado-monitoria-adm-fin.pdf';
import certificadoPlanilhas from '../../../certificates/certificado-monitoria-excel-vba.pdf';
import certificadoHackathon from '../../../certificates/certificado-hackathon.pdf';
import certificadoBolsa from '../../../certificates/certificado-bolsa-premio.pdf';
import '../../../styles/desktop/cv/extraCvActivities.css';

function ExtraCvActivities() { // extraCvA --> "Extra Cv Activities"
  return (
    <section id="extraCvActivities">
      <h2>Extracurricular Activities</h2>

      <article id="extraCvAContainer">
        <div id="monitoriasContainer">
          <h3>
            Class Instructor |
            <span id="iagTitle"> IAG PUC-Rio</span>
          </h3>

          <div className="monitorias">
            Financial Management
            <nav>
              <a href={ certificadoAdmFin } target="_blank" rel="noreferrer" className="monitoriaCertificates">Certificate</a>
            </nav>
          </div>
          <div className="monitorias">
            Excel & VBA
            <nav>
              <a href={ certificadoPlanilhas } target="_blank" rel="noreferrer" className="monitoriaCertificates">Certificate</a>
            </nav>
          </div>
        </div>

        <div id="additionalInfoContainer">
          <h3>Additional Info</h3>

          <div id="hackathon">
            <h4 className="additionalInfoSubtitle">
              Winner of the 1st “IAG/PUC-Rio Business Innovation Hackathon”, in December 2018
              <span className="additionalInfoPipe"> | </span>
              <span className="additionalInfoInstitution">PUC-Rio</span>
            </h4>
            <nav className="additionalInfoCertificates">
              <a href={ certificadoHackathon } target="_blank" rel="noreferrer">Certificate</a>
            </nav>
          </div>

          <div id="scholarship">
            <h4 className="additionalInfoSubtitle">
              Winner of the 2018.1 “PUC-Rio merit-based scholarship”, for being the 4th best GPA in Business Administration
              <span className="additionalInfoPipe"> | </span>
              <span className="additionalInfoInstitution">PUC-Rio</span>
            </h4>
            <nav className="additionalInfoCertificates">
              <a href={ certificadoBolsa } target="_blank" rel="noreferrer">Certificado</a>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ExtraCvActivities;
