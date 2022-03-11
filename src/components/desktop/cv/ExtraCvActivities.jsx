import React from 'react';
import certificadoAdmFin from '../../../certificates/certificado-monitoria-adm-fin.pdf';
import certificadoPlanilhas from '../../../certificates/certificado-monitoria-excel-vba.pdf';
import certificadoHackathon from '../../../certificates/certificado-hackathon.pdf';
import certificadoBolsa from '../../../certificates/certificado-bolsa-premio.pdf';
import '../../../styles/desktop/cv/extraCvActivities.css';

function ExtraCvActivities() { // extraCvA --> "Extra Cv Activities"
  return (
    <section id="extraCvActivities">
      <h2>Atividades Extracurriculares</h2>

      <article id="extraCvAContainer">
        <div id="monitoriasContainer">
          <h3>
            Monitor de Graduação |
            <span id="iagTitle"> IAG PUC-Rio</span>
          </h3>

          <div className="monitorias">
            Administração Financeira
            <nav>
              <a href={ certificadoAdmFin } target="_blank" rel="noreferrer" className="monitoriaCertificates">Certificado</a>
            </nav>
          </div>
          <div className="monitorias">
            Planilhas para Negócios
            <nav>
              <a href={ certificadoPlanilhas } target="_blank" rel="noreferrer" className="monitoriaCertificates">Certificado</a>
            </nav>
          </div>
        </div>

        <div id="additionalInfoContainer">
          <h3>Informações Adicionais</h3>

          <div id="hackathon">
            <h4 className="additionalInfoSubtitle">
              Vencedor do primeiro Hackathon de Negócios IAG/PUC-Rio, em dezembro de 2018
              <span className="additionalInfoPipe"> | </span>
              <span className="additionalInfoInstitution">PUC-Rio</span>
            </h4>
            <nav className="additionalInfoCertificates">
              <a href={ certificadoHackathon } target="_blank" rel="noreferrer">Certificado</a>
            </nav>
          </div>

          <div id="scholarship">
            <h4 className="additionalInfoSubtitle">
              Ganhador da Bolsa Prêmio 2018.1, por ser o 4º maior CR de ADM no período
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
