import React from 'react';
import logoLoreal from '../../../images/logo-loreal.png';
import logoVinci from '../../../images/logo-vinci.png';
import certificadoVinci from '../../../certificates/certificado-vinci.pdf';
import '../../../styles/desktop/cv/professionalXp.css';

function ProfessionalXp() { // profXp --> Professional Experience
  return (
    <section id="professionalXp">
      <h2>Experiências Profissionais</h2>

      <div id="profXpContainer">
        <div id="lorealContainer">
          <h3>Estagiário de Operações</h3>
          <a id="lorealImgContainer" href="https://www.loreal.com/pt-br/brazil/" rel="noreferrer" target="_blank">
            <img src={ logoLoreal } alt="Logo L'Oréal Brasil" />
          </a>
          <span className="profXpContent">
            - Área de Compra de Matéria Prima Direta
          </span>
          <span className="profXpContent">
            - Setembro de 2020 a maio de 2021
          </span>
        </div>

        <div id="vinciContainer">
          <h3>Work Experience</h3>
          <a id="vinciImgContainer" href="https://www.vincipartners.com/" rel="noreferrer" target="_blank">
            <img src={ logoVinci } alt="Logo Vinci" />
          </a>
          <span className="profXpContent">
            - Áreas percorridas: Back Office, Crédito, Private Equity, Real State & Hedge Funds.
          </span>
          <span className="profXpContent">
            - Julho a agosto de 2018 (total de 5 Semanas)
          </span>
          <div id="vinciCertificate">
            <a href={ certificadoVinci } target="_blank" rel="noreferrer">Certificado de Conclusão</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalXp;
