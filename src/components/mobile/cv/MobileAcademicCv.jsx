import React from 'react';
import historicoPuc from '../../../certificates/historico-final-puc.pdf';
import hertsResults from '../../../certificates/herts_results.pdf';
import certificadoTeresiano from '../../../certificates/teresiano1.pdf';
import '../../../styles/mobile/cv/mobileAcademicCv.css';

function MobileAcademicCv() {
  return (
    <section id="mobAcademicBackground">
      <h2>Formação Acadêmica</h2>

      <div id="mobAbContainer1">
        <div id="mobAdmPuc">
          <h3 className="mobAbEachTitle">
            Administração de Empresas c/ Domínio Adicional em Empreendedorismo
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">PUC-Rio</span>
          </h3>
          <div className="mobAbContent">
            <span>- Formado no final de 2021</span>
            <span>- CR acumulado em 9,67</span>
            <a href={ historicoPuc } target="_blank" rel="noreferrer" className="mobAbContentLinks">Espelho do Histórico</a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="mobAbContentLinks">Diploma ADM</a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="mobAbContentLinks">Diploma Empreendedorismo</a>
          </div>
        </div>

        <div id="mobTrybe">
          <h3 className="mobAbEachTitle">
            Curso Profissionalizante em Desenvolvimento de Software WEB
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">Trybe</span>
          </h3>
          <div className="mobAbContent">
            <span>- Previsão de Formatura para junho de 2022</span>
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer" className="mobAbContentLinks">Website da Escola</a>
          </div>
        </div>
      </div>

      <div id="mobAbContainer2">
        <div id="mobHertsExchange">
          <h3 className="mobAbEachTitle">
            Intercâmbio Acadêmico
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">University of Hertfordshire</span>
          </h3>
          <div className="mobAbContent">
            <span>
              - Realização do 6° período da graduação em Administração de Empresas da PUC-Rio, na University of Hertfordshire.
            </span>
            <a href={ hertsResults } target="_blank" rel="noreferrer" className="mobAbContentLinks">
              <em>Notification of Results</em>
            </a>
          </div>
        </div>

        <div id="mobTeresiano">
          <h3 className="mobAbEachTitle">
            Ensino Fundamental e Médio
            <span className="mobAbPipe"> | </span>
            <span className="mobAbInstitution">Colégio Teresiano</span>
          </h3>
          <div className="mobAbContent">
            <span>- Formado em 2016.</span>
            <a href={ certificadoTeresiano } target="_blank" rel="noreferrer" className="mobAbContentLinks">Certificado de Conclusão</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAcademicCv;
