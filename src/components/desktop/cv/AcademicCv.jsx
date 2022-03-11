import React from 'react';
import historicoPuc from '../../../certificates/historico-final-puc.pdf';
import hertsResults from '../../../certificates/herts_results.pdf';
import certificadoTeresiano from '../../../certificates/teresiano1.pdf';
import '../../../styles/desktop/cv/academicCv.css';

function AcademicCv() { // aB --> "Academic Background"
  return (
    <section id="academicBackground">
      <h2>Formação Acadêmica</h2>

      <div id="aBContainer1">
        <div id="admPuc">
          <h3 className="aBEachTitle">
            Administração de Empresas c/ Domínio Adicional em Empreendedorismo
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">PUC-Rio</span>
          </h3>
          <div className="aBContent">
            <span>- Formado no final de 2021</span>
            <span>- CR acumulado em 9,67</span>
            <a href={ historicoPuc } target="_blank" rel="noreferrer" className="aBContentLinks">Espelho do Histórico</a>
            <a href="#" target="_blank" rel="noreferrer" className="aBContentLinks">Diploma ADM</a>
            <a href="#" target="_blank" rel="noreferrer" className="aBContentLinks">Diploma Empreendedorismo</a>
          </div>
        </div>

        <div id="trybe">
          <h3 className="aBEachTitle">
            Curso Profissionalizante em Desenvolvimento de Software WEB
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">Trybe</span>
          </h3>
          <div className="aBContent">
            <span>- Previsão de Formatura para junho de 2022</span>
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer" className="aBContentLinks">Website da Escola</a>
          </div>
        </div>
      </div>

      <div id="aBContainer2">
        <div id="hertsExchange">
          <h3 className="aBEachTitle">
            Intercâmbio Acadêmico
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">University of Hertfordshire</span>
          </h3>
          <div className="aBContent">
            <span>
              - Realização do 6° período da graduação em Administração de Empresas da PUC-Rio, na University of Hertfordshire.
            </span>
            <a href={ hertsResults } target="_blank" rel="noreferrer" className="aBContentLinks">
              <em>Notification of Results</em>
            </a>
          </div>
        </div>

        <div id="teresiano">
          <h3 className="aBEachTitle">
            Ensino Fundamental e Médio
            <span className="aBPipe"> | </span>
            <span className="aBInstitution">Colégio Teresiano</span>
          </h3>
          <div className="aBContent">
            <span>- Formado em 2016.</span>
            <a href={ certificadoTeresiano } target="_blank" rel="noreferrer" className="aBContentLinks">Certificado de Conclusão</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicCv;
