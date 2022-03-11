import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Typist from 'react-typist';
import MobileHeaderPortHambBtn from './MobileHeaderPortHambBtn';
import MobHeaderPortHambContent from './MobHeaderPortHambContent';
import '../../../styles/mobile/portfolio/mobileHeaderPortfolio.css';

function MobileHeaderPortfolio() {
  const [isHambContentOpen, setIsHambContentOpen] = React.useState(false);

  return (
    <header id="portPageMobileHeader">
      <div id="portPageMobHeaderContainer">
        <MobileHeaderPortHambBtn
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />
        <LinkScroll
          to="mobileProjectsWithInterface"
          smooth
          duration={ 600 }
          onClick={ () => setIsHambContentOpen(false) }
        >
          <Typist cursor={ { hideWhenDone: true, hideWhenDoneDelay: 2000, blink: true } }>
            Portfólio
            <Typist.Backspace count={ 9 } delay={ 2100 } />
            Projetos Desenvolvimento Web
            <Typist.Backspace count={ 28 } delay={ 2100 } />
            Portfólio Tech
          </Typist>
        </LinkScroll>
      </div>
      {isHambContentOpen
        && <MobHeaderPortHambContent
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />}
    </header>
  );
}

export default MobileHeaderPortfolio;
