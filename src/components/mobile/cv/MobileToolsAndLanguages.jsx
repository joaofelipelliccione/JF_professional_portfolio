import React from 'react';
import certificadoHashExcel from '../../../certificates/certificado-hashtag-excel.pdf';
import certificadoHashVba from '../../../certificates/certificado-hashtag-vba.pdf';
import certificadoHashPowerBi from '../../../certificates/certificado-hashtag-power_bi.pdf';
import learnedTechnologiesArr from '../../../data/learned_technologies';
import certificadoIelts from '../../../certificates/certificado-IELTS.pdf';
import logoIelts from '../../../images/logo-ielts.png';
import '../../../styles/mobile/cv/mobileToolsAndLanguages.css';

function MobileToolsAndLanguages() { // tAndL --> Tools and Languages
  const CERTIFICADO_HASHTAG = 'Hashtag Treinamentos Certificate';

  return (
    <section id="mobToolsAndLanguages">
      <h2>Tools & Languages</h2>

      <article id="mobTAndLContainer">
        <div id="mobOfficePackage">
          <h3>MS Office</h3>

          <div className="mobEachTool">
            Advanced Excel
            <span className="mobTAndLPipe"> | </span>
            <nav className="mobHashtagCertificateContainer">
              <a href={ certificadoHashExcel } target="_blank" rel="noreferrer" className="mobHashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="mobEachTool">
            Advanced VBA
            <span className="mobTAndLPipe"> | </span>
            <nav className="mobHashtagCertificateContainer">
              <a href={ certificadoHashVba } target="_blank" rel="noreferrer" className="mobHashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="mobEachTool">
            Advanced Power Bi
            <span className="mobTAndLPipe"> | </span>
            <nav className="mobHashtagCertificateContainer">
              <a href={ certificadoHashPowerBi } target="_blank" rel="noreferrer" className="mobHashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
        </div>

        <div id="mobTechTools">
          <h3>Programming | Tech</h3>
          <div id="mobTechToolsContainer1">
            {learnedTechnologiesArr[0].map(({ name, icon }) => (
              <img
                key={ name }
                src={ icon }
                alt={ name }
                title={ name }
              />
            ))}
          </div>
          <div id="mobTechToolsContainer2">
            {learnedTechnologiesArr[1].map(({ name, icon }) => (
              <img
                src={ icon }
                key={ name }
                alt={ name }
                title={ name }
              />
            ))}
          </div>
          <div id="mobTechToolsContainer3">
            {learnedTechnologiesArr[2].map(({ name, icon }) => (
              <img
                key={ name }
                title={ name }
                src={ icon }
                alt={ name }
              />
            ))}
          </div>
          <div id="mobTechToolsContainer4">
            {learnedTechnologiesArr[3].map(({ name, icon }) => (
              <img
                key={ name }
                title={ name }
                alt={ name }
                src={ icon }
              />
            ))}
          </div>
          <div id="mobTechToolsContainer5">
            {learnedTechnologiesArr[4].map(({ name, icon }) => (
              <img
                key={ name }
                alt={ name }
                title={ name }
                src={ icon }
              />
            ))}
          </div>
        </div>

        <div id="mobLanguages">
          <h3>Advanced English</h3>
          <nav>
            <a href="https://www.britishcouncil.org.br/exame/ielts" target="_blank" rel="noreferrer" id="mobIeltsImgContainer">
              <img src={ logoIelts } alt="Logo IELTS" />
            </a>
          </nav>
          <span>- CEFR level C1</span>
          <span>- Test date: December 2018</span>
          <nav id="mobIeltsCertificate">
            <a href={ certificadoIelts } target="_blank" rel="noreferrer">IELTS Certificate</a>
          </nav>
        </div>
      </article>
    </section>
  );
}

export default MobileToolsAndLanguages;
