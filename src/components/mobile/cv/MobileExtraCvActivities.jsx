import React from 'react';
import certificadoAdmFin from '../../../certificates/certificado-monitoria-adm-fin.pdf';
import certificadoPlanilhas from '../../../certificates/certificado-monitoria-excel-vba.pdf';
import certificadoHackathon from '../../../certificates/certificado-hackathon.pdf';
import certificadoBolsa from '../../../certificates/certificado-bolsa-premio.pdf';
import '../../../styles/mobile/cv/mobileExtraCvActivities.css';

function MobileExtraCvActivities() {
  return (
    <section id="mobExtraCvActivities">
      <h2>Extracurricular Activities</h2>

      <article id="mobExtraCvAContainer">
        <div id="mobMonitoriasContainer">
          <h3>
            Class Instructor |
            <span id="mobIagTitle"> IAG PUC-Rio</span>
          </h3>

          <div className="mobMonitorias">
            Financial Management
            <nav>
              <a href={ certificadoAdmFin } target="_blank" rel="noreferrer" className="mobMonitoriaCertificates">Certificate</a>
            </nav>
          </div>
          <div className="mobMonitorias">
            Excel & VBA
            <nav>
              <a href={ certificadoPlanilhas } target="_blank" rel="noreferrer" className="mobMonitoriaCertificates">Certificate</a>
            </nav>
          </div>
        </div>

        <div id="mobAdditionalInfoContainer">
          <h3>Additional Info</h3>

          <div id="mobHackathon">
            <h4 className="mobAdditionalInfoSubtitle">
              Winner of the 1st “IAG/PUC-Rio Business Innovation Hackathon”, in December 2018
              <span className="mobAdditionalInfoPipe"> | </span>
              <span className="mobAdditionalInfoInstitution">PUC-Rio</span>
            </h4>
            <nav className="mobAdditionalInfoCertificates">
              <a href={ certificadoHackathon } target="_blank" rel="noreferrer">Certificate</a>
            </nav>
          </div>

          <div id="mobScholarship">
            <h4 className="mobAdditionalInfoSubtitle">
              Winner of the 2018.1 “PUC-Rio merit-based scholarship”, for being the 4th best GPA in Business Administration
              <span className="mobAdditionalInfoPipe"> | </span>
              <span className="mobAdditionalInfoInstitution">PUC-Rio</span>
            </h4>
            <nav className="mobAdditionalInfoCertificates">
              <a href={ certificadoBolsa } target="_blank" rel="noreferrer">Certificado</a>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
}

export default MobileExtraCvActivities;
