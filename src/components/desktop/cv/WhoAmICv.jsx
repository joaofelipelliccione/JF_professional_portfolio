import React from 'react';
import fotoProfissional from '../../../images/foto-profissional.jpeg';
import '../../../styles/desktop/cv/whoAmICv.css';

function WhoAmICv() {
  return (
    <section id="whoAmI">
      <article id="presentation">
        <img src={ fotoProfissional } alt="Foto do desenvolvedor." />
        <h2>Who am I?</h2>
        <p>A 23-year-old men who seeks, daily, the balance between the three most important pillars of life: health, family/friends and professional success. The passion for sports and the focus on achieving professional dreams and goals also defines me.</p>
        <p>Below, I present some elements of my trajectory so far, already anticipating that my thirst for knowledge and my commitment to becoming an increasingly prepared professional have been influencing my choices over the last few years.</p>
      </article>
    </section>
  );
}

export default WhoAmICv;
