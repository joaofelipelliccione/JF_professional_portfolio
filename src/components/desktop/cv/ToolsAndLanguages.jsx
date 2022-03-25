import React from 'react';
import certificadoHashExcel from '../../../certificates/certificado-hashtag-excel.pdf';
import certificadoHashVba from '../../../certificates/certificado-hashtag-vba.pdf';
import certificadoHashPowerBi from '../../../certificates/certificado-hashtag-power_bi.pdf';
import learnedTechnologiesArr from '../../../data/learned_technologies';
import logoIelts from '../../../images/logo-ielts.png';
import certificadoIelts from '../../../certificates/certificado-IELTS.pdf';
import '../../../styles/desktop/cv/toolsAndLanguages.css';

function ToolsAndLanguages() { // tAndL --> Tools and Languages
  const CERTIFICADO_HASHTAG = 'Hashtag Treinamentos Certificate';

  return (
    <section id="toolsAndLanguages">
      <h2>Tools & Languages</h2>

      <article id="tAndLContainer">
        <div id="OfficePackage">
          <h3>MS Office</h3>

          <div className="eachTool">
            Advanced Excel
            <span className="tAndLPipe"> | </span>
            <nav className="hashtagCertificateContainer">
              <a href={ certificadoHashExcel } target="_blank" rel="noreferrer" className="hashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="eachTool">
            Advanced VBA
            <span className="tAndLPipe"> | </span>
            <nav className="hashtagCertificateContainer">
              <a href={ certificadoHashVba } target="_blank" rel="noreferrer" className="hashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="eachTool">
            Advanced Power Bi
            <span className="tAndLPipe"> | </span>
            <nav className="hashtagCertificateContainer">
              <a href={ certificadoHashPowerBi } target="_blank" rel="noreferrer" className="hashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
        </div>

        <div id="techTools">
          <h3>Programming | Tech</h3>
          <div id="techToolsContainer1">
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
          <div id="techToolsContainer2">
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
          <div id="techToolsContainer3">
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
          <div id="techToolsContainer4">
            {learnedTechnologiesArr[3].map(({ name, icon, width }) => (
              <img
                key={ name }
                alt={ name }
                title={ name }
                src={ icon }
                width={ width }
              />
            ))}
          </div>
        </div>

        <div id="languages">
          <h3>Advanced English</h3>
          <nav>
            <a href="https://www.britishcouncil.org.br/exame/ielts" target="_blank" rel="noreferrer" id="ieltsImgContainer">
              <img src={ logoIelts } alt="Logo IELTS" />
            </a>
          </nav>
          <span>- CEFR level C1</span>
          <span>- Test date: December 2018</span>
          <nav id="ieltsCertificate">
            <a href={ certificadoIelts } target="_blank" rel="noreferrer">IELTS Certificate</a>
          </nav>
        </div>
      </article>
    </section>
  );
}

export default ToolsAndLanguages;
