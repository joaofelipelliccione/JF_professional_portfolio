import React from 'react';
import certificadoHashExcel from '../../../certificates/certificado-hashtag-excel.pdf';
import certificadoHashVba from '../../../certificates/certificado-hashtag-vba.pdf';
import certificadoHashPowerBi from '../../../certificates/certificado-hashtag-power_bi.pdf';
import learnedTechnologiesArr from '../../../data/learned_technologies';
import certificadoIelts from '../../../certificates/certificado-IELTS.pdf';
import logoIelts from '../../../images/logo-ielts.png';
import '../../../styles/mobile/cv/mobileToolsAndLanguages.css';

function MobileToolsAndLanguages() { // tAndL --> Tools and Languages
  const CERTIFICADO_HASHTAG = 'Certificado Hashtag Treinamentos';

  return (
    <section id="mobToolsAndLanguages">
      <h2>Ferramentas e Idiomas</h2>

      <article id="mobTAndLContainer">
        <div id="mobOfficePackage">
          <h3>Pacote MS Office</h3>

          <div className="mobEachTool">
            Excel Avançado
            <span className="mobTAndLPipe"> | </span>
            <nav className="mobHashtagCertificateContainer">
              <a href={ certificadoHashExcel } target="_blank" rel="noreferrer" className="mobHashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="mobEachTool">
            VBA Avançado
            <span className="mobTAndLPipe"> | </span>
            <nav className="mobHashtagCertificateContainer">
              <a href={ certificadoHashVba } target="_blank" rel="noreferrer" className="mobHashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="mobEachTool">
            Power BI Avançado
            <span className="mobTAndLPipe"> | </span>
            <nav className="mobHashtagCertificateContainer">
              <a href={ certificadoHashPowerBi } target="_blank" rel="noreferrer" className="mobHashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
        </div>

        <div id="mobTechTools">
          <h3>Programação | Tech</h3>
          <div id="mobTechToolsContainer1">
            {learnedTechnologiesArr[0].map(({ name, icon, width }) => (
              <img
                key={ name }
                src={ icon }
                alt={ name }
                title={ name }
                width={ width }
              />
            ))}
          </div>
          <div id="mobTechToolsContainer2">
            {learnedTechnologiesArr[1].map(({ name, icon, width }) => (
              <img
                key={ name }
                title={ name }
                src={ icon }
                alt={ name }
                width={ width }
              />
            ))}
          </div>
          <div id="mobTechToolsContainer3">
            {learnedTechnologiesArr[2].map(({ name, icon, width }) => (
              <img
                key={ name }
                title={ name }
                alt={ name }
                src={ icon }
                width={ width }
              />
            ))}
          </div>
        </div>

        <div id="mobLanguages">
          <h3>Inglês Avançado</h3>
          <nav>
            <a href="https://www.britishcouncil.org.br/exame/ielts" target="_blank" rel="noreferrer" id="mobIeltsImgContainer">
              <img src={ logoIelts } alt="Logo IELTS" />
            </a>
          </nav>
          <span>- CEFR level C1</span>
          <span>- Data de realização do Exame: dezembro de 2018</span>
          <nav id="mobIeltsCertificate">
            <a href={ certificadoIelts } target="_blank" rel="noreferrer">Certificado IELTS</a>
          </nav>
        </div>
      </article>
    </section>
  );
}

export default MobileToolsAndLanguages;
