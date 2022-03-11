import React from 'react';
import certificadoAdmFin from '../../../certificates/certificado-monitoria-adm-fin.pdf';
import certificadoPlanilhas from '../../../certificates/certificado-monitoria-excel-vba.pdf';
import certificadoHackathon from '../../../certificates/certificado-hackathon.pdf';
import certificadoBolsa from '../../../certificates/certificado-bolsa-premio.pdf';
import '../../../styles/mobile/cv/mobileExtraCvActivities.css';

function MobileExtraCvActivities() {
  return (
    <section id="mobExtraCvActivities">
      <h2>Atividades Extracurriculares</h2>

      <article id="mobExtraCvAContainer">
        <div id="mobMonitoriasContainer">
          <h3>
            Monitor de Graduação |
            <span id="mobIagTitle"> IAG PUC-Rio</span>
          </h3>

          <div className="mobMonitorias">
            Administração Financeira
            <nav>
              <a href={ certificadoAdmFin } target="_blank" rel="noreferrer" className="mobMonitoriaCertificates">Certificado</a>
            </nav>
          </div>
          <div className="mobMonitorias">
            Planilhas para Negócios
            <nav>
              <a href={ certificadoPlanilhas } target="_blank" rel="noreferrer" className="mobMonitoriaCertificates">Certificado</a>
            </nav>
          </div>
        </div>

        <div id="mobAdditionalInfoContainer">
          <h3>Informações Adicionais</h3>

          <div id="mobHackathon">
            <h4 className="mobAdditionalInfoSubtitle">
              Vencedor do primeiro Hackathon de Negócios IAG/PUC-Rio, em dezembro de 2018
              <span className="mobAdditionalInfoPipe"> | </span>
              <span className="mobAdditionalInfoInstitution">PUC-Rio</span>
            </h4>
            <nav className="mobAdditionalInfoCertificates">
              <a href={ certificadoHackathon } target="_blank" rel="noreferrer">Certificado</a>
            </nav>
          </div>

          <div id="mobScholarship">
            <h4 className="mobAdditionalInfoSubtitle">
              Ganhador da Bolsa Prêmio 2018.1, por ser o 4º maior CR de ADM no período
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
