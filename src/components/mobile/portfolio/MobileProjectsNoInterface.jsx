import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/mobile/portfolio/mobileProjectsNoInterface.css';

function MobileProjectsNoInterface() {
  const [currentOpenCard, setCurrentOpenCard] = React.useState('');

  const withoutInterface = useSelector((state) => state.reducer.projectsData.withoutInterface);

  const onClickProjectCard = ({ target }) => {
    if (target.id === '') {
      setCurrentOpenCard(target.parentElement.id);
    } else {
      setCurrentOpenCard(target.id);
    }
  };

  return (
    <section id="mobProjectsWithoutInterface">
      <h2>Projects without Interface</h2>
      <div
        id="mobProjectsWithoutIntContainer"
      >
        {withoutInterface.map(({ id, title, skills, description, timeInProg, URL }) => (
          <div
            key={ id }
            id={ id }
            className="eachMobProjectWithoutIntCard"
            style={ { transform: currentOpenCard === id && 'rotateY(180deg)' } }
            onClick={ (e) => onClickProjectCard(e) }
            role="button"
            tabIndex={ 0 }
            onKeyDown={ (e) => onClickProjectCard(e) }
          >
            <div
              id={ id }
              className="eachMobProjectWithoutIntCardFront"
              onClick={ (e) => onClickProjectCard(e) }
              role="button"
              tabIndex={ 0 }
              onKeyDown={ (e) => onClickProjectCard(e) }
            >
              <h3>{ title }</h3>
              <h4>{`Use of ${skills}`}</h4>
            </div>
            <div id="eachMobProjectWithoutIntCardBack">
              <p id="mobNoInterfaceProjectDescription">{ description }</p>
              <p id="mobNoInterfaceTimeInProg">{`Time since I started coding: ${timeInProg}`}</p>
              <a href={ URL } target="_blank" rel="noreferrer">Check the code!</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileProjectsNoInterface;
