import React from 'react';
import logoNg from '../../../images/logo-ng.jpg';
import logoLoreal from '../../../images/logo-loreal.png';
// import logoVinci from '../../../images/logo-vinci.png';
// import certificadoVinci from '../../../certificates/certificado-vinci.pdf';
import '../../../styles/mobile/cv/mobileProfessionalXp.css';

function MobileProfessionalXp() {
  return (
    <section id="mobProfessionalXp">
      <h2>Most Recent Professional Experiences</h2>

      <div id="mobProfXpContainer">
        <div id="mobNgContainer">
          <h3>Product Owner</h3>
          <a id="mobNgImgContainer" href="https://ng.cash/" rel="noreferrer" target="_blank">
            <img src={ logoNg } alt="Logo NG.CASH" />
          </a>
          <span className="mobProfXpContent">
            - Product Area
          </span>
          <span className="mobProfXpContent">
            - From May 2022 to nowadays
          </span>
        </div>

        <div id="mobLorealContainer">
          <h3>Operations Intern</h3>
          <a id="mobLorealImgContainer" href="https://www.loreal.com/pt-br/brazil/" rel="noreferrer" target="_blank">
            <img src={ logoLoreal } alt="Logo L'Oréal Brasil" />
          </a>
          <span className="mobProfXpContent">
            - Raw Materials Sourcing Area
          </span>
          <span className="mobProfXpContent">
            - From September 2020 to May 2021
          </span>
        </div>

        {/* <div id="mobVinciContainer">
          <h3>Work Experience</h3>
          <a id="mobVinciImgContainer" href="https://www.vincipartners.com/" rel="noreferrer" target="_blank">
            <img src={ logoVinci } alt="Logo Vinci" />
          </a>
          <span className="mobProfXpContent">
            - 5-week job rotation program: Back Office, Credit, Private Equity, Real State & Hedge Funds.
          </span>
          <span className="mobProfXpContent">
            - From July 2018 to August 2018
          </span>
          <div id="mobVinciCertificate">
            <a href={ certificadoVinci } target="_blank" rel="noreferrer">Certificate</a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default MobileProfessionalXp;
