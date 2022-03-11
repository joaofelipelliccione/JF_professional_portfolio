import React from 'react';
import fotoProfissional from '../../../images/foto-profissional.jpeg';
import '../../../styles/desktop/cv/whoAmICv.css';

function WhoAmICv() {
  return (
    <section id="whoAmI">
      <article id="presentation">
        <img src={ fotoProfissional } alt="Foto do desenvolvedor." />
        <h2>Quem sou eu?</h2>
        <p>Um carioca de 23 anos que busca, cotidianamente, o equilíbrio entre os três pilares mais importantes da vida: saúde, família/amigos e sucesso profissional. A paixão por esportes e o foco voltado à realização de sonhos e objetivos profissionais, também me definem.</p>
        <p>Abaixo, apresento alguns elementos da minha trajetória até aqui, já antecipando que minha sede por conhecimento e meu empenho em me tornar uma pessoa cada vez mais preparada para trabalhar em equipes diversas, cujo principal objetivo seja a resolução de problemas, vêm influenciando minhas escolhas ao longo dos últimos anos.</p>
      </article>
    </section>
  );
}

export default WhoAmICv;
