import React from 'react';
import logoLoreal from '../../../images/logo-loreal.png';
import logoVinci from '../../../images/logo-vinci.png';
import certificadoVinci from '../../../certificates/certificado-vinci.pdf';
import '../../../styles/desktop/cv/professionalXp.css';

function ProfessionalXp() { // profXp --> Professional Experience
  return (
    <section id="professionalXp">
      <h2>Professional Experiences</h2>

      <div id="profXpContainer">
        <div id="lorealContainer">
          <h3>Operations Intern</h3>
          <a id="lorealImgContainer" href="https://www.loreal.com/pt-br/brazil/" rel="noreferrer" target="_blank">
            <img src={ logoLoreal } alt="Logo L'Oréal Brasil" />
          </a>
          <span className="profXpContent">
            - Raw Materials Sourcing Area
          </span>
          <span className="profXpContent">
            - From September 2020 to May 2021
          </span>
        </div>

        <div id="vinciContainer">
          <h3>Work Experience</h3>
          <a id="vinciImgContainer" href="https://www.vincipartners.com/" rel="noreferrer" target="_blank">
            <img src={ logoVinci } alt="Logo Vinci" />
          </a>
          <span className="profXpContent">
            - 5-week job rotation program: Back Office, Credit, Private Equity, Real State & Hedge Funds.
          </span>
          <span className="profXpContent">
            - From July 2018 to August 2018
          </span>
          <div id="vinciCertificate">
            <a href={ certificadoVinci } target="_blank" rel="noreferrer">Certificate</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalXp;
