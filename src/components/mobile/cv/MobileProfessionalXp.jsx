import React from 'react';
import logoLoreal from '../../../images/logo-loreal.png';
import logoVinci from '../../../images/logo-vinci.png';
import certificadoVinci from '../../../certificates/certificado-vinci.pdf';
import '../../../styles/mobile/cv/mobileProfessionalXp.css';

function MobileProfessionalXp() {
  return (
    <section id="mobProfessionalXp">
      <h2>Experiências Profissionais</h2>

      <div id="mobProfXpContainer">
        <div id="mobLorealContainer">
          <h3>Estagiário de Operações</h3>
          <a id="mobLorealImgContainer" href="https://www.loreal.com/pt-br/brazil/" rel="noreferrer" target="_blank">
            <img src={ logoLoreal } alt="Logo L'Oréal Brasil" />
          </a>
          <span className="mobProfXpContent">
            - Área de Compra de Matéria Prima Direta
          </span>
          <span className="mobProfXpContent">
            - Setembro de 2020 a maio de 2021
          </span>
        </div>

        <div id="mobVinciContainer">
          <h3>Work Experience</h3>
          <a id="mobVinciImgContainer" href="https://www.vincipartners.com/" rel="noreferrer" target="_blank">
            <img src={ logoVinci } alt="Logo Vinci" />
          </a>
          <span className="mobProfXpContent">
            - Áreas percorridas: Back Office, Crédito, Private Equity, Real State & Hedge Funds.
          </span>
          <span className="mobProfXpContent">
            - Julho a agosto de 2018 (total de 5 Semanas)
          </span>
          <div id="mobVinciCertificate">
            <a href={ certificadoVinci } target="_blank" rel="noreferrer">Certificado de Conclusão</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileProfessionalXp;
