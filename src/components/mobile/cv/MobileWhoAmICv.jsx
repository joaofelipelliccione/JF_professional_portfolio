import React from 'react';
import fotoProfissional from '../../../images/foto-profissional.jpeg';
import '../../../styles/mobile/cv/mobileWhoAmICv.css';

function MobileWhoAmICv() {
  return (
    <section id="mobWhoAmI">
      <article id="mobPresentation">
        <img src={ fotoProfissional } alt="Foto do desenvolvedor." />
        <h2>Who am I?</h2>
        <div id="mobPresentationScrollWrapper">
          <p>A 23-year-old men who seeks, daily, the balance between the three most important pillars of life: health, family/friends and professional success. The passion for sports and the focus on achieving professional dreams and goals also defines me.</p>
          <p>Below, I present some elements of my trajectory so far, already anticipating that my thirst for knowledge and my commitment to becoming an increasingly prepared professional have been influencing my choices over the last few years.</p>
        </div>
      </article>
    </section>
  );
}

export default MobileWhoAmICv;
