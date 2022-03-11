import React from 'react';
import certificadoHashExcel from '../../../certificates/certificado-hashtag-excel.pdf';
import certificadoHashVba from '../../../certificates/certificado-hashtag-vba.pdf';
import certificadoHashPowerBi from '../../../certificates/certificado-hashtag-power_bi.pdf';
import learnedTechnologiesArr from '../../../data/learned_technologies';
import logoIelts from '../../../images/logo-ielts.png';
import certificadoIelts from '../../../certificates/certificado-IELTS.pdf';
import '../../../styles/desktop/cv/toolsAndLanguages.css';

function ToolsAndLanguages() { // tAndL --> Tools and Languages
  const CERTIFICADO_HASHTAG = 'Certificado Hashtag Treinamentos';

  return (
    <section id="toolsAndLanguages">
      <h2>Ferramentas e Idiomas</h2>

      <article id="tAndLContainer">
        <div id="OfficePackage">
          <h3>Pacote MS Office</h3>

          <div className="eachTool">
            Excel Avançado
            <span className="tAndLPipe"> | </span>
            <nav className="hashtagCertificateContainer">
              <a href={ certificadoHashExcel } target="_blank" rel="noreferrer" className="hashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="eachTool">
            VBA Avançado
            <span className="tAndLPipe"> | </span>
            <nav className="hashtagCertificateContainer">
              <a href={ certificadoHashVba } target="_blank" rel="noreferrer" className="hashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
          <div className="eachTool">
            Power BI Avançado
            <span className="tAndLPipe"> | </span>
            <nav className="hashtagCertificateContainer">
              <a href={ certificadoHashPowerBi } target="_blank" rel="noreferrer" className="hashtagCertificate">{CERTIFICADO_HASHTAG}</a>
            </nav>
          </div>
        </div>

        <div id="techTools">
          <h3>Programação | Tech</h3>
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
        </div>

        <div id="languages">
          <h3>Inglês Avançado</h3>
          <nav>
            <a href="https://www.britishcouncil.org.br/exame/ielts" target="_blank" rel="noreferrer" id="ieltsImgContainer">
              <img src={ logoIelts } alt="Logo IELTS" />
            </a>
          </nav>
          <span>- CEFR level C1</span>
          <span>- Data de realização do Exame: dezembro de 2018</span>
          <nav id="ieltsCertificate">
            <a href={ certificadoIelts } target="_blank" rel="noreferrer">Certificado IELTS</a>
          </nav>
        </div>
      </article>
    </section>
  );
}

export default ToolsAndLanguages;
